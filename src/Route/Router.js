import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import NotFoundPage from '../Views/NotFoundPage';

const RandomDish = lazy(() =>
  import('../Views/RandomDishPage.js' /* webpackChunkName: "random-dish-page" */),
);

const FavoritesPage = lazy(() =>
  import(
    '../Views/FavoritesPage.js' /* webpackChunkName: "favorites-page" */
  ),
);

const Router = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path={routes.home} exact component={RandomDish} />
        <Route path={routes.favorites} component={FavoritesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export default Router;