import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../../../../store/main_page/operations';
import LikeIcon from '../../../basic/LikeIcon/LikeIcon';
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';
import styles from "./MainFeedPost.module.scss";
import UserLink from "../../Recommendations/UserWrapper/UserLink/UserLink";
import {Link} from "react-router-dom";
import Nickname from "../../../basic/Nickname/Nickname";

export const MainFeedPost = ({post, username, toggleLike, isLoading}) => {
  const [isLikedPost, setIsLikedPost] = useState(post.likes.includes(username));
  const handleLikeClick = () => {
    setIsLikedPost(prev => !prev);
    toggleLike({postId: post._id, username});
  }
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {/* Author icon && name tag */}
        <Link exact to={`/profile/${post.author}`}><UserLink ava={post.image} nick={post.author} addRules={{marginLeft:"15px"}} stylednick={{marginLeft:"15px", fontWeight:600, fontSize:"14px"}}/></Link>
      </header>
      <main className={styles.main}>
        <img
          onDoubleClick={handleLikeClick}
          className={styles.main__image}
          src={post.image}
          alt="Post"
          data-testid="post-image"
        />
      </main>
      <footer className={styles.footer}>
        <section className={styles.footer__actions}>
          <LikeIcon isLiked={isLikedPost} onClick={handleLikeClick} />
        </section>
        <section className={styles.footer__meta}>
          {/* Author name tag */}
            <Link exact to={`/profile/${post.author}`}><Nickname name={post.author} style={{fontWeight:600, fontSize:"14px"}}/></Link>
          <span className={styles.footer__description}> {post.description}</span>
        </section>
        <section className={styles.footer__comments}>
          <Comments comments={post.comments} />
          <AddComment postId={post._id} username={username} />
        </section>
      </footer>
    </article>
  )
}

const mapStateToProps = (state) => ({
  username: state.user.username,
    isLoading:state.mainPage.isLoading
});

export default connect(mapStateToProps, { toggleLike })(MainFeedPost)
