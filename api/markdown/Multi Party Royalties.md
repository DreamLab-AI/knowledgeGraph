- ### OntologyBlock
  id:: multi-party-royalties-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9975
	- source-domain:: mv
	- preferred-term:: Multi Party Royalties
	- status:: active
	- definition:: A blockchain-based revenue distribution mechanism that uses smart contracts to automatically split and distribute royalty payments among multiple stakeholders including creators, collaborators, developers, and brands based on predefined ownership percentages.
	- owl:class:: mv:MultiPartyRoyalties
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: multi-party-royalties-relationships
	  collapsed:: true
		- is-subclass-of:: [[Revenue Sharing]]
		- related-to:: [[NFT Royalties]]
		- related-to:: [[Smart Contracts]]
		- enables:: [[Creator Economy]]
	- #### Technical Details
	  collapsed:: true
		- Implemented through split contracts that execute automatic distribution
		- Uses ERC-2981 royalty standard for marketplace compatibility
		- Supports platforms including Ethereum, Solana, and Polygon
		- Typical royalty rates range from 2.5% to 10% on secondary sales
		- Tracks sales figures, calculates fees, and monitors compliance
	- #### Challenges
	  collapsed:: true
		- Lack of universal royalty enforcement across marketplaces
		- Some platforms have moved to royalty-optional models
		- Cross-platform royalty parameter inconsistency
		- Interoperability issues when NFTs transfer between platforms

