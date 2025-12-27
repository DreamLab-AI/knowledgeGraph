- ### OntologyBlock
  id:: automated-market-making-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9787
	- source-domain:: mv
	- preferred-term:: Automated Market Making
	- status:: active
	- definition:: Automated Market Making is the practice and methodology of operating decentralized exchange protocols that use algorithmic pricing and liquidity pools to facilitate permissionless trading, encompassing pool design, fee structures, capital efficiency optimization, and impermanent loss mitigation strategies.
	- owl:class:: mv:AutomatedMarketMaking
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[DeFi Operations]]
	- enables:: [[Decentralized Trading]], [[Liquidity Mining]], [[Token Accessibility]]
	- requires:: [[Liquidity Provision]], [[Smart Contract Deployment]], [[Price Oracle Integration]]
	- #### Relationships
	  id:: automated-market-making-relationships
	  collapsed:: true

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
