import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Product = ({data}) => {
    const navigate=useNavigate();

    const productPage=(id)=>{
        navigate(`/products/${id}`)
        
    }
  return (
    <div className="col">
    <div className="card shadow-sm">

  <img src={data['product-image-url']} alt="" />
      <div className="card-body">
        <p className="card-text">{data['product-name']}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>productPage(data.id)}>View</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small className="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product