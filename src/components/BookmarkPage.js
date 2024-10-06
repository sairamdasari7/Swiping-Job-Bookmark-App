import React from 'react';
import SwipeableJobCard from './SwipeableJobCard';
import '../styles/BookmarkPage.css';

const BookmarkPage = ({ bookmarkedJobs, onRemoveBookmark }) => {
  return (
    <div className="bookmark-container">
      <h2>Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarks available.</p>
      ) : (
        bookmarkedJobs.map((job) => (
          <SwipeableJobCard
            key={job.id}
            job={job}
            onSwipeLeft={() => onRemoveBookmark(job.id)} 
            onSwipeRight={() => {}} 
          />
        ))
      )}
      <a href="/">Back to Job Listings</a>
    </div>
  );
};

export default BookmarkPage;
