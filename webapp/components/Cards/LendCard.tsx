import { useEffect, useState, useContext, useCallback } from 'react'
import Image from 'next/image'
import Loader from '../Loader'
export default function LendCard() {
  const [userAvailableServices, setUserAvailableServices] = useState<NFTMetadata[]>([])
  const [userForLendServices, setUserForLendServices] = useState<LendMetadata[]>([])
  const [formInput, updateFormInput] = useState({
    tokenid: 0,
    price: 0,
    duration: 0
  })

  return (
    <div>
      <div className='  my-2 text-2xl py-2'>
        <hr />
        <div>Available Plans</div>
        <hr />
      </div>
      {userAvailableServices.length > 0 ? (
        <div>
          {userAvailableServices.map((item, index) => {
            return (
              <div
                key={index}
                className={`container w-full text-center p-3 border-0 rounded-lg bg-whiteish flex flex-row my-4`}
              >
                <div className='bg-blue w-cover h-cover border-0 rounded-lg '>
                  <div>
                    <Image
                      src={item.ImageUri}
                      blurDataURL='../../assets/eazy_logo.png'
                      placeholder='blur'
                      alt='service image'
                      width={220}
                      height={210}
                    />
                  </div>
                </div>
                <div className='px-2 w-full text-left text-lg'>
                  <h5>ServiceProvider address: {item.serviceProvider}</h5>
                  <h5>Name: {item.serviceName}</h5>
                  <h5>Description: {item.description}</h5>
                  <h5>End-date: {item.endTime}</h5>
                </div>
                <div className='flex flex-col'>
                  <div className='bg-white flex items-center rounded-lg border-2 border-solid border-grey shadow-xl'>
                    <input
                      className='rounded-l bg-white w-full px-4 text-gray leading-tight focus:outline-none'
                      type='number'
                      placeholder='0.5'
                    />
                    <button className='text-black rounded-lg border-2 border-solid border-grey focus:outline-none w-24 h-12 flex items-center justify-center'>
                      BNB/day (Wei)
                    </button>
                    For
                    <input
                      className='rounded-l bg-white w-full px-4 text-gray leading-tight focus:outline-none'
                      type='number'
                      placeholder='20 days'
                    />
                    Days
                  </div>
                  <div className='px-1 cursor-pointer py-1 mt-5 w-2/4 h-10 mx-auto flex flex-row bg-purple hover:brightness-105 hover:scale-105 rounded-full items-center justify-center'>
                    <button className='inline-block '>Lend</button>
                  </div>
                </div>
              </div>
            )
          })}

          <div className=' my-2 text-2xl py-2'>
            <div>
              <hr />
              <div>For Lent Plans</div>
              <hr />
            </div>
            <div className=' flex flex-row flex-wrap'>
              {userForLendServices.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`container text-center p-3 border-0 rounded-lg bg-whiteish flex flex-col m-4 `}
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
                    <div className='px-2 w-full text-left text-lg text-black'>
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
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}
