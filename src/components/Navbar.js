import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import './styles/Navbar.css'
import iconUsuario from '../images/iconusuario.png'
const Navbar = (props) => {
    return ( 
        <Fragment>
            <div className="navbarContent">
                <div>
                  <h1>OurRecipeBook</h1>
                </div>
                <div className="linksNav">
                 <NavLink to="" className="linkNav" activeClassName="linkNavActive">Mas votadas</NavLink>
                 <NavLink to="" className="linkNav" activeClassName="linkNavActive">Recientes</NavLink>
                 <NavLink to="" className="linkNav" activeClassName="linkNavActive">Postres</NavLink>
                </div>
                <NavLink to={`/settings/${props.id}`}>
                <div className="usuarioDiv">
                    <img src={iconUsuario} alt="usuarioImagen"></img>
                    <span>{props.nombre}</span>
                </div>
                </NavLink>
                
                
            </div>
        </Fragment>
     );
}
 
export default Navbar;