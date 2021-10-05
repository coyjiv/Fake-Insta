import React from 'react';
import UserWrapper from "../UserWrapper/UserWrapper";
import {connect} from "react-redux";
import {getRecommendations} from "../../../../store/user/operations";
import styles from "./Subscriptions.module.scss";

const Subscriptions = (props) => {
    if (props.isLoading){
        return null
    }

    else{

        return(
            <div className={styles.recommendation} style={props.addRules}>
                <h3 className={styles.rec}>{props.heading}</h3>
                <UserWrapper users={props.state.mainPage.subscribed} sub={props.sub}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendations: (user) => dispatch(getRecommendations(user)),
    }
}
const mapStateToProps = (state) => ({
    state: state,
    isLoading:state.mainPage.isLoading
});


export default connect(mapStateToProps, mapDispatchToProps)(Subscriptions);



