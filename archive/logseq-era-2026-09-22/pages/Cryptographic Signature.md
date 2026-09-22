public:: true

# cryptographic signature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e892f51563266cdc9350411dc64c8cb9e20e7b354ae84edda36f4abafe42ae9a",
  "@type": "Page",
  "vc:slug": "cryptographic-signature",
  "title": "cryptographic signature",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-signature",
  "@type": "Class",
  "label": "Cryptographic Signature",
  "definition": "A cryptographic signature is a mathematical scheme that allows a private-key holder to produce an unforgeable, publicly-verifiable proof that a specific message or data item was authorised by them, delivering both authenticity and non-repudiation. The signing algorithm combines a cryptographic hash of the message with the signer's private key to produce a compact signature value; any party holding the corresponding public key can verify the signature without accessing the private key. Dominant schemes include ECDSA (Bitcoin, Ethereum), Ed25519 (Solana, Cosmos, OpenSSH), RSA-PSS (TLS, S/MIME), and Schnorr (BIP-340). Cryptographic signatures are a foundational primitive underpinning transaction authorisation, code signing, verifiable credentials, and authenticated key exchange across virtually all secure digital infrastructure.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asymmetric-cryptography",
      "label": "Asymmetric Cryptography"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-signature",
      "label": "Digital Signature"
    },
    {
      "@id": "urn:ngm:class:public-key-signature",
      "label": "Public-Key Signature"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:code-signing",
        "label": "Code Signing"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:ed25519",
        "label": "Ed25519"
      },
      {
        "@id": "urn:ngm:class:rsa-pss",
        "label": "RSA-PSS"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:secure-email",
        "label": "Secure Email"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
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
        "@id": "urn:ngm:class:nist-fips-186",
        "label": "FIPS 186"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:provenance",
        "label": "AI Model Provenance"
      },
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Attestation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature"
      },
      {
        "@id": "urn:ngm:class:blind-signatures",
        "label": "Blind Signature"
      },
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **cryptographic signature** is a mathematical scheme enabling a holder of a [[Private Key]] to produce a compact, unforgeable proof that authorises a specific message or dataset, delivering [[Non-Repudiation]] and authenticity guarantees to any party that possesses the corresponding [[Public Key]]. The signature is computed by applying an asymmetric algorithm — such as [[ECDSA]], [[Ed25519]], or [[Schnorr Signature]] — to a [[Hash Function]] digest of the message; verification uses only the public key and requires no contact with the signer. This separation of signing from verification is the cornerstone of trust in open, adversarial environments such as [[Blockchain]] networks, [[Transport Layer Security]], and [[Verifiable Credential]] ecosystems. Cryptographic signatures are a mature primitive with decades of standardisation through [[NIST]], [[IETF]], and [[FIPS 186]].

- ### Overview
  - Cryptographic signatures solve the fundamental problem of establishing authenticated provenance over an open network, where relying parties cannot inspect the signer's hardware or environment. Unlike symmetric [[Message Authentication Code]] schemes, which require a shared secret between signer and verifier, signature schemes are asymmetric: the private key is secret to the signer, while the public key can be freely distributed.
  - Key properties guaranteed by a correctly-implemented signature:
    - **Authenticity** — the message was produced or approved by the holder of the private key.
    - **Integrity** — any modification to the message after signing invalidates the signature.
    - **Non-repudiation** — the signer cannot credibly deny having signed the message.
  - These three properties together form the contractual bedrock of digital commerce, governance, and infrastructure security.
  - The security of a signature scheme rests on a computational hardness assumption: for ECDSA and Ed25519, the [[Elliptic Curve Cryptography]] discrete-logarithm problem; for RSA-PSS, the integer factorisation problem. Advances in [[Post-Quantum Cryptography]] (CRYSTALS-Dilithium, FALCON, SPHINCS+) are being standardised by [[NIST]] to replace current schemes against future quantum adversaries.

