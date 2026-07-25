public:: true

# Gas Fee
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f12270ce08a004c74291bf426e8187079b2f0ffa64c4defe726b13972915bb7a",
  "@type": "Page",
  "vc:slug": "gas-fee",
  "title": "Gas Fee",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:transaction-fee",
      "vc:label": "Transaction Fee"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gas Fee"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gas-fee",
  "@type": "Class",
  "label": "Gas Fee",
  "definition": "A gas fee is the payment a user must make to compensate the network validators or miners for the computational resources consumed when processing a transaction or executing a smart contract on a blockchain. On Ethereum-compatible networks, 'gas' is an abstract unit measuring the computational effort required by an operation; the fee is calculated as gas units consumed multiplied by a price per unit (the gas price), denominated in the network's native currency. Following EIP-1559 on Ethereum, gas fees split into a protocol-set base fee — which is burned, permanently removing supply — and an optional priority tip paid directly to the block proposer. Gas fees serve the dual purpose of economically compensating validators and acting as a spam-prevention mechanism by making resource-intensive computation costly.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction-fee",
      "label": "Transaction Fee"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:native-token",
        "label": "Native Token"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      },
      {
        "@id": "urn:ngm:class:spam-prevention",
        "label": "Spam Prevention"
      },
      {
        "@id": "urn:ngm:class:block-production",
        "label": "Block Production"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gas-limit",
        "label": "Gas Limit"
      },
      {
        "@id": "urn:ngm:class:gas-price",
        "label": "Gas Price"
      },
      {
        "@id": "urn:ngm:class:network-congestion",
        "label": "Network Congestion"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eip-1559",
        "label": "EIP-1559"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:feeless-blockchain",
        "label": "Feeless Blockchain"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:microeconomics",
        "label": "Microeconomics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:base-fee",
        "label": "Base Fee"
      },
      {
        "@id": "urn:ngm:class:priority-fee",
        "label": "Priority Fee"
      },
      {
        "@id": "urn:ngm:class:miner-extractable-value",
        "label": "Miner Extractable Value"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:network-fee",
      "label": "Network Fee"
    },
    {
      "@id": "urn:ngm:class:blockchain-transaction-fee",
      "label": "Blockchain Transaction Fee"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gas-fee:cb89cb0e927a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f12270ce08a004c74291bf426e8187079b2f0ffa64c4defe726b13972915bb7a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Fee]]",
      "resolved": "urn:visionflow:linked:transaction-fee",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **gas fee** is the cost a user pays to a [[Blockchain Network]] to have a [[Transaction]] or [[Smart Contract]] operation processed and recorded on-chain. The term "gas" abstracts the computational effort required by each operation into a discrete unit, enabling fine-grained pricing: each EVM opcode on [[Ethereum]] has a fixed gas cost, and the total fee equals the gas units consumed multiplied by the prevailing [[Gas Price]]. Gas fees economically compensate [[Validator|validators]] for expending real compute, storage, and bandwidth resources, while simultaneously functioning as a [[Spam Prevention]] mechanism that makes artificially expensive on-chain activity economically infeasible.

- ### Overview
  - Gas fees are a foundational economic primitive in [[Ethereum]] and compatible networks ([[Polygon]], [[Arbitrum]], [[Optimism]], [[BNB Smart Chain]]).
  - They arise from a fundamental scarcity: block space is finite, so fees create a market that rationally allocates a shared resource.
  - Without gas fees, a single actor could trivially spam the network with computationally intensive transactions at negligible cost, undermining [[Network Security]].
  - The amount of gas a transaction consumes is deterministic and determined by the EVM opcodes it executes; the price paid per gas unit is set by market supply and demand via the [[Mempool]].
  - Gas fees are denominated in the network's [[Native Token]] (ETH on [[Ethereum]], MATIC on [[Polygon]], etc.) but often discussed in smaller sub-units (Gwei = 10⁻⁹ ETH on Ethereum).
  - High gas fees have been a principal driver of [[Layer-2 Scaling]] solutions, which batch or compress transactions before settling on the base layer to amortise costs.

