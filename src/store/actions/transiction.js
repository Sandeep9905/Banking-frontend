import {apiCall} from '../../services/api';
import {addError} from './error';
import {LOAD_TRANSICTION ,LOAD_TRANSICTION_USER} from '../actionTypes';

 
export const loadTransiction = transiction =>(
     {
        type:LOAD_TRANSICTION,
        transiction
     }
);   

export const loadTransictionUser = transictionUser =>(
   {
      type:LOAD_TRANSICTION_USER,
      transictionUser
   }
);

export const fetchTransictionUser = (id)=>{
   return dispatch =>{
      return apiCall("get",`/api/user/${id}/transiction`)
      .then(res=>{
        dispatch(loadTransictionUser(res))
       })
      .catch(err=>{
        addError(err.message)
      });
   };
};

export const fetchTransiction = ()=>{
   return dispatch =>{
      return apiCall("get","/api/allTransiction")
      .then(res=>{
        dispatch(loadTransiction(res))
       })
      .catch(err=>{
        addError(err)
      });
   };
};


export const postNewTransiction = deposit =>(dispatch , getState)=>{
    let {currentUser} = getState();
    const id = currentUser.user.id;
    return apiCall("post",`/api/user/${id}/transiction`,{deposit})
    .then(res =>{})
    .catch(err => dispatch(addError(err.messages)));
 }

 export const postNewTransictionWithdraw = withdraw =>(dispatch , getState)=>{
   let {currentUser} = getState();
   const id = currentUser.user.id;
   return apiCall("post",`/api/user/${id}/transiction`,{withdraw})
   .then(res =>{})
   .catch(err => dispatch(addError(err.messages)));
}