import React from 'react'
import axios from 'axios';
import './styles/EditNombre.css'
import {useParams} from 'react-router-dom'


const EditPassword = () => {
    const {id} = useParams();
    const [shown, setShown] = React.useState(false);
    const switchShown = () => setShown(!shown);

    const [shown2, setShown2] = React.useState(false);
    const switchShown2 = () => setShown2(!shown2);

    const [shown3, setShown3] = React.useState(false);
    const switchShown3 = () => setShown3(!shown3);

    const [password, setPassword] = React.useState('');
    const onChange = ({ currentTarget }) => setPassword(currentTarget.value);

    const [password2, setPassword2] = React.useState('');
    const onChange2 = ({ currentTarget }) => setPassword2(currentTarget.value);

    const [password3, setPassword3] = React.useState('');
    const onChange3 = ({ currentTarget }) => setPassword3(currentTarget.value);

    //put
    function actualizarPassword(e){
      e.preventDefault();


    axios.get(`http://localhost:5000/usuario/${id}`)
    .then(response=>{
        console.log(response.data.usuarios.password)
      var oldPassword=document.getElementById('oldPassword').value;
        console.log(oldPassword)

      if(oldPassword===response.data.usuarios.password){

      var newPassword=document.getElementById('newPassword');
      var confirmPassword=document.getElementById('confirmPassword');

      const editPassword = {
        tryPassword:oldPassword,
        password:newPassword.value,
        passwordConfirm:confirmPassword.value
       }
      axios.put(`http://localhost:5000/usuarioP/${id}`,editPassword)
      .then(response=>{
          console.log(response)
          if(response.data.ok === true){
            window.location=`/settings/${id}`;
          }else{
            document.getElementById('confirmPassword').style.border="1px solid orange"
          }

      })
      .catch((error)=>{
          console.log(error)
      })

    }else{
      console.log('Antigua contraseña incorrecta');
      document.getElementById('oldPassword').style.boxShadow='1px 1px 1px 1px red';
    }

    })
  
    .catch((error)=>{
        console.log(error)
    })
     
    }
    return ( 
        <div>
          <div className="editPassword">

          
          <div className="edit-caja">

          
            <form onSubmit={actualizarPassword}>
              <div>
              <input onChange={onChange} value={password} id="oldPassword" type={shown ? 'text' : 'password'} placeholder="Actual contraseña"/>
              <button onClick={switchShown} type="button" className="hideshow bg-white">
              {shown ? <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/ocultarcc.svg?alt=media&token=935bce85-7908-49ef-8de9-8e34f3e3e29d" width="20px" alt="icon"></img> : <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/vercc.svg?alt=media&token=e95a00b0-87f1-46eb-8926-437fb89d58cb" width="20px" alt="icon"></img>}
              </button>
              </div>

              <div>
              <input onChange={onChange2} value={password2} id="newPassword" type={shown2 ? 'text' : 'password'} placeholder="Nueva contraseña"/>
              <button onClick={switchShown2} type="button" className="hideshow bg-white">
              {shown2 ? <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/ocultarcc.svg?alt=media&token=935bce85-7908-49ef-8de9-8e34f3e3e29d" width="20px" alt="icon"></img> : <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/vercc.svg?alt=media&token=e95a00b0-87f1-46eb-8926-437fb89d58cb" width="20px" alt="icon"></img>}
              </button>
              </div>

              <div>
              <input onChange={onChange3} value={password3} id="confirmPassword" type={shown3 ? 'text' : 'password'} placeholder="Confirmar nueva contraseña"/>
              <button onClick={switchShown3} type="button" className="hideshow bg-white">
              {shown3 ? <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/ocultarcc.svg?alt=media&token=935bce85-7908-49ef-8de9-8e34f3e3e29d" width="20px" alt="icon"></img> : <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/vercc.svg?alt=media&token=e95a00b0-87f1-46eb-8926-437fb89d58cb" width="20px" alt="icon"></img>}
              </button>
              </div>

              <button id="guardarCambios" type="submit" className="btn">Actualizar contraseña</button>
            </form>

            </div>
            </div>
        </div>
     );
}
 
export default EditPassword;