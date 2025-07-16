import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
/* import Blog from './components/Blog' */
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'

function App() {
  return (
    <div className="min-h-screen bg-soft-pink">
      <Header />
      <div id="inicio">
        <Hero />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="nosotros">
        <About />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
      <ChatButton />
    </div>
  )
}

export default App