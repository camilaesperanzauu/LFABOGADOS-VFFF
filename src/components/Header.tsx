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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-blue/95 backdrop-blur-md shadow-lg' : 'bg-dark-blue'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scale size={32} className="mr-2 transition-transform hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">LFABOGADOS</span>
          </div>
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex space-x-6 mr-4">
                <li><a href="#" className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Inicio</a></li>
                <li><a href="#" className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Servicios</a></li>
                <li><a href="#" className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Equipo</a></li>
                <li><a href="#" className="hover:text-off-white transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full">Contacto</a></li>
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
            <li><a href="#" className="block hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Inicio</a></li>
            <li><a href="#" className="block hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Servicios</a></li>
            <li><a href="#" className="block hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Equipo</a></li>
            <li><a href="#" className="block hover:text-off-white transition-colors duration-200 hover:translate-x-2 transform">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header