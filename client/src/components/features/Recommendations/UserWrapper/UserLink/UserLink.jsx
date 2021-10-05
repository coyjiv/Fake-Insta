import React, {useEffect, useState} from 'react';
import styles from "./UserLink.module.scss";
import Nickname from "../../../../basic/Nickname/Nickname";
import Avatar from "../../../../basic/Avatar/Avatar";
import axios from "axios";

const UserLink = (props) => {

    const [image, setImage] = useState("/guest.png");
    useEffect(async ()=>{
        const image = await axios(`/user/${props.nick}`);
        setImage(image.data.image);
    })
    return(
            <div className={styles.container} style={props.addRules}>
                <Avatar image={image}/>
                <Nickname name={props.nick} style={props.stylednick}/>
            </div>
    );
}

export default UserLink;