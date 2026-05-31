- ### Definition
  - The Lightning Network Daemon, a widely used implementation of a Bitcoin Lightning Network node that manages payment channels and routes off-chain payments.

- ### Semantic Classification
  - owl-class:: blockchain:LND
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Bitcoin]]
  - requires:: [[Lightning Network]], [[Payment Channel]]

- ### Content
  - LND is a complete implementation of a Lightning Network node. It opens and manages payment channels with peers, maintains channel state, routes payments across the network and exposes an API that wallets and applications can build on.
  - As one of the most widely deployed Lightning implementations, LND handles the cryptographic and networking machinery, including hash time-locked contracts, that allows Bitcoin payments to settle off chain quickly and cheaply while remaining anchored to the base layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z