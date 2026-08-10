public:: true

# Cryptographic Keys
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af3eafe16f32cfabaf5a871aef9b7d3c6415310cdd9b9e4a18596fd3c054c5d0",
  "@type": "Page",
  "vc:slug": "cryptographic-keys",
  "title": "Cryptographic Keys",
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
      "@id": "urn:visionflow:owl:class:cryptographic-key-management",
      "vc:label": "Cryptographic Key Management"
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
      "@id": "urn:visionflow:owl:class:key-derivation-function",
      "vc:label": "Key Derivation Function"
    },
    {
      "@id": "urn:visionflow:owl:class:random-number-generation",
      "vc:label": "Random Number Generation"
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
      "vc:value": "BC-7006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Keys"
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
  "@id": "urn:ngm:class:cryptographic-keys",
  "@type": "Class",
  "label": "Cryptographic Keys",
  "definition": "Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys may be symmetric (single shared secret) or asymmetric (public-private pairs); their security depends on key length, entropy of generation, and rigorous lifecycle management.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:session-key",
        "label": "Session Key"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:asymmetric-encryption",
        "label": "Asymmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      },
      {
        "@id": "urn:ngm:class:entropy-source",
        "label": "Entropy Source"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-algorithm",
        "label": "Cryptographic Algorithm"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:rsa-algorithm",
        "label": "RSA Algorithm"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cryptographic-standards",
        "label": "NIST Cryptographic Standards"
      },
      {
        "@id": "urn:ngm:class:fips-140-3",
        "label": "FIPS 140"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:password",
        "label": "Password"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:blockchain-wallet",
        "label": "Blockchain Wallet"
      },
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cryptographic-key",
      "label": "Cryptographic Key"
    },
    {
      "@id": "urn:ngm:class:cipher-key",
      "label": "Cipher Key"
    }
  ],
  "quality": 0.68,
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
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-keys:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:af3eafe16f32cfabaf5a871aef9b7d3c6415310cdd9b9e4a18596fd3c054c5d0"
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
      "raw": "[[Cryptographic Key Management]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-key-management",
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
      "raw": "[[Key Derivation Function]]",
      "resolved": "urn:visionflow:owl:class:key-derivation-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Random Number Generation]]",
      "resolved": "urn:visionflow:owl:class:random-number-generation",
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
  - Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys can be symmetric (single shared key) or asymmetric (public-private key pairs), with security depending on key length, randomness, and proper management.

