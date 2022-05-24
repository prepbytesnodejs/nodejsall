import React,{useEffect,useState} from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SingleProduct = () => {

    const params=useParams();
    const [state,setState]=useState({});

 

    useEffect(()=>{

        axios.get(`http://localhost:9000/product/${params.productid}`).then(response=>{
       
            setState(response.data.data);  //
    
        }).catch(err=>{
            console.log(err);
        })

    },[])

    // getting the id from the url
  return (
    <div>

        <div className='row'>
            <div className='col-md-4 offset-1'>

               {
                  
                  <Product data={state}/>
               } 

            </div>

            <div className='col-md-4 offset-2'>
                <h2>
                    {state["header-top-left-text"]}
                </h2>

                <h2>
                    {state["header-top-right-text"]}
                </h2>
                



    </div>

        </div>
     


    </div>
  )
}

export default SingleProduct