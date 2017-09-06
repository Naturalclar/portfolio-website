import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

/* Home.jsx */
export default class Home extends Component {
  render() {
    const links = {
      'github': {
        'key':'github',
        'style':'fa fa-3x fa-github', 
        'url':'https://github.com/Naturalclar'
        },
      'codepen': {
        'key':'codepen',
        'style':'fa fa-3x fa-codepen', 
        'url':'https://codepen.io/naturalclar/'
        },
      'linkedin': {
        'key':'linkedin',
        'style':'fa fa-3x fa-linkedin', 
        'url':'#'
        }
      };
    const linkKeys = [];
    Object.keys(links).forEach((key) => {
      linkKeys.push(links[key]);
    }); 
    const linksList = linkKeys.map((item) => {
      return (
          <a key={item.key} className='intro_social_link' href={item.url}>
            <FontAwesome
              name={item.key}
              size='3x'
              />
          </a>
        )
    });
    return (
      <div className='intro'>
        <div className='intro_header'>naturalclar.</div>
        <div className='intro_textbox'>
          <div className='intro_text'>Hi! My name is Jesse.</div>
          <div className='intro_text'>I'm a <strong>Front-end developer</strong>.</div>
          <div className='intro_triangle'></div>
        </div>
        <div className='intro_social_list'>{ linksList }</div>
      </div>
    )
  }
}
