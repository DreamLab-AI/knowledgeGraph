
A routing table is a data structure, held in a router, switch or networked host, that stores the mappings between destination network addresses and the next hop or outgoing interface used to forward packets toward them. Each entry typically records a destination prefix, a next-hop address, an interface, and a metric or administrative cost used to select among competing routes. Routing tables are populated by static configuration and by dynamic routing protocols, and are consulted on every forwarding decision.

- ### Overview
  - The routing table is the forwarding brain of any router or routed host. When a packet arrives, the router extracts the destination address and performs a longest-prefix match against the table to choose the most specific applicable entry.
  - In overlay and peer-to-peer systems, an analogous structure maps node identifiers to contact information, allowing a request to be routed toward a key's responsible node in a logarithmic number of hops.
  - The same conceptual mechanism — a lookup keyed by destination that yields a next hop — recurs across IP networks, blockchain gossip layers, and content-addressed storage.
- ### Key aspects
  - Entry structure: destination prefix, next-hop address, outgoing interface, metric and route source.
  - Longest-prefix matching: selection of the most specific matching route rather than the first match.
  - Population sources: directly connected routes, static routes, and dynamically learned routes from a [[Routing Protocol]].
  - Convergence: the process by which all tables in a network reach a consistent view after a topology change.
  - Scale: forwarding tables in core routers may hold hundreds of thousands of entries, demanding efficient lookup structures such as tries.
- ### Mechanisms
  - Static configuration writes fixed entries that never expire unless removed by an operator.
  - Dynamic routing protocols exchange reachability information and recompute entries as links rise and fall.
  - The control plane computes the routing information base while the data plane uses a compiled forwarding information base for line-rate lookup.
  - Overlay routing tables in a [[Kademlia DHT]] organise contacts into buckets by XOR distance to bound lookup latency.
- ### Applications
  - Internet packet forwarding across routers and layer-3 switches.
  - Overlay routing in peer-to-peer and content-addressed networks.
  - Next-hop selection in [[Payment Routing]] graphs and blockchain relay layers.
  - Path selection within [[Distributed Systems]] service meshes and load balancers.
- ### Provenance

