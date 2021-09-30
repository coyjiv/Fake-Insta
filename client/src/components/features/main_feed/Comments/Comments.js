import React, { useState } from 'react';
import styles from "./Comments.module.scss";

export default function Comments({comments}) {
  const [areShown, setAreShown] = useState(false);
  if (!comments.length) return <></>;

  let shownComments = [comments[0]];
  if (areShown) shownComments = [...shownComments, ...comments.slice(1)];

  const shownCommentsElements = shownComments.map((item, index) => (
    <p className={styles.comment} key={index}>
      {/* Author name tag */}
      <span className={styles.comment__text}>: {item.message}</span>
    </p>
  ));

  return (
    <div className={styles.container}>
      {shownCommentsElements}
      {!areShown && <p className={styles.toggler} onClick={() => setAreShown(!areShown)}>Show all</p>}
    </div>
  )
}
