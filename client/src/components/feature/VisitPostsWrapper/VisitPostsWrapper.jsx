import React, {useEffect} from 'react';
import {getPosts} from "../../../store/visited_page/operations";
import SmallPost from "./SmallPost/SmallPost";
import styles from "./VisitPostsWrapper.module.scss";

const VisitPostsWrapper = (props) => {
    const postCol=props.posts;
    return(
    <div className={styles.wrapper}>
        {typeof props.posts[0]==="object"? props.posts.map((el)=><SmallPost
            description={el.description}
            src={el.image}
            likes={el.likes}
            comments={el.comments}
            id={el._id}
            imgwidth={props.imgwidth}
            key={el._id}
        />):null}
        </div>
    );
}

export default VisitPostsWrapper;