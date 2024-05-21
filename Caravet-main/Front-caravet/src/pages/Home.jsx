import CardHome from "../components/home/cardHome"
import Carrusel from "../components/home/Carrusel"
import Contenido1Home from "../components/home/contenido1-Home"
import Contenido2Home from "../components/home/contenido2-Home"
import Footer from "../components/home/Footer"
import "../styles/homeStyle/home.css"

export default function HomePage() {

return <div className="body-home"> 


<Carrusel />
<Contenido1Home />
<CardHome />
<Contenido2Home />
<Footer />
</div>

}