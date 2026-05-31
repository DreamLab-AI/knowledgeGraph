public:: true
alias:: NetworkHashRate

# Network Hash Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c4fe42b641ea208515e24ec62291f67992ecdd444f309eb5881929f28301a416",
  "@type": "Page",
  "vc:slug": "network-hash-rate",
  "title": "Network Hash Rate",
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
      "@id": "urn:visionflow:owl:class:consensus-domain",
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
      "vc:value": "BC-0063"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Network Hash Rate"
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
  "@id": "urn:ngm:class:network-hash-rate",
  "@type": "Class",
  "label": "Network Hash Rate",
  "definition": "The aggregate computational power (measured in hashes per second) expended by all miners participating in a proof-of-work blockchain at a given time. A higher network hash rate increases attack cost for a 51% attack and triggers upward difficulty adjustments to maintain target block times; conversely, drops in hash rate trigger downward adjustments.",
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
      "label": "ConsensusProtocol"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:difficulty-adjustment", "label": "Difficulty Adjustment"},
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:mining", "label": "Mining"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:network-hash-rate:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c4fe42b641ea208515e24ec62291f67992ecdd444f309eb5881929f28301a416"
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
      "resolved": "urn:visionflow:owl:class:consensus-domain",
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
  - Total computational power within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:NetworkHashRate
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

- ### Content

  ## Class Declaration
  Declaration(Class(:NetworkHashRate))

  ## Subclass Relationships
  SubClassOf(:NetworkHashRate :ConsensusProtocol)
  SubClassOf(:NetworkHashRate :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:NetworkHashRate
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:NetworkHashRate
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :NetworkHashRate "BC-0063"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :NetworkHashRate "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :NetworkHashRate "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :NetworkHashRate :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :NetworkHashRate :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :NetworkHashRate "Network Hash Rate"@en)
  AnnotationAssertion(rdfs:comment :NetworkHashRate
    "Total computational power"@en)
  AnnotationAssertion(dct:description :NetworkHashRate
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :NetworkHashRate "BC-0063")
  AnnotationAssertion(:priority :NetworkHashRate "1"^^xsd:integer)
  AnnotationAssertion(:category :NetworkHashRate "consensus-fundamentals"@en)
  )
      ```

  - ## About Network Hash Rate

  - Total computational power within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
