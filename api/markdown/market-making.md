- ### Definition
  - Market making is the practice of continuously quoting firm bid and ask prices for a financial asset, providing on-demand [[Liquidity Provision]] to market participants who wish to transact without waiting for a natural counterparty. The market maker profits from the [[Bid-Ask Spread]] — the difference between the price at which it will sell and the price at which it will buy — while accepting [[Inventory Risk]] from holding positions that may move against it. It is a foundational mechanism underpinning [[Price Discovery]] and underpins the functioning of equity exchanges, foreign-exchange interbank networks, fixed-income desks, commodity venues, and cryptocurrency [[Decentralised Exchange]] protocols alike.

- ### Overview
  - Market making is one of the oldest specialised financial roles: in quote-driven markets a designated dealer posts two-sided prices continuously, ensuring that any incoming buyer or seller can trade immediately at a known price rather than waiting for a matching order. The market maker assumes the counterparty role for every trade.
  - The economic rationale is straightforward: market makers provide a valued service — immediacy — for which they charge a premium embedded in the spread. Profitability depends on turning over inventory rapidly and hedging directional exposure, so that spread income exceeds losses on positions taken against better-informed traders ([[Adverse Selection]]).
  - In traditional finance the role is performed by exchange-designated specialists (as on the NYSE), inter-dealer brokers, or proprietary [[Algorithmic Trading]] firms using co-located servers and sophisticated [[Risk Management]] frameworks.
  - In blockchain-native contexts the function is replicated by [[Automated Market Maker]] protocols such as Uniswap, Curve, and Balancer, where [[Smart Contract]] code replaces human dealers. Liquidity providers deposit paired assets into pools, and a deterministic pricing formula — typically the constant-product invariant x·y = k — sets quotes automatically.

- ### Key Mechanisms
  - **Bid-Ask Spread** — the primary revenue source; the maker buys at the bid and sells at the ask, earning the spread on each round-trip trade. Tighter spreads attract more flow but reduce per-trade revenue.
  - **[[Order Book]] Management** — on central limit-order-book venues the maker places, amends, and cancels [[Limit Order]]s continuously, adjusting quotes in response to market movements and inventory levels.
  - **Inventory Management** — accumulated directional exposure must be hedged, typically via correlated instruments or futures, to limit the risk of holding assets whose price moves adversely.
  - **Quote Refresh Rate** — the speed at which stale quotes are cancelled and reposted. High-frequency makers may refresh thousands of times per second; on-chain makers refresh only when the pricing curve is queried by a swap.
  - **Skewing and Adverse Selection Defence** — when inventory becomes imbalanced the maker widens the spread or skews quotes to discourage further one-sided flow, a practice described in the Avellaneda-Stoikov model of optimal market making.
  - **Fee Tiers** — in AMM designs, liquidity providers earn trading fees (e.g. 0.05%, 0.30%, 1.00% tiers in Uniswap v3) as compensation for bearing [[Inventory Risk]] and impermanent loss.
  - **Concentrated Liquidity** — Uniswap v3 introduced the ability for liquidity providers to specify a price range, concentrating capital where it is most likely to earn fees and mimicking traditional market-maker quote narrowing.

- ### Traditional vs Decentralised Market Making
  - **Traditional (Central Limit Order Book)**
    - Dealers post explicit bid/ask quotes into an [[Order Book]].
    - Firms such as Citadel Securities, Jane Street, and Virtu Financial operate as principal market makers on major equity and options exchanges.
    - Regulatory frameworks (e.g. SEC Rule 15c3-5, MiFID II best-execution rules) govern conduct.
    - Profits come from spread capture, rebates from exchanges for providing liquidity, and statistical arbitrage.
  - **Decentralised (AMM Protocols)**
    - [[Automated Market Maker]] replaces human quoting with a pricing invariant coded in a [[Smart Contract]].
    - Liquidity providers deposit assets into pools and receive LP tokens representing their share.
    - Impermanent loss arises when the price ratio of deposited assets diverges from the deposit ratio, causing LP returns to underperform simple holding.
    - Protocols such as Curve Finance use stableswap invariants that concentrate liquidity near peg for stablecoin pairs.
    - [[Decentralised Exchange]] aggregators (1inch, Paraswap) route orders across multiple AMM pools to minimise slippage.

