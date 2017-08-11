import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <div className='home-padding'/>
        <div className='home-heading'>
          <h1 className='home-heading-primary animated fadeInLeft'>Jesse Katsumata</h1>
          <h2 className='home-heading-secondary animated fadeInLeft'>Front-End Developer</h2>
        </div>
      </div>
    )
  }
}