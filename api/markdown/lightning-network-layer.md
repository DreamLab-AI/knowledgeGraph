- ### Definition
  - The Lightning Network Layer is a second-layer stratum that enables fast, low-cost payments off the base settlement ledger through bidirectional payment channels. It sits above the Settlement Layer, on which it anchors and finally settles, and below the application and content strata that use instant payments. It contains payment channels, routing, and channel-state management.

- ### Semantic Classification
  - owl-class:: ln:LightningNetworkLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Payment Channel]], [[Hash Time-Locked Contract]]
  - requires:: [[Settlement Layer]]
  - enables:: [[Application Layer]], [[Content Layer]]

- ### Content
  - The Lightning Network Layer moves payments off-chain through channels so that transfers complete in milliseconds at negligible cost, settling to the base ledger only when channels open or close. Typical members include bidirectional payment channels, multi-hop routing, channel state and commitment management, and the dispute mechanisms that protect against stale states.
  - It requires the Settlement Layer as the anchor where channels are funded and final balances are recorded. It enables the Application and Content Layers that depend on instant micropayments, such as streaming and pay-per-use services.
  - The layer bridges to the payment channel and the hash time-locked contract, constructs that make trust-minimised off-chain routing possible. The security model here inherits finality from settlement while adding its own liveness and watchtower assumptions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z