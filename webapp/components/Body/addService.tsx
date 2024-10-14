import { useContext, useState } from 'react'
import Image from 'next/image'
import { create } from 'ipfs-http-client'
import { StreamOverNftContext } from '@/utils/StreamOverNftContext'
import Moralis from 'moralis'
import Web3 from 'web3'

export default function AddService() {
  const [fileUrl, setFileUrl] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [imageData, setImageData] = useState('')

  const { state } = useContext(StreamOverNftContext)

  const web3 = new Web3()
  const [formInput, updateFormInput] = useState({
    perDayPrice: '',
    name: '',
    description: '',
    content: '',
    duration: ''
  })

  const createService = async () => {
    let fileAsString = ''
    const { perDayPrice, name, description, duration } = formInput
    // if (!name || !description || !perDayPrice || !fileUrl) return
    if (imageUrl) {
      const reader = new FileReader()
      reader.readAsDataURL(imageUrl)

      reader.onloadend = async () => {
        setImageData(reader.result as any)
        fileAsString = reader.result as any

        const { result } = reader

        if (result) {
          const resultBuffer = Buffer.from(result.toString(), 'base64')

          const fileUploads: any = [
            {
              path: 'imageurl',
              content: {
                filename: 'Image',
                fileData: resultBuffer
              }
            }
          ]
          if (!Moralis.Core.isStarted) {
            await Moralis.start({
              apiKey: process.env.NEXT_PUBLIC_MORALIS_KEY
            })
          } else {
            console.log('Moralis is already started!')
          }
          const resp = await Moralis.EvmApi.ipfs.uploadFolder({
            abi: fileUploads
          })
          const imageIpfs = resp.result[0].path
          addService(imageIpfs)
        }
      }

      reader.onerror = (error) => {
        console.error('Error reading file: ', error)
      }
    }
  }

  async function addService(url: string) {
    try {
      if (!state?.SubsNFTContract) {
        throw new Error('Contract is not initialized')
      }
      console.log(
        'addService state: ',
        formInput.name,
        url,
        formInput.content,
        formInput.description,
        formInput.duration,
        formInput.perDayPrice,
        'account',
        state.account
      )
      await state?.SubsNFTContract.methods
        .AddServiceToStreamOverNFT(
          formInput.name,
          url,
          formInput.content,
          formInput.description,
          formInput.duration,
          web3.utils.toBN(+formInput.perDayPrice * 10 ** 18)
        )
        .send({
          from: state.account,
          gas: 2100000,
          gasPrice: 8000000000
        })
      alert('Congrats!! we have successfully added your service to our platform')
    } catch (error) {
      console.error('error:', error)
    }
  }

  const onFileChange = (e: any) => {
    if (e) {
      setImageUrl(e.target.files[0])
    }
  }

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
        <div className='bg-white flex flex-col items-center rounded-lg px-3 border-2 border-solid border-grey shadow-sm'>
          <label className=' text-black   border-grey focus:outline-none w-full h-12 flex items-center justify-start'>
            {' '}
            Content CDN Url
          </label>
          <input
            type='text'
            onChange={(e) => updateFormInput({ ...formInput, content: e.target.value })}
            className='rounded-l bg-white text-black w-full px-4 text-gray leading-tight focus:outline-none'
            placeholder='link for the content'
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
          <input
            type='file'
            accept='image/png'
            name='Asset'
            className='my-4 mr-auto'
            onChange={onFileChange}
          />
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
          <button
            onClick={createService}
            className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  )
}
