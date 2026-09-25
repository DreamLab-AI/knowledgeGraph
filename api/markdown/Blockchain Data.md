Blockchain Data refers to the structured information stored on a distributed ledger, comprising transaction records, state data, smart contract bytecode, event logs, and cryptographic proofs organised into immutable, hash-linked blocks. It is characterised by append-only semantics, cryptographic integrity, and public verifiability. The data model differs fundamentally from traditional databases in that history cannot be altered without recomputing the entire subsequent chain.

### Overview

- Unlike relational databases, blockchain data is append-only: once committed and confirmed by [[Consensus Mechanism]], records cannot be deleted or altered.
- State is represented differently across platforms: Ethereum uses an account/state-trie model; Bitcoin uses an unspent transaction output (UTXO) model.
- On-chain storage is expensive; many systems keep hashes on-chain and bulk data off-chain via IPFS or similar.

### Key Aspects

- **Block structure**: Header (previous hash, nonce, timestamp, Merkle root) + transaction list.
- **State model**: Account-based vs UTXO.
- **Event logs**: Smart contract emissions queryable via Bloom filters.
- **Indexing**: The Graph Protocol and similar indexers make blockchain data queryable at scale.

### Mechanisms

- [[Merkle Tree]] structures allow efficient and tamper-evident verification of inclusion of any transaction.
- Light clients download only block headers and verify proofs, reducing storage requirements.
- Archival nodes store the full history; pruned nodes retain only recent state.

### Applications

- DeFi protocols use blockchain data to determine token balances and liquidity positions.
- Supply chain systems anchor provenance records for physical goods on-chain.
- Identity systems use on-chain data to verify credential issuance.

### Provenance

