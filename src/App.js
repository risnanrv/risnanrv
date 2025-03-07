import { useContext } from 'react'
import { ThemeContext } from './Context/Theme'

import './App.css'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header/>

      <main>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>

      </main>

      <ScrollToTop/>
      <Footer/>
    </div>
  )
}

export default App