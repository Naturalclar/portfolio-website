import React from 'react';

export default class Header extends React.Component{
  render(){
    return(
        <header className='header'>
          <h1 className='header-title'>Jesse K.</h1>
          <ul className='header-menu'>
            <li className='header-menu-item'>Works</li>
            <li className='header-menu-item'>About</li>
          </ul>
        </header>
   )
  }
}