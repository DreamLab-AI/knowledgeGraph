public:: true
alias:: Public Key Cryptography

# Public-Key Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:56688ddb1998eba7a63f6113d790f851a7ede9d4251e0a2be2f231f10647aa9f",
  "@type": "Page",
  "vc:slug": "public-key-cryptography",
  "title": "Public-Key Cryptography",
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
      "vc:value": "BC-0031"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Public-Key Cryptography"
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
  "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
  "@type": "Class",
  "label": "Public-Key Cryptography",
  "definition": "An asymmetric cryptographic system using mathematically related key pairs — a public key for encryption or signature verification and a private key for decryption or signing — enabling secure communication, digital signatures, and authentication without requiring shared secrets. In blockchain systems it underpins wallet addresses, transaction signing, and identity verification.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:ecdsa",
        "label": "ECDSA"
      },
      {
        "@id": "urn:ngm:class:key-pair",
        "label": "Key Pair"
      }
    ],
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
        "@id": "urn:ngm:class:trapdoor-function",
        "label": "Trapdoor Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Digital Signature Verification"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      },
      {
        "@id": "urn:ngm:class:secure-key-exchange",
        "label": "Secure Key Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS Protocol"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-cryptographic-standards",
        "label": "NIST Cryptographic Standards"
      },
      {
        "@id": "urn:ngm:class:rfc-5280",
        "label": "RFC 5280"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Key Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:asymmetric-cryptography",
      "label": "Asymmetric Cryptography"
    },
    {
      "@id": "urn:ngm:class:public-key-encryption",
      "label": "Public-Key Encryption"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:public-key-cryptography:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:56688ddb1998eba7a63f6113d790f851a7ede9d4251e0a2be2f231f10647aa9f"
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
  - Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Public-keyCryptography
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Public-KeyCryptography))

  ## Subclass Relationships
  SubClassOf(:Public-KeyCryptography :CryptographicPrimitive)
  SubClassOf(:Public-KeyCryptography :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Public-KeyCryptography
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Public-KeyCryptography
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Public-KeyCryptography "BC-0031"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Public-KeyCryptography "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Public-KeyCryptography "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Public-KeyCryptography :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Public-KeyCryptography :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Public-KeyCryptography "Public-Key Cryptography"@en)
  AnnotationAssertion(rdfs:comment :Public-KeyCryptography
    "Asymmetric encryption system"@en)
  AnnotationAssertion(dct:description :Public-KeyCryptography
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Public-KeyCryptography "BC-0031")
  AnnotationAssertion(:priority :Public-KeyCryptography "1"^^xsd:integer)
  AnnotationAssertion(:category :Public-KeyCryptography "cryptographic-foundations"@en)
  )
      ```

  - ## About Public-Key Cryptography

  - Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
