import React from 'react';
import styles from "./Button.module.scss";
const Button = (props) => {
    if (props.isSubscribing){
        return <button className={styles.unaccessableButton} onClick={props.click} disabled> Загрузка <div
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
        return <button className={styles.unsubscibeButton} onClick={props.click}>Отписаться</button>
    }
    else {
        return(

            <button className={styles.button} onClick={props.click}>Подписаться</button>
        );
    }
    }

}

export default Button;