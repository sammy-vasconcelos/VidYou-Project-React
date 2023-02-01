import React, { useState, useEffect, useRef, useContext } from "react";
import { Background, BtnSair, BtnVideo, DefaultProfile, LogoImage, LogoImageName, ProfilePhoto, SearchBar } from "./styles";
import  { Hamburguer } from "../MenuHamburguer";
import Logo from '../../assets/logo2.png'
import LogoNome from '../../assets/logonome.svg'
import Profile from '../../assets/profile.png'
import LoginPage from '../../pages/Login/index'
import { useNavigate } from "react-router-dom";
import { logout, isLogged } from "../../utils/auth";
import api from "../../api/axios";



export function NavBar() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const idUser = localStorage.getItem('id')
    const token = localStorage.getItem('token')

   
    const getData = async () => {
        try {
            const response = await api.get(`http://localhost:3500/api/user/${idUser}`, `Bearer ${token}`)
            const data = response.data
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    
    const handleLogout = () => {
        logout()
        navigate("/")
        window.location.reload()
    }

    return (
        <div>
        <Hamburguer/>    
        <Background>
            <a>
            <LogoImage src={Logo} onClick={() => navigate("/")}></LogoImage>
            <LogoImageName src={LogoNome} onClick={() => navigate("/")}></LogoImageName>
            </a>
            <SearchBar placeholder="Buscar..."></SearchBar>
            
            {isLogged ? <BtnSair onClick={handleLogout}>Sair</BtnSair> : null}
            {isLogged ? <BtnVideo onClick={() => navigate("/videoupload")}>Adicionar Vídeo</BtnVideo> : null}
            {/* {isLogged ? <p>{posts.name}</p> : null}      */}
            {isLogged ? <ProfilePhoto src={posts.profile} onClick={() => navigate("/videouser")}></ProfilePhoto> :  
            <DefaultProfile src={Profile} onClick={() => navigate("/login")}></DefaultProfile>}
                    
                
            
            

        </Background>   
        </div>
    );
}