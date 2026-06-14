public:: true

# Input
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3585822115560999f5df938fae3347a117fac784344f343d21a38b0f75eecf2",
  "@type": "Page",
  "vc:slug": "input",
  "title": "Input",
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
      "@id": "urn:visionflow:owl:class:blockchain",
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
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Input"
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
  "@id": "urn:ngm:class:input",
  "@type": "Class",
  "label": "Input",
  "definition": "In the UTXO blockchain model, an Input is a reference to a previous unspent transaction output that is being consumed to fund a new transaction. Each input includes a pointer to the referenced output, a cryptographic signature proving ownership, and an unlocking script that satisfies the output's locking conditions.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
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
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:cryptographic-keys", "label": "Cryptographic Keys"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"},
      {"@id": "urn:ngm:class:output", "label": "Output"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"},
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:account-model", "label": "Account Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-signature", "label": "Cryptographic Signature"},
      {"@id": "urn:ngm:class:merkle-proof", "label": "Merkle Proof"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:input:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d3585822115560999f5df938fae3347a117fac784344f343d21a38b0f75eecf2"
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
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Transaction funding source within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Input
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Input))

  ## Subclass Relationships
  SubClassOf(:Input :DistributedDataStructure)
  SubClassOf(:Input :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Input
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Input
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Input "BC-0021"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Input "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Input "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Input :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Input :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Input "Input"@en)
  AnnotationAssertion(rdfs:comment :Input
    "Transaction funding source"@en)
  AnnotationAssertion(dct:description :Input
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Input "BC-0021")
  AnnotationAssertion(:priority :Input "1"^^xsd:integer)
  AnnotationAssertion(:category :Input "blockchain-fundamentals"@en)
  )
      ```

  - ## About Input

  - Transaction funding source within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
