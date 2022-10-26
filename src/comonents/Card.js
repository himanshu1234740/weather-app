import React, { useContext } from 'react'
import Detail from './Detail'
import createData from '../context/ContextApi'
import Spiner from './Spiner'
import './style.css'

export default function Card(props) {
    const data = useContext(createData)
    const { lodings } = data;
    return (
        <>
            <div>
            
                <div className="card text-light"  >
                {lodings && <Spiner />}
                    <div className="card-body text-center">
                        {!(lodings) && <Detail temperature={props.temperature} />}
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}
