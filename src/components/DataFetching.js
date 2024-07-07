import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)
  const [idFromBtnClick, setIdFromBtnClick] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromBtnClick]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={() => setIdFromBtnClick(id)}>Get Post</button>
      <h6>{post.title}</h6>
    </div>
  );
}

export default DataFetching;
