import styled from "styled-components";

export const Area = styled.div`
    position: absolute;
    background-color: #292929;
    padding-top: 120px;
    padding-bottom: 60px;
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
    .body:hover{
        width: 310px;
        height: 210px;
        transition: 0.5s;
        .tumb{
        width: 290px;
        height: 130px;
        transition: 0.4s;
    }
    }
    
`
export const CardBody = styled.div`
    position: relative;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
    background-color: #f7f7f7;
    box-shadow: 0px 5px 10px #1f1818;
    display: block;
    cursor: pointer;
    
`

export const Title = styled.text`
    position: relative;
    color: #252525 ;
    top: 10px;
    margin: 10px;
    font-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
`

export const Tumbnail = styled.img`
    position: relative;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    width: 280px;
    height: 120px;
`

export const Date = styled.text`
    position: relative;
    color: #252525 ;
    top: 10px;
    margin: 10px;
    font-size: 10px;
    font-weight: 400;
    
`