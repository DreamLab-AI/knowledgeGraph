Transaction throughput is the rate at which a system processes and finalises transactions, commonly expressed as transactions per second, and is a primary measure of a blockchain network's capacity and scalability. It is shaped by block size, block interval, consensus mechanism, and execution efficiency, and it trades off against decentralisation and security in protocol design. Improving throughput is a central goal of layer-2 solutions and sharding.

### Overview

- Throughput captures how many [[Blockchain Transaction]] units a network can confirm in a given time window.
- In the blockchain trilemma, raising throughput often pressures decentralisation or security, forcing design trade-offs.
- Base-layer throughput is bounded by block size and block production rate; layer-2 designs offload work to raise effective capacity.
- Throughput is distinct from [[Latency]], which measures the time for a single transaction to confirm.

### Key aspects

- **Block parameters**: block size and interval set the base-layer ceiling.
- **Consensus efficiency**: the mechanism determines how fast blocks are agreed.
- **Parallelism**: sharding partitions work to scale horizontally.
- **Off-chain execution**: rollups and channels batch or move computation off the base layer.

### Applications

- Scaling payment and settlement networks.
- Supporting high-frequency decentralised applications.
- Benchmarking competing blockchain protocols.
- Sizing layer-2 and sharding strategies.

### Provenance

