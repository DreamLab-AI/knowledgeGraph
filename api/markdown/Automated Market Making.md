iri:: http://narrativegoldmine.com/spatial-computing#AutomatedMarketMaking
uri:: urn:visionclaw:concept:spatial-computing:automated-market-making
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:automated-market-making
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Automated Market Making
content-hash:: sha256-12-4f2f3fb28e81
legacy-term-id:: MV-9787
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - Automated Market Making is the practice and methodology of operating decentralized exchange protocols that use algorithmic pricing and liquidity pools to facilitate permissionless trading, encompassing pool design, fee structures, capital efficiency optimization, and impermanent loss mitigation strategies.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutomatedMarketMaking
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Blockchain]] (bc)
  - is-subclass-of:: [[DeFi Operations]]
  - requires:: [[Liquidity Provision]], [[Smart Contract Deployment]], [[Price Oracle Integration]]
  - enables:: [[Decentralized Trading]], [[Liquidity Mining]], [[Token Accessibility]]

- ### Content

  ### Technical Details
  Key concepts include:
  - **Constant Product Market Makers**: x * y = k formula ensuring continuous liquidity at all price levels
  - **Concentrated Liquidity**: Capital efficiency through targeted price range provision (Uniswap v3)
  - **Fee Tiers**: Variable trading fees based on asset volatility and liquidity depth
  - **Price Impact**: Relationship between trade size and resulting price movement

  ### Pool Types
  - **Standard Pairs**: Two-token pools with equal weighting
  - **Weighted Pools**: Multi-token pools with custom asset allocations (Balancer)
  - **Stable Pools**: Optimized for correlated assets with minimal slippage (Curve)
  - **Hybrid Pools**: Combining order book and AMM mechanics

  ### Risk Management
  Impermanent loss occurs when liquidity provider holdings diverge from simply holding tokens. Mitigation strategies include selecting correlated pairs, choosing appropriate fee tiers, and active position management.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
