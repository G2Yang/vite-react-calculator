import './Calculadora.css';
import { useState } from "react";
import Display from "./Display";
import Teclas from "./Teclas";

function Calculadora() {

    const [display, setDisplay] = useState("");

    function setDisplayValue(value) {
        setDisplay(display + value);
    }

    function handleClick(e) {
        if (e.target.innerText == '=') {
            setDisplay(eval(display));
        } else if (e.target.innerText == 'AC') {
            setDisplay("");
        }
        else {
            setDisplayValue(e.target.innerText);
        }
    }

    return (
        <>
            <div className="calculadora">
                <div>
                    <Display display={display} />
                    <Teclas handleClick={handleClick} />
                </div>
            </div>

        </>
    )
}

export default Calculadora;