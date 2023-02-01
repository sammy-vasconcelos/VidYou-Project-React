import React from "react";
import axios from "../../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Area, CardBody, Title, Tumbnail, Date } from "./styles";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/NavBar";


export default function VideosUser() {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    const id = localStorage.getItem("id")

    const getVideos = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/videos')
            const data = response.data.filter(video => video.idUser === id)
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVideos()
    }, [])
    
    return (
        <>
        <Area>
        
            {posts.lenght === 0 ? (<p>carregando...</p>) : (
                posts.map((post) => (
                    <CardBody key={post.id} className="body" onClick={() => navigate(`/videos/`)}>
                        <Tumbnail src={post.tumbnail} className="tumb"></Tumbnail>
                        <Title className="title">{post.title}</Title> <br />
                        <Date className="data">Postado em {post.createdAt.substr(0,10)} </Date>  
                    </CardBody>
                ))
            ) }
        </Area>
        <NavBar></NavBar>
            
      
        </>
    );
}