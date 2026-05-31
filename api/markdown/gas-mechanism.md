- ### Definition
  - The system in a blockchain such as Ethereum that meters and prices computation, requiring users to pay fees denominated in units of gas for the operations their transactions perform. It limits resource use and prioritises transactions.

- ### Semantic Classification
  - owl-class:: blockchain:GasMechanism
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Ethereum]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Ethereum Virtual Machine]]
  - enables:: [[Smart Contract]]

- ### Content
  - On Ethereum each operation in the virtual machine costs a defined amount of gas, and a transaction specifies a gas limit and a price it is willing to pay. The total fee equals gas used multiplied by the price, which compensates validators and bounds resource consumption.
  - The gas mechanism prevents infinite loops and denial-of-service by making computation costly, and fee dynamics such as the base fee introduced in EIP-1559 adjust pricing according to network demand.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z