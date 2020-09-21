import React from "react";
import Post from "./Post/Post";
import p from './MyPosts.module.css'

const MyPosts = (props) => {

  let posts = props.postItems.map(post => <Post id={post.id} value={post.post} likesCount={post.likesCount} image={post.image} />)


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
