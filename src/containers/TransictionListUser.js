import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTransictionUser} from '../store/actions/transiction';
import TransictionItemUser from '../components/TransictionItemUser';

class TransictionListUser extends Component{
   componentDidMount(){
       this.props.fetchTransictionUser(this.props.id);
   }
   render(){
       const {transiction }= this.props;
       let transictionList = transiction.map(t =>{
           return (
            <TransictionItemUser key={t._id} withdraw={t.withdraw} deposit={t.deposit} />
           )
        }
       );
       return (
        <div className="row col-sm-7">
        <div className="offset-1 col-sm-11">
            <ul className="list-group" id="transictionMain">
                <h1>All Transictions</h1>
               {transictionList}
            </ul>
        </div>
        </div>
       )
   }

}

function mapStateToProps(state){
    return{
        transiction:state.transiction,
        id:state.currentUser.user.id
    }
}

export default connect(mapStateToProps ,{fetchTransictionUser})(TransictionListUser);