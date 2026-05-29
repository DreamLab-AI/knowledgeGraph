- ### Definition
  A Fixed Supply Token is a fungible blockchain token whose total issuance is capped at a hard-coded maximum that the protocol cannot exceed, regardless of future governance decisions. Distribution of the supply over time is governed by a predetermined emission schedule, and no additional tokens can be minted once the cap is reached, conferring deflationary scarcity properties analogous to precious metals.

- ### Semantic Classification
  - owl-class:: blockchain:FixedSupplyToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - hasPart:: [[Emission Schedule]], [[Total Supply]]
  - relatedTo:: [[Circulating Supply]], [[Halving]], [[Market Capitalization]], [[Tokenomics]], [[Token Economics]]
  - contrastsWith:: [[Inflationary Token]], [[Deflationary Token]]
  - enables:: [[Burning Mechanism]]
  - uses:: [[Blockchain Protocol]]

- ### Content
  A Fixed Supply Token encodes monetary scarcity directly into the consensus rules of a blockchain protocol. The maximum supply cap is enforced at the protocol layer, meaning that no block producer, validator, or governance vote can authorise the creation of tokens beyond that limit. Bitcoin's 21 million BTC cap is the canonical example; the equivalent on Ethereum's token layer appears in ERC-20 contracts that hard-code a maxSupply constant and remove any mint function access after deployment.

  The emission schedule determines how the fixed total supply is released over time. In proof-of-work systems, block rewards are typically the primary emission mechanism, and scheduled halvings reduce the per-block issuance at predetermined block heights. In proof-of-stake systems, staking rewards may be funded from a pre-allocated treasury or from transaction fees once the cap is reached, aligning long-term validator incentives with network revenue rather than inflation.

  Fixed supply contrasts with inflationary token designs—where ongoing issuance funds staking rewards or ecosystem grants—and with deflationary tokens, where burning mechanisms actively reduce supply below an initial cap. The fixed supply model's value proposition rests on predictable, auditable monetary policy: market participants can model future circulating supply with precision, facilitating long-term valuation using stock-to-flow and similar frameworks.

  Key risks include insufficient validator incentives once the emission schedule completes (relying purely on transaction fees), and governance ossification if the supply cap itself can never be amended even under extreme circumstances. Projects address these risks through fee market design, layer-2 transaction volume assumptions, and careful initial supply allocation to ecosystem reserves.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z