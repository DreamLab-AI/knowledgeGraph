- ### Definition
  - A protocol that transfers assets or messages between separate ledgers by locking, burning, or attesting value on one chain and reproducing a representation on another.

- ### Semantic Classification
  - owl-class:: blockchain:Bridge
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Cross-Chain Bridge]], [[Cross-Chain Messaging]]
  - requires:: [[Smart Contract]]
  - enables:: [[Cross Chain Asset Transfer]]

- ### Content
  - A bridge connects otherwise isolated ledgers so that value or data can move between them. A common pattern locks an asset in a contract on the source chain and mints a corresponding representation on the destination chain, reversing the process when the asset returns.
  - Bridges differ in their trust assumptions, ranging from designs secured by external validator sets to those that rely on the consensus of the connected chains. Because they concentrate locked value and depend on the correctness of their attestation logic, bridges have been a frequent target of exploits, and their security model is a central design concern.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z