public:: true

# Nakamoto Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:919edc566d34743f5b6740625f3eee428d838e8480f6aaa3d64db64394ef5302",
  "@type": "Page",
  "vc:slug": "nakamoto-consensus",
  "title": "Nakamoto Consensus",
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
      "vc:value": "BC-0061"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Nakamoto Consensus"
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
  "@id": "urn:ngm:class:nakamoto-consensus",
  "@type": "Class",
  "label": "Nakamoto Consensus",
  "definition": "The proof-of-work based consensus mechanism introduced in the Bitcoin whitepaper, where nodes expend computational effort to extend the longest valid chain. It achieves probabilistic Byzantine fault tolerance in open, permissionless networks through the longest-chain rule and difficulty-adjusted mining, enabling trustless agreement without a central coordinator.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:consensus-protocol",
    "label": "Consensus Protocol"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:longest-chain-rule", "label": "Longest Chain Rule"},
      {"@id": "urn:ngm:class:difficulty-adjustment", "label": "Difficulty Adjustment"},
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:bitcoin-protocol", "label": "Bitcoin Protocol"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mining", "label": "Mining"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:decentralized-ledger", "label": "Decentralized Ledger"},
      {"@id": "urn:ngm:class:permissionless-participation", "label": "Permissionless Participation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:practical-byzantine-fault-tolerance", "label": "Practical Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:51-percent-attack", "label": "51 Percent Attack"},
      {"@id": "urn:ngm:class:fork-resolution", "label": "Fork Resolution"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:game-theory", "label": "Game Theory"},
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:bitcoin-consensus", "label": "Bitcoin Consensus"},
    {"@id": "urn:ngm:class:proof-of-work-consensus", "label": "Proof Of Work Consensus"}
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:nakamoto-consensus:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:919edc566d34743f5b6740625f3eee428d838e8480f6aaa3d64db64394ef5302"
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
  - Bitcoin-style consensus within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:NakamotoConsensus
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

- ### Content

  ## Class Declaration
  Declaration(Class(:NakamotoConsensus))

  ## Subclass Relationships
  SubClassOf(:NakamotoConsensus :ConsensusProtocol)
  SubClassOf(:NakamotoConsensus :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:NakamotoConsensus
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:NakamotoConsensus
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :NakamotoConsensus "BC-0061"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :NakamotoConsensus "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :NakamotoConsensus "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :NakamotoConsensus :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :NakamotoConsensus :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :NakamotoConsensus "Nakamoto Consensus"@en)
  AnnotationAssertion(rdfs:comment :NakamotoConsensus
    "Bitcoin-style consensus"@en)
  AnnotationAssertion(dct:description :NakamotoConsensus
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :NakamotoConsensus "BC-0061")
  AnnotationAssertion(:priority :NakamotoConsensus "1"^^xsd:integer)
  AnnotationAssertion(:category :NakamotoConsensus "consensus-fundamentals"@en)
  )
      ```

  - ## About Nakamoto Consensus

  - Bitcoin-style consensus within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Nakamoto Consensus.md: warren2023bitcoin -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
