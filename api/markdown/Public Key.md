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
      "@id": "urn:visionflow:owl:class:cryptographic-domain",
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
  "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key",
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
    {"@id": "urn:ngm:class:public-encryption-key", "label": "Public Encryption Key"},
    {"@id": "urn:ngm:class:asymmetric-public-key", "label": "Asymmetric Public Key"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:asymmetric-encryption", "label": "Asymmetric Encryption"},
      {"@id": "urn:ngm:class:rsa-algorithm", "label": "RSA Algorithm"},
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:private-key", "label": "Private Key"},
      {"@id": "urn:ngm:class:key-generation-algorithm", "label": "Key Generation Algorithm"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-signature-verification", "label": "Digital Signature Verification"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:encrypted-communication", "label": "Encrypted Communication"},
      {"@id": "urn:ngm:class:key-exchange", "label": "Key Exchange"},
      {"@id": "urn:ngm:class:certificate-binding", "label": "Certificate Binding"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:asymmetric-key-pair", "label": "Asymmetric Key Pair"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:one-way-function", "label": "One-Way Function"},
      {"@id": "urn:ngm:class:discrete-logarithm-problem", "label": "Discrete Logarithm Problem"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:nist-nistir", "label": "NIST NISTIR"},
      {"@id": "urn:ngm:class:iso-iec-23257-2021", "label": "ISO/IEC 23257:2021"},
      {"@id": "urn:ngm:class:x-509-certificate-standard", "label": "X.509 Certificate Standard"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:private-key", "label": "Private Key"},
      {"@id": "urn:ngm:class:symmetric-key", "label": "Symmetric Key"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:digital-certificate", "label": "Digital Certificate"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-wallet-address", "label": "Blockchain Wallet Address"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
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
      "resolved": "urn:visionflow:owl:class:cryptographic-domain",
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

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
