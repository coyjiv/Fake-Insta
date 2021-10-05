import React from 'react';
import styles from './Loader.module.scss';
const Loader = (props) => {
    return(
        <div className={styles.container}>
        <div className={styles.circle}></div>
        </div>
    );
}

export default Loader;