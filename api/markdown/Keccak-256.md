public:: true

# Keccak-256
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a2db9796039558eeef54e47740ce49c175c859431b5d129b54886bff776142f",
  "@type": "Page",
  "vc:slug": "keccak-256",
  "title": "Keccak-256",
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
      "vc:value": "BC-0042"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Keccak-256"
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
  "@id": "urn:ngm:class:keccak-256",
  "@type": "Class",
  "label": "Keccak-256",
  "definition": "A 256-bit cryptographic hash function based on the Keccak sponge construction, selected as the SHA-3 standard and used natively in Ethereum for address derivation, transaction hashing, and smart contract storage. It differs from NIST SHA-3 in padding and offers strong collision resistance and preimage resistance properties.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:hash-function", "label": "Hash Function"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:collision-resistance", "label": "Collision Resistance"},
      {"@id": "urn:ngm:class:preimage-resistance", "label": "Preimage Resistance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:bc-cryptographic-primitive", "label": "Cryptographic Primitive"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:keccak-256:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a2db9796039558eeef54e47740ce49c175c859431b5d129b54886bff776142f"
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
  - SHA-3 hash function variant within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Keccak-256
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Keccak-256))

  ## Subclass Relationships
  SubClassOf(:Keccak-256 :CryptographicPrimitive)
  SubClassOf(:Keccak-256 :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Keccak-256
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Keccak-256
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Keccak-256 "BC-0042"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Keccak-256 "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Keccak-256 "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Keccak-256 :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Keccak-256 :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Keccak-256 "Keccak-256"@en)
  AnnotationAssertion(rdfs:comment :Keccak-256
    "SHA-3 hash function variant"@en)
  AnnotationAssertion(dct:description :Keccak-256
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Keccak-256 "BC-0042")
  AnnotationAssertion(:priority :Keccak-256 "1"^^xsd:integer)
  AnnotationAssertion(:category :Keccak-256 "cryptographic-foundations"@en)
  )
      ```

  - ## About Keccak-256

  - SHA-3 hash function variant within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
