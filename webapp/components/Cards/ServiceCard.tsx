import Image from 'next/image'
import { useState, useContext, useEffect, useCallback } from 'react'
import Loader from '../Loader'
import axios from 'axios'
import { mockServices } from '@/utils/constants'
import { StreamOverNftContext } from '@/utils/StreamOverNftContext'

export default function ServiceCard() {
  const { state } = useContext(StreamOverNftContext)
  const [services, setServices] = useState<ServiceMetadata[]>([])

  const loadServices = useCallback(async () => {
    try {
      for (let i = 0; i <= 5; i++) {
        var serviceId = await state?.SubsNFTContract.methods
          .serviceProviderToIds(state.account, i)
          .call({
            from: state.account
          })

        if (serviceId != undefined) {
          var service = await state?.SubsNFTContract.methods.services(serviceId).call({
            from: state.account
          })
          var item: ServiceMetadata
          const metadata = await axios.get(service.ImageUri)
          if (metadata.data.image == undefined) {
            item = {
              name: service.name,
              ImageUri:
                'https://ipfs.infura.io/ipfs/QmUr2JP3nAF6E4Q12mgC5M1geFt7F4y6QHUqZFE9wgMZt7',
              description: service.description,
              planDuration: service.planDuration,
              price: service.price,
              serviceProvider: service.serviceProvider,
              serviceid: service.serviceid
            }
          } else {
            item = {
              name: service.name,
              ImageUri: metadata.data.image,
              description: service.description,
              planDuration: service.planDuration,
              price: service.price,
              serviceProvider: service.serviceProvider,
              serviceid: service.serviceid
            }
          }
          setServices((services) => [...services, item])
        } else break
      }
    } catch (error) {
      console.log('error:', error)
    }
  }, [state])

  useEffect(() => {
    if (state?.walletConnected && services.length === 0) {
      loadServices()
    }
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
