import React, { Component } from 'react'
import store, { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store';
import { Provider } from 'react-redux';
import Hello from './Hello';
import Search from './Search';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: 'React Redux Counter Application'
    }
  }

  increment = () => {

    store.dispatch({ type: COUNTER_INCREMENT });
    console.log(store.getState());
  }
  decrement = () => {
    store.dispatch({ type: COUNTER_DECREMENT });
    console.log(store.getState());
  }

  push = () => {

    store.dispatch({ type: 'push', value: Math.random() });
    console.log(store.getState());
  }

  pop = () => {

    store.dispatch({ type: 'pop' });
    console.log(store.getState());
  }

  render() {

    return (
      <Provider store={store}>
        <Hello hello={this.state.hello} />
        <div className="counter">
          <h1>{this.state.hello}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.push}>Push</button>
          <button onClick={this.pop}>Pop</button>

        </div>
        <Search />
      </Provider>
    )
  }
}
