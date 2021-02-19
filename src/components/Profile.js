
import React,{useState} from 'react'
import axios from 'axios'
import PlacesAutocomplete from 'react-places-autocomplete';
import {useParams} from 'react-router-dom' 
import './styles/Profile.css'


const Profile = () =>{
    const { id } = useParams();
    const [address,setAddress] = useState("");
    const [primera, setPrimera] = useState();
  

   

      function componentDidMount(){
           axios.get(`http://localhost:5000/profile/${id}`)
           .then(response=>{
               console.log(response.data.perfil.length)
               setPrimera(response.data.perfil.length)
           })
           .catch((error)=>{
               console.log(error);
           })
       }

       function addTask(e){

        e.preventDefault();

        if(primera===0){
           
            console.log('posteando');
            console.log(primera)
            
            let ch1 = document.getElementById('ch1');
            let ch2 = document.getElementById('ch2');
            let ch3 = document.getElementById('ch3');
            let ch4 = document.getElementById('ch4');
            let ch5 = document.getElementById('ch5');
            let ch6 = document.getElementById('ch6');
    
            if(ch1.checked){
                ch1='Postres';
            }else{
                ch1=''
            }
            if(ch2.checked){
                ch2='Plato Fuerte'      
            }else{
                ch2=''
            }
            if(ch3.checked){
                ch3='Bebidas'      
            }else{
                ch3=''
            }
            if(ch4.checked){
                ch4='Guarniciones'      
            }else{
                ch4=''
            }
            if(ch5.checked){
                ch5='Desayunos'      
            }else{
                ch5=''
            }
            if(ch6.checked){
                ch6='Cenas'      
            }else{
                ch6=''
            }
    
            let lugar = document.getElementById('place');
            console.log(lugar.value);
            
                
            const info = {
                category:[
                    ch1,
                    ch2,
                    ch3,
                    ch4,
                    ch5,
                    ch6
                ],
                place:lugar.value
               }
    
              axios.post(`http://localhost:5000/profile/${id}`,info)
              .then(response=>{
                  console.log(response.data.profile.category)
                  
                  window.location=`/inicio/${id}`;
         
              })
              .catch((error)=>{
                  console.log(error);
              })
        }else{
            console.log('actualizando');

            let ch1 = document.getElementById('ch1');
            let ch2 = document.getElementById('ch2');
            let ch3 = document.getElementById('ch3');
            let ch4 = document.getElementById('ch4');
            let ch5 = document.getElementById('ch5');
            let ch6 = document.getElementById('ch6');
    
            if(ch1.checked){
                ch1='Postres';
            }else{
                ch1=''
            }
            if(ch2.checked){
                ch2='Plato Fuerte'      
            }else{
                ch2=''
            }
            if(ch3.checked){
                ch3='Bebidas'      
            }else{
                ch3=''
            }
            if(ch4.checked){
                ch4='Guarniciones'      
            }else{
                ch4=''
            }
            if(ch5.checked){
                ch5='Desayunos'      
            }else{
                ch5=''
            }
            if(ch6.checked){
                ch6='Cenas'      
            }else{
                ch6=''
            }
    

            var lugar = document.getElementById('place');
            console.log(lugar.value);


            const infoA = {
                category:[
                    ch1,
                    ch2,
                    ch3,
                    ch4,
                    ch5,
                    ch6
                ],
                place:lugar.value
               }
   axios.put(`http://localhost:5000/profile/${id}`,infoA)
          .then(response=>{
              console.log(response)
              window.location=`/inicio/${id}`;

          })
          .catch((error)=>{
              console.log(error);
          })
       
        }
       
       }

    

        return <div>
            {componentDidMount()}
                <div className="caja-profile">
                <h2>¿En cuales de estas categorias te destacas?</h2>

                    <form onSubmit={addTask}>
                            <div className="categorias">
                                    <div>
                                        <label className="switch">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/postres.jpg?alt=media&token=ee0fb3d6-4414-4d2a-9d1c-0b36d43f4061" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Postres</h4>
                                        <input name="category1" id="ch1"  type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="switch">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/platofuerte.jpeg?alt=media&token=0e9f73e9-107c-4cf8-9e7b-112f09b7b3d6" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Plato Fuerte</h4>
                                        <input name="category2"id="ch2" type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="switch">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/bebidas.jpg?alt=media&token=96df3a07-1222-4e8b-8d4f-ac6e42ea699f" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Bebidas</h4>
                                        <input name="category3" id="ch3" type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="switch"> 
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/guarnicion.jpg?alt=media&token=835196a7-aa7f-459e-84ee-6ee4fdd2a843" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Guarniciones</h4>
                                        <input name="category4" id="ch4"  type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="switch">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/desayunos.jpeg?alt=media&token=9b28f3d9-15cb-4b96-a042-56b35d48b88e" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Desayunos</h4>
                                        <input name="category5" id="ch5"  type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className="switch">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/jugyff-66308.appspot.com/o/cenas.jpeg?alt=media&token=b4e3b358-db1f-4857-99bd-41617f372f00" className="rounde" alt="imagen" width="210px" height="210"></img>
                                        <h4>Cenas</h4>
                                        <input name="category6" id="ch6"  type="checkbox"/>
                                        <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>    
                                <div className="place-div">
                                  <h2>¿Donde vives?</h2>

                                   <PlacesAutocomplete value={address} onChange={setAddress} >
                                   {
                                   ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => 
                                   (
                                   <div>
                                       <input id="place" maxLength="80" {...getInputProps({placeholder:"Lugar"})}/>
                                       <div>
                                           {loading? <div>...loading</div>:null}
                     
                                           {
                                           suggestions.map((suggestions)=>{
                                               const style = {
                                                   backgroundColor: suggestions.active ? "#01579b" : "white",
                                                   color: suggestions.active ? "white" : "black"

                                               }
                                               
                                               return <div {...getSuggestionItemProps(suggestions,{style})} >
                                                          <div key={suggestions.id}>
                                                            {suggestions.description}
                                                          </div>
                           
                                                        {console.log(address)}
                                                       </div>
                                                   
                                           })
                                           }
                                       </div>
                                   </div>
                                   )
                                   }
                                   </PlacesAutocomplete>

        
                                </div>   
                                
                                <button type="submit" id="guardar" className="btn">Guardar</button>
                            </form>
                        </div>
                </div>       
    
}

export default Profile;