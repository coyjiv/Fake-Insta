import React from 'react';
import styles from "./VisitPostsWrapper.module.scss";
import ProfilePostShortcut from "../ProfilePostShortcut/ProfilePostShortcut";

const VisitPostsWrapper = (props) => {
    const noPost = <h1 className={styles.noPost}>This user does not seem to have posts</h1>
    return(
    <div className={typeof props.posts[0]==="object"? styles.wrapper : styles.noPostWrapper}>
        {typeof props.posts[0]==="object"? props.posts.map((el)=><ProfilePostShortcut
            post={el}
            key={el._id}
        />):noPost}
        </div>
    );
}

export default VisitPostsWrapper;