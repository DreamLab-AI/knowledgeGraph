- ### OntologyBlock
  id:: key-derivation-function-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: bc
	- term-id:: BC-8007
	- preferred-term:: Key Derivation Function
	- status:: active
	- public-access:: true
	- maturity:: reviewed
	- owl:class:: bc:KeyDerivationFunction
	- belongsToDomain:: [[Cryptography]]
	- definition:: A cryptographic algorithm that derives one or more secret keys from a master secret using a pseudo-random function, transforming human-readable passwords or seed phrases into cryptographically secure key material while enabling hierarchical key generation and deterministic wallet recovery in blockchain systems.

---
id: BC-1007
title: Key Derivation Function
type: ConceptNode
domain: Blockchain
created: 2025-11-24
status: active
---

# Key Derivation Function

## Definition
- Cryptographic algorithm deriving one or more secret keys from master secret using pseudo-random function
- Transforms human-readable passwords or seed phrases into cryptographically secure key material
- Enables hierarchical key generation and deterministic wallet recovery in blockchain systems

## Core Components
- **Master Secret**: High-entropy source (seed, password, private key)
- **Derivation Function**: One-way transformation algorithm
- **Salt**: Random value preventing rainbow table attacks
- **Iteration Count**: Computational cost parameter for brute-force resistance
- **Derived Keys**: Output cryptographic key material

## Technical Characteristics
- **Deterministic**: Same input always produces same output
- **One-Way**: Computationally infeasible to reverse
- **Avalanche Effect**: Small input change drastically alters output
- **Configurable Cost**: Adjustable computational difficulty

## Common Algorithms
- **PBKDF2**: Password-Based Key Derivation Function 2
- **scrypt**: Memory-hard function resisting hardware attacks
- **Argon2**: Winner of Password Hashing Competition
- **HKDF**: HMAC-based Extract-and-Expand KDF
- **bcrypt**: Adaptive hash function with work factor

## Blockchain-Specific KDFs
- **BIP32**: Hierarchical Deterministic (HD) wallet key derivation
- **BIP39**: Mnemonic seed phrase to master key conversion
- **BIP44**: Multi-account hierarchy standard
- **SLIP-0010**: Ed25519 and other curve support

## Hierarchical Derivation
```
Master Seed
  ├─ Purpose (BIP44: m/44')
  │   └─ Coin Type (m/44'/0' for Bitcoin)
  │       └─ Account (m/44'/0'/0')
  │           ├─ External Chain (m/44'/0'/0'/0)
  │           └─ Internal Chain (m/44'/0'/0'/1)
```

## Blockchain Applications
- Wallet seed phrase to private key conversion
- Deterministic address generation
- Multi-account wallet management
- Child key derivation without exposing parent
- Secure backup and recovery mechanisms

## Relationships
- uses:: [[Hash Function]]
- enables:: [[Asymmetric Encryption]]
- component-of:: [[Hierarchical Deterministic Wallet]]
- implements:: [[Password Hashing]]
- protects:: [[Private Key]]

## Security Parameters
- **Salt Length**: Typically 128+ bits
- **Iteration Count**: 100,000+ for PBKDF2, tuned for hardware
- **Memory Cost**: Gigabytes for scrypt/Argon2
- **Output Length**: Matches target key size (256+ bits)

## Use Cases
- Password-based wallet encryption
- Mnemonic phrase to master key
- Deriving signing keys from master seed
- Cross-chain key generation from single seed
- Hardware wallet key derivation

## BIP32 Hardened Derivation
- **Normal Derivation**: Uses public key (allows extended public key)
- **Hardened Derivation**: Uses private key (more secure, denoted with ')
- Prevents child private key from revealing parent

## Performance Considerations
- Intentionally slow to resist brute-force
- Memory-hardness prevents GPU/ASIC acceleration
- Trade-off: security vs user experience
- Hardware wallet optimization challenges

## Best Practices
- Use high-entropy source (256+ bits)
- Apply sufficient iterations for time period
- Use cryptographic random salt
- Store salt with derived key
- Regular algorithm updates as hardware advances

## Advantages
- Single master secret generates unlimited keys
- Deterministic wallet recovery
- Hierarchical organization
- No need to back up each key individually

## Limitations
- Compromise of master seed compromises all derived keys
- Computational cost for derivation
- Implementation complexity
- Side-channel attack considerations

## Related Concepts
- [[Hash Function]]
- [[Hierarchical Deterministic Wallet]]
- [[Mnemonic Phrase]]
- [[Password Hashing]]

#cryptography #key-derivation #wallet #blockchain-security

### Relationships
- is-subclass-of:: [[Blockchain]]
