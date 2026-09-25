Payment routing is the process of determining a viable path along which value moves from a payer to a payee across one or more intermediaries, payment channels or networks. In layered payment systems such as the Lightning Network it involves finding a sequence of hops with sufficient liquidity and acceptable fees, whereas in conventional rails it selects acquirers, schemes or correspondent banks. Routing decisions balance cost, success probability, latency and privacy.

### Overview

- Routing turns a payment intent into a concrete sequence of transfers. Each candidate path is evaluated for available liquidity, cumulative fees, expected success probability and latency.
- In the [[Lightning Network]], source-based routing computes an onion-encrypted path so each hop learns only its predecessor and successor, preserving privacy.
- In card and bank networks, routing chooses among schemes, acquirers and correspondent banks to optimise cost and authorisation rates.

### Mechanisms

- Path-finding over a graph of channels or institutions, weighting edges by fee, capacity and reliability.
- Atomic settlement through hash time-locked contracts ([[HTLC]]) so that either every hop completes or the whole payment reverts.
- Fee estimation and budgeting, retrying alternative paths when a hop fails or lacks liquidity.
- Maintenance of a [[Routing Table]] or gossip-propagated channel graph describing reachable peers.

### Applications

- Off-chain micropayments and streaming payments over the [[Lightning Network]].
- Least-cost routing across card schemes and acquirers in conventional [[Payment Processing]].
- Cross-border value transfer and rail selection within [[Open Banking]] flows.
- Liquidity-aware routing for payment service providers and [[Payment Gateway]] integrations.

### Provenance

