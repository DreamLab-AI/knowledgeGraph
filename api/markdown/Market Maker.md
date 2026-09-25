A market maker is a firm or agent that stands ready to both buy and sell an asset continuously, quoting bid and ask prices and earning the spread between them. By absorbing temporary imbalances between buyers and sellers, market makers supply liquidity, tighten spreads, reduce slippage and accelerate price discovery on exchanges. In decentralised finance the role is generalised by automated market makers, which replace quoted order books with algorithmic pricing curves funded by pooled liquidity.

### Semantic Classification

### Content

## Definition

A **market maker** is a [[Liquidity Provider]] that commits to quoting two-sided markets: simultaneously posting a bid (the price at which it will buy) and an ask (the price at which it will sell) on an exchange's [[Order Book]]. Its revenue is the [[Bid Ask Spread]] harvested across many round-trips; its service is immediacy — any trader can execute at once against the market maker's quotes instead of waiting for a natural counterparty to appear. In doing so the market maker warehouses inventory risk (holding positions whose value may move against it) and adverse-selection risk (trading against better-informed counterparties), and the spread is precisely the compensation classical microstructure models — Garman (1976), Glosten-Milgrom (1985), Kyle (1985) — derive for bearing those risks.

The function appears wherever continuous markets do: designated market makers on the NYSE, competing dealers on NASDAQ and in FX and bond markets, and options market makers hedging quoted books with dynamic delta strategies. Modern market making is overwhelmingly electronic and algorithmic — firms such as Citadel Securities, Jane Street, Virtu, Optiver and Jump quote thousands of instruments with holding periods of seconds — and is frequently formalised in exchange agreements that grant fee rebates or privileges in return for quoting obligations (maximum spreads, minimum depth, minimum uptime). The benefits to the market are tighter spreads, lower [[Slippage]] for large orders, deeper books and faster [[Price Discovery]]; the recurring policy concerns are quote withdrawal in stress (as examined after the 2010 Flash Crash), speed asymmetries, and conflicts such as payment for order flow.

## Current Landscape

In digital-asset markets the role bifurcated. Centralised crypto exchanges replicate the traditional model, with professional firms (Wintermute, GSR, Cumberland) making markets around the clock. Decentralised finance replaced the dealer entirely: the [[Automated Market Maker]] embeds pricing in a smart contract — Uniswap's constant-product formula being the canonical curve — and sources inventory from permissionless liquidity pools, so passive depositors collectively play the market maker's role and earn fees whilst bearing impermanent loss instead of quoted-spread risk. Later designs (concentrated liquidity in Uniswap v3, hybrid RFQ systems, on-chain order books on high-throughput chains) push [[Capital Efficiency]] back towards professional [[Market Making]], and in practice the two worlds have converged: sophisticated firms now dominate concentrated-liquidity provision, quoting algorithmically on-chain much as they do off-chain.

Recent developments:

- **Concentrated liquidity carried forward**: the concentrated-liquidity model first introduced in Uniswap v3 — LPs allocating capital to a chosen price range rather than the full (0, ∞) curve — is retained as the core implementation in Uniswap v4, keeping active range management central to on-chain market making.
- **Intent-based, filler-driven flow**: UniswapX runs an auction-based, intent protocol where professional market makers ("fillers") compete to fill signed user swap orders from their own inventory, private pools, cross-chain bridges or on-chain AMMs — importing dealer-style off-chain market making onto the DEX rail.
- **Empirical convergence**: 2024–2025 research on Uniswap v3 finds that private-market-maker internalisation of order flow via aggregators materially reshapes on-chain liquidity depth and concentration, evidencing that professional firms, not passive depositors, now drive much of DEX liquidity.
- **New primitives**: v4 adds a Liquidity Launchpad using a Continuous Clearing Auction to discover a fair price and auto-seed a pool, extending market-making mechanics to token bootstrapping.

  **Sources**:

- https://developers.uniswap.org/docs/liquidity/overview
- https://developers.uniswap.org/docs/get-started/concepts/liquidity-providers/concentrated-liquidity

