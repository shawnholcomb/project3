import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage.js';
import Homepage from './pages/Homepage.js';
import HowItWorks from './pages/HowItWorks.js';
import Profile from './pages/ProfilePage';
import BrowseProfiles from './pages/BrowseProfiles';
import ComingSoon from './pages/ComingSoon';
import BrowseJobs from './pages/BrowseJobs';
import AuthModal from './components/AuthModal.js';
import PostJob from './components/PostJob';

const styles = {
  landingPage: {
    background: 'url("/images/landingpage-bg.jpg") center center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw'
  }
};

class App extends React.Component {
  state = {
    isLandingPage: false
  };

  isLanding = () => {
    if (window.location.pathname === "/") {
      this.setState({ isLandingPage: true })
    }
  };

  componentDidMount() {
    this.isLanding();
  };

  render() {
    return (
      <Router>
        <div style={this.state.isLandingPage ? styles.landingPage : null}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={Homepage} />
            <Route exact path='/works' component={HowItWorks} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/browsejobs' component={BrowseJobs} />
            <Route exact path='/browseprofiles' component={BrowseProfiles} />
            <Route exact path='/comingsoon' component={ComingSoon} />
          </Switch>
          <AuthModal />
          <PostJob />
        </div>
      </Router>
    )
  }
};

export default App;