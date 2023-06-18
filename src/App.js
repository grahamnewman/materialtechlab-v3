import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import LandingPage from './content/LandingPage';
import ProductPage from './content/ProductPage';
import CustomerPage from './content/CustomerPage';
import StrategyPage from './content/StrategyPage';
import BrandingPage from './content/BrandingPage';
import EsgPage from './content/EsgPage';
import RepoPage from './content/RepoPage';


class App extends Component {
  render() {
    return (
      <>
          <Helmet>
            <title>Materialtech Lab | Innovation Design Engineering</title>
            <meta 
              name="description"
              content="Helping clients create impact with interdisciplinary design, science, engineering and technology using bioplastics and recycled materials."
            />
            <link rel="canonical" href="https://materialtechlab.com/#/"/>
          </Helmet> 
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
            <Route path="/esg" component={EsgPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;