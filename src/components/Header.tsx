import { useState, useEffect } from 'react'
import { Scale, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-blue/95 backdrop-blur-md shadow-lg' : 'bg-dark-blue'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Scale size={32} className="mr-2 transition-transform hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">LFABOGADOS</span>
          </button>
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex space-x-6 mr-4">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Inicio</button></li>
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Servicios</button></li>
                <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Nosotros</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Contacto</button></li>
              </ul>
            </nav>
          </div>
          <button className="md:hidden hover:bg-white/10 p-2 rounded-lg transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="px-4 pt-2 pb-4">
          <ul className="space-y-3">
            <li><button onClick={() => scrollToSection('inicio')} className="block w-full text-left hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Inicio</button></li>
            <li><button onClick={() => scrollToSection('servicios')} className="block w-full text-left hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Servicios</button></li>
            <li><button onClick={() => scrollToSection('nosotros')} className="block w-full text-left hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Nosotros</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="block w-full text-left hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Contacto</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header