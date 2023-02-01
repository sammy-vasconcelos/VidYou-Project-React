import React from "react";
import { Background } from "./styles"
import { NavBar } from "../../components/NavBar";
import axios from "../../api/axios";
import { useState } from "react";
import { useEffect } from "react";
import Videos from "../../components/VideosComponent";


export default function Home() {
   
    return (
        <Background>

            <Videos></Videos>
            <NavBar></NavBar>
        </Background>
        
    );
}