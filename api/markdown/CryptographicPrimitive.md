- ### OntologyBlock
  id:: cryptographicprimitive-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-7004
	- preferred-term:: CryptographicPrimitive
	- source-domain:: bc
	- status:: active
	- public-access:: true
	- definition:: The fundamental building blocks of cryptography upon which more complex cryptographic algorithms, protocols, and systems are constructed. Primitives include hash functions, encryption algorithms, digital signatures, message authentication codes, and key exchange protocols, each providing specific security properties but requiring combination in security protocols to address multiple security requirements.
	- maturity:: reviewed
	- owl:class:: bc:CryptographicPrimitive
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[Cryptography]]

## Definition

Cryptographic primitives are the basic building blocks of every cryptosystem (e.g., TLS, SSL, SSH). They are low-level cryptographic algorithms that provide specific security guarantees and are combined to create higher-level protocols and systems. A bare primitive alone is insufficient for complete security; only when combined in security protocols can multiple security requirements be addressed simultaneously.

## Core Primitive Categories

### One-Way Hash Functions
- Compute fixed-size digest from arbitrary input
- Properties: collision resistance, preimage resistance, second-preimage resistance
- Examples: SHA-256, SHA-3, BLAKE2, BLAKE3
- Creates theoretically unique fingerprint to detect message alteration

### Symmetric Encryption
- Single shared key for encryption and decryption
- Block ciphers (AES) and stream ciphers (ChaCha20)
- Provides confidentiality for data at rest and in transit

### Asymmetric Encryption (Public-Key Cryptography)
- Key pair: public key encrypts, private key decrypts
- Examples: RSA, ElGamal, ECIES
- Solves key distribution problem

### Digital Signatures
- Based on public-key cryptography
- Private key (signature key) creates signature
- Public key (verification key) verifies signature
- Provides authentication, integrity, and non-repudiation
- Examples: RSA-PSS, ECDSA, Ed25519, Schnorr

### Message Authentication Codes (MAC)
- Symmetric-key authentication
- Verifies message integrity and authenticity
- Examples: HMAC, CMAC, Poly1305

### Key Exchange Protocols
- Establish shared secret over insecure channel
- Examples: Diffie-Hellman, ECDH, X25519

## Security Properties Provided

| Primitive | Confidentiality | Integrity | Authentication | Non-Repudiation |
|-----------|-----------------|-----------|----------------|-----------------|
| Hash Function | No | Yes | No | No |
| Symmetric Encryption | Yes | No* | No | No |
| Asymmetric Encryption | Yes | No | No | No |
| Digital Signature | No | Yes | Yes | Yes |
| MAC | No | Yes | Yes | No |

*Authenticated encryption modes (AES-GCM) provide both confidentiality and integrity

## Combining Primitives

Primitives are combined to achieve comprehensive security:
- **Hash + Asymmetric = Digital Signature**: Sign hash of message, not entire message
- **Symmetric + MAC = Authenticated Encryption**: AES-GCM provides both
- **Asymmetric + Symmetric = Hybrid Encryption**: Exchange symmetric key via asymmetric
- **All Four Elements**: Privacy, Authentication, Integrity, Non-repudiation

## Blockchain Primitives

- **Hash Functions**: Block linking, Merkle trees, proof-of-work
- **Digital Signatures**: Transaction authorization, consensus participation
- **Key Derivation**: HD wallets, address generation
- **Commitment Schemes**: Privacy protocols, fair exchange

## Security Considerations

- Primitives must be correctly implemented and combined
- Side-channel resistance in implementations
- Algorithm agility for future cryptographic updates
- Proper parameter selection (key sizes, iteration counts)

## Relationships
- includes:: [[Hash Function]]
- includes:: [[Symmetric Encryption]]
- includes:: [[Asymmetric Encryption]]
- includes:: [[Digital Signature]]
- used-by:: [[Cryptographic Protocol]]
- foundation-of:: [[Blockchain]]
- is-subclass-of:: [[Cryptography]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with primitive taxonomy
- **References**: 11 pages reference this concept

#cryptography #primitives #hash-function #encryption #digital-signature #blockchain-security
