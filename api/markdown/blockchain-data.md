- ### Definition
  - [[Blockchain Data]] is the structured information persisted on a [[Distributed Ledger]], organised into cryptographically linked blocks with [[Immutability]] guarantees.
  - Each block contains a set of [[Transaction]] records, a reference to the previous block's [[Cryptographic Hash]], and metadata including timestamps.
  - The data model supports [[Data Provenance]] and enables [[Audit Trail]] functions critical to finance, supply chain, and identity domains.

- ### Overview
  - Unlike relational databases, blockchain data is append-only: once committed and confirmed by [[Consensus Mechanism]], records cannot be deleted or altered.
  - State is represented differently across platforms: Ethereum uses an account/state-trie model; Bitcoin uses an unspent transaction output (UTXO) model.
  - On-chain storage is expensive; many systems keep hashes on-chain and bulk data off-chain via IPFS or similar.

- ### Key Aspects
  - **Block structure**: Header (previous hash, nonce, timestamp, Merkle root) + transaction list.
  - **State model**: Account-based vs UTXO.
  - **Event logs**: Smart contract emissions queryable via Bloom filters.
  - **Indexing**: The Graph Protocol and similar indexers make blockchain data queryable at scale.

- ### Mechanisms
  - [[Merkle Tree]] structures allow efficient and tamper-evident verification of inclusion of any transaction.
  - Light clients download only block headers and verify proofs, reducing storage requirements.
  - Archival nodes store the full history; pruned nodes retain only recent state.

- ### Applications
  - DeFi protocols use blockchain data to determine token balances and liquidity positions.
  - Supply chain systems anchor provenance records for physical goods on-chain.
  - Identity systems use on-chain data to verify credential issuance.

- ### Relationships
  - requires:: [[Cryptographic Hash]]
  - requires:: [[Distributed Ledger]]
  - supports:: [[Smart Contract]]
  - supports:: [[Data Provenance]]
  - relatedTo:: [[Data]]
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Immutability]]
  - hasPart:: [[Merkle Tree]]
  - hasPart:: [[Transaction]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - enables:: [[Audit Trail]]
  - enables:: [[Tokenisation]]
  - contrastsWith:: [[Centralised Database]]
  - bridgesTo:: [[Data Analytics]]

- ### Provenance
  - updated:: 2026-06-15