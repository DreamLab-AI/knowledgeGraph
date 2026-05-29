- ### Definition
  An Output is a component of a blockchain transaction that specifies a recipient address and amount of value to be transferred, forming the fundamental unit through which cryptocurrency is allocated and ownership is recorded on a distributed ledger. In UTXO-based systems such as Bitcoin, unspent outputs serve as inputs to subsequent transactions, creating a directed graph of value flows secured by digital signatures.

- ### Relationships
  - partOf:: [[Blockchain Transaction]], [[Block]]
  - requires:: [[Address]], [[Digital Signature]]
  - uses:: [[Script]], [[Cryptographic Hash]]
  - enables:: [[Smart Contract]], [[Token Economics]]
  - relatedTo:: [[Blockchain Scalability]], [[Distributed Ledger Technology]], [[Audit Trail]]

- ### Content
  In UTXO-based blockchains, every transaction consumes one or more existing unspent transaction outputs (UTXOs) as inputs and produces one or more new outputs. Each output encodes a locking script (scriptPubKey in Bitcoin) that specifies the conditions under which the output can be spent—typically requiring a valid digital signature corresponding to the recipient address. The UTXO model's explicit accounting of unspent outputs enables efficient parallel validation and clear ownership semantics without requiring global state.

  Outputs are fundamental to the security model of distributed ledgers. The cryptographic binding between an output's locking script and the corresponding unlocking script presented in a spending transaction ensures that only the authorised holder of private key material can claim the value. This design eliminates double-spending without a central authority by making the entire UTXO set the canonical ownership ledger, verifiable by every full node.

  In account-model blockchains such as Ethereum, the output concept generalises to state transitions: a transaction specifies a recipient address and value, updating account balances in the world state. Smart contracts extend this further by allowing outputs to trigger arbitrary code execution, enabling programmable value transfer. The output therefore bridges simple cryptocurrency transfer and complex DeFi logic, making it a foundational primitive across blockchain architectures.

  Scalability considerations around outputs include UTXO set growth (each unspent output consumes node storage), output consolidation strategies, and the trade-offs between output granularity and transaction fee efficiency. Layer-2 protocols such as Lightning Network aggregate many off-chain value transfers into a single on-chain settlement output, dramatically increasing effective throughput while preserving the security guarantees of the base layer.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z