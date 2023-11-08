import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1> Accessories
        </h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} manufacturer= {item.manufacturer} condition= {item.condition} discount= {item.discount}  />
            })}
        </div>
    </div>
  )
}

export default Popular