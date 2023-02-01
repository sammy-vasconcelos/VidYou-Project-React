import React from "react";
import axios from "../../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Area, CardBody, Title,  Date, Description, ProfilePhoto, Channel } from "./styles";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar";


export default function VideoOpen() {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('olha esse id', id)

    // const getUsers = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:3500/api/user/`)
    //         const data = response.data
    //         console.log(data)
    //         setPosts(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    const getVideos = async () => {
        try {
            const response = await axios.get(`http://localhost:3500/api/videos/${id}`)
            const data = response.data
            const idUser = data.idUser
            const user = await axios.get(`http://localhost:3500/api/user/${idUser}`)
            const userData = user.data
            setPosts(data)
            setUser(userData)
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
            
                {/* <Tumbnail src={posts.tumbnail} className="tumb"></Tumbnail> */}

                <Title className="title">{posts.title}</Title> <br />
                <CardBody key={posts.id} className="body">
                <Description>Descrição: {posts.description}</Description>
                </CardBody>
                <Channel className="data">{user.channel} </Channel> 
                <ProfilePhoto src={user.profile} onClick={() => navigate("/videouser")}></ProfilePhoto>
                {/* <Date className="data">Postado em {posts.createdAt.substr(0,10)} </Date> */}
                <iframe  src={posts.linkVideo} className="iframe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
        </Area>
            
        <NavBar></NavBar>
        </>
    );
}