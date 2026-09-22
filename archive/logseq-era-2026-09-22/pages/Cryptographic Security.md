public:: true

# Cryptographic Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63dece33b07a7ce76c12853bda9c5352e4c45422aa88a01cf623b9066fa01d3a",
  "@type": "Page",
  "vc:slug": "cryptographic-security",
  "title": "Cryptographic Security",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9543"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Security"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-security",
  "@type": "Class",
  "label": "Cryptographic Security",
  "definition": "Cryptographic Security is the discipline of applying mathematical cryptographic primitives and protocols — including symmetric encryption, asymmetric public-key cryptography, cryptographic hash functions, digital signatures, message authentication codes, and zero-knowledge proofs — to enforce confidentiality, integrity, authenticity, and non-repudiation of information and communications. It provides the formal security guarantees upon which trustless distributed systems, secure channels, identity frameworks, and privacy-preserving computation are constructed. The field spans both theoretical hardness assumptions (discrete logarithm, integer factorisation, lattice problems) and practical protocol engineering, encompassing key management, certificate infrastructure, and post-quantum cryptographic migration. In applied contexts it underpins everything from TLS transport security and blockchain transaction authorisation to hardware security modules and secure multi-party computation.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-computation",
        "label": "Privacy-Preserving Computation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:privacy-framework",
        "label": "Privacy Framework"
      },
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:iso-iec",
        "label": "ISO/IEC"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:applied-cryptography",
      "label": "Applied Cryptography"
    },
    {
      "@id": "urn:ngm:class:cryptographic-protocols",
      "label": "Cryptographic Protocols"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-security:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63dece33b07a7ce76c12853bda9c5352e4c45422aa88a01cf623b9066fa01d3a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Cryptographic Security is the discipline of applying mathematical cryptographic primitives and protocols to enforce the core security properties of confidentiality, integrity, authenticity, and non-repudiation across computing systems and communications. It encompasses [[Encryption]], [[Digital Signature]], [[Hash Function]], [[Public-Key Cryptography]], [[Zero-Knowledge Proof]], and [[Key Management]] as component disciplines. The field provides the formal security guarantees that underlie [[Transport Layer Security]], [[Blockchain]] transaction authorisation, [[Digital Identity]] systems, and [[Privacy-Preserving Computation]], drawing its foundations from computational hardness assumptions in number theory and abstract algebra. As the backbone of trustless and decentralised systems, Cryptographic Security is among the most foundational pillars of modern [[Information Security]].

- ### Overview
  - Cryptographic Security addresses the problem of securing information and communication in the presence of adversaries who may attempt to intercept, alter, or forge data. Unlike perimeter-based [[Network Security]], cryptography provides mathematical guarantees that hold even when the underlying network or infrastructure is untrusted.
  - The core security objectives it enforces are:
    - **Confidentiality**: only authorised parties can read a message, achieved via [[Encryption]] algorithms.
    - **Integrity**: data has not been altered in transit or at rest, enforced through [[Hash Function]] constructions and [[Message Authentication Code]] schemes.
    - **Authenticity**: the claimed origin of a message is verifiable, provided by [[Digital Signature]] schemes.
    - **Non-repudiation**: a sender cannot later deny having sent a message, also delivered by asymmetric [[Digital Signature]] constructs.
  - The practical operation of Cryptographic Security depends on sound [[Key Management]]: generating, distributing, rotating, revoking, and storing cryptographic keys securely. Weak key management is the most common real-world failure mode, even when the underlying algorithm is theoretically sound.
  - Modern deployments commonly rely on layered architectures: a [[Public Key Infrastructure]] handles certificate issuance and revocation, symmetric session keys are negotiated using asymmetric key-exchange protocols (such as Diffie-Hellman or ECDH), and [[Hardware Security Module]] devices protect high-value private keys from software-layer compromise.

- ### Key Components
  - #### Symmetric Cryptography
    - Uses a single shared secret key for both encryption and decryption.
    - Primary algorithms: AES (Advanced Encryption Standard), ChaCha20, 3DES (legacy).
    - Very fast; suited for bulk data encryption and [[Transport Layer Security]] record-layer operations.
    - Relies on [[Key Management]] to distribute the shared key securely before communication begins.
    - Related to [[Message Authentication Code]] (HMAC-SHA-256, GMAC) for integrity.
  - #### Asymmetric (Public-Key) Cryptography
    - Each party holds a mathematically linked key pair: a public key published openly and a private key kept secret.
    - Enables secure key exchange and [[Digital Signature]] without prior shared secret.
    - Foundational algorithms: RSA (integer factorisation), ECDSA / EdDSA (elliptic-curve discrete logarithm), Diffie-Hellman / ECDH (key exchange).
    - Detailed under [[Public-Key Cryptography]].
  - #### Cryptographic Hash Functions
    - Deterministic one-way functions mapping arbitrary input to a fixed-length digest.
    - Properties required: pre-image resistance, second pre-image resistance, collision resistance.
    - Algorithms: SHA-2 (SHA-256, SHA-512), SHA-3 (Keccak), BLAKE2/BLAKE3.
    - Core to [[Blockchain]] Merkle trees, password storage (bcrypt, Argon2), and [[Digital Signature]] schemes.
    - Detailed under [[Hash Function]].
  - #### Digital Signatures
    - Asymmetric construction enabling a party to sign data with a private key and any third party to verify with the public key.
    - Provides authenticity and non-repudiation; underpins [[Public Key Infrastructure]] certificate chains.
    - Widely used in [[Blockchain]] (ECDSA on Bitcoin, EdDSA on Solana), TLS certificates, code-signing, and document signing.
    - Detailed under [[Digital Signature]].
  - #### Zero-Knowledge Proofs
    - Protocols allowing one party (the prover) to convince another (the verifier) that a statement is true without revealing any information beyond its truth value.
    - Schemes: zk-SNARKs (Groth16, PLONK), zk-STARKs, Bulletproofs.
    - Enables [[Privacy-Preserving Computation]] and selective disclosure in [[Decentralised Identity]] systems.
    - Increasingly deployed on [[Blockchain]] for scalable, private transaction validation (e.g. Zcash, StarkNet, zkSync).
    - Detailed under [[Zero-Knowledge Proof]].
  - #### Key Management
    - The lifecycle processes governing creation, storage, distribution, rotation, and revocation of cryptographic keys.
    - [[Hardware Security Module]] devices enforce tamper-resistant key storage and cryptographic operations.
    - [[Public Key Infrastructure]] provides certificate lifecycle management.
    - Failures in key management are the primary cause of cryptographic security breaches in practice.
    - Detailed under [[Key Management]].
  - #### Message Authentication Codes
    - Keyed hash constructions (HMAC, CMAC, GMAC) that provide integrity and authenticity for messages when both parties share a secret key.
    - Foundational to [[Transport Layer Security]] record integrity and secure API authentication.
    - Detailed under [[Message Authentication Code]].
  - #### Secure Multi-Party Computation
    - Protocols enabling multiple parties to jointly compute a function over their inputs while revealing only the output.
    - Relies heavily on [[Public-Key Cryptography]] and [[Zero-Knowledge Proof]] primitives.
    - Applied in privacy-preserving analytics and decentralised key management.
    - Detailed under [[Secure Multi-Party Computation]].
  - #### Post-Quantum Cryptography
    - Next-generation algorithms designed to resist attacks from large-scale quantum computers, which would break RSA and elliptic-curve schemes.
    - NIST PQC standards (FIPS 203 ML-KEM, FIPS 204 ML-DSA, FIPS 205 SLH-DSA) are based on lattice, hash, and code-based hardness assumptions.
    - Contrastswith classical [[Public-Key Cryptography]] but shares the same security objectives.
    - Detailed under [[Post-Quantum Cryptography]].

- ### Applications and Use Cases
  - #### Blockchain and Distributed Ledgers
    - [[Blockchain]] relies on [[Hash Function]] chaining (Merkle trees, block hashes), [[Digital Signature]] (ECDSA / EdDSA) for transaction authorisation, and [[Public-Key Cryptography]] for address derivation.
    - [[Zero-Knowledge Proof]] layers enable private transactions on public chains (Zcash, Aztec, zkSync).
    - [[Smart Contract]] execution environments require cryptographic commitments and deterministic hash schemes for integrity.
  - #### Secure Communications
    - [[Transport Layer Security]] (TLS 1.3) combines asymmetric key exchange (ECDH), symmetric encryption (AES-GCM), and MAC to secure web traffic.
    - Signal Protocol and its derivatives (WhatsApp, Signal, iMessage) use Double Ratchet + X3DH for forward-secret end-to-end encryption.
    - VPN protocols (IPsec, WireGuard) apply symmetric and asymmetric cryptography to encrypt network tunnels.
  - #### Digital Identity and Authentication
    - [[Digital Identity]] systems use [[Public-Key Cryptography]] and [[Digital Signature]] to bind identity claims to cryptographic keys.
    - [[Decentralised Identity]] (DID) and Verifiable Credentials rely on [[Public Key Infrastructure]] or blockchain-anchored key registries.
    - Multi-factor authentication schemes (TOTP, FIDO2/WebAuthn) apply [[Hash Function]] and asymmetric cryptography.
    - [[Access Control]] policies are enforced via cryptographically verified identity tokens (JWT, SAML).
  - #### Privacy-Preserving AI and Federated Learning
    - [[Federated Learning]] deployments use homomorphic encryption and secure aggregation to prevent the server from observing individual model updates.
    - Differential privacy mechanisms are combined with cryptographic aggregation for [[Privacy-Preserving Computation]].
    - [[Secure Multi-Party Computation]] enables collaborative AI model training across organisations without sharing raw data.
    - Bridges Cryptographic Security to [[Federated Learning]] and the broader [[Artificial Intelligence]] domain.
  - #### Data Protection and Compliance
    - Encryption at rest and in transit is mandated by GDPR, HIPAA, PCI-DSS, and ISO 27001.
    - [[Privacy Framework]] implementations depend on key management and access control backed by Cryptographic Security.
    - Tokenisation and format-preserving encryption protect sensitive fields in databases and payment systems.
  - #### Secure Supply Chain and Code Integrity
    - Software supply chain integrity is enforced via code-signing certificates and [[Hash Function]] digests (SBOMs, Sigstore).
    - Hardware attestation (TPM, Intel TDX, AMD SEV) uses asymmetric cryptography to verify the integrity of firmware and hypervisors.
  - #### Metaverse and Spatial Computing
    - Ownership of virtual assets in the metaverse is enforced via blockchain-based [[Non-Fungible Token]] contracts secured by [[Digital Signature]].
    - Secure channels between XR devices and backend services rely on [[Transport Layer Security]] and device attestation.
    - [[Decentralised Identity]] gives metaverse users portable, self-sovereign credentials not tied to a single platform operator.

- ### Relationships
  - hasPart:: [[Encryption]]
  - hasPart:: [[Digital Signature]]
  - hasPart:: [[Public-Key Cryptography]]
  - hasPart:: [[Hash Function]]
  - hasPart:: [[Key Management]]
  - hasPart:: [[Message Authentication Code]]
  - enables:: [[Zero-Knowledge Proof]]
  - enables:: [[Secure Multi-Party Computation]]
  - enables:: [[Digital Identity]]
  - enables:: [[Privacy-Preserving Computation]]
  - supports:: [[Blockchain]]
  - supports:: [[Privacy Framework]]
  - supports:: [[Decentralised Application]]
  - supports:: [[Transport Layer Security]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Random Number Generation]]
  - requires:: [[Hardware Security Module]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[ISO/IEC]]
  - contrastsWith:: [[Post-Quantum Cryptography]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Decentralised Identity]]
  - relatedTo:: [[Network Security]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Threat Model]]

