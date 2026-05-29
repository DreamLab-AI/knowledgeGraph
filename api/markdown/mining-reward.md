- ### Definition
  A Mining Reward is the economic incentive awarded to the miner who produces a valid block, comprising a block subsidy of newly minted cryptocurrency plus the aggregate transaction fees of all transactions included in that block. The subsidy follows a pre-programmed halving schedule until fees become the sole compensation.

- ### Relationships
  The Mining Reward requires Proof Of Work as the qualifying condition and is integral to the broader Mining process and Consensus Mechanism. It enables the Blockchain Network by making honest mining economically rational and is closely tied to Bitcoin Mining. The Block Reward is the subsidy component of the mining reward, while Transaction Fee represents the fee-revenue component. Miners and Mining Pools are the direct recipients. High Energy Consumption is a consequence of the competition for mining rewards in PoW networks. The economic logic of mining rewards is studied within Blockchain Economics.

- ### Content

  The mining reward serves a dual function in proof-of-work blockchains: it funds the initial distribution of the native currency—replacing the role that central banks play in fiat systems—and it provides the ongoing incentive for miners to expend energy securing the network against attacks. Without the reward, rational miners would have no economic reason to perform proof-of-work computation, and the security guarantees of the chain would collapse.

  In Bitcoin, the block subsidy started at 50 BTC per block at genesis in 2009. The halving mechanism, triggered every 210,000 blocks (approximately four years), reduced it to 25 BTC in 2012, 12.5 BTC in 2016, 6.25 BTC in 2020, and 3.125 BTC in 2024. The scheduled reduction continues until approximately 2140, when the total supply reaches 21 million BTC and the subsidy becomes negligible. This deflationary schedule contrasts with proof-of-stake networks, which typically set ongoing issuance rates rather than strict supply caps.

  The transition from subsidy-dominated to fee-dominated rewards is a major open research question in blockchain economics. Game-theoretic models suggest that in a fee-only regime, rational miners might selectively mine blocks with high-fee transactions, creating unpredictable block intervals and mempool dynamics. Proposed solutions include smooth fee market mechanisms (EIP-1559 in Ethereum, which burns a base fee and rewards miners only tips) and covenants that create predictable transaction demand.

  Mining pool coordination amplifies individual miners' rewards by aggregating hash power and distributing block rewards proportionally, smoothing what would otherwise be a highly variable Poisson-distributed income stream. The economics of mining reward sharing within pools—including variance, fee structures, and strategic withholding attacks—is a substantial sub-field of Blockchain Economics research.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z