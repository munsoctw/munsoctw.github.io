import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import './css/home.css'
import './css/content.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { About, Events, Contact, Home } from './pages' 


function App() {

  //Determine the Background of each page
  const location = useLocation();

  const getBGcolor = () => {
    switch (location.pathname) {
      case '/munsoc.tw/':
        // return "var(--dark-blue-bg)"
        return "#fff"
      case '/munsoc.tw/about':
        return "#ffffff"
      case '/munsoc.tw/events':
        return "var(--dark-blue-bg)"
      case '/munsoc.tw/contact':
        return "var(--dark-blue-bg)"
      default: return "transparent"
    }
  }


  return (
    
    <div style={{backgroundColor: getBGcolor(), position:"relative"}}>
        

      <Routes>
        {location.pathname === "/munsoc.tw/" && (
          <Route path='/munsoc.tw/' element={<Home />}/>
          
        )}
        {/* <Route path="munsoc.tw" element={<Home />}/> */}
        <Route path="munsoc.tw/about" element={<About />}/>
        <Route path="munsoc.tw/events" element={<Events />}/>
        <Route path="munsoc.tw/contact" element={<Contact />}/>
      </Routes>

      {/* <div id='toIndex'></div> */}
      
      {/* <Header /> 
      <Footer /> */}
    </div>
  )
}

export default App
