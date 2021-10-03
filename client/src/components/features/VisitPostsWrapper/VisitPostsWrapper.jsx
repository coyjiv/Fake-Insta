import React, {useEffect} from 'react';
import {getPosts} from "../../../store/visited_page/operations";
import SmallPost from "./SmallPost/SmallPost";
import styles from "./VisitPostsWrapper.module.scss";
import ProfilePostShortcut from "../ProfilePostShortcut/ProfilePostShortcut";

const VisitPostsWrapper = (props) => {
    console.log(props.posts)
    return(
    <div className={styles.wrapper}>
        {typeof props.posts[0]==="object"? props.posts.map((el)=><ProfilePostShortcut
            post={el}
            key={el._id}
        />):null}
        </div>
    );
}

export default VisitPostsWrapper;