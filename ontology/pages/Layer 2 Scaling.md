public:: true

# Layer 2 Scaling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:layer-2-scaling",
  "@type": "Page",
  "vc:slug": "layer-2-scaling",
  "title": "Layer 2 Scaling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:layer-2-scaling",
  "@type": "Class",
  "label": "Layer 2 Scaling",
  "definition": "Layer 2 scaling refers to a category of protocols and systems built atop an existing blockchain (Layer 1) that increase transaction throughput and reduce fees by processing computation and data storage off the main chain while inheriting the security guarantees of the underlying Layer 1 through cryptographic proofs, fraud-proof mechanisms, or periodic state commitments. The Layer 2 anchors itself to the Layer 1 by periodically publishing compressed state roots or validity proofs, enabling the Layer 1 to serve as the ultimate settlement and security layer while the Layer 2 handles high-volume transaction processing. Major architectural families include ZK-rollups, optimistic rollups, state channels, and sidechains, each offering distinct trade-offs between latency, security assumptions, and EVM compatibility.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-scalability",
      "label": "Blockchain Scalability"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:off-chain-scaling",
      "label": "Off-Chain Scaling"
    },
    {
      "@id": "urn:ngm:class:l2-scaling",
      "label": "L2 Scaling"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      },
      {
        "@id": "urn:ngm:class:cross-chain-asset-transfer",
        "label": "Cross Chain Asset Transfer"
      },
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      },
      {
        "@id": "urn:ngm:class:gas-optimization",
        "label": "Gas Optimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:layer-1-blockchain",
        "label": "Layer 1 Blockchain"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-availability-sampling",
        "label": "Data Availability Sampling"
      },
      {
        "@id": "urn:ngm:class:eip-4844",
        "label": "EIP-4844"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Layer 2 Scaling]] is the class of off-chain protocols that execute transactions at high throughput on secondary networks anchored to a [[Layer 1 Blockchain]] for security. These systems employ mechanisms such as [[Zero-Knowledge Proof]] validity proofs (ZK-rollups), optimistic [[Fraud Proof]] commitments (optimistic rollups), or bilateral [[State Channel]] networks to shift the computational burden off the base chain while preserving its security guarantees. By batching thousands of transactions and publishing only compressed state roots to [[Ethereum]] or [[Bitcoin]], Layer 2 networks achieve orders-of-magnitude higher throughput and lower per-transaction costs than [[Layer 1 Blockchain]] alone, making [[Decentralised Finance]] economically viable at scale and enabling [[Micropayment]] use cases that would be uneconomical on-chain.

- ### Overview
  - Layer 2 scaling arose from the practical limits of base-layer [[Blockchain Scalability]]. Ethereum's mainnet could process roughly 15 transactions per second at launch, whilst Bitcoin's throughput was even lower, yet mainstream adoption demands thousands of transactions per second. The blockchain [[Scalability Trilemma]] — the difficulty of simultaneously achieving decentralisation, security, and high throughput — motivated off-chain architectures that relax the throughput constraint whilst preserving the other two properties by anchoring to a secure base layer.
  - The core insight is that not every transaction need be validated by every node in the network. If participants can verify the _result_ of a batch of transactions through a compact cryptographic proof or through an economic challenge mechanism, the [[Consensus Mechanism]] work of the base layer can be concentrated on settlement rather than execution.
  - Layer 2 solutions are now production-grade infrastructure. By 2024, major rollup networks process more aggregate transaction volume than Ethereum mainnet, and the [[Lightning Network]] carries substantial Bitcoin payment volume with sub-second finality. The deployment of [[EIP-4844]] (proto-danksharding) in March 2024 reduced rollup data costs by 80–90%, making Layer 2 fees negligible for most users.

