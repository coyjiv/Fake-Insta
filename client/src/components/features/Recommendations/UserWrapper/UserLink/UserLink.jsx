import React from 'react';
import styles from "./UserLink.module.scss";
import Nickname from "../../../../basic/Nickname/Nickname";
import Avatar from "../../../../basic/Avatar/Avatar";

const UserLink = (props) => {

    return(
            <div className={styles.container}>
                <Avatar image={props.ava}/>
                <Nickname name={props.nick}/>
            </div>
    );
}

export default UserLink;