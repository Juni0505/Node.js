// import './App.css';
import React, {Component} from 'react';
import {Route,Routes} from "react-router-dom";
import Home from './home';
import Insert from './insert';
import List from './list';
import Info from './info';
import Delete from './delete'


class App extends Component {
  render () {
    return (
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/list' element={<List/>}/>
          <Route exact path='/insert' element={<Insert/>}/>
          <Route exact path='/delete' element={<Delete/>}/>
          <Route exact path='/info' element={<Info/>}/>
        </Routes>
      </div>
    );
  }
}


export default App;
