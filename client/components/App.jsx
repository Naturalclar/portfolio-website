import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  render() {
    return(
      <div>
          <Header />
          <Home />
      </div>
    );
  }
}