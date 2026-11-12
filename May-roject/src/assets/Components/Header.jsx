import React from 'react'

const Header = () => {
  return (
    <div className='bg-green-400 ronded-2xl flex justify-between w-[96%] h-[230px] m-5 mt-17 rounded-2xl '>
        <div >
            <h1 className='font-bold text-4xl m-4'>Summer Beauty & Groceries Sale</h1>
        <p className='font-bold m-4'> Up to 30% offf Fresh & Beauty Essentils</p>
        
        </div>
        <div>
             <img className='w-[300px] h-[190px] rounded-2xl mt-3 mr-4 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq44aEhvaPuJUW6QcQOGtIRLzgmRDfv4GgRVQHPepZ9g&s=10" alt="" />
        </div>

      
    </div>
  )
}

export default Header
