
import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Card from './assets/Components/Card'
import Header from './assets/Components/Header'
import Footer from './assets/Components/Footer'
import About from './assets/pages/About'
import CartModal from './assets/Components/CartModal'




const App = () => {
  
  const [cart , setCart] = useState([])
  const [isCartOpen ,setIsCartOpen] = useState(false)
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id  !== id))
  }

  const addToCart = (product) => {
    setCart([...cart ,product])
    alert(`${product.title} Cart me add ho gaya!`)
  }
  return (
    <div className='w-full min-h-screen bg-green-200  overflow-hidden '>
    <div className='w-[98%] h-vh rounded-2xl ml-10 '>

      <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
    <Header/>
      <Card addToCart={addToCart}/>
 
            <About /> 
            <Footer />
            <CartModal
            isCartOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cartItem={cart}
            onRemove={removeFromCart}
            />
          </div>
    </div>
    
  )
}

export default App
