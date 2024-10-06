import type { NextPage } from 'next'

import Navbar from '../components/Navbar/navbar'
import Body from '../components/Body/body'
import Footer from '../components/Footer/footer'

const Home: NextPage = () => {
  return (
    <div className='main font-primary px-24 h-[100vh]'>
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home
