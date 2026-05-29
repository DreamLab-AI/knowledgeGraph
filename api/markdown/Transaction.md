public:: true

# Transaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a19859198644f87c8320063d42bbe03489f865a5b38a365ae161c10a186ea8b1",
  "@type": "Page",
  "vc:slug": "transaction",
  "title": "Transaction",
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
      "@id": "urn:visionflow:owl:class:blockchain-domain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-data-structure",
      "vc:label": "DistributedDataStructure"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transaction"
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
  "@id": "urn:ngm:class:transaction",
  "@type": "Class",
  "label": "Transaction",
  "definition": "State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "DistributedDataStructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:gas", "label": "Gas"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"},
      {"@id": "urn:ngm:class:block-time", "label": "Block Time"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:digital-payments", "label": "Digital Payments"},
      {"@id": "urn:ngm:class:smart-contract-execution", "label": "Smart Contract Execution"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
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
  "@id": "urn:visionflow:annotation:link-resolutions:transaction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a19859198644f87c8320063d42bbe03489f865a5b38a365ae161c10a186ea8b1"
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
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DistributedDataStructure]]",
      "resolved": "urn:visionflow:owl:class:distributed-data-structure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
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
  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Transaction
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]
  - bridges-to:: [[Virtual Economy]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Transaction))

  ## Subclass Relationships
  SubClassOf(:Transaction :DistributedDataStructure)
  SubClassOf(:Transaction :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Transaction
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Transaction "BC-0006"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Transaction "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Transaction "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Transaction :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Transaction :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Transaction "Transaction"@en)
  AnnotationAssertion(rdfs:comment :Transaction
    "State-changing operation on blockchain"@en)
  AnnotationAssertion(dct:description :Transaction
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Transaction "BC-0006")
  AnnotationAssertion(:priority :Transaction "1"^^xsd:integer)
  AnnotationAssertion(:category :Transaction "blockchain-fundamentals"@en)
  )
      ```

  - ## About Transaction

  - State-changing operation on blockchain within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
