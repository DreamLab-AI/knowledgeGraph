- ### Definition
  - In blockchain systems, a mechanism that brings external information onto the chain so that smart contracts can act on data they cannot observe directly. Oracles are the boundary between deterministic on-chain logic and the variable outside world.

- ### Semantic Classification
  - owl-class:: blockchain:Oracle
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Price Oracle]], [[Chainlink]]
  - requires:: [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - An oracle is the component that feeds off-chain data, such as asset prices, weather or event outcomes, into smart contracts. Since a blockchain is deterministic and isolated, it cannot fetch external data on its own, so the oracle performs that role.
  - Centralised oracles rely on a single trusted reporter, while decentralised oracle networks aggregate many sources and add economic penalties to discourage false reporting. Contract correctness depends heavily on the accuracy and tamper resistance of the oracle.

- ### Provenance
  - sources:: [[https://ethereum.org/en/developers/docs/oracles/]]
  - migration-date:: 2026-05-29T00:00:00Z