import React from "react";
import "./Post.css";

const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <span style={{marginLeft: '50%', fontSize: '22px'}}> ID : {id}</span>
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      <h4 style={{textAlign: 'center', fontWeight: '300'}}>{body}</h4>
    </div>
  );
};

export default Post;