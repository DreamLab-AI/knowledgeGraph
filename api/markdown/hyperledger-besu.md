- ### Definition
  - Enterprise-grade Ethereum client developed by [[Hyperledger Foundation]] supporting both public and private blockchain deployments with multiple consensus mechanisms—[[ProofOfWork]], [[ProofOfAuthority]], [[Practical Byzantine Fault Tolerance|PBFT]]. Besu provides full Ethereum compatibility whilst enabling permissioned networks through identity verification and privacy features like [[PrivateChannels]], making it suitable for enterprise consortia and regulatory compliance. The client integrates with [[Hyperledger Fabric]] and [[InterledgerProtocol]] for cross-chain interoperability.

- ### Semantic Classification
  - owl-class:: blockchain:HyperledgerBesu
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - implements:: [[ConsensusProtocol]] (domain: blockchain, type: consensus)
  - part-of:: [[HyperledgerFoundation]] (domain: blockchain, type: organization)
  - ### Original Content
		- ```
  # BC-0427: Hyperledger Besu

  #### Related Concepts
  - [[BC-0426-hyperledger-fabric]]
		  - [[BC-0428-enterprise-blockchain-architecture]]
		  - [[BC-0429-permissioned-blockchain]]
		  - [[BC-0431-privacy-preserving-blockchain]]

		  ## See Also
		  - [[BC-0001-blockchain]]
		  - [[BC-0142-smart-contract]]
		  - [[BC-0315-zero-knowledge-proof]]

		  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z