import './App.scss'
import About from './About/About'
import Hello from './Hello/Hello'
import Navbar from "./Navbar/Navbar"
import Sponsors from "./Sponsors/Sponsors"
import Popular from "./Popular/Popular"
import Listing from "./Listing/Listing"
import Contact from "./Contact/Contact"
import Subscribe from './Subscribe/Subscribe'
import Footer from "./Footer/Footer"
function App() {
  return (
    <>
    <Navbar/>
    <Hello/>
    <Sponsors/>
    <Popular/>
    <Listing/>
    <About/>
    <Contact/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default App
