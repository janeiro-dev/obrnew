import axios from 'axios';
import React from 'react'
import {useParams} from 'react-router-dom'
import './styles/EditNombre.css'

const EditNombre = () => {
 
    const {id} = useParams();


    //put
      function actualizarNombre(e){
          e.preventDefault();
          var nnombre=document.getElementById('nombre');
          var napellido=document.getElementById('apellido');

        const editNombre = {
            nombre:nnombre.value,
            apellido:napellido.value
           }
          axios.put(`http://localhost:5000/usuario/${id}`,editNombre)
          .then(response=>{
              console.log(response)
              if(response.data.ok === true){
                window.location=`/settings/${id}`;
              }

          })
          .catch((error)=>{
              console.log(error)
          })
      }
    return ( 
        <div>

          
            <div className="edit-caja">
               <form onSubmit={actualizarNombre}>
                      <input type="text" id="nombre" placeholder="Nuevo nombre" maxLength="25px"/>
                      <input type="text" id="apellido" placeholder="Nuevo apellido" maxLength="30px"/>
                      <button type="submit" id="guardarCambios" className="btn">Guardar Cambios</button>
              </form>
            </div>
              
          </div>
     );
}
 
export default EditNombre
