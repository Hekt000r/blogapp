import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { Button } from "react-bootstrap";

function Home({ setAuth }) {
  const [postList, setPostList] = useState([]);
  const postCollectionsRef = collection(db, "posts");
  const [showFull, setShowFull] = useState(false);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionsRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // for each document, creates a new object containing its data and the Document ID
    };

    getPosts();
  });
  return (
    <div className="home-page">
      {postList.map((post) => {
        return (
          <div key={post.id} className="post blog-grid">
            <div className="post-header">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className="post-container">{post.content}</div>

            <h5 className="text-muted">@{post.author.name}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
