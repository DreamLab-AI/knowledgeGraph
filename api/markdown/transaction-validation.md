- ### Definition
  - Transaction validation is the process by which network participants check that a blockchain transaction conforms to the protocol rules before accepting it. It ensures only valid transactions enter the ledger.

- ### Semantic Classification
  - owl-class:: blockchain:TransactionValidation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Consensus]]
  - bridges-to:: [[Transaction]]
  - requires:: [[Cryptography]]
  - enables:: [[Bitcoin Network]]

- ### Content
  - Transaction validation checks that a transaction's signatures are correct, that it spends only existing and unspent outputs, and that it follows the protocol's consensus rules. Nodes reject transactions that fail any check.
  - Validation is performed independently by each full node, which is what allows a decentralised network to agree on a shared ledger without trusting a central party. Miners and validators include only valid transactions in the blocks they produce.

- ### Provenance
  - sources:: [[https://developer.bitcoin.org/devguide/transactions.html]], [[https://en.bitcoin.it/wiki/Protocol_rules]]
  - migration-date:: 2026-05-29T00:00:00Z