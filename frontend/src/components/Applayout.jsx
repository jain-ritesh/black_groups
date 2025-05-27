import About from "./About"
import ClientSlider from "./ClintSlider"
import ContactSection from "./ContactSection"
// import Footer from "./Footer"
import Home from "./Home"
import Oservices from "./Oservices"
import Services from "./Services"

const Home1 = () => {
  return (
    <div className={location.pathname=='/'?"pt-0":"pt-0"}>

      <Home/>
      <Services/> 
      <Oservices/>
      <About/>
      <ClientSlider/>
      <ContactSection/>
      
      {/* <Footer/> */}
    
    </div>
  )
}

export default Home1
