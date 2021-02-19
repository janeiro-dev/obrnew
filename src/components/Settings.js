/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Fragment,useState } from 'react'
import { NavLink,useParams } from 'react-router-dom'
import './styles/Settings.css'
import axios from 'axios'

const Settings = () => {
    const {id} = useParams()
  
    
    // eslint-disable-next-line no-array-constructor
    const [category1,setCategory1]=useState("");
    const [category2,setCategory2]=useState("");
    const [category3,setCategory3]=useState("");
    const [category4,setCategory4]=useState("");
    const [category5,setCategory5]=useState("");
    const [category6,setCategory6]=useState("");

  
    

    const [nombre,setNombre]=useState("");
    const [apellido,setApellido]=useState("");
    const [place,setPlace]=useState("");
    const [imgPerfil,setImgPerfil]=useState("");


    function componentDidMount(){
            axios.get(`http://localhost:5000/profile/${id}`)
            .then(response=>{
                console.log(response)
                setPlace(response.data.perfil[0].place);
                console.log(place)

                setCategory1(response.data.perfil[0].category[0])
                setCategory2(response.data.perfil[0].category[1])
                setCategory3(response.data.perfil[0].category[2])
                setCategory4(response.data.perfil[0].category[3])
                setCategory5(response.data.perfil[0].category[4])
                setCategory6(response.data.perfil[0].category[5])

                
            })
            .catch((error)=>{
                console.log(error);
            })

        
            axios.get(`http://localhost:5000/login/${id}`)
            .then(response=>{
                setNombre(response.data.usuarioLogueado.nombre); 
                setApellido(response.data.usuarioLogueado.apellido);      
                setImgPerfil(response.data.usuarioLogueado.img);      
              
                // axios.get(`http://localhost:5000/imagen/${imgPerfil}`)
                // .then(response=>{
                //   console.log(response)
                //   console.log(imgPerfil)
                // })
                // .catch((error)=>{
                //   console.log(error)
                // })
             
            })
            .catch((error)=>{
                console.log(error);
            })
               
               
      
               
        
    }
    return ( 
    <Fragment>

       {componentDidMount()}
           
        <div className="setting-content">
        
            <div className="title">
             <h1 className="display-2">Configuraciones</h1>
            </div>

            <div className="setting-info">

                <div className="user-info">
                    <div className="imagenes-perfil">
                     <img id="perfil" src={`http://localhost:5000/imagen/${imgPerfil}`} alt="imagen-usuario"></img>
                     <NavLink to={`/editImagen/${id}`} className="editImagen-link" activeClassName="active-editImagen-link">
                      Editar foto
                     </NavLink>
                    </div>

                    <div className="texto-nombre">
                    <h3 className="display-4">{nombre}</h3>
                   <h3 className="apellido text-muted">{apellido}</h3>
                    </div>
                   
                </div>

                <div className="categoriasylugar">
                  <div className="categorias-info">
                     {category1.length===0 ? '' : <h5>{category1}</h5>}
                     {category2.length===0 ? '' : <h5>{category2}</h5>}
                     {category3.length===0 ? '' : <h5>{category3}</h5>}
                     {category4.length===0 ? '' : <h5>{category4}</h5>}
                     {category5.length===0 ? '' : <h5>{category5}</h5>}
                     {category6.length===0 ? '' : <h5>{category6}</h5>}
                  </div>
                  <div className="place-info">
                      <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/Location.png?alt=media&token=64e8f6f3-3f31-425b-b585-fcd323684997" alt="imagen-location"></img>
                      {place}
                  </div>
                </div>
                
             

            </div>

            <div className="setting-box">

                <div className="setting-boxes">
                <NavLink to={`/editNombre/${id}`} className="setting-link" activeClassName="">
                <h2>Nombre de Usuario</h2>
                </NavLink>
                </div>

                <div className="setting-boxes">
                <NavLink to={`/editPassword/${id}`} className="setting-link" activeClassName="">
                <h2>Contraseña</h2>
                </NavLink>
                </div>

                <div className="setting-boxes">
                <NavLink to={`/profile/${id}`} className="setting-link" activeClassName="">
                <h2>Categorias y Lugar</h2>
                </NavLink>
                </div>

               

           </div>
        </div>
    </Fragment>
     );
}
 
export default Settings;