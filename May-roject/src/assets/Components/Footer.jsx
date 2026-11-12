import React from 'react'

const Footer = ({setPage}) => {
  return (
    <div className='bg-black w-full h-[340px] flex   gap-14 p-10   border-t-7 border-green-500 border-b-2 border-green-500 '>
       <div>

       <div className='flex gap-4'>
          <img className='w-[50px] h-[50px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3co-kfy46jLuMjEI9USekrKg1XZ_mdHtmQW1nXCjJA&s=10" alt="" ></img>
         <h1 className='text-green-400 text-4xl font-bold'>ShopEase</h1>
       </div>
        <p className='text-white text-2xl font-bold'>your one shop for beauty,<br />and everyday essentails <br /> Delivered freh to your door ...</p>
           
           <div>
         
           </div>
       </div>
       
            
             

        <div className='ml-10'>
            <h1 className='text-green-400 text-2xl font-bold'>Quick Links</h1>
            <ul  className='text-white text-2xl'>
                <li>Home</li>
                <li onClick={() => setPage('about') } className='cursor-pointer hover:text-green-400'>About Us</li>
                <li>Contect</li>
                <li>Blog</li>
            </ul>

        </div>

           <div className='ml-10'>
            <h1 className='text-green-400 text-2xl font-bold'>Catagories</h1>
            <ul  className='text-white text-2xl'>
                <li>Beauty & skincare</li>
                <li>Fresh Groceries</li>
                <li>Snack & Beverages</li>
                <li>Household</li>
            </ul>

        </div>

       <div>
        <h1 className='text-green-400 text-2xl font-bold'>Newsletter</h1>
        <p className='text-white text-2xl font-bold'>subscribe to get update on <br /> new product,promotions,and <br /> exclusive deals ...</p>
        <button className='p-4 bg-green-400 font-bold m-4 rounded-lg hover:cursor-pointer hover:bg-green-700'>Subscribe</button>

       </div>
      
    </div>
   
  )
}

export default Footer

