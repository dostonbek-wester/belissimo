import React from 'react'
import Header from './Companents/Header/Header'
import Links from './Companents/Links/Links'
import Nav from './Companents/Nav/Nav'
import Slider from './Companents/Slider/Slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Savatcha from './pages/Savatcha/Savatcha'
import Login from './pages/Login/Login'
import Footer from './Companents/Footer/Footer'
import Home from './pages/Home/Home'



function HomeScreen(params) {
  return(
    <>
      <Slider />
      <Links />
      <Nav /> 
      <Home />
      <Footer />
    </>
  )
}

function App() {
  return (  
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/savatcha' element={<Savatcha/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App