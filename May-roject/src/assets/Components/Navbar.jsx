import React from 'react'

const Navbar =  ({cartCount,onCartClick}) => {

  return (
    <div className='w-full h-[60px] flex items-center '>
      <div className='w-full h-[80px] flex items-center justify-between bg-white rounded-2xl mt-10 '>
        <div className='flex item-center'>
           <img className='w-[80px] h-[60px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrkf1hF2hY9goubhJ5IG19E4eXUZ5XZ-WXfg8Y7ABUw&s=10" alt="" ></img>
          <h1 className='font-bold text-2xl p-2 mt-2 '>  ShopEase</h1>
          
        </div>

        
        <div className='flex items-center gap-3'>
          <div className='relative mr-2 cursor-pointer' onClick={onCartClick}>
         cart
            <span className='absolute-top-2-right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>{cartCount}</span>
            </div> 
          <input className='border-none  bg-gray-300 p-2 w-[300px] rounded-lg pr-10 ' type="text" placeholder="search for beauty and groceries" />
          <button className='p-2 bg-green-200 m-3  '>search</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar
