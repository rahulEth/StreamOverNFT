import { useEffect, useState, useContext, useCallback } from 'react'
import Loader from '../Loader'
import Image from 'next/image'

export default function RentCard() {
  const [forLendServices, setForLendServices] = useState<LendMetadata[]>([])

  return (
    <div>
      {forLendServices.length > 0 ? (
        <div className=' my-4 flex flex-row'>
          {forLendServices.map((item, index) => {
            return (
              <div
                key={index}
                className={`container w-full text-center p-3 border-0 rounded-lg bg-whiteish flex flex-col m-4 `}
              >
                <div className='bg-blue w-cover border-0 rounded-lg p-2 '>
                  <Image
                    className='pt-5'
                    src={item.NFT.ImageUri}
                    blurDataURL='/assets/TurtlePlaceholder.png'
                    alt='placeholder'
                    width={220}
                    height={240}
                  />
                </div>
                <div className='px-2 w-full text-left text-lg'>
                  <h5>ServiceProvider: {item.NFT.serviceProvider}</h5>
                  <h5>Owner: {item.NFT.owner}</h5>
                  <h5>Description: {item.NFT.description}</h5>
                  <h5>Name: {item.NFT.serviceName}</h5>
                  <h5>
                    {item.price} BNB (Wei) for {item.duration} days
                  </h5>
                </div>
                <div className='flex flex-col'>
                  <div className='px-1 cursor-pointer py-1 mt-5 w-full h-10 mx-auto flex flex-row bg-purple hover:brightness-105 hover:scale-105 rounded-full items-center justify-center'>
                    <button className='inline-block '>Rent</button>
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
