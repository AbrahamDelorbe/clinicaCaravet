
import '../../styles/homeStyle/Card-home.css';
import Modals from '../Citas/ModalCardHome';
import { useState } from 'react';

export default function CardHome() {
    // Estado para controlar si el modal está abierto
    const [show, setShow] = useState(false);
    // Estado para almacenar el contenido del modal
    const [modalContent, setModalContent] = useState('');

    // Función para cerrar el modal
    const handleClose = () => setShow(false);

    // Función para abrir el modal con contenido específico
    const handleShow = (content) => {
        setModalContent(content);
        setShow(true);
    };

    return (
        <>
            <div className="card-container">
                <div className="card card-1"onClick={() => handleShow(<div> <h1>VitaPet</h1> <p> 
VitaPet es un seguro integral para mascotas ofrecido por la reconocida veterinaria Caravet. Este seguro está diseñado para brindar tranquilidad a los dueños de mascotas, proporcionando una cobertura completa para una variedad de servicios médicos y de salud animal. Con VitaPet, los dueños pueden acceder a atención veterinaria de calidad en cualquier momento, sin preocuparse por los costos inesperados de los tratamientos.

Caravet, con su equipo de veterinarios altamente capacitados y experimentados, garantiza el bienestar y la salud de las mascotas aseguradas bajo VitaPet. La cobertura incluye consultas rutinarias, vacunas, tratamientos de emergencia, cirugías, exámenes de laboratorio y más. Además, VitaPet también ofrece beneficios adicionales, como programas de prevención de enfermedades y asesoramiento personalizado para el cuidado de cada mascota.

El proceso de inscripción en VitaPet es sencillo y se adapta a las necesidades individuales de cada mascota y su dueño. Al elegir VitaPet, los dueños pueden estar seguros de que su mascota está en las mejores manos y recibirá la atención médica que necesita en todo momento. La veterinaria Caravet se enorgullece de ofrecer este seguro que protege la salud de las mascotas y brinda tranquilidad a sus dueños.</p></div>)}>
                    <img className="imgCard" src="../../../public/carvet2.jpg" alt="" />

                    <div className="card-contenido">
                        <h3 className="tituloCard">VitaPet</h3>
                        <p className="descriptionCard">
                        
                        </p>
                        {/* <a href="#" className="btn-card">Read more</a> */}
                    </div>
                </div>

                <div className="card card-2" onClick={() => handleShow(<iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7652905924124!2d-69.93754422496396!3d18.44896288263078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56213b0103a85%3A0x5471bc937b8facb3!2sAlba%20Fashion!5e0!3m2!1ses-419!2sdo!4v1714135670030!5m2!1ses-419!2sdo"
                                width="470"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />)} >
                    <img src="../../../public/ubiCarvet.jpg" alt="" />

                    <div className="card-contenido">
                        <h3>Ubicación</h3>
                      {/*   <p>
                            
                        </p> */}
                        {/* <a href="#" className="btn-card">Read more</a> */}
                    </div>
                </div>

                <div className="card card-3" onClick={() => handleShow(<div> <h1>PawsAid</h1> <p>PawsAid es el nuevo nombre para la compañía de donaciones de la veterinaria. Esta iniciativa tiene como objetivo ayudar a animales necesitados y contribuir al bienestar de las mascotas en la comunidad. PawsAid ofrece apoyo financiero para tratamientos médicos, cirugías, medicamentos y programas de adopción, entre otros.</p> 

<p>A través de PawsAid, Caravet busca generar un impacto positivo en la vida de las mascotas y sus dueños, brindándoles una oportunidad de recibir atención veterinaria de calidad incluso en situaciones económicas difíciles. La compañía trabaja en estrecha colaboración con organizaciones benéficas locales y grupos de rescate para maximizar el alcance de sus donaciones.</p> 

<p>PawsAid también fomenta la participación de la comunidad a través de eventos de recaudación de fondos, campañas de concienciación y programas educativos sobre el cuidado responsable de las mascotas. Al contribuir a PawsAid, los donantes tienen la satisfacción de saber que están haciendo una diferencia en la vida de los animales y ayudando a construir una comunidad más compasiva y solidaria.</p> </div>)} >
                    <img src="../../../public/DonationCarvet.jpg" alt="" />

                    <div className="card-contenido">
                        <h3>Donaciones</h3>
                        <p>
                          
                        </p>
                       {/*  <a href="#" className="btn-card" onClick={handleShow}>
                            Modal
                        </a> */}
                    </div>
                </div>
            </div>

            <Modals show={show} handleClose={handleClose} content={modalContent} />
        </>
    );
}

























































/* import '../../styles/homeStyle/Card-home.css'
import Modals from '../Citas/ModalCita'
import Modal2 from '../Citas/ModalCita'
import { useState } from 'react' 
//


export default function CardHome(){



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

return (<> 

 

<div className="card-container" >




<div className="card card-1">

<img className='imgCard' src="../../../public/wallpaperbetter.com_1920x1080 (2).jpg" alt="" /> 

<div className="card-contenido">

<h3 className='tituloCard' >VitaPet</h3>


<p className='descriptionCard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis qui cumque vero nulla aperiam illo perspiciatis debitis fugit iusto, hic magni fugiat necessitatibus, ipsa aspernatur non cum blanditiis tenetur.</p>

<a href="" className="btn-card"> Read more </a>



</div>

</div>






<div className="card card-2"  onClick={handleShow}>

<img src="../../../public/wallpaperbetter (1).jpg" alt="" /> 

<div className="card-contenido">

<h3>Ubicacion</h3>

<p>
 <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7652905924124!2d-69.93754422496396!3d18.44896288263078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea56213b0103a85%3A0x5471bc937b8facb3!2sAlba%20Fashion!5e0!3m2!1ses-419!2sdo!4v1714135670030!5m2!1ses-419!2sdo"
                width="300"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            /> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis qui cumque vero nulla aperiam illo perspiciatis debitis fugit iusto, hic magni fugiat necessitatibus, ipsa aspernatur non cum blanditiis tenetur.</p>
<a href="" className="btn-card"> Read more </a>

</div>

</div>







<div className="card card-3" onClick={handleShow(<div>nalga</div>)}>

<img src="../../../public/ojo-cibernetico_6144x3456_xtrafondos.com.jpg" alt="" /> 

<div className="card-contenido">

<h3>Donaciones</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis qui cumque vero nulla aperiam illo perspiciatis debitis fugit iusto, hic magni fugiat necessitatibus, ipsa aspernatur non cum blanditiis tenetur.</p>
<a href="#" className="btn-card" onClick={handleShow} > Modal </a>


</div>

</div>


</div>

<Modals show={show} handleClose={handleClose} />


</>
)
}







 */


