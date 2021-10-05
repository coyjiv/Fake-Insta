import React from 'react';
import UserWrapper from "./UserWrapper/UserWrapper";
import styles from "./Recommendations.module.scss";
import {connect} from "react-redux";
import {getRecommendations} from "../../../store/user/operations";
import {subscribe} from "../../../store/visited_page/operations";

const Recommendations = (props) => {
if (props.isLoading){
    return null
}

else{
    return(
        <div className={styles.recommendation} style={props.addRules}>
            <h3 className={styles.rec}>{props.heading}</h3>
            <UserWrapper users={props.state.user.recommendations} sub={props.sub}/>
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
    isLoading:state.mainPage.isLoading,
    visitedPage: state.visitedPage,
    usernam: state.user.username,
});
export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);