- ### Definition
  - A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable [[Consensus Mechanism|consensus mechanisms]], enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Permissioned blockchains implement access control at multiple layers—node permissioning restricting which organisations participate, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential subsets of participants to conduct transactions invisibly to others—deployed extensively in enterprise contexts including [[Hyperledger Fabric]], [[Quorum Blockchain]], and [[R3 Corda]] supporting supply chain, trade finance, healthcare, and financial services applications.

- ### Semantic Classification
  - owl-class:: blockchain:PermissionedBlockchain
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - requires:: [[BC-0120-consensus-mechanism]]

- ### Content
  - Restricted-access distributed ledgers controlled by known participants implementing access control at multiple layers—node permissioning restricting participant organisations, account permissioning controlling transaction submission, and [[PrivateChannels]] enabling confidential transaction subsets. Permissioned blockchains maintain blockchain's immutability, transparency, and [[SmartContract]] capabilities whilst enabling regulatory compliance and business confidentiality unsuitable for public networks, deployed across enterprise contexts including [[HyperledgerFabric]], [[QuorumBlockchain]], and [[R3Corda]] supporting supply chain, trade finance, healthcare, and financial services.
  - ### Original Content
		- ```
  # BC-0429: Permissioned Blockchain

  #### Related Concepts
  - [[BC-0426-hyperledger-fabric]]
		  - [[BC-0427-hyperledger-besu]]
		  - [[BC-0428-enterprise-blockchain-architecture]]
		  - [[BC-0430-private-channels]]

		  ## See Also
		  - [[BC-0001-blockchain]]
		  - [[BC-0120-consensus-mechanism]]
		  - [[BC-0245-proof-of-authority]]

		  ```

    - requires:: [[BC-0120-consensus-mechanism]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z