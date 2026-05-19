- ### Definition
  - Cryptographic seals that confirm the authenticity and integrity of digital data using public-key cryptography, enabling transaction authorisation on blockchain networks, document authentication, and non-repudiation in metaverse and decentralised systems.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalSignatures
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - requires:: [[Private Key]], [[Hash Function]], [[Signature Algorithm]]
  - enables:: [[Authentication]], [[Data Integrity]], [[Non-Repudiation]]

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Private key: Creates signature (kept secret)
		- Public key: Verifies signature (shared openly)
		- Hash function: Produces message digest
		- Signature algorithm: Generates cryptographic proof
  - **Signature Algorithms**:
		- ECDSA: Bitcoin, Ethereum standard
		- EdDSA: Fast, constant-time signatures
		- BLS: 50% smaller, aggregatable
		- Schnorr: Native multi-signature support
  - **Blockchain Role**:
		- Transaction authorization
		- Wallet ownership proof
		- Smart contract execution
		- Consensus participation
  - **2024 Developments**: Post-quantum algorithms (ML-DSA, Mayo), AI-enhanced fraud detection, blockchain-anchored document signing
  - ## Applications
  - Cryptocurrency transaction signing
  - Document authentication
  - Code signing and software verification
  - Email security (S/MIME, PGP)
  - Metaverse identity verification

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z