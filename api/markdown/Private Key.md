public:: true

# Private Key
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e74b927449061ac0ad83301e9ba5b8187a62d710c7a65b2828adbb1cece99c6e",
  "@type": "Page",
  "vc:slug": "private-key",
  "title": "Private Key",
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
      "vc:value": "BC-0036"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Private Key"
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
  "@id": "urn:ngm:class:private-key",
  "@type": "Class",
  "label": "Private Key",
  "definition": "A Private Key is a secret scalar value generated through cryptographically secure randomness that serves as the sole proof of ownership within asymmetric cryptographic systems. In blockchain contexts it authorises transaction signing via digital signatures, controls access to associated public addresses and funds, and underpins the non-custodial security model where loss or exposure is irreversible.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-system",
        "label": "Cryptographic System"
      },
      {
        "@id": "urn:ngm:class:asymmetric-key-pair",
        "label": "Asymmetric Key Pair"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:random-number-generator",
        "label": "Cryptographically Secure Random Number Generator"
      },
      {
        "@id": "urn:ngm:class:secure-storage",
        "label": "Secure Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:non-custodial-wallet",
        "label": "Non-Custodial Wallet"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:discrete-logarithm-problem",
        "label": "Discrete Logarithm Problem"
      }
    ],
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
        "@id": "urn:ngm:class:secp256k1",
        "label": "secp256k1"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-fips-186",
        "label": "NIST FIPS 186"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:symmetric-key",
        "label": "Symmetric Key"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
        "label": "Hierarchical Deterministic Wallet"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:secret-key",
      "label": "Secret Key"
    },
    {
      "@id": "urn:ngm:class:signing-key",
      "label": "Signing Key"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:private-key:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e74b927449061ac0ad83301e9ba5b8187a62d710c7a65b2828adbb1cece99c6e"
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
  - Secret cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:PrivateKey
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:PrivateKey))

  ## Subclass Relationships
  SubClassOf(:PrivateKey :CryptographicPrimitive)
  SubClassOf(:PrivateKey :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PrivateKey
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PrivateKey
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PrivateKey "BC-0036"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PrivateKey "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PrivateKey "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PrivateKey :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PrivateKey :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PrivateKey "Private Key"@en)
  AnnotationAssertion(rdfs:comment :PrivateKey
    "Secret cryptographic key"@en)
  AnnotationAssertion(dct:description :PrivateKey
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PrivateKey "BC-0036")
  AnnotationAssertion(:priority :PrivateKey "1"^^xsd:integer)
  AnnotationAssertion(:category :PrivateKey "cryptographic-foundations"@en)
  )
      ```

  - ## About Private Key

  - Secret cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
