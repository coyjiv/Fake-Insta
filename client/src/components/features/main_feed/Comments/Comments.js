import React, { useState } from 'react';
import styles from "./Comments.module.scss";

export default function Comments({comments}) {
  const [areShown, setAreShown] = useState(false);
  if (!comments.length) return <></>;

  const shownComments = areShown ? comments : [comments[0]];

  const shownCommentsElements = shownComments.map((item, index) => (
    <p className={styles.comment} key={index}>
      {/* Author name tag */}
      <span className={styles.comment__text}>: {item.message}</span>
    </p>
  ));

  return (
    <div className={styles.container}>
      {shownCommentsElements}
      {(!areShown && comments.length > 1) && <p className={styles.toggler} onClick={() => setAreShown(true)}>Show all</p>}
    </div>
  )
}
