import React, {useEffect} from 'react';
import UserWrapper from "./UserWrapper/UserWrapper";
import styles from "./Recommendations.module.scss";
import {connect} from "react-redux";
import {getRecommendations} from "../../../store/user/operations";

const Recommendations = (props) => {

    return(
        <div className={styles.recommendation}>
            <h3>Рекомендации для вас</h3>
            <UserWrapper users={props.user.recommendations}/>
            </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRecommendations: (user) => dispatch(getRecommendations(user)),
    }
}
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);