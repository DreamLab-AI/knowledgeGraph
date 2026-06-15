public:: true

# Layer 2 Networks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:20fd0630f33a07f2940ecab4004f0f4577533de9e9169011178bf44fd6a451f9",
  "@type": "Page",
  "vc:slug": "layer-2-networks",
  "title": "Layer 2 Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:layer-1",
      "vc:label": "Layer 1"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Layer 2 Networks"
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
  "@id": "urn:ngm:class:layer-2-networks",
  "@type": "Class",
  "label": "Layer 2 Networks",
  "definition": "Layer 2 Networks are secondary protocols constructed atop a base blockchain (Layer 1) that execute transactions off the main chain, batching or compressing them before posting commitments back to Layer 1 for final settlement and security. They address the fundamental scalability trilemma by separating execution from consensus, enabling higher throughput and lower fees without compromising the decentralisation or security guarantees of the underlying chain. Primary architectural families include optimistic rollups, zero-knowledge rollups, state channels, and sidechains, each making different trade-offs between latency, data availability, and trust assumptions. Settlement finality and fraud or validity proof mechanisms determine the trust model and the withdrawal period users must endure before funds are considered unconditionally settled.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:layer-1",
        "label": "Layer 1"
      },
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:micropayments",
        "label": "Micropayments"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channels"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechains"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-proofs",
        "label": "Cryptographic Proofs"
      },
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proofs"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proofs"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Trees"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK Rollup"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:layer-1",
        "label": "Layer 1"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:plasma",
        "label": "Plasma"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-lightning-network",
        "label": "Bitcoin Lightning Network"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
      },
      {
        "@id": "urn:ngm:class:blockchain-interoperability",
        "label": "Blockchain Interoperability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:payment-infrastructure",
        "label": "Payment Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:l2-networks",
      "label": "L2 Networks"
    },
    {
      "@id": "urn:ngm:class:blockchain-layer-2",
      "label": "Blockchain Layer 2"
    }
  ],
  "quality": 0.74,
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
  "@id": "urn:visionflow:annotation:link-resolutions:layer-2-networks:31852eaab73d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:20fd0630f33a07f2940ecab4004f0f4577533de9e9169011178bf44fd6a451f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Layer 1]]",
      "resolved": "urn:visionflow:linked:layer-1",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
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
  - Layer 2 Networks are secondary protocols built atop a [[Layer 1]] base blockchain that execute transactions off the main chain, reducing congestion and fees whilst inheriting [[Consensus Mechanism]] and settlement security from the underlying network. They form a critical pillar of [[Blockchain Scaling]] strategy, complementing on-chain optimisations such as [[Sharding]] by separating execution from finalisation. Commitments, proofs, or data digests are periodically anchored back to Layer 1, maintaining verifiability without burdening every node with every transaction. The resulting architecture allows [[Decentralised Finance]], NFT markets, gaming, and payment applications to operate at internet scale without sacrificing the trustlessness guaranteed by the base chain.

- ### Overview
  - Layer 2 Networks emerged as the canonical answer to the [[Blockchain Scalability Trilemma]], the observation that a single-layer blockchain struggles to achieve decentralisation, security, and throughput simultaneously.
  - By offloading computation and state transitions to a secondary layer, they allow the base chain to focus on ordering and settlement whilst the L2 handles high-frequency interactions.
  - The critical invariant is that users must always be able to exit to [[Layer 1]] unilaterally, even if the L2 operator behaves maliciously, enforcing a *trust-minimised* (rather than trustless) security model for most architectures.
  - The design space spans a spectrum from fully on-chain data availability (rollups) to off-chain data schemes (validiums, plasma) and peer-to-peer locking schemes ([[State Channels]]).
  - [[Ethereum]] has become the dominant ecosystem for L2 development, with dozens of production networks settling to Ethereum mainnet. [[Bitcoin Lightning Network]] is the canonical L2 for the Bitcoin ecosystem.

