public:: true

# Mining
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3af7ec2f4c7c0a976dca3b79b2b934431fb0d06113cde8e85ffbc2f5af7f3293",
  "@type": "Page",
  "vc:slug": "mining",
  "title": "Mining",
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
      "vc:value": "BC-0053"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mining"
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
  "@id": "urn:ngm:class:mining",
  "@type": "Class",
  "label": "Mining",
  "definition": "Mining is the proof-of-work block-creation process in which participating nodes compete to solve a cryptographic hash puzzle, with the winner appending the next block to the chain and receiving a block reward. Mining provides Sybil resistance, ensures probabilistic finality, and anchors chain security to real-world energy expenditure.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:consensus-protocol",
    "label": "Consensus Protocol"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"},
      {"@id": "urn:ngm:class:mining-reward", "label": "Mining Reward"},
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:block-reward", "label": "Block Reward"},
      {"@id": "urn:ngm:class:network-hash-rate", "label": "Network Hash Rate"},
      {"@id": "urn:ngm:class:mining-difficulty", "label": "Mining Difficulty"},
      {"@id": "urn:ngm:class:coinbase-transaction", "label": "Coinbase Transaction"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:sha-256", "label": "SHA-256"},
      {"@id": "urn:ngm:class:application-specific-integrated-circuit", "label": "Application Specific Integrated Circuit"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:blockchain-energy-consumption", "label": "Blockchain Energy Consumption"},
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:double-spend-prevention", "label": "Double-Spend Prevention"},
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:probabilistic-finality", "label": "Probabilistic Finality"},
      {"@id": "urn:ngm:class:transaction-fee", "label": "Transaction Fee"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:proof-of-authority", "label": "Proof of Authority"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:renewable-energy", "label": "Renewable Energy"},
      {"@id": "urn:ngm:class:carbon-footprint", "label": "Carbon Footprint"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:proof-of-work-mining", "label": "Proof Of Work Mining"},
    {"@id": "urn:ngm:class:bitcoin-mining", "label": "Bitcoin Mining"},
    {"@id": "urn:ngm:class:cryptocurrency-mining", "label": "Cryptocurrency Mining"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:mining:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3af7ec2f4c7c0a976dca3b79b2b934431fb0d06113cde8e85ffbc2f5af7f3293"
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
  - Proof-of-work block creation within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Mining
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[ConsensusProtocol]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Mining))

  ## Subclass Relationships
  SubClassOf(:Mining :ConsensusProtocol)
  SubClassOf(:Mining :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Mining
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Mining
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Mining "BC-0053"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Mining "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Mining "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Mining :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Mining :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Mining "Mining"@en)
  AnnotationAssertion(rdfs:comment :Mining
    "Proof-of-work block creation"@en)
  AnnotationAssertion(dct:description :Mining
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Mining "BC-0053")
  AnnotationAssertion(:priority :Mining "1"^^xsd:integer)
  AnnotationAssertion(:category :Mining "consensus-fundamentals"@en)
  )
      ```

  - ## About Mining

  - Proof-of-work block creation within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Mining.md: Bitcoin, Energy, Hash Rate, Lowery2023, Proof of Work -->

- ### Current Landscape (2026)
  - Following the April 2024 halving that cut the block subsidy to 3.125 BTC, mining economics deteriorated sharply through 2025-2026: hashprice fell to a post-halving low of roughly $28-30 per PH/s per day in Q1 2026 (near $32 by August 2026), leaving CoinShares' estimate of 15-20% of the global fleet loss-making at electricity costs above $0.05/kWh.
  - Network difficulty fell about 19.9% from its November 2025 peak of ~156 trillion to 126.23 trillion by the 25 July 2026 adjustment, the third-deepest ASIC-era drawdown, and difficulty turned negative year-on-year for only the second time ever (the first being China's 2021 ban), with Luxor's Hashrate Index confirming the -1.1% reading on 28 July 2026.
  - Operators are pivoting capacity to AI and high-performance computing: publicly listed miners have signed over $70 billion in long-term AI hosting leases, with Hut 8 adding a 15-year 352 MW lease at Beacon Point on 20 July 2026 and Core Scientific announcing an AMD partnership covering ~530 MW on 28 July; CoreWeave, Google-backed TeraWulf, IREN and Cipher are all deepening data-centre buildouts, and CoinShares projects listed miners could earn up to 70% of revenue from AI by end-2026.
  - The competitive ranking has reshaped around efficiency and vertical integration: Bitdeer (BTDR) overtook MARA as the largest self-mining operator (~71-73 EH/s) on the strength of its in-house SEALMINER line, whose A4 series entered mass production in April 2026 at an industry-leading ~9.45 J/TH, versus benchmark third-party units such as Bitmain's Antminer S21 XP (270 TH/s, 13.5 J/TH) and S23 Hydro (~9.5 J/TH).
  - US policy tightened around supply-chain security: Senators Cassidy and Lummis introduced the Mined in America Act (S. 4251) on 30 March 2026, creating a voluntary Commerce Department certification, directing NIST/MEP to seed domestic ASIC manufacturing, requiring a phase-out of foreign-adversary hardware by 1 January 2030, and codifying Trump's Strategic Bitcoin Reserve executive order into statute.
  - A 2 April 2026 Section 232 proclamation applied a 25% tariff on the full customs value of imported ASICs (stacked on a pre-existing ~21.6% reciprocal tariff), raising a landed Antminer S21 XP from roughly $7,782 to $9,382 and pushing marginal new-fleet economics toward Paraguay, Ethiopia and Russia despite the US still holding ~37-38% of global hashrate.
  - Pool concentration remains a governance concern, with Foundry USA and AntPool together commanding over 50% of network hashrate, while Russia moved the opposite way, its State Duma passing legislation (first reading 27 May 2026) criminalising unregistered mining with fines up to 2.5 million roubles or five years' imprisonment and mandating per-ASIC network-address registration.

- ### References
  - 1. crypto.news (2026). Bitcoin mining capitulation: difficulty falls 19.9% as miners pivot to AI. https://crypto.news/bitcoin-mining-difficulty-falls-19-percent-ai-pivot/
  - 2. CoinMarketCap Academy / CoinShares (2026). Bitcoin Miners Face Breakeven Pressure as AI Pivot Accelerates. https://coinmarketcap.com/academy/article/bitcoin-miners-face-breakeven-pressure-as-ai-pivot-accelerates
  - 3. Ziven.io (2026). Bitcoin Mining Hashrate: Public Miners Ranked by Exahash [2026]. https://ziven.io/bitcoin-mining/hashrate
  - 4. Cassidy Senate Office (2026). Cassidy, Lummis Introduce Bill to Boost U.S. Digital Asset Mining, Back President Trump's Strategic Bitcoin Reserve. https://www.cassidy.senate.gov/newsroom/press-releases/cassidy-lummis-introduce-bill-to-boost-u-s-digital-asset-mining-back-president-trumps-strategic-bitcoin-reserve/
  - 5. CleanSky (2026). How Does Trump's Section 232 Affect Bitcoin Mining? The 47% Tariff. https://cleansky.io/blog/trump-section-232-tariffs-bitcoin-mining-2026/
  - 6. KuCoin (2026). 2026 Global Bitcoin Mining Map and Geopolitical Games. https://www.kucoin.com/blog/global-bitcoin-mining-2026-us-russia-geopolitics

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
