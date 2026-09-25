A Relay Network is a set of intermediary nodes that forward messages, transactions, or data between participants who are not directly connected, improving reach, latency, privacy, or censorship-resistance. Relays do not necessarily originate or consume the content they pass on; they propagate it across the topology so that information reaches its destination efficiently. In blockchain systems, relay networks accelerate block and transaction propagation and connect cross-chain messaging; in privacy systems such as Tor and Nostr, relays forward traffic to obscure origin or to disseminate events. Relay networks depend on robust routing, redundancy, and incentive or trust assumptions.

### Overview

- A relay network solves the connectivity problem in distributed systems: not every participant can or should connect directly to every other, so intermediary relays bridge the gaps and propagate information across the topology.
- Relays are agnostic to content in many designs — they forward rather than interpret — which is precisely what enables privacy systems (Tor, mix networks) and dissemination protocols (Nostr) to function.
- In blockchains, dedicated relay networks reduce block-propagation latency and orphan rates, while cross-chain relays carry attestations and messages between independent ledgers.

### Mechanisms

- Forwarding: relays receive and re-transmit data toward its destination without being the origin or terminus.
- Routing and topology: paths through the relay set are chosen for latency, redundancy, or anonymity.
- Gossip dissemination: epidemic propagation spreads transactions and blocks rapidly across the network.
- Trust and incentives: relays may be permissionless and incentivised, or trusted committees in cross-chain designs.

### Applications

- Accelerating block and transaction propagation in blockchain peer-to-peer networks.
- Anonymising traffic through onion-routing relay circuits in Tor.
- Disseminating signed events across the Nostr relay ecosystem.

### Provenance

