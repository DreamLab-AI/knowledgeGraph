public:: true

# Digital Signatures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7",
  "@type": "Page",
  "vc:slug": "digital-signatures",
  "title": "Digital Signatures",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:data-integrity",
      "vc:label": "Data Integrity"
    },
    {
      "@id": "urn:visionflow:linked:signature-algorithm",
      "vc:label": "Signature Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:non-repudiation",
      "vc:label": "Non-Repudiation"
    },
    {
      "@id": "urn:visionflow:owl:class:private-key",
      "vc:label": "Private Key"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9872"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Signatures"
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
  "@id": "urn:ngm:class:digital-signatures",
  "@type": "Class",
  "label": "Digital Signatures",
  "definition": "A cryptographic mechanism that uses asymmetric key pairs to produce a verifiable seal on digital data, ensuring authenticity, integrity, and non-repudiation of messages, transactions, and documents across distributed and decentralised systems.",
  "domain": "security",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptography",
    "label": "Cryptography"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:signature-algorithm",
        "label": "Signature Algorithm"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
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
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      },
      {
        "@id": "urn:ngm:class:code-signing",
        "label": "Code Signing"
      },
      {
        "@id": "urn:ngm:class:transaction-authorisation",
        "label": "Transaction Authorisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:ed-dsa",
        "label": "EdDSA"
      },
      {
        "@id": "urn:ngm:class:bls-signature",
        "label": "BLS Signature"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proofs"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symmetric-cryptography",
        "label": "Symmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:message-authentication-code",
        "label": "Message Authentication Code"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cryptographic-standards",
        "label": "NIST Cryptographic Standards"
      },
      {
        "@id": "urn:ngm:class:nist-fips-186",
        "label": "FIPS 186"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-signature",
      "label": "Digital Signature"
    },
    {
      "@id": "urn:ngm:class:cryptographic-signature",
      "label": "Cryptographic Signature"
    },
    {
      "@id": "urn:ngm:class:electronic-signature",
      "label": "Electronic Signature"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-signatures:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integrity]]",
      "resolved": "urn:visionflow:linked:data-integrity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Signature Algorithm]]",
      "resolved": "urn:visionflow:linked:signature-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Repudiation]]",
      "resolved": "urn:visionflow:owl:class:non-repudiation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:owl:class:private-key",
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
  - Cryptographic seals that confirm the authenticity and integrity of digital data using public-key cryptography, enabling transaction authorisation on blockchain networks, document authentication, and non-repudiation in metaverse and decentralised systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalSignatures
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - requires:: [[Private Key]], [[Hash Function]], [[Signature Algorithm]]
  - enables:: [[Authentication]], [[Data Integrity]], [[Non-Repudiation]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Private key: Creates signature (kept secret)
		- Public key: Verifies signature (shared openly)
		- Hash function: Produces message digest
		- Signature algorithm: Generates cryptographic proof
  - **Signature Algorithms**:
		- ECDSA: Bitcoin, Ethereum standard
		- EdDSA: Fast, constant-time signatures
		- BLS: 50% smaller, aggregatable
		- Schnorr: Native multi-signature support
  - **Blockchain Role**:
		- Transaction authorization
		- Wallet ownership proof
		- Smart contract execution
		- Consensus participation
  - **2024 Developments**: Post-quantum algorithms (ML-DSA, Mayo), AI-enhanced fraud detection, blockchain-anchored document signing
  - ## Applications
  - Cryptocurrency transaction signing
  - Document authentication
  - Code signing and software verification
  - Email security (S/MIME, PGP)
  - Metaverse identity verification

- ### Current Landscape (2026)
  - On 13 August 2024 NIST finalised its first post-quantum signature standards: FIPS 204 (ML-DSA, derived from CRYSTALS-Dilithium) as the recommended general-purpose scheme and FIPS 205 (SLH-DSA, from SPHINCS+) as a stateless hash-based backup; draft FIPS 206 (FN-DSA, from FALCON) for compact lattice signatures remained under development into 2026.
  - Migration, not algorithm choice, is now the frontier: NIST IR 8547 sets deprecation of RSA and elliptic-curve signatures after 2030 and disallowance by 2035, while NSA's CNSA 2.0 mandates ML-DSA-87 for national security systems, pushing enterprises toward hybrid and composite deployments.
  - Real-world PQC deployment in 2026 is concentrated in TLS key agreement rather than signatures: Chrome's X25519MLKEM768 hybrid group reached over 30% of TLS 1.3 handshakes per Cloudflare Radar, and OpenSSL 3.5 (April 2025) added native ML-KEM and ML-DSA, but no publicly trusted CA has yet issued an ML-DSA root chaining into the Mozilla, Apple, Microsoft or Chrome trust stores.
  - Standards bodies are converging on hybrid transition models: RFC 9794 (December 2024) framed hybrid KEMs, the IETF LAMPS working group is specifying composite ML-DSA certificates (draft-ietf-lamps-pq-composite-sigs), and draft-ietf-tls-mldsa was still in working-group last call as of May 2026.
  - At the CA/Browser Forum, ballot SMC-013 (finalised July 2025) made S/MIME the first use case to permit ML-DSA and ML-KEM in production certificates, while a parallel code-signing ballot stalled after Microsoft declined to support it pending its own PQC transition announcement.
  - In Europe, eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) reshaped qualified electronic signatures: every member state must offer a certified EU Digital Identity (EUDI) Wallet by December 2026, and from December 2027 wallets must let citizens create qualified electronic signatures free of charge for non-professional use.
  - The 2025 eIDAS implementing acts locked in binding reference standards for remote QSCD management (IR 2025/847), qualified certificates (IR 2025/1943) and validation, folding server-side remote signing inside FIPS 140-3 / EN 419 221-5 HSMs into the QES regime; from May 2026 remote identity proofing must meet certified requirements (ETSI TS 119 461), and the trust-list ecosystem migrated from TLv5 to TLv6 in April 2026.
  - Open challenges as of 2026 include ML-DSA signatures roughly 50 times larger than P-256 ECDSA (inflating certificate chains and handshake sizes), the unresolved hybrid-versus-pure debate across conflicting compliance regimes, and the absence of publicly trusted PQC roots leaving most authentication still ECDSA/RSA-signed.

- ### References
  - 1. NIST / CSRC (2024). Post-Quantum Cryptography FIPS Approved (FIPS 203, 204, 205). https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved
  - 2. NIST (2024). FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA). https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.204.pdf
  - 3. Evertrust (2026). Hybrid Post-Quantum Certificates: Why Your First PQC Deployment Is Hybrid. https://evertrust.io/blog/hybrid-post-quantum-certificates/
  - 4. Cloudflare (2025). The State of the Post-Quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 5. Corey Bonnell (2025). Post-quantum readiness at the CA/Browser Forum: a mixed bag (Ballot SMC-013). https://www.linkedin.com/pulse/post-quantum-readiness-cabrowser-forum-mixed-bag-corey-bonnell-vqnxe
  - 6. Hopae (2026). How to be eIDAS 2.0 ready in 2026 (EUDI Wallet, QES, implementing acts). https://www.hopae.com/blog/how-to-be-eidas-2.0-ready-in-2026

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
