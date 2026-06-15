- ### Definition
  - Payment routing determines the path value takes from payer to payee through intermediaries, drawing on [[Payment Processing]], [[Payment Channel]], [[Liquidity]] and a [[Routing Algorithm]].
  - In channel-based systems it finds a multi-hop route with sufficient capacity; in bank rails it selects acquirers and correspondents via the [[Payment Network]].

- ### Overview
  - Routing turns a payment intent into a concrete sequence of transfers. Each candidate path is evaluated for available liquidity, cumulative fees, expected success probability and latency.
  - In the [[Lightning Network]], source-based routing computes an onion-encrypted path so each hop learns only its predecessor and successor, preserving privacy.
  - In card and bank networks, routing chooses among schemes, acquirers and correspondent banks to optimise cost and authorisation rates.

- ### Mechanisms
  - Path-finding over a graph of channels or institutions, weighting edges by fee, capacity and reliability.
  - Atomic settlement through hash time-locked contracts ([[HTLC]]) so that either every hop completes or the whole payment reverts.
  - Fee estimation and budgeting, retrying alternative paths when a hop fails or lacks liquidity.
  - Maintenance of a [[Routing Table]] or gossip-propagated channel graph describing reachable peers.

- ### Applications
  - Off-chain micropayments and streaming payments over the [[Lightning Network]].
  - Least-cost routing across card schemes and acquirers in conventional [[Payment Processing]].
  - Cross-border value transfer and rail selection within [[Open Banking]] flows.
  - Liquidity-aware routing for payment service providers and [[Payment Gateway]] integrations.

- ### Relationships
  - subClassOf:: [[Payment Processing]]
  - partOf:: [[Payment Network]]
  - partOf:: [[Lightning Network]]
  - requires:: [[Liquidity]]
  - requires:: [[Routing Table]]
  - enables:: [[Payment Channel]]
  - enables:: [[Open Banking]]
  - dependsOn:: [[Routing Algorithm]]
  - implements:: [[HTLC]]
  - uses:: [[Payment Channel]]
  - uses:: [[Transaction Fee]]
  - supports:: [[Payment Gateway]]
  - contrastsWith:: [[Payment Gateway]]
  - bridgesTo:: [[Routing Algorithm]]
  - relatedTo:: [[Transaction Fee]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation