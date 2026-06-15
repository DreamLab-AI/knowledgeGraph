- ### Definition
  - An order book exchange is a trading venue that matches buy and sell orders through a central limit order book — an ordered record of outstanding bids and asks at each price level. As a structure studied within [[Market Microstructure]], it pairs incoming orders against resting [[Liquidity]] by price-time priority.
  - It contrasts sharply with the [[Automated Market Maker]] model used by a [[Decentralized Exchange]] and incentivised through [[Liquidity Mining]], which price trades against pooled capital rather than discrete counter-orders.

- ### Overview
  - The order book is the canonical mechanism of modern markets. Every participant who wishes to trade at a specific price places a limit order, which rests in the book until matched; those willing to trade immediately submit market orders that consume the best available resting liquidity.
  - A matching engine enforces the rules — typically price-time priority, where better prices match first and, among equal prices, earlier orders take precedence. The engine must process orders with very low [[Latency]] and high throughput, especially in venues serving algorithmic and high-frequency participants.
  - The state of the book — its depth, the bid-ask spread, and the distribution of orders — reveals supply and demand and determines execution quality. Deep books with tight spreads provide good [[Liquidity]]; thin books produce slippage and volatility. This visible, price-discovery-rich structure is the defining feature that distinguishes order book venues from algorithmic market makers.

- ### Key aspects
  - **Central limit order book** — Outstanding bids and asks are aggregated and ordered by price, forming the central data structure against which trades execute.
  - **Matching engine** — A high-performance engine applies price-time priority to pair incoming orders with resting [[Liquidity]], executing and recording trades.
  - **Order types** — Limit, market, stop, and conditional orders give participants control over price and timing, shaping how liquidity is supplied and taken.
  - **Price discovery** — Continuous interaction of orders produces a transparent market price, a core function studied in [[Market Microstructure]].
  - **Latency sensitivity** — Because priority depends on time, [[Latency]] is decisive for active traders, driving investment in fast infrastructure.
  - **Liquidity and spread** — Book depth and the bid-ask spread quantify the market's capacity to absorb trades without large price impact.

- ### Applications
  - **Equities and derivatives markets** — Stock and futures exchanges run central limit order books as the backbone of regulated [[Financial Services]].
  - **Centralised crypto exchanges** — Major [[Cryptocurrency]] venues operate order book matching engines analogous to traditional exchanges.
  - **Foreign exchange and fixed income** — Electronic communication networks and trading platforms use order book models for currencies and bonds.
  - **Comparison venue for DeFi** — Order book design is the baseline against which a [[Decentralized Exchange]] and [[Automated Market Maker]] are evaluated.
  - **Market analysis** — Order book data feeds research into liquidity, volatility, and the broader [[Financial System]].

- ### Relationships
  - subClassOf:: [[Market Microstructure]]
  - contrastsWith:: [[Automated Market Maker]]
  - contrastsWith:: [[Decentralized Exchange]]
  - contrastsWith:: [[Liquidity Mining]]
  - hasPart:: [[Liquidity]]
  - dependsOn:: [[Market Microstructure]]
  - requires:: [[Liquidity]]
  - requires:: [[Latency]]
  - supports:: [[Liquidity]]
  - uses:: [[Latency]]
  - enables:: [[Financial Services]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Financial System]]
  - bridgesTo:: [[Decentralized Exchange]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15