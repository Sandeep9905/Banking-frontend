import {LOAD_TRANSICTION , LOAD_TRANSICTION_USER} from '../actionTypes';

const transiction = (state =[] , action)=>{
    switch(action.type){
        case LOAD_TRANSICTION_USER:
            return[...action.transictionUser.transiction_info]
        case LOAD_TRANSICTION:
            return [...action.transiction];
        default:
           return state ;   
    }
}

export default transiction;