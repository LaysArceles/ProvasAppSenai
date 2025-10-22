import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
//   const [cart,setCart] = useState({})

//  useEffect (()=>{
//   getCart();
//   })

// const getCart = async() =>
// {
//   const Response = await axios.get('https://avaliacao-bosch.onrender.com/usuario.')
//   setCart(Response.data)
//   console.log(Response.data)
// }

  return (
    <>
    <div className='h-screen'>

    <div className="flex  ">
    <div className="justify-center h-100 w-100 bg-blue-500 ">

    {/* <div className="text-3xl">
        {cart.nome}
    </div>
    <div className=" text-2xl">
        {cart.Idade}
        <br />
        {cart.ativo}
        <br />
        {cart.habilidades}
    </div> */}
        </div>
    </div>
    </div>
    
    </>
  )
}

export default App