- ### Key Architectural Families
  - #### Rollups
    - Rollups batch many off-chain transactions and post compressed calldata or validity proofs to the [[Layer 1 Blockchain]], inheriting its security for final settlement.
    - **ZK-Rollups** ([[ZK-Rollup]]): A [[Sequencer]] collects transactions, executes them in an off-chain virtual machine, and generates a [[Zero-Knowledge Proof]] (SNARK or STARK) attesting to the correctness of the state transition. A verifier [[Smart Contract]] on Layer 1 checks this proof, ensuring correctness without re-executing transactions. Implementations include zkSync Era, Starknet, Polygon zkEVM, and Scroll. ZK-rollups offer fast finality (minutes rather than days) and stronger security assumptions, at the cost of significant prover computation.
    - **Optimistic Rollups** ([[Optimistic Rollup]]): State roots are posted to Layer 1 optimistically (assumed valid), but a challenge window — typically seven days — allows any observer to submit a [[Fraud Proof]] if they detect an incorrect transition. Challenged batches are re-executed on Layer 1. Implementations include Arbitrum One and Optimism (OP Stack). The trade-off is a withdrawal delay equal to the challenge window, mitigated in practice by liquidity providers who front funds for instant withdrawals.
  - #### State Channels
    - [[State Channel]] networks allow two or more parties to open a channel by locking funds in a [[Smart Contract]] on Layer 1, exchange signed state updates off-chain at high frequency and negligible cost, and close the channel by submitting the final state on-chain.
    - The [[Lightning Network]] implements this pattern for Bitcoin using [[Hash Time-Locked Contract]] (HTLC) routing across multi-hop payment paths, enabling [[Micropayment]] streams at millisecond latency.
    - State channels are optimal for high-frequency bilateral interactions (payments, gaming moves) but require both parties to be online and pre-fund channels, limiting general-purpose programmability.
  - #### Sidechains
    - A [[Sidechain]] is an independent blockchain with its own [[Consensus Mechanism]] that bridges to the main chain via a two-way peg. Unlike rollups, sidechains do not inherit Layer 1 security — users must trust the sidechain's validators. Polygon PoS (pre-CDK) and Gnosis Chain are examples. Sidechains offer high performance and EVM compatibility but with weaker security guarantees than rollups.
  - #### Validiums and Volitions
    - Validiums use [[Zero-Knowledge Proof]] validity proofs (like ZK-rollups) but store data off-chain with a [[Data Availability]] committee rather than on Layer 1, achieving higher throughput at the cost of data availability trust assumptions. Volitions allow users to choose per-transaction whether to store data on-chain (ZK-rollup mode) or off-chain (validium mode).

- ### Data Availability
  - [[Data Availability]] is the critical bottleneck for rollup scalability: users must be able to reconstruct the full rollup state from data published on-chain in order to exit safely if the sequencer becomes malicious or fails.
  - [[EIP-4844]] (proto-danksharding) introduced a new transaction type carrying "blob" data on Ethereum's beacon chain at dramatically reduced cost, with blobs pruned after ~18 days. This reduced rollup posting costs by 80–90%.
  - [[Data Availability Sampling]] (DAS) is the mechanism planned for full Danksharding, allowing light clients to verify data availability without downloading the full dataset by sampling random chunks and using erasure coding.
  - Alternative data availability layers — including Celestia, EigenDA, and Avail — offer rollups the option to post data off Ethereum entirely, with varying security trade-offs.

- ### Sequencer Architecture
  - Most production rollups use a centralised [[Sequencer]] operated by the rollup team to order and batch transactions. This introduces a potential censorship and liveness risk: if the sequencer fails, the rollup halts, and if it censors, users may be unable to transact.
  - Forced inclusion mechanisms allow users to submit transactions directly to the Layer 1 [[Smart Contract]], bypassing the sequencer after a delay, preserving censorship resistance.
  - Decentralised sequencer designs — including based rollups (where Ethereum validators sequence the rollup) and shared sequencer networks — are active areas of research aimed at eliminating single points of failure.

- ### Applications and Use Cases
  - **Decentralised Finance**: [[Decentralised Finance]] protocols — DEXs, lending markets, perpetuals — benefit directly from Layer 2 as reduced fees make small trades economically viable. Uniswap, Aave, and Synthetix have deployed on multiple Layer 2 networks.
  - **NFT and Gaming**: Low-cost transactions on Layer 2 enable high-frequency in-game economies, NFT minting at negligible cost, and on-chain game state that would be prohibitively expensive on Layer 1.
  - **Payments and Micropayments**: The [[Lightning Network]] enables Bitcoin [[Micropayment]] channels for streaming payments, content monetisation, and machine-to-machine payments. Stablecoin payments on rollups achieve sub-cent fees.
  - **Cross-Chain Asset Transfer**: [[Cross-Chain Asset Transfer]] relies on [[Bridge Protocol]] contracts that lock assets on Layer 1 and mint wrapped representations on Layer 2, or on optimistic/ZK-proof-based bridges that can verify state across chains.
  - **Enterprise and Permissioned Deployments**: Application-specific Layer 3 networks (rollups atop rollups, e.g. via the OP Stack or ZK Stack) enable businesses to deploy permissioned execution environments with customised gas tokens and privacy rules whilst settling to a public Layer 2 and ultimately Ethereum.

