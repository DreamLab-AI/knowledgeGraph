
An Event Log is an append-only record of discrete events emitted by a system, used to capture state changes for auditing, indexing and downstream processing. On blockchains, smart contracts emit events that are written to transaction receipts and stored in the log structure of each block, where they can be efficiently queried by off-chain services. Event logs provide an immutable, ordered history that decentralised applications use to reconstruct state and trigger reactions.

- ### Overview
  - Event logs decouple producers of state changes from consumers that react to them. A smart contract emits an event with indexed and non-indexed parameters; the event is recorded in the transaction receipt and the block's logs. Indexing services and decentralised applications subscribe to or query these logs to build searchable views and trigger workflows, all while the underlying records remain immutable and ordered.
- ### Key aspects
  - **Append-only structure** — events are added in order and never modified.
  - **Event emission** — contracts log indexed and data parameters for querying.
  - **Immutability** — recorded events form a tamper-evident history.
  - **Indexing** — off-chain services build searchable views from logs.
  - **Reactivity** — applications subscribe to events to trigger workflows.
- ### Applications
  - Indexing on-chain activity for decentralised applications.
  - Auditing and compliance over immutable event histories.
  - Driving off-chain notifications and automation.
  - Reconstructing contract state from emitted events.
- ### Provenance

