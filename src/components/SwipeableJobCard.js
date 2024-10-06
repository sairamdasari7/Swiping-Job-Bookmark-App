import React from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/SwipeableJobCard.css';

const SwipeableJobCard = ({ job, onSwipeRight, onSwipeLeft }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwipeLeft(),
    onSwipedRight: () => onSwipeRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="job-card">
      <div className="job-content">
        <h3>{job.title || 'No title available'}</h3>
        <p>Location: {job.primary_details?.Place || 'No location provided'}</p>
        <p>Salary: {job.primary_details?.Salary || 'No salary information'}</p>
        <p>Phone: {job.primary_details?.Phone || 'No phone number available'}</p>
      </div>
    </div>
  );
};

export default SwipeableJobCard;
