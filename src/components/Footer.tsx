import React from 'react'
import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <p className="text-off-white">Calle Principal 123, Ciudad, País</p>
            <p className="text-off-white">Teléfono: (+00) 123 456 789</p>
            <p className="text-off-white">Email: contacto@lfabogados.cl</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li><a href="#" className="text-off-white hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-off-white hover:text-white">Servicios</a></li>
              <li><a href="#" className="text-off-white hover:text-white">Equipo</a></li>
              <li><a href="#" className="text-off-white hover:text-white">Blog</a></li>
              <li><a href="#" className="text-off-white hover:text-white">Contacto</a></li>
              <li><a href="#" className="text-off-white hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="text-off-white">
              <li>Asesoría Personalizada</li>
              <li>Derecho Laboral</li>
              <li>Derecho de Familia</li>
              <li>Negociaciones Colectivas y Sindicatos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-off-white hover:text-white"><Instagram size={24} /></a>
              <a href="#" className="text-off-white hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-light-blue">
          <div className="flex flex-wrap justify-between">
            <p className="text-off-white">&copy; 2023 LFABOGADOS. Todos los derechos reservados.</p>
            <div>
              <a href="#" className="mr-4 text-off-white hover:text-white">Términos y Condiciones</a>
              <a href="#" className="mr-4 text-off-white hover:text-white">Política de Privacidad</a>
              <a href="#" className="text-off-white hover:text-white">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer