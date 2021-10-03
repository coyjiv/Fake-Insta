import React, { useState } from "react";
import ShortcutInfo from "./ShortcutInfo/ShortcutInfo";
import classes from "./ProfilePostShortcut.module.scss";
import PostModal from "../PostModal/PostModal";

const ProfilePostShortcut = ({ post }) => {
  const [isHovered, setHovered] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const mouseOver = () => {
    setHovered(true);
  };
  const mouseOut = () => {
    setHovered(false);
  };
  const openHandler = () => {
    setModalStatus(true);
  };
  const closeHandler = () => {
    setModalStatus(false);
  };
  return (
    <>
      <div
        className={classes.shortcut}
        onMouseOver={mouseOver}
        onMouseLeave={mouseOut}
        onClick={openHandler}
      >
        <img
          className={classes.shortcutImage}
          src={post.image}
          alt="shortcut"
        ></img>
        {isHovered && (
          <ShortcutInfo likes={post.likes} comments={post.comments} />
        )}
      </div>
      {modalStatus && <PostModal post={post} closeModal={closeHandler} />}
    </>
  );
};

export default ProfilePostShortcut;
