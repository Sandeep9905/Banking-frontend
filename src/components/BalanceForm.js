import React ,{Component} from 'react';
import { connect} from 'react-redux';
import {postNewTransiction} from '../store/actions/transiction';

class BalanceForm extends Component{
    constructor(props){
         super(props);
         this.state = {
             deposit:''
         }
    }

    handleSubmit = e =>{
        e.preventDefault();
        this.props.postNewTransiction(this.state.deposit);
        this.setState({deposit:""});
        this.props.history.push("/");   
    }   
    render(){
        const { deposit} = this.state;
        const {errors ,history ,removeError} = this.props;
        return(
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            {errors.message && (
                                <div className="alert alert-danger">{errors.message}</div>
                            )}
                           <h2>Deposit Unlimited Amount as You Can!</h2>
                              <label htmlFor="withdraw">Deposit Amount:</label>
                              <input className="form-control" 
                                    id="withdraw"
                                    type="Number" 
                                    name="withdraw" 
                                    value={deposit}
                                    onChange={e => this.setState({deposit: +e.target.value})}  />
                            <button className="btn btn-primary btn-block btn-lg">
                                      Deposit here!
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
export default connect(mapStateToProps , {postNewTransiction})(BalanceForm);