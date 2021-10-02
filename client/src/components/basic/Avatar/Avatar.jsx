import React from 'react';
import styles from "./Avatar.module.scss";

const Avatar = (props) => {
    return(
        <div className={styles.avaInfo}>
            <img className={styles.avatar} src={props.image} alt="avatar"></img>
        </div>
    );
}

export default Avatar;