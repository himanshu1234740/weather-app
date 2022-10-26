import React from 'react'
import logo from '../img/logo.png'
import './style.css'


export default function Navbar() {
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: 'rgb(0, 178, 255)' }}>
                <div className="container-fluid">
                    <div className="d-flex">
                        <img className="logo" src={logo} alt="..."  />
                        <a className="navbar-brand d-flex" href="#">Open<h2>Weather</h2></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    </div>
                </div>
            </nav>
        </div>
    )
}
