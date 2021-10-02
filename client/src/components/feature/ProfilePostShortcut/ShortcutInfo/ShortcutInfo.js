import React from "react";
import classes from "./ShortcutInfo.module.scss";

const ShortcutInfo = ({ likes, comments }) => {
  return (
    <div className={classes.info}>
      <div className={classes.propsWrapper}>
        <div className={classes.propsEntity}>
          <span className={`${classes.likeImage} ${classes.image}`}></span>
          <h2 className={classes.propsValue}>{likes.length}</h2>
        </div>
        <div className={classes.propsEntity}>
          <span className={`${classes.commentImage} ${classes.image}`}></span>
          <h2 className={classes.propsValue}>{comments.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShortcutInfo;
