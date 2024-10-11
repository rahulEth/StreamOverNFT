import Image from 'next/image'
import { useState, useContext, useEffect, useCallback } from 'react'
import Loader from '../Loader'
import { mockServices } from '@/utils/constants'

export default function ServiceCard() {
  const [services, setServices] = useState<ServiceMetadata[]>([])

  const loadServices = async () => {
    try {
      setServices(mockServices)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    loadServices()

    console.log(services)
  })

  return (
    <div>
      {/* <div>(Latest five active services)</div> */}
      {services.length > 0 ? (
        <div className=' flex flex-col items-center'>
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className={`cards container w-9/12 text-center p-3 border rounded-lg bg-whiteish flex flex-row my-4 `}
              >
                <div className='bg-blue w-cover border-0 rounded-lg '>
                  <Image
                    src={item.ImageUri}
                    blurDataURL='../../assets/blur.png'
                    placeholder='blur'
                    alt='service image'
                    width={280}
                    height={210}
                    className='object-contain rounded-lg mr-4'
                  />
                </div>
                <div className='text-xl px-2 w-full'>
                  <h5 className='text-left text-xl font-semibold'>Name: {item.name}</h5>
                  <h5 className='text-left text-base'>Description: {item.description}</h5>
                  <h5 className='text-left text-base'>Plan Duration: {item.planDuration} days</h5>
                  <h5 className='text-left text-base'>Plan Price: {item.price} Wei</h5>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