- ### Key Architectural Families
  - **[[Rollup]]** — the dominant modern paradigm:
    - Transactions are executed off-chain; compressed transaction data (or state diffs) are posted to Layer 1 as calldata or blob data (EIP-4844).
    - [[Smart Contracts]] on Layer 1 enforce correctness via either fraud proofs or validity proofs.
    - **[[Optimistic Rollup]]**: assumes transactions are valid by default; a challenge window (typically 7 days) allows anyone to submit a [[Fraud Proofs|fraud proof]] if a fraudulent batch is detected. Examples: Arbitrum, Optimism, Base.
    - **[[ZK Rollup]]**: every batch is accompanied by a [[Zero-Knowledge Proofs|zero-knowledge validity proof]] (SNARK or STARK) verified on-chain, enabling near-instant finality. Examples: zkSync, StarkNet, Polygon zkEVM, Scroll.
  - **[[State Channels]]** — bilateral or multi-party off-chain channels:
    - Participants lock funds in an on-chain contract, exchange signed state updates off-chain, and close the channel by submitting the final state.
    - Ideal for high-frequency bilateral interactions (e.g. micropayments, gaming moves); unsuitable for open-ended, unpredictable multi-party interactions.
    - [[Bitcoin Lightning Network]] is the most mature deployment; Raiden Network extends the model to Ethereum.
  - **[[Sidechains]]** — independent blockchains with a two-way peg:
    - Run their own [[Consensus Mechanism]], often with different validators to the parent chain.
    - Security is not inherited from Layer 1; the bridge security depends on the sidechain's own validator set.
    - Examples: Polygon PoS (pre-zkEVM), Gnosis Chain, Ronin Network (Axie Infinity).
  - **[[Validium]]** — like ZK rollups but with off-chain [[Data Availability]]:
    - Validity proofs posted on-chain; transaction data held by a Data Availability Committee (DAC) off-chain.
    - Lower cost than full ZK rollups; weaker liveness guarantees if the DAC withholds data.
    - Examples: StarkEx (dYdX v3, Immutable X), Polygon Miden in validium mode.
  - **[[Plasma]]** — an earlier construction now largely superseded:
    - Hierarchical child chains that commit Merkle roots to Layer 1; mass-exit game allows recovery in case of operator fraud.
    - Complex UX and data withholding attacks drove the ecosystem toward rollups instead.

- ### Core Mechanisms
  - **[[Data Availability]]**: ensuring transaction data is accessible so that honest parties can reconstruct state and challenge invalid batches. EIP-4844 (proto-danksharding) introduced *blobs* to reduce L2 data costs on [[Ethereum]].
  - **[[Fraud Proofs]]**: interactive or non-interactive on-chain proofs that demonstrate a state transition was invalid; used in optimistic rollups to slash dishonest [[Sequencer|sequencers]].
  - **[[Zero-Knowledge Proofs]]**: succinct cryptographic proofs (SNARKs/STARKs) that a computation was performed correctly without revealing inputs; used in ZK rollups for validity-proven finality.
  - **[[Sequencer]]**: the entity responsible for ordering transactions within a rollup; typically centralised at launch, with decentralisation via [[Proof of Stake]] committees or based sequencing underway across major networks.
  - **[[Bridge]]**: the cross-chain messaging component enabling asset and message transfer between Layer 1 and Layer 2 (or between L2s). Bridge security is a major attack surface — billions of dollars have been lost to bridge exploits.
  - **[[Merkle Trees]]**: used to commit compressed state roots to Layer 1, enabling efficient membership proofs without full data posting.

- ### Applications and Use Cases
  - **[[Decentralised Finance]] (DeFi)**: DEXs, lending protocols, and derivatives platforms on Arbitrum, Optimism, and Base serve the majority of Ethereum DeFi volume due to dramatically lower gas fees.
  - **[[NFT]] markets and gaming**: Immutable X (validium) and Ronin (sidechain) handle high-throughput NFT minting and game item transfers at sub-cent costs.
  - **[[Micropayments]]**: [[Bitcoin Lightning Network]] routes micropayments with millisecond settlement; used in streaming-payment protocols (e.g. Podcasting 2.0) and machine-to-machine value transfer.
  - **[[Cross-Border Payments]]**: stablecoin transfers on L2 networks approach the cost and speed of traditional payment rails whilst remaining self-custodial.
  - **Enterprise and supply-chain**: permissioned sidechain deployments (e.g. Polygon Edge) allow consortium participants to run high-throughput private chains that checkpoint to public mainnet for auditability. Relevant to [[Supply Chain]] transparency.
  - **Social applications**: high-frequency social interactions (likes, tips, follows) are impractical on Layer 1 due to gas cost; social protocols such as Farcaster (Optimism) leverage L2 for near-free on-chain social primitives.

