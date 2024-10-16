import Image from 'next/image'
import { useEffect, useState, useContext, useCallback } from 'react'
import Loader from '../Loader'
import axios from 'axios'
import { mockServices } from '@/utils/constants'
import { StreamOverNftContext } from '@/utils/StreamOverNftContext'
export default function BuyCard() {
  const [services, setServices] = useState<ServiceMetadata[]>([])
  const { state } = useContext(StreamOverNftContext)

  const loadServices = useCallback(async () => {
    try {
      var totalServices = await state?.SubsNFTContract.methods.totalServices().call({
        from: state.account
      })

      for (let i = 0; i <= totalServices; i++) {
        var service = await state?.SubsNFTContract.methods.services(i).call({
          from: state.account
        })

        var item: ServiceMetadata
        const metadata = await axios.get(service.ImageUri)
        if (metadata.data.image == undefined) {
          item = {
            name: service.name,
            ImageUri: 'https://ipfs.infura.io/ipfs/QmUr2JP3nAF6E4Q12mgC5M1geFt7F4y6QHUqZFE9wgMZt7',
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
      }
    } catch (error) {
      console.log('error:', error)
    }
  }, [state])

  useEffect(() => {
    if (state?.walletConnected && services.length === 0) {
      loadServices()
    }
  })

  const buyService = async (item: ServiceMetadata) => {
    console.log(item.serviceid)
    try {
      await state?.SubsNFTContract.methods.BuyServiceFromServiceProvider(item.serviceid).send({
        from: state.account,
        value: item.price
      })

      alert('Congarts, you have bought one subscription from eazyVideo')
    } catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <div>
      {services.length > 0 ? (
        <div className=' w-full h-full flex flex-col'>
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className={`cards container w-full min-h-48 text-center  p-3 border rounded-lg bg-whiteish flex flex-row mt-4`}
              >
                <div className='bg-blue w-cover h-cover border-0 rounded-lg '>
                  <div>
                    <Image
                      src={item.ImageUri}
                      blurDataURL='../../assets/blur.png'
                      placeholder='blur'
                      alt='service image'
                      width={210}
                      height={210}
                      className='object-contain rounded-lg mr-4'
                    />
                  </div>
                </div>
                <div className='text-xl px-2 w-full'>
                  <h5 className='text-left text-l mb-4 font-semibold'>{item.name}</h5>
                  <h5 className='text-left text-base'>
                    ServiceProvider address: {item.serviceProvider}
                  </h5>
                  <h5 className='text-left text-base'>Description: {item.description}</h5>
                  <h5 className='text-left text-base'>Duration: {item.planDuration}</h5>
                  <div className='px-1 py-1 h-10 mx-auto flex flex-row rounded-full items-center justify-end'>
                    <button
                      onClick={() => buyService(item)}
                      className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                      Buy@ {item.price} (Wei) BNB
                    </button>
                  </div>
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
