import React from 'react';
import styles from "./Button.module.scss";
import {connect} from "react-redux";
const Button = (props) => {

    if (props.variation===1){
        if (props.isSubscribing){
            return <button className={styles.unaccessableButton} onClick={props.click} disabled> <div
                className={styles.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>  </button>
        }
        else {
            if(props.isSubscribed){
                return <button className={styles.unsubscibeButton} onClick={props.click}>Unsubscribe</button>
            }
            else {
                return(

                    <button className={styles.button} onClick={props.click}>Subscribe</button>
                );
            }
        }
    }
    else {

            if(props.subscribed.includes(props.user)){
                return <button id={props.id} className={styles.secondUnsubscibeButton} onClick={props.click}>Following</button>
            }

            else {
                return(

                    <button id={props.id} className={styles.secondButton} onClick={props.click}>Follow</button>
                );
            }
        }

}

const mapStateToProps = (state) =>({
    isSubscribing:state.user.isSubscribing,
    subscribed:state.user.subscribed
})
export default connect(mapStateToProps)(Button);