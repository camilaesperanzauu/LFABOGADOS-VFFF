import React, { useState } from 'react'
import { Scale, Search, Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scale size={32} className="mr-2" />
            <span className="text-2xl font-bold">LFABOGADOS</span>
          </div>
          <div className="hidden md:flex items-center">
            <nav>
              <ul className="flex space-x-4 mr-4">
                <li><a href="#" className="hover:text-off-white">Inicio</a></li>
                <li><a href="#" className="hover:text-off-white">Servicios</a></li>
                <li><a href="#" className="hover:text-off-white">Equipo</a></li>
                <li><a href="#" className="hover:text-off-white">Blog</a></li>
                <li><a href="#" className="hover:text-off-white">Contacto</a></li>
                <li><a href="#" className="hover:text-off-white">FAQ</a></li>
              </ul>
            </nav>
            <div className="relative">
              <input type="text" placeholder="Buscar..." className="bg-light-blue text-white px-3 py-1 rounded-full focus:outline-none" />
              <Search size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-off-white" />
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              <li><a href="#" className="block hover:text-off-white">Inicio</a></li>
              <li><a href="#" className="block hover:text-off-white">Servicios</a></li>
              <li><a href="#" className="block hover:text-off-white">Equipo</a></li>
              <li><a href="#" className="block hover:text-off-white">Blog</a></li>
              <li><a href="#" className="block hover:text-off-white">Contacto</a></li>
              <li><a href="#" className="block hover:text-off-white">FAQ</a></li>
            </ul>
          </nav>
          <div className="px-4 pb-4">
            <div className="relative">
              <input type="text" placeholder="Buscar..." className="w-full bg-light-blue text-white px-3 py-1 rounded-full focus:outline-none" />
              <Search size={20} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-off-white" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header