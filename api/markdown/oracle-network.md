- ### Definition
  - An oracle network is a decentralised infrastructure layer composed of independent node operators that collectively fetch, validate, aggregate, and deliver off-chain data—such as asset prices, weather readings, or event outcomes—to smart contracts executing on a blockchain. Because blockchains cannot natively access external information, oracle networks serve as the trusted bridge between on-chain logic and real-world state. Cryptoeconomic incentives and slashing conditions align node operators to report accurately, while aggregation mechanisms (median, TWAP) mitigate manipulation by individual nodes. Oracle networks underpin critical DeFi primitives including lending protocols, synthetic assets, insurance products, and real-world asset settlement.

- ### Semantic Classification
  - owl-class:: oracle-network:Oracle Network
  - owl-role:: Concept

- ### Relationships
  - supports [[Smart Contract Execution]]
  - supports [[Decentralised Finance]]
  - enables [[Price Oracle]]
  - relatedTo [[Blockchain Oracle]]
  - relatedTo [[Real-World Asset Tokenisation]]

- ### Content
  - Oracle networks solve the blockchain oracle problem: a deterministic blockchain ledger cannot natively make external HTTP requests or query off-chain databases, yet smart contracts frequently require real-world inputs—market prices, sports results, shipping confirmations, or IoT sensor readings—to execute their logic correctly. An oracle network distributes the data-fetching role across multiple independent nodes, aggregating their reports before committing a single canonical value on-chain, thereby preventing any single node from unilaterally manipulating the input.
  - Architecturally, an oracle network comprises off-chain node software that fetches data from premium APIs and exchanges, an aggregation contract that receives individual node reports and computes the median (or other robust statistic), and an on-chain consumer interface that downstream smart contracts query synchronously or subscribe to asynchronously. Economic security is enforced through node operator staking: malicious or negligent reporters lose a portion of their staked tokens through slashing, aligning incentives with accurate reporting.
  - Beyond price feeds, oracle networks are expanding into compute services: verifiable random function (VRF) outputs for provably fair randomness in gaming and NFT minting; cross-chain interoperability messaging; and proof-of-reserve attestations that verify custodian balances for asset-backed tokens. The trust model of an oracle network introduces assumptions beyond the base blockchain's consensus—evaluating the security of DeFi protocols therefore requires assessing both the smart contract code and the oracle network's economic and operational security properties.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z