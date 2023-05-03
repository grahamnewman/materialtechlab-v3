import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ResearchPage from './content/ResearchPage';
import RepoPage from './content/RepoPage';
import PodcastPage from './content/PodcastPage';


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
            <Route path="/research" component={ResearchPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/podcast" component={PodcastPage} />

          </Switch>
        </Content>
      </>
    );
  }
}

export default App;