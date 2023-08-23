# GitHub Avatar Viewer

GitHub Avatar Viewer is a React web application that allows users to input a GitHub username and view the corresponding user's avatar. It incorporates debouncing to enhance the user experience and prevent excessive API calls.

## Features

- Input a GitHub username.
- View the user's avatar fetched from the GitHub API.
- Debouncing to optimize API requests and prevent spamming the API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sukomal07/avatar-finder.git
   ```

2. Navigate to the project directory:

   ```bash
   cd avatar-finder
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and access the application at [http://localhost:5173](http://localhost:5173).

## Usage

1. Enter a GitHub username in the input field.

2. The user's avatar will be displayed below the input field.

3. The app uses debouncing, so it will wait for a pause in typing before making the API request to fetch the avatar.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
