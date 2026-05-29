### Definition

Gas Price is the amount of cryptocurrency (denominated in gwei on Ethereum) that a transaction sender is willing to pay per unit of gas consumed during execution. It serves as the primary market mechanism for prioritising transactions within a block and compensating validators or miners for computational work. Gas price interacts with the gas limit and base fee to determine total transaction cost, and is subject to dynamic adjustment under fee-market protocols such as EIP-1559.

### Relationships

Gas Price **hasPart** [[Base Fee]] and [[Priority Fee]], the two components that constitute a gas price bid under EIP-1559. It **requires** [[Gas]] (the unit of computational work), [[Gas Limit]] (the maximum units a transaction may consume), and [[Transaction]] (the carrier object). Gas Price **enables** the [[Fee Market]] that governs block inclusion ordering and **enables** [[Smart Contract]] execution by funding the EVM's computational steps. It **dependsOn** [[Blockchain]] (the execution environment) and [[Mempool]] (the pending-transaction pool where gas-price competition takes place). It is **relatedTo** [[EIP-1559]] (the fee-reform protocol), [[Miner]] (recipient of fees under PoW), [[Transaction Fee]] (the total payment derived from gas price × gas used), [[Token Economics]], [[Proof Of Work]], [[Proof of Stake]], and [[Mechanism Design]].

### Content

Gas Price emerged as the primary resource-allocation instrument for smart-contract platforms. On Ethereum, every byte of bytecode interpretation and every arithmetic operation performed by the EVM consumes a defined number of gas units; the gas price converts that unit count into a monetary cost paid in ether. Early Ethereum used a simple first-price auction: senders set their own gas prices and miners selected the highest-paying transactions. This created volatile and often unpredictable fee dynamics, particularly during periods of network congestion.

EIP-1559, activated in the London hard fork (August 2021), restructured the gas-price mechanism by splitting it into a protocol-determined [[Base Fee]] and an optional [[Priority Fee]] (tip). The base fee is burned, removing ether from circulation and creating deflationary pressure during high-activity periods. The priority fee goes to the block proposer as an incentive. Senders specify a max-fee-per-gas cap; any difference between the cap and the base fee plus tip is refunded, simplifying cost estimation significantly.

Gas price acts as a real-time signal of demand for blockspace. When the [[Mempool]] is congested, senders raise their gas prices to ensure timely inclusion; when demand drops, prices fall toward the base fee. This feedback loop influences user behaviour, DeFi protocol design, layer-2 scaling decisions, and validator economics under both [[Proof Of Work]] and [[Proof of Stake]] consensus. Layer-2 solutions such as [[Layer2]] rollups batch transactions to amortise gas costs, reducing the effective gas price per user operation.

Understanding gas price is foundational to [[Token Economics]] and [[Mechanism Design]] in blockchain systems. Protocols must balance miner/validator incentives, user affordability, and Sybil resistance when designing fee models. Gas-price dynamics also affect smart-contract design: gas-expensive operations may be restructured or moved off-chain, and protocols must account for worst-case gas costs in security audits and formal analyses.

### Provenance
- sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
- migration-date:: 2026-04-26T00:00:00Z