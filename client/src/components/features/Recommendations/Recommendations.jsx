import React from 'react';
import UserWrapper from "./UserWrapper/UserWrapper";
import styles from "./Recommendations.module.scss";
import {connect} from "react-redux";

const Recommendations = (props) => {

if (props.isLoading){
    return null
}

else{
    return(
        <div className={styles.recommendation} style={props.addRules}>
            <h3 className={styles.rec}>{props.heading}</h3>
            <UserWrapper users={props.state.user.recommendations} sub={props.sub} username={props.usernam} subscribed={props.state.user.subscribed}/>
            </div>
    );
}
}

const mapStateToProps = (state) => ({
    state: state,
    isLoading:state.mainPage.isLoading,
    visitedPage: state.visitedPage,
    usernam: state.user.username,
});
export default connect(mapStateToProps, null)(Recommendations);