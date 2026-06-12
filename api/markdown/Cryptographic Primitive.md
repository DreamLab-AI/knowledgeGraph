public:: true
alias:: Cryptographic Primitives, CryptographicPrimitive

# Cryptographic Primitive
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:07d395b56a94e66166db3b8d0bf2f58eb81ae1a600bf107b343a1f724a323276",
  "@type": "Page",
  "vc:slug": "cryptographic-primitive",
  "title": "Cryptographic Primitive",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:asymmetric-encryption",
      "vc:label": "Asymmetric Encryption"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-protocol",
      "vc:label": "Cryptographic Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
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
      "vc:value": "BC-7004"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Primitive"
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
  "@id": "urn:ngm:class:cryptographic-primitive",
  "@type": "Class",
  "label": "Cryptographic Primitive",
  "definition": "The fundamental atomic building blocks of all cryptographic systems — including hash functions, symmetric and asymmetric ciphers, digital signatures, and key exchange protocols — each providing specific, well-defined security guarantees. Primitives are insufficient alone and must be combined in higher-level cryptographic protocols to satisfy multiple security requirements such as confidentiality, integrity, authentication, and non-repudiation. Correct selection and composition of primitives is the foundational concern of applied cryptography.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:symmetric-encryption", "label": "Symmetric Encryption"},
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:key-derivation-function", "label": "Key Derivation Function"},
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:secure-multi-party-computation", "label": "Secure Multi-Party Computation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:post-quantum-cryptography", "label": "Post-Quantum Cryptography"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:homomorphic-encryption", "label": "Homomorphic Encryption"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-primitive:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:07d395b56a94e66166db3b8d0bf2f58eb81ae1a600bf107b343a1f724a323276"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asymmetric Encryption]]",
      "resolved": "urn:visionflow:owl:class:asymmetric-encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocol]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:owl:class:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:owl:class:hash-function",
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
  - The fundamental building blocks of cryptography upon which more complex cryptographic algorithms, protocols, and systems are constructed. Primitives include hash functions, encryption algorithms, digital signatures, message authentication codes, and key exchange protocols, each providing specific security properties but requiring combination in security protocols to address multiple security requirements.

- ### Semantic Classification
  - owl-class:: blockchain:CryptographicPrimitive
  - owl-role:: Concept
  - belongs-to-domain:: [[Cryptography]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  ## Definition

  Cryptographic primitives are the basic building blocks of every cryptosystem (e.g., TLS, SSL, SSH). They are low-level cryptographic algorithms that provide specific security guarantees and are combined to create higher-level protocols and systems. A bare primitive alone is insufficient for complete security; only when combined in security protocols can multiple security requirements be addressed simultaneously.

  ## Core Primitive Categories

  ### One-Way Hash Functions
  - Compute fixed-size digest from arbitrary input
  - Properties: collision resistance, preimage resistance, second-preimage resistance
  - Examples: SHA-256, SHA-3, BLAKE2, BLAKE3
  - Creates theoretically unique fingerprint to detect message alteration

  ### Symmetric Encryption
  - Single shared key for encryption and decryption
  - Block ciphers (AES) and stream ciphers (ChaCha20)
  - Provides confidentiality for data at rest and in transit

  ### Asymmetric Encryption (Public-Key Cryptography)
  - Key pair: public key encrypts, private key decrypts
  - Examples: RSA, ElGamal, ECIES
  - Solves key distribution problem

  ### Digital Signatures
  - Based on public-key cryptography
  - Private key (signature key) creates signature
  - Public key (verification key) verifies signature
  - Provides authentication, integrity, and non-repudiation
  - Examples: RSA-PSS, ECDSA, Ed25519, Schnorr

  ### Message Authentication Codes (MAC)
  - Symmetric-key authentication
  - Verifies message integrity and authenticity
  - Examples: HMAC, CMAC, Poly1305

  ### Key Exchange Protocols
  - Establish shared secret over insecure channel
  - Examples: Diffie-Hellman, ECDH, X25519

  ## Security Properties Provided

  | Primitive | Confidentiality | Integrity | Authentication | Non-Repudiation |
  |-----------|-----------------|-----------|----------------|-----------------|
  | Hash Function | No | Yes | No | No |
  | Symmetric Encryption | Yes | No* | No | No |
  | Asymmetric Encryption | Yes | No | No | No |
  | Digital Signature | No | Yes | Yes | Yes |
  | MAC | No | Yes | Yes | No |

  *Authenticated encryption modes (AES-GCM) provide both confidentiality and integrity

  ## Combining Primitives

  Primitives are combined to achieve comprehensive security:
  - **Hash + Asymmetric = Digital Signature**: Sign hash of message, not entire message
  - **Symmetric + MAC = Authenticated Encryption**: AES-GCM provides both
  - **Asymmetric + Symmetric = Hybrid Encryption**: Exchange symmetric key via asymmetric
  - **All Four Elements**: Privacy, Authentication, Integrity, Non-repudiation

  ## Blockchain Primitives

  - **Hash Functions**: Block linking, Merkle trees, proof-of-work
  - **Digital Signatures**: Transaction authorization, consensus participation
  - **Key Derivation**: HD wallets, address generation
  - **Commitment Schemes**: Privacy protocols, fair exchange

  ## Security Considerations

  - Primitives must be correctly implemented and combined
  - Side-channel resistance in implementations
  - Algorithm agility for future cryptographic updates
  - Proper parameter selection (key sizes, iteration counts)

  ## Relationships
  - includes:: [[Hash Function]]
  - includes:: [[Symmetric Encryption]]
  - includes:: [[Asymmetric Encryption]]
  - includes:: [[Digital Signature]]
  - used-by:: [[Cryptographic Protocol]]
  - foundation-of:: [[Blockchain]]
  - is-subclass-of:: [[Cryptography]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
