import React from 'react';
import styles from "./Nickname.module.scss";

const Nickname = (props) => (
    <div className={styles.nick} style={props.style}>{props.name}</div>
);

export default Nickname;