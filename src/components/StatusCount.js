import React from 'react'

const StatusCount = ({count}) => {
  return (
    <div className="wrapper">
      <h3 className="wrapper__title">Итого</h3>
      <p className="wrapper__text">Счетчик {count}</p>
    </div>
  )
}

export default StatusCount