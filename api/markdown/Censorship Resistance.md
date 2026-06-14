public:: true
alias:: CensorshipResistance, censorship-resistance

# Censorship Resistance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:23138027e01576de4bfcae78d029fa62c43a9405217b96e1be4cd9b359781942",
  "@type": "Page",
  "vc:slug": "censorship-resistance",
  "title": "Censorship Resistance",
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
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
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
      "vc:value": "BC-0086"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Censorship Resistance"
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
  "@id": "urn:ngm:class:censorship-resistance",
  "@type": "Class",
  "label": "Censorship Resistance",
  "definition": "Property of blockchain networks guaranteeing that any valid transaction submitted by any participant will eventually be included in the canonical chain, preventing miners, validators, or any coordinated group from systematically excluding transactions. Achieved through decentralised consensus, permissionless participation, and economic incentive alignment.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:permissionless-participation", "label": "Permissionless Participation"},
      {"@id": "urn:ngm:class:decentralisation", "label": "Decentralisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"},
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"},
      {"@id": "urn:ngm:class:trustless-transaction", "label": "Trustless Transaction"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:economic-incentive-design", "label": "Economic Incentive Design"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:permissioned-blockchain", "label": "Permissioned Blockchain"},
      {"@id": "urn:ngm:class:transaction-filtering", "label": "Transaction Filtering"},
      {"@id": "urn:ngm:class:ofac-compliance", "label": "OFAC Compliance"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:fork-choice-rule", "label": "Fork Choice Rule"},
      {"@id": "urn:ngm:class:mempool-propagation", "label": "Mempool Propagation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:peer-discovery", "label": "Peer Discovery"},
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:miner-extractable-value", "label": "Miner Extractable Value"},
      {"@id": "urn:ngm:class:51-percent-attack", "label": "51% Attack"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:freedom-of-speech", "label": "Freedom of Speech"},
      {"@id": "urn:ngm:class:information-security", "label": "Information Security"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:transaction-censorship-resistance", "label": "Transaction Censorship Resistance"},
    {"@id": "urn:ngm:class:inclusion-liveness", "label": "Inclusion Liveness"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:censorship-resistance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:23138027e01576de4bfcae78d029fa62c43a9405217b96e1be4cd9b359781942"
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
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
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
  - Transaction inclusion guarantee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:CensorshipResistance
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

  ## Class Declaration
  Declaration(Class(:CensorshipResistance))

  ## Subclass Relationships
  SubClassOf(:CensorshipResistance :NetworkComponent)
  SubClassOf(:CensorshipResistance :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:CensorshipResistance
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:CensorshipResistance
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :CensorshipResistance "BC-0086"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :CensorshipResistance "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :CensorshipResistance "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :CensorshipResistance :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :CensorshipResistance :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :CensorshipResistance "Censorship Resistance"@en)
  AnnotationAssertion(rdfs:comment :CensorshipResistance
    "Transaction inclusion guarantee"@en)
  AnnotationAssertion(dct:description :CensorshipResistance
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :CensorshipResistance "BC-0086")
  AnnotationAssertion(:priority :CensorshipResistance "1"^^xsd:integer)
  AnnotationAssertion(:category :CensorshipResistance "network-security"@en)
  )
      ```

  - ## About Censorship Resistance

  - Transaction inclusion guarantee within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
