- ### Definition
  - Key generation creates cryptographic keys from high-quality randomness and is a core stage of [[Cryptographic Key Management]].
  - It consumes [[Entropy]] via [[Random Number Generation]] to produce unpredictable secrets, including a [[Private Key]] and [[Public Key]] pair for asymmetric schemes.
  - It underpins [[Cryptography]] by ensuring keys cannot be guessed or reproduced.

- ### Overview
  - The process draws on a source of entropy, expands or conditions it, and maps it to a key of the required length and structure for the chosen algorithm.
  - Asymmetric generation runs a mathematical procedure, such as elliptic-curve point selection or prime generation, to derive a linked key pair.
  - Weak randomness is the classic failure mode, allowing attackers to reconstruct keys regardless of algorithm strength.

- ### Mechanisms
  - Collection of entropy from hardware and operating-system sources.
  - Cryptographically secure random number generation seeded from that entropy.
  - Key derivation functions that stretch passwords or seeds into keys.
  - Algorithm-specific parameter selection for symmetric and asymmetric keys.

- ### Applications
  - Provisioning keys inside a [[Hardware Security Module]] for tamper resistance.
  - Issuing certificates within a [[Public Key Infrastructure]].
  - Establishing session secrets ahead of [[Key Exchange]].
  - Producing signing keys for [[Digital Signature]] and wallets.

- ### Relationships
  - subClassOf:: [[Cryptographic Key Management]]
  - hasPart:: [[Random Number Generation]]
  - hasPart:: [[Entropy]]
  - hasPart:: [[Key Derivation Function]]
  - partOf:: [[Cryptographic Key Management]]
  - partOf:: [[Public Key Infrastructure]]
  - dependsOn:: [[Entropy]]
  - dependsOn:: [[Random Number Generation]]
  - enables:: [[Encryption]]
  - enables:: [[Digital Signature]]
  - enables:: [[Key Exchange]]
  - requires:: [[Random Number Generation]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Hardware Security Module]]
  - supports:: [[Public-Key Cryptography]]
  - supports:: [[Symmetric Encryption]]
  - relatedTo:: [[Private Key]]
  - relatedTo:: [[Public Key]]
  - relatedTo:: [[Cryptography]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation