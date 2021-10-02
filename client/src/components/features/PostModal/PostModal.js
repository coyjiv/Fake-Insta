import React, { useEffect } from "react";
import classes from "./PostModal.module.scss";
import ScrollLock from "react-scrolllock";

const PostModal = ({ closeModal, post }) => {
  useEffect(() => {}, []);
  return (
    <ScrollLock>
      <div className={classes.modalRoot}>
        <div
          className={classes.closeModal}
          onClick={() => {
            closeModal();
          }}
        >
          <svg
            aria-label="Закрыть"
            class="_8-yf5 "
            color="#ffffff"
            fill="#ffffff"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              clip-rule="evenodd"
              d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className={classes.post}>
          <div className={classes.imageHolder}>
            <img className={classes.image} alt="post" src={post.image} />
          </div>
        </div>
      </div>
    </ScrollLock>
  );
};

export default PostModal;
