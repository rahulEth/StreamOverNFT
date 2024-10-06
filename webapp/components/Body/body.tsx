import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

export default function Body() {
  return (
    <div className='flex h-[75vh] flex-col lg:mx-64  lg:my-5 my-24 lg:px-4 lg:w-3/4 '>
      <div className=' text-5xl font-bold text-blue text-start lg:w-3/4 pt-5'>
        Skip the expensive subscriptions! Buy or rent your favorite shows from OTT platforms like
        <TypeAnimation
          sequence={['Netflix', 1200, 'Disney+', 1200, 'Amazon Prime', 1200, 'HBO Max', 1200]}
          wrapper='span'
          speed={40}
          style={{ width: '100%', display: 'inline-block' }}
          repeat={Infinity}
        />
        as NFTs.
      </div>
      <div className=' py-10 z-10 w-full'>
        <h1>Choose your profile type</h1>
        <div className='flex flex-row mt-3 '>
          <Link href='/user'>
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>
              User
            </button>
          </Link>
          <Link href='/serviceprovider'>
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>
              Service Provider
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
