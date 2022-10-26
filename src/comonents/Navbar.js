import React,{useState,useContext} from 'react'
import logo from '../img/logo.png'
import createData from '../context/ContextApi'
import './style.css'


export default function Navbar() {
    const [state,setState] = useState({
        city: ''
    })
    const data = useContext(createData)
    
    const { getData} = data
    
    const changeCity = (e)=>{
        e.preventDefault()
        getData(state);
    }
    const handleChange = (e)=>{
        setState({...state,[e.target.name]: e.target.value});
    }
       
    
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
                    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Your City" name='city' onChange={handleChange} aria-label="Search"/>
        <button className="btn text-light btn-primary" type="submit" onClick={changeCity} >Search</button>
      </form>
                </div>
            </nav>
        </div>
    )
}
