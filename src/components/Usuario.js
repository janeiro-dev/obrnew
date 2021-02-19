import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import './styles/Usuario.css'




class Usuario extends Component{

    constructor(){
        super();


        this.state= {
            nombre:'',
            apellido:'',
            email:'',
            password:'',
            fecha:'',
            usuarios:[],
            _id:''
        };

        
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
     //get
   getter(){
        axios.get('http://localhost:5000/usuario')
        .then(response => {
          console.log(response.data.usuarios)
          this.setState({ usuarios: response.data.usuarios })
        })
        .catch((error) => {
          console.log(error);
        })
    }
    //post
    addTask(e){


       e.preventDefault();
       console.log('hola');
       console.log(this.state)
       const signupe = {
           nombre:this.state.nombre,
           apellido:this.state.apellido,
           email:this.state.email,
           password:this.state.password
           
           
       }

    axios.post('http://localhost:5000/usuario',signupe)
    .then(response=>{
       console.log(response) 
       this.setState({ signupe: response })
       this.getter();
       this.setState({ nombre:'',apellido:'',email:'',password:'',_id:'' })
       window.location=`/profile/${response.data.usuario._id}`;

    })
    .catch((error) => {
        console.log(error);
    })
}


componentDidMount() {
    axios.get('http://localhost:5000/usuario')
    .then(response => {
      console.log(response.data.usuarios)
      this.setState({ usuarios: response.data.usuarios })
    })
    .catch((error) => {
      console.log(error);
    })
  }

    handleChange(e){
        e.preventDefault();
        const {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }


    render(){
        return <div>
            {/*navegacion*/}
            <div className="all-signup">

                <div className="nav-signup" style={{height:"135px"}}>
                    <a className="brand-logo" href="/"><h1 className="display-4">OurRecipeBook</h1></a>
                    <div className="login-buttom">
                    <NavLink to="/login" className="login-b" activeClassName="active-login-b">Iniciar seccion</NavLink>
                    </div>
                </div>

            <div className="container-signup">
                
                    <div className="col s12">
                       <div className="card">
                           <div className="card-content">

                           <h2>Bienvenidos a:</h2>
                           <h1 className="display-5">OurRecipeBook<span>&copy;</span></h1>
                           
                               <form onSubmit={this.addTask}>
                                   <div className="row">
                                       <div className="input-field col s6">
                                           <input id="nombre" name="nombre"  value={this.state.nombre} onChange={this.handleChange} type="text" placeholder="Nombres"/>
                                       </div>
                                   
                                       <div className="input-field col s6">
                                        <input id="apellido" name="apellido" value={this.state.apellido}  onChange={this.handleChange} type="text" placeholder="Apellidos"/>                                     
                                        </div>
                                   </div>
                                   <div className="row">
                                       <div className="input-field col s6">
                                        <input id="email" name="email" value={this.state.email}  onChange={this.handleChange} type="email" placeholder="E-mail"/>                                     
                                        </div>
                                   
                                       <div className="input-field col s6">
                                        <input id="password" name="password" value={this.state.password || ''}  onChange={this.handleChange} type="password" placeholder="Contraseña"/>                                     
                                        </div>
                                   </div>
                           

                                    <br/>
                                  
                            
                                    <button type="submit" id="crear" className="btn">Crear</button>
                                    <p>Al continuar, aceptas las <span>Condiciones de servicio y la Política de privacidad</span> de OurRecipeBook.</p><br/>
                                     <p>¿Ya tienes una cuenta de OurRecipeBook?<br/><a href="/login">¡Inicia seccion ahora!</a></p> 
                               </form>
                           </div>
                       </div>
                    </div>
                    <br/><br/><br/><br/><br/>
                         <div>
                            {
                        
                              this.state.usuarios.map(item=> {
                                return(
                                    <div key={item._id}>
                                        <p>{item.nombre}</p>
                                        <p>{item.apellido}</p>
                                        <p>{item.email}</p>
                                        <p>{item.password}</p>
                                        <p>{item.fecha}</p>
                                        <hr/>


                                    </div>

                                 )
                              
                              })
                         
                         

                             }
     
                        </div>     
               </div> 

            </div>
        </div>
    }
}

export default Usuario;