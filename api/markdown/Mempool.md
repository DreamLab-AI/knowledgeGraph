public:: true

# Mempool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:01e914d5552fea5fbc007b85bfbfb9088419a8f50f415b3a955b82e09ced6ffd",
  "@type": "Page",
  "vc:slug": "mempool",
  "title": "Mempool",
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
      "vc:value": "BC-0019"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mempool"
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
  "@id": "urn:ngm:class:mempool",
  "@type": "Class",
  "label": "Mempool",
  "definition": "The memory pool maintained by each blockchain node holding broadcast but as-yet unconfirmed transactions awaiting inclusion in a block. Miners select transactions from the mempool, typically prioritising by fee rate, while node operators use mempool policies to manage capacity and mitigate spam.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-data-structure",
    "label": "Distributed Data Structure"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-pool",
        "label": "Transaction Pool"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-node",
        "label": "Blockchain Node"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction-propagation",
        "label": "Transaction Propagation"
      },
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-confirmation",
        "label": "Transaction Confirmation"
      },
      {
        "@id": "urn:ngm:class:transaction-processing",
        "label": "Transaction Processing"
      },
      {
        "@id": "urn:ngm:class:block-production",
        "label": "Block Production"
      },
      {
        "@id": "urn:ngm:class:fee-market",
        "label": "Fee Estimation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:replace-by-fee",
        "label": "Replace-by-Fee"
      },
      {
        "@id": "urn:ngm:class:child-pays-for-parent",
        "label": "Child-Pays-for-Parent"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO Set"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:block",
        "label": "Block"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Confirmed Transaction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:layer-2-protocol",
        "label": "Layer-2 Protocol"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:fee-market",
        "label": "Fee Market"
      },
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool"
      },
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double Spend"
      },
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction Malleability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transaction-pool",
      "label": "Transaction Pool"
    },
    {
      "@id": "urn:ngm:class:pending-transaction-queue",
      "label": "Pending Transaction Queue"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:mempool:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:01e914d5552fea5fbc007b85bfbfb9088419a8f50f415b3a955b82e09ced6ffd"
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
  - Memory pool of pending transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Mempool
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Mempool))

  ## Subclass Relationships
  SubClassOf(:Mempool :DistributedDataStructure)
  SubClassOf(:Mempool :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Mempool
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Mempool
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Mempool "BC-0019"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Mempool "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Mempool "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Mempool :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Mempool :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Mempool "Mempool"@en)
  AnnotationAssertion(rdfs:comment :Mempool
    "Memory pool of pending transactions"@en)
  AnnotationAssertion(dct:description :Mempool
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Mempool "BC-0019")
  AnnotationAssertion(:priority :Mempool "1"^^xsd:integer)
  AnnotationAssertion(:category :Mempool "blockchain-fundamentals"@en)
  )
      ```

  - ## About Mempool

  - Memory pool of pending transactions within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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

- ### Current Landscape (2026)
  - The public mempool has been largely hollowed out as a transaction pathway: by 2026 roughly 80% of Ethereum DeFi order flow bypasses it entirely, routing through private RPCs (MEV-Blocker, Flashbots Protect, Merkle, Blink and Polygon's Private Mempool) and order-flow auctions rather than being broadcast to all nodes.
  - Encrypted mempools have moved from research to concrete standardisation: EIP-8105 "Universal Enshrined Encrypted Mempool" (Shutter's Jannik Luhn, published 17 December 2025) proposes a scheme-agnostic native encrypted transaction type (0x05 encrypted, 0x06 decrypted under EIP-2718) that hides payloads until block ordering is fixed, supporting threshold encryption, MPC, TEEs, delay encryption or FHE.
  - A competing design, EIP-8184 "LUCID" (created 4 March 2026), offers a public encrypted mempool built on commit-before-reveal with delayed decryption, keeping MEV-sensitive flow on a permissionless inclusion path rather than in trusted private channels; both are being weighed for Ethereum's next upgrade cycle (Glamsterdam/Hegotá).
  - Proposer-builder separation is being enshrined in-protocol: EIP-7732 (ePBS) is the headline feature of the Glamsterdam upgrade targeted for the back half of 2026, replacing off-chain MEV-Boost relays (currently carrying 80-90% of blocks) with an in-protocol commit-reveal handoff and a Payload Timeliness Committee.
  - Decentralised, TEE-based block building consolidated around BuilderNet (launched November 2024, jointly run by Flashbots, Beaverbuild and Nethermind); by 5 December 2024 Flashbots had migrated all order flow to it and shut down its centralised builders, reaching BuilderNet v1.2 with reproducible Intel TDX images in February 2025.
  - Builder centralisation remains the core open challenge: with PBS adoption near-universal (~93% of blocks), the top three builders produce 80-95% of PBS blocks, and the 4 December 2025 Prysm circuit-breaker incident collapsed PBS block share from ~90% to near-zero, exposing supply-chain fragility.
  - Private routing is proving to be no guaranteed shield: a December 2025 arXiv study documented 2,932 sandwich attacks on 3,126 private transactions (Nov-Dec 2024, ~$409k user losses), and MEV bots still extracted around $24 million in a single 30-day window over December 2025-January 2026.

- ### References
  - 1. Shutter Network (2025). Introducing EIP-8105 Universal Enshrined Encrypted Mempool. https://blog.shutter.network/introducing-the-universal-enshrined-encrypted-mempool-eip/
  - 2. Ethereum (Luhn, J.) (2025). EIP-8105: Universal Enshrined Encrypted Mempool. https://eips.ethereum.org/EIPS/eip-8105
  - 3. Ethereum (2026). EIP-8184: LUCID encrypted mempool. https://eips.ethereum.org/EIPS/eip-8184
  - 4. BlockEden.xyz (2026). Fighting MEV in 2026: How MEV-Blocker, BuilderNet, and CoW Swap Protect DeFi. https://blockeden.xyz/blog/2026/05/02/mempool-privacy-mev-blocker-flashbots-suave-cowswap-defi-protection/
  - 5. The Off-Chain Thoughts (2026). MEV, Encrypted Mempools, and the Execution Layer. https://theoffchainthoughts.substack.com/p/the-cartel-we-renamed-mev-encrypted
  - 6. Sandwiched and Silent: Behavioral Adaptation and Private Channel Exploitation (2025). arXiv. https://arxiv.org/html/2512.17602v1

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
