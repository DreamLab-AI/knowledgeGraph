Transaction propagation is the process by which a newly broadcast transaction spreads across a peer-to-peer blockchain network from its originating node to the rest of the participants. Nodes relay valid transactions to their peers using a gossip protocol, typically announcing availability before transferring full data, so that the transaction reaches miners and validators for inclusion in a block while resisting spam through validation and fee policies.

- [[Transaction Propagation]] is how a broadcast transaction spreads across a [[Peer-to-Peer Network]]. Nodes relay valid transactions via a [[Gossip Protocol]], populating each [[Node]]'s [[Mempool]] until the transaction reaches miners for inclusion.

### Overview

- When a wallet broadcasts a transaction, it submits it to one or a few connected nodes. Those nodes validate it and forward it onward, so that within seconds it floods most of the network without any central coordinator.
- Efficient propagation matters for confirmation latency and fairness: faster, wider spread gives a transaction more chance of timely inclusion and reduces the advantage of privileged network positions.

### Mechanisms

- A node announces a transaction identifier to peers, who request the full data only if they have not seen it, reducing redundant bandwidth.
- Each relaying node re-validates the transaction against consensus and policy rules before forwarding.
- Fee and standardness policies, plus mempool limits, throttle spam and prioritise economically rational transactions.
- Network topology and peer selection shape how quickly the transaction reaches the wider graph.

### Applications

- Delivering user transactions to miners across [[Bitcoin]]-style networks.
- Maintaining a consistent [[Mempool]] view among nodes.
- Studying network health and censorship resistance via propagation metrics.

### Provenance

