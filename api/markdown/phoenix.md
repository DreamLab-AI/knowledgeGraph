- ### Definition
  - Phoenix is a self-custodial Bitcoin Lightning wallet developed by ACINQ that manages channels automatically on behalf of the user. It is available as a mobile application.

- ### Semantic Classification
  - owl-class:: blockchain:Phoenix
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Wallet]]
  - bridges-to:: [[Lightning Service Provider]]
  - requires:: [[Lightning]]
  - enables:: [[BOLT12]]

- ### Content
  - Phoenix is a Lightning wallet that handles channel management for the user, opening and adjusting channels as needed so that payments work without manual configuration. Users hold their own keys, keeping the wallet self-custodial.
  - The wallet is built by ACINQ, which also develops a Lightning implementation, and it supports newer features of the protocol. It targets ease of use for people sending and receiving Lightning payments on a phone.

- ### Provenance
  - sources:: [[https://phoenix.acinq.co]], [[https://github.com/ACINQ/phoenix]]
  - migration-date:: 2026-05-29T00:00:00Z