- ### Definition
  - The constant product formula is the pricing rule used by many automated market makers in which the product of the two pooled token reserves is held constant during trades.

- ### Semantic Classification
  - owl-class:: blockchain:ConstantProductFormula
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Automated Market Maker]]
  - bridges-to:: [[Uniswap]]
  - requires:: [[Liquidity Pool]]

- ### Content
  - The rule is written as x times y equals k, where x and y are the reserves of two tokens and k is a constant. A trade changes the reserves while keeping their product equal to k, which sets the marginal exchange price along a curve.
  - This design was popularised by Uniswap. It produces price slippage that grows as trade size increases relative to the pool, and it never fully depletes either reserve because the price moves towards infinity at the edges.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z