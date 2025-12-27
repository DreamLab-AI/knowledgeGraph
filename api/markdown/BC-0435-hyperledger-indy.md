id:: bc-0435-hyperledger-indy-ontology

- ### OntologyBlock
  id:: BC-0435-hyperledger-indy
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0435
  - preferred-term:: Hyperledger Indy
  - source-domain:: bc
  - owl:class:: bc:HyperledgerIndy
  - status:: active
  - definition:: Hyperledger Indy is a purpose-built distributed ledger framework for decentralized identity and Self-Sovereign Identity (SSI), providing tools and protocols to create, manage, and verify digital identities with privacy-preserving verifiable credentials, pairwise DIDs, and selective disclosure capabilities.
  - is-subclass-of:: [[Enterprise Blockchain]]
  - enables:: [[Decentralized Identity]], [[Verifiable Credentials]], [[Privacy-Preserving Authentication]]
  - requires:: [[DID Infrastructure]], [[Credential Issuance]], [[Verification Network]]

### Technical Details
Key features include:
- **Decentralized Identifiers (DIDs)**: Unique, verifiable identifiers controlled by owning entity
- **Verifiable Credentials**: User-controlled exchange of credentials with rock-solid revocation model
- **Privacy By Design**: Pairwise DIDs preventing cross-service correlation, peer-to-peer encryption
- **Selective Disclosure**: Sharing only necessary credential attributes

### Project Status
Graduated Hyperledger project since 2019, initiated in 2016. Sovrin Foundation network running with 100% uptime since February 2020.

### 2024 Developments
Indy Besu framework (PoC in 2023) offers alternative implementation on Besu network with enhanced eIDAS2/EUDI compliance. Now part of Linux Foundation Decentralized Trust (September 2024).

### Industry Applications
Infosys uses Hyperledger Indy and ACA-Py for fast, secure, and private credential verification across enterprise identity management systems.
