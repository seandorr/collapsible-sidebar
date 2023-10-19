import React, { useState } from "react";
import "./tag-generator.scss";

export default function TagGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createTagOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.code === "Enter" &&
      inputValue.length > 0 &&
      !tags.includes(inputValue)
    ) {
      setTags((prevTags) => [...prevTags, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="tags-page-container">
      <div className="input-container">
        <label>Create a tag</label>
        <div className="tag-input-container">
          <input
            onChange={handleOnInputChange}
            value={inputValue}
            onKeyDown={createTagOnEnter}
          />
          <button
            onClick={() => {
              if (inputValue.length > 0) {
                if (!tags.includes(inputValue)) {
                  setTags((prevTags) => [...prevTags, inputValue]);
                  setInputValue("");
                }
              }
            }}
            tabIndex={0}
          >
            Create
          </button>
        </div>
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
              <span
                className="close-btn"
                onClick={() => setTags(tags.filter((item) => item !== tag))}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.code === "Enter") {
                    setTags(tags.filter((item) => item !== tag));
                  }
                }}
              >
                x
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