- ### Applications and Use Cases
  - **Equity Markets** — designated market makers (DMMs) on stock exchanges provide continuous two-sided quotes for listed securities, reducing transaction costs for investors.
  - **Foreign Exchange** — banks and non-bank electronic market makers quote currency pairs 24/7 in the spot and derivatives markets; spreads are the primary revenue mechanism.
  - **Fixed Income** — primary dealers in government bond markets act as market makers, providing liquidity in treasury and sovereign debt instruments.
  - **Options Markets** — specialists quote bids and offers across the full options chain, managing delta, gamma, and vega exposures as a portfolio.
  - **Cryptocurrency Spot Markets** — centralised exchanges (Binance, Coinbase) rely on proprietary trading firms and dedicated crypto market makers for token pairs.
  - **DeFi Liquidity Pools** — retail and institutional liquidity providers supply assets to AMM pools to earn fee income, underpinning [[Decentralised Finance]] trading.
  - **NFT Markets** — emerging market-making protocols attempt to provide bid-ask quotes for non-fungible token collections, improving liquidity in otherwise illiquid assets.
  - **Prediction Markets** — market makers seed liquidity in event-outcome markets, enabling participants to trade probability shares.

- ### Economic Theory
  - The classical inventory model (Stoll 1978) frames market-making as a service where the dealer requires compensation for three cost components: order-processing costs, inventory-carrying costs, and adverse-selection costs.
  - The Glosten-Milgrom model (1985) analyses the adverse-selection component: informed traders systematically trade against the market maker when they possess superior information, forcing the maker to widen spreads.
  - The Avellaneda-Stoikov framework (2008) provides a stochastic optimal control solution for dynamic bid-ask quote placement that maximises expected profit subject to inventory penalties.
  - Maker-taker fee structures on exchanges further complicate incentives: liquidity providers often receive rebates (negative fees) while takers pay positive fees, creating a cross-subsidy designed to attract market makers.

- ### Relationships
  - partOf:: [[Financial Markets]]
  - requires:: [[Capital Allocation]]
  - requires:: [[Risk Management]]
  - uses:: [[Order Book]]
  - uses:: [[Limit Order]]
  - uses:: [[Hedging]]
  - enables:: [[Price Discovery]]
  - enables:: [[Market Liquidity]]
  - enables:: [[Trade Execution]]
  - relatedTo:: [[Arbitrage]]
  - relatedTo:: [[Algorithmic Trading]]
  - relatedTo:: [[Adverse Selection]]
  - relatedTo:: [[Market Microstructure]]
  - contrastsWith:: [[High-Frequency Trading]]
  - bridges-to:: [[Automated Market Maker]]
  - bridges-to:: [[Decentralised Exchange]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Decentralised Finance]]

- ### Standards and Regulatory Context
  - **MiFID II / MiFIR (EU)** — systematic internalisers and regulated market makers must meet pre-trade and post-trade transparency obligations; best-execution rules constrain spread widening.
  - **SEC Rule 15c3-5 (US)** — risk management controls for broker-dealers with market access, including market makers.
  - **Dodd-Frank Act** — post-2008 reforms that separated proprietary trading (Volcker Rule) from client-facilitation market making, with an explicit carve-out for bona fide market-making activity.
  - **Basel III / FRTB** — capital requirements for trading book positions affect the economics of market making for bank-affiliated dealers.
  - **IOSCO Principles** — international standards for secondary market structures reference market-making arrangements as a component of market liquidity provision.
  - **DeFi governance** — AMM protocol parameters (fee tiers, tick spacing, oracle integrations) are governed by on-chain DAOs (e.g. Uniswap Governance, Curve DAO) rather than statutory bodies.

- ### Provenance
  - sources:: Stoll (1978) "The Supply of Dealer Services in Securities Markets"; Glosten & Milgrom (1985) "Bid, Ask and Transaction Prices in a Specialist Market"; Avellaneda & Stoikov (2008) "High-frequency trading in a limit order book"; Uniswap v3 Core Whitepaper; MiFID II Directive 2014/65/EU
  - updated:: 2026-06-13