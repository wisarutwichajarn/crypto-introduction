import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './Contants/Navbar'
// import Login from './Contants/Login';
import ABOUT_US from './Contants/ABOUT_US'
import INFORMATION from './Contants/INFORMATION'
import VIDEO from './Contants/VIDEO'
import TYPE_OF_CRYPTO from './Contants/TYPE_OF_CRYPTO'
import EAMPLE_CRYPTO from './Contants/EAMPLE_CRYPTO'
import FAQ from './Contants/FAQ'
import MARKET from './Contants/MARKET'
import SAMPLE_USER from './Contants/SAMPLE_USER'
import NEWS from './Contants/NEWS'
import FOOTER from './Contants/FOOTER'
import COPYRIGHT from './Contants/COPYRIGHT'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Login></Login> */}
    <Navbar></Navbar>
    <ABOUT_US></ABOUT_US>
    <INFORMATION></INFORMATION>
    <VIDEO></VIDEO>
    <TYPE_OF_CRYPTO></TYPE_OF_CRYPTO>
    <EAMPLE_CRYPTO></EAMPLE_CRYPTO>
    <FAQ></FAQ>
    <MARKET></MARKET>
    <SAMPLE_USER></SAMPLE_USER>
    <NEWS></NEWS>
    <FOOTER></FOOTER>
    <COPYRIGHT></COPYRIGHT>
    </>
  )
}

export default App
