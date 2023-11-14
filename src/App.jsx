import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