- ### Relationships
  - hasPart:: [[ZK-Rollup]]
  - hasPart:: [[Optimistic Rollup]]
  - hasPart:: [[State Channel]]
  - hasPart:: [[Sidechain]]
  - hasPart:: [[Lightning Network]]
  - requires:: [[Smart Contract]]
  - requires:: [[Data Availability]]
  - requires:: [[Merkle Tree]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Fraud Proof]]
  - uses:: [[Sequencer]]
  - uses:: [[Hash Time-Locked Contract]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Blockchain Interoperability]]
  - enables:: [[Cross-Chain Asset Transfer]]
  - enables:: [[Micropayment]]
  - enables:: [[Gas Optimisation]]
  - dependsOn:: [[Ethereum]]
  - dependsOn:: [[Consensus Mechanism]]
  - contrastsWith:: [[Layer 1 Blockchain]]
  - contrastsWith:: [[Sharding]]
  - relatedTo:: [[Data Availability Sampling]]
  - relatedTo:: [[EIP-4844]]
  - relatedTo:: [[Bridge Protocol]]
  - bridges-to:: [[Distributed Computing]]
  - bridges-to:: [[Cryptographic Commitment]]

- ### Standards and Context
  - Ethereum Improvement Proposals (EIPs) are the primary standards vehicle for Layer 2 infrastructure on Ethereum:
    - **[[EIP-4844]]** (proto-danksharding, EIP-4844, activated Dencun hard fork March 2024): introduces blob-carrying transactions that dramatically reduce rollup data costs.
    - **EIP-7547** (inclusion lists): proposed mechanism to enforce censorship resistance for rollup sequencers by allowing Layer 1 validators to mandate inclusion of specific transactions.
    - **ERC-7683** (cross-chain intents): a standard interface for cross-chain order settlement, coordinating [[Cross-Chain Asset Transfer]] across Layer 2 networks.
  - The **L2Beat** platform provides independent risk assessments and security scores for production Layer 2 deployments against a standardised framework covering data availability, upgradeability, sequencer decentralisation, and exit mechanisms.
  - The **Rollup Improvement Proposals** (RIPs) process — modelled on EIPs — coordinates standards across OP Stack and ZK Stack deployments.
  - [[Blockchain Interoperability]] standards (IBC, CCTP, Axelar) interact with Layer 2 ecosystems for cross-rollup asset movement.

- ### Security Considerations
  - **Bridge risk**: [[Bridge Protocol]] contracts holding locked assets are high-value targets; bridge exploits have accounted for the largest losses in blockchain history (e.g. Ronin, Wormhole, Nomad).
  - **Sequencer centralisation**: Centralised sequencers can censor transactions or go offline; forced inclusion mechanisms partially mitigate this.
  - **Upgrade key risk**: Many rollup [[Smart Contract]] systems have admin keys or multi-sigs that can upgrade the verifier contracts, introducing trust in the operator; progressive decentralisation of upgrade authorities is a maturity milestone.
  - **Proof soundness**: ZK proof systems depend on the soundness of the underlying cryptographic assumptions (discrete log hardness, hash collision resistance); bugs in proving systems have been found in production.
  - **Data withholding**: If a sequencer posts a state root but withholds the transaction data, users cannot reconstruct the state and may be unable to prove their balance for exit; [[Data Availability]] guarantees guard against this.

- ### Provenance
  - sources:: Ethereum Foundation documentation; L2Beat.com; EIP-4844 specification; Lightning Network whitepaper (Poon & Dryja, 2016); Arbitrum, Optimism, zkSync, and Starknet technical documentation; established computer science and cryptography literature.
  - updated:: 2026-06-13
