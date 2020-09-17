import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import News from './components/News/News';

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogItems={props.DialogsData} messagesItems={props.messagesData} />} />
          <Route path="/profile" render={() => <Profile postItems={props.postsData} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
