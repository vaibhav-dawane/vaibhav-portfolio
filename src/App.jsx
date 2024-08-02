import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  
  const id = {
    about: "about-us",
    home: "home",
    contact: "contact",
    education: "education",
    project: "project"
  }
  

  return (
    <>
      <Navbar {...id} />
      <Banner id={id.home} about={id.about} />
      <About id={id.about} />
      <Projects id={id.project} />
      <Education id={id.education} />
      <Contact id={id.contact} />
      <Footer home={id.home} about={id.about} />
    </>
  )
}

export default App
