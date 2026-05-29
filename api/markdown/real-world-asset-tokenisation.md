- ### Definition
  - Real-world asset tokenisation (RWA) is the process of issuing blockchain-based digital tokens that represent legally enforceable claims over physical or financial assets such as real estate, government bonds, private credit, or commodities. By encoding ownership rights and transfer rules in smart contracts, RWA tokenisation enables fractional ownership, 24/7 secondary-market liquidity, and automated compliance enforcement. The practice bridges traditional capital markets and decentralised finance, requiring regulatory alignment with securities law and robust oracle infrastructure to reflect off-chain asset valuations on-chain.

- ### Semantic Classification
  - owl-class:: real-world-asset-tokenisation:Real-World Asset Tokenisation
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Oracle Network]]
  - enables [[Liquidity Provision]]
  - enables [[Decentralised Finance]]
  - relatedTo [[Security Token]]
  - relatedTo [[Digital Asset]]

- ### Content
  - Real-world asset tokenisation converts legal ownership claims over off-chain assets into programmable on-chain tokens. The process typically involves a legal wrapper (special purpose vehicle or trust) that holds the underlying asset, with smart contracts governing token issuance, transfer restrictions (KYC/AML whitelisting), dividend or coupon distributions, and eventual redemption.
  - Price oracles supply the token smart contracts with current asset valuations from external appraisal or market data sources, enabling collateralisation within DeFi protocols. Token standards such as ERC-20 with transfer restriction extensions or purpose-built security token standards underpin compliant issuance frameworks.
  - Key categories of tokenised real-world assets include tokenised Treasuries and government bonds, tokenised real estate funds, private credit and trade finance receivables, and commodity-backed tokens. Each category carries distinct regulatory treatment—typically qualifying as a security token offering (STO) under securities law—which requires compliance with disclosure, prospectus, and custody requirements specific to each jurisdiction. The convergence of RWA tokenisation with decentralised lending markets is reshaping institutional capital formation by enabling previously illiquid assets to serve as collateral in permissioned DeFi pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z