import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <div>
      <Header></Header>
      <FriendList></FriendList>
    </div>
  );
}

export default App;
