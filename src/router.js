import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Accueil from './pages/accueil/Accueil';
import Apropos from './pages/apropos/Apropos';
import Location from './pages/location/Location';
import ErrorPage from './pages/error/ErrorPage';

export const router = createBrowserRouter([
  {
    basename: '/Kasa_online',
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        caseSensitive: true,
        element: <Accueil />,
      },
      {
        path: '/apropos',
        caseSensitive: true,
        element: <Apropos />,
      },

      {
        path: '/location/:id',
        caseSensitive: true,
        element: <Location />,
      },
    ],
  },
]);
