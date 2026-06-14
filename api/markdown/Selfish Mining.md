public:: true

# Selfish Mining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5ef0f7b55ed5430b01d7a3abc6324459a5c3325953ae618db81633cfca35ccb6",
  "@type": "Page",
  "vc:slug": "selfish-mining",
  "title": "Selfish Mining",
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
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
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
      "vc:value": "BC-0085"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Selfish Mining"
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
  "@id": "urn:ngm:class:selfish-mining",
  "@type": "Class",
  "label": "Selfish Mining",
  "definition": "A strategic block-withholding attack in proof-of-work blockchains where a mining pool privately mines a secret chain and selectively publishes blocks to waste the computational work of honest miners, thereby earning a disproportionate share of block rewards relative to its hash-rate contribution. Selfish mining is profitable when the attacker controls more than ~33% of network hash-rate.",
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
      "@id": "urn:ngm:class:network-component",
      "label": "NetworkComponent"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"},
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:double-spending", "label": "Double Spending"},
      {"@id": "urn:ngm:class:longest-chain-rule", "label": "Longest Chain Rule"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:decentralization", "label": "Decentralization"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:selfish-mining:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5ef0f7b55ed5430b01d7a3abc6324459a5c3325953ae618db81633cfca35ccb6"
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
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
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
  - Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:SelfishMining
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]
  - bridges-to:: [[AI Agent System]]

- ### Content

  ## Class Declaration
  Declaration(Class(:SelfishMining))

  ## Subclass Relationships
  SubClassOf(:SelfishMining :NetworkComponent)
  SubClassOf(:SelfishMining :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SelfishMining
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SelfishMining
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SelfishMining "BC-0085"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SelfishMining "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SelfishMining "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SelfishMining :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SelfishMining :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SelfishMining "Selfish Mining"@en)
  AnnotationAssertion(rdfs:comment :SelfishMining
    "Strategic block withholding"@en)
  AnnotationAssertion(dct:description :SelfishMining
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SelfishMining "BC-0085")
  AnnotationAssertion(:priority :SelfishMining "1"^^xsd:integer)
  AnnotationAssertion(:category :SelfishMining "network-security"@en)
  )
      ```

  - ## About Selfish Mining

  - Strategic block withholding within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
