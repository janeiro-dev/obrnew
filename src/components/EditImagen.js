import axios from 'axios';
import React,{useState} from 'react'; 
import { useParams } from 'react-router-dom';
import './styles/EditFoto.css'


const EditImagen = () =>{ 

  const {id} = useParams();

      // Initially, no file is selected 
      const [archivo,setArchivo] = useState('')
     
    // On file select (from the pop up) 
   const onFileChange = event => { 
      // Update the state 
      setArchivo(event.target.files[0]); 
    }; 
     
    // On file upload (click the upload button) 
   const onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      if(archivo!==''){
      formData.append( 
        "archivo", 
        archivo, 
        archivo.name 
      ); 
      }
     
      // Details of the uploaded file 
      console.log(archivo); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.put(`http://localhost:5000/upload/${id}`, formData)
      .then(response=>{
        console.log(response)
        console.log(response.data.img)
        window.location=`/settings/${id}`;
        
      })
      .catch((error)=>{
        console.log(error)
        window.location=`/settings/${id}`;

      })

      ; 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
   const fileData = () => { 
      if (archivo) { 
          
       console.log(
        '(File Details:'+
        ')-(File Name:'+archivo.name+
        ')-(File Type:'+archivo.type+
        ')-(Last Modified:'+archivo.lastModifiedDate.toDateString()+')'
       )
      } else { 
          console.log('Choose before Pressing the Upload button');
      } 
    }
     
      return ( 
        <div> 
            <div className="edit-foto-caja"> 
                <label htmlFor="file">«Elija una foto«</label>
                <input type="file" onChange={onFileChange} id="file" className="inputfile"/> 
                <button className="btn bg-white" id="boton"  onClick={onFileUpload} > 
                  Subir
                </button>
                <h3>{archivo[0]}</h3>
            </div> 
          {fileData()} 
        </div> 
      ); 
    } 
  
  
  export default EditImagen; 



//   import axios from 'axios';
// import React,{Component} from 'react'; 
// class EditImagen extends Component { 

//     state = { 
  
//       // Initially, no file is selected 
//       archivo: null
//     }; 
     
//     // On file select (from the pop up) 
//     onFileChange = event => { 
//       // Update the state 
//       this.setState({ archivo: event.target.files[0] }); 
//     }; 
     
//     // On file upload (click the upload button) 
//     onFileUpload = () => { 
//       // Create an object of formData 
//       const formData = new FormData(); 
     
//       // Update the formData object 
//       formData.append( 
//         "archivo", 
//         this.state.archivo, 
//         this.state.archivo.name 
//       ); 
     
//       // Details of the uploaded file 
//       console.log(this.state.archivo); 
     
//       // Request made to the backend api 
//       // Send formData object 
//       axios.put(`http://localhost:5000/upload/601f68861ef5a4045b23d66b`, formData)
//       .then(response=>{
//         console.log(response)
//       })
//       .catch((error)=>{
//         console.log(error)
//       })
      
//       ; 
//     }; 
     
//     // File content to be displayed after 
//     // file upload is complete 
//     fileData = () => { 
//       if (this.state.archivo) { 
          
//         return ( 
//           <div> 
//             <h2>File Details:</h2> 
//             <p>File Name: {this.state.archivo.name}</p> 
//             <p>File Type: {this.state.archivo.type}</p> 
//             <p> 
//               Last Modified:{" "} 
//               {this.state.archivo.lastModifiedDate.toDateString()} 
//             </p> 
//           </div> 
//         ); 
//       } else { 
//         return ( 
//           <div> 
//             <br /> 
//             <h4>Choose before Pressing the Upload button</h4> 
//           </div> 
//         ); 
//       } 
//     }; 
     
//     render() { 
//       return ( 
//         <div> 
//             <h1> 
//               GeeksforGeeks 
//             </h1> 
//             <h3> 
//               File Upload using React! 
//             </h3> 
//             <div> 
//                 <input type="file" onChange={this.onFileChange} /> 
//                 <button onClick={this.onFileUpload}> 
//                   Upload! 
//                 </button> 
//             </div> 
//           {this.fileData()} 
//         </div> 
//       ); 
//     } 
//   } 
  
//   export default EditImagen; 