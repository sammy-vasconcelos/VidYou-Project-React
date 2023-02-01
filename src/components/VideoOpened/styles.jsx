import styled from "styled-components";

export const Area = styled.div`
    position: absolute;
    background-color: #292929;
    gap: 40px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .iframe{
        position: relative;
        width: 980px;
        height: 490px;
        top: -10px;
        left: -235px;
    }
`
export const CardBody = styled.div`
    position: absolute;
    top: 115px;
    max-width: 250px;
    max-height: 700px;
    left: 70rem;
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
    background-color: #111111;
    box-shadow: 0px 5px 10px #1d1b1b;
    display: block;
    cursor: pointer;
    word-wrap: break-word;
    
`

export const ProfilePhoto = styled.img`
    position: absolute;
    width: 55px;
    height: 55px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    top: 42rem;
    border-radius: 50%;
    border: 4px solid #ff2b99;
    left: 60px;
`

export const Title = styled.text`
    position: absolute;
    color: #ffffff ;
    top: 620px;
    left: 50px;
    margin: 10px;
    font-size: 22px;
    font-weight: 900;
    text-transform: uppercase;
`
export const Description = styled.text`
    position: relative;
    color: #ffffff ;
    /* top: 34rem; */
    /* left: rem; */
    font-size: 18px;
`
export const Channel = styled.text`
    position: absolute;
    color: #ffffff ;
    top: 42rem;
    margin: 10px;
    left: 120px;
    font-size: 24px;
    font-weight: 600;
    
`

export const Date = styled.text`
    position: relative;
    color: #ffffff ;
    top: 370px;
    margin: 10px;
    left: -160px;
    font-size: 14px;
    font-weight: 400;
    
`