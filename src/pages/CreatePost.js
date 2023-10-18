import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
function CreatePost({IsAuth}) {
  let navigate = useNavigate("")
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const postCollectionsRef = collection(db, "posts")

  const createPost = async () => {
    await addDoc(postCollectionsRef, {
      title,
      content,
      author : {name: auth.currentUser.displayName , id: auth.currentUser.uid,},
    })
    navigate("/")
  }
  useEffect(() => {
    if (!IsAuth) {
      
      navigate("/login")
    }
  }, [])
 
  

  return (
    <div className="CreatePostPage">
      <Form className="div-center">
        <h1>Create a new post</h1>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows="1"
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginTop: 16 }}
          placeholder="Post title"
        />
        <br />
        <Form.Label>Text</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows="8"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post content"
        />
        <Button onClick={createPost} variant="success">Create Post</Button>
      </Form>
    </div>
  );
}

export default CreatePost;
