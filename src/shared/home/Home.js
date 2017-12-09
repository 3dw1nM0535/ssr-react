import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home Component</h1>
        <Link to='/news'>News</Link>
      </div>
    );
  }
}

export default Home;

