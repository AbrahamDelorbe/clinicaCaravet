import "../../styles/homeStyle/Carrucel.css"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
//import LogoutButton from "../../sessionSettings/logout";



//
export default function Carrusel() {



  const {user}= useAuth0() ; 
  const {logout} = useAuth0()

return <div className="contenedor-frontal">

<nav>

<div className="img-perfil-home">

     <img className="imgPerfil" src={user.picture} alt={user.name} /> <h3>{user.name}</h3>  
</div>
    

      

<ul>

{/* <li><a href="">Ubicacion </a></li> */}
{/* <Link to={'/consejos'} > <li><a href="">consejos</a> </li> </Link>  */}
<Link className="LinkSinSubrayado" to={'/citas'}> <li><a href="">citas</a></li> </Link>
<li> <a href="" onClick={ () => logout({returnTo: window.location.origin}) } >Log Out </a> </li>
</ul>

</nav>
{/* <div className="contenedor-img-logo-home"> 
<img className="img-logo-home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrVyLUzTlKAhUKKNz-IhNK3y8NSXraMaCIVo73turn3w&s" alt="img-logo-home" />

</div> */}
<div className="slider-box">

<ul>

  <li>

<img src="https://vitakraft.es/wp-content/uploads/2019/03/vitacraft_img_26-1110x600.jpg" alt="" />

  <div className="textos">
<h2>Tratamientos </h2>

</div>  

  </li>

  <li>

<img src="https://p4.wallpaperbetter.com/wallpaper/390/94/445/cat-feline-veterinarian-wallpaper-preview.jpg" alt="" />

 <div className="textos">
<h2>Colabora   </h2>
<p></p>
</div> 

  </li>


  <li>
 <div className="textos">
<h2>Adopta </h2>
<p></p>
</div> 
<img src="https://www.guia33.com/wp-content/uploads/15/8353/guia33-barcelona-veterinario-clinica-veterinaria-l-animalari-21454.jpg" alt="" />



  </li>



  <li>

<img src="https://st2.depositphotos.com/1033883/6387/i/450/depositphotos_63876531-stock-photo-veterinarian-at-farm-cattle.jpg" alt="" />

 <div className="textos">
<h2>Visitas Medicas  </h2>
{/* <p>visitar al veterinario cada 6 meses es lo reconmendable para estar seguros de la salud de nuestras mascotas recuerda que ellos tambien son parte de familia</p> */}
</div> 

  </li>


</ul>

</div>

<div className="articulo1">

<img className="img-logo-home" src="https://www.zarla.com/images/zarla-carevet-1x1-2400x2400-20210809-ctbb9btmp84tpccp4hdr.png?crop=1:1,smart&width=250&dpr=2" alt="img-logo-home" />
<img className ="img-logo-home" src="https://www.zarla.com/images/zarla-carevet-1x1-2400x2400-20220323-t7b98tfcjcvqdcqwkpq3.png?crop=1:1,smart&width=250&dpr=2" alt="" />
<hr />
<p>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ad, tempora molestiae ullam impedit laudantium quidem culpa sapiente, eaque voluptates voluptatum vel laborum delectus ex consectetur quasi numquam iure dignissimos.
</p>

<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi ratione neque voluptatibus officiis ipsam, molestiae quam facere sapiente fuga eos voluptatum quos, incidunt soluta aliquam harum debitis voluptas nobis.
</p>

</div>





</div>
}


















































