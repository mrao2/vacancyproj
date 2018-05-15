import React, { Component } from 'react'
import StlMap from './Map.js'
import configureStore from './configureStore';
import { Provider } from 'react-redux';



class App extends Component {
  constructor(props){
    super(props);
    this.store = configureStore();

  }
  render () {
    return (
      <Provider store={this.store}>
        <StlMap />
      </Provider>
    )
  }
}

export default App
