import React from 'react';
import DefaultProfileImage from '../images/profile.jpg';

const TransictionItemUser =({profileImageUrl ,withdraw ,deposit})=>(
    <div>
        <li className="list-group-item">
        <img 
            src={profileImageUrl || DefaultProfileImage} 
            alt=""
            width='100' 
            height='100'
            className="timeline-image"
            />
            <div className="transiction-area">
                  <p >Deposit Amount :{deposit}</p>
                  <p>WithDraw Amount: {withdraw}</p>
            </div>
        </li>    
    </div>
)

export default TransictionItemUser;