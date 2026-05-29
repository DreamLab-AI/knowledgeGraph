- ### Definition
  Circulating Supply is the quantity of a blockchain token that is publicly available and actively tradeable in the market at a given point in time—excluding tokens locked in smart contracts, held in treasury reserves, vested to team members, or burned. It serves as the operative supply figure for computing market capitalisation and price-to-earnings metrics, and changes continuously as new tokens are emitted via block rewards and locked tokens are released according to vesting schedules.

- ### Semantic Classification
  - owl-class:: blockchain:CirculatingSupply
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - relatedTo:: [[Total Supply]], [[Fixed Supply Token]], [[Halving]], [[Tokenomics]], [[Token Economics]], [[Market Capitalization]]
  - requires:: [[Emission Schedule]], [[Blockchain Protocol]]
  - enables:: [[Burning Mechanism]], [[Blockchain Economics]]
  - contrastsWith:: [[Inflationary Token]], [[Deflationary Token]]

- ### Content
  Circulating Supply represents the liquid, economically active portion of a token's total issuance. It is the figure used to compute market capitalisation (price × circulating supply) and is therefore the most influential supply metric watched by investors, analysts, and protocol governance participants. Circulating supply is not static: it increases as block rewards are minted and vesting schedules unlock previously locked allocations, and it can decrease if tokens are burned by smart contract mechanisms or sent to verifiably unspendable addresses.

  The distinction between circulating supply, total supply, and maximum supply is critical for accurate economic modelling. Total supply includes all minted tokens minus burned tokens but may include locked or unvested tokens that are not yet tradeable. Maximum supply is the hard cap that cannot be exceeded—it may equal total supply in a fully emitted fixed-supply token, or exceed it for tokens with future planned emissions. Data aggregators such as CoinMarketCap and CoinGecko publish circulating supply figures sourced from protocol APIs and team disclosures, but methodological differences mean these figures can vary between providers.

  Emission schedules define the rate at which new tokens enter circulating supply over time. In proof-of-work chains such as Bitcoin, the emission is governed by block rewards that halve at predetermined block heights, producing a predictable, decelerating supply curve. In proof-of-stake chains, emission is typically a percentage of staked supply per epoch, producing an inflationary supply that may be partially offset by transaction fee burning (as in Ethereum's EIP-1559). Understanding these schedules is essential for projecting future supply dilution and evaluating real yield for token holders.

  Monitoring circulating supply changes is a standard practice in DeFi risk management because sudden large unlocks from vesting contracts can create sell pressure and price dislocations. Protocol treasuries may manage circulating supply actively through buyback-and-burn programmes or liquidity mining incentives, positioning circulating supply as a governed economic lever rather than a purely mechanical output of the emission schedule.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z