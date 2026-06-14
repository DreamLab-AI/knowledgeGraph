public:: true

# Fork Choice Rule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d86b14bfa6300d64a5fccae8e3f5414cadcb9b581dfed801c04bf1e2141221bc",
  "@type": "Page",
  "vc:slug": "fork-choice-rule",
  "title": "Fork Choice Rule",
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
      "vc:value": "BC-0060"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fork Choice Rule"
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
  "@id": "urn:ngm:class:fork-choice-rule",
  "@type": "Class",
  "label": "Fork Choice Rule",
  "definition": "Algorithm by which blockchain nodes select the canonical chain head when multiple competing branches exist, resolving temporary forks deterministically. Bitcoin uses longest-chain (most cumulative proof-of-work) while Ethereum post-Merge uses the LMD-GHOST fork-choice weighted by validator attestation stake, determining network-wide finality.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof Of Stake"},
      {"@id": "urn:ngm:class:validator-attestation", "label": "Validator Attestation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer To Peer Network"},
      {"@id": "urn:ngm:class:block-propagation", "label": "Block Propagation"},
      {"@id": "urn:ngm:class:peer-discovery", "label": "Peer Discovery"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"},
      {"@id": "urn:ngm:class:blockchain-finality", "label": "Blockchain Finality"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:double-spend-prevention", "label": "Double Spend Prevention"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:chain-weight", "label": "Chain Weight"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:longest-chain-rule", "label": "Longest Chain Rule"},
      {"@id": "urn:ngm:class:lmd-ghost", "label": "LMD-GHOST"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"},
      {"@id": "urn:ngm:class:consensus-rule", "label": "Consensus Rule"},
      {"@id": "urn:ngm:class:network-partition-tolerance", "label": "Network Partition Tolerance"},
      {"@id": "urn:ngm:class:selfish-mining", "label": "Selfish Mining"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems-consensus", "label": "Distributed Systems Consensus"},
      {"@id": "urn:ngm:class:fault-tolerant-protocol", "label": "Fault Tolerant Protocol"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:chain-selection-rule", "label": "Chain Selection Rule"},
    {"@id": "urn:ngm:class:canonical-chain-algorithm", "label": "Canonical Chain Algorithm"}
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:fork-choice-rule:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d86b14bfa6300d64a5fccae8e3f5414cadcb9b581dfed801c04bf1e2141221bc"
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
  - Canonical chain selection within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:ForkChoiceRule
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

- ### Content

  ## Class Declaration
  Declaration(Class(:ForkChoiceRule))

  ## Subclass Relationships
  SubClassOf(:ForkChoiceRule :ConsensusProtocol)
  SubClassOf(:ForkChoiceRule :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:ForkChoiceRule
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:ForkChoiceRule
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :ForkChoiceRule "BC-0060"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :ForkChoiceRule "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :ForkChoiceRule "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :ForkChoiceRule :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :ForkChoiceRule :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :ForkChoiceRule "Fork Choice Rule"@en)
  AnnotationAssertion(rdfs:comment :ForkChoiceRule
    "Canonical chain selection"@en)
  AnnotationAssertion(dct:description :ForkChoiceRule
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :ForkChoiceRule "BC-0060")
  AnnotationAssertion(:priority :ForkChoiceRule "1"^^xsd:integer)
  AnnotationAssertion(:category :ForkChoiceRule "consensus-fundamentals"@en)
  )
      ```

  - ## About Fork Choice Rule

  - Canonical chain selection within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
