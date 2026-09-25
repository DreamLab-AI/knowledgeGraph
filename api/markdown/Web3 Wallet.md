A Web3 wallet is a software or hardware tool that manages a user's cryptographic key material and lets them hold blockchain assets, sign transactions and authenticate to decentralised applications. Unlike a custodial account, it places control of the private key with the user, who proves ownership and authorises state changes by signing locally. Web3 wallets typically expose an injected provider or connection protocol that bridges a browser or mobile app to one or more blockchain networks.

### Overview

- The wallet holds the secret key locally and never reveals it; only signatures derived from it leave the device.
- A recovery [[Seed Phrase]] deterministically regenerates all keys, making backup the user's responsibility.
- Wallets inject a provider into the page or expose a connection protocol so decentralised apps can request signatures.
- They aggregate balances, token metadata and transaction history by reading on-chain state through node endpoints.

### Mechanisms

- Hierarchical deterministic derivation expands a single seed into many [[Public Key]] and address pairs.
- Transaction construction assembles a payload, estimates fees and presents it to the user for explicit approval.
- Local signing produces an ECDSA or EdDSA signature that the network verifies against the sender address.
- Connection sessions scope which accounts and chains an application may see, limiting exposure.

### Applications

- Interacting with [[DeFi]] protocols for lending, swapping and yield without surrendering custody.
- Minting, holding and transferring an [[NFT]] across marketplaces.
- Authenticating to dapps via signature challenges instead of passwords.
- Coordinating shared treasuries through a [[Multisig Wallet]] requiring multiple approvals.

### Provenance

