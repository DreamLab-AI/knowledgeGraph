- ### Definition
  - A Lightning Service Provider is a business that supplies channel liquidity and connectivity services to Lightning Network users. It helps wallets open channels and receive payments.

- ### Semantic Classification
  - owl-class:: blockchain:LightningServiceProvider
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Lightning Network]]
  - bridges-to:: [[Lightning Service Provider]]
  - requires:: [[Lightning]], [[Payment Channel]]
  - enables:: [[Phoenix]]

- ### Content
  - A Lightning Service Provider supplies inbound liquidity and channel management so that users, particularly on mobile wallets, can send and receive payments without operating their own routing infrastructure. It opens channels to users on demand.
  - These providers reduce the technical burden on end users by handling channel creation and liquidity provisioning, often for a fee. They form part of the infrastructure that makes Lightning practical for everyday wallets.

- ### Provenance
  - sources:: [[https://github.com/BitcoinAndLightningLayerSpecs/lsp]], [[https://docs.lightning.engineering]]
  - migration-date:: 2026-05-29T00:00:00Z