import React from "react";
import profile from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={profile.item}>
      <img
        src="https://picturepan2.github.io/spectre/img/avatar-2.png"
        alt=""
        className={profile.avatar}
      />
      {props.value}
      <button className={profile.LikesButton}>{props.likesCount} likes</button>
    </div>
  );
};

export default Post;
