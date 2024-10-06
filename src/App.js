import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Jobs from './components/Jobs';
import BookmarkPage from './components/BookmarkPage';
import BottomNav from './components/BottomNav';
import './App.css'; 

const App = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  const addBookmark = (job) => {
    setBookmarkedJobs((prev) => [...prev, job]);
  };

  const removeBookmark = (jobId) => {
    setBookmarkedJobs((prev) => prev.filter(job => job.id !== jobId));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Jobs onBookmark={addBookmark} />} />
          <Route path="/bookmarks" element={<BookmarkPage bookmarkedJobs={bookmarkedJobs} onRemoveBookmark={removeBookmark} />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
