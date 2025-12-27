id:: bc-0457-decentralized-identifiers-ontology

- ### OntologyBlock
  id:: BC-0457-decentralized-identifiers
  - ontology:: true
  - public-access:: true
  - term-id:: BC-0457
  - preferred-term:: Decentralized Identifiers
  - source-domain:: bc
  - owl:class:: bc:DecentralizedIdentifiers
  - status:: active
  - definition:: Decentralized Identifiers (DIDs) are globally unique identifiers following the W3C standard that enable verifiable, self-sovereign digital identity without requiring centralized registries, providing persistence, resolvability, and cryptographic verifiability through DID Documents containing public keys and authentication methods.
  - is-subclass-of:: [[Self-Sovereign Identity]]
  - enables:: [[Verifiable Digital Identity]], [[Self-Sovereign Control]], [[Cryptographic Authentication]]
  - requires:: [[DID Methods]], [[DID Documents]], [[Blockchain Infrastructure]]

### Technical Details
Key properties and components include:
- **DID Format**: Structure `did:method:identifier` where method specifies resolution protocol
- **DID Documents**: Contain public keys, authentication methods, and service endpoints
- **Persistence**: Designed to be persistent as long as controller desires, resistant to link rot
- **Resolvability**: Uniquely resolvable to retrieve associated DID Document information

### W3C Standard Status
The W3C Decentralized Identifiers (DIDs) v1.0 specification was published as a Recommendation in July 2022. At publication, 103 experimental DID Method specifications existed with 32 driver implementations and 46 conformance test submissions. In 2024, the First Public Working Draft of DID Resolution and DID URL Dereferencing v1.0 was published.

### DID Methods
DIDs can work with any blockchain or distributed ledger:
- **did:sov**: Sovrin Network on Hyperledger Indy
- **did:ion**: Microsoft ION on Bitcoin via Sidetree
- **did:ethr**: Ethereum-based identifiers
- **did:key**: Self-contained cryptographic key identifiers

### 2024 Developments
Research proposes FutureDID enabling multiple parties to jointly issue credentials and efficiently revoke identities, addressing single point of failure limitations. Over 71 billion digital identity verification checks projected for 2024, driving demand for efficient DID solutions.

