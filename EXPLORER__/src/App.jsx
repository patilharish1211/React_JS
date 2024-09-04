import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Content />
     <Footer />
    </>
  )
}

export default App