import React from 'react'
import { useDispatch } from 'react-redux'

const Card = ({counter}) => {
    const dispatch = useDispatch()

    const handleClickIncr = () => {
        dispatch({type: 'INCREMENT_COUNT', payload: counter})
    }
    const handleClickDecr = () => {
        dispatch({type: 'DECREMENT_COUNT', payload: counter})
    }
    return (
        <div className="card">
            <button onClick={handleClickIncr}>Увеличить счетчик на {counter}</button>
            <button onClick={handleClickDecr}>Уменьшить счетчик на {counter}</button>
        </div>
    )
}

export default Card