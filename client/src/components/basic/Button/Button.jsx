import React from 'react';
import styles from "./Button.module.scss";
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
        if (props.isSubscribing){
            return <button className={styles.secondUnaccessableButton} onClick={props.click} disabled> <div
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
                return <button className={styles.secondUnsubscibeButton} onClick={props.click}>Unsubscribe</button>
            }
            else {
                return(

                    <button className={styles.secondButton} onClick={props.click}>Subscribe</button>
                );
            }
        }
    }

}

export default Button;