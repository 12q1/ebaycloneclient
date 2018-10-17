import React, { Component } from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import ProductListContainer from './components/ProductListContainer'
import CreateProductFormContainer from './components/CreateProductFormContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/" exact component={ProductListContainer} />
          <Route path="/" exact component={CreateProductFormContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;