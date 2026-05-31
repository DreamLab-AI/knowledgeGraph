- ### Definition
  - Gauge voting is a mechanism in protocols such as Curve where token holders allocate weights to liquidity pools, determining how reward emissions are distributed. Voting power is usually tied to time-locked governance tokens.

- ### Semantic Classification
  - owl-class:: defi:GaugeVoting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance Token]]
  - bridges-to:: [[Tokenomics]]
  - requires:: [[Curve Finance]]
  - enables:: [[Votium]], [[Hidden Hand]]

- ### Content
  - In gauge voting, each liquidity pool is represented by a gauge, and holders of vote-escrowed tokens distribute their voting weight across gauges. The resulting weights set the share of newly minted reward tokens that each pool receives over the following epoch.
  - Because emissions translate into yield for liquidity providers, control of gauge weights has direct economic value. This created secondary markets such as Votium and Hidden Hand where protocols pay voters to favour their pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z