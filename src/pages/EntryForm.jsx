import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createEntry } from "../features/entries/entrySlice";

function EntryForm() {
  const [titleText, setTitleText] = useState("");
  const [bodyText, setBodyText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createEntry({ title: titleText, body: bodyText }));
    setTitleText("");
    setBodyText("");
  };

  return (
    <>
      <div className="section-header">
        <h1>Create New Entry</h1>
      </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <label className="text-input-label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="entry-title"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
          <label className="text-input-label" htmlFor="body">
            Body
          </label>
          <textarea
            name="body"
            id="entry-body"
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
          />
          <button type="submit" className="create-entry-btn"></button>
        </form>
      </div>
    </>
  );
}

export default EntryForm;
