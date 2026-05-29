- ### Definition
  - A mechanism enabling time-limited usage rights to digital assets in the metaverse without transferring ownership, implemented through smart contracts that separate user roles from owner roles with automatic expiration.

- ### Semantic Classification
  - owl-class:: spatial-computing:TemporaryAssetAccess
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Asset Management]]
  - Implements [[NFT Renting]]
  - Implements [[Digital Asset Lending]]
  - Requires [[Smart Contract]]
  - Requires [[NFT Standard]]
  - Uses [[NFT]]
  - Related to [[NFT Marketplace]]

- ### Content

  - ## Overview
  - NFT rental markets allow owners to grant temporary usage rights to another party for a specified period under predetermined terms. Smart contracts on blockchain platforms autonomously execute and manage these rental agreements, enabling passive income for owners while providing affordable access for renters.
  - ## Technical Details
  - ### ERC-4907 Standard
		- Creates distinct "user role" separate from "owner role"
		- Enables temporary transfer of usage rights while maintaining ownership
		- Includes automatic expiration of access rights
		- Ideal for subscription or rental models
  - ### Rental Platforms
		- **reNFT**: In-game assets, virtual land, event tickets, digital clothing
		- **Double Protocol**: Cross-chain NFT rentals for Decentraland and The Sandbox
		- **LandVault**: Virtual land rental for commercial purposes
		- **Decentraland**: Native virtual landlord feature for property rentals
  - ### Use Cases
		- Virtual land rental for events or pop-up shops
		- In-game asset borrowing for specific quests
		- Digital fashion rental for virtual meetings
		- Art exhibition temporary access
  - ## Applications
  - Virtual real estate rental in metaverse platforms
  - Gaming asset lending for competitive play
  - Short-term access to premium digital collectibles
  - Event space leasing in virtual worlds
  - Advertising space rental on virtual billboards

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z