- ### Definition
  - Permissioned blockchain framework enabling enterprise consortia to build modular, confidential systems through [[PrivateChannels]], [[SmartContract|chaincode]], and pluggable consensus mechanisms. Fabric implements execute-order-validate architecture enabling [[PrivateChannels]] where subsets of members conduct transactions invisibly to others, and supports multiple consensus options—{{Raft}}, [[PracticalByzantineFaultTolerance|PBFT]], custom implementations—adapted to consortium requirements. Unlike [[PublicBlockchain|public blockchains]], Fabric uses member certificate authorities for identity validation and [[AccessControl]] policies governing permission boundaries.

- ### Semantic Classification
  - owl-class:: blockchain:HyperledgerFabric
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - uses:: [[PrivateChannels]] (domain: blockchain, type: confidentiality)
  - part-of:: [[HyperledgerFoundation]] (domain: blockchain, type: organization)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z