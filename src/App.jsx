import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Routes, Route, Outlet} from 'react-router-dom'
import Pricing from './components/Pricing'
import Market from './components/Market'
import MealKits from './components/MealKits'
import SeasonalBoxes from './components/SeasonalBoxes'
import GiftCards from './components/GiftCards'
import Redeem from './components/Redeem'
import CorporateSales from './components/CorporateSales'

function App() {

  return (
    <>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/market'>
            <Route index={true} element={<Market/>}/>
            <Route path='categories'>
              <Route index={true} element={<Outlet/>}/>
              <Route path='seasonal-boxes' element={<SeasonalBoxes/>}/>
              <Route path='meal-kits' element={<MealKits/>}/>
            </Route>
        </Route>
        <Route path='/gifts' element={<GiftCards/>}/>
        <Route path='/pages'>
              <Route index={true} element={<Outlet/>}/>
              <Route path='redeem' element={<Redeem/>}/>
              <Route path='corporate-sales' element={<CorporateSales/>}/>
        </Route>
        </Routes>
        <Footer/>
    </>
  )
}

export default App
