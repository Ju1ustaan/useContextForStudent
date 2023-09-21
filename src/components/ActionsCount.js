import React from 'react'
import Card from './Card'
const ActionsCount = ({handleCount}) => {
    return (
        <div className="cards">
            <Card handleCount={handleCount} counter={1}/>
            <Card handleCount={handleCount} counter={5}/>
            <Card handleCount={handleCount} counter={10}/>
            <Card handleCount={handleCount} counter={20}/>
        </div>
    )
}

export default ActionsCount