import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Comments.module.scss";

const Comments = (props) => {
  const [image, setImage] = useState("");
  useEffect(() => {
    const req = async () => {
      const image = await axios(`/user/${props.comment.author}`);
      setImage(image.data.image);
    };
    req();
  }, []);
  return (
    <div className={classes.comment}>
      <img alt="avatar" className={classes.image} src={image || "/guest.png"} />
      <div className={classes.commentWrap}>
        <p className={classes.message}>
          <span className={classes.author}>{props.comment.author}</span>
          {props.comment.message}
        </p>
      </div>
    </div>
  );
};

export default Comments;
