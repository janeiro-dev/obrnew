import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound'
import LoginPage from '../pages/LoginPage'
import UsuarioPage from '../pages/UsuarioPage'
import InicioPage from '../pages/InicioPage'
import ProfilePage from '../pages/ProfilePage'
import PlacePage from '../pages/PlacePage'
import SettingsPage from '../pages/SettingsPage'
import EditNombrePage from '../pages/EditNombrePage'
import EditPassword from './EditPassword'
import EditImagen from './EditImagen'




const App = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/usuario" component={UsuarioPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/profile/:id" component={ProfilePage}/>
        <Route path="/place/:id" component={PlacePage}/>
        <Route path="/inicio/:id" component={InicioPage}/>
        <Route path="/settings/:id" component={SettingsPage}/>
        <Route path="/editNombre/:id" component={EditNombrePage}/>
        <Route path="/editPassword/:id" component={EditPassword}/>
        <Route path="/editImagen/:id" component={EditImagen}/>

        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )

  export default App;