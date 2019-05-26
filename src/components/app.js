import React, { Component } from 'react';
import Logo from "./logo";
import SearchBar from "./searchbar.js";
import RecentPosts from "./reacentPosts.js"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div> 
          <Logo />
          <SearchBar/>
          <RecentPosts/>
        </div>
      </div>
    );
  }
}
