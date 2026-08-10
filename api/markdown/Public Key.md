public:: true

# Public Key
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7b2308ad9da563ee4a8ab5ea3a895a27759f49eb5f18747ab17ccc2a480e9bc",
  "@type": "Page",
  "vc:slug": "public-key",
  "title": "Public Key",
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
      "vc:value": "BC-0037"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Public Key"
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
  "@id": "urn:ngm:class:public-key",
  "@type": "Class",
  "label": "Public Key",
  "definition": "The publicly shareable component of an asymmetric key pair, derived from the private key via elliptic curve or RSA mathematics, used to derive wallet addresses, verify digital signatures, and enable encrypted communication without transmitting secret material.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:public-encryption-key",
      "label": "Public Encryption Key"
    },
    {
      "@id": "urn:ngm:class:asymmetric-public-key",
      "label": "Asymmetric Public Key"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:asymmetric-encryption",
        "label": "Asymmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:rsa-algorithm",
        "label": "RSA Algorithm"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:key-generation-algorithm",
        "label": "Key Generation Algorithm"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Digital Signature Verification"
      },
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Encrypted Communication"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:asymmetric-key-pair",
        "label": "Asymmetric Key Pair"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:one-way-function",
        "label": "One-Way Function"
      },
      {
        "@id": "urn:ngm:class:discrete-logarithm-problem",
        "label": "Discrete Logarithm Problem"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-nistir",
        "label": "NIST NISTIR"
      },
      {
        "@id": "urn:ngm:class:iso-iec-23257-2021",
        "label": "ISO-IEC 23257 2021"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:symmetric-key",
        "label": "Symmetric Key"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:address",
        "label": "Blockchain Wallet Address"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:public-key:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7b2308ad9da563ee4a8ab5ea3a895a27759f49eb5f18747ab17ccc2a480e9bc"
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
  - Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:PublicKey
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PublicKey))

  ## Subclass Relationships
  SubClassOf(:PublicKey :CryptographicPrimitive)
  SubClassOf(:PublicKey :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PublicKey
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PublicKey
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PublicKey "BC-0037"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PublicKey "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PublicKey "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PublicKey :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PublicKey :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PublicKey "Public Key"@en)
  AnnotationAssertion(rdfs:comment :PublicKey
    "Publicly-shared cryptographic key"@en)
  AnnotationAssertion(dct:description :PublicKey
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PublicKey "BC-0037")
  AnnotationAssertion(:priority :PublicKey "1"^^xsd:integer)
  AnnotationAssertion(:category :PublicKey "cryptographic-foundations"@en)
  )
      ```

  - ## About Public Key

  - Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
  - The dominant shift is the migration of public-key cryptography to quantum-resistant algorithms: on 13 August 2024 NIST finalised its first three post-quantum standards — FIPS 203 (ML-KEM, from CRYSTALS-Kyber) for key establishment, FIPS 204 (ML-DSA, from CRYSTALS-Dilithium) and FIPS 205 (SLH-DSA, from SPHINCS+) for digital signatures — with ML-KEM replacing classical RSA-KEM and ECDH key exchange.
  - Hybrid key agreement is already live at internet scale: the X25519MLKEM768 group (combining classical X25519 with ML-KEM-768, per RFC 9794, December 2024) is enabled by default in Chrome, Edge and Firefox, and by April 2026 Cloudflare reported that over half of the human web traffic it processes negotiates a post-quantum key agreement.
  - Secure-messaging platforms have effectively completed the key-agreement transition: Apple shipped its PQ3 protocol in iMessage from iOS 17.4 (February 2024) and Signal deployed PQXDH (announced 19 September 2023), both using hybrid classical-plus-ML-KEM handshakes to counter harvest-now-decrypt-later capture.
  - NIST IR 8547 (draft, November 2024) sets the deprecation timeline for quantum-vulnerable public-key algorithms — RSA-2048 and the P-256 elliptic curves deprecated after 2030 and disallowed after 2035 — while NSA's CNSA 2.0 requires new National Security System acquisitions to support ML-KEM-1024 and ML-DSA-87 from 1 January 2027.
  - Regulation hardened sharply in 2026: US Executive Order 14412 and OMB memorandum M-26-15 (both June 2026) mandate federal migration of high-value assets to post-quantum key establishment by 31 December 2030 and signatures by 31 December 2031, introduce a Cryptographic Bill of Materials (CBOM) requirement, and the UK NCSC (March 2025) set discovery by 2028, high-priority migration by 2031 and full migration by 2035.
  - The threat estimate has tightened: three papers between May 2025 and March 2026 cut the estimated physical qubits needed to break RSA-2048 from roughly 20 million to potentially under one million (some proposals near 100,000), prompting Google, Cloudflare and several governments to pull deadlines forward toward 2029–2030.
  - Open challenges as of 2026 include slow enterprise uptake (a May 2025 survey found only about 5% of enterprises had quantum-safe encryption deployed and 81% of libraries/HSMs not PQC-ready), unresolved standardisation of a fifth KEM (HQC, selected March 2025, standard due 2026–2027) and the FALCON-based FIPS 206 (FN-DSA, still undrafted), and the lag of post-quantum certificate/PKI signing behind hybrid key exchange, since most TLS handshakes are still authenticated with ECDSA or RSA certificates.

- ### References
  - 1. National Institute of Standards and Technology (2024). NIST Releases First 3 Finalized Post-Quantum Encryption Standards. https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
  - 2. NIST Computer Security Resource Center (2024). Post-Quantum Cryptography Project (FIPS 203/204/205; IR 8547 transition timeline). https://csrc.nist.gov/projects/post-quantum-cryptography
  - 3. Cloudflare (2025). The State of the Post-Quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 4. Cloud Security Alliance Labs (2026). Harvest Now, Decrypt Later: Quantum Risk to AI Infrastructure. https://labs.cloudsecurityalliance.org/research/ai-infrastructure-post-quantum-harvest-now-decrypt-later-v1/
  - 5. QRAMM (2026). The 2026 Executive Order on Post-Quantum Cryptography (EO 14412 / OMB M-26-15). https://qramm.org/learn/2026-executive-order-pqc.html
  - 6. Evertrust (2026). Hybrid Post-Quantum Certificates: Why Your First PQC Deployment Is Hybrid (X25519MLKEM768, RFC 9794). https://evertrust.io/blog/hybrid-post-quantum-certificates/

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
