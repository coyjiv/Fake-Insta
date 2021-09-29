import React from 'react';
import styles from "./SmallPost.module.scss";
import HiddenOverlay from "./HiddenOverlay/HiddenOverlay";

const SmallPost = ({src,likes,comments,imgwidth}) => {


    return(
        <div className={styles.post}>
            <img src={src} width={imgwidth} alt="post image" className={styles.postImage}></img>
            <HiddenOverlay likes={likes} comments={comments}/>
        </div>
    );
}

export default SmallPost;