import React from 'react'
import { useEffect, useState } from 'react';

const Card =  ({addToCart}) => {
  const [products , setProducts] = useState([])
  const [select , setSelect] = useState(null)
   
  const getData = async () => {

 
  const res = await fetch(`https://dummyjson.com/products`)
  const data = await res.json()
  setProducts(data.products)
  console.log(products)
  }

  useEffect(() => {
   getData()
  },[])

 
    
  return(
    <div className='flex flex-wrap gap-4 p-4 '>
     {products.map ((item) => (
      <div key={item.id} onClick={() => setSelect(item)} className=' transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:cursor-pointer  bg-white w-[300px] h-[300px] p-4 shodow-lg rounded-lg mt-6 '>
        <img src={item.images[0] || 'https://via.placeholder.com/150'} alt={item.title} className='w-full h-[200px] object-cover rounded-2xl' />
        <h1 className='font-bold mt-2'> {item.title}</h1>
        <p>${item.price}</p>
      </div>
     ))}
     {select && (
      <div className='fixed  inset-0 bg-black/60 flex items-center justify-center z-50 p-4'
      onClick={() => setSelect(null) }>
           
           <div className='bg-white w-full max-w-2xl rounded-2xl p-6 relative' 
           onClick={(e) => e.stopPropagation()}>

            <button onClick={() => setSelect(null)}
              className='absolute top-3 right-3 bg-red-500 text-white w-8 h-8 rounded-full'>X</button>
              <img src={select.images} className='w-full h-64  object-contain'/>
              <h1 className='text-2xl font-bold mt-4'>{select.title}</h1>
              <p className='text-gray-500  mt-2'>{select.description}</p>

              <div className='flex justify-between items-center mt-4'>
                <p className='text-2xl font-bold text-green-600'>${select.price}</p>
                <p className='rounded-full  px-3 py-1 text-yellow-400 text-bold text-xl'>{select.rating}Rating</p>

              </div>

              <p className='mt-2 text-sm'>Stock: {select.stock} | Brand: {select.brand}</p>
              <button onClick={() => addToCart(select)} className='w-full bg-green-500 text-white py-3 rounded-xl mt-5 font-bold hover:cursor-pointer hover:bg-green-700'>Add to Card</button>
           </div>
      </div>
     )}
    </div>
  )
    

        
  
}

export default Card


//  async function getProducts() {
//     try {
//         const res = await fetch(`https://dummyjson.com/products`);
//         const data = await res.json();
//         console.log(data.products); // Data check karne ke liye
//     } catch (error) {
//         console.error("Data fetch karne mein error aaya:", error);
//     }
// }


// getProducts();