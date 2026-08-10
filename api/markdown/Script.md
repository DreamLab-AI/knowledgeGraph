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

- ### Current Landscape (2026)
  - Bitcoin Script's frontier in 2024-2026 is the covenant debate: extending scripts from "who may spend" to constraining "where funds may go" via proposed opcodes, yet as of mid-2026 no covenant proposal has been merged into Bitcoin Core or activated on mainnet.
  - OP_CTV (BIP-119, Jeremy Rubin) is closest to activation: a February 2026 activation client set Speedy Trial / BIP-9 parameters (90% miner threshold of 1,815 of 2,016 blocks, signalling from 30 March 2026 to 30 March 2027, minimum activation height around May 2027), but miner signalling stood at 0% as of late May 2026.
  - OP_CAT (BIP-347, Ethan Heilman and Armin Sabouri) takes the opposite, general-primitive approach by reintroducing tapscript stack concatenation (repurposing OP_SUCCESS126 under BIP-342's 520-byte cap); its specification reached "Complete" status on 1 March 2026, it has run on Bitcoin Inquisition signet since April 2024 with roughly 74,000 test transactions, but it has no mainnet activation client.
  - A phased consensus is forming around CTV plus CSFS (OP_CHECKSIGFROMSTACK, BIP-348, merged Nov 2024) as the likely first covenant soft fork, promoted by the September 2025 "CTV + CSFS letter" and the LNHANCE bundle aimed at Lightning (LN-Symmetry, PTLCs, vaults).
  - Competing and reshaped proposals proliferated: OP_VAULT (BIP-345) was formally withdrawn in May 2025 and superseded by Salvatore Ingala's OP_CHECKCONTRACTVERIFY (BIP-443); BIP-446 (OP_TEMPLATEHASH, by Greg Sanders, Antoine Poinsot and Steven Roose) entered Draft in March 2026 as a Taproot-native drop-in replacement for CTV.
  - Soft-fork-free alternatives gained ground: BitVM2 requires no consensus change and is already live, powering Citrea's mainnet bridge launched January 2026, and StarkWare demonstrated a STARK proof verified on signet via an OP_CAT covenant (12 July 2024).
  - The central open challenge as of 2026 is activation governance and social consensus, not cryptographic design: recursive-covenant concerns (fungibility, MEV), disagreement over whether Speedy Trial is appropriate absent overwhelming consensus, and a growing institutional camp arguing Bitcoin's consensus rules should be treated as effectively immutable.

- ### References
  - 1. Spark (2026). Bitcoin Covenant Activation: Navigating the Path Forward After Years of Debate. https://www.spark.money/research/bitcoin-covenant-activation-path-forward
  - 2. Spark (2026). Bitcoin Covenant Proposals Compared: CTV, APO, OP_CAT. https://www.spark.money/tools/bitcoin-covenant-proposals-compared
  - 3. BlockEden (2026). How OP_CTV, LNHANCE, OP_CAT, and BitVM2 Could Reshape Bitcoin. https://blockeden.xyz/blog/2026/04/21/bitcoin-covenant-renaissance-op-ctv-lnhance-cat-bitvm2/
  - 4. Spark (2026). OP_CAT and the Great Covenant Debate: Bitcoin's Most Divisive Opcode. https://www.spark.money/research/bitcoin-op-cat-covenant-debate
  - 5. Cointelegraph Research (2026). Bitcoin Covenants Part 2: OP_CHECKTEMPLATEVERIFY. https://cointelegraph.com/research/bitcoin-covenants-part-2-op-checktemplateverify

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
