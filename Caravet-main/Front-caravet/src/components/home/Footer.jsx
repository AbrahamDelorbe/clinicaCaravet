import "../../styles/homeStyle/Footer.css"

//
export default  function Footer (){

return( <> 


<footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h3>Sobre Nosotros</h3>
          <p>
            CaraVet es una clínica veterinaria innovadora dedicada al bienestar de tus mascotas.
          </p>
        </div>

        <div className="footer-section services">
          <h3>Servicios</h3>
          <ul>
            <li>Consulta general</li>
            <li>Vacunación</li>
            <li>Cirugías</li>
            <li>Hospitalización</li>
            <li>Emergencias</li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Dirección: Calle Central 45, Ciudad</p>
          <p>Teléfono: (555) 123-4567</p>
          <p>Email: info@caravet.com</p>
        </div>

        <div className="footer-section social-media">
          <h3>Redes Sociales</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com/caraVet" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/caraVet" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/caraVet" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CaraVet. Todos los derechos reservados.</p>
      </div>
    </footer>

</>

)

}



