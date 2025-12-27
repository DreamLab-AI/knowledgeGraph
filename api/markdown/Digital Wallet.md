id:: digital-wallet-ontology

- ### OntologyBlock
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9881
	- source-domain:: bc
	- preferred-term:: Digital Wallet
	- definition:: A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.
	- status:: active
	- owl:class:: bc:DigitalWallet
	- #### Relationships
	  id:: digital-wallet-relationships
	  collapsed:: true
		- is-subclass-of:: [[Cryptocurrency Storage]]
		- enables:: [[Asset Management]], [[Transaction Signing]], [[DeFi Access]]
		- requires:: [[Private Key]], [[Blockchain Network]], [[Cryptographic Security]]
		- related-to:: [[Self-Custody]], [[Hardware Wallet]], [[Web3]]
- ## Technical Details
	- **Wallet Types**:
		- Non-custodial (self-custody): User controls private keys
		- Custodial: Third party manages keys
		- Smart contract wallets: Account abstraction features
		- Hot wallets: Internet-connected software
		- Cold wallets: Offline hardware devices
	- **2024 Developments**:
		- Mastercard Web3 card program with MetaMask integration
		- Smart wallets with social recovery features
		- Account abstraction hiding blockchain complexity
		- Batched transactions and programmable features
	- **Popular Web3 Wallets**:
		- MetaMask: EVM-compatible blockchains
		- Phantom: Solana, Ethereum, Polygon
		- Trust Wallet: Multi-chain mobile wallet
		- Ledger/Trezor: Hardware cold storage
	- **Security**: Cold wallets safest; never share private keys
- ## Applications
	- Cryptocurrency storage and transfer
	- DeFi protocol interaction
	- NFT management
	- Web3 application authentication
	- Decentralized identity management


