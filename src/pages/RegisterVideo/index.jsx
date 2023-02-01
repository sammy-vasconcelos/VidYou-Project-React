import React from "react";
import { Background, DefaultProfile, Text,Input, Square, Button, CloseBtn } from "./styles";
import Profile from '../../assets/profile.png'
import Close from '../../assets/close.png'
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import api from "../../api/axios";

export default function RegisterVideo() {
    const navigate = useNavigate()
    
    // Axios ____________________________________________________
    const userRef = useRef()
    const errRef = useRef()
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [videoUrl, setVideoUrl] = useState('')
    const [tumbnail, setTumbnail] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);
    

    useEffect(() => {
        setErrMsg('');
    }, [title, desc, videoUrl, tumbnail]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const idUser = localStorage.getItem('id')
        const data = {
            title: title,
            description: desc,
            linkVideo: videoUrl,
            tumbnail: tumbnail,
            idUser: idUser
        }
            
        api.post('http://localhost:3500/api/video', data, `Bearer ${token}`,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(function (response) {
            setTitle('');
            setDesc('');
            setVideoUrl('');
            localStorage.setItem("idVideo", response.data._id)
            setTumbnail('');
            setSucess(true);
            navigate("/");
            window.location.reload();
        }).catch(function (error) {
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing informations!');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Video upload Failed!');
            }
            errRef.current.focus();
        });
    }
//__________________________________________________________________
    

    return (
        sucess ? <p>Conta Criadaaa</p> : (
        <div>
            <Background>
                <Square>
                    {/* <DefaultProfile src={Profile}></DefaultProfile> */}
                    <CloseBtn src={Close} onClick={() => navigate("/")}></CloseBtn>
                    <Text>Upload do Vídeo</Text>

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <Input>
                        <input type="text" name="email" required="required" className="input" ref={userRef} onChange={(e) => setTitle(e.target.value)} value={title}/>
                            <span  className="textbox">Título</span>
                        </Input>
                        <Input>
                            <input type='text' name="email" required="required" className="input" ref={userRef} onChange={(e) => setDesc(e.target.value)} value={desc}/>
                            <span className="textbox">Descrição</span>
                        </Input>
                        <Input>
                        <input type="text" name="email" required="required" className="input"  ref={userRef} onChange={(e) => setVideoUrl(e.target.value)} value={videoUrl}/>
                            <span  className="textbox">Link do Vídeo</span>
                        </Input>
                        <Input>
                        <input type="text" name="email" required="required" className="input"  ref={userRef} onChange={(e) => setTumbnail(e.target.value)} value={tumbnail} />
                            <span  className="textbox">Tumbnail</span>
                        </Input>
                        
                        <Button>
                            Criar Vídeo
                        </Button>
                    </form>

                </Square>
            </Background>
        </div>
        )
    );
}