- ### Standards and Context
  - #### NIST Standards
    - FIPS 197 — Advanced Encryption Standard (AES), the global standard for symmetric encryption.
    - FIPS 186-5 — Digital Signature Standard (DSS), covering RSA, ECDSA, EdDSA.
    - FIPS 180-4 / 202 — Secure Hash Standard (SHA-2, SHA-3).
    - FIPS 198-1 — HMAC specification.
    - NIST PQC standards (FIPS 203, 204, 205) — post-quantum algorithms standardised 2024, transitioning deployments away from classical asymmetric schemes.
    - [[NIST]] SP 800-57 provides comprehensive [[Key Management]] guidance.
  - #### IETF RFCs
    - RFC 8446 — TLS 1.3, the current standard for [[Transport Layer Security]].
    - RFC 8032 — EdDSA (Ed25519, Ed448) [[Digital Signature]] scheme.
    - RFC 7519 — JSON Web Token (JWT) for [[Access Control]] and identity claims.
    - RFC 9180 — Hybrid Public Key Encryption (HPKE), used in MLS and Privacy Pass.
    - [[IETF]] working groups (CFRG, TLS, OAUTH) drive ongoing cryptographic standards.
  - #### ISO/IEC Standards
    - ISO/IEC 18033 — Encryption algorithms.
    - ISO/IEC 9796 — Digital signature schemes.
    - ISO/IEC 27001/27002 — Information Security Management, which mandates cryptographic controls.
    - [[ISO/IEC]] JTC 1/SC 27 is the primary standards body for [[Information Security]] cryptographic specifications.
  - #### Regulatory Context
    - GDPR (EU) requires encryption of personal data at rest and in transit.
    - PCI-DSS mandates strong cryptography for cardholder data environments.
    - US Executive Order 14028 (2021) mandated migration timelines toward post-quantum readiness for federal systems.
    - eIDAS 2.0 (EU) structures digital identity credential schemes using [[Public Key Infrastructure]] and [[Digital Signature]].

