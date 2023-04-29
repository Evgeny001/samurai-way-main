import React from 'react';
import './App.css';


function App() {
  return (
  <div className='app-wrapper'>
    <header className='header'>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"  alt="logo"/>
    </header>
        <nav className='nav' >
          <div>Profile</div>
          <div>Messages</div>
          <div>New</div>
          <div>Music</div>
          <div>Settings</div>
        </nav>
    <div className='content'>
    <div>  <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg" alt="#"/></div>
    <div>ava+des</div>
    <div>mw posts
    <div>new post</div>
    </div>
    <div>post1</div>
    <div>post2</div>
    </div>
  </div>
  );
}


export default App;
