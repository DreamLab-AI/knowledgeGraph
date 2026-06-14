public:: true

# Pool Share
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:68db87bfbea2c0a482bfbeabf4fd559e2f45178c7fd48a4860aabaf8d5bd0a3a",
  "@type": "Page",
  "vc:slug": "pool-share",
  "title": "Pool Share",
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
      "@id": "urn:visionflow:owl:class:bc-protocol-and-consensus",
      "vc:label": "ConsensusDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-protocol",
      "vc:label": "ConsensusProtocol"
    },
    {
      "@id": "urn:visionflow:owl:class:protocol-layer",
      "vc:label": "ProtocolLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0066"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Pool Share"
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
  "@id": "urn:ngm:class:pool-share",
  "@type": "Class",
  "label": "Pool Share",
  "definition": "A proof-of-work unit submitted by an individual miner to a mining pool server demonstrating that the miner performed a bounded amount of computational work toward finding a valid block hash. Pool shares have a lower difficulty target than the network block target, allowing the pool to credit each contributor proportional work units and distribute block rewards fairly, regardless of which specific miner finds the winning nonce.",
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
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "ConsensusProtocol"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:mining", "label": "Mining"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mining-reward", "label": "Mining Reward"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:pool-share:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:68db87bfbea2c0a482bfbeabf4fd559e2f45178c7fd48a4860aabaf8d5bd0a3a"
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
      "raw": "[[ConsensusDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-protocol-and-consensus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConsensusProtocol]]",
      "resolved": "urn:visionflow:owl:class:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ProtocolLayer]]",
      "resolved": "urn:visionflow:owl:class:protocol-layer",
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
  A proof-of-work unit submitted by an individual miner to a mining pool server demonstrating bounded computational work toward finding a valid block hash. Pool shares have a lower difficulty target than the network block target, enabling the pool to credit proportional work and distribute block rewards fairly across contributors.

- ### Relationships
  Pool Share is **part of** Mining Pool (the collective it serves) and Mining (the broader process). It **requires** Proof Of Work (as the underlying hash puzzle) and Consensus Mechanism (the network rules it contributes to). It **enables** Mining Reward distribution and Block Reward allocation. It is **related to** Cryptocurrency (as the economic output), Blockchain Network (the ledger being extended), and Blockchain Protocol (which defines share difficulty). It **contrasts with** Proof of Stake, which replaces hash-based contributions with stake-weighted selection.

- ### Content

  ## Class Declaration
  Declaration(Class(:PoolShare))

  ## Subclass Relationships
  SubClassOf(:PoolShare :ConsensusProtocol)
  SubClassOf(:PoolShare :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:PoolShare
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :PoolShare "BC-0066"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :PoolShare "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :PoolShare "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :PoolShare :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :PoolShare :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :PoolShare "Pool Share"@en)
  AnnotationAssertion(rdfs:comment :PoolShare
    "Mining contribution unit"@en)
  AnnotationAssertion(dct:description :PoolShare
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :PoolShare "BC-0066")
  AnnotationAssertion(:priority :PoolShare "1"^^xsd:integer)
  AnnotationAssertion(:category :PoolShare "consensus-fundamentals"@en)
  )
      ```

  - ## About Pool Share

  - Mining contribution unit within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Pool Share.md: community, innovation, software engineering -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
