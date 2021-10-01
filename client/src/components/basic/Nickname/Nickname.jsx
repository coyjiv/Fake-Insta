import React from 'react';
import styles from "./Nickname.module.scss";

const Nickname = (props) => (
    <p className={styles.nick}>{props.name}</p>
);

export default Nickname;