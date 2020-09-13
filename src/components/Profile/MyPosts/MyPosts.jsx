import React from "react";
import Post from "./Post/Post";
import p from './MyPosts.module.css'

const MyPosts = () => {

  const postsData = [
    {
      id: 1,
      value: "Hi there!",
      likesCount: 2
    },
    {
      id: 2,
      value: "It's my first post",
      likesCount: 5
    },
    {
      id: 3,
      value: "Press like!",
      likesCount: 102
    }
  ]

  let posts = postsData.map(post => <Post
    id={post.id}
    value={post.value}
    likesCount={post.likesCount}

  />)

  return (
    <div className={p.MyPostsWrapper}>
      <div>
        My post
      </div>
      <textarea name="" id="" cols="30" rows="3"></textarea>
      <div>
        <button>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
