import React from 'react';
import styles from "./GlobalLoader.module.scss";

const GlobalLoader = (props) => {
    return(
            <div className={styles.globalLoader}>
                <div>
                    <img src={props.image} alt="loader image"></img>
                </div>
            </div>
    );
}

export default GlobalLoader;