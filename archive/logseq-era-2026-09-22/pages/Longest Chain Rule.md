public:: true
alias:: Longest-Chain Rule

# Longest Chain Rule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2521fe12d2e38f4e8a98cd34ac220c786648b0a5e54c46cae0ce127ba4a5fe37",
  "@type": "Page",
  "vc:slug": "longest-chain-rule",
  "title": "Longest Chain Rule",
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
      "vc:value": "BC-0059"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Longest Chain Rule"
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
  "@id": "urn:ngm:class:longest-chain-rule",
  "@type": "Class",
  "label": "Longest Chain Rule",
  "definition": "The fork-choice rule used in proof-of-work blockchains that designates the chain with the most cumulative work (or greatest total difficulty) as the canonical chain. It resolves temporary forks by directing nodes to extend the heaviest chain, thereby converging the distributed network on a single transaction history.",
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
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "Consensus Protocol"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:difficulty-adjustment", "label": "Difficulty Adjustment"},
      {"@id": "urn:ngm:class:chain-reorganization", "label": "Chain Reorganization"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralization", "label": "Decentralization"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:longest-chain-rule:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2521fe12d2e38f4e8a98cd34ac220c786648b0a5e54c46cae0ce127ba4a5fe37"
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
  - Chain selection mechanism within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:LongestChainRule
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

- ### Content

  ## Class Declaration
  Declaration(Class(:LongestChainRule))

  ## Subclass Relationships
  SubClassOf(:LongestChainRule :ConsensusProtocol)
  SubClassOf(:LongestChainRule :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:LongestChainRule
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:LongestChainRule
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :LongestChainRule "BC-0059"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :LongestChainRule "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :LongestChainRule "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :LongestChainRule :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :LongestChainRule :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :LongestChainRule "Longest Chain Rule"@en)
  AnnotationAssertion(rdfs:comment :LongestChainRule
    "Chain selection mechanism"@en)
  AnnotationAssertion(dct:description :LongestChainRule
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :LongestChainRule "BC-0059")
  AnnotationAssertion(:priority :LongestChainRule "1"^^xsd:integer)
  AnnotationAssertion(:category :LongestChainRule "consensus-fundamentals"@en)
  )
      ```

  - ## About Longest Chain Rule

  - Chain selection mechanism within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
