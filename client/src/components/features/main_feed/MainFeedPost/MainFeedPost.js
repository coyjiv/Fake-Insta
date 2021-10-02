import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../../../../store/main_page/operations';
import LikeIcon from '../../../basic/LikeIcon/LikeIcon';
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';
import styles from "./MainFeedPost.module.scss";

export const MainFeedPost = ({post, username, toggleLike}) => {
  const [isLikedPost, setIsLikedPost] = useState(post.likes.includes(username));

  const handleLikeClick = () => {
    setIsLikedPost(prev => !prev);
    toggleLike({postId: post._id, username});
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {/* Author icon && name tag */}
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
          <span className={styles.footer__description}>: {post.description}</span>
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
  username: state.user.username
});

export default connect(mapStateToProps, { toggleLike })(MainFeedPost)
