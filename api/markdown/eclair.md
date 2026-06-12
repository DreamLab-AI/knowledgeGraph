- ### Definition
  - Eclair is an implementation of the Bitcoin Lightning Network protocol written in Scala and maintained by ACINQ.

- ### Semantic Classification
  - owl-class:: blockchain:Eclair
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Bitcoin Proof-of-Work Protocol]]
  - requires:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - Eclair implements the Lightning Network specification, managing payment channels, routing, and gossip between nodes. It is developed by ACINQ and powers the company's Phoenix mobile wallet.
  - Along with implementations such as Core Lightning and LND, Eclair must follow the shared BOLT specifications so that nodes from different implementations can open channels and route payments with one another.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z