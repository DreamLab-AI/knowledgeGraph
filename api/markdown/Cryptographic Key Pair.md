A cryptographic key pair is a mathematically linked pair of keys, a public key and a private key, used in asymmetric cryptography. The private key is kept secret by its owner while the public key may be distributed openly, and operations performed with one key can only be reversed or verified with the other. Key pairs underpin encryption to a recipient, digital signatures that prove authorship, and key agreement, making them foundational to secure communication, authentication and decentralised identity.

### Overview

- Symmetric ciphers share one secret, which is hard to distribute safely; asymmetric key pairs solve this by separating roles.
- Anyone can encrypt to a recipient using the public key, but only the holder of the private key can decrypt.
- Conversely, the private key signs data and anyone can verify the signature with the public key, proving authorship.
- The security rests on hard mathematical problems such as integer factorisation or the discrete logarithm.

### Key aspects

- Asymmetry: distinct keys for inverse operations remove the shared-secret distribution problem.
- Confidentiality and authenticity: encryption protects content, signatures bind identity to data.
- Key generation and storage: secure randomness and protected private-key storage are critical.
- Lifecycle: generation, rotation, revocation and recovery are governed by key management.

### Applications

- TLS and secure messaging that establish encrypted channels.
- Digital signatures for software, documents and blockchain transactions.
- Decentralised identity, where a key pair anchors a DID and its verifiable credentials.
- SSH and code-signing infrastructures authenticating users and artefacts.

### Provenance

