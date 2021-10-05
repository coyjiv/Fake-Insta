import React, { useState } from 'react';
import styles from "./Comments.module.scss";
import Nickname from "../../../basic/Nickname/Nickname";

export default function Comments({comments}) {
  const [areShown, setAreShown] = useState(false);
  if (!comments.length) return <></>;

  const shownComments = areShown ? comments : [comments[0]];

  const shownCommentsElements = shownComments.map((item, index) => (
    <p className={styles.comment} key={index} data-testid="comment">
      {/* Author name tag */}
      <Nickname name={item.author} style={{fontWeight:600}}/>
      <span className={styles.comment__text}>: {item.message}</span>
    </p>
  ));

  return (
    <div className={styles.container}>
      {shownCommentsElements}
      {
        (!areShown && comments.length > 1) &&
        <p
          className={styles.toggler}
          onClick={() => setAreShown(true)}
          data-testid="comment-toggler"
        >
          Show all
        </p>
      }
    </div>
  )
}
