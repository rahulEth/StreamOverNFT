import React, { useCallback } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const buttonStyles = {
  background: 'transparent',
  border: '1px solid transparent',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 200,
  fontFamily: 'Arial, sans-serif',
  color: 'white',
  fontSize: 16,
  backgroundColor: '#0052FF',
  paddingLeft: 15,
  paddingRight: 30,
  borderRadius: 10
}

export function ConnectWalletButton() {
  const { connectors, connect, data } = useConnect()
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const createWallet = useCallback(() => {
    if (isConnected) {
      disconnect()
    } else {
      const coinbaseWalletConnector = connectors.find(
        (connector) => connector.id === 'coinbaseWalletSDK'
      )
      if (coinbaseWalletConnector) {
        connect({ connector: coinbaseWalletConnector })
      }
    }
  }, [connectors, connect, data, disconnect])

  return (
    <div className='flex flex-col items-end'>
      <button style={buttonStyles as any} onClick={createWallet}>
        {isConnected ? `Disconnect` : 'Connect Wallet'}
      </button>
      <p className='max-w-[150px] truncate'>{data?.accounts[0]}</p>
    </div>
  )
}
