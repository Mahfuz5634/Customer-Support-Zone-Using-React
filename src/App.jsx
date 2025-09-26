import { Suspense, useState } from 'react'
import { ToastContainer} from 'react-toastify';
import './App.css'
import Cardsec from './assets/components/Cardsec'
import Footer from './assets/components/footer'
import Navbar from './assets/components/Navbar'
import Progress from './assets/components/Progress'
const fetchData=fetch('/public/data.json') .then(res=>res.json())



function App() {
   const [card,setcard]=useState([]);
   const [res,setres]=useState([]);


  return (
    <>
      <Navbar></Navbar>
      <Progress card={card} res={res}></Progress>
      <Suspense fallback={<h1>Loading....</h1>
      }>
        <Cardsec card={card} setcard={setcard} res={res} setres={setres}  fetchData={fetchData}></Cardsec>
      </Suspense>
      <Footer></Footer>
       <ToastContainer />
     
    </>
  )
}

export default App
