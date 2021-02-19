import React,{Fragment,useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './styles/Inicio.css'
import { useParams } from 'react-router-dom'
const Inicio = () =>{


    const { id } = useParams();
       const [nombre,setNombre] = useState('');
       const [apellido,setApellido] = useState('');
       const [email,setEmail] = useState('');

       const [recetas,setReceta] = useState([]);



       const [nombreReceta,setNombreReceta] = useState([]);
       const [descripcion,setDescripcion] = useState([]);
       const [fecha,setFecha] = useState([]);



        useEffect(() => {
          const fetchBusinesses = () => {
 
            axios.get(`http://localhost:5000/login/${id}`)
            .then(response=>{
                console.log(response)
                    setNombre(response.data.usuarioLogueado.nombre);
                    setApellido(response.data.usuarioLogueado.apellido);
                    setEmail(response.data.usuarioLogueado.email);
                
            })
            .catch((error)=>{
                console.log(error);
            })
    
            axios.get(`http://localhost:5000/receta`)
            .then(response=>{

                response.data.recetas.map((element)=>{
                    console.log(element.nombre)
                        
                    setReceta([...recetas,{
                        nombre:element.nombre,
                        descripcion:element.descripcion
                    }])
                     console.log(recetas)
                })
                    
         
                


                          // var cadena = [];
                    // cadena.push(element.nombre);
                    // console.log(cadena)
                    // setNombreReceta([...nombreReceta,element.nombre])
                    // setDescripcion([...descripcion,element.descripcion])
                    // console.log(nombreReceta)
                    // console.log(descripcion)
                //  console.log(nombreReceta)
                //  console.log(descripcion)

            })
            .catch((error)=>{
                console.log(error);
            })

          }; 

          fetchBusinesses();
        }, []);

        
        
          

        return ( 
            <Fragment>
                <div className="content-inicio">
                 <Navbar
                 nombre={nombre}
                 apellido={apellido}
                 email={email}
                 id={id}
                 />
               <ul>
                   recetas:
                   {
                       recetas.map(item=>(
                           <div key={item.key}>
                               <li >{item.nombre}</li>
                               <li >{item.descripcion}</li>
                           </div>
                       ))
                   }
               </ul>
                </div>
            </Fragment>
         )
    
    
}
 
export default Inicio;