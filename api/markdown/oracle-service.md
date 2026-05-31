- ### Definition
  - A service that supplies external data to smart contracts, bridging the gap between on-chain logic and off-chain information such as prices, events or sensor readings. It provides the inputs that contracts cannot read directly from the blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:OracleService
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Price Oracle]]
  - bridges-to:: [[Chainlink]], [[Optimistic Oracle]]
  - requires:: [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An oracle service collects information from sources outside the blockchain and delivers it to smart contracts in a form they can act on. Because contracts cannot query the outside world themselves, the oracle is the trusted or decentralised channel for that data.
  - Designs range from single reporters to decentralised oracle networks that aggregate multiple sources and penalise incorrect reports. The reliability of contracts that depend on external data, such as lending and derivatives protocols, rests on the integrity of the oracle service.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/oracles/]]
  - migration-date:: 2026-05-29T00:00:00Z