import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understand from '../Understand/Understand';
// import EditFeedback from '../EditFeedback/EditFeedback';

import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
        <Router>

          <Route path="/" exact>
            <Feeling />
          </Route>

          <Route path="/understand">
            <Understand />
          </Route>

          <Route path="/support">
            <Support />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/success">
            <Success />
          </Route>

          {/* <Route path="/edit">
            <EditFeedback />
          </Route> */}

        </Router>
      </main>
    </div>
  );
}

export default App;
