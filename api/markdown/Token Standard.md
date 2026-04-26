iri:: http://narrativegoldmine.com/blockchain#TokenStandard
uri:: urn:visionclaw:concept:blockchain:token-standard
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:token-standard
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Token Standard
content-hash:: sha256-12-6aa019292d8f
legacy-term-id:: BC-7005
status:: active
maturity:: reviewed
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. Standards like ERC-20 (fungible tokens) and ERC-721 (NFTs) establish common APIs for token transfers, balance queries, approvals, and metadata, enabling seamless integration across wallets, exchanges, and dApps.

- ### Semantic Classification
  - owl-class:: blockchain:TokenStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - implements:: [[Fungibility]]

- ### Content

  ## Definition
  A **Token Standard** is a technical specification that defines the rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. These standards establish common APIs enabling seamless integration across wallets, exchanges, decentralized applications, and other blockchain infrastructure.

  ## Core Standards

  ### ERC-20 (Fungible Tokens)
  - Proposed by Fabian Vogelsteller in November 2015
  - Defines fungible tokens where each unit is interchangeable
  - Required functions: `transfer`, `balanceOf`, `approve`, `transferFrom`, `allowance`, `totalSupply`
  - Use cases: stablecoins, governance tokens, utility tokens, ICO tokens

  ### ERC-721 (Non-Fungible Tokens)
  - Proposed by William Entriken et al. in January 2018
  - Each token has unique `tokenId` making it non-fungible
  - Tracks ownership via `ownerOf` function
  - Enables unique digital collectibles, art, and real-world asset representation
  - Supports metadata URI for off-chain attributes

  ### ERC-1155 (Multi-Token Standard)
  - Developed by Enjin to address ERC-721 limitations
  - Supports both fungible and non-fungible tokens in single contract
  - Enables batch transfers reducing gas costs and network congestion
  - Optimal for gaming assets and mixed token portfolios

  ### Advanced Standards
  - **ERC-777**: Enhanced security with hooks for token operations
  - **ERC-998**: Composable tokens enabling ownership hierarchies
  - **ERC-4626**: Standardized yield-bearing vault interface for DeFi
  - **ERC-1400**: Security token standard with transfer restrictions

  ## Technical Characteristics
  - **Interface Compliance**: Contracts must implement required function signatures
  - **Event Emission**: Standards define events for off-chain indexing
  - **Approval Mechanisms**: Two-step transfer patterns for delegated spending
  - **Metadata Standards**: Structured JSON schemas for token attributes

  ## Cross-Chain Standards
  - **BEP-20**: Binance Smart Chain equivalent of ERC-20
  - **SPL Tokens**: Solana Program Library token standard
  - **CW-20/CW-721**: CosmWasm token standards for Cosmos ecosystem
  - **TRC-20**: TRON network token standard

  ## Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - used-by:: [[Decentralized Exchange]]
  - related-to:: [[NFT]]
  - implements:: [[Fungibility]]
  - component-of:: [[DeFi]]

  ## Security Considerations
  - Reentrancy vulnerabilities in transfer functions
  - Integer overflow/underflow in older implementations
  - Approval race conditions
  - Malicious token contract behaviors

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
