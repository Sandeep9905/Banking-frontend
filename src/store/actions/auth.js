import {apiCall ,setTokenHeaders} from '../../services/api';
import {SET_CURRENT_USER} from '../actionTypes';
import {addError ,removeError} from './error';


export function setCurrentUser(user){
    return{
        type:SET_CURRENT_USER,
        user
    };
}

export function logOut(){
  return dispatch =>{
      localStorage.clear();
      dispatch(setCurrentUser({}));
  }
}

export function setAuthorizationToken(token){
    setTokenHeaders(token);
}

export function authUser(type ,userData){
    return dispatch =>{
        return new Promise((resolve , reject)=>{
            return apiCall('post',`/api/auth/${type}`,userData)
            .then(({token , ...user})=>{
                localStorage.setItem("jwtToken",token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
                dispatch(removeError());
                resolve();
            })
            .catch(err =>{
                dispatch(addError(err.message));
                reject();//it will indicate that api call failed
            });
        })
    }
}
