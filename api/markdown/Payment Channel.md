A payment channel is a cryptographic construct that allows two or more parties to conduct multiple off-chain transactions by exchanging signed commitment messages, with only the channel-opening and channel-closing states recorded on a base-layer blockchain. Channels are secured by multisignature scripts, time-locked contracts, and mutual revocation mechanisms that ensure neither party can unilaterally broadcast a superseded state without penalty. By batching an unbounded number of value transfers into two on-chain transactions, payment channels achieve high throughput and negligible per-payment fees while inheriting the settlement finality and trustlessness of the underlying blockchain. They form the foundational primitive of routed payment networks such as the Lightning Network and of generalised state-channel protocols.

### Overview

- Payment channels address the throughput and cost limitations of base-layer blockchains by moving the bulk of transaction activity off-chain while preserving trustlessness and on-chain [[Settlement]] finality.
- The core insight is that two parties do not need to broadcast every state update to the network; they only need the ability to enforce the latest agreed state on-chain if a dispute arises.
- This allows a channel to handle an arbitrary number of transfers at the cost of two on-chain transactions — one to open, one to close — and the blockchain merely acts as an arbitration layer of last resort.
- The concept originated in Satoshi Nakamoto's original Bitcoin codebase, which included an unused nSequence field hinting at channel-like constructs. Unidirectional channels were formalised by Mike Hearn and others around 2013, and bidirectional channels were specified by Joseph Poon and Thaddeus Dryja in the 2015 Lightning Network white paper.
- Generalised [[State Channel]] protocols (supporting arbitrary contract state beyond simple payments) were subsequently developed by the Counterfactual and Perun research groups from 2017 onwards.
- Payment channels sit within the broader [[Layer-2 Solutions]] and [[Off-Chain Scaling]] taxonomy alongside [[Rollup]]s and validiums, but differ by requiring dedicated liquidity locked per channel pair rather than batching arbitrary transactions from many users.

### Key Components

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

### Mechanisms

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

### Applications and Use Cases

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

### Standards and Context

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

### Provenance

