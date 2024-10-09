![Logo](docs/)

# About

A unique P2P NFT backed content-sharing marketplace for local producers and individual creators. Say goodbye to expensive subscriptions you barely use! Now, you only pay for what you enjoy. Buy or rent exclusive content from local creators directly, supporting them while getting access to your favorite videos, music, and more for a specific amount of time.

## What This Project is Solving

When local creators or producers sell their content, they have to pay high commissions to distributors and OTT platforms. This eats into their revenue, with a large portion going to intermediaries. Meanwhile, consumers end up paying more for the same content.
we are coming up with NFT backed p2p subscription model that benefits both customers and local creators.
With our new model, whenever a user purchases a show, an NFT is minted and stored in their wallet, ensuring authentication and validation. This approach prevents subscription sharing since access is tied to the user's wallet. Additionally payment goes directl into creators account. Also users can rent out their NFT during unused time, further maximizing the value of their subscription.
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