import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImage from '../images/profile.jpg';

const TransictionItem =({date ,profileImageUrl ,withdraw ,deposit ,username})=>(
    <div>
        <li className="list-group-item">
        <img 
            src={profileImageUrl || DefaultProfileImage} 
            alt={username} 
            width='100' 
            height='100'
            className="timeline-image"
            />
            <div className="transiction-area">
                <Link to="/">@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MM YYYY">
                         {date}
                    </Moment>
                </span>
                  <p >Deposit Amount :{deposit}</p>
                <p>WithDraw Amount: {withdraw}</p>
                
            </div>
        </li>    
    </div>
)

export default TransictionItem;