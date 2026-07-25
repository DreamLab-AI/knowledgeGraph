public:: true

# EdDSA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed-dsa",
  "@type": "Page",
  "vc:slug": "ed-dsa",
  "title": "EdDSA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ed-dsa",
  "@type": "Class",
  "label": "EdDSA",
  "definition": "EdDSA (Edwards-curve Digital Signature Algorithm) is a high-performance digital signature scheme based on twisted Edwards elliptic curves, standardised in RFC 8032. It provides deterministic signing—eliminating the random number generation vulnerabilities that afflicted earlier schemes like ECDSA—whilst offering strong security with compact key and signature sizes. The most widely deployed instantiation is Ed25519, which operates over Curve25519 and produces 64-byte signatures with 128-bit security. EdDSA is extensively used in secure communications protocols, blockchain systems, verifiable credentials, and decentralised identity frameworks.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-signature",
    "label": "Digital Signature"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:twisted-edwards-curve",
        "label": "Twisted Edwards Curve"
      },
      {
        "@id": "urn:ngm:class:curve25519",
        "label": "Curve25519"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:rfc-8032",
        "label": "RFC 8032"
      },
      {
        "@id": "urn:ngm:class:internet-engineering-task-force",
        "label": "Internet Engineering Task Force"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Digital Signature Verification"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:rsa-signature",
        "label": "RSA Signature"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Signature"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ed25519",
        "label": "Ed25519"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:signature-scheme",
        "label": "Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:wireguard",
        "label": "WireGuard"
      },
      {
        "@id": "urn:ngm:class:openssh",
        "label": "OpenSSH"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:edwards-curve-digital-signature-algorithm",
      "label": "Edwards-curve Digital Signature Algorithm"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[EdDSA]] is a deterministic [[Digital Signature]] algorithm built on [[Elliptic Curve Cryptography]] over twisted Edwards curves, providing compact, high-speed signatures used in [[Cryptographic Protocol]] implementations across secure messaging, blockchain, and [[Public-Key Cryptography]] infrastructure.
- ### Relationships
  - EdDSA is a concrete [[Digital Signature]] scheme. It is grounded in [[Elliptic Curve Cryptography]] and relies on a [[Cryptographic Hash Function]] (typically SHA-512 for Ed25519) as a key component of the signing process. Its primary instantiation [[Ed25519]] is closely related to [[Schnorr Signature]] in design philosophy. EdDSA is a member of the broader [[Signature Scheme]] family, operates within [[Cryptographic Protocol]] stacks, and builds on [[Public-Key Cryptography]] foundations. It enables [[Cryptographic Verification]] and [[Digital Signature Verification]] in diverse systems.
- ### Content
  - EdDSA was introduced by Bernstein, Duif, Lange, Schwabe, and Yang in 2011 as a response to the fragility of earlier signature schemes such as DSA and ECDSA, both of which require a fresh random nonce per signature. Nonce reuse in those schemes catastrophically leaks the private key—as demonstrated by the PlayStation 3 hack—whereas EdDSA derives its nonce deterministically from the private key and message, removing this attack surface entirely.

  - The mathematical foundation is a twisted Edwards curve, a form of elliptic curve offering efficient constant-time arithmetic that resists side-channel timing attacks. The Ed25519 variant operates over the 255-bit prime field defined by Curve25519, yielding 64-byte signatures and 32-byte keys. Signing and verification are exceptionally fast: on modern hardware, Ed25519 signing completes in roughly 50 microseconds and batch verification is even more efficient, making it highly suitable for high-throughput authentication scenarios.

  - EdDSA has achieved broad adoption across security-critical systems. It is mandatory in TLS 1.3 negotiation contexts, used as the default signing algorithm in OpenSSH, Signal Protocol, WireGuard, and DNSSEC DANE records. In the blockchain space, Solana, Cardano, and Stellar use Ed25519 as their primary transaction signing algorithm, and it underpins the W3C Decentralised Identifiers (DID) key material in many implementations.

  - With the advent of post-quantum cryptography standardisation, EdDSA's role is under active reassessment. Whilst quantum computers running Shor's algorithm would break Ed25519, the algorithm's clean specification and implementation simplicity have made it the reference design against which post-quantum signature candidates such as CRYSTALS-Dilithium and SPHINCS+ are benchmarked. Hybrid schemes combining Ed25519 with a post-quantum algorithm are emerging as a migration path.
