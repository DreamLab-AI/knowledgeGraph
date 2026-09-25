An overlay network is a logical network built on top of an existing physical or underlay network, where nodes are connected by virtual links that may each traverse many underlying hops. By abstracting away the physical topology, overlays implement custom routing, addressing and services such as peer-to-peer file sharing, content delivery and encrypted tunnelling. They trade some efficiency for flexibility, resilience and the ability to deploy new network behaviour without changing the underlay.

### Overview

- The underlay (typically the Internet) provides basic packet delivery; the overlay defines a richer structure of nodes and virtual links on top.
- Because the overlay lives largely at the [[Application Layer]], new network behaviour can be deployed by updating software rather than hardware.
- This flexibility comes at a cost: an overlay link mapped onto a long physical path can add latency and duplicate traffic versus native routing.
- Overlays are central to [[Distributed Systems]] that need self-organising, fault-tolerant connectivity across administrative boundaries.

### Key aspects

- **Logical topology** — nodes choose their own neighbours, forming structures (rings, trees, meshes) tuned to the application.
- **Custom routing** — the overlay implements its own forwarding logic, independent of underlay routing tables.
- **Resilience** — redundant virtual paths let overlays route around failures and censorship in the underlay.
- **Service deployment** — caching, anonymity, multicast and pub/sub can be added without ISP cooperation.
- **Self-organisation** — protocols such as a [[Distributed Hash Table]] let nodes locate data and peers without central coordination.

### Mechanisms

- Structured overlays use a [[Distributed Hash Table]] to map keys to responsible nodes deterministically.
- Unstructured overlays rely on gossip and flooding to discover peers and resources.
- Tunnelling protocols carry overlay traffic inside underlay packets, optionally with [[Encryption]] for confidentiality.
- Bootstrap nodes and peer-discovery mechanisms help new participants join the overlay.

### Applications

- [[Peer-to-Peer Network]] file sharing and decentralised storage.
- [[Content Delivery Network]] meshes that distribute and cache popular content close to users.
- Virtual private networks and encrypted overlays that secure traffic across untrusted underlays.
- Blockchain and distributed-ledger gossip layers that propagate transactions and blocks.

### Provenance

