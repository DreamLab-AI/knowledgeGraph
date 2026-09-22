public:: true

# Cryptographic Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cryptographic-algorithm",
  "@type": "Page",
  "vc:slug": "cryptographic-algorithm",
  "title": "Cryptographic Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-algorithm",
  "@type": "Class",
  "label": "Cryptographic Algorithm",
  "definition": "A Cryptographic Algorithm is a precisely defined mathematical procedure that transforms data to achieve security properties—confidentiality, integrity, authentication, or non-repudiation—based on computational hardness assumptions. The class encompasses symmetric ciphers, asymmetric (public-key) schemes, hash functions, digital signature algorithms, and zero-knowledge proof systems, each providing different security guarantees and performance characteristics.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
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
    "implements": [
      {
        "@id": "urn:ngm:class:computational-hardness-assumption",
        "label": "Computational Hardness Assumption"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Cipher"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:internet-engineering-task-force",
        "label": "Internet Engineering Task Force"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:steganography",
        "label": "Steganography"
      },
      {
        "@id": "urn:ngm:class:obfuscation",
        "label": "Obfuscation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cipher",
      "label": "Cipher"
    },
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Cryptographic Algorithm]] is a formally specified computational procedure whose security rests on the conjectured intractability of an underlying mathematical problem—integer factorisation (RSA), the discrete logarithm (ECDSA, Diffie-Hellman), or lattice problems (CRYSTALS-Kyber, CRYSTALS-Dilithium). The algorithm class includes symmetric [[Encryption]] schemes (AES), asymmetric [[Public-Key Cryptography]] (RSA, Elliptic Curve), [[Digital Signature]] schemes, cryptographic hash functions (SHA-3), and [[Zero-Knowledge Proof]] systems. All deployed instances require [[Key Management]] infrastructure for secure key generation, distribution, and revocation.

- ### Relationships
  - Cryptographic Algorithm is a specialisation of [[Cryptography]] and serves as the foundational primitive enabling [[Encryption]] for confidentiality, [[Digital Signature]] for authenticity and non-repudiation, and [[Zero-Knowledge Proof]] for privacy-preserving verification. It underpins [[Public-Key Cryptography]] as the mathematical basis for asymmetric schemes, and all practical deployments depend on [[Key Management]] systems to handle the lifecycle of cryptographic keys. Symmetric and hash algorithms are also related through the construction of message authentication codes (HMACs) and key derivation functions.

- ### Content
  - Cryptographic algorithms have roots in classical substitution and transposition ciphers, but modern algorithmic cryptography began with Shannon's 1949 paper establishing information-theoretic foundations of secrecy. The pivotal public-key revolution arrived with Diffie and Hellman's 1976 "New Directions in Cryptography" paper and Rivest, Shamir, and Adleman's RSA scheme (1977), which demonstrated that two parties could establish a shared secret over a public channel without prior key exchange—solving the key distribution problem that had constrained symmetric cryptography for centuries. National standardisation processes formalised AES (2001, Rijndael cipher selected from open competition) and SHA-2/3 families.

  - The technical taxonomy of cryptographic algorithms includes: (1) Symmetric-key ciphers—block ciphers (AES-128/256 in CBC, GCM, CCM modes; ChaCha20-Poly1305) and stream ciphers; (2) Asymmetric schemes—RSA (2048/4096-bit), Elliptic Curve Cryptography (P-256, Curve25519, secp256k1), and lattice-based post-quantum algorithms (CRYSTALS-Kyber for key encapsulation, CRYSTALS-Dilithium for signatures); (3) Hash functions—SHA-256, SHA-3 (Keccak), BLAKE3; (4) Message authentication codes—HMAC, CMAC, Poly1305; (5) Digital signatures—ECDSA, EdDSA (Ed25519); (6) Zero-knowledge systems—zk-SNARKs (Groth16), zk-STARKs, Bulletproofs. Security proofs reduce algorithm security to hardness of underlying mathematical problems.

  - Cryptographic algorithms are standardised through NIST (FIPS publications), IETF (RFC series), and ISO (18033 series). The OpenSSL and BoringSSL libraries implement the majority of production algorithms used in TLS 1.3, SSH, and IPsec. Hardware acceleration is ubiquitous: Intel AES-NI instructions accelerate AES at near-memory-bandwidth speeds, ARM Crypto Extensions accelerate AES and SHA on mobile processors, and dedicated hardware security modules (HSMs) from Thales and Entrust provide tamper-resistant key storage and algorithm execution for high-assurance applications.

  - In 2024–2025, the primary development is NIST's post-quantum cryptography standardisation, finalised in 2024 with FIPS 203 (ML-KEM/Kyber), FIPS 204 (ML-DSA/Dilithium), and FIPS 205 (SLH-DSA/SPHINCS+) as the first approved post-quantum standards. Migration to PQC is now mandatory for US federal systems by 2035, driving large-scale cryptographic agility projects. TLS 1.3 hybrid key exchange (classical ECDH plus Kyber) is being deployed by Cloudflare, Google, and AWS to provide harvest-now-decrypt-later protection. Simultaneously, homomorphic encryption algorithms (BFV, CKKS, TFHE) are moving from research to production in privacy-preserving analytics and federated computation platforms.