- ### Key Mechanisms
  - #### Pre-EIP-1559 (Legacy) Model
    - Users bid a single gas price; miners preferentially include the highest-bidding transactions.
    - Resulted in unpredictable fees and frequent overbidding.
    - Relied on a [[First-Price Auction]] market structure, known to be economically inefficient.
  - #### EIP-1559 Fee Market (London Hard Fork, August 2021)
    - Introduced a protocol-calculated [[Base Fee]] that adjusts automatically based on [[Network Congestion]].
    - The base fee is **burned** (destroyed), reducing ETH supply and creating deflationary pressure on [[Tokenomics]].
    - Users may include an optional [[Priority Fee]] (tip) to incentivise validators to include their transaction more quickly.
    - Target block utilisation is 50%; if blocks are consistently over/under target, the base fee rises/falls by up to 12.5% per block.
    - Provides better fee predictability while preserving validator incentives via the priority tip.
  - #### Gas Units and Gas Limit
    - Every EVM opcode costs a fixed number of gas units (e.g. ADD = 3, SSTORE = 20 000).
    - Users set a [[Gas Limit]] — the maximum gas they authorise the transaction to consume; unused gas is refunded.
    - Block-level [[Gas Limit]] caps total computation per block, bounding block validation time.
  - #### Fee Calculation
    - **Legacy**: `fee = gas_used × gas_price`
    - **EIP-1559**: `fee = gas_used × (base_fee + priority_fee)`, where only the priority fee reaches the validator.
  - #### Miner / Validator Incentives
    - Prior to [[The Merge]] (Ethereum's transition to [[Proof of Stake]]), miners received priority fees plus block rewards.
    - Post-Merge, [[Validator|validators]] receive the priority fee; base fee is burned; additional [[Miner Extractable Value]] (MEV) opportunities also influence ordering decisions.

- ### Gas Costs by Operation Type
  - Simple ETH transfer: 21 000 gas (fixed baseline cost for any transaction).
  - ERC-20 token transfer: typically 45 000–65 000 gas, depending on contract implementation.
  - [[Decentralised Finance]] swaps (e.g. [[Uniswap]] V3): 120 000–200 000 gas per trade.
  - [[Non-Fungible Token]] minting: 50 000–150 000 gas per mint, higher for complex metadata.
  - Complex multi-step [[Smart Contract]] interactions can exceed 1 000 000 gas.
  - Gas costs are expressed in gwei; at times of peak [[Network Congestion]] these have exceeded 500 gwei, producing economically prohibitive fees for small transactions.

- ### Applications and Use Cases
  - **[[Decentralised Finance]] (DeFi)**: Every lending, borrowing, swapping, and liquidity-provision operation incurs gas; fee optimisation is integral to protocol design and user experience.
  - **[[Non-Fungible Token]] markets**: Minting, listing, and trading NFTs on [[Ethereum]] mainnet can become inaccessible to small participants when gas is high, driving migration to [[Layer-2 Scaling]] or alternative chains.
  - **[[Decentralised Autonomous Organisation]] (DAO) governance**: On-chain voting and proposal execution consume gas; high fees can suppress participation, prompting the use of off-chain signalling tools like Snapshot.
  - **[[Cross-Chain Bridge]] operations**: Bridging assets between chains typically requires gas on both the source and destination networks, compounding cost exposure.
  - **[[Layer-2 Scaling]] settlement**: Layer-2 rollups (Optimistic and ZK) periodically post state roots or proofs to mainnet, paying gas for these settlement transactions; this cost is amortised across many L2 transactions.
  - **[[Gas Abstraction]] / Account Abstraction (ERC-4337)**: Emerging standard allowing third parties (paymasters) to sponsor gas on behalf of users, enabling gasless UX whilst preserving on-chain security.

- ### Gas Optimisation Strategies
  - **Batching**: Combining multiple operations into a single transaction amortises the 21 000 gas base cost.
  - **Off-peak timing**: Gas prices follow diurnal patterns — transacting during low-activity windows (e.g. weekends, off-peak UTC hours) reduces cost.
  - **Layer-2 migration**: Moving activity to [[Arbitrum]], [[Optimism]], [[zkSync]], or [[Polygon]] reduces fees by orders of magnitude.
  - **EIP-712 meta-transactions**: Permit-style off-chain signatures that allow gasless token approvals.
  - **Storage optimisation**: Minimising SSTORE (storage write) opcodes — the most expensive EVM operation — in [[Smart Contract]] design.
  - **Gas tokens (deprecated)**: CHI and GST2 allowed pre-purchasing cheap gas storage slots to redeem during high-fee periods; rendered obsolete by EIP-3529.

- ### Relationships
  - partOf:: [[Ethereum]]
  - partOf:: [[Blockchain Network]]
  - requires:: [[Native Token]]
  - requires:: [[Consensus Mechanism]]
  - enables:: [[Transaction Validation]]
  - enables:: [[Spam Prevention]]
  - enables:: [[Block Production]]
  - dependsOn:: [[Gas Limit]]
  - dependsOn:: [[Gas Price]]
  - dependsOn:: [[Network Congestion]]
  - implements:: [[EIP-1559]]
  - uses:: [[Smart Contract]]
  - uses:: [[Mempool]]
  - supports:: [[Decentralised Finance]]
  - supports:: [[Non-Fungible Token]]
  - supports:: [[Layer-2 Scaling]]
  - contrastsWith:: [[Feeless Blockchain]]
  - contrastsWith:: [[Proof of Stake]]
  - bridges-to:: [[Mechanism Design]]
  - bridges-to:: [[Tokenomics]]
  - bridges-to:: [[Microeconomics]]
  - relatedTo:: [[Base Fee]]
  - relatedTo:: [[Priority Fee]]
  - relatedTo:: [[Miner Extractable Value]]

- ### Standards and Context
  - **EIP-1559** (Ethereum Improvement Proposal 1559): The canonical fee market reform, adopted at the London Hard Fork (August 2021). Defines base fee, priority fee, and the burning mechanism.
  - **EIP-2930**: Optional access lists that pre-declare storage slots to reduce gas costs for known-access patterns.
  - **EIP-3529**: Reduced gas refunds for storage clearing, eliminating the gas token exploit.
  - **EIP-4337 (Account Abstraction)**: Defines a [[Paymaster]] interface enabling sponsored or alternative-token gas payment.
  - **EIP-4844 (Proto-Danksharding)**: Introduced blob-carrying transactions with a separate fee market for [[Layer-2 Scaling]] data availability, significantly reducing L2 settlement costs from March 2024.
  - **Ethereum Yellow Paper**: The formal specification document defining exact gas costs for every EVM opcode.
  - **EVM compatibility**: Networks such as [[Polygon]], [[Avalanche]], [[BNB Smart Chain]], and all major L2 rollups implement EVM-compatible gas accounting, making gas fee knowledge broadly transferable across the ecosystem.
  - Regulatory context: Gas fees are typically treated as a cost of on-chain activity rather than a taxable event in many jurisdictions, though this varies; tax treatment is evolving as [[Digital Asset Regulation]] matures.

- ### Provenance
  - sources:: Ethereum Yellow Paper; EIP-1559 (Buterin et al., 2019); EIP-4844; Ethereum documentation (ethereum.org)
  - updated:: 2026-06-13
