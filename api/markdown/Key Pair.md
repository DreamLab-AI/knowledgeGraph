
A Key Pair is the matched set of a public key and a corresponding private key used in asymmetric cryptography, where the two keys are mathematically related such that data encrypted or signed with one can only be processed with the other. The private key is kept secret by its owner, while the public key may be distributed openly, enabling encryption, digital signatures, and authentication without sharing a secret in advance. Key pairs underpin public-key infrastructure, blockchain wallets, secure messaging, and identity systems. Their security rests on the computational hardness of deriving the private key from the public key.

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

- ### Provenance

