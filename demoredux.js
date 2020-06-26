const redux = require('redux');
const initialState={
    increment : 0,
    decrement: 0
}
const mainReducer = (prevState=initialState, action)=>{
    if(action.type==='INCREMENT_COUNT_BY_ONE'){
        const updatedState = prevState.increment + 1;
        return{...prevState, increment:updatedState}
    }else if(action.type==='DECREMENT_COUNT_BY_ONE'){
        const updatedState = prevState.decrement - 1;
        return{...prevState, decrement:updatedState}
    }
    return{...prevState}
}
const globalStore = redux.createStore(mainReducer);
globalStore.subscribe(()=>{
    console.log(globalStore.getState());
})
globalStore.dispatch({type:'INCREMENT_COUNT_BY_ONE'})
globalStore.dispatch({type:'INCREMENT_COUNT_BY_ONE'})
globalStore.dispatch({type:'DECREMENT_COUNT_BY_ONE'})
globalStore.dispatch({type:'DECREMENT_COUNT_BY_ONE'})