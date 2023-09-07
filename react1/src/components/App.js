import React,{Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactRouter from './R089_reactRouter'
import ReactRouter2 from './R089_reactRouter2'

// import CallbackFunc from '../js/R063_CallbackFunc';


class App extends Component{
  render(){
    return (
      <div className='App'>
        <h1>라우터</h1>
        <Routes>
          <Route exact path='/' element={<ReactRouter />}/>
          <Route exact path='/reactRouter2' element={<ReactRouter2 />}/> 
        </Routes>
      </div>
    )
  }
}

export default App;
