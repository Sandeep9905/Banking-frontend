import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchTransiction } from '../store/actions/transiction';
import TransictionItem from '../components/TransictionItem';

class TransictionList extends Component{
   componentDidMount(){
       debugger;
       this.props.fetchTransiction(); 
      // this.props.fetchTransictionUser(this.props.id);
   }
   render(){
       debugger;
       const {transiction }=this.props;
       let transictionList = transiction.map(t =>{
           return (
            <TransictionItem key={t._id} date={t.createdAt} withdraw={t.withdraw} deposit={t.deposit} username={t.user.username} profileImageUrl={t.user.profileImageUrl} />
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
    debugger;
    return{
        transiction:state.transiction,
        id:state.currentUser.user.id,
    }
}

export default connect(mapStateToProps ,{fetchTransiction })(TransictionList);