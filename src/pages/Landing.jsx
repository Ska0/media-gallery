import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { getJournals, reset } from "../features/journals/journalSlice";
import JournalItem from "../components/JournalItem";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { journals, isLoading, isError, errorMessage } = useSelector(
    (state) => state.journals
  );

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getJournals());
  }, [user, navigate, isError, errorMessage, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>Welcome, {user.name}.</h1>

        <div className="logout-container">
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </section>

      <section className="content">
        <div className="journals">
          <h2>Your Journals</h2>
          <div className="journals">
            {journals.map((journal) => (
              <JournalItem key={journal._id} journal={journal} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
