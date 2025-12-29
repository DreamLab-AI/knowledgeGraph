- ### OntologyBlock
  id:: asymmetric-encryption-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: bc
	- term-id:: BC-8001
	- preferred-term:: Asymmetric Encryption
	- status:: active
	- public-access:: true
	- definition:: A cryptographic system using mathematically related public-private key pairs where the public key encrypts data that only the corresponding private key can decrypt. Asymmetric encryption provides the foundational cryptographic primitive for blockchain identity, digital signatures, and secure communication, enabling trustless verification without pre-shared secrets.
	- maturity:: reviewed
	- owl:class:: bc:AsymmetricEncryption
	- belongsToDomain:: [[Cryptography]]
	- belongsToDomain:: [[Blockchain]]
	- belongsToDomain:: [[Information Security]]

---
id: BC-1006
title: Asymmetric Encryption
type: ConceptNode
domain: Blockchain
created: 2025-11-24
status: active
---

# Asymmetric Encryption

## Definition
- Cryptographic system using mathematically related public and private key pairs
- Public key encrypts data that only corresponding private key can decrypt
- Foundational primitive for blockchain identity, signatures, and secure communication

## Core Components
- **Public Key**: Openly shared identifier for encryption and signature verification
- **Private Key**: Secret value for decryption and signature generation
- **Key Generation**: Algorithm producing mathematically related key pair
- **Trapdoor Function**: Easy to compute forward, hard to reverse without private key

## Technical Characteristics
- **Computational Asymmetry**: Encryption easy, decryption requires secret key
- **Non-Repudiation**: Private key holder cannot deny signed message
- **Key Distribution**: Public keys shared openly without secure channel
- **Mathematical Foundation**: Number theory, elliptic curves, lattices

## Common Algorithms
- **RSA**: Integer factorization-based, 2048-4096 bit keys
- **ECDSA**: Elliptic Curve Digital Signature Algorithm
- **EdDSA**: Twisted Edwards curve signatures (Ed25519)
- **BLS**: Boneh-Lynn-Shacham signature aggregation
- **Post-Quantum**: Lattice-based, hash-based for quantum resistance

## Blockchain Applications
- Wallet address derivation from public keys
- Transaction signing and verification
- Multi-signature schemes
- Threshold cryptography
- Zero-knowledge proof generation

## Key Curves in Blockchain
- **secp256k1**: Bitcoin, Ethereum signature curve
- **Ed25519**: High-performance Edwards curve
- **BLS12-381**: Pairing-friendly curve for advanced protocols
- **Curve25519**: Key agreement protocol

## Relationships
- contrasts-with:: [[Symmetric Encryption]]
- enables:: [[Digital Signature]]
- uses:: [[Hash Function]]
- component-of:: [[Public Key Infrastructure]]
- implements:: [[Elliptic Curve Cryptography]]

## Security Properties
- **Confidentiality**: Only recipient decrypts
- **Authentication**: Verify sender identity
- **Integrity**: Detect message tampering
- **Non-Repudiation**: Cryptographic proof of authorship

## Performance Characteristics
- Slower than symmetric encryption (10-1000x)
- Key operations: signing, verification, key exchange
- Hardware acceleration (e.g., specialized elliptic curve processors)
- Trade-off: security vs computational cost

## Blockchain-Specific Considerations
- Deterministic key derivation (BIP32/BIP44)
- Address format and checksum schemes
- Signature malleability prevention
- Multi-signature coordination
- Threshold signature schemes

## Key Management
- Hierarchical deterministic (HD) wallets
- Mnemonic seed phrase backup (BIP39)
- Hardware wallet private key isolation
- Secure enclave storage on mobile devices

## Advantages
- No pre-shared secret required
- Enables digital signatures
- Scalable key distribution
- Foundation for trustless systems

## Limitations
- Computationally expensive
- Larger key sizes than symmetric
- Vulnerable to quantum attacks (RSA, ECDSA)
- Complex key management requirements

## Quantum Resistance
- Current blockchain algorithms vulnerable
- Migration path to post-quantum cryptography
- Lattice-based alternatives (CRYSTALS-Dilithium)
- Hash-based signatures (SPHINCS+)

## Related Concepts
- [[Digital Signature]]
- [[Elliptic Curve Cryptography]]
- [[Hash Function]]
- [[Key Derivation Function]]

#cryptography #asymmetric-encryption #public-key #blockchain-security

### Relationships
- is-subclass-of:: [[Blockchain]]
