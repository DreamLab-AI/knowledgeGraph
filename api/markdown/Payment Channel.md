public:: true
alias:: payment-channel

# Payment Channel
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-channel",
  "@type": "Page",
  "vc:slug": "payment-channel",
  "title": "Payment Channel",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-channel",
  "@type": "Class",
  "label": "Payment Channel",
  "definition": "A payment channel is a cryptographic construct that allows two or more parties to conduct multiple off-chain transactions by exchanging signed commitment messages, with only the channel-opening and channel-closing states recorded on a base-layer blockchain. Channels are secured by multisignature scripts, time-locked contracts, and mutual revocation mechanisms that ensure neither party can unilaterally broadcast a superseded state without penalty. By batching an unbounded number of value transfers into two on-chain transactions, payment channels achieve high throughput and negligible per-payment fees while inheriting the settlement finality and trustlessness of the underlying blockchain. They form the foundational primitive of routed payment networks such as the Lightning Network and of generalised state-channel protocols.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:off-chain-scaling", "label": "Off-Chain Scaling"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:commitment-transaction", "label": "Commitment Transaction"},
      {"@id": "urn:ngm:class:revocation-mechanism", "label": "Revocation Mechanism"},
      {"@id": "urn:ngm:class:funding-transaction", "label": "Funding Transaction"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:layer-2-solutions", "label": "Layer-2 Solutions"},
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:multisignature", "label": "Multisignature"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:micropayment", "label": "Micropayment"},
      {"@id": "urn:ngm:class:streaming-payment", "label": "Streaming Payment"},
      {"@id": "urn:ngm:class:payment-routing", "label": "Payment Routing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hash-time-locked-contract", "label": "Hash Time-Locked Contract"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:timelock", "label": "Timelock"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:on-chain-settlement", "label": "On-Chain Settlement"},
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:off-chain-scaling", "label": "Off-Chain Scaling"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:on-chain-transaction", "label": "On-Chain Transaction"},
      {"@id": "urn:ngm:class:rollup", "label": "Rollup"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-economy", "label": "Machine Economy"},
      {"@id": "urn:ngm:class:iot-payments", "label": "IoT Payments"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:settlement", "label": "Settlement"},
      {"@id": "urn:ngm:class:state-channel", "label": "State Channel"},
      {"@id": "urn:ngm:class:channel-factory", "label": "Channel Factory"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:bidirectional-payment-channel", "label": "Bidirectional Payment Channel"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A [[Payment Channel]] is an off-chain cryptographic construct that enables two parties to exchange an unlimited number of value transfers by passing signed [[Commitment Transaction]]s between themselves, with only the channel-open funding transaction and the final channel-close transaction broadcast to the base-layer [[Blockchain]]. The mechanism relies on [[Multisignature]] scripts, [[Timelock]]s, and a revocation scheme so that broadcasting a superseded state results in a penalty that awards all channel funds to the honest party. [[Hash Time-Locked Contract]]s extend the construct across multiple hops, forming the basis for routed networks such as the [[Lightning Network]] and enabling trustless [[Micropayment]]s and [[Streaming Payment]] flows that are economically impractical on-chain.

- ### Overview
  - Payment channels address the throughput and cost limitations of base-layer blockchains by moving the bulk of transaction activity off-chain while preserving trustlessness and on-chain [[Settlement]] finality.
  - The core insight is that two parties do not need to broadcast every state update to the network; they only need the ability to enforce the latest agreed state on-chain if a dispute arises.
  - This allows a channel to handle an arbitrary number of transfers at the cost of two on-chain transactions — one to open, one to close — and the blockchain merely acts as an arbitration layer of last resort.
  - The concept originated in Satoshi Nakamoto's original Bitcoin codebase, which included an unused nSequence field hinting at channel-like constructs. Unidirectional channels were formalised by Mike Hearn and others around 2013, and bidirectional channels were specified by Joseph Poon and Thaddeus Dryja in the 2015 Lightning Network white paper.
  - Generalised [[State Channel]] protocols (supporting arbitrary contract state beyond simple payments) were subsequently developed by the Counterfactual and Perun research groups from 2017 onwards.
  - Payment channels sit within the broader [[Layer-2 Solutions]] and [[Off-Chain Scaling]] taxonomy alongside [[Rollup]]s and validiums, but differ by requiring dedicated liquidity locked per channel pair rather than batching arbitrary transactions from many users.

- ### Key Components
  - **Funding Transaction**
    - An [[On-Chain Transaction]] that locks the agreed capital into a [[Multisignature]] output controlled jointly by both channel parties.
    - This is the only transaction that must be confirmed on-chain before the channel is usable.
  - **Commitment Transactions**
    - Off-chain, bilaterally signed transactions that encode the current balance distribution between the two parties.
    - Each new payment produces a new commitment transaction that supersedes all prior ones.
    - Only the most recent commitment should ever be broadcast; older commitments are invalidated by the revocation mechanism.
  - **Revocation Mechanism**
    - When a party issues a new commitment, they simultaneously revoke the previous one by revealing a secret (a revocation key or penalty key).
    - If the counterparty later broadcasts the revoked state, the other party can use the revocation key to sweep the entire channel balance as a penalty via a justice transaction.
    - This game-theoretic enforcement is the primary trust guarantee of bidirectional channels, removing the need for a trusted intermediary.
  - **Timelocks**
    - [[Timelock]]s (both absolute CheckLockTimeVerify and relative CheckSequenceVerify) enforce the dispute window during which a cheating party's old commitment can be challenged.
    - They also enable the construction of [[Hash Time-Locked Contract]]s for cross-hop routing.
  - **Hash Time-Locked Contracts (HTLCs)**
    - [[Hash Time-Locked Contract]]s conditionally route value across a chain of channels: payment is released only if the recipient reveals a preimage whose hash matches a commitment, within a time window.
    - HTLCs are the mechanism by which [[Payment Routing]] across a multi-hop [[Lightning Network]] is made atomic and trustless.
  - **Closing Transactions**
    - A cooperative close is the ideal path: both parties agree on final balances and broadcast a single settlement transaction immediately.
    - A unilateral close occurs when one party is unresponsive; the initiating party broadcasts their latest commitment and waits out the timelock dispute window before funds are released.

- ### Mechanisms
  - **Channel Lifecycle**
    - Open: fund the 2-of-2 multisig output on-chain and wait for confirmation.
    - Operate: exchange signed commitment transactions for each payment; no on-chain activity required.
    - Close (cooperative): co-sign a final transaction distributing balances; confirmed immediately.
    - Close (unilateral): broadcast latest commitment; counterparty has a dispute window to submit a revocation transaction if the broadcast was fraudulent.
  - **Routing and Onion Encryption**
    - The [[Lightning Network]] routes payments across channels using [[Onion Routing]] (SPHINX-based) so that intermediate routing nodes learn only their predecessor and successor, not the full payment path.
    - [[Payment Routing]] relies on source routing: the sender constructs the full path and onion-encrypts instructions for each hop.
  - **Channel Splicing**
    - Splicing allows funds to be added to or removed from a channel without closing and reopening it, reducing on-chain footprint and liquidity management overhead.
    - This is an active area of protocol development (BOLT specification work, 2023–2025).
  - **Channel Factories**
    - [[Channel Factory]] constructs allow multiple parties to open many channels from a single on-chain funding transaction, amortising the on-chain cost across a larger group and improving liquidity efficiency.
  - **Taproot Integration**
    - Taproot [[Digital Signature]] schemes (Schnorr + MAST) make channel funding outputs indistinguishable from ordinary single-key spends on-chain, improving privacy and reducing transaction size.

- ### Applications and Use Cases
  - **Retail and Consumer Micropayments**
    - Payment channels enable sub-cent transactions economically impossible on-chain, supporting content monetisation, pay-per-use APIs, and machine-to-machine [[Micropayment]]s.
  - **Streaming Payments**
    - [[Streaming Payment]] protocols (e.g. Lightning-based salary streaming, value-for-value podcast payments via the Podcasting 2.0 ecosystem) increment channel balances continuously in near real time.
  - **Machine Economy and IoT**
    - [[IoT Payments]] leverage channels for device-level microtransactions — electric vehicle charging, sensor data markets — where per-transaction fees must approach zero. This bridges blockchain finance to [[Distributed Collaboration]] and [[Infrastructure]] domains.
  - **Exchange and Settlement**
    - Exchanges use channels for rapid internal settlement between users, reducing on-chain congestion and custodial risk.
  - **Gaming and Interactive Applications**
    - [[State Channel]] generalisations allow arbitrary game state or contract state to be updated off-chain, enabling real-time on-chain gaming without per-move transaction fees.
  - **Decentralised Finance**
    - Channels are increasingly integrated with [[Decentralised Finance]] protocols to provide instant, fee-efficient liquidity bridging between on-chain and off-chain capital pools.
  - **Cross-Chain Atomic Swaps**
    - [[Atomic Swap]]s can be constructed using HTLCs across channels on different blockchains, enabling trustless cross-chain exchange without a centralised intermediary.

- ### Relationships
  - hasPart:: [[Commitment Transaction]]
  - hasPart:: [[Revocation Mechanism]]
  - hasPart:: [[Funding Transaction]]
  - partOf:: [[Layer-2 Solutions]]
  - partOf:: [[Lightning Network]]
  - requires:: [[Multisignature]]
  - requires:: [[Blockchain]]
  - requires:: [[Digital Signature]]
  - enables:: [[Micropayment]]
  - enables:: [[Streaming Payment]]
  - enables:: [[Payment Routing]]
  - uses:: [[Hash Time-Locked Contract]]
  - uses:: [[Smart Contract]]
  - uses:: [[Timelock]]
  - dependsOn:: [[On-Chain Settlement]]
  - dependsOn:: [[Cryptographic Hash Function]]
  - implements:: [[Off-Chain Scaling]]
  - supports:: [[Decentralised Finance]]
  - supports:: [[Peer-to-Peer Network]]
  - contrastsWith:: [[On-Chain Transaction]]
  - contrastsWith:: [[Rollup]]
  - bridges-to:: [[Machine Economy]]
  - bridges-to:: [[IoT Payments]]
  - relatedTo:: [[Settlement]]
  - relatedTo:: [[State Channel]]
  - relatedTo:: [[Channel Factory]]
  - relatedTo:: [[Atomic Swap]]

- ### Standards and Context
  - **BOLT Specifications (Basis of Lightning Technology)**
    - The Lightning Network is governed by the BOLT specification suite, which defines wire protocol messages, HTLC construction, channel establishment, onion routing, and gossip. BOLT 12 introduces offers (reusable, static payment codes), improving usability over BOLT 11 invoices.
  - **Bitcoin Improvement Proposals**
    - BIP 141 (SegWit) was a prerequisite for safe payment channels on Bitcoin by eliminating transaction malleability, which could have allowed channel counterparties to invalidate funding transactions. BIP 341/342 (Taproot/Tapscript) further enhance channel privacy and efficiency.
  - **Ethereum EIP Standards**
    - Ethereum state channels are supported by various EIPs and instantiated in frameworks such as Perun and Connext, adapted to the EVM's native [[Smart Contract]] capabilities.
  - **W3C Payment Request API**
    - While not channel-specific, the W3C Payment Request API provides a browser-level abstraction layer that Lightning wallets are increasingly integrating with for web-native payments.
  - **Regulatory Context**
    - Payment channels occupy a regulatory grey area in many jurisdictions: because intermediate balances are not settled on-chain, questions arise about money transmission licensing, record-keeping obligations, and AML/KYC requirements for routing nodes. The [[Governance]] landscape is actively evolving (EU MiCA, US FinCEN guidance).

- ### Provenance
  - sources:: Lightning Network white paper (Poon & Dryja, 2015); BOLT specification suite; Bitcoin Wiki; Perun state channels research; Counterfactual generalised state channels paper (Coleman et al., 2018)
  - updated:: 2026-06-13
