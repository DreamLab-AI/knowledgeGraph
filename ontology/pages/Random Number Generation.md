public:: true

# Random Number Generation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4be3e628401da22c8c63368825f6f1736e127cc37196185f4e77e50b44fc2ca",
  "@type": "Page",
  "vc:slug": "random-number-generation",
  "title": "Random Number Generation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:commitment-scheme",
      "vc:label": "Commitment Scheme"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-random-function",
      "vc:label": "Verifiable Random Function"
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
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:owl:class:key-derivation-function",
      "vc:label": "Key Derivation Function"
    },
    {
      "@id": "urn:visionflow:owl:class:zero-knowledge-proof",
      "vc:label": "Zero-Knowledge Proof"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8014"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Random Number Generation"
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
  "@id": "urn:ngm:class:random-number-generation",
  "@type": "Class",
  "label": "Random Number Generation",
  "definition": "The process of generating unpredictable and statistically random values for cryptographic operations, serving as a critical security primitive for key generation, nonces, and protocol initialization; distinguishes between true randomness from physical entropy sources (TRNG) and pseudo-randomness from deterministic algorithms seeded with entropy (CSPRNG).",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:entropy-source",
        "label": "Entropy Source"
      },
      {
        "@id": "urn:ngm:class:random-number-generator",
        "label": "Cryptographically Secure Pseudorandom Number Generator"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:key-generation",
        "label": "Key Generation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:entropy-source",
        "label": "Entropy Source"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asymmetric-encryption",
        "label": "Asymmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Commitment Scheme"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verifiable-random-function",
        "label": "Verifiable Random Function"
      },
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST SP 800-90A"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:stream-cipher",
        "label": "Stream Cipher"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:random-number-generator",
        "label": "True Random Number Generator"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      },
      {
        "@id": "urn:ngm:class:trusted-platform-module",
        "label": "Trusted Platform Module"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:information-theoretic-security",
        "label": "Information-Theoretic Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:random-bit-generation",
      "label": "Random Bit Generation"
    },
    {
      "@id": "urn:ngm:class:randomness-generation",
      "label": "Randomness Generation"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:random-number-generation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4be3e628401da22c8c63368825f6f1736e127cc37196185f4e77e50b44fc2ca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Commitment Scheme]]",
      "resolved": "urn:visionflow:linked:commitment-scheme",
      "kind": "StubLink"
    },
    {
      "raw": "[[Verifiable Random Function]]",
      "resolved": "urn:visionflow:linked:verifiable-random-function",
      "kind": "StubLink"
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
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:owl:class:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Derivation Function]]",
      "resolved": "urn:visionflow:owl:class:key-derivation-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Zero-Knowledge Proof]]",
      "resolved": "urn:visionflow:owl:class:zero-knowledge-proof",
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
  - The process of generating unpredictable and statistically random values for cryptographic operations, serving as a critical security primitive for key generation, nonces, and protocol initialization, distinguishing between true randomness from physical entropy sources and pseudo-randomness from deterministic algorithms seeded with entropy.

- ### Semantic Classification
  - owl-class:: blockchain:RandomNumberGeneration
  - owl-role:: Concept
  - belongs-to-domain:: [[Cryptography]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Asymmetric Encryption]]
  - implements:: [[Verifiable Random Function]]

- ### Content

  ## Definition
  - Process of generating unpredictable and statistically random values for cryptographic operations
  - Critical security primitive for key generation, nonces, and protocol initialization
  - Distinguishes between true randomness (entropy sources) and pseudo-randomness (deterministic algorithms)

  ## Core Components
  - **Entropy Source**: Physical phenomena providing true randomness
  - **CSPRNG**: Cryptographically Secure Pseudo-Random Number Generator
  - **Seed Material**: High-entropy input initializing PRNG
  - **Extraction Function**: Converts raw entropy into uniform randomness

  ## Technical Characteristics
  - **Unpredictability**: Cannot predict future outputs from past observations
  - **Uniform Distribution**: Equal probability for all possible values
  - **Statistical Independence**: No correlation between successive outputs
  - **Non-Reproducibility**: True RNG cannot be replicated; PRNG requires seed

  ## Types of RNGs
  ### True Random Number Generators (TRNG)
  - Hardware entropy sources: thermal noise, radioactive decay
  - OS entropy pools: /dev/random (Linux)
  - Slower but non-deterministic

  ### Cryptographically Secure PRNGs (CSPRNG)
  - **ChaCha20**: Stream cipher-based PRNG
  - **AES-CTR-DRBG**: AES in counter mode
  - **Hash_DRBG**: Hash function-based deterministic RNG
  - **HMAC_DRBG**: HMAC-based DRBG

  ## Blockchain Applications
  - Private key generation
  - Transaction nonce generation
  - Proof-of-Work mining nonce
  - Zero-knowledge proof randomness
  - Consensus leader election (VRF)
  - Commitment scheme blinding factors

  ## Entropy Sources
  - OS cryptographic API (CryptoAPI, /dev/urandom)
  - Hardware RNG (Intel RDRAND, TPM)
  - Environmental noise (mouse movement, timing)
  - Blockchain state (block hashes)
  - User input combined with system entropy

  ## Verifiable Random Functions (VRF)
  - Provides publicly verifiable randomness
  - Used in blockchain consensus (Algorand, Cardano)
  - Combines randomness with proof of correct generation
  - Prevents manipulation while proving unpredictability

  ## Relationships
  - enables:: [[Asymmetric Encryption]]
  - #### Inverse Relationships (Inferred by Reasoner)
    - Private Key requires Random Number Generation
  - component-of:: [[Cryptographic Protocol]]
  - uses:: [[Hash Function]]
  - implements:: [[Verifiable Random Function]]

  ## Security Considerations
  - Weak RNG leads to predictable keys
  - Historical attacks on blockchain wallets with poor entropy
  - Importance of seeding from multiple sources
  - Regular reseeding from entropy pool
  - Side-channel attack resistance

  ## On-Chain Randomness Challenges
  - Block hash manipulation by miners
  - Difficulty of trustless random generation
  - VRF-based solutions (Chainlink VRF)
  - Commit-reveal schemes
  - Multi-party randomness beacons

  ## Deterministic vs Non-Deterministic
  | Aspect | TRNG | CSPRNG |
  |--------|------|---------|
  | Source | Physical entropy | Algorithmic |
  | Speed | Slower | Very fast |
  | Reproducibility | No | Yes (with seed) |
  | Use Case | Seed generation | Bulk randomness |

  ## Best Practices
  - Use OS-provided cryptographic RNG (/dev/urandom)
  - Never implement custom RNG for security
  - Properly seed PRNGs with high-entropy source
  - Regular reseeding from entropy pool
  - Hardware RNG for high-security key generation

  ## Common Pitfalls
  - Using timestamp as sole entropy source
  - Predictable PRNG seeds (e.g., block number)
  - Insufficient entropy during boot (embedded systems)
  - Language standard library non-cryptographic RNGs

  ## Testing and Validation
  - Statistical test suites (NIST SP 800-22)
  - Entropy estimation tools
  - Continuous monitoring of entropy sources
  - Side-channel analysis for hardware RNG

  #### Related Concepts
  - [[Key Derivation Function]]
  - [[Verifiable Random Function]]
  - [[Commitment Scheme]]
  - [[Zero-Knowledge Proof]]

  #cryptography #random-number-generation #entropy #blockchain-security

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
