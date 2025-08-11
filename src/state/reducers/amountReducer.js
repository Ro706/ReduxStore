export default reducer =(state=0,action)=>{
    if(action.type == 'desposite'){
        return state + action.payload
    }
    else if(action.type == 'withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}