id:: bc-0469-snapshot-voting-ontology

- ### OntologyBlock
  id:: BC-0469-snapshot-voting
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0469
  - preferred-term:: Snapshot Voting
  - source-domain:: bc
  - owl:class:: bc:SnapshotVoting
  - status:: active
  - definition:: Snapshot is an off-chain, gasless voting platform enabling DAOs to conduct governance proposals without transaction fees, using signed messages to verify token-weighted voting power while maintaining verifiability through IPFS storage and moving toward on-chain settlement with Snapshot X on Starknet.
  - is-subclass-of:: [[On-Chain Voting]]
  - enables:: [[Gasless Voting]], [[Broad Participation]], [[Flexible Governance]]
  - requires:: [[IPFS Storage]], [[Signature Verification]], [[Token Balance Queries]]

### Technical Details
Key characteristics include:
- **Off-Chain Voting**: Votes signed with wallet keys but not submitted as blockchain transactions
- **Gasless Participation**: No transaction fees enabling broader voter participation
- **IPFS Storage**: Votes stored on decentralized file system for verifiability
- **Token-Weighted**: Voting power based on token holdings at proposal creation timestamp

### Snapshot X (2024)
Snapshot X represents the platform's evolution toward on-chain settlement:
- **Storage Proofs**: Cryptographic verification of cross-chain asset holdings
- **Starknet Integration**: On-chain voting without transferring tokens or paying gas
- **Mathematical Verification**: Eliminates third-party intermediaries
- **Cross-Chain Capability**: Vote based on assets on one chain while conducting governance on another

### Advantages
- **Zero Gas Costs**: Removes financial barrier to participation
- **Higher Participation**: More accessible than on-chain voting
- **Flexibility**: Supports multiple voting strategies and customization
- **Ecosystem Standard**: Used by thousands of DAOs including major protocols

### Limitations
- **Off-Chain Trust**: Relies on Snapshot infrastructure rather than blockchain consensus
- **No Automatic Execution**: Approved proposals must be manually implemented
- **Centralization Risk**: Single platform dependency

### Voting Strategies
Snapshot supports multiple voting strategies including token-weighted, delegation, NFT-based, and custom calculation logic enabling DAOs to tailor governance to their specific needs.

