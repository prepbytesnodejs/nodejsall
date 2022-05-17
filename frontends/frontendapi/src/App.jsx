import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [name, setName] = useState("")

const callApi=()=>{

  // formdata -->file upload


  const config={
    headers:{
      "content-type":"application/x-www-form-urlencoded"
    }

  }
  axios.post("http://localhost:9090/postroute",{name:name},config).then(response=>{
  
    console.log(response.data);
  }).catch(err=>{
    console.log(err);
  })

}

const handleChange=(event)=>{
  setName(event.target.value);
}


  return (
    <div className="container">

      <div className='row' style={{marginTop:"200px"}}>
        <div className='col-md-6'>

          <input className='form-control' name='name' onChange={handleChange} type="text"/> <br/>

          <button className='btn btn-info' onClick={callApi}>

            Submit
          </button>


        </div>

      </div>

      
     
    </div>
  )
}

export default App
