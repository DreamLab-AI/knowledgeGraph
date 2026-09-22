public:: true

# Finality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1ee940008dc406e604d59fe7ec33b3ed03e886f7817805f8c0fb26d3a426fee6",
  "@type": "Page",
  "vc:slug": "finality",
  "title": "Finality",
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
      "vc:value": "BC-0080"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Finality"
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
  "@id": "urn:ngm:class:finality",
  "@type": "Class",
  "label": "Finality",
  "definition": "The property of a blockchain transaction or block whereby it becomes irreversible and cannot be reverted by any future state of the network. Probabilistic finality—as in proof-of-work chains—increases with confirmation depth, while deterministic finality—as in BFT-based protocols—is achieved at the point of commitment, with strong consequences for payment settlement, cross-chain interoperability, and user trust.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-protocol-and-consensus",
    "label": "Protocol and Consensus"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:probabilistic-finality",
        "label": "Probabilistic Finality"
      },
      {
        "@id": "urn:ngm:class:deterministic-finality",
        "label": "Deterministic Finality"
      },
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:economic-finality",
        "label": "Economic Finality"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:transaction-confirmation",
        "label": "Transaction Confirmation"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
      },
      {
        "@id": "urn:ngm:class:cross-chain-interoperability",
        "label": "Cross-Chain Interoperability"
      },
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:network-synchrony",
        "label": "Network Synchrony"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:chain-reorganization",
        "label": "Chain Reorganization"
      },
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double-Spend Attack"
      },
      {
        "@id": "urn:ngm:class:fork",
        "label": "Fork"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:settlement-finality",
        "label": "Settlement Finality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:byzantine-agreement",
        "label": "Byzantine Agreement"
      },
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transaction-irreversibility",
      "label": "Transaction Irreversibility"
    },
    {
      "@id": "urn:ngm:class:ledger-finality",
      "label": "Ledger Finality"
    }
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
  "@id": "urn:visionflow:annotation:link-resolutions:finality:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1ee940008dc406e604d59fe7ec33b3ed03e886f7817805f8c0fb26d3a426fee6"
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
  - Transaction irreversibility within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Finality
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Finality))

  ## Subclass Relationships
  SubClassOf(:Finality :NetworkComponent)
  SubClassOf(:Finality :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Finality
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Finality
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Finality "BC-0080"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Finality "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Finality "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Finality :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Finality :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Finality "Finality"@en)
  AnnotationAssertion(rdfs:comment :Finality
    "Transaction irreversibility"@en)
  AnnotationAssertion(dct:description :Finality
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Finality "BC-0080")
  AnnotationAssertion(:priority :Finality "1"^^xsd:integer)
  AnnotationAssertion(:category :Finality "network-security"@en)
  )
      ```

  - ## About Finality

  - Transaction irreversibility within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
