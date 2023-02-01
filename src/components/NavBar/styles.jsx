import styled from "styled-components";
import Profile from '../../assets/profile.png'

export const Background = styled.div`
    position: absolute;
    background-color: #141414;
    width: 100vw;
    height: 80px;
    box-shadow: 0px 0px 20px #1d1d1d;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BtnSair = styled.button`
    position: absolute;
    border: 1px solid #ffff;
    border-radius: 5px;
    right: 13rem;
    width: 4vw;
    height: 3vh;
    color: #fc0781;
    background-color: #313131;
`

export const BtnVideo = styled.button`
    position: absolute;
    border: 1px solid #ffff;
    border-radius: 5px;
    right: 20rem;
    width: 8vw;
    height: 3vh;
    color: white;
    background-color: #313131;
`

export const LogoImage = styled.img`
    position: relative;
    right: 320px;
    top: -28px;
    width: 40px;
    height: 40px;
`

export const LogoImageName = styled.img`
    position: relative;
    top: 2px;
    right: 320px;
    width: 100px;
    height: 100px;
`
export const DefaultProfile = styled.img`
    position: relative;
    width: 55px;
    height: 55px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    left: 340px;
`

export const ProfilePhoto = styled.img`
    position: relative;
    width: 55px;
    height: 55px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    border: 4px solid #ff2b99;
    left: 330px;
`

export const SearchBar = styled.input`
    position: relative;
    width: 30rem;
    height: 35px;
    border-radius: 30px;
    right: 70px;
    padding: 0px 10px;
    background-image: url('../../assets/search.png') ;
    background-repeat: no-repeat;
    background-position: 10px 10px;
    background-color: #2b2b2b;
    border: solid 2px #2b2b2b ;
    color: #b7b7b7;
    font-size: 18px;
    :focus{
        outline: none;
        transition: 0.5s;
        box-shadow: 0 0 10px -2px #ff92db;
    }

`