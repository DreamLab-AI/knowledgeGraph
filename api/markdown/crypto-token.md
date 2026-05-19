- ### Definition
  - A blockchain-based programmable token representing assets, rights, or utility within a decentralized system, with transferability governed by smart contract logic.

- ### Semantic Classification
  - owl-class:: blockchain:CryptoToken
  - owl-role:: Object
  - owl-inferred:: mv:VirtualObject
  - belongs-to-domain:: [[BlockchainDomain]], [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[Token Standard]], [[Smart Contract]], [[Metadata Schema]], [[Non-Fungible Token (NFT)]], [[Stablecoin]], [[Loyalty Token]]
  - is-part-of:: [[Tokenization System]], [[Blockchain Network]]
  - requires:: [[Blockchain]], [[Wallet]], [[Token Standard]]
  - enables:: [[Digital Ownership]], [[Programmable Value]], [[Decentralized Exchange]], [[Governance Voting]]
  - depends-on:: [[Consensus Mechanism]], [[Cryptographic Key]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  Crypto Tokens represent programmable digital assets implemented through smart contract code, enabling flexible ownership, transfer, and use rights. Token standards establish interoperability interfaces—Ethereum's ERC-20 defines fungible token transfer functions enabling exchange of identical units, whilst ERC-721 specifies non-fungible token interfaces supporting unique digital items with individual metadata. Advanced standards like ERC-1155 combine fungible and non-fungible capabilities in single contracts supporting batch operations.

  Token economics (tokenomics) encompasses supply mechanics (fixed, inflationary, deflationary), distribution models (initial allocations, airdrops, mining, staking), and utility design determining token purpose. Governance tokens grant voting rights in protocol decisions, utility tokens provide access to network services or discounted fees, security tokens represent equity or debt claims subject to regulatory frameworks. Composable token mechanics enable liquidity mining (rewarding token providers with additional tokens), staking (locking tokens to earn yields), and swapping (automated token exchanges through algorithmic market makers).

  Tokens enable novel ownership models—fractionalized real estate ownership through ERC-1155 tokens, creator income participation through royalty tokens, or decentralised governance through DAO tokens. Implementation challenges include supply manipulation vulnerability, token standard fragmentation reducing interoperability, and regulatory uncertainty regarding token classification and investor protections.

- ### Provenance
  - sources:: [[Reed Smith]], [[ISO 24165]]
  - migration-date:: 2026-04-26T00:00:00Z