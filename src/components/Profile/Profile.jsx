import React from "react";
import profile from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={profile.content}>
      <ProfileInfo />
      <MyPosts postItems={props.postItems} />
    </div>
  );
};

export default Profile;
