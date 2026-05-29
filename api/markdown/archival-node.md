- ### Definition
  An Archival Node is a blockchain network participant that stores the complete historical state of the ledger—every block, transaction, and state root from genesis to the current tip—without pruning older data. Unlike pruned nodes or light nodes, an archival node can respond to queries about any historical state at any block height, making it essential for block explorers, analytics services, and smart contract developers who need point-in-time state access.

- ### Semantic Classification
  - owl-class:: blockchain:ArchivalNode
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - contrastsWith:: [[Light Node]], [[Pruned Node]]
  - relatedTo:: [[Full Node]], [[Chain State]], [[Blockchain Network]], [[Blockchain Infrastructure]]
  - requires:: [[Blockchain Protocol]], [[Peer-to-Peer Network]]
  - enables:: [[Blockchain Transaction]], [[Blockchain Compliance]], [[Long Term Archival]]
  - supports:: [[State Machine Replication]]

- ### Content
  An Archival Node retains the full history of a blockchain from the genesis block to the present, including every intermediate state trie snapshot. On account-based chains such as Ethereum, this means the node can reconstruct the complete world state—all account balances, contract storage slots, and code hashes—at any historical block number. This capability is essential for decentralised applications that invoke eth_call or debug_traceTransaction at historical heights, and for analytics platforms that compute metrics retroactively.

  The operational cost of running an archival node is significantly higher than a full (pruned) node. Storage requirements scale with the full history of the chain: Ethereum's archival state exceeded several terabytes by 2024, requiring high-capacity NVMe storage arrays. Synchronisation from genesis using the default fast-sync or snap-sync modes does not produce an archival node; operators must use full archive sync modes or restore from purpose-built archival snapshots. Bandwidth and I/O throughput are also bottlenecks during initial sync and during state query peaks.

  Archival nodes are a critical piece of blockchain infrastructure despite their operational cost. Block explorers (Etherscan, Subscan), DeFi analytics platforms, MEV searchers that replay historical blocks, and smart contract security auditors that need to reproduce past execution traces all depend on archival nodes as their data source. In enterprise blockchain deployments, archival nodes serve compliance and audit functions by providing immutable, queryable records of all historical transactions and state transitions.

  The distinction between archival nodes and full nodes is architectural: a full (pruned) node validates new blocks and maintains the current state trie but discards historical state data beyond a configurable lookback window. This pruning reduces storage requirements by orders of magnitude but prevents historical state queries. Hybrid approaches such as partial archive nodes retain archival state only for a trailing window (e.g., the last 128 blocks on Ethereum), balancing storage costs against the most common historical query patterns.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z