import React from 'react';
import styles from "./Avatar.module.scss";

const Avatar = (props) => {
    return(
        <div className={styles.avaInfo} style={props.addR}>
            <img className={styles.avatar} src={props.image} style={props.styledimage} alt="avatar"></img>
        </div>
    );
}

export default Avatar;