import Navbar from '../components/Navbar/navbar'
import Service from '../components/Cards/BuyCard'
import { useState } from 'react'
import LendCard from '../components/Cards/LendCard'
import RentCard from '../components/Cards/RentCard'

export default function User() {
  const [link, setLink] = useState(<Service />)

  return (
    <div className=' h-screen'>
      <Navbar />
      <div className=' flex  flex-col mx-auto lg:px-4 lg:w-5/6 w-full m-2 justify-start'>
        <div className=' mr-4 flex flex-col w-full  items-center'>
          <div className=' w-full m-1 flex gap-4 justify-start'>
            <button
              onClick={() => setLink(<Service />)}
              className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Buy
            </button>
            <button
              disabled
              onClick={() => setLink(<LendCard />)}
              className='text-white disabled:opacity-60 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Bag
            </button>

            <button
              disabled
              onClick={() => setLink(<RentCard />)}
              className='text-white  disabled:opacity-60 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Rent
            </button>
          </div>
        </div>
        <div className='lg:w-5/6 h-full flex flex-col items-center '>
          <div className=' flex flex-col justify-around mx-auto'>{link}</div>
        </div>
      </div>
    </div>
  )
}
