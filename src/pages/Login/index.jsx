import React from "react";
import { Background, DefaultProfile, Text,Input, Square, ForgotPass, RegisterText, CloseBtn, BtnLogin, Logado } from "./styles";
import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import Profile from '../../assets/profile.png'
import Close from '../../assets/close.png'
import AuthContext from '../../context/AuthProvider'
import axios from "../../api/axios";




export default function LoginPage(props) {

    const navigate = useNavigate()
   
    //  ____________________________________________________
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [token, setToken] = useState('')
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
                email: user,
                password: pwd
            }
        axios.post('http://localhost:3500/api/userLogin', data,
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(function (response) {
            setAuth({ user, pwd, token });
            setUser('');
            setPwd('');
            setSucess(true);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.user._id);
            console.log(response.data)
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
                setErrMsg('Login Failed!');
            }
            errRef.current.focus();
        });
    }

   // ___________________________________________________________


    



    return (
        <>
        {sucess ? (
            <Logado>
                <h1>Você logou!</h1>
            </Logado>
        ) : (
        <div>
        <Background>
            <Square>
                <DefaultProfile src={Profile}  ></DefaultProfile>
                <CloseBtn src={Close} onClick={() => navigate("/")}></CloseBtn>
                <Text>Entrar</Text>

                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <form onSubmit={handleSubmit}>
                    <Input>
                        <input type="text" name="email" required="required" id='input' className="input" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} />
                        <span  className="textbox">Email</span>
                    </Input>
                    <Input>
                        <input type='password' name="email" required="required" className="input" onChange={(e) => setPwd(e.target.value)} value={pwd} />
                        <span className="textbox">Senha</span>
                    </Input>

                    <ForgotPass><a>Esqueceu a senha?</a></ForgotPass>

                    <BtnLogin >Entrar</BtnLogin>
                </form>
                <RegisterText  >Primeira vez no VidYou? <a onClick={() => navigate("/register")}>Registre-se aqui</a> </RegisterText>
                    
                    
            </Square>
        </Background>
        </div> 
         )}  
        </>
    ) ;

    
}