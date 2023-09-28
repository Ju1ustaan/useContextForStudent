import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const StatusCount = () => {
  const dispatch = useDispatch()
  const value = useSelector(state => state.count)

  const removeCount = () => {
    dispatch({type: 'REMOVE_COUNT'})
  }

  const getList = async () => {
    let {data} = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
    dispatch({type: 'FETCH_LIST', data})
  }
  return (
    <div className="wrapper">
      <h3 className="wrapper__title">Итого</h3>
      <p className="wrapper__text">Счетчик {value}</p>
      <button onClick={removeCount}>Очистить</button>
      <button onClick={getList}> Показать список </button>
    </div>
  )
}

export default StatusCount