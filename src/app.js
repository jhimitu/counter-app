'use strict';

import React from "react";


class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState(state => ({
      count: state.count += 1
    }));
  }

  decrementCount() {
    this.setState(state => ({
      count: state.count -= 1
    }))
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
