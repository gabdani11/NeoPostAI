import React from "react";
import "./card.scss";
import { setPostContent } from "../../../postEditor/postEditor.slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Card = (props) => {
  const dispatch = useDispatch();
  const { item } = props;

  function handleCreatePost() {
    dispatch(setPostContent(item));
  }
  return (
    <div className="card">
      <div className="top">
        <h3>{item.category.primary}</h3>
        <h3>🔥</h3>
      </div>
      <div className="middle">
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
      </div>
      <div className="bottom">
        <h4>{item.hashtags}</h4>
        <button onClick={handleCreatePost}>
          <Link to="/app/post-editor">Create</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
