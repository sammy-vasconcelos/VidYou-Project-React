import styled from "styled-components";

export const HamburguerMenu = styled.div`
*{
    margin: 0;
    padding: 0;
}

.icon {
    position: absolute;
    z-index: 4;
    left: 1%;
    width: fit-content;
    height: 44px;
    cursor: pointer;
}

.hamburguer{
    bottom: 0px;
    left: 10px;
    width: 30px;
    height: 6px;
    background-color: #F25081;
    position: absolute;
    box-shadow: 0 2px 5px #3c3c3c;
    transition: 0.5s;
}

.hamburguer:before {
    top: -12px;
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    box-shadow: 0 2px 5px #3c3c3c;
    background-color: #F25081;
} 

.hamburguer:after {
    top: 12px;
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background-color: #F25081;
    box-shadow: 0 2px 5px #3c3c3c;
    transition: 0.5s;
} 


.list{
    display: flex;
    flex-direction: column;
    left: 1%;
    padding: 40px 0 0;
    flex-wrap: nowrap;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;;
}

.list .listItens{
    padding: 10px;
    list-style: none;
}
.list .listItens li{
    margin: 40px 8px;
    cursor: pointer;
}
.list .listItens li:hover{
    color: #F25081;
    transition: 0.5s;
}

.icon.iconActive .hamburguer{
    background: transparent;
    box-shadow: 0 2px 5px transparent;
}
.icon.iconActive .hamburguer:after{
    background: white;
    top: 0;
    width: 35px;
    transform: rotate(225deg);
    box-shadow: 0 -2px 5px black;
}
.icon.iconActive .hamburguer:before{
    background: white;
    top: 0;
    width: 35px;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px black;
}
.menu.menuOpen{
    position: absolute;
    width: 200px;
    height: 100vh;
    background: #202020;
    box-shadow: 0px 0px 10px 0px #1b1b1b;
}
.menu.menuClosed {
    display: none;
    width: 0px;
}

`





