import { Suspense } from 'react'
import './App.css'
import Cardsec from './assets/components/Cardsec'
import Footer from './assets/components/footer'
import Navbar from './assets/components/Navbar'
import Progress from './assets/components/Progress'

const fetchData=fetch('/public/data.json') .then(res=>res.json())

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Progress></Progress>
      <Suspense fallback={<h1>Loading....</h1>
      }>
        <Cardsec fetchData={fetchData}></Cardsec>
      </Suspense>
      <Footer></Footer>
     
    </>
  )
}

export default App
