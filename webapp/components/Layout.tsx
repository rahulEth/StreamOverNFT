// layout.tsx
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { StreamOverNftContext } from '../utils/StreamOverNftContext'
import Web3 from 'web3'
import contractAbi from '../abis/streamOverNftContract.json'

const Layout = ({ children }: any) => {
  const router = useRouter()

  const [state, setState] = useState({
    account: '0x0',
    walletConnected: false,
    web3: '',
    SubsNFTContract: '',
    accountType: 0,
    loaded: false // make sure loaded state is used properly
  })

  useEffect(() => {
    const loadBlockchainData = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        const accounts = await web3.eth.getAccounts()

        const networkId = await web3.eth.net.getId()
        console.log('Network ID:', networkId, contractAbi)
        const deployedNetwork = contractAbi.networks[networkId]
        const SubsNFTContract = new web3.eth.Contract(
          contractAbi.abi,
          deployedNetwork && deployedNetwork.address
        )

        setState({
          ...state,
          account: accounts[0],
          walletConnected: true,
          web3: web3,
          SubsNFTContract: SubsNFTContract,
          loaded: true // Set loaded to true after contract is initialized
        })
      }
    }

    if (!state.loaded) {
      loadBlockchainData()
    }
  }, [state.loaded])

  useEffect(() => {
    if (!state.walletConnected) {
      console.log('wallet not connected')
      // router.push('/')
    }
  }, [state.walletConnected, router])

  return (
    <StreamOverNftContext.Provider value={{ state, setState }}>
      <div>{children}</div>
    </StreamOverNftContext.Provider>
  )
}

export default Layout
