import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { ConnectWalletButton } from './walletConnect'

export default function Navbar() {
  return (
    <Disclosure as='nav'>
      <div className='mx-auto lg:py-5 py-2 px-5 sm:px-8 lg:px-10'>
        <div className='relative flex items-baseline mt-4 justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center cursor-pointer'>
              <Link href='/'>
                <h1 className='block lg:hidden h-8 w-auto font-bold text-2xl'>Stream Over NFT</h1>
              </Link>
              <Link href='/'>
                <h1 className='hidden lg:block h-8 w-auto font-bold text-2xl'>Stream Over NFT</h1>
              </Link>
            </div>
          </div>
          <div className='sm:ml-6'>
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
