import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Accueil from './pages/accueil/Accueil';
import Apropos from './pages/apropos/Apropos';
import Location from './pages/location/Location';
import ErrorPage from './pages/error/ErrorPage';

export const router = createBrowserRouter([
  {
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
        path: '/Kasa_online',
        caseSensitive: true,
        element: <Accueil />,
      },

      {
        path: '/apropos',
        caseSensitive: true,
        element: <Apropos />,
      },

      {
        path: '/Kasa_online/location/:id',
        caseSensitive: true,
        element: <Location />,
      },
    ],
  },
]);
