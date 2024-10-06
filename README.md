# Job Bookmark App

A Progressive Web Application (PWA) that allows users to browse job cards and bookmark/unbookmark jobs by swiping left or right. It also provides a bottom navigation to switch between the Job List and Bookmark pages.

## Features

- **Swipeable Job Cards**: Swipe right to bookmark jobs and swipe left to unbookmark them.
- **Job & Bookmark Pages**: Two separate views for job listings and bookmarked jobs.
- **Persistent Bookmarks**: Bookmarked jobs stay even after navigating between pages.
- **Smooth User Experience**: No text selection during swiping, and buttons are styled to make interactions smooth and intuitive.
- **Bottom Navigation**: Easily switch between Job List and Bookmark List with a styled bottom navigation bar.


## Installation

Follow these steps to set up and run the application:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sairamdasari7/Swiping-Job-Bookmark-App.git

2. **Navigate to the project directory:**

   ```bash
   cd pwa-jobs-app

3. **Install dependencies:**

   ```bash
   npm install

4. **Start the development server:**

   ```bash
   npm start

  - The app should now be running at http://localhost:3000.

## Usage

### Swiping Functionality

  - Bookmark a Job: Swipe a job card from left to right to add the job to your bookmarks.
  - Unbookmark a Job: Swipe a job card from right to left on the Bookmark Page to remove it from the bookmarks.

### Navigation

  - Use the bottom navigation to switch between the Job List and Bookmark List:

    - Job Tab: Displays all available jobs.
    - Bookmark Tab: Displays only the bookmarked jobs.

### Folder Structure

  - components/: Contains all the reusable components like SwipeableJobCard, Jobs, and BookmarkPage.
  - styles/: Contains the CSS files for styling different components like the Job Cards and Bottom Navigation.

### Technologies Used

  - React: A JavaScript library for building user interfaces.
  - React Router DOM: Handles routing and navigation.
  - CSS3: Styling the components and layout.
  - HTML5: Structuring the page content.

### Future Enhancements

  - Persistent Storage: Add local storage to persist bookmarks between sessions.
  - Improved Styling: Add more dynamic animations and transitions for better user experience.
  - Backend Integration: Connect the app to an API to fetch real jobs.

### Contributing

  - If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

### License

  - This project is licensed under the MIT License. See the LICENSE file for more details.
