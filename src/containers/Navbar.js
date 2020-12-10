import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../store/actions/auth';


class Navbar extends Component{
    logOut = e =>{
        e.preventDefault();
        this.props.logOut();
    }
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                           <img src="" alt="BankingHome"></img>
                        </Link>        
                    </div>
                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <Link to={`/api/user/${this.props.currentUser.user.id}/transiction`} >Deposit Money</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/api/user/${this.props.currentUser.user.id}/transiction/withdraw`} >WithDraw Amount</Link>
                            </li>
                            <li className="nav-item">
                                <a onClick={this.logOut}>Log Out</a>
                            </li>
                        </ul>
                    ):(
                        <ul className="nav justify-content-end">
                          <li className="nav-item active">
                             <Link to="signup">Signup</Link>
                          </li>
                          <li className="nav-item">
                             <Link to="signin">Log In</Link>
                          </li>
                        </ul>
                    )}                              
                </div>
             </nav>
        )
    }
}


function mapStateToProps(state){
   return{
       currentUser: state.currentUser
   }
}

 export default connect(mapStateToProps , {logOut})(Navbar);