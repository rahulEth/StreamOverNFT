![Logo](docs/)

# About

A unique P2P NFT-backed OTT streaming marketplace. No more costly subscription plans that are hardly used 10-15% of the time, you only pay for what you watch. Buy or rent your favourite shows from any of the OTT platform like Netflix, Disney+, Amazon Prime, HBO Max as NFT for specific amount of time.

## What This Project is Solving

When we subscribe to an OTT platform, we typically use only 5-10% of the subscription period, yet we pay for the entire duration. Additionally, users often share their subscriptions with friends, leading to a single-screen plan being used across multiple devices, which results in losses for service providers. To address these issues, we are coming up with NFT backed p2p subscription model that benefits both customers and service providers alike.
With our new model, whenever a user purchases a show, an NFT is minted and stored in their wallet, ensuring authentication and validation. This approach prevents subscription sharing since access is tied to the user's wallet. Additionally, users can rent out their NFT during unused time, further maximizing the value of their subscription.
## Getting Started on local 

To run daap locally, you will need

- Node.js (v18 or above)
- Chrome Browser Or Chromium based browser
- Metamask Extension on Chrome Browser (Chromium based browser)

# back-end

1. clone this repo

```
git clone https://github.com/rahulEth/StreamOverNFT.git
```

2.  go to api folder

```
cd api
```

3. copy .env.example to .env 

4. setup all the environment variables including moralis ipfs key, app-wallet private key
& wallet address, mongodb url.

5. 
```
npm install

npm run start

```
server would start on localhost:3000

# front-end

1. go into webapp folder

```
cd webapp

npm install

npm run build

npm run dev

```

## Deployed Contract

https://sepolia.basescan.org/address/0xb1e63bb860e5bb1af52aa82b00aa5b444162cd87


