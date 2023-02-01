import { React } from "react";
import { useState } from "react";
import { HamburguerMenu } from "./styles";


export function Hamburguer() {

const [active, setMode] = useState(false);
const ToggleMode = () => {
    setMode(!active)  
}

return(
    <HamburguerMenu>
        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
        <div className="hamburguer hamburguerIcon"></div>
        </div>
        <div className={ active ? "menu menuOpen" : "menu menuClosed"}>
            <div className="list">
                <ul className="listItens">
                    <li>Home</li>
                    <li>Melhores videos</li>
                    <li>Mais curtidos</li>
                    <li>About us</li>
                </ul>
            </div>
        </div>
    </HamburguerMenu>
);

}