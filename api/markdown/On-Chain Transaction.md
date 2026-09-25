An on-chain transaction is a value or state transfer that is broadcast to a blockchain network, validated by consensus, and permanently recorded in a block on the shared ledger. Because settlement occurs through the network's consensus mechanism, on-chain transactions inherit the chain's security, immutability, and public verifiability, but also its latency, throughput limits, and fee costs. They contrast with off-chain and layer-two approaches that defer or aggregate ledger updates to improve scalability.

### Overview

- The transaction is signed by the sender, propagated to peers, and held in the [[Mempool]] until a validator includes it in a block.
- Once mined or attested, it consumes [[Gas]] or fees and contributes to the chain's settlement guarantees.
- [[Finality]] determines when the transaction is considered irreversible.

### Mechanisms

- Construct and sign the transaction with the sender's private key.
- Broadcast to the peer-to-peer network and enter the [[Mempool]].
- Validators order and include it in a [[Block]] subject to [[Consensus]].
- The state transition is applied to the shared [[Ledger]] and replicated to all nodes.

### Applications

- Native asset transfers on [[Bitcoin]] and [[Ethereum]].
- Deploying and invoking a [[Smart Contract]] whose effects must be globally verifiable.
- Final [[Settlement]] of value where trust-minimised guarantees are required.

### Provenance

