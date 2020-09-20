import React from "react";
import profile from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={profile.item}>
      <img
        src={props.image.src}
        alt={props.image.alt}
        className={profile.avatar}
      />
      {props.post}
      <button className={profile.LikesButton}>{props.likesCount} likes</button>
    </div>
  );
};

export default Post;
