import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'animate.css/animate.css'
import './styles/main.css';

class Main extends React.Component {
  render(){
    return (
      <App/>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.querySelector('#app')
);