public:: true

# Asymmetric Encryption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f5a4d8084f339413d851408f42ab0cb9745700c4a52c4f696d26dbc27dab995",
  "@type": "Page",
  "vc:slug": "asymmetric-encryption",
  "title": "Asymmetric Encryption",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:owl:class:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:owl:class:key-derivation-function",
      "vc:label": "Key Derivation Function"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:symmetric-encryption",
      "vc:label": "Symmetric Encryption"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Asymmetric Encryption"
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
  "@id": "urn:ngm:class:asymmetric-encryption",
  "@type": "Class",
  "label": "Asymmetric Encryption",
  "definition": "A cryptographic system using mathematically related public-private key pairs where the public key encrypts data that only the corresponding private key can decrypt, enabling secure communication, digital signatures, and trustless verification without pre-shared secrets.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Secure Key Exchange"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:rsa-cryptosystem",
        "label": "RSA Cryptosystem"
      },
      {
        "@id": "urn:ngm:class:trapdoor-function",
        "label": "Trapdoor Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      },
      {
        "@id": "urn:ngm:class:random-number-generator",
        "label": "Random Number Generator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computational-hardness-assumption",
        "label": "Mathematical Hardness Assumption"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Private Key Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-confidentiality",
        "label": "Confidentiality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:number-theory",
        "label": "Number Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:did-nostr-identity",
        "label": "DID Nostr Identity"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:public-key-cryptography",
      "label": "Public Key Cryptography"
    },
    {
      "@id": "urn:ngm:class:public-key-encryption",
      "label": "Public Key Encryption"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:asymmetric-encryption:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2f5a4d8084f339413d851408f42ab0cb9745700c4a52c4f696d26dbc27dab995"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Elliptic Curve Cryptography]]",
      "resolved": "urn:visionflow:owl:class:elliptic-curve-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:owl:class:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:owl:class:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Derivation Function]]",
      "resolved": "urn:visionflow:owl:class:key-derivation-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Symmetric Encryption]]",
      "resolved": "urn:visionflow:owl:class:symmetric-encryption",
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
  - A cryptographic system using mathematically related public-private key pairs where the public key encrypts data that only the corresponding private key can decrypt. Asymmetric encryption provides the foundational cryptographic primitive for blockchain identity, digital signatures, and secure communication, enabling trustless verification without pre-shared secrets.

- ### Semantic Classification
  - owl-class:: blockchain:AsymmetricEncryption
  - owl-role:: Concept
  - belongs-to-domain:: [[Information Security]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Digital Signature]]
  - implements:: [[Elliptic Curve Cryptography]]
  - bridges-to:: [[DID Nostr Identity]]

- ### Content

  ## Definition
  - Cryptographic system using mathematically related public and private key pairs
  - Public key encrypts data that only corresponding private key can decrypt
  - Foundational primitive for blockchain identity, signatures, and secure communication

  ## Core Components
  - **Public Key**: Openly shared identifier for encryption and signature verification
  - **Private Key**: Secret value for decryption and signature generation
  - **Key Generation**: Algorithm producing mathematically related key pair
  - **Trapdoor Function**: Easy to compute forward, hard to reverse without private key

  ## Technical Characteristics
  - **Computational Asymmetry**: Encryption easy, decryption requires secret key
  - **Non-Repudiation**: Private key holder cannot deny signed message
  - **Key Distribution**: Public keys shared openly without secure channel
  - **Mathematical Foundation**: Number theory, elliptic curves, lattices

  ## Common Algorithms
  - **RSA**: Integer factorization-based, 2048-4096 bit keys
  - **ECDSA**: Elliptic Curve Digital Signature Algorithm
  - **EdDSA**: Twisted Edwards curve signatures (Ed25519)
  - **BLS**: Boneh-Lynn-Shacham signature aggregation
  - **Post-Quantum**: Lattice-based, hash-based for quantum resistance

  ## Blockchain Applications
  - Wallet address derivation from public keys
  - Transaction signing and verification
  - Multi-signature schemes
  - Threshold cryptography
  - Zero-knowledge proof generation

  ## Key Curves in Blockchain
  - **secp256k1**: Bitcoin, Ethereum signature curve
  - **Ed25519**: High-performance Edwards curve
  - **BLS12-381**: Pairing-friendly curve for advanced protocols
  - **Curve25519**: Key agreement protocol

  ## Relationships
  - contrasts-with:: [[Symmetric Encryption]]
  - enables:: [[Digital Signature]]
  - uses:: [[Hash Function]]
  - component-of:: [[Public Key Infrastructure]]
  - implements:: [[Elliptic Curve Cryptography]]

  ## Security Properties
  - **Confidentiality**: Only recipient decrypts
  - **Authentication**: Verify sender identity
  - **Integrity**: Detect message tampering
  - **Non-Repudiation**: Cryptographic proof of authorship

  ## Performance Characteristics
  - Slower than symmetric encryption (10-1000x)
  - Key operations: signing, verification, key exchange
  - Hardware acceleration (e.g., specialized elliptic curve processors)
  - Trade-off: security vs computational cost

  ## Blockchain-Specific Considerations
  - Deterministic key derivation (BIP32/BIP44)
  - Address format and checksum schemes
  - Signature malleability prevention
  - Multi-signature coordination
  - Threshold signature schemes

  ## Key Management
  - Hierarchical deterministic (HD) wallets
  - Mnemonic seed phrase backup (BIP39)
  - Hardware wallet private key isolation
  - Secure enclave storage on mobile devices

  ## Advantages
  - No pre-shared secret required
  - Enables digital signatures
  - Scalable key distribution
  - Foundation for trustless systems

  ## Limitations
  - Computationally expensive
  - Larger key sizes than symmetric
  - Vulnerable to quantum attacks (RSA, ECDSA)
  - Complex key management requirements

  ## Quantum Resistance
  - Current blockchain algorithms vulnerable
  - Migration path to post-quantum cryptography
  - Lattice-based alternatives (CRYSTALS-Dilithium)
  - Hash-based signatures (SPHINCS+)

  #### Related Concepts
  - [[Digital Signature]]
  - [[Elliptic Curve Cryptography]]
  - [[Hash Function]]
  - [[Key Derivation Function]]

  #cryptography #asymmetric-encryption #public-key #blockchain-security

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
