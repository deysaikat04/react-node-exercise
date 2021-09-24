import React, { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:4000";

const News = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${URL}/loadImage`)
      .then((res) => {
        setList(res.data);
        setError('');
      })
      .catch((err) => {
        setError(err.message);
        setList([]);
      });
  }, []);

  return (
    <div>
      <h4>News</h4>
      {error && <p>{error}</p>}
      {list.length !== 0 &&
        list.map((item) => {
          return <div key={item.id}> 
              <img src={item.path} alt="Sample news" />
              <p>{item.description}</p>
          </div>;
        })}
    </div>
  );
};

export default News;
