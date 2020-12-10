import React from 'react';
import DefaultImage from '../images/profile.jpg';

const UserAside = props =>{
    const {id ,profileImageUrl , username , Mob_no , address , account_number , account_type ,account_balance , banker  ,transiction_info} = props.user;
    return(
    <div className="card" id="userAside">
           <img src={DefaultImage || profileImageUrl} className="card-img-top" alt="profileImage"/>
           <div className="card-body">
    <h5 className="card-title">Profile</h5>
          </div>
          <ul className="list-group list-group-flush">
             <li className="list-group-item">UserName :{username}</li>
             <li className="list-group-item">Account_Number :{account_number}</li>
             <li className="list-group-item">Account_Type :{account_type}</li>
             <li className="list-group-item">Mobile Number :{Mob_no}</li>
             <li className="list-group-item">Address :{address}</li>
             <li className="list-group-item">Balance :{account_balance}</li>
         </ul>  
    </div>
    );
}

export default UserAside;