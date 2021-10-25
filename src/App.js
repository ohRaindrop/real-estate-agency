import React from 'react'
import * as COMP from './components';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <GlobalStyle />
      <COMP.Navbar />
      <Switch>
        <Route exact path='/' component={COMP.HeroSection} />
      </Switch>
      <COMP.InfoSection />
    </Router>
  </>

  );
}

export default App;
