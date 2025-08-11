export  const despositeMoney = (amount) => {
    return  (dispatch)=>{
        dispatch({
            type: 'desposite',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}