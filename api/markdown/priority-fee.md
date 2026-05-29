- ### Definition
  A Priority Fee (also called a miner tip or validator tip) is an optional, user-specified additional payment on top of the base fee in EIP-1559-compatible blockchains, paid directly to the block producer to incentivise preferential inclusion and ordering of a transaction within the next block. By offering a higher tip, users signal urgency and compete for limited block space during periods of network congestion, enabling a market-based transaction prioritisation mechanism. Priority fees are burned alongside the base fee under EIP-1559's fee model only partially — the base fee is burned while the priority fee flows to the validator, aligning incentives for prompt transaction confirmation.

- ### Semantic Classification
  - owl-class:: blockchain:PriorityFee
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[TokenEconomicsDomain]]
  - implemented-in-layer:: [[EconomicLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[Economic Mechanism]]
  - requires:: [[Blockchain Transaction]], [[Consensus Mechanism]]
  - enables:: [[Gas Optimization]], [[MEV]]
  - dependsOn:: [[EIP-1559]], [[Base Fee]]
  - hasPart:: [[Gas]]
  - partOf:: [[Fee Market]], [[Tokenomics]]
  - relatedTo:: [[Transaction Fee]], [[Gas Price]], [[Gas Fee Market]], [[Validator Node]]
  - contrastsWith:: [[Burning Mechanism]]

- ### Content
  The Priority Fee was formalised as a distinct component of Ethereum's fee structure by EIP-1559, activated in the London hard fork (August 2021). Before EIP-1559, users submitted a single gas price bid in a first-price auction; miners included the highest-bidding transactions, creating unpredictability and overpayment. EIP-1559 separated fees into an algorithmically determined base fee (burned permanently) and a discretionary priority fee (paid to the validator).

  From the user's perspective, setting a priority fee involves estimating the competitive tip level required to achieve inclusion within the desired number of blocks. Wallets typically query the mempool to surface recent percentile tip values (e.g., the 50th, 90th, and 99th percentile) and suggest appropriate values for slow, standard, or fast confirmation. During periods of extreme congestion — such as popular NFT mints — priority fees can spike by orders of magnitude as users compete for a fixed block capacity.

  Validators (formerly miners) rationally include transactions offering the highest priority fees first, up to the block gas limit. This creates a secondary market dynamic: MEV searchers use sophisticated strategies to insert their transactions at precise positions within a block's ordering, sometimes paying extremely high priority fees for front-running or arbitrage opportunities. The priority fee thus sits at the intersection of transaction economics, consensus incentives, and MEV extraction.

  In the context of Layer 2 scaling solutions and alternative blockchains with lower base fees, priority fees become less contested but remain structurally present as a validator-incentive mechanism. Cross-chain comparison of priority fee norms is relevant to tokenomics design, particularly when modelling user cost sensitivity and network congestion dynamics.

  <!-- Merged from Priority Fee.md: Blockchain, Transaction Fee -->

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z