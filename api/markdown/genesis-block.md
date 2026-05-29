### Definition

The genesis block is the first block in a [[Blockchain]], hardcoded into client software and serving as the immutable anchor from which the entire chain descends. It establishes the initial chain state, encodes the founding parameters of the network, and contains no reference to a previous block hash. Because it cannot be altered without invalidating all subsequent blocks, the genesis block is the ultimate root of trust for the [[Distributed Ledger]].

### Relationships

The genesis block is a structural component (`partOf`) both [[Blockchain]] and [[Distributed Ledger]]. It compositionally contains (`hasPart`) a [[Block Header]], [[Merkle Root]], [[Timestamp]], [[Nonce]], and a [[Coinbase Transaction]] — the special first transaction awarding the initial block reward. Its structural integrity `requires` [[Cryptographic Hash]] functions and the property of [[Immutability]]. The existence of a valid genesis block `enables` the bootstrapping of a [[Blockchain Network]] and defines block zero for [[Block Height]] accounting. It is governed by the network's [[Consensus Mechanism]] and [[Blockchain Protocol]], and its internal data structure is organised around a [[Merkle Tree]].

### Content

The genesis block occupies a unique position in blockchain architecture: it is the only block that has no parent. Every other block in the chain references the hash of its predecessor, creating the chain of custody that gives blockchains their tamper-evident property. The genesis block instead carries a zero or null value in its "previous hash" field, making it self-referential and defining the chain's starting height of zero.

In Bitcoin, the genesis block (block 0) was mined by Satoshi Nakamoto on 3 January 2009. It famously embeds a newspaper headline in its coinbase transaction — "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" — providing an unforgeable timestamp proof and a statement of intent about the motivation for the technology. Its [[Block Reward]] of 50 BTC is permanently unspendable due to an anomaly in how the coinbase transaction was encoded, making it one of the few supply-reducing artefacts in Bitcoin history.

From a protocol standpoint, the genesis block hardcodes the initial [[Difficulty]] target and any network-specific configuration parameters. When a node first connects to a network, it verifies incoming blocks by tracing the chain back to the genesis block hash embedded in its software. A different genesis block hash means a different network entirely — this is why Bitcoin and Bitcoin Cash, despite sharing history up to a point, are fundamentally separate chains. The genesis block thus functions as a species identifier for the chain.

In proof-of-work systems the genesis block's [[Nonce]] and [[Timestamp]] establish the baseline from which the [[Difficulty Adjustment]] algorithm begins operating. In proof-of-stake and other consensus families the genesis block additionally may record initial validator allocations and staking parameters. Regardless of consensus mechanism, the genesis block's immutability is guaranteed by the same [[Cryptographic Hash Function]] that secures all subsequent blocks — any retroactive modification produces a hash mismatch that the [[Blockchain Network]] immediately rejects.

### Provenance
- sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
- migration-date:: 2026-04-26T00:00:00Z