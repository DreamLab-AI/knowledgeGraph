- ### Definition
  - A [[Key Pair]] comprises a [[Public Key]] and a [[Private Key]] in [[Asymmetric Cryptography]], produced by [[Key Generation]] and enabling [[Digital Signature]], [[Encryption]], and [[Authentication]] without a pre-shared secret.

- ### Overview
  - A key pair is the atomic unit of asymmetric cryptography: two mathematically linked keys that separate the capability to sign or decrypt from the capability to verify or encrypt.
  - The asymmetry means the public key can be published freely while the private key, which confers control, must never be disclosed. Breaking the scheme requires solving a hard mathematical problem such as integer factorisation or the elliptic-curve discrete logarithm.
  - Key pairs are the basis of digital identity in modern systems: a blockchain address is derived from a public key, and control of the corresponding private key constitutes ownership.

- ### Mechanisms
  - Generation: a secure random process produces a private key, from which the public key is deterministically derived.
  - Signing and verification: the private key signs a message; anyone with the public key can verify authenticity and integrity.
  - Encryption: a sender encrypts to a recipient's public key so that only the holder of the private key can decrypt.
  - Protection: private keys are safeguarded by hardware security modules, secure enclaves, or seed-phrase backups.

- ### Applications
  - Blockchain wallets where the key pair controls on-chain assets.
  - TLS and secure messaging establishing confidential, authenticated channels.
  - Public-key infrastructure binding identities to public keys via certificates.

- ### Relationships
  - hasPart:: [[Public Key]]
  - hasPart:: [[Private Key]]
  - requires:: [[Key Generation]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Digital Signature]]
  - enables:: [[Encryption]]
  - enables:: [[Authentication]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Cryptographic Key]]
  - supports:: [[Identity]]
  - supports:: [[Digital Wallet]]
  - dependsOn:: [[Key Management]]
  - implements:: [[Asymmetric Cryptography]]
  - relatedTo:: [[Seed Phrase]]
  - relatedTo:: [[Hardware Security Module]]
  - partOf:: [[Public-Key Cryptography]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation