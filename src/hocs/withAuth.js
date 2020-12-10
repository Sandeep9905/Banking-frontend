import { render } from '@testing-library/react';
import React ,{Component} from 'react';
import {connect} from 'react-redux';

export function withAuth(ComponentToBeRendered){
    class Authenticate extends Component{
       componentDidMount(){
          if(this.props.isAuthenticated === false){
              this.props.history.push("/sigin");
          }
       }
       componentDidUpdate(nextProps){
          if(nextProps.isAuthenticated === false){
              this.props.history.push("/signin");
          }
       }
       render(){
        return(
           <ComponentToBeRendered {...this.props}/>
        ) 
      }
    }


    function mapStateToProps(state){
        return{
            isAuthenticated:state.currentUser.isAuthenticated
        }
    }
    
    return connect(mapStateToProps)(Authenticate);
}