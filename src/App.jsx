import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movie';
import { Contact } from './pages/Contact';
import { AppLayout } from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getMoviesData } from './api/GetApiData';
import { MovieDetails } from './components/UI/MovieDetails';
import { getMovieDetails } from './api/GetMovieDetails';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement : <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/movies',
          element: <Movie />,
          loader: getMoviesData
        },
        {
          path: '/movies/:movieID',
          element: <MovieDetails/>,
          loader: getMovieDetails,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;