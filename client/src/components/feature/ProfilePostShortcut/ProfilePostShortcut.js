import React, { useState } from "react";
import ShortcutInfo from "./ShortcutInfo/ShortcutInfo";
import classes from "./ProfilePostShortcut.module.scss";

const ProfilePostShortcut = ({ post }) => {
  const [isHovered, setHovered] = useState(false);
  const mouseOver = () => {
    setHovered(true);
  };
  const mouseOut = () => {
    setHovered(false);
  };
  return (
      <div
        className={classes.shortcut}
        onMouseOver={mouseOver}
        onMouseLeave={mouseOut}
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
  );
};

export default ProfilePostShortcut;
