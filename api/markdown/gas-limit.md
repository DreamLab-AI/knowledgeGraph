### Definition

A Gas Limit is the maximum amount of gas — the unit measuring computational effort — that a sender authorises for a blockchain transaction or that a block may contain in aggregate. It serves as a hard cap preventing unbounded resource consumption, protecting network nodes from denial-of-service attacks and ensuring predictable block processing times. On Ethereum, each transaction carries a user-set gas limit and each block carries a protocol-enforced block gas limit that validators adjust over time.

### Relationships

Gas Limit **requires** Blockchain Transaction (as the entity to which limits apply) and a Consensus Mechanism (to enforce block-level limits across all nodes). It **enables** Smart Contract Execution by bounding the computational cost of arbitrary code and contributes to Blockchain Scalability by controlling how many transactions fit in a block. It **depends on** Base Fee (EIP-1559's protocol-calculated per-unit cost) and the Fee Market (the broader mechanism that balances supply and demand for block space). Gas Limit is closely **related to** Gas Price (the per-unit fee multiplier), Transaction Fee (the product of gas used and gas price), MEV (miners/validators exploit gas ordering), Blockchain Economics (resource pricing signals), Validator Node (which proposes block gas limits), Mempool (where transactions queue waiting for inclusion), and Block Size (the byte-level analogue to gas-level resource caps). It **contrasts with** pure Proof of Work and Proof of Stake as those describe the sybil-resistance mechanism, whereas gas limit describes the resource-metering layer that sits above consensus.

### Content

Gas as a concept was introduced by Ethereum to decouple the cost of computation from the volatile market price of Ether. Every EVM opcode carries a fixed gas cost reflecting its relative computational and storage burden; the sum of opcode costs for a transaction must not exceed the sender's stated gas limit. If a transaction runs out of gas mid-execution, all state changes revert and the sender still pays for gas consumed — a design that discourages spam while preventing loss of miner/validator work.

The block gas limit governs throughput at the network layer. In Ethereum's pre-EIP-1559 model miners could vote to adjust the block gas limit by ±0.1% per block, giving a slow but responsive feedback loop between demand and capacity. EIP-1559, deployed in the London upgrade (2021), introduced a target block size of half the gas limit and a protocol-calculated base fee that rises when blocks are fuller than target, providing more predictable fees while preserving the outer block gas limit as an absolute cap.

The interaction between Gas Limit and the Fee Market is critical for Blockchain Economics. When network congestion is high, the Mempool fills with pending transactions and users raise gas prices (or priority fees post-EIP-1559) to increase the probability of inclusion. MEV actors, including block builders under proposer-builder separation, optimise transaction ordering within gas-limit constraints to capture arbitrage and liquidation revenue. Validator Nodes on proof-of-stake Ethereum now vote on the gas limit through a similar gradual-adjustment mechanism, balancing demand for block space against the hardware requirements of running full nodes.

Blockchain Scalability is directly constrained by block gas limits. Layer-2 solutions — optimistic rollups and ZK-rollups — batch many L2 transactions into a single L1 transaction that consumes a bounded amount of gas, effectively multiplying throughput without raising the L1 gas limit. Adjusting the gas limit involves a trade-off: higher limits increase throughput but raise the computational and storage burden on every Validator Node, risking centralisation as only high-performance nodes can keep up.

- ### Semantic Classification
  - owl-class:: blockchain:GasLimit
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z