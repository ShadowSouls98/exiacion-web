import React from "react";
import logoImg from "../images/logo.png"
import './styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={logoImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Expiacion</h1>
                            <p>Videojuego VR de Guadalajara</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card