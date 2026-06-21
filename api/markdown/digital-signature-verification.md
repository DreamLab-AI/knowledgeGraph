- ### Definition
  - The cryptographic process of validating the authenticity and integrity of digitally signed data by applying the signer's public key to confirm that the signature was created by the corresponding private key and that the signed content has not been modified.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalSignatureVerification
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Cryptographic Verification]]
  - requires:: [[Public Key]], [[Hash Algorithm]], [[Signature Algorithm]]
  - enables:: [[Transaction Authentication]], [[Document Integrity]], [[Non-Repudiation]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Verification Process**:
		- Extract signature from signed data
		- Apply signer's public key to signature
		- Recompute hash of original data
		- Compare computed hash with decrypted signature
  - **Algorithms**:
		- ECDSA: Elliptic Curve Digital Signature Algorithm
		- EdDSA/Ed25519: Edwards-curve signatures
		- BLS: Signature aggregation capability
		- Schnorr: Efficient multi-signature support
  - **Blockchain Applications**:
		- Transaction authorization verification
		- Smart contract execution authentication
		- Node identity confirmation
		- Consensus mechanism participation
  - **Post-Quantum Standards**: ML-DSA (formerly CRYSTALS-Dilithium) standardised as NIST FIPS 204 in August 2024, providing general-purpose quantum-resistant signatures with performance on par with classical ECDSA; NIST guidance targets migration from RSA/ECC to ML-DSA by 2030, mandatory for US government by 2035
  - ## Applications
  - Blockchain transaction validation
  - Document authenticity confirmation
  - Smart contract authorization
  - Secure message verification
  - Identity attestation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z