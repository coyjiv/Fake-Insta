import React from 'react';
import { connect } from 'react-redux';
import LikeIcon from '../../../basic/LikeIcon/LikeIcon';
import { AddComment } from '../AddComment/AddComment';
import Comments from '../Comments/Comments';
import styles from "./MainFeedPost.module.scss";

export const MainFeedPost = ({post, username}) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        {/* Author icon && name tag */}
      </header>
      <main className={styles.main}>
        <img className={styles.main__image} src={post.image} alt="Post"/>
      </main>
      <footer className={styles.footer}>
        <section className={styles.footer__actions}>
          <LikeIcon isLiked={post.likes.includes(username)} />
        </section>
        <section className={styles.footer__meta}>
          {/* Author name tag */}
          <span className={styles.footer__description}>:{post.description}</span>
        </section>
        <section className={styles.footer__comments}>
          <Comments comments={post.comments} />
          <AddComment />
        </section>
      </footer>
    </article>
  )
}

const mapStateToProps = (state) => ({
  username: state.user.username
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFeedPost)
