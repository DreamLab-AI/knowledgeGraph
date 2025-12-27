id:: bc-0436-hyperledger-iroha-ontology

- ### OntologyBlock
  id:: BC-0436-hyperledger-iroha
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0436
  - preferred-term:: Hyperledger Iroha
  - source-domain:: bc
  - owl:class:: bc:HyperledgerIroha
  - status:: active
  - definition:: Hyperledger Iroha is a simple, modular distributed ledger framework designed for straightforward integration into enterprise infrastructure projects, featuring a Byzantine Fault Tolerant consensus algorithm, built-in asset and account management, and multi-signature transaction support.
  - is-subclass-of:: [[Enterprise Blockchain]]
  - enables:: [[Digital Asset Management]], [[Identity Infrastructure]], [[Mobile Applications]]
  - requires:: [[Node Deployment]], [[Permission Configuration]], [[Client Integration]]

### Technical Details
Key features include:
- **YAC Consensus**: Yet Another Consensus algorithm with Byzantine Fault Tolerance
- **Built-in Commands**: Pre-defined operations for asset creation, transfer, and account management
- **Role-Based Access**: Granular permission system for enterprise governance
- **Multi-Signature**: Quorum-based transaction approval

### Architecture
- **C++ Core**: High-performance implementation suitable for resource-constrained environments
- **Mobile-Friendly**: Designed for integration with mobile and web applications
- **Simple APIs**: RESTful and gRPC interfaces for straightforward client development

### Use Cases
- **Digital Asset Issuance**: Token creation and management without complex smart contracts
- **Supply Chain**: Straightforward asset tracking and transfer recording
- **Identity Management**: Permission-controlled identity operations
- **Financial Services**: Basic payment and settlement infrastructure

### Project Status
Hyperledger Iroha v2 represents complete rewrite in Rust, now part of Linux Foundation Decentralized Trust (September 2024).
