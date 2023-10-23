import React, { useState } from "react";
import { ErrorModal } from "../ErrorModal";
import { ExitButton } from "../ExitButton";
import "./tag-generator.scss";

export function TagGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(["tags", "are", "awesome"]);
  const [noInputError, setNoInputError] = useState(false);
  const [tagExistsError, setTagExistsError] = useState(false);

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const createTag = () => {
    if (inputValue.length > 0) {
      if (!tags.includes(inputValue)) {
        setTags((prevTags) => [...prevTags, inputValue]);
      } else {
        setTagExistsError(true);
        setNoInputError(false);
      }
    } else {
      setNoInputError(true);
      setTagExistsError(false);
    }
    setInputValue("");
  };

  const createTagOnEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      createTag();
    }
  };

  return (
    <div className="tags-page-container">
      {noInputError && (
        <ErrorModal
          errorMessage="You need to add at least one character in order to create a tag."
          setError={setNoInputError}
        />
      )}
      {tagExistsError && (
        <ErrorModal
          errorMessage="This tag already exists. Try creating a unique tag."
          setError={setTagExistsError}
        />
      )}
      <div className="input-container">
        <label>Create a tag</label>
        <div className="tag-input-container">
          <input
            onChange={handleOnInputChange}
            value={inputValue}
            onKeyDown={createTagOnEnter}
          />
          <button onClick={createTag} tabIndex={0}>
            Create
          </button>
        </div>
      </div>

      <div className="tags-container">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
              <ExitButton
                onClick={() => setTags(tags.filter((item) => item !== tag))}
                onKeyDown={(event: any) => {
                  if (event.code === "Enter") {
                    setTags(tags.filter((item) => item !== tag));
                  }
                }}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
