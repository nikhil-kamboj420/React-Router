# CinemaRouterFlix

## What I Learned
During the development of this project, I gained valuable insights into React Router, including how to implement routing in a React application, manage navigation between different views, and handle dynamic routes effectively.

## Description

CinemaRouterFlix is a thrilling movie project that takes you through an exciting journey of cinematic adventures. The application allows users to explore various movies, view details, and enjoy a seamless navigation experience.

## Features
- **Home Page**: Discover the latest movies and trending titles.
- **About Page**: Learn more about the project and its purpose.
- **Movies Page**: Browse through a collection of movies with detailed information.
- **Contact Page**: Get in touch with the developers for any inquiries.

## Installation
To get started with CinemaRouterFlix, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react_router_01.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react_router_01
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To run the application, use the following command:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## API
CinemaRouterFlix fetches movie data from the [OMDB API](https://www.omdbapi.com/). Make sure to set your API key in the `.env` file:
```
VITE_Movie_API_KEY=your_api_key_here
```

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## Project Structure

The project structure for CinemaRouterFlix is organized as follows:

```
react_router_01/
├── public/
│   ├── images/
│   ├── ...
├── src/
│   ├── api/
│   │   ├── GetApiData.jsx
│   │   ├── GetMovieDetails.jsx
│   ├── assets/
│   │   ├── images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loading.jsx
│   │   ├── UI/
│   │   │   ├── Card.jsx
│   │   │   ├── MovieDetails.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
