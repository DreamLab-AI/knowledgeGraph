public:: true

# MEV
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:87d57698427014f459621583878e5425860c8ef3f074bc8e90ad5f4ddd9c5953",
  "@type": "Page",
  "vc:slug": "mev",
  "title": "MEV",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-security",
      "vc:label": "Consensus Security"
    },
    {
      "@id": "urn:visionflow:linked:de-fi-ecosystem",
      "vc:label": "DeFi Ecosystem"
    },
    {
      "@id": "urn:visionflow:linked:front-running",
      "vc:label": "Front-Running"
    },
    {
      "@id": "urn:visionflow:linked:proposer-builder-separation",
      "vc:label": "Proposer-Builder Separation"
    },
    {
      "@id": "urn:visionflow:linked:transaction-ordering",
      "vc:label": "Transaction Ordering"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "BlockchainDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:mempool",
      "vc:label": "Mempool"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-8012"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "MEV"
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
  "@id": "urn:ngm:class:mev",
  "@type": "Class",
  "label": "MEV",
  "definition": "Maximal Extractable Value (MEV) represents the profit that block producers can extract through strategic transaction ordering, inclusion, or exclusion within blocks, arising from their privileged position to control execution sequencing in blockchain networks.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:bc-defi-and-economics",
    "label": "DeFi and Economics"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:front-running",
        "label": "Front-Running"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction-ordering",
        "label": "Transaction Ordering"
      },
      {
        "@id": "urn:ngm:class:block-production",
        "label": "Block Production"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralized-exchange",
        "label": "Decentralized Exchange"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consensus-security",
        "label": "Consensus Security"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Blockchain Validator"
      },
      {
        "@id": "urn:ngm:class:gas-fee",
        "label": "Gas Fee"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:market-microstructure",
        "label": "Market Microstructure"
      },
      {
        "@id": "urn:ngm:class:high-frequency-trading",
        "label": "High-Frequency Trading"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:maximal-extractable-value",
      "label": "Maximal Extractable Value"
    },
    {
      "@id": "urn:ngm:class:miner-extractable-value",
      "label": "Miner Extractable Value"
    }
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
  "@id": "urn:visionflow:annotation:link-resolutions:mev:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:87d57698427014f459621583878e5425860c8ef3f074bc8e90ad5f4ddd9c5953"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Security]]",
      "resolved": "urn:visionflow:linked:consensus-security",
      "kind": "StubLink"
    },
    {
      "raw": "[[DeFi Ecosystem]]",
      "resolved": "urn:visionflow:linked:de-fi-ecosystem",
      "kind": "StubLink"
    },
    {
      "raw": "[[Front-Running]]",
      "resolved": "urn:visionflow:linked:front-running",
      "kind": "StubLink"
    },
    {
      "raw": "[[Proposer-Builder Separation]]",
      "resolved": "urn:visionflow:linked:proposer-builder-separation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Ordering]]",
      "resolved": "urn:visionflow:linked:transaction-ordering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BlockchainDomain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mempool]]",
      "resolved": "urn:visionflow:owl:class:mempool",
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
  - Maximal Extractable Value (MEV) represents the profit that block producers can extract through strategic transaction ordering, inclusion, or exclusion within blocks, arising from their privileged position to control execution sequencing in blockchain networks.

- ### Semantic Classification
  - owl-class:: blockchain:Mev
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Content

  ## Definition
  - Profit extractable by block producers through strategic transaction ordering, inclusion, and exclusion
  - Arises from block producers' privileged position to control transaction sequencing
  - Represents market inefficiency where intermediaries capture value from users' transactions

  ## Core Concepts
  - **Transaction Ordering Control**: Block producers determine execution sequence
  - **Value Extraction**: Profit beyond standard block rewards and fees
  - **Front-Running**: Executing transaction before observed user transaction
  - **Back-Running**: Executing transaction immediately after target transaction

  ## MEV Categories
  ### Arbitrage MEV
  - Exploiting price differences across DEXs
  - Sandwich trading around large swaps
  - Cross-DEX arbitrage opportunities

  ### Liquidation MEV
  - Capturing liquidation rewards in lending protocols
  - Racing to liquidate undercollateralized positions
  - Priority gas auctions for liquidation rights

  ### Sandwich Attacks
  1. Front-run: Buy before victim's trade
  2. Victim trade executes at worse price
  3. Back-run: Sell after victim's trade
  - Profit from induced slippage

  ### Time-Bandit Attacks
  - Reorganizing blockchain history for MEV
  - Only profitable when MEV > block reward
  - Threatens consensus security

  ## Technical Mechanisms
  ### Mempool Observation
  - Monitoring pending transactions
  - Identifying profitable opportunities
  - Calculating optimal extraction strategy

  ### Gas Price Manipulation
  - Priority Gas Auctions (PGAs)
  - Bidding wars for transaction ordering
  - Failed transaction costs

  ### Transaction Bundling
  - Atomic multi-transaction bundles
  - Conditional execution dependencies
  - Flashbots-style private relay

  ## MEV Infrastructure
  ### Flashbots
  - Private transaction relay
  - MEV-Boost for Ethereum PoS
  - Separates proposer/builder roles (PBS)

  ### MEV-Boost Architecture
  ```
  Searchers -> Builders -> Relays -> Validators
  ```
  - **Searchers**: Find MEV opportunities
  - **Builders**: Construct optimal blocks
  - **Relays**: Trusted intermediaries
  - **Validators**: Choose highest-value block

  ### Eden Network
  - Priority ordering for stakers
  - Network-level protection against sandwich attacks
  - Alternative to Flashbots

  ## Relationships
  - exploits:: [[Transaction Ordering]]
  - threatens:: [[Consensus Security]]
  - uses:: [[Front-Running]]
  - mitigated-by:: [[Proposer-Builder Separation]]
  - component-of:: [[DeFi Ecosystem]]

  ## Economic Impact
  - **User Value Loss**: Estimated billions in extracted value
  - **Network Congestion**: PGAs increase gas costs
  - **Protocol Revenue**: Portion flows back to validators
  - **Market Efficiency**: Can improve price discovery

  ## Security Implications
  - Validator centralization incentive
  - Consensus instability from chain reorgs
  - Cartel formation among block producers
  - Censorship through transaction suppression

  ## Mitigation Strategies
  ### Protocol-Level
  - **Encrypted Mempools**: Hide transaction contents until inclusion
  - **Fair Ordering Services**: Decentralized sequencing
  - **Threshold Encryption**: Time-locked transaction revelation
  - **Account Abstraction**: User-defined execution rules

  ### Application-Level
  - **MEV Protection DEXs**: CoW Swap, CowSwap
  - **Private Transactions**: Direct submission to validators
  - **Slippage Limits**: Protect against sandwich attacks
  - **Commit-Reveal Schemes**: Hide trade intentions

  ### Proposer-Builder Separation (PBS)
  - Separate block production from block proposal
  - Democratize MEV extraction
  - Reduce validator centralization

  ## MEV Types by Blockchain
  | Blockchain | Primary MEV | Characteristics |
  |------------|-------------|-----------------|
  | Ethereum | Arbitrage, liquidations, sandwiches | High DeFi activity |
  | Bitcoin | Fee sniping, RBF conflicts | Limited smart contracts |
  | Solana | Front-running, arbitrage | Parallel execution reduces some MEV |
  | Layer 2s | Sequencer MEV | Centralized sequencers control ordering |

  ## Quantification
  - **Realized MEV**: Actual extracted value (observable)
  - **Total MEV**: All extractable value (includes unsuccessful attempts)
  - **MEV per Block**: Average extraction rate
  - **Failed MEV**: Wasted gas on unsuccessful attempts

  ## Ethical Considerations
  - Extractive vs productive MEV debate
  - User value alignment
  - Protocol fairness
  - Regulatory implications

  #### Future Directions
  - Encrypted mempools (threshold encryption)
  - Fair sequencing services
  - MEV redistribution to users
  - Cross-domain MEV (cross-chain)

  ## Tools and Analysis
  - **Flashbots Data**: Public MEV dashboards
  - **MEV-Inspect**: Historical MEV analysis
  - **Zeromev**: MEV monitoring
  - **EigenPhi**: MEV profit tracking

  #### Related Concepts
  - [[Front-Running]]
  - [[Transaction Ordering]]
  - [[Proposer-Builder Separation]]
  - [[Mempool]]

  #blockchain #mev #defi #security #transaction-ordering

  ### Relationships
  - is-subclass-of:: [[Blockchain]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
