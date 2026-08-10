public:: true

# Block Time
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a24522d509d8340535d2b5bc09c22c8d2d2a03fc99f7b7c54ef54e344aeab1b1",
  "@type": "Page",
  "vc:slug": "block-time",
  "title": "Block Time",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-energy-optimisation",
      "vc:label": "AI Energy Optimisation"
    },
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
      "vc:value": "BC-0014"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Block Time"
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
  "@id": "urn:ngm:class:block-time",
  "@type": "Class",
  "label": "Block Time",
  "definition": "Block Time is the average elapsed time between the creation of consecutive blocks on a blockchain, governed by the network's consensus mechanism and difficulty adjustment algorithm. Shorter block times increase transaction throughput and reduce confirmation latency but raise the risk of forks due to block propagation delays, creating a fundamental tradeoff between speed and chain security.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.8,
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
      "@id": "urn:ngm:class:distributed-data-structure",
      "label": "Distributed Data Structure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:difficulty-adjustment",
        "label": "Difficulty Adjustment Algorithm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-protocol",
        "label": "Blockchain Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:block-propagation",
        "label": "Block Propagation"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:hash-rate",
        "label": "Hash Rate"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-confirmation",
        "label": "Transaction Confirmation"
      },
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:uncle-block",
        "label": "Uncle Block"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:mining-pool",
        "label": "Mining Pool"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Chain Security"
      },
      {
        "@id": "urn:ngm:class:double-spend-prevention",
        "label": "Double Spend Prevention"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-iec-23257-2021",
        "label": "ISO/IEC 23257"
      },
      {
        "@id": "urn:ngm:class:ieee-2418-1",
        "label": "IEEE 2418.1"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      },
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:block-size",
        "label": "Block Size"
      },
      {
        "@id": "urn:ngm:class:block-height",
        "label": "Block Height"
      },
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      },
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:orphan-block",
        "label": "Orphan Block"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-energy-optimisation",
        "label": "AI Energy Optimisation"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:interblock-time",
      "label": "Interblock Time"
    },
    {
      "@id": "urn:ngm:class:block-interval",
      "label": "Block Interval"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:block-time:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a24522d509d8340535d2b5bc09c22c8d2d2a03fc99f7b7c54ef54e344aeab1b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Energy Optimisation]]",
      "resolved": "urn:visionflow:linked:ai-energy-optimisation",
      "kind": "StubLink"
    },
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
  - Average time between blocks within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:BlockTime
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]
  - bridges-to:: [[AI Energy Optimisation]]

- ### Content

  ## Class Declaration
  Declaration(Class(:BlockTime))

  ## Subclass Relationships
  SubClassOf(:BlockTime :DistributedDataStructure)
  SubClassOf(:BlockTime :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockTime
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockTime
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockTime "BC-0014"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockTime "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockTime "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockTime :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockTime :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockTime "Block Time"@en)
  AnnotationAssertion(rdfs:comment :BlockTime
    "Average time between blocks"@en)
  AnnotationAssertion(dct:description :BlockTime
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockTime "BC-0014")
  AnnotationAssertion(:priority :BlockTime "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockTime "blockchain-fundamentals"@en)
  )
      ```

  - ## About Block Time

  - Average time between blocks within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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
  - Reducing block/slot time became a headline scaling lever across major L1s in 2024–2026, shifting the metric from a fixed property to an actively tuned governance parameter rather than a static design choice.
  - Ethereum's EIP-7782 ("Reduce Block Latency", created October 2024 by Ben Adams and Dankrad Feist, championed by Barnabé Monnot in June 2025) proposed halving the beacon slot from 12s to 6s, restructuring subslots to 3s proposal / 1.5s attestation / 1.5s aggregation; core developers shelved it from the Glamsterdam scope in 2026, citing immaturity, real-time ZK-proving timing risks and the need for later recalibration.
  - Ethereum's Glamsterdam fork (targeting Q4 2026) instead headlines EIP-7732 (enshrined Proposer-Builder Separation) and EIP-7928 (Block-Level Access Lists), widening the data-propagation window from ~2s to ~9s to enable parallel execution rather than cutting slot time directly.
  - Solana approved SIMD-0525 to cut slot time from 400ms to 200ms in four 50ms decrements; the first step (400ms to 350ms) activated on testnet on 5 August 2026, with the Agave v4.2 mainnet client expected around 17 August 2026 and each further reduction gated on a validator supermajority opt-in and low skip rates.
  - Solana's Alpenglow consensus overhaul (Votor/Rotor), approved by validators in September 2025 at 98.27%, targets finality of roughly 150ms (down from ~12s) with mainnet rollout expected during 2026, decoupling economic finality from block cadence.
  - Solana's realised block time reached its 400.1ms target in H1 2025 with average daily skip rates falling to ~0.3% (from ~15% in 2021), largely on the back of the Agave 2.0 client (November 2024) and Turbine/Replay improvements.
  - Open frontier as of 2026: shorter slots strain bandwidth and low-spec validators, tighten MEV and arbitrage windows, and collide with real-time ZK proving budgets — pushing teams toward propagation-window and consensus redesigns (ePBS, Alpenglow) rather than naive slot shortening.

- ### References
  - 1. Ethereum Improvement Proposals (2024). EIP-7782: Reduce Block Latency. https://eips.ethereum.org/EIPS/eip-7782
  - 2. Everstake (2026). Ethereum Glamsterdam: Upgrade Overview and EIPs Explained. https://everstake.one/resources/blog/ethereum-glamsterdam-upgrade-explained
  - 3. Solana Foundation (2026). Reduced Slot Times (SIMD-0525). https://solana.com/upgrades/reduced-slot-times
  - 4. Crypto Briefing (2026). Solana activates first slot time reduction to 350ms on testnet. https://cryptobriefing.com/solana-slot-time-reduction-350ms-testnet/
  - 5. CoinDesk (2025). Ethereum Developer Proposes 6-Second Block Times to Boost Speed, Slash Fees. https://www.coindesk.com/tech/2025/06/24/ethereum-developer-proposes-6-second-block-times-to-boost-speed-slash-fees
  - 6. Syndica (2025). Deep Dive: Solana Onchain Activity — June 2025. https://blog.syndica.io/deep-dive-solana-onchain-activity-june-2025/

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
