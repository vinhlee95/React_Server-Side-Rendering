import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Homie</h1>
        <button onClick={() => alert('Hello world')}>Click me</button>
      </div>
    )
  }
}