- ### Threat Landscape and Hardness Assumptions
  - Classical cryptographic security rests on mathematical problems believed to be computationally intractable:
    - **Integer Factorisation** — underpins RSA; hard for classical computers but broken by Shor's algorithm on a sufficiently large quantum computer.
    - **Discrete Logarithm / Elliptic Curve DLP** — underpins ECDSA, ECDH, EdDSA; similarly vulnerable to quantum Shor.
    - **Preimage / Collision Resistance** — hash function security properties; partially weakened but not broken by Grover's quantum search.
    - **Lattice Problems (LWE, NTRU, Module-LWE)** — basis of [[Post-Quantum Cryptography]] NIST standards; believed quantum-resistant.
  - Common attack categories:
    - Side-channel attacks (timing, power analysis, cache) targeting [[Key Management]] and [[Hardware Security Module]] implementations.
    - Protocol-layer attacks (BEAST, POODLE, ROBOT) exploiting flaws in cryptographic protocol composition rather than algorithm primitives.
    - Implementation flaws (Heartbleed, padding oracle, nonce reuse in AES-GCM) that break security even with sound algorithms.
    - Supply chain compromise of [[Random Number Generation]] (Dual EC DRBG backdoor episode).
    - Harvest-now-decrypt-later attacks, motivating urgent [[Post-Quantum Cryptography]] migration.

- ### Semantic Classification
  - owl-class:: security:CryptographicSecurity
  - owl-role:: concept

- ### Provenance
  - sources:: NIST FIPS publications; IETF RFCs; ISO/IEC JTC 1/SC 27 standards; Handbook of Applied Cryptography (Menezes, van Oorschot, Vanstone); Introduction to Modern Cryptography (Katz & Lindell)
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
