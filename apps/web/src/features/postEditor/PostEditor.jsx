import React, { useEffect } from "react";
import "./postEditor.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const PostEditor = () => {
  const user = useSelector((state) => state.auth.user);
  const trend = useSelector((state) => state.postEditor.postContent);
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    if (trend) {
      setPostContent(`${trend.title}\n\n${trend.summary}`);
    } else {
      setPostContent("");
    }
  }, [trend]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  }

  if (!user) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="postEditor">
      <h2 className="heading">Good Evening Alice</h2>
      <p className="subHeading">
        Create engaging posts from the latest trends.
      </p>
      <div className="editContainer">
        <div className="writingContainer">
          <h3>Create Post</h3>
          <div className="inputBox">
            <textarea
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Write your post here..."
            ></textarea>
            <div className="imgContainer">
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />

              <label htmlFor="fileInput">Upload Image</label>
            </div>
          </div>
          <div className="button">
            <button>Save as Draft</button>
            <button>Schedule it!</button>
          </div>
        </div>
        <div className="previewContainer">
          <h3>Post Preview</h3>
          <div className="previewInnerContainer">
            <div className="socialMediaLogo">
              <div className="linkedInIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 128 128"
                >
                  <path d="M0 0h128v128H0z" fill="none" />
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"
                  />
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  />
                </svg>
              </div>
              <div className="instagramIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path d="M0 0h256v256H0z" fill="none" />
                  <g fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#SVGKdMMobCR)"
                      rx="60"
                    />
                    <rect
                      width="256"
                      height="256"
                      fill="url(#SVGqYUiQbXV)"
                      rx="60"
                    />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                    />
                    <defs>
                      <radialGradient
                        id="SVGKdMMobCR"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fd5" />
                        <stop offset=".1" stop-color="#fd5" />
                        <stop offset=".5" stop-color="#ff543e" />
                        <stop offset="1" stop-color="#c837ab" />
                      </radialGradient>
                      <radialGradient
                        id="SVGqYUiQbXV"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="rotate(78.68 -32.69 -16.937)scale(113.412 467.488)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3771c8" />
                        <stop offset=".128" stop-color="#3771c8" />
                        <stop offset="1" stop-color="#60f" stop-opacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </svg>
              </div>
              <div className="twitterIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 128 128"
                >
                  <path d="M0 0h128v128H0z" fill="none" />
                  <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" />
                </svg>
              </div>
            </div>
            <div className="previewTemplates">
              <div className="linkedIntemplate">
                <div className="top">
                  <img
                    className="profileImg"
                    src="https://i.pinimg.com/474x/13/74/20/137420f5b9c39bc911e472f5d20f053e.jpg"
                    alt="profile"
                  />
                  <h3>{user.username}</h3>
                </div>
                <div className="middle">
                  <p>{postContent}</p>
                </div>
                <div className="bottom">
                  {image && (
                    <img src={URL.createObjectURL(image)} alt="uploaded" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
