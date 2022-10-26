import React, { useContext, useEffect } from 'react'
import createData from '../context/ContextApi'
import Card from './Card'

export default function GetData() {
    const data = useContext(createData)
    const { getData, state } = data
    const temp = state.temp
    useEffect(() => {
        getData();
    }, [])

    return (
        <> <Card temperature={temp} />
            
        </>
    )
}
