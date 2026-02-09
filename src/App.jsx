import { useState } from 'react'

import Footer from './Componets/MainComponents/Footer'
import Header from './Componets/MainComponents/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
