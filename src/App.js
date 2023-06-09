import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ProductPage from './content/ProductPage';
import CustomerPage from './content/CustomerPage';
import StrategyPage from './content/StrategyPage';
import BrandingPage from './content/BrandingPage';
import RepoPage from './content/RepoPage';


class App extends Component {
  render() {
    return (
      <>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/customer" component={CustomerPage} />
            <Route path="/strategy" component={StrategyPage} />
            <Route path="/branding" component={BrandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;