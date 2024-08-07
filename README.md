# Meeting App

A simple React-based web application that allows users to sign up, log in, and track meetings they are signing up for. It uses localStorage for authentication and React Router for routing.

## Features

- **Login**: Users can log in with pre-defined credentials.
- **Signup**: Users can sign up and be redirected to the dashboard.
- **Dashboard**: Authenticated users can add and view meetings.
- **Routing**: Uses React Router for navigating between pages.
- **Authentication**: Simple authentication with localStorage.

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/meeting-app.git
    cd meeting-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```
   Navigate to http://localhost:3000.
   Log in using **user@example.com** and password or sign up using the signup form.
   One logged in, access the dashboard to add and view meetings.

## Project Structure

- `public/`: Contains the static HTML file.
- `src/`: Contains React components and CSS.
  - `components/`: Contains reusable components like Login, Signup, Dashboard, MeetingList, and PrivateRoute.
  - `App.js`: Main application component with routing.
  - `App.css`: Styles for the application.

## Components

- **Login.js**: Handles user login.
- **Signup.js**: Handles user signup.
- **Dashboard.js**: A protected page where users can add and view meetings.
- **MeetingList.js**: Displays a list of meetings.
- **PrivateRoute.js**: A wrapper for protected routes.

