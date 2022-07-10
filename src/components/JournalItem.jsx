import { useDispatch } from "react-redux";
import { deleteJournal } from "../features/journals/journalSlice";

function JournalItem({ journal }) {
  const dispatch = useDispatch();

  return (
    <div className="journal"
    onClick={() => alert("aha")}
    >
      <div className="journal-header">
      <h2>{journal.title}</h2>
      <button
        onClick={() => dispatch(deleteJournal(journal._id))}
        className="close"
      >
        X
      </button>
      </div>
      <div className="timestamp">Date: {new Date(journal.createdAt).toLocaleString("en-US")}</div>
    </div>
  );
}

export default JournalItem;
