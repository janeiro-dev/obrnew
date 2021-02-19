import React,{useState} from 'react'
import axios from 'axios'
import PlacesAutocomplete from 'react-places-autocomplete';
import {useParams} from 'react-router-dom' 
export default function Place() {
    const [address,setAddress] = useState("");
    const {id} = useParams();

    const enviar = (e) =>{
        e.preventDefault();
        var lugar = document.getElementById('place');
        console.log(lugar.value);


        const places = {
            place:lugar.value,
            usuario:id
        }

        axios.post(`http://localhost:5000/profile/${id}`,places)
           .then(response=>{
               console.log(response) 
           })
           .catch((error)=>{
               console.log(error);
           })
    }


    return (
        <div>
        <PlacesAutocomplete value={address} onChange={setAddress} >
        {
        ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => 
        (
        <div>
            <input id="place"{...getInputProps({placeholder:"Place"})}/>
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
        <button type="submit" onClick={enviar} className="btn light-blue darken-4">Send</button>

        
        </div>
    )
}
