import React from 'react';
import {Link} from 'react-router-dom';
import TransictionTimeline from './TransictionTimeline';


const HomePage = ({currentUser}) =>{
    if(!currentUser.isAuthenticated){
        return(
            <div className="home-hero">
                 <h1>what's Happening!</h1>
                 <h4>New To Banking System</h4>
                 <Link to="/signup" className="btn btn-primary">Sign up Here</Link>
            </div>
        )
    }
    return(
        <div>
            <TransictionTimeline currentUser={currentUser} />
        </div>
    );
}

export default HomePage;