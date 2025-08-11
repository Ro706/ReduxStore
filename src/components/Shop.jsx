import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
function Shop() {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  return (
    <div className="container">
        <h1>Deposite/ Withdraw Money</h1>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: 'withdraw', payload: 100 })}>-</button>
      <span>update Balance: Rs.{amount}</span>
      <button className="btn btn-primary mx-2" onClick={() => dispatch({ type: 'deposite', payload: 100 })}>+</button>
    </div>
  )
}

export default Shop