- ### Relationships
  - partOf:: [[Layer 1]]
  - requires:: [[Data Availability]]
  - requires:: [[Smart Contracts]]
  - enables:: [[Scalability]]
  - enables:: [[Micropayments]]
  - enables:: [[Decentralised Finance]]
  - hasPart:: [[Rollup]]
  - hasPart:: [[State Channels]]
  - hasPart:: [[Sidechains]]
  - hasPart:: [[Validium]]
  - uses:: [[Zero-Knowledge Proofs]]
  - uses:: [[Fraud Proofs]]
  - uses:: [[Cryptographic Proofs]]
  - uses:: [[Merkle Trees]]
  - implements:: [[Optimistic Rollup]]
  - implements:: [[ZK Rollup]]
  - contrastsWith:: [[Sharding]]
  - contrastsWith:: [[Plasma]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Bitcoin Lightning Network]]
  - relatedTo:: [[Sequencer]]
  - relatedTo:: [[Blockchain Interoperability]]
  - bridges-to:: [[Distributed Systems]]
  - bridges-to:: [[Payment Infrastructure]]

- ### Standards and Governance Context
  - There is no single standards body governing Layer 2 design; the space is driven by open-source development communities and ecosystem-level governance.
  - **EIP-4844 (Proto-Danksharding)**: Ethereum Improvement Proposal introducing blob-carrying transactions to reduce rollup data costs; activated on Ethereum mainnet in March 2024. A foundational enabler for economic viability of rollups.
  - **ERC-7683 (Cross-Chain Intents)**: a proposed standard for cross-chain intent settlement, addressing UX friction caused by fragmented L2 liquidity.
  - The **L2Beat** platform tracks L2 networks' security properties, decentralisation stages, and TVL (Total Value Locked), providing a de-facto community standard for L2 risk assessment.
  - The **Rollup Improvement Proposals (RIPs)** process, modelled on EIPs, is an emerging mechanism for co-ordinating standards across multiple rollup ecosystems (e.g. shared precompiles, shared sequencer standards).
  - [[Blockchain Interoperability]] standards (e.g. IBC from Cosmos) influence cross-L2 messaging design, though Ethereum L2s predominantly rely on custom bridge contracts.
  - Regulatory treatment of L2 networks (e.g. whether a [[Sequencer]] operator constitutes a money transmitter) is an active area of [[Governance]] and legal debate, particularly in the US and EU.

- ### Security Considerations
  - **Bridge risk**: cross-chain bridges are the highest-value attack surface; notable exploits include Ronin Bridge ($625 M, 2022), Wormhole ($320 M, 2022), and Nomad ($190 M, 2022).
  - **Sequencer centralisation**: most production rollups rely on a single centralised sequencer for liveness; if it censors or halts, users must fall back to slow L1 escape-hatch mechanisms.
  - **Exit game complexity**: optimistic rollup challenge games involve complex interactive bisection protocols; any bug in the on-chain verifier contracts can be catastrophic.
  - **Data withholding attacks**: validiums and plasma variants are vulnerable if operators withhold transaction data, preventing users from proving ownership for exit.
  - **Withdrawal delay**: optimistic rollups impose a challenge window before withdrawals are finalised, creating liquidity risk. Liquidity providers offer fast bridges at a fee premium to paper over this UX gap.

- ### Provenance
  - sources:: L2Beat documentation, Ethereum EIPs repository, academic literature on payment channel networks and rollup constructions
  - updated:: 2026-06-13
