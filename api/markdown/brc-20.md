- ### Definition
  - An experimental token standard on Bitcoin that records fungible token operations as JSON inscriptions using ordinal theory.

- ### Semantic Classification
  - owl-class:: blockchain:BRC20
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token Standard]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Ordinals]]
  - enables:: [[Fungible Token]]

- ### Content
  - BRC-20 defines a convention for deploying, minting, and transferring fungible tokens by inscribing small JSON payloads onto satoshis. Balances are computed by off-chain indexers that read these inscriptions in order.
  - The standard relies entirely on the Ordinals inscription mechanism and carries no on-chain enforcement of supply rules, so token state depends on shared indexer interpretation rather than native Bitcoin validation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z