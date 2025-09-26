import { Suspense, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import Cardsec from './assets/components/Cardsec'
import Footer from './assets/components/footer'
import Navbar from './assets/components/Navbar'
import Progress from './assets/components/Progress'
const fetchData=fetch('/public/data.json') .then(res=>res.json())



function App() {
   const [card,setcard]=useState([]);


  return (
    <>
      <Navbar></Navbar>
      <Progress card={card}></Progress>
      <Suspense fallback={<h1>Loading....</h1>
      }>
        <Cardsec card={card} setcard={setcard} fetchData={fetchData}></Cardsec>
      </Suspense>
      <Footer></Footer>
       <ToastContainer />
     
    </>
  )
}

export default App
