- ### Definition
  - Programmable Money is a form of digital currency in which the conditions governing the creation, transfer, and use of monetary units are encoded as executable logic—typically within smart contracts on a public or permissioned blockchain—and enforced autonomously without requiring trusted intermediaries. This enables payment instruments that can embed compliance rules, spending constraints, vesting schedules, or multi-party approval workflows directly into the currency itself. Central bank digital currencies (CBDCs), tokenised commercial bank deposits, and DeFi stablecoins are all instances of programmable money at different points on the decentralisation spectrum.

- ### Semantic Classification
  - owl-class:: programmable-money:Programmable Money
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Digital Currency]]
  - enables [[Payment System]]
  - enables [[Decentralized Finance (DeFi)]]
  - relatedTo [[CBDCs]]
  - relatedTo [[Stablecoin]]

- ### Content
  - Programmable money extends the concept of digital currency by moving enforcement of monetary rules from legal frameworks and financial intermediaries into executable code. Ethereum-based ERC-20 tokens are the most widely deployed instance: their transfer functions can be overridden to include allow-lists, transfer caps, or fee-on-transfer logic. More sophisticated implementations use upgradeable proxy patterns or role-based access control to allow rule modification by authorised parties such as issuers or regulatory bodies.
  - For central banks, programmable CBDC designs raise questions of monetary sovereignty, privacy, and financial inclusion. Retail CBDC architectures under evaluation by the Bank of England, European Central Bank, and others distinguish between programmability of the money itself (restricting what it can be spent on) and programmability of payments (conditional payment triggers such as DVP—delivery versus payment—in securities settlement). The latter is less controversial and more readily achievable within existing legal frameworks.
  - In decentralised finance, programmable money takes the form of algorithmic stablecoins, wrapped tokens, and protocol-native currencies whose supply and distribution policies are entirely encoded in immutable or governance-upgradeable smart contracts. Liquidity mining rewards, token vesting schedules, and multi-signature treasury management are all expressions of programmable monetary logic. The intersection of CBDCs and DeFi—sometimes termed "regulated DeFi"—is an emerging design space seeking to combine central bank creditworthiness with the composability of smart contract infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z