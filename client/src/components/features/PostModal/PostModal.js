import React, { useEffect, useState } from "react";
import classes from "./PostModal.module.scss";
import ScrollLock from "react-scrolllock";
import Comment from "./Comment/Comment";
import AddComment from "./AddComment/AddComment";
import { connect } from "react-redux";
import LikeIcon from "../../basic/LikeIcon/LikeIcon";
import { likePost } from "../../../store/visited_page/operations";

const PostModal = ({ closeModal, post, username, likePost, image }) => {
  const jsx = post.comments.map((el, index) => (
    <Comment comment={el} key={index} />
  ));
  if (post.description !== "") {
    jsx.unshift(
      <Comment comment={{ author: post.author, message: post.description }} />
    );
  }

  if (jsx.length === 0) {
    jsx.push(<p className={classes.noComments}>No comments yet.</p>);
  }
  return (
    <ScrollLock>
      <div
        className={classes.modalRoot}
        id="modalRoot"
        onClick={(e) => {
          if (e.target.id === "modalRoot") {
            closeModal();
          }
        }}
      >
        <div
          className={classes.closeModal}
          onClick={() => {
            closeModal();
          }}
        >
          <svg
            className="_8-yf5 "
            color="#ffffff"
            fill="#ffffff"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clipRule="evenodd"
              d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className={classes.post}>
          <div
            className={classes.imageHolder}
            onDoubleClick={() => {
              likePost({ postId: post._id, username });
            }}
          >
            <img className={classes.image} alt="post" src={post.image} />
          </div>
          <div className={classes.menu}>
            <div className={classes.header}>
              <img src={image} className={classes.authorImage} alt={"author"} />
              <p className={classes.authorName}>{post.author}</p>
            </div>
            <div className={classes.main}>{jsx}</div>
            <div className={classes.footer}>
              <LikeIcon
                isLiked={post.likes.includes(username)}
                onClick={() => {
                  likePost({ postId: post._id, username });
                }}
              />
              <h3 className={classes.likeAmount}>{post.likes.length} likes</h3>
            </div>
            <div className={classes.comments}>
              <AddComment postId={post._id} username={username} />
            </div>
          </div>
        </div>
      </div>
    </ScrollLock>
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
  image: state.visitedPage.image,
});

export default connect(mapStateToProps, { likePost })(PostModal);
