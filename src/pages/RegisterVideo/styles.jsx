import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(180deg,  #0d0d0d  0%, #303030 100% );
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CloseBtn = styled.img`
    position: absolute;
    padding: 0;
    margin: 0;
    width: 30px;
    height: 30px;
    right: 20px;
    top: 20px;
`

export const Square = styled.div`
    position: relative;
    /* left: 300px; */
    width: 27vw;
    height: 70vh;
    background-color: #202020;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

export const DefaultProfile = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    top: 30px;
`

export const Text = styled.text`
    position: relative;
    font-size: 28px;
    font-weight: 600;
    color: #cbcbcb;
    font-family: 'Roboto', sans-serif;
    top: 20px;
`

export const ForgotPass = styled.text`
    position: relative;
    font-size: 14px;
    padding: 0;
    margin:0;
    top: -35px;
    left: -75px;

    a{
        text-decoration: none;
        color: #fd91b7;
    }
`

export const RegisterText = styled.div`
    position: relative;
    font-size: 14px;
    color: #c3c3c3 ;
    top: 30px;
    a{
        text-decoration: none;
        color: #fd91b7;
    }
`

export const Input = styled.div`
    position: relative;
    width: 250px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px;
    top: -50px;

    .input{
        padding: 10px;
        width: 100%;
        border: 1px solid ;
        background: transparent;
        border-radius: 5px;
        outline: none;
        color: #9b9a9a;
        font-size: 1em;
        transition: 0.5s;
        
    }

    .textbox {
        position: absolute;
        left: 0;
        top: -18px;
        background-color: #202020;
        padding: 2px 6px;
        pointer-events: none;
        font-size: 1em;
        transition: 0.5s;
        color: #9b9a9a;
    }

    .input:valid ~ textbox,
    .input:focus ~ .textbox
    {
        color: #ff148d;
        transform: translateX(10px) translateY(3px);
        font-size: 0.90em;
        padding: 0px 10px;
        left: -10px;
        background-color: #202020;
        border-left: 1px solid #ff148d;
        border-right: 1px solid #ff148d;
    }

    .input:valid,
    .input:focus{
        border: 1px solid #ff148d;
    }
`

export const Button = styled.button`
    position: relative;
    top: -50px;
    padding: 8px 95px;
    left: 15px;
    background-color: #ff148d;
    letter-spacing: 0.1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: #202020;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 16px;
    
`