- ### Semantic Classification
  - owl-class:: blockchain:CryptographicKeys
  - owl-role:: Concept
  - belongs-to-domain:: [[Cryptography]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - enables:: [[Digital Signature]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  ## Definition

  A cryptographic key is a string of data used to encrypt data (to keep the data secret), decrypt data (to perform the reverse operation), sign data (to ensure authenticity), or verify a signature. The security of any cryptographic system fundamentally depends on the secrecy, randomness, and proper management of its keys.

  ## Key Types

  ### By Encryption Method

  #### Symmetric Keys
  - Single key used for both encryption and decryption
  - Must be shared securely between all parties
  - Faster and more efficient for bulk data encryption
  - Common algorithms: AES, ChaCha20, 3DES
  - Typical sizes: 128, 192, or 256 bits

  #### Asymmetric Keys (Public-Key Pairs)
  - Mathematically related pair: public key and private key
  - Public key encrypts data or verifies signatures
  - Private key decrypts data or creates signatures
  - No need to share private key, reducing exposure risk
  - Common algorithms: RSA, ECC, Ed25519
  - Typical sizes: 2048-4096 bits (RSA), 256-384 bits (ECC)

  ### By Function

  - **Encryption Keys**: Transform plaintext to ciphertext
  - **Decryption Keys**: Reverse the encryption process
  - **Signing Keys**: Create digital signatures (typically private keys)
  - **Verification Keys**: Verify digital signatures (typically public keys)
  - **Master Keys**: Root keys from which other keys are derived
  - **Session Keys**: Temporary keys for single communication session
  - **Key Encryption Keys (KEK)**: Keys used to encrypt other keys

  ## Security Properties

  | Property | Symmetric Keys | Asymmetric Keys |
  |----------|---------------|-----------------|
  | Key Size for Equivalent Security | 128-bit | 2048-bit (RSA) |
  | Speed | Very fast | Slower |
  | Key Distribution | Challenging | Easier (public key shareable) |
  | Use Case | Bulk encryption | Key exchange, signatures |

  ## Blockchain Applications

  - **Private Keys**: Control access to blockchain addresses and funds
  - **Public Keys**: Derive addresses and verify transaction signatures
  - **HD Wallet Keys**: Hierarchically derived from master seed
  - **Multi-sig Keys**: Multiple keys required for transaction authorization

  ## Key Generation Requirements

  - High-entropy random number source (CSPRNG)
  - Sufficient key length for target security level
  - Algorithm-specific generation procedures
  - Protection against side-channel leakage during generation

  ## Hybrid Encryption

  Modern systems often combine both key types:
  1. Asymmetric encryption exchanges a symmetric session key
  2. Symmetric encryption handles bulk data (faster)
  3. Example: TLS/SSL in HTTPS communications

  ## Relationships
  - managed-by:: [[Cryptographic Key Management]]
  - generated-by:: [[Random Number Generation]]
  - derived-by:: [[Key Derivation Function]]
  - used-in:: [[Symmetric Encryption]]
  - used-in:: [[Asymmetric Encryption]]
  - enables:: [[Digital Signature]]
  - is-subclass-of:: [[Cryptography]]

- ### Current Landscape (2026)
  - The centre of gravity has shifted decisively to post-quantum key material: on 13 August 2024 NIST finalised FIPS 203 (ML-KEM, from CRYSTALS-Kyber) for key establishment alongside FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) for signatures, making quantum-resistant keys a ratified standard rather than a research topic.
  - Hybrid post-quantum key exchange is now the largest live deployment of PQC: the X25519MLKEM768 group (IANA code point 0x11EC) is enabled by default in Chrome (from v124, May 2024), Firefox, Edge and Safari, and on Cloudflare, AWS and Google edges, with over 30% of TLS 1.3 handshakes to Cloudflare negotiating a PQC hybrid by mid-2025 and OpenSSL 3.5 (April 2025) shipping ML-KEM in the mainline tree.
  - Regulatory deadlines have hardened the migration: NIST IR 8547 and NSA's CNSA 2.0 deprecate RSA/ECC after 2030 and disallow them by 2035, CNSA 2.0 mandates that all new key-management and PKI systems support ML-KEM-1024 and ML-DSA-87 natively by end-2026, and US Executive Order 14412 with OMB memo M-26-15 (June 2026) set a hard target of PQC key establishment by 31 December 2030.
  - Key-management infrastructure is being re-tooled around larger PQC keys: KMIP 2.2 adds ML-KEM/ML-DSA key object types, PKCS#11 is being extended for PQC, AWS KMS added ML-DSA signing in FIPS 140-3 HSMs in 2025, and FIPS 140-3 Level 3 HSMs such as Thales Luna (and the new Luna 8, launched August 2026) now carry ML-KEM, ML-DSA and LMS/HSS in firmware with crypto-agile upgrade paths.
  - NIST is updating its foundational key-management guidance: SP 800-57 Part 1 Revision 6 (initial public draft December 2025, comments closed February 2026) folds in the FIPS 203/204/205 algorithms plus Ascon (SP 800-232) and separates key-establishment from key-storage keys for the first time.
  - Authentication keys are following: IANA added ML-DSA-44/65/87 to the COSE codelist on 24 April 2025, laying the standards groundwork for quantum-safe FIDO2 passkeys, though production passkeys still sign with P-256/Ed25519 pending browser and authenticator support expected around 2027-2028.
  - Open challenges as of 2026 centre on the certificate layer and algorithm diversity: PQC certificates lag key exchange (draft-ietf-tls-mldsa is still in working-group last call and no major browser negotiates ML-DSA server certificates by default), FN-DSA/FIPS 206 (Falcon) and the code-based HQC KEM backup (selected March 2025) remain unfinished and expected to finalise in 2026-2027, and enterprises face the harvest-now-decrypt-later threat while completing cryptographic inventory and crypto-agility work.

- ### References
  - 1. NIST CSRC (2024). Post-Quantum Cryptography FIPS Approved (FIPS 203, 204, 205). https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved
  - 2. NIST CSRC (2024–2025). Post-Quantum Cryptography Project (FIPS 203 ML-KEM; NIST IR 8547 transition timeline). https://csrc.nist.gov/projects/post-quantum-cryptography
  - 3. Cloudflare (2025). The State of the Post-Quantum Internet in 2025 (X25519MLKEM768 deployment). https://blog.cloudflare.com/pq-2025/
  - 4. Wultra (2025). Passkeys and FIDO2 Quietly Became Quantum-Safe (IANA COSE ML-DSA update, 24 April 2025). https://www.wultra.com/blog/passkeys-and-fido2-quietly-became-quantum-safe-heres-what-changed
  - 5. Quantum Security Defence (2026). CNSA 2.0 vs CNSA 1.0 Quantum Key Management: 2026–2027 (KMIP 2.2, HSM/PKCS#11 milestones). https://quantumsecuritydefence.com/insights/cnsa-2-vs-1-quantum-key-management/
  - 6. NIST (2025). SP 800-57 Part 1 Revision 6 Initial Public Draft — Recommendation for Key Management. https://csrc.nist.gov/pubs/sp/800/57/pt1/r6/ipd

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
