import React, { Component } from 'react';
import './App.css';
import Grid from './listings/Grid';
import courses from '../data/courses.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { courses };
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center" aria-label="Home">Courses</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Udemy">Udemy</a></li>
                <li><a href="https://www.codecademy.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Codecademy">Codecademy</a></li>
                <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" aria-label="Visit Coursera">Coursera</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <Grid items={this.state.courses} />
        </div>
      </div>
    );
  }
}
