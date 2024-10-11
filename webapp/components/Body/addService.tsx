import { useState } from 'react'
import Image from 'next/image'

export default function AddService() {
  const [fileUrl] = useState()

  const [formInput, updateFormInput] = useState({
    perDayPrice: '',
    name: '',
    description: '',
    duration: ''
  })

  return (
    <div>
      <div>
        <div className='bg-white flex items-center rounded-lg border-2 border-solid border-grey shadow-sm'>
          <label className=' text-black  border-grey focus:outline-none w-24 h-12 flex items-center justify-center'>
            {' '}
            Name
          </label>
          <input
            className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
            type='text'
            onChange={(e) => updateFormInput({ ...formInput, name: e.target.value })}
            placeholder='Eg: Sony Liv'
          />
          <button className=' text-black rounded-lg border-grey focus:outline-none w-24 h-12 flex items-center justify-center'>
            check
          </button>
        </div>
        <br />
        <div className='bg-white flex flex-col items-center rounded-lg px-3 border-2 border-solid border-grey shadow-sm'>
          <label className=' text-black   border-grey focus:outline-none w-full h-12 flex items-center justify-start'>
            {' '}
            Description
          </label>
          <textarea
            rows={5}
            onChange={(e) => updateFormInput({ ...formInput, description: e.target.value })}
            className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
            placeholder='Owned by Sony Entertainment pvt ltd'
          />
        </div>
        <br />
        <div className=' flex flex-row '>
          <div className=' bg-white w-full h-12 mx-2 px-2 items-center rounded-lg border-2 border-solid border-grey shadow-sm flex flex-nowrap flex-row justify-around'>
            {' '}
            Price
            <input
              className='rounded-l h-full bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
              type='number'
              onChange={(e) => updateFormInput({ ...formInput, perDayPrice: e.target.value })}
              placeholder='0.5 BNB'
            />
            <h1 className='m-0 text-black rounded-lg border-grey focus:outline-none w-48'>
              BNB For
            </h1>
            <input
              className='rounded-l h-full bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
              type='number'
              onChange={(e) => updateFormInput({ ...formInput, duration: e.target.value })}
              placeholder='180 days'
            />
            Days
          </div>
        </div>
        <div>
          <input type='file' name='Asset' className='my-4 mr-auto' />
          {fileUrl && (
            <Image
              alt='Ipfs upload image'
              className='rounded mt-4'
              width='350'
              height='200'
              src={fileUrl}
            />
          )}
        </div>
        <div className=' py-10'>
          <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            Add Service
          </button>
        </div>
      </div>
    </div>
  )
}
