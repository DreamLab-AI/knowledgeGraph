public:: true

# Full Node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:589ef8ad6e323df3cd7f5609f03dec6e066f090d238bc42d7617e8024130d2ff",
  "@type": "Page",
  "vc:slug": "full-node",
  "title": "Full Node",
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
      "vc:value": "BC-0073"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Full Node"
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
  "@id": "urn:ngm:class:full-node",
  "@type": "Class",
  "label": "Full Node",
  "definition": "A blockchain node that independently downloads, validates, and stores the complete transaction history of the chain from the genesis block, enforcing all consensus rules without trusting external parties. Full nodes are the gold standard for trustless participation and are the backbone of decentralisation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:blockchain-entity",
    "label": "Blockchain Entity"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:node", "label": "Node"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:transaction-validation-engine", "label": "Transaction Validation Engine"},
      {"@id": "urn:ngm:class:blockchain-ledger", "label": "Blockchain Ledger"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:cryptographic-verification", "label": "Cryptographic Verification"},
      {"@id": "urn:ngm:class:trustless-participation", "label": "Trustless Participation"},
      {"@id": "urn:ngm:class:independent-verification", "label": "Independent Verification"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:genesis-block", "label": "Genesis Block"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:consensus-rule", "label": "Consensus Rule"},
      {"@id": "urn:ngm:class:bitcoin-protocol", "label": "Bitcoin Protocol"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralization", "label": "Decentralization"},
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:light-client", "label": "Light Client"},
      {"@id": "urn:ngm:class:simplified-payment-verification", "label": "Simplified Payment Verification"},
      {"@id": "urn:ngm:class:mining-node", "label": "Mining Node"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:archival-node", "label": "Archival Node"},
      {"@id": "urn:ngm:class:blockchain-infrastructure", "label": "Blockchain Infrastructure"},
      {"@id": "urn:ngm:class:network-synchronisation", "label": "Network Synchronisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:validating-node", "label": "Validating Node"},
    {"@id": "urn:ngm:class:archiving-full-node", "label": "Archiving Full Node"}
  ],
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:full-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:589ef8ad6e323df3cd7f5609f03dec6e066f090d238bc42d7617e8024130d2ff"
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
  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:FullNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

  ## Class Declaration
  Declaration(Class(:FullNode))

  ## Subclass Relationships
  SubClassOf(:FullNode :NetworkComponent)
  SubClassOf(:FullNode :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:FullNode
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :FullNode "BC-0073"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :FullNode "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :FullNode "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :FullNode :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :FullNode :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :FullNode "Full Node"@en)
  AnnotationAssertion(rdfs:comment :FullNode
    "Complete blockchain copy maintainer"@en)
  AnnotationAssertion(dct:description :FullNode
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :FullNode "BC-0073")
  AnnotationAssertion(:priority :FullNode "1"^^xsd:integer)
  AnnotationAssertion(:category :FullNode "network-security"@en)
  )
      ```

  - ## About Full Node

  - Complete blockchain copy maintainer within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
