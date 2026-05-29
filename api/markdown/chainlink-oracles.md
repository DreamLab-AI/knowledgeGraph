- ### Definition
  - Chainlink Oracles are the decentralised data-delivery nodes that power the [[Chainlink]] protocol, bridging on-chain [[Smart Contract]] execution with off-chain data sources, APIs, and computation. Each oracle node is independently operated, staked, and reputationally scored, with results from multiple nodes aggregated to produce a single tamper-resistant answer delivered to the requesting [[Smart Contracts]].

- ### Relationships
  - Chainlink Oracles underpin the entire [[Decentralized Finance (DeFi)]] ecosystem by supplying reliable [[Price Oracle]] data that [[Smart Contract]] platforms depend on for lending, derivatives, and stablecoins. They also power the [[Verifiable Random Function]] service (VRF) used in gaming and NFT minting, and form the backbone of [[Chainlink CCIP]] for [[Cross-Chain Interoperability]].

- ### Content
  - Chainlink was conceived in 2017 by Sergey Nazarov and Steve Ellis to solve the "oracle problem" — the inability of deterministic blockchains to trustlessly consume external data. The whitepaper proposed decentralised node networks with reputation-based incentives. By 2019, Chainlink mainnet launched on Ethereum, and its price-feed infrastructure rapidly became the de facto standard across DeFi protocols including Aave, Compound, and Synthetix.

  - Each Chainlink oracle node stakes LINK tokens as collateral and is assigned reputation scores based on response accuracy, uptime, and latency. Aggregation contracts collect responses from a configurable number of nodes (typically 7–31), reject outliers, and compute a volume-weighted median. Off-chain reporting (OCR) introduced in 2021 batches node signatures off-chain and submits a single aggregated transaction, reducing gas costs by up to 90 % while preserving [[Cryptographic Proof]] guarantees.

  - The Chainlink ecosystem spans Data Feeds (price, reserve, NFT floor), Automation (formerly Keepers), VRF, Functions (arbitrary off-chain computation), and CCIP (cross-chain token and message passing). Over 1,700 oracle networks serve more than 2,200 projects across 15+ blockchains including Ethereum, Polygon, Avalanche, and BNB Chain. Enterprise integrations include SWIFT and DTCC for traditional finance settlement proofs.

  - By 2024–2025, Chainlink's Cross-Chain Interoperability Protocol (CCIP) has emerged as a major focus, targeting institutional cross-chain asset transfers and messaging. The Chainlink Economics 2.0 model introduced staking with slashing penalties and fee capture for data consumers. As [[Decentralized Finance (DeFi)]] matures and regulatory clarity improves, Chainlink Oracles are increasingly positioned as regulated financial data infrastructure connecting traditional markets to blockchain settlement layers.

- ### References
  - Chainlink Whitepaper: https://research.chain.link/whitepaper-v1.pdf
  - Chainlink Off-Chain Reporting: https://research.chain.link/ocr.pdf