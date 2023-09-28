import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const ActionsCount = () => {
    const value = useSelector(state => console.log(state.list))
    return (
        <div className="cards">
            <Card counter={1}/>
            <Card counter={5}/>
            <Card counter={10}/>
            <Card counter={20}/>
        </div>
    )
}

export default ActionsCount