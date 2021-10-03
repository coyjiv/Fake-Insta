import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/profile/${props.comment.author}`}>
        <img alt="avatar" className={classes.image} src={image} />
      </Link>
      <div className={classes.commentWrap}>
        <p className={classes.message}>
          <Link
            to={`/profile/${props.comment.author}`}
            className={classes.link}
          >
            <span className={classes.author}>{props.comment.author}</span>
          </Link>
          {props.comment.message}
        </p>
      </div>
    </div>
  );
};

export default Comments;
