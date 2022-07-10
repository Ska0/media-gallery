import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing';
import JournalForm from './pages/JournalForm';
import EntryForm from './pages/EntryForm';
import './stylesheets/App.css';

function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/new_journal" element={<JournalForm />}></Route>
        <Route path="/new_entry" element={<EntryForm />}></Route>
        <Route path="/journal" element={<EntryForm/>}></Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
