import React from 'react'

const CartModal = ({isCartOpen , onClose ,cartItem , onRemove}) => {
    if(!isCartOpen) return null;
    const total = cartItem.reduce((sum,item) => sum + item.price ,0)
    
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50' onClick={onClose}>
      <div className='bg-white w-[90%] max-w-md rounded-2xl p-5 max-h-[80vh] over-y-auto' onClick={(e) => e.stopPropagation()}>
        <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-bold'>
                your cart ({cartItem.length})</h2>
                <button onClick={onClose} className='text-2xl font-bold'>X</button>
                </div>
                {cartItem.length === 0 ? (
                    <p className='text-center text-gary-500 py-10'> Cart khaali ha, kuch add karo!</p>
                ) : ( 
                    cartItem.map((item) => (
                        <div key={item.id} className='flex items-center gap-3 border-b py-3'>
                            <img src="{item.images}" alt={item.title}  className='w-16 h-16 object-cover rounded-lg'/>
                            <div className='flex-1'>
                                <h3 className='font-semibold text-sm'>{item.title}</h3>
                                <p className='text-green-600 font-bold'>${item.price}</p>
                                </div>
                                <button onClick={() => onRemove(item.id)} className='bg-red-500 text-white px-3 py-1 rounded-lg text-sm'> Remove

                                </button>

                        </div>
                    ))
                )}

                <div className='flex justify-between mt-4 font-bold text-lg'>
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                 <button onClick={onClose} className='w-full bg-black text-white py-2 rounded-xl mt-4'> Close</button>
        </div>  
    </div>
  )
}

export default CartModal
