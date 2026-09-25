An Ethereum account is a state entity on the Ethereum blockchain identified by a 20-byte address and holding a balance, nonce, and optionally code and storage. There are two kinds: externally owned accounts controlled by a private key, and contract accounts controlled by their deployed smart-contract code. Accounts are the unit against which transactions are debited, gas is charged, and state transitions are applied.

### Overview

- Account state lives in the world-state trie alongside balance, nonce, code hash, and storage root.
- The nonce orders an account's outgoing transactions and prevents replay.
- Contract accounts have no private key and act only when called by a transaction or another contract.

### Key aspects

- Externally owned account: balance + nonce, signs transactions.
- Contract account: balance + nonce + code + storage.
- Address derivation from the public key for EOAs; from deployer address and nonce for contracts.
- Account abstraction blurs the EOA/contract distinction via programmable validity.

### Applications

- Holding and transferring Ether and tokens.
- Deploying and interacting with smart contracts.
- Identity and authorisation in decentralised applications.
- Multi-signature and smart-contract wallets.

### Provenance

