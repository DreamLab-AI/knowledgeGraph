- ### Definition
  - Asset tokenisation is the process of creating a blockchain-based digital token that represents a legally binding claim to ownership, revenue rights, or access rights in an underlying real-world or digital asset — such as real estate, private equity, bonds, commodities, or intellectual property. By encoding ownership on a programmable ledger, tokenisation enables fractional ownership at low minimum investment thresholds, continuous secondary trading, automated compliance through smart contract logic, and global settlement without traditional intermediaries. It sits at the convergence of financial regulation, smart contract engineering, and digital asset infrastructure.

- ### Semantic Classification
  - owl-class:: asset-tokenisation:Asset Tokenisation
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contracts]]
  - uses [[Digital Asset]]
  - relatedTo [[Real-World Asset Tokenisation]]
  - relatedTo [[Token Standard]]
  - requires [[Regulatory Compliance]]

- ### Content
  - Tokenisation involves three layers. The legal layer establishes the off-chain relationship between the token and the underlying asset: a special-purpose vehicle (SPV) typically holds the real asset, and the tokens represent shares in the SPV with enforceable rights defined in a legal agreement that must comply with securities regulation in the relevant jurisdiction. This is the most complex layer, as securities law varies significantly across countries and determines who may hold tokens and under what conditions.
  - The technical layer implements the token as a smart contract on a blockchain. For fungible assets (equities, bonds, fund units), ERC-20 or purpose-built security token standards (ERC-1400, ERC-3643) encode transfer restrictions, KYC whitelisting, and dividend distribution logic. For unique assets (individual properties, artworks), ERC-721 or ERC-1155 non-fungible token standards are used. Smart contract code enforces regulatory logic automatically, reducing reliance on transfer agents.
  - The market infrastructure layer connects tokenised assets to investors through issuance platforms (e.g. Securitize, tZero), custodians qualified to hold digital securities, and secondary marketplaces. Interoperability across blockchains and integration with traditional settlement systems (SWIFT, DvP settlement) remain active engineering challenges. Major financial institutions including HSBC, BlackRock, and the BIS Innovation Hub have published frameworks and pilots for tokenised bond and fund share issuance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z