import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route } from "react-router-dom";
import News from './components/News/News';
import FriendsPage from './components/Friends/FriendsPage';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.SideBar} />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <Dialogs state={props.state.MessagesPage} />} />
        <Route path="/profile" render={() => <Profile state={props.state.ProfilePage} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" render={() => <FriendsPage />} />
      </div>
    </div>
  );
}

export default App;
