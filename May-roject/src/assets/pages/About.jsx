import React from 'react'

const About = () => {
  return (
    <div className='w-full h-vh  flex items-center justify-center p-2'>
      <div className='w-[98%] h-vh bg-white rounded-2xl p-10  '>
        <div className='w-full h-[60px] rounded-lg shadow-2xl bg-white flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img className='w-[80px] h-[60px] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrkf1hF2hY9goubhJ5IG19E4eXUZ5XZ-WXfg8Y7ABUw&s=10" alt="" ></img>
            <h1 className='p-2 font-bold '>ShopEase</h1>
          </div>
          <div className='flex items-center '>
            <ul className='flex items-center  gap-5 p-2 text-green-500 font-bold'>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
            <button className='p-3 font-bold m-2 bg-green-400 '>Shop Now</button>
          </div>
        </div>


        <div className='w-[98%] h-vh bg-white mt-10 shadow-2xl rounded-2xl flex items-center gap-10 p-3'>
          <img className='w-[400px] h-[350px] rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTas8yDFzQgUEPtBGVGS4P5Ecc-Z_BJB-ITRQxcqRfg&s=10" alt="" />

          <div className='p-5 font-bold'>
            <h1 className='font-bold text-4xl'>About ShopEase</h1>
            <p className='text-green-700 pt-3'>At ShopEase, we're making beauty and groceries simpler,fresher, and more convenient. From skincare seeentails to ervday geroceries, we carefully curate high-quality produts delivered right to your door.Shop with confidance knowing every item is tested for quality,freshness,and authenticity</p>
          </div>

        </div>
        <div className='w-[98%] h-vh bg-white mt-2 shadow-2xl rounded-2xl flex items-center gap-10 p-3'>
          <img className='w-[400px] h-[350px] rounded-2xl ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuP3Y2rI-NaePtbMsfVD7_2boqwPNZAIvHbOzwZJ05bw&s=10" alt="" />

          <div className='flex gap-34'>
            <div>
              <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-U5w2YZlYDnnKqa3MGDoM0Um7j6LihVyKknV3VK00g&s=10" alt="" />
              <h1 className='font-bold text-2xl '>   500 + <br />products</h1>
            </div>
            <div>
              <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkVJ-VgubNTnxIIVT7IVFezJcoIp9BIJcJ0CaVkl9PTA&s=10" alt="" />
              <h1 className='font-bold text-2xl '>   100 % <br />fresh and Original</h1>
            </div>
            <div>
              <img className='w-[100px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJZmFyCSG6UwSghfb4Sduneux7MjNXzVnvF7CcDz74g&s=10" alt="" />
              <h1 className='font-bold text-2xl '>   24/7<br />Support</h1>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default About

