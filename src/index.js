import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DialogsData = [
  {
    id: 1,
    name: "Julia"
  },
  {
    id: 2,
    name: "Petya"
  },
  {
    id: 3,
    name: "Iana"
  },
  {
    id: 4,
    name: "Sveta"
  },
  {
    id: 5,
    name: "Kate"
  },
  {
    id: 6,
    name: "Alex"
  },
]

const messagesData = [
  {
    id: 1,
    message: "Hi there!"
  },
  {
    id: 2,
    message: "Yo"
  },
  {
    id: 3,
    message: "What's up!"
  },
]

const postsData = [
  {
    id: 1,
    value: "Hi there!",
    likesCount: 2
  },
  {
    id: 2,
    value: "It's my first post",
    likesCount: 5
  },
  {
    id: 3,
    value: "Press like!",
    likesCount: 102
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App DialogsData={DialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
