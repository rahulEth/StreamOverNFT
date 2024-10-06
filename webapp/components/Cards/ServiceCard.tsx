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
      <div>(Latest five active services)</div>
      {services.length > 0 ? (
        <div className=' flex flex-col items-center'>
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className={`container w-9/12 text-center p-3 border-0 rounded-lg bg-whiteish flex flex-row my-4 `}
              >
                <div className='bg-blue w-cover h-[19vh] border-0 rounded-lg '>
                  <Image
                    src={item.ImageUri}
                    blurDataURL='../../assets/eazy_logo.png'
                    placeholder='blur'
                    alt='service image'
                    width={280}
                    height={210}
                  />
                </div>
                <div className='text-xl px-2 w-full'>
                  <h5 className='text-left text-xl'>Name: {item.name}</h5>
                  <h5 className='text-left text-xl'>Description: {item.description}</h5>
                  <h5 className='text-left text-xl'>Plan Duration: {item.planDuration} days</h5>
                  <h5 className='text-left text-xl'>Plan Price: {item.price} Wei</h5>
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
