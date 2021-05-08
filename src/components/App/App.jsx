import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Support from '../Support/Support';
import Understand from '../Understand/Understand';
import EditFeedback from '../EditFeedback/EditFeedback';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();


  //Getting data from DB to send to my reducer 
  const getFeedback = () => {

  axios.get('/feedback')
    .then(response => {
        console.log('Getting feedback list from DB.', response);
        // dispatch to redux to send feedback list to reducer
        dispatch({ type: 'SET_FEEDBACK', payload: response.data });
    })
    .catch(error => {
        console.log('Something went wrong getting feedback from DB.', error);
    })
  }

  // calling GET function to get data from DB and send it to reducer
  getFeedback();



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

          <Route path="/edit">
            <EditFeedback />
          </Route>

          <Route path="/admin">
            <Admin getFeedback={getFeedback}/>
          </Route>

        </Router>
      </main>
    </div>
  );
}

export default App;
