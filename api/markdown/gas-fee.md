- ### Definition
  - A gas fee is the payment a user makes to a blockchain network to have a transaction or smart contract operation executed and included in a block.

- ### Semantic Classification
  - owl-class:: blockchain:GasFee
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Transaction Fee]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Smart Contract]]

- ### Content
  - On Ethereum, gas measures the computational work required by an operation, and the gas fee is the gas amount multiplied by a price per unit of gas. Fees compensate validators and limit resource consumption by costly operations.
  - Following the EIP-1559 change, Ethereum fees consist of a base fee that is burned and an optional priority tip paid to validators, with the base fee adjusting according to network demand.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z