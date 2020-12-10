import React from 'react';
import {Switch , Route ,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from '../components/HomePage';
import AuthForm from '../components/AuthForm';
import {authUser} from '../store/actions/auth';
import {removeError} from "../store/actions/error";
import {withAuth} from '../hocs/withAuth';
import BalanceForm from '../components/BalanceForm';
import BalanceFormWithdraw from '../components/BalanceFormWithdraw';


const Main = props =>{
    const{authUser ,errors ,removeError ,currentUser} = props;

    return(
        <div className="container">
             <Switch>
                 <Route exact path="/" render = {props => <HomePage currentUser={currentUser} {...props} />} />
                 <Route exact path="/signin" render={props =>{
                     return(
                         <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Log in" heading="Welcome Back" {...props} />
                     );
                 }} />
                 <Route exact path="/signup" render={props =>{
                     return(
                         <AuthForm removeError={removeError} errors={errors} onAuth={authUser} signUp buttonText="Sign me Up" heading="Join Banking System Today" {...props} />
                     );
                 }} />
                <Switch> 
                 <Route path="/api/user/:id/transiction/withdraw" component = {withAuth(BalanceFormWithdraw)}/>   
                 <Route path="/api/user/:id/transiction" component ={withAuth(BalanceForm)}/>
               </Switch>
             </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        errors:state.error
    }
}

export default withRouter(connect(mapStateToProps , {authUser ,removeError})(Main));