import React, { Component } from 'react';
import axios from 'axios';
import SwipeableJobCard from './SwipeableJobCard';
import '../styles/Jobs.css';

class Jobs extends Component {
  state = {
    jobs: [],
    page: 1,
    isLoading: false,
    notification: '',
  };

  fetchJobs = async (page) => {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const newJobs = response.data.results;
      if (Array.isArray(newJobs)) {
        const validJobs = newJobs.filter(job => job.id && job.title);
        this.setState((prevState) => ({
          jobs: [...prevState.jobs, ...validJobs],
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchJobs(this.state.page);
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
      this.fetchJobs(this.state.page);
    });
  };

  render() {
    const { jobs, isLoading, notification } = this.state;

    return (
      <div className="jobs-container">
        {notification && <div className="notification">{notification}</div>}
        <h2>Job Listings</h2>
        <div>
          {jobs.map((job) => (
            <SwipeableJobCard
              key={job.id}
              job={job}
              onSwipeRight={() => {
                this.props.onBookmark(job); 
                this.setState({ notification: `${job.title} added to bookmarks!` });
              }}
              onSwipeLeft={() => {
                this.setState({ notification: `${job.title} removed from bookmarks!` });
              }}
            />
          ))}
        </div>
        <div className="load-more-container">
          {isLoading ? <p>Loading...</p> : <button onClick={this.handleLoadMore}>Load More</button>}
        </div>
      </div>
    );
  }
}

export default Jobs;
