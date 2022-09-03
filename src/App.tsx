import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainContainer, MainContentContainer } from './styled-components/styled-components';
import { Welcome } from './pages/welcome/Welcome';
import { ErrorPage } from './pages/error/Errorpage';
import { FavPickerAcrossGensPage } from './pages/fav-picker-across-gens/fav-picker-single-gen-page';
import { FavPickerAcrossGensForTypePage } from './pages/fav-picker-across-gens-for-type/fav-picker-across-gens-for-type-page';

const App = () => (
  <React.StrictMode>
    <Router>
      <MainContainer>
        <MainContentContainer>
          <Switch>
            <Route exact={true} path="/">
              <Welcome />
            </Route>
            <Route exact={true} path="/pick">
              <FavPickerAcrossGensPage />
            </Route>
            <Route exact={true} path="/pick/:type">
              <FavPickerAcrossGensForTypePage />
            </Route>
            <Route component={ErrorPage} />
          </Switch>
        </MainContentContainer>
      </MainContainer>
    </Router>
  </React.StrictMode>
);

export default App;
