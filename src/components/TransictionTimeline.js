import React from 'react';
import TransictionList from '../containers/TransictionList';
import UserAside from './UserAside';
import TransictionListUser from '../containers/TransictionListUser';

const TransictionTimeline = props =>{
    const {currentUser} = props;
    return(
        <div className="row">
            <UserAside {...currentUser}/>
            {props.currentUser.user.banker && (
                <TransictionList/>
            )}
            <TransictionListUser/>
            
        </div>
    );
}

export default TransictionTimeline;
