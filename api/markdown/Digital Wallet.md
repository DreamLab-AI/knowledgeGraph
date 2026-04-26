iri:: http://narrativegoldmine.com/blockchain#DigitalWallet
uri:: urn:visionclaw:concept:blockchain:digital-wallet
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:digital-wallet
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Digital Wallet
content-hash:: sha256-12-dda4f7b2e78a
legacy-term-id:: MV-9881
status:: active
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A software application or hardware device that stores private keys and enables users to manage, send, and receive cryptocurrencies and digital assets on blockchain networks, with self-custody wallets providing complete user control over private keys without third-party intermediaries.

- ### Semantic Classification
  - owl-class:: blockchain:DigitalWallet
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency Storage]]
  - requires:: [[Private Key]], [[Blockchain Network]], [[Cryptographic Security]]
  - enables:: [[Asset Management]], [[Transaction Signing]], [[DeFi Access]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

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

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
