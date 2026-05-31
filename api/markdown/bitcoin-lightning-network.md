- ### Definition
  - The Bitcoin Lightning Network is a layer-two payment protocol built on top of Bitcoin that enables fast, low-cost transactions through bidirectional payment channels. Two parties lock funds in a multisignature channel and exchange signed balance updates off-chain, settling the final state on the Bitcoin blockchain only when the channel closes. Payments can be routed across a network of connected channels, allowing transfers between parties that do not share a direct channel.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinLightningNetwork
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Payment Systems Domain]], [[Liquid Network]]
  - has-part:: [[Payment Channel]], [[HTLC]]
  - requires:: [[Bitcoin]], [[Multisignature]]
  - enables:: [[Micropayments]], [[Instant Settlement]]

- ### Content
  - The protocol addresses Bitcoin's limited base-layer throughput by moving most transactions off-chain. A payment channel is opened with an on-chain funding transaction, after which the parties can update their respective balances many times by exchanging signed transactions, none of which is broadcast until settlement.
  - Routing uses hashed time-locked contracts, which let a payment pass through intermediate nodes without those nodes being able to steal the funds. Each hop is conditioned on revealing a cryptographic secret within a time window, so either the whole path completes or the funds revert to their senders.
  - Lightning trades some of the base layer's strong settlement guarantees for speed and cost, introducing considerations such as channel liquidity, routing reliability and the need for nodes to remain online to defend against outdated channel states. It is the most widely deployed approach to scaling Bitcoin payments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z