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
      case '/':
        return "var(--dark-blue-bg)"
        return "#fff"
      case '/about':
        return "#ffffff"
      case '/events':
        return "var(--dark-blue-bg)"
      case '/contact':
        return "var(--dark-blue-bg)"
      default: return "transparent"
    }
  }

  // const getBGcolor = () => {
  //   // More flexible path matching
  //   if (location.pathname === '/' || location.pathname === '/munsoc.tw/' || location.pathname === '') {
  //     return "#fff";
  //   } else if (location.pathname.includes('about')) {
  //     return "#ffffff";
  //   } else if (location.pathname.includes('events')) {
  //     return "var(--dark-blue-bg)";
  //   } else if (location.pathname.includes('contact')) {
  //     return "var(--dark-blue-bg)";
  //   }
  //   return "transparent";
  // }


  return (
    
    <div style={{backgroundColor: getBGcolor(), position:"relative"}}>
        

      <Routes>
        {location.pathname === "/" && (
          <Route path='/' element={<Home />}/>
          
        )}
        {/* <Route path="munsoc.tw" element={<Home />}/> */}
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>

      {/* <div id='toIndex'></div> */}
      
      {/* <Header /> 
      <Footer /> */}
    </div>
  )
}

export default App
