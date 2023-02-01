import React from "react";
import { Background, DefaultProfile, Text,Input, Square, Button, CloseBtn } from "./styles";
import Profile from '../../assets/profile.png'
import Close from '../../assets/close.png'
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import axios from "../../api/axios";

export default function RegisterPage() {
    const navigate = useNavigate()
    

    // Axios ____________________________________________________
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState('')
    const [channel, setChannel] = useState('')
    const [profile, setProfile] = useState('')
    // const [token, setToken] = useState('')
    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        if (userRef.current){
           userRef.current.focus() 
        }
    }, [userRef.current]);

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
            const data = {
                name: user,
                channel: channel,
                email: email,
                profile: profile,
                password: pwd
            }
        axios.post('http://localhost:3500/api/register', data,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(function (response) {
            // setAuth({ user, pwd, token });
            setUser('');
            setChannel('');
            setEmail('');
            setProfile('');
            setPwd('');
            setSucess(true);
            // localStorage.setItem('token', response.data.token)
            navigate("/");
            window.location.reload();
        }).catch(function (error) {
            console.log(user, pwd);
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Email or Password!');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Register Failed!');
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
                    <DefaultProfile src={Profile}></DefaultProfile>
                    <CloseBtn src={Close} onClick={() => navigate("/login")}></CloseBtn>
                    <Text>Cadastre-se</Text>

                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit}>
                        <Input>
                        <input type="text" name="email" required="required" className="input" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user}/>
                            <span  className="textbox">Nome</span>
                        </Input>
                        <Input>
                            <input type='text' name="email" required="required" className="input" ref={userRef} onChange={(e) => setChannel(e.target.value)} value={channel}/>
                            <span className="textbox">Nome do Canal</span>
                        </Input>
                        <Input>
                        <input type="text" name="email" required="required" className="input"  ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email}/>
                            <span  className="textbox">Email</span>
                        </Input>
                        <Input>
                        <input type="text" name="email" required="required" className="input"  ref={userRef} onChange={(e) => setProfile(e.target.value)} value={profile} />
                            <span  className="textbox">Foto de perfil</span>
                        </Input>
                        <Input>
                            <input type='password' name="email" required="required" className="input"  ref={userRef} onChange={(e) => setPwd(e.target.value)} value={pwd}/>
                            <span className="textbox">Senha</span>
                        </Input>
                        <Input>
                            <input type='password' name="email" required="required" className="input" />
                            <span className="textbox">Confirmar senha</span>
                        </Input>

                        <Button>
                            Registrar
                        </Button>
                    </form>

                </Square>
            </Background>
        </div>
        )
    );
}

