import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input type="file" id="post__img" style={{ display: "none" }} />
          <label className="file__label" htmlFor="post__img">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h2>Category</h2>
          <div className="cat">
            <input type="radio" name="cat" value="recipes" id="recipes" />
            <label htmlFor="recipes">Recipes</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="reviews" id="reviews" />
            <label htmlFor="reviews">Reviews</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="bftm" id="bftm" />
            <label htmlFor="bftm">Best for the Month</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="whiskey" id="whiskey" />
            <label htmlFor="whiskey">Whisk(e)y</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
