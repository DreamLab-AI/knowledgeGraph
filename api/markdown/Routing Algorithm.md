
A routing algorithm is a procedure that determines the path along which data, messages, or value should travel from a source to a destination across a network of interconnected nodes. It typically models the network as a graph and selects routes by optimising criteria such as shortest path, lowest cost, available capacity, or reliability, while adapting to changing topology and link state. In blockchain payment networks such as the Lightning Network, routing algorithms find viable multi-hop paths across payment channels, balancing fees, liquidity, and privacy through techniques like source routing and onion encryption.

- ### Overview
	- Routing turns a connectivity graph into concrete forwarding decisions under cost, capacity, and reliability constraints.
	- Algorithms differ in whether routes are computed at the source or hop-by-hop, and in how they react to topology change.
	- In blockchain channel networks, source routing with onion encryption preserves payer privacy while finding liquid paths.
	- Fee, liquidity, and timelock constraints make payment routing a constrained path-finding problem.
- ### Mechanisms
	- Graph models with weighted edges representing cost, latency, or fee.
	- Shortest-path and least-cost search such as Dijkstra and Bellman-Ford variants.
	- [[Gossip Protocol]] dissemination to share channel and link-state information.
	- [[Onion Routing]] layering to hide the full path from intermediate hops.
- ### Applications
	- Multi-hop payment routing across [[Payment Channel]] networks.
	- Internet and overlay packet forwarding.
	- Mesh and peer-to-peer message delivery.
	- Liquidity-aware path selection bridged to [[Hashed Timelock Contract]] settlement.
- ### Provenance

