- ### Definition
  - Diffie-Hellman Key Exchange lets two parties derive a shared secret over an insecure channel using [[Public Key]] and [[Private Key]] values, a foundational form of [[Key Exchange]] grounded in the [[Discrete Logarithm Problem]] within [[Cryptography]].

- ### Overview
  - Introduced in 1976, Diffie-Hellman was the first published method for establishing a shared key without a prior secure channel, founding the field of public-key cryptography. Each party publishes a value derived from a private exponent and a common base, then combines its own private value with the peer's public value.
  - The result is a key both parties share but no eavesdropper can compute, because reversing the operation requires solving the discrete logarithm problem, which is computationally infeasible at adequate parameter sizes.

- ### Mechanisms
  - The parties agree on public parameters: a large prime modulus and a generator.
  - Each party chooses a secret exponent and transmits the generator raised to that exponent modulo the prime.
  - Each party raises the received value to its own secret exponent, and both arrive at the same shared key.
  - Ephemeral variants generate fresh exponents per session, providing perfect forward secrecy so past sessions stay secure even if long-term keys are later compromised.

- ### Applications
  - Session key establishment in Transport Layer Security and SSH.
  - VPN and IPsec key negotiation.
  - Elliptic-curve Diffie-Hellman in modern protocols for compact, efficient agreement.
  - Secure messaging protocols providing forward secrecy.

- ### Relationships
  - subClassOf:: [[Key Exchange]]
  - hasPart:: [[Public Key]]
  - hasPart:: [[Private Key]]
  - implements:: [[Key Agreement]]
  - uses:: [[Discrete Logarithm Problem]]
  - uses:: [[Modular Arithmetic]]
  - enables:: [[Perfect Forward Secrecy]]
  - enables:: [[Secure Channel]]
  - supports:: [[Transport Layer Security]]
  - supports:: [[TLS Handshake]]
  - dependsOn:: [[Asymmetric Cryptography]]
  - relatedTo:: [[Elliptic Curve Cryptography]]
  - relatedTo:: [[Cryptography]]
  - contrastsWith:: [[Symmetric Encryption]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation