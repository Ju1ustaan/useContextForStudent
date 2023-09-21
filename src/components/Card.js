import React from 'react'

const Card = ({counter, handleCount}) => {
    const handleClick = () => {
        handleCount(counter)
    }
    return (
        <div className="card">
            <button onClick={handleClick}>Увеличить счетчик на {counter}</button>
        </div>
    )
}

export default Card