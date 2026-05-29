### Definition

Total Supply is the count of all tokens that have ever been created on a blockchain network, encompassing circulating tokens, locked or vested tokens, tokens held in treasury reserves, and any tokens that have been minted but not yet distributed—but excluding permanently destroyed (burned) tokens. It differs from the maximum supply (the hard cap set by the protocol) and from circulating supply (tokens freely tradeable on secondary markets). Total supply is a fundamental parameter in tokenomics analysis used to assess inflation, dilution, and long-term value dynamics.

### Relationships

Total Supply **hasPart** [[Circulating Supply]] as its freely tradeable subset. It **requires** a defined [[Emission Schedule]] (the issuance timeline) and a [[Supply Cap]] (the maximum possible supply, whether finite or infinite). It is **relatedTo** [[Market Capitalization]] (fully diluted market cap = total supply × price), [[Deflationary Token]] and [[Inflationary Token]] (competing supply trajectory models), [[Tokenomics]] (the broader economic design of which supply is one parameter), [[Inflation]] (the rate of supply growth), [[Halving]] (supply-reducing event in disinflationary schedules), and [[Treasury Management]] (governance over unissued or reserved tokens).

### Content

Total supply occupies a central position in token economic analysis. Investors and protocol designers distinguish three related quantities: maximum supply (the hard cap encoded in protocol rules, e.g., Bitcoin's 21 million BTC), total supply (all created tokens minus all burned tokens at any point in time), and circulating supply (total supply minus tokens locked in smart contracts, vesting schedules, team allocations, or treasury reserves).

The gap between total supply and circulating supply represents "supply overhang"—tokens that could enter circulation and exert downward price pressure when vesting schedules unlock or treasuries liquidate. Analysing this overhang alongside the emission schedule allows assessment of inflationary pressure on existing holders.

Deflationary protocols actively reduce total supply through token burns—destroying tokens in response to transaction fees (EIP-1559 base fee burning on Ethereum), protocol revenue, or governance decisions. When the burn rate exceeds the emission rate, total supply shrinks and the token becomes net-deflationary. Inflationary protocols continuously expand total supply to fund staking rewards, liquidity mining, and ecosystem grants, relying on growth in demand to absorb the new supply without price depression.

Treasury management is a key governance challenge: tokens held by protocol DAOs or foundations represent a claim on future supply that requires transparent disclosure, responsible deployment strategies, and community oversight to prevent misalignment between protocol growth and token value.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z