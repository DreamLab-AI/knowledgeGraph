public:: true

# Script
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2e75cb93b830996823fb5187223191f1908c28ea9d01250ae4c9bc7eaa333f6c",
  "@type": "Page",
  "vc:slug": "script",
  "title": "Script",
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
      "vc:value": "BC-0023"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Script"
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
  "@id": "urn:ngm:class:script",
  "@type": "Class",
  "label": "Script",
  "definition": "Bitcoin's stack-based, non-Turing-complete scripting language used to encode spending conditions on transaction outputs and to provide the corresponding unlocking data in transaction inputs. Script programs define locking and unlocking conditions—such as pay-to-public-key-hash—that a validator executes to authorise fund transfer, making transaction validation a programmable process without full smart-contract complexity.",
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
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:opcodes",
        "label": "Opcodes"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      },
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:stack-machine",
        "label": "Stack Machine"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
      },
      {
        "@id": "urn:ngm:class:time-locked-transaction",
        "label": "Time-Locked Transaction"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin-protocol",
        "label": "Bitcoin Protocol"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:locking-script",
        "label": "Locking Script"
      },
      {
        "@id": "urn:ngm:class:unlocking-script",
        "label": "Unlocking Script"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:pay-to-public-key-hash",
        "label": "Pay-To-Public-Key-Hash"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:turing-complete-language",
        "label": "Turing-Complete Language"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      },
      {
        "@id": "urn:ngm:class:transaction-pool",
        "label": "Transaction Pool"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-script",
      "label": "Bitcoin Script"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:script:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2e75cb93b830996823fb5187223191f1908c28ea9d01250ae4c9bc7eaa333f6c"
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
  - Transaction validation programming within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Script
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Script))

  ## Subclass Relationships
  SubClassOf(:Script :DistributedDataStructure)
  SubClassOf(:Script :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Script
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Script
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Script "BC-0023"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Script "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Script "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Script :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Script :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Script "Script"@en)
  AnnotationAssertion(rdfs:comment :Script
    "Transaction validation programming"@en)
  AnnotationAssertion(dct:description :Script
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Script "BC-0023")
  AnnotationAssertion(:priority :Script "1"^^xsd:integer)
  AnnotationAssertion(:category :Script "blockchain-fundamentals"@en)
  )
      ```

  - ## About Script

  - Transaction validation programming within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Script.md: Patreon -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
