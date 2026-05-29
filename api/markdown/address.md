- ### Definition
  A blockchain Address is a compact, human-transmissible identifier derived from a public key via cryptographic hashing (typically SHA-256 followed by RIPEMD-160 for Bitcoin, or Keccak-256 for Ethereum), designating the recipient or controller of blockchain funds or smart-contract state. Addresses function as pseudonymous identifiers: they reveal nothing about the owner's real identity while allowing cryptographic proof of ownership through digital signature with the corresponding private key.

- ### Semantic Classification
  - owl-class:: blockchain:Address
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]
  - requires:: [[Public-Key Cryptography]], [[Cryptographic Hash Function]], [[Elliptic Curve Cryptography]]
  - uses:: [[Digital Signature]], [[Public Key]], [[Private Key]]
  - enables:: [[Blockchain Transaction]], [[Wallet]], [[Digital Identity]]
  - relatedTo:: [[UTXO Model]], [[Account Model]], [[secp256k1]], [[Hash Function]], [[Digital Wallet]]

- ### Content

  ### Definition

  A blockchain Address is the fundamental unit of ownership and routing in a distributed ledger: it designates who receives value or controls state without revealing private-key material. The derivation pipeline for a Bitcoin address starts with a secp256k1 elliptic-curve private key, derives the corresponding public key via scalar multiplication, applies SHA-256 and then RIPEMD-160 to compress it to 20 bytes, prepends a version byte and appends a 4-byte checksum, and encodes the result in Base58Check. Ethereum addresses use Keccak-256 hashing of the uncompressed public key, retaining the last 20 bytes and encoding as hexadecimal with EIP-55 mixed-case checksum.

  ### Relationships

  Addresses require Public-Key Cryptography as their mathematical foundation and depend on Cryptographic Hash Functions to compress public keys to a fixed-length output. Elliptic Curve Cryptography (specifically secp256k1) generates the key pairs from which addresses are derived. Digital Signatures produced with the corresponding Private Key prove ownership when spending from an address, while the Public Key is broadcast as part of the spending transaction. Addresses enable Blockchain Transactions (as destination identifiers), Wallets (as collections of addresses and their keys), and Digital Identity applications. The UTXO Model (Bitcoin) and Account Model (Ethereum) represent two distinct paradigms for how address balances are tracked across the ledger.

  ### Content

  Address reuse is a significant privacy concern: spending from an address reveals the associated public key, enabling linkage of transactions. Best-practice wallet implementations generate a fresh address for each received transaction (HD wallet derivation per BIP-32/BIP-44). Multi-signature addresses (P2MS, P2SH, P2WSH) encode spending conditions requiring k-of-n signatures, enabling joint custody, corporate treasury control, and time-locked escrow arrangements. Smart contract addresses on Ethereum are deterministically computed from the deploying account address and nonce (CREATE) or from the initcode hash (CREATE2), enabling counterfactual contract deployment patterns used in Layer 2 protocols.

  Address formats evolve with protocol upgrades: Bitcoin's transition from P2PKH (Base58) to P2WPKH (Bech32) native SegWit addresses reduced transaction sizes and fees; the Taproot upgrade introduced P2TR (Bech32m) addresses enabling Schnorr signatures and MAST script trees that improve privacy and reduce on-chain footprint for complex spending conditions. Digital Wallet software abstracts address management, derivation, and signing from end users, making the address infrastructure invisible while preserving its cryptographic security guarantees.

  ## Class Declaration
  Declaration(Class(:Address))

  ## Subclass Relationships
  SubClassOf(:Address :CryptographicPrimitive)
  SubClassOf(:Address :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Address
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Address
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Address "BC-0038"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Address "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Address "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Address :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Address :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Address "Address"@en)
  AnnotationAssertion(rdfs:comment :Address
    "Public key-derived identifier"@en)
  AnnotationAssertion(dct:description :Address
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Address "BC-0038")
  AnnotationAssertion(:priority :Address "1"^^xsd:integer)
  AnnotationAssertion(:category :Address "cryptographic-foundations"@en)
  )
      ```

  - ## About Address

  - Public key-derived identifier within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z