import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createJournal } from "../features/journals/journalSlice";

function JournalForm() {
  const [titleText, setTitleText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createJournal({ title: titleText }));
    setTitleText("");
  };

  return (
    <>
    <div className="section-header">
      <h1>Create New Journal</h1>
    </div>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <label className="text- input-label" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="journal-title"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
          <button type="submit" className="create-journal-btn"></button>
        </form>
      </div>
    </>
  );
}

export default JournalForm;
