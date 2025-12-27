id:: bc-0438-quorum-blockchain-ontology

- ### OntologyBlock
  id:: BC-0438-quorum-blockchain
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0438
  - preferred-term:: Quorum Blockchain
  - source-domain:: bc
  - owl:class:: bc:QuorumBlockchain
  - status:: active
  - definition:: Quorum Blockchain is an enterprise-grade Ethereum-based distributed ledger platform originally developed by J.P. Morgan, designed for high-speed, high-throughput private transactions with configurable consensus mechanisms, private transaction management, and permission controls for consortium environments.
  - is-subclass-of:: [[Enterprise Blockchain]]
  - enables:: [[Private Ethereum Transactions]], [[High-Throughput Processing]], [[Enterprise Ethereum Compatibility]]
  - requires:: [[Node Configuration]], [[Transaction Manager]], [[Consensus Selection]]

### Technical Details
Key features include:
- **Ethereum Compatibility**: EVM-compatible with Solidity smart contract support
- **Private Transactions**: Tessera/Constellation transaction managers for confidential data
- **Consensus Options**: IBFT, QBFT, Raft, and Clique consensus mechanisms
- **Permission Controls**: Network and account-level access management

### Architecture Components
- **GoQuorum**: Enhanced Ethereum client with privacy and permissioning
- **Tessera**: Private transaction manager using encryption enclaves
- **Account Plugins**: Flexible account management and signing

### History and Current Status
Originally developed by J.P. Morgan, donated to Hyperledger in 2020 as Hyperledger Besu integration. ConsenSys maintains GoQuorum as open-source enterprise Ethereum client.

### Use Cases
Financial services (interbank transactions), supply chain finance, trade finance, and capital markets applications requiring Ethereum compatibility with enterprise privacy features.
