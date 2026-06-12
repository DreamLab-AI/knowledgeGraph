- ### Definition
  - A protocol for issuing fungible tokens on Bitcoin that records token data within transaction outputs using the unspent transaction output model.

- ### Semantic Classification
  - owl-class:: blockchain:RunesProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token Standard]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[UTXO]]
  - enables:: [[Fungible Token]]

- ### Content
  - The Runes protocol encodes token issuance and transfers into Bitcoin transactions, attaching protocol messages that assign balances to outputs. It works with the unspent transaction output model rather than a separate account ledger.
  - Designed as a more efficient alternative to inscription-based token conventions, it aims to reduce the on-chain footprint of fungible tokens on Bitcoin while keeping balance tracking tied to spendable outputs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z