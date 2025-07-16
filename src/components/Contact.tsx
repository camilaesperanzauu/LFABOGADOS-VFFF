const Contact = () => {
  return (
    <section className="py-20 bg-soft-pink text-dark-text">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark-text">Contáctenos</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-dark-text font-bold mb-2">Nombre</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-white border-2 border-main-rose text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-main-rose focus:border-main-rose" required />
            </div>
                          <div className="mb-4">
                <label htmlFor="email" className="block text-dark-text font-bold mb-2">Correo Electrónico</label>
                                 <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-white border-2 border-main-rose text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-main-rose focus:border-main-rose" required />
              </div>
                          <div className="mb-4">
                <label htmlFor="phone" className="block text-dark-text font-bold mb-2">Teléfono</label>
                                 <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-white border-2 border-main-rose text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-main-rose focus:border-main-rose" />
              </div>
                          <div className="mb-4">
                <label htmlFor="message" className="block text-dark-text font-bold mb-2">Mensaje</label>
                                 <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-white border-2 border-main-rose text-dark-text rounded-md focus:outline-none focus:ring-2 focus:ring-main-rose focus:border-main-rose" required></textarea>
              </div>
            <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
          </form>
          <p className="mt-4 text-sm text-dark-text text-center">Nos pondremos en contacto contigo dentro de las próximas 24 horas.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact