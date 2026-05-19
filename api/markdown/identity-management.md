- ### Definition
  - Identity management in blockchain contexts refers to the systems and protocols enabling individuals and organisations to create, control, and verify digital identities without reliance on centralised authorities. Decentralised identity (DID) architectures leverage blockchain technology to provide self-sovereign identity capabilities, where users maintain control over their personal data through cryptographic keys, verifiable credentials, and distributed ledger storage.

- ### Semantic Classification
  - owl-class:: infrastructure:IdentityManagement
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - enables:: [[Self-Sovereign Identity]]

- ### Content

  ## Overview

  Decentralised identity represents a fundamental shift from traditional identity management systems. A Decentralised Identifier (DID) is a type of digital identifier that allows individuals or organisations to prove who they are online without relying on a centralised authority such as a government, social media platform, or email provider. DIDs are globally unique identifiers created and controlled by the user without dependence on a central authority.

  ## Core Components

  ### Three-Party Trust Model
  - **Issuer**: Entity that creates and signs credentials (universities, governments, employers)
  - **Holder**: Individual or organisation that receives and stores credentials
  - **Verifier**: Party that requests and validates credentials for access or services

  ### Key Technical Elements
  - **Decentralised Identifiers (DIDs)**: Globally unique, user-controlled identifiers stored on blockchain
  - **Verifiable Credentials (VCs)**: Cryptographically signed attestations about identity attributes
  - **Digital Wallets**: User-controlled storage for credentials and cryptographic keys
  - **Blockchain/DLT**: Immutable infrastructure for identifier registration and resolution

  ## Self-Sovereign Identity (SSI)

  Decentralised identifiers form one of the three pillars of Self-Sovereign Identity, a model that gives individuals and organisations full ownership and control of their digital identities. The three pillars comprise:
  - Verifiable Credentials
  - Blockchain technology
  - Decentralised Identifiers

  ## Privacy and Security

  ### Data Protection
  - Identity data and Verifiable Credentials stored on individual devices, not centralised databases
  - DIDs do not contain personal data; they point to decentralised documents describing the DID subject
  - Encrypted, decentralised storage reduces risk of unauthorised access and data theft
  - Makes mass data breaches significantly more difficult

  ### Organisational Benefits
  - Reduced data collection minimises regulatory compliance burden
  - Fewer data storage responsibilities decrease cyberattack risk surface
  - Streamlined verification processes reduce operational overhead

  ## Market Development

  ### Market Size
  - Blockchain identity management market valued at USD 1.10 billion in 2024
  - Projected to reach USD 118.96 billion by 2032

  ### 2025 Developments
  - **Italy**: Announced launch of EU's first Digital (EUDI) Wallet in December 2024, beta testing Q1 2025
  - **XRP Ledger**: Enacted Digital Identity (DID) Amendment via XLS-40 in November 2024
  - Growing integration with national identity systems and regulatory compliance frameworks

  ## Major Platforms and Standards

  ### Sovrin
  - Based on Hyperledger Indy
  - Uses zero-knowledge proofs and CL-signature schemes for selective disclosure
  - Supports user privacy and verifiability
  - Permissioned architecture raises concerns regarding decentralisation

  ### uPort
  - Utilises Ethereum smart contracts for identity creation
  - Relies on ERC-725 and ERC-735 standards
  - Decentralised key management
  - Gas fees and throughput constraints impact scalability

  ### ION
  - Developed by Microsoft
  - Leverages Bitcoin blockchain through Sidetree protocol
  - Layer 2 solution for scalable DID operations
  - Anchored to Bitcoin for security guarantees

  ## Challenges

  ### Technical Limitations
  - Many DID systems lack scalability
  - Selective disclosure not universally supported
  - Integration with legacy identification documents remains difficult

  ### User Experience
  - Users responsible for managing cryptographic keys
  - Complexity challenges non-technical users
  - Lost private keys result in permanent identity loss
  - No central authority available for recovery

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z