import axios from 'axios';
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import {useForm} from 'react-hook-form'

const EditImagen = () => {
     const {id} = useParams();
     
     function onChange(e){
         let files = e.target.files;
         let reader =  new FileReader();
         reader.readAsDataURL(files[0]);

         reader.onload = (e) =>{
            const formData = {file:e.target.result}
            axios.put(`http://localhost:5000/upload/${id}`,formData)
           .then(response=>{
               console.warn('result',response)

           })
           .catch((error)=>{
               console.log(error)
           })
         }

     }

    //  const {register,handleSubmit} = useForm();
    //  const onSubmit = (data) =>{
    //   console.log(data.archivo[0].name)
    //   const fileReader = new FileReader();
    //   var img=document.getElementById('imagenPerfil');
    //   console.log(img)
      
     

    return ( 
        <div>
            <div className="edit-imagen-caja">
               <form>
                   <input type="file" 
                   name="file" 
                   id="imagenPerfil"
                   placeholder="imagen" 
                   onChange={(e)=>{onChange(e)}}
                   />
                   <button type="submit">Cambiar</button>
               </form>
            </div>
        </div>
     );
}
 
export default EditImagen;
