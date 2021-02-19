import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './styles/Login.css'

import axios from 'axios'

class Login extends Component{

   
       

constructor(){
   
    super()

    this.state= {
        email:'',
        password:'',
        fecha:'',
        _id:''
    };

    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);



}
       
    //post
    addTask(e){
       e.preventDefault();
       console.log('hola');
       console.log(this.state)
       const loguer = {
           email:this.state.email,
           password:this.state.password  
       }

    axios.post('http://localhost:5000/login',loguer)
    .then(response=>{
       console.log(response) 
       if(response.data.ok === true){
        console.log(response.data.usuario._id)
        const idLoguer = response.data.usuario._id;
        this.setState({email:'',password:'',_id:'' })
        
        window.location=`/inicio/${idLoguer}`;
       
       }

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
          <div className="all-login">
                <div className="nav-login" style={{height:"135px"}}>
                    <a className="brand-logo"  href="/"><h1 className="display-4">OurRecipeBook</h1></a>
                    <div className="signup-buttom">
                    <NavLink to="/usuario" className="signup-b" activeClassName="active-signup-b">Registrarse</NavLink>
                    </div>
                </div>
              <div className="container-login">
                
                       <div className="card">
                           
                           <div className="card-content">

                           <h2>Bienvenidos a:</h2>
                           <h1 className="display-5">OurRecipeBook<span>&copy;</span></h1>
                           
                               <form onSubmit={this.addTask}>
                                  
                                  <div className="row">
                                   <div className="input-field col-12">
                                   <input name="email" id="Lemail" value={this.state.email}  onChange={this.handleChange} type="email" placeholder="Correo electrótico"/>                                     

                                   </div>
                                  </div>
                                   
                                  <div className="row">
                                   <div className="input-field col-12">
                                   <input name="password" id="Lpassword" value={this.state.password || ''}  onChange={this.handleChange} type="password" placeholder="Contraseña"/>                                     

                                   </div>

                                  </div>
                                  <a href="google.com">¿Olvidaste tu contraseña?</a>

                                    <br/>
                                  
                            
                                   <button type="submit" id="ir-login" className="btn">Ir</button>
                                   <p>Al continuar, aceptas las <span>Condiciones de servicio y la Política de privacidad</span> de OurRecipeBook.</p><br/>
                                     <p>¿No tienes una cuenta de OurRecipeBook?<br/><a href="/usuario">¡Regístrate ahora!</a></p> 

                               </form>
                           </div>
                       </div>
                    
                         
               </div> 
           </div>
               
        </div>
    }
}

export default Login;