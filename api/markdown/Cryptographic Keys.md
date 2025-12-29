- ### OntologyBlock
  id:: cryptographic-keys-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-7006
	- preferred-term:: Cryptographic Keys
	- source-domain:: bc
	- status:: active
	- public-access:: true
	- definition:: Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys can be symmetric (single shared key) or asymmetric (public-private key pairs), with security depending on key length, randomness, and proper management.
	- maturity:: reviewed
	- owl:class:: bc:CryptographicKeys
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[Cryptography]]

## Definition

A cryptographic key is a string of data used to encrypt data (to keep the data secret), decrypt data (to perform the reverse operation), sign data (to ensure authenticity), or verify a signature. The security of any cryptographic system fundamentally depends on the secrecy, randomness, and proper management of its keys.

## Key Types

### By Encryption Method

#### Symmetric Keys
- Single key used for both encryption and decryption
- Must be shared securely between all parties
- Faster and more efficient for bulk data encryption
- Common algorithms: AES, ChaCha20, 3DES
- Typical sizes: 128, 192, or 256 bits

#### Asymmetric Keys (Public-Key Pairs)
- Mathematically related pair: public key and private key
- Public key encrypts data or verifies signatures
- Private key decrypts data or creates signatures
- No need to share private key, reducing exposure risk
- Common algorithms: RSA, ECC, Ed25519
- Typical sizes: 2048-4096 bits (RSA), 256-384 bits (ECC)

### By Function

- **Encryption Keys**: Transform plaintext to ciphertext
- **Decryption Keys**: Reverse the encryption process
- **Signing Keys**: Create digital signatures (typically private keys)
- **Verification Keys**: Verify digital signatures (typically public keys)
- **Master Keys**: Root keys from which other keys are derived
- **Session Keys**: Temporary keys for single communication session
- **Key Encryption Keys (KEK)**: Keys used to encrypt other keys

## Security Properties

| Property | Symmetric Keys | Asymmetric Keys |
|----------|---------------|-----------------|
| Key Size for Equivalent Security | 128-bit | 2048-bit (RSA) |
| Speed | Very fast | Slower |
| Key Distribution | Challenging | Easier (public key shareable) |
| Use Case | Bulk encryption | Key exchange, signatures |

## Blockchain Applications

- **Private Keys**: Control access to blockchain addresses and funds
- **Public Keys**: Derive addresses and verify transaction signatures
- **HD Wallet Keys**: Hierarchically derived from master seed
- **Multi-sig Keys**: Multiple keys required for transaction authorization

## Key Generation Requirements

- High-entropy random number source (CSPRNG)
- Sufficient key length for target security level
- Algorithm-specific generation procedures
- Protection against side-channel leakage during generation

## Hybrid Encryption

Modern systems often combine both key types:
1. Asymmetric encryption exchanges a symmetric session key
2. Symmetric encryption handles bulk data (faster)
3. Example: TLS/SSL in HTTPS communications

## Relationships
- managed-by:: [[Cryptographic Key Management]]
- generated-by:: [[Random Number Generation]]
- derived-by:: [[Key Derivation Function]]
- used-in:: [[Symmetric Encryption]]
- used-in:: [[Asymmetric Encryption]]
- enables:: [[Digital Signature]]
- is-subclass-of:: [[Cryptography]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with key type details
- **References**: 9 pages reference this concept

#cryptography #keys #encryption #public-key #private-key #blockchain-security
