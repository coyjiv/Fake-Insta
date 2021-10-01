import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../../../../store/main_page/operations';
import styles from "./AddComment.module.scss";

export const AddComment = ({postId, username, saveComment}) => {
  const [comment, setComment] = useState("");
  const [disabled, setDisabled] = useState(true);

  const onTextAreaChange = (event) => {
    event.target.style.height = "16px";
    event.target.style.height = (event.target.scrollHeight)+"px";

    setDisabled(!comment.trim().length);
    setComment(event.target.value);
  }

  const onSubmit = async () => {
    if (!comment.trim().length) return;
    setDisabled(true);
    setComment("");
    await saveComment({postId, username, message: comment});
  }

  return (
    <div className={styles.container}>
      <svg color="#262626" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
        <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4
        3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
        <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8
        0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2
        0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7
        2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
      </svg>
      <textarea className={styles.textarea} onChange={onTextAreaChange} value={comment} placeholder="Add comment..."/>
      <button className={styles.submit} disabled={disabled} style={comment.trim().length ? {opacity: 1} : {}} onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default connect(null, {saveComment})(AddComment)
