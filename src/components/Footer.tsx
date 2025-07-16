import { Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
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
  }

  return (
    <footer className="bg-main-rose text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
            <p className="text-white">Teléfono: (+56) 9 6522 0739</p>
            <p className="text-white">Email: contacto@lfabogados.cl</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li><button onClick={() => scrollToSection('inicio')} className="text-white hover:text-off-white cursor-pointer">Inicio</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="text-white hover:text-off-white cursor-pointer">Servicios</button></li>
              <li><button onClick={() => scrollToSection('nosotros')} className="text-white hover:text-off-white cursor-pointer">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('contacto')} className="text-white hover:text-off-white cursor-pointer">Contacto</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="text-white">
              <li>Asesoría Personalizada</li>
              <li>Derecho Laboral</li>
              <li>Derecho de Familia</li>
              <li>Negociaciones Colectivas y Sindicatos</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-off-white"><Instagram size={24} /></a>
              <a href="#" className="text-white hover:text-off-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white">
          <div className="flex flex-wrap justify-between">
                          <p className="text-white">&copy; 2025 LFABOGADOS. Todos los derechos reservados.</p>
              <div>
                <a href="#" className="mr-4 text-white hover:text-off-white">Términos y Condiciones</a>
                <a href="#" className="mr-4 text-white hover:text-off-white">Política de Privacidad</a>
                <a href="#" className="text-white hover:text-off-white">Política de Cookies</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer