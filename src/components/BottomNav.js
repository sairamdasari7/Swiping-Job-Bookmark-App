import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/BottomNav.css';

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
        Jobs
      </Link>
      <Link to="/bookmarks" className={location.pathname === '/bookmarks' ? 'active' : ''}>
        Bookmarks
      </Link>
    </div>
  );
};

export default BottomNav;
