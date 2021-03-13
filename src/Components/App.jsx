import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Organimsm/Header';
import Course from './Pages/Course';
import Courses from './Pages/Courses';
import Fracment from './Pages/Fracment';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Pag404 from './Pages/Pag404';
import Register from './Pages/Register';
import Specialities from './Pages/Specialities';
import Speciality from './Pages/Speciality';
import Teachers from './Pages/Teachers';
import Protected from './Routes/Protected';
import Public from './Routes/Public';
import "./styles/style.scss"

const App =()=>{
  return(
    <Router>
      <Header />
      <Switch>
        <Protected exact path='/' component={Home}/>
        <Protected path='/courses' component={Courses}/>
        <Protected path='/course:id' component={Course}/>
        <Protected path='/specialities' component={Specialities}/>
        <Protected path='/speciality:id' component={Speciality}/>
        <Protected path='/teacher' component={Teachers}/>
        <Protected path='/clases:id' component={Fracment}/>
        
        <Public exact path='/login' component={Login}/>
        <Public path='/register' component={Register}/>

        <Route component={Pag404}/>
      </Switch>
    </Router>
  )
}

export default App;
