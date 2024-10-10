import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
}

export default function Body() {
  const handleDragStart = (e: any) => e.preventDefault()

  const items = [
    <img
      src='/assets/posters/poster1.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      className='w-full object-cover h-[400px]'
      key='1'
    />,
    <img
      src='/assets/posters/poster2.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      className='w-full object-cover h-[400px]'
      key='2'
    />,
    <img
      src='/assets/posters/poster3.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      className='w-full object-cover h-[400px]'
      key='3'
    />,
    <img
      src='/assets/posters/poster4.jpg'
      onDragStart={handleDragStart}
      role='presentation'
      className='w-full object-cover h-[400px]'
      key='4'
    />
  ]

  return (
    <div className='flex h-[75vh] flex-col lg:mx-12  lg:my-5 my-24 lg:px-4 '>
      <div className='flex items-center'>
        <div className=' text-4xl w-[40%] font-bold text-blue text-start '>
          Skip the expensive OTT subscriptions! Buy or rent content directly from your favorite
          local creators and regional producers.
          <TypeAnimation
            sequence={['Videos', 1200, 'Music', 1200, 'Regional Movies', 1200, 'Photos', 1200]}
            wrapper='span'
            speed={40}
            style={{ width: '100%', display: 'inline-block' }}
            repeat={Infinity}
          />
          as NFTs.
        </div>
        <div className='w-3/5 rounded-lg overflow-hidden'>
          <AliceCarousel
            mouseTracking={false}
            items={items}
            responsive={responsive}
            controlsStrategy='responsive'
            autoPlayDirection='ltr'
            animationEasingFunction='linear'
            autoPlay
            autoPlayStrategy='none'
            autoPlayInterval={0}
            animationDuration={3000}
            animationType='slide'
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
          />
        </div>
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
