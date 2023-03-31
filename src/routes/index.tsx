

import Home from '../view/Home'
import PageError from '../view/Error';
import DetailsAnimeView from '../view/DetailsAnimeView';

const router = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: '/anime/:id',
    element: <DetailsAnimeView />
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageError />,
  },
];

export default router;