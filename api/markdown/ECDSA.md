public:: true

# ECDSA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cfbf9f1567ca06123c418452a22398871331f23fe3bb3a2ec7a4b401493983b",
  "@type": "Page",
  "vc:slug": "ecdsa",
  "title": "ECDSA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-primitive",
      "vc:label": "CryptographicPrimitive"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0040"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ECDSA"
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
  "@id": "urn:ngm:class:ecdsa",
  "@type": "Class",
  "label": "ECDSA",
  "definition": "Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographic primitive that uses elliptic curve mathematics to generate and verify digital signatures, underpinning transaction authentication in Bitcoin, Ethereum, and most public blockchain networks. ECDSA provides non-repudiation, integrity verification, and ownership proof with compact key sizes relative to RSA equivalents.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:infra-security-and-identity",
    "label": "Security and Identity"
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
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:finite-field-arithmetic",
        "label": "Finite Field Arithmetic"
      },
      {
        "@id": "urn:ngm:class:random-number-generator",
        "label": "Random Number Generator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      },
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:elliptic-curve-parameters",
        "label": "Elliptic Curve Parameters"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signature-standard",
        "label": "Digital Signature Standard"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:elliptic-curve-discrete-logarithm-problem",
        "label": "Elliptic Curve Discrete Logarithm Problem"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:code-signing",
        "label": "Code Signing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      },
      {
        "@id": "urn:ngm:class:sec-standards",
        "label": "SEC Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rsa-signature",
        "label": "RSA Signature"
      },
      {
        "@id": "urn:ngm:class:ed-dsa",
        "label": "EdDSA"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-signature-algorithm",
        "label": "Digital Signature Algorithm"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:secp256k1",
        "label": "secp256k1"
      },
      {
        "@id": "urn:ngm:class:p-256-curve",
        "label": "P-256 Curve"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:elliptic-curve-digital-signature-algorithm",
      "label": "Elliptic Curve Digital Signature Algorithm"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ecdsa:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3cfbf9f1567ca06123c418452a22398871331f23fe3bb3a2ec7a4b401493983b"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicPrimitive]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  - Elliptic Curve Digital Signature Algorithm within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:ECDSA
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:ECDSA))

  ## Subclass Relationships
  SubClassOf(:ECDSA :CryptographicPrimitive)
  SubClassOf(:ECDSA :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ECDSA
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ECDSA
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ECDSA "BC-0040"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ECDSA "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ECDSA "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ECDSA :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ECDSA :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ECDSA "ECDSA"@en)
  AnnotationAssertion(rdfs:comment :ECDSA
    "Elliptic Curve Digital Signature Algorithm"@en)
  AnnotationAssertion(dct:description :ECDSA
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ECDSA "BC-0040")
  AnnotationAssertion(:priority :ECDSA "1"^^xsd:integer)
  AnnotationAssertion(:category :ECDSA "cryptographic-foundations"@en)
  )
      ```

  - ## About ECDSA

  - Elliptic Curve Digital Signature Algorithm within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Current Landscape (2026)
  - NIST IR 8547 (initial public draft, 12 November 2024) formally placed ECDSA on a retirement calendar alongside RSA, DSA, ECDH and EdDSA: 112-bit variants deprecated after 2030, and all quantum-vulnerable signature schemes disallowed after 2035, aligning with the NSM-10 goal of migrating US government systems to post-quantum cryptography by 2035.
  - The post-quantum successors ECDSA must give way to were finalised on 13 August 2024 (FIPS 204 ML-DSA and FIPS 205 SLH-DSA), with FN-DSA (FIPS 206, from Falcon) following in draft on 24 October 2024; NSA CNSA 2.0 mandates full removal of ECDH/ECDSA from US National Security Systems by 2033, and the UK NCSC published a phased 2028–2035 migration timeline in March 2025.
  - Migration is proceeding as hybrid rather than wholesale replacement: Cloudflare reported (October 2025) that around half of its connections already use post-quantum key agreement (X25519MLKEM768), and the leading hybrid signature candidate for the web, MLDSA44-ECDSA-P256-SHA256, deliberately keeps classical ECDSA P-256 alongside ML-DSA; the IETF had not yet locked down hybrid-certificate formats as of late 2025, with resolution expected in early 2026.
  - The CA/Browser Forum continues to constrain ECDSA to NIST P-256/P-384/P-521 only, while shrinking certificate lifetimes to force crypto-agility: ballot SC-081 caps new TLS certificates at 200 days from 15 March 2026, dropping to 100 days in 2027 and 47 days in 2029, on the path toward eventual publicly-trusted ML-DSA certificates (expected 2026–2027).
  - Implementation-level nonce weaknesses remain the dominant real-world ECDSA break: 2024–2026 research extended lattice and Fourier attacks (ASIACRYPT 2024 sieving work by Gao et al.), and a 2026 arXiv study documented systematic nonce reuse and cross-wallet nonce collisions among Polygon MEV searchers enabling passive private-key recovery from on-chain data.
  - Toolchain support for the transition has matured: OpenSSL 3.5 (April 2025) ships ML-KEM, ML-DSA and SLH-DSA, and browsers, Go and recent Apple OSes enable X25519MLKEM768 by default, meaning the practical bottleneck for retiring ECDSA is now CA and HSM infrastructure rather than client implementations.
  - Open challenges as of 2026 include the large size of ML-DSA signatures (roughly 2.4 KB versus ECDSA P-256's 64-byte keys and compact signatures) inflating TLS handshakes, the "harvest-now-decrypt-later" exposure of long-lived ECDSA-signed data, and blockchain-specific quantum risk — a draft Bitcoin BIP proposes phased deprecation of ECDSA/Schnorr, citing roughly 25% of the UTXO set held in addresses with exposed public keys.

- ### References
  - 1. NIST (2024). NIST IR 8547 (ipd): Transition to Post-Quantum Cryptography Standards. https://csrc.nist.gov/pubs/ir/8547/ipd
  - 2. Cloudflare (2025). The state of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 3. CA/Browser Forum (2025). Baseline Requirements for TLS Server Certificates, v2.2.0. https://cabforum.org/working-groups/server/baseline-requirements/documents/CA-Browser-Forum-TLS-BR-2.2.0.pdf
  - 4. Sectigo (2025). CA/Browser Forum passes ballot to reduce SSL/TLS certificates to 47-day maximum term. https://drj.com/industry_news/ca-browser-forum-passes-ballot-to-reduce-ssl-tls-certificates-to-47-day-maximum-term/
  - 5. Gao, Wang, Hu, He (2025, arXiv). How Nonce Collisions in ECDSA Compromise Polygon MEV. https://arxiv.org/pdf/2605.21498.pdf
  - 6. Quantum Security Defence (2026). PQC Migration Timeline: 2025, 2026, 2027 and Beyond. https://quantumsecuritydefence.com/insights/pqc-migration-timeline-2025-2026-2027/

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
