import React from "react";
import logoImg from "../images/logo.png"

class Card extends React.Component{
    render(){
        return (
        <div>
            <div>
                <h1>Expiacion</h1>
                <h2>Videojuego VR de Guadalajara</h2>
            </div>
            <div>
                <img src={logoImg}/>
            </div>

        </div>)
    }
}

export default Card