- ### Key Mechanisms
  - #### Signing Process
    - Input message $m$ is hashed to a fixed-length digest $h = H(m)$ using a collision-resistant [[Hash Function]] (e.g., SHA-256, SHA-3, BLAKE2b).
    - The digest $h$ is transformed using the signer's [[Private Key]] and algorithm-specific randomness (or a deterministic nonce derivation as in Ed25519) to produce the signature $\sigma$.
    - The resulting $\sigma$ is appended to or transmitted alongside $m$.
  - #### Verification Process
    - The verifier independently computes $h = H(m)$ from the received message.
    - Using the signer's [[Public Key]] and the same algorithm, the verifier checks that $\sigma$ is consistent with $h$ and the public key.
    - A valid result confirms authenticity and integrity; an invalid result signals tampering or a wrong key.
  - #### Deterministic vs. Randomised Signing
    - ECDSA requires a fresh, unpredictable nonce per signature; nonce reuse catastrophically leaks the [[Private Key]] (the PlayStation 3 hack).
    - [[Ed25519]] uses a deterministic nonce derived from the message and a secret scalar, eliminating this class of vulnerability.
    - [[RSA-PSS]] uses a random salt for probabilistic padding, replacing the older PKCS#1 v1.5 deterministic scheme.

- ### Signature Schemes
  - **[[ECDSA]]** (Elliptic Curve Digital Signature Algorithm) — dominant in Bitcoin, Ethereum, and TLS certificates; defined in ANSI X9.62 and FIPS 186-4. Compact signatures (~64 bytes at 256-bit security).
  - **[[Ed25519]]** — Edwards-curve variant; constant-time, deterministic, highly resistant to side-channel attacks. Used in OpenSSH, Signal Protocol, Solana, Cosmos, Polkadot, and the W3C [[Verifiable Credential]] suite (JsonWebSignature2020, Ed25519Signature2020).
  - **[[Schnorr Signature]]** — linearly homomorphic, enabling key and signature aggregation; adopted in Bitcoin BIP-340 (Taproot). Simplifies [[Multi-Signature]] protocols.
  - **[[RSA-PSS]]** — Probabilistic Signature Scheme variant of RSA; used in X.509 certificates, S/MIME, and legacy PKI systems. Requires larger key sizes (2048–4096 bits) for equivalent security.
  - **SPHINCS+** / **CRYSTALS-Dilithium** — [[Post-Quantum Cryptography]] candidates standardised by NIST (FIPS 204/205); lattice-based and hash-based respectively, resistant to quantum attacks.
  - **[[Blind Signature]]** — allows signing of a message whose content is concealed from the signer (Chaum blind signatures); used in privacy-preserving digital cash and anonymous credential systems.
  - **[[Threshold Signature]]** — distributed signing protocol where $t$ of $n$ parties must collaborate to produce a valid signature, with no single party holding the full private key; underpins MPC wallets and institutional custody.

- ### Applications and Use Cases
  - #### Blockchain and Web3
    - Every transaction on Bitcoin, Ethereum, Solana, and other networks carries a cryptographic signature generated by the sender's [[Private Key]], authorising transfer of value or execution of a [[Smart Contract]].
    - [[Multi-Signature]] wallets require signatures from multiple key holders, enforcing organisational governance controls.
    - [[Threshold Signature]] schemes are deployed by institutional custodians (Fireblocks, Anchorage) to eliminate single-key risk.
    - Validator nodes in proof-of-stake networks sign attestations and block proposals; fork-choice safety depends on the unforgeable nature of these signatures.
  - #### Identity and Credentials
    - [[Decentralised Identity]] systems (DIDs) bind a controller to a [[Public Key]]; authenticated operations require proof of the corresponding private key via signature.
    - [[Verifiable Credential]] presentations (W3C VC Data Model) require a cryptographic signature over the credential payload, enabling offline verification without contacting the issuer.
    - [[Self-Sovereign Identity]] wallets sign credential presentations before sharing with verifiers.
    - OpenID Connect and OAuth 2.0 ID tokens (JWTs) are signed with RS256, ES256, or EdDSA to prevent tampering by intermediaries.
  - #### Secure Communications and PKI
    - [[Transport Layer Security]] handshakes include signature-based authentication of server certificates; mutual TLS also authenticates clients.
    - [[Secure Email]] protocols (S/MIME, OpenPGP) sign and optionally encrypt message bodies; [[Public Key Infrastructure]] chains anchor trust to certificate authorities.
    - SSH host and user authentication uses Ed25519 or ECDSA signatures.
  - #### Software and Supply Chain
    - [[Code Signing]] ensures that software binaries distributed over the internet originate from a known publisher and have not been tampered with (Authenticode, Apple notarisation, GPG-signed package repositories).
    - [[Supply Chain Attestation]] frameworks (SLSA, in-toto) record signed provenance metadata at each build step, enabling consumers to verify the full build graph.
    - Container image signing (Sigstore/cosign, Notary v2) extends this to OCI registries.
  - #### AI and Emerging Domains
    - [[AI Model Provenance]] use cases employ signatures to bind model weights and training data manifests to a known publisher, combating model poisoning and misattribution.
    - Signed inference results and data attestations are proposed mechanisms for auditable AI governance pipelines.

- ### Relationships
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Hash Function]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Private Key]]
  - uses:: [[Public Key]]
  - enables:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - enables:: [[Verifiable Credential]]
  - enables:: [[Code Signing]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[Non-Repudiation]]
  - requires:: [[Key Management]]
  - requires:: [[Public Key Infrastructure]]
  - implements:: [[ECDSA]]
  - implements:: [[Ed25519]]
  - implements:: [[RSA-PSS]]
  - implements:: [[Schnorr Signature]]
  - supports:: [[Transport Layer Security]]
  - supports:: [[Secure Email]]
  - supports:: [[Zero-Knowledge Proof]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[FIPS 186]]
  - contrastsWith:: [[Message Authentication Code]]
  - contrastsWith:: [[Symmetric Encryption]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[AI Model Provenance]]
  - bridges-to:: [[Supply Chain Attestation]]
  - relatedTo:: [[Threshold Signature]]
  - relatedTo:: [[Blind Signature]]
  - relatedTo:: [[Multi-Signature]]
  - relatedTo:: [[Post-Quantum Cryptography]]

- ### Standards and Context
  - **FIPS 186-5** (NIST, 2023) — the current US federal standard for Digital Signature Algorithms; mandates ECDSA and approves EdDSA (Ed25519), deprecating RSA below 2048 bits and DSA.
  - **RFC 8032** (IETF, 2017) — specifies EdDSA and Ed25519/Ed448; widely adopted in internet protocols.
  - **RFC 8017** (PKCS #1 v2.2) — specifies RSA-PSS and RSASSA-PKCS1-v1_5 for TLS, S/MIME.
  - **ANSI X9.62 / SEC 1** — foundational industry specifications for ECDSA.
  - **BIP-340** (Bitcoin Improvement Proposal) — defines Schnorr signatures for Bitcoin Taproot, enabling signature aggregation.
  - **W3C Verifiable Credentials Data Model 2.0** — mandates cryptographic proof mechanisms for credential presentations.
  - **NIST SP 800-208** (post-quantum readiness guidance) and **FIPS 204/205** — standardise CRYSTALS-Dilithium and SPHINCS+ as migration targets.
  - **IETF COSE** (RFC 8152) and **JOSE** (RFC 7515 JWS) — standard serialisation formats for signed data in CBOR and JSON environments respectively.
  - Key management standards: **NIST SP 800-57** (key management recommendations), **ISO/IEC 11770** (key management series).

- ### Security Considerations
  - **Private key compromise** is the primary attack vector; hardware security modules ([[HSM]]) and air-gapped key ceremonies mitigate this.
  - **Nonce reuse** in ECDSA is catastrophic; deterministic schemes (Ed25519) eliminate this risk by design.
  - **Algorithm agility** — systems should be designed to upgrade signature schemes; hardcoded algorithm choices complicate migration to [[Post-Quantum Cryptography]].
  - **Side-channel attacks** — timing and power-analysis attacks can leak private key material from non-constant-time implementations; Ed25519 reference implementations are constant-time.
  - **Quantum threat** — Shor's algorithm would break ECDSA, Ed25519, and RSA-PSS on a sufficiently powerful quantum computer; NIST post-quantum migration is underway.

- ### Provenance
  - sources:: NIST FIPS 186-5; RFC 8032 (EdDSA); RFC 8017 (RSA-PSS); W3C Verifiable Credentials Data Model 2.0; BIP-340; NIST SP 800-57
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
