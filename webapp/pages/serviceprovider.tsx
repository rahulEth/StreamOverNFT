import Footer from '../components/Footer/footer'
import Navbar from '../components/Navbar/navbar'
import Card from '../components/Cards/ServiceCard'
import AddService from '../components/Body/addService'
import { useState } from 'react'

export default function ServiceProvider() {
  const [state, setState] = useState(0)
  const Component = [
    {
      title: 'Add',
      link: <AddService />
    },
    {
      title: 'Current',
      link: <Card />
    }
  ]

  return (
    <div>
      <Navbar />
      <div className=' flex  flex-col mx-auto lg:px-4 lg:w-5/6 w-full m-2 justify-start'>
        <div className='mr-4  flex flex-col w-full  items-start'>
          <div className=' w-full m-1 flex flex-row gap-4 justify-start'>
            <button
              onClick={() => {
                setState(0)
              }}
              className='text-white disabled:opacity-60 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Add
            </button>
            <button
              onClick={() => {
                setState(1)
              }}
              className='text-white disabled:opacity-60 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'
            >
              Current
            </button>
          </div>
        </div>
        <div className='w-full mt-4  h-full flex flex-col items-center '>
          <div className='border-2 border-solid border-whiteish p-2 px-4 rounded-xl text-center w-3/4 '>
            <h1 className='text-start font-semibold text-2xl py-2'>
              {Component[state].title} Services
            </h1>
            <div className=' flex flex-row justify-around mx-auto'>{Component[state].link}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
