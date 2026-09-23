
An order book is a real-time, continuously updated electronic ledger that aggregates all outstanding limit buy orders (bids) and limit sell orders (asks) for a tradeable asset, organised by price level and, within each level, by time of arrival. A matching engine processes incoming market and limit orders against the resting book using price-time priority, generating trades whenever a bid price meets or exceeds an ask price. The visible depth of resting orders at each price level constitutes the liquidity profile of the market, and the gap between the best bid and best ask defines the bid-ask spread. Order books underpin both centralised exchanges and, increasingly, on-chain decentralised venues constrained by ledger throughput and gas costs.

- ### Overview
  - The order book is the canonical mechanism by which competitive markets aggregate dispersed information about supply and demand into a single observable price. It is the primary structure underpinning equity exchanges, futures markets, foreign exchange electronic communication networks, and cryptocurrency spot markets worldwide.
  - **Why it matters**
    - Provides transparent, publicly visible [[Price Discovery]] by revealing the full queue of resting intentions
    - Enables [[Market Making]] strategies that quote two-sided prices and earn the [[Bid-Ask Spread]]
    - Supports fine-grained execution control: participants choose whether to be passive (limit) or aggressive (market)
    - Feeds [[Algorithmic Trading]] and [[High-Frequency Trading]] strategies with microsecond-granularity signals
  - **Historical context**
    - Physical open-outcry pits and specialist-based floors gave way to electronic limit order books beginning in the 1970s–1990s (e.g., NASDAQ, SETS on London Stock Exchange). Today virtually all major venues operate central limit order books (CLOBs) running proprietary matching engines capable of processing millions of messages per second.

- ### Key Components
  - **Bid Side**
    - Contains all resting [[Limit Order]] to buy, sorted from highest to lowest price
    - The highest price level on the bid side is the "best bid" (national best bid in US equities regulation)
  - **Ask Side**
    - Contains all resting [[Limit Order]] to sell, sorted from lowest to highest price
    - The lowest price level on the ask side is the "best ask" (or "best offer")
  - **[[Bid-Ask Spread]]**
    - The difference between best ask and best bid; represents the immediate cost of round-trip trading
    - Tighter spreads indicate higher [[Liquidity Provision]]
  - **[[Depth of Market]]** (Level 2 data)
    - Aggregated quantity available at each price level beyond the best quote
    - Visualised as a "market depth" chart, informing [[Algorithmic Trading]] and risk management
  - **[[Matching Engine]]**
    - Core processing component that evaluates incoming orders against resting book entries
    - Implements [[Price-Time Priority]]: best price wins; equal prices resolve by time of arrival (FIFO)
    - May also support pro-rata allocation, size-pro-rata, or combination rules depending on venue
  - **Order Types**
    - [[Limit Order]]: specifies maximum buy price or minimum sell price; rests in book if unmatched
    - [[Market Order]]: executes immediately at best available price; removes liquidity from book
    - Stop, iceberg, fill-or-kill, immediate-or-cancel, and other variants modify resting and execution behaviour

- ### Mechanisms
  - **Order lifecycle**
    - Submit → validate → place in book (if limit) or sweep book (if market) → partial or full fill → cancel or expire
  - **Price-Time Priority matching**
    - On receipt of an aggressive order, the engine walks price levels from best to worst, filling against the oldest resting order at each level first
  - **Order book events**
    - Add, modify, cancel, and execute events stream via market data feeds (e.g., ITCH, PITCH, FIX/FAST)
  - **Continuous vs. call auction**
    - Continuous books match orders throughout the trading session; [[Call Auction]] mechanisms aggregate orders over a window and clear at a single price (used for open and close on most exchanges)
  - **Tick size and price granularity**
    - Minimum price increment (tick) determines the number of discrete levels; finer ticks increase book depth but also increase fragmentation across levels

- ### Applications & Use Cases
  - **Equity markets**
    - Central limit order books on venues such as NYSE, NASDAQ, LSE, Euronext, and ASX are the primary execution venue for equities; [[Algorithmic Trading]] firms interact at microsecond latency
  - **Derivatives markets**
    - Futures and options exchanges (CME, ICE, Eurex) use electronic order books; options chains produce multi-dimensional book structures across strikes and expiries
  - **Foreign exchange**
    - Electronic communication networks (ECNs) such as EBS and Reuters Matching aggregate bank and non-bank liquidity in an order-book-like structure
  - **Cryptocurrency spot and perpetuals**
    - Centralised crypto exchanges (Binance, Coinbase Advanced, Kraken) operate continuous limit order books; [[High-Frequency Trading]] firms provide liquidity across thousands of pairs
  - **[[Decentralised Exchange]] (on-chain order books)**
    - Protocols such as dYdX (StarkEx/Cosmos), Serum/OpenBook (Solana), and Injective operate on-chain or hybrid order books; ledger throughput and gas costs impose constraints that drive hybrid off-chain matching with on-chain settlement
    - Contrast with [[Automated Market Maker]] (AMM) protocols (Uniswap, Curve) which use bonding curves instead of order books, sacrificing capital efficiency for composability
  - **[[Market Making]] and proprietary trading**
    - Firms post simultaneous bid and ask quotes in the book to earn spread; inventory risk management and adverse selection avoidance are central concerns
  - **Regulation and best execution**
    - MiFID II (EU), Reg NMS (US), and MAS rules mandate best execution obligations that reference consolidated order book data (NBBO in US equities)

- ### Standards & Context
  - **Market data protocols**
    - NASDAQ ITCH (binary market data feed, sub-microsecond granularity) and CBOE PITCH are industry standards for disseminating order book events
    - FIX/FAST (Financial Information eXchange with FAST encoding) is widely used for order entry and confirmations across venues globally
  - **Regulatory frameworks**
    - **Reg NMS** (US, 2005): establishes the National Best Bid and Offer (NBBO) requirement, obliging venues to route orders to the best-priced venue
    - **MiFID II** (EU, 2018): mandates pre- and post-trade transparency, systematic internaliser disclosure, and best execution monitoring using consolidated tape data
    - **MAS Guidelines** (Singapore): similar best execution and market integrity standards for electronic venues
  - **Academic foundations**
    - Market microstructure research (Glosten-Milgrom model, Kyle model, Glosten 1994 "Is the Electronic Open Limit Order Book Inevitable?") underpins modern understanding of order book equilibria and informed trading
  - **Industry bodies**
    - FIX Trading Community standardises messaging protocols; IOSCO coordinates cross-border regulatory alignment for electronic trading venues

- ### Provenance

