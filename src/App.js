import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flights from './components/pages/Flights';
import Ourwork from './components/pages/Ourwork';
import Login from './components/pages/Login';
import DataDictionary from './components/pages/DataDictionary';
import InspirationFour from './components/pages/InspirationFour'
import Polaris from './components/pages/Polaris'
import SidebarDetails from './components/pages/details/SidebarDetails';
import { useSelector } from 'react-redux';
import {selectUser} from './components/Redux/userSlice';
import Paypal from './components/payment/Paypal';


function App() {
  const user = useSelector(selectUser)
  const [data, setData] = useState([]);
  const [pis, setPis] = useState([]);
  useEffect(()=>{
      fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data.Astronauts))
  },[])

  useEffect(()=>{
    fetch('pis.json')
    .then(resp => resp.json())
    .then(pis => setPis(pis.Pis) )
  },[])
  // console.log(pis)

  
  return (
      <Router>
        <Navbar/>
          <Routes>
          <Route path='/'  element={ <Home />} />
          <Route path='/flights' element={user ? <Flights /> : <Login />} />
          <Route path="/ourwork" element={ user ? <Ourwork /> : <Login />} />
          <Route path='/dictionary' element={user ? <DataDictionary /> : <Login />} />
          <Route path='/inspiration4' element={ user ? <InspirationFour data={data} pis={pis}/>  : <Login />}/>
          <Route path='/polaris' element={user ? <Polaris />  : <Login />}/>
          <Route path='/details/:id' element={<SidebarDetails data={data} pis={pis} />} />
          <Route path='/log-in' element={user ? <Home /> : <Login />} />
          <Route path='/payment' element={<Paypal />} />

        </Routes>
      </Router>
  );
}

export default App;
