import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from '../layout/Header'

import Home from './Home'
import AboutUs from './AboutUs'
import Pricing from './Pricing'
import Contact from './Contact'

import './App.css';

function App() {
  return (
    <BrowserRouter style={{backgroundColor: '#f5efdf'}}>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={AboutUs}/>
        <Route path='/pricing' exact Component={Pricing}/>
        <Route path='/contact' exact Component={Contact}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
