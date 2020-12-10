import React ,{Component} from 'react';
import { connect} from 'react-redux';
import {postNewTransictionWithdraw} from '../store/actions/transiction';


class BalanceFormWithdraw extends Component{
    constructor(props){
         super(props);
         this.state = {
             withdraw:''
         }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.postNewTransictionWithdraw(this.state.withdraw);
        this.setState({withdraw:""});
        this.props.history.push("/");
        
    }   
    render(){
        const { withdraw} = this.state;
        const {errors ,history ,removeError} = this.props;
        return(
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            {errors.message && (
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
                           <h2>WithDraw your Money Safely!</h2>
                              <label htmlFor="withdraw">Withdraw Amount:</label>
                              <input className="form-control" 
                                    id="withdraw"
                                    type="Number" 
                                    name="withdraw" 
                                    value={withdraw}
                                    onChange={e => this.setState({withdraw: +e.target.value})}  />
                            <button className="btn btn-primary btn-block btn-lg">
                                        WithDraw here!
                            </button>      
                        </form>
                    </div>
                </div>
                  
              );        
    }
}


function mapStateToProps(state){
    return{
        errors:state.error
    }
}
export default connect(mapStateToProps , {postNewTransictionWithdraw})(BalanceFormWithdraw);