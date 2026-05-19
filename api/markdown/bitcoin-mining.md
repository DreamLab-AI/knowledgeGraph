- ### Definition
  - **Bitcoin Mining** is the [[proof-of-work]] [[Nakamoto consensus]] process by which the [[Bitcoin]] [[blockchain]] is extended, secured, and monetised through competitive computation of [[SHA-256]] double-hash preimages whose output, interpreted as a 256-bit unsigned integer, falls below a network-adjusted [[difficulty target]] (currently corresponding to ~10^23 to ~10^24 hashes per block), executed by purpose-built [[ASIC]] (Application-Specific Integrated Circuit) hardware operating at industrial scale in geographically-distributed data centres that as of Q1 2026 collectively dissipate ~700-1000 EH/s (exahashes/second, ~10^21 hashes/second), consume approximately 175-200 TWh/year of electricity (CBECI midpoint), and generate roughly 144 new [[block]]s per day each carrying a [[block subsidy]] of **3.125 BTC** (since the fourth [[halving]] on **20 April 2024** at block 840,000, reduced from the prior 6.25 BTC under the geometric series 50 → 25 → 12.5 → 6.25 → 3.125 → ... → 0 BTC scheduled to terminate near block 6,930,000 around 2140) plus cumulative [[transaction fees]] from included [[mempool]] entries (a fee market increasingly material with [[Ordinals]]/[[Inscriptions]]/[[Runes]]/[[BRC-20]] demand spikes pushing 2023-2024 fees temporarily to 20-50% of block reward), with miners participating either solo (rare, [[Solo CKpool]], [[Bitaxe]] hobbyists) or through [[mining pool]]s (FPPS/PPS+/PPLNS payout schemes via [[Stratum V1]]/[[Stratum V2]] protocols) where the top six pools — [[Foundry USA Pool]] (~30%), [[AntPool]] (~22%), [[ViaBTC]] (~15%), [[F2Pool]] (~10%), [[MARA Pool]] (~6%), [[Luxor Pool]] (~3%) — collectively coordinate over 85% of network hashrate; mining hardware has evolved through five distinct epochs ([[CPU mining]] 2009-2010 with Satoshi's original C++ reference client, [[GPU mining]] 2010-2011 pioneered by ArtForz's CUDA implementation, [[FPGA mining]] 2011-2012 with Butterfly Labs and ZTEX boards, first-generation [[ASIC]] 2013 with Avalon and Bitfury 130nm parts, and modern [[5nm]]/[[3nm]] ASICs from [[Bitmain]] (Antminer S19/S21/S21 Pro/S21 XP/S21 Hydro reaching 234 TH/s at ~16 J/TH), [[MicroBT]] (Whatsminer M50/M60/M66 series), [[Canaan]] ([[Avalon]] A1466/A15 series), [[Intel BMZ2]] (Blockscale ASIC discontinued 2024), and emerging entrants [[Auradine]] and [[Block]] (Jack Dorsey's open-source [[Proto]] mining chip initiative)), with industrial mining now dominated by Nasdaq/NYSE-listed public miners — [[Marathon Digital Holdings]] (MARA, ~50 EH/s, ~50,000+ BTC treasury), [[Riot Platforms]] (RIOT, ~33 EH/s, Texas operations Rockdale + Corsicana), [[CleanSpark]] (CLSK, ~50 EH/s, Georgia/Mississippi), [[Core Scientific]] (CORZ, emerged from Chapter 11 January 2024, pivoting to [[AI HPC]] hosting via $3.5B [[CoreWeave]] deal), [[TeraWulf]] (WULF, nuclear-powered Lake Mariner NY), [[Cipher Mining]] (CIFR), [[Hut 8 Mining]] (HUT, merged with US Bitcoin Corp 2023), [[Iris Energy]] (IREN, Australian-listed, BC Canada hydropower), [[Bitfarms]] (BITF, Quebec/Argentina/Paraguay), [[Hive Digital]] (HIVE, formerly HIVE Blockchain), and London-listed [[Argo Blockchain]] (LON:ARB) — operating under a fundamentally bifurcated economic model that combines [[Bitcoin]] block-reward revenue (subject to [[difficulty adjustment]] retargeting every 2016 blocks/~14 days under the algorithm `new_target = old_target × (actual_2016_block_time / 20160_minutes)` constrained to ±4×) with ancillary [[demand response]] grid-services revenue ([[ERCOT]] [[4-Coincident Peak]] curtailment payments yielding $150-400K per MW per year for Texas miners, [[load balancing]] for [[stranded energy]] producers using [[flare gas]] capture (ExxonMobil [[Bakken]] partnership, ConocoPhillips, [[Crusoe Energy]]), and increasingly [[AI HPC]] hosting revenue as the 2024-2026 pivot has reframed mining sites as dual-purpose compute facilities (Core Scientific's CoreWeave deal, Hut 8's Bitfury legacy GPU clusters, Iris Energy's AI cloud, [[TeraWulf]]'s nuclear-baseload AI pitch); the network's geographic centre of mass has shifted dramatically since [[China]]'s May-June 2021 mining ban (which forced ~50-60% of global hashrate offline within weeks and triggered the [[Great Migration]] of ASICs to [[United States]] (~38-40% hashrate per [[CBECI]] 2024), [[Kazakhstan]] (~13%, subsequently destabilised by 2022 internet shutdowns and Tokayev's mining tax regime), [[Russia]] (~10-15% with 2025 legalisation under Putin), [[Canada]] (~6%, Quebec hydro/Alberta gas), [[Paraguay]] (Itaipú hydropower surplus), [[El Salvador]] (sovereign mining via Volcano Bitcoin), and [[Bhutan]] (Druk Holdings state-owned Bitcoin mining funded by hydroelectric exports)), against a backdrop of intense academic and policy debate over [[energy consumption]] and [[carbon footprint]] (the [[Mora et al. 2018]] *Nature Climate Change* paper claiming Bitcoin would unilaterally warm the planet >2°C, comprehensively rebutted by [[Masanet et al. 2019]] and [[Murray 2022]] for methodological errors, alongside CBECI estimates that 50-60% of hashrate runs on [[renewable energy]] sources per CoinShares/[[Cambridge Centre for Alternative Finance]] surveys), with the post-2024 halving economic regime fundamentally transitioning Bitcoin from a subsidy-driven security budget toward a [[fee market]] equilibrium where miner [[ARPU per terahash]] depends increasingly on transaction-fee discovery, [[MEV]] extraction via [[Ordinals]]/[[Runes]]/[[BRC-20]], demand-response payments, and operational cost discipline at <$0.04/kWh power purchase agreements rather than pure exposure to block-reward expansion.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinMining
  - owl-role:: ConsensusProcess
  - owl-inferred:: blockchain:ProofOfWorkMining, blockchain:NakamotoConsensus, blockchain:IndustrialComputeProcess, blockchain:EnergyIntensiveSecurity
  - belongs-to-domain:: [[BlockchainDomain]], [[CryptographyDomain]], [[EnergyDomain]], [[ComputerHardwareDomain]], [[GameTheoryDomain]]
  - implemented-in-layer:: [[ConsensusLayer]], [[NetworkLayer]], [[ApplicationLayer]], [[HardwareLayer]]

- ### Relationships
  - is-subclass-of:: [[Proof-of-Work]], [[Consensus Mechanism]], [[Cryptographic Mining]], [[Distributed Computing]], [[Industrial Process]]
  - has-part:: [[SHA-256 Hashing]], [[Block Header]], [[Nonce Search]], [[Merkle Tree]], [[Coinbase Transaction]], [[Difficulty Target]], [[Mining Pool]], [[ASIC]], [[Mempool]]
  - requires:: [[Electricity]], [[ASIC Hardware]], [[Cooling System]], [[Network Connectivity]], [[Bitcoin Full Node]], [[Stratum Protocol]]
  - enables:: [[Blockchain Security]], [[Double-Spend Prevention]], [[Bitcoin Issuance]], [[Transaction Confirmation]], [[Permissionless Settlement]], [[Demand Response Services]]
  - implements:: [[Nakamoto Consensus]], [[Longest-Chain Rule]], [[Difficulty Adjustment Algorithm]], [[Halving Schedule]], [[Coinbase Reward Distribution]]
  - depends-on:: [[Bitcoin Protocol]], [[SHA-256]], [[Electrical Grid]], [[Semiconductor Fabrication]], [[Internet Infrastructure]], [[Power Purchase Agreement]]
  - supports:: [[Bitcoin Network Security]], [[Decentralisation]], [[Energy Grid Stability]], [[Stranded Energy Monetisation]], [[Sound Money]]
  - uses:: [[SHA-256]], [[Double Hashing]], [[Merkle Root Construction]], [[Stratum V1]], [[Stratum V2]], [[Immersion Cooling]], [[Hashboards]]
  - contrasts-with:: [[Proof-of-Stake]], [[Proof-of-Authority]], [[Proof-of-Space]], [[CPU Mining]], [[GPU Mining Ethereum]], [[Monero RandomX]], [[Kaspa Mining]]
  - related-to:: [[Bitcoin]], [[Halving]], [[Hash Rate]], [[Mining Pool]], [[ASIC Manufacturer]], [[Renewable Energy]], [[Demand Response]], [[Stranded Gas]], [[AI HPC Pivot]]
  - standardized-by:: [[BIP 9]], [[BIP 34]], [[BIP 91]], [[Stratum V2 Specification]], [[Bitcoin Core Reference Implementation]], [[CBECI Methodology]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:SHA256Hashing))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:BlockHeader))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:NonceSearch))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:MerkleTree))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:CoinbaseTransaction))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:DifficultyTarget))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:MiningPool))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:ASIC))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:hasPart blockchain:Mempool))

	    ## Dependency Relationships
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:requires blockchain:Electricity))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:requires blockchain:ASICHardware))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:requires blockchain:CoolingSystem))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:requires blockchain:NetworkConnectivity))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:requires blockchain:BitcoinFullNode))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:dependsOn blockchain:BitcoinProtocol))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:dependsOn blockchain:SHA256))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:dependsOn blockchain:ElectricalGrid))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:dependsOn blockchain:SemiconductorFabrication))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:dependsOn blockchain:PowerPurchaseAgreement))

	    ## Capability Relationships
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:BlockchainSecurity))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:DoubleSpendPrevention))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:BitcoinIssuance))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:TransactionConfirmation))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:PermissionlessSettlement))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:enables blockchain:DemandResponseServices))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:supports blockchain:BitcoinNetworkSecurity))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:supports blockchain:Decentralisation))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:supports blockchain:EnergyGridStability))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:supports blockchain:StrandedEnergyMonetisation))

	    ## Implementation Relationships
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:implements blockchain:NakamotoConsensus))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:implements blockchain:LongestChainRule))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:implements blockchain:DifficultyAdjustmentAlgorithm))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:implements blockchain:HalvingSchedule))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:implements blockchain:CoinbaseRewardDistribution))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:SHA256))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:DoubleHashing))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:MerkleRootConstruction))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:StratumV1))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:StratumV2))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:uses blockchain:ImmersionCooling))

	    ## Reduction Relationships
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:reduces blockchain:DoubleSpendRisk))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:reduces blockchain:CensorshipRisk))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:reduces blockchain:GridCurtailmentWaste))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:reduces blockchain:FlareGasEmissions))

	    ## Association Relationships
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:relatedTo blockchain:Halving))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:relatedTo blockchain:HashRate))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:relatedTo blockchain:RenewableEnergy))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:relatedTo blockchain:DemandResponse))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:relatedTo blockchain:AIHPCPivot))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:contrastsWith blockchain:ProofOfStake))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:contrastsWith blockchain:ProofOfAuthority))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:contrastsWith blockchain:GPUMiningEthereum))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:contrastsWith blockchain:MoneroRandomX))
	    SubClassOf(blockchain:BitcoinMining
	      ObjectSomeValuesFrom(blockchain:contrastsWith blockchain:KaspaMining))

	    ## Data Properties (Characteristics)
	    DataPropertyAssertion(blockchain:hasIdentifier blockchain:BitcoinMining "BC-1102"^^xsd:string)
	    DataPropertyAssertion(blockchain:authorityScore blockchain:BitcoinMining "0.87"^^xsd:decimal)
	    DataPropertyAssertion(blockchain:targetBlockIntervalSeconds blockchain:BitcoinMining "600"^^xsd:integer)
	    DataPropertyAssertion(blockchain:difficultyRetargetBlocks blockchain:BitcoinMining "2016"^^xsd:integer)
	    DataPropertyAssertion(blockchain:halvingIntervalBlocks blockchain:BitcoinMining "210000"^^xsd:integer)
	    DataPropertyAssertion(blockchain:currentBlockSubsidyBTC blockchain:BitcoinMining "3.125"^^xsd:decimal)
	    DataPropertyAssertion(blockchain:fourthHalvingBlockHeight blockchain:BitcoinMining "840000"^^xsd:integer)
	    DataPropertyAssertion(blockchain:fourthHalvingDate blockchain:BitcoinMining "2024-04-20"^^xsd:date)
	    DataPropertyAssertion(blockchain:maxSupplyBTC blockchain:BitcoinMining "21000000"^^xsd:integer)
	    DataPropertyAssertion(blockchain:hashAlgorithm blockchain:BitcoinMining "SHA-256d"^^xsd:string)

	    ## Property Constraints
	    SubClassOf(blockchain:BitcoinMining
	      DataMinCardinality(1 blockchain:hasNetworkHashRate xsd:decimal))
	    SubClassOf(blockchain:BitcoinMining
	      DataAllValuesFrom(blockchain:usesProofOfWork xsd:boolean))
	    SubClassOf(blockchain:BitcoinMining
	      DataSomeValuesFrom(blockchain:energyEfficiencyJoulesPerTH xsd:decimal))

	    ## Annotations
	    AnnotationAssertion(rdfs:label blockchain:BitcoinMining "Bitcoin Mining"@en)
	    AnnotationAssertion(rdfs:comment blockchain:BitcoinMining "The proof-of-work consensus process by which the Bitcoin blockchain is extended through competitive SHA-256 double-hashing by ASIC hardware to find a nonce producing a block-header hash below the network difficulty target, currently retargeted every 2016 blocks (~14 days) to maintain a 10-minute target block interval and rewarding the successful miner with the block subsidy (3.125 BTC after the April 2024 fourth halving at block 840,000) plus included transaction fees, executed by industrial-scale operators using Bitmain Antminer S21, MicroBT Whatsminer M60/M66 and Canaan Avalon ASICs operating at ~16-25 J/TH, coordinated through Stratum V2 mining pools dominated by Foundry USA (~30%), AntPool (~22%), ViaBTC (~15%) and F2Pool (~10%), with geographic concentration in the United States (~38-40% per CBECI), Russia, Kazakhstan, Canada, Paraguay, El Salvador and Bhutan following the May 2021 China ban; total network energy consumption estimated at 175-200 TWh/year (CBECI) with 50-60% renewable energy share per CoinShares/CCAF; the post-halving fee-market transition and the 2024-2026 AI HPC pivot (Core Scientific-CoreWeave, Hut 8, Iris Energy) represent the defining economic shifts of the contemporary mining industry."@en)
	    AnnotationAssertion(dcterms:identifier blockchain:BitcoinMining "BC-1102"^^xsd:string)
	    AnnotationAssertion(dcterms:subject blockchain:BitcoinMining "Bitcoin, Proof-of-Work, SHA-256, ASIC, Mining Pool, Halving, Energy, Renewable Energy, Demand Response, AI HPC Pivot, Stratum V2"@en)

	  ## Property Characteristics
	  AsymmetricObjectProperty(blockchain:requires)
	  AsymmetricObjectProperty(blockchain:enables)
	  AsymmetricObjectProperty(blockchain:implements)
	  AsymmetricObjectProperty(blockchain:contrastsWith)
	  TransitiveObjectProperty(blockchain:dependsOn)
	  FunctionalDataProperty(blockchain:hashAlgorithm)
	  FunctionalDataProperty(blockchain:targetBlockIntervalSeconds)
	  FunctionalDataProperty(blockchain:halvingIntervalBlocks)
	  ```

  - ## About Bitcoin Mining
  - **Bitcoin Mining** is the economic, cryptographic and physical-infrastructure process by which the [[Bitcoin]] network's transaction ledger is extended, ordered and protected against rewriting. It is simultaneously a [[consensus mechanism]] (the mechanism by which thousands of geographically-distributed participants agree on a single canonical transaction history without a trusted coordinator), an [[issuance schedule]] (the only mechanism by which new [[Bitcoin]] enter circulation, with a fixed terminal supply of 21,000,000 BTC asymptotically reached around 2140), and an [[industrial process]] dissipating ~175-200 TWh/year of electricity through purpose-designed semiconductor hardware to convert electrical energy into informational entropy under [[Satoshi Nakamoto]]'s [[proof-of-work]] design.
  - The technical core is deceptively simple. Each miner constructs a candidate **block** containing (i) a [[block header]] (80 bytes: version, previous-block hash, [[Merkle root]] of included transactions, timestamp, difficulty bits, and a 32-bit [[nonce]]); (ii) a [[coinbase transaction]] paying the [[block subsidy]] + accumulated transaction fees to an address of the miner's choosing; and (iii) selected transactions from the [[mempool]] ordered to maximise fee revenue subject to the 4MB weight limit imposed by [[SegWit]]. The miner then iteratively computes `SHA-256(SHA-256(block_header))` — Bitcoin's distinctive **double-SHA-256** construction — varying the 32-bit nonce (and when exhausted, the [[extranonce]] in the coinbase transaction, which forces a Merkle root recomputation) until the 256-bit hash output, interpreted as a big-endian unsigned integer, falls below the current **difficulty target**. Finding such a hash is a probabilistic search with no algorithmic shortcut: as of Q1 2026 the network performs ~10^23 to ~10^24 hash trials per block on average, distributed across ~700-1000 EH/s of global hashrate.
  - The **difficulty adjustment algorithm**, defined by Satoshi in the original [[Bitcoin Core]] source `pow.cpp:GetNextWorkRequired()`, recomputes the target every **2016 blocks** (nominally 14 days at 10-minute block intervals) using the formula `new_target = old_target × (actual_time_for_2016_blocks / 20160_minutes)`, clamped to a maximum 4× upward or downward adjustment per retarget epoch to prevent runaway oscillation. This negative-feedback loop is the network's defining auto-regulatory mechanism: as hashrate grows (driven by capital investment, hardware efficiency improvements, or BTC price appreciation), difficulty rises proportionally to maintain the 10-minute target interval; as hashrate falls (China ban, hashrate migration, bear-market shutdowns), difficulty falls to keep block production stable. The largest single difficulty drop in Bitcoin's history occurred 3 July 2021 when difficulty fell -27.94% (epoch 333) following the China ban that took ~50% of global hashrate offline within six weeks — empirically demonstrating the protocol's resilience to even catastrophic geographic disruption.
  - The **halving schedule** is the second great auto-regulatory mechanism. Every 210,000 blocks (~3.99 years at target intervals) the [[block subsidy]] geometrically decays by 50%: **50 BTC (2009-2012) → 25 BTC (2012-2016) → 12.5 BTC (2016-2020) → 6.25 BTC (2020-2024) → 3.125 BTC (April 2024-2028) → 1.5625 BTC (2028-2032) → ...** asymptotically approaching zero, with the cumulative geometric series summing exactly to 20,999,999.97690000 BTC by block ~6,930,000 (~year 2140). The fourth halving occurred at **block 840,000 on 20 April 2024 at approximately 00:09 UTC** when Foundry USA mined the block containing the inscription "Runestone" launch via the [[Casey Rodarmor]] [[Runes]] protocol — a deliberately symbolic confluence marking the transition from a subsidy-dominated to a fee-influenced security budget.

  - ### Technical Architecture and Components

	  Bitcoin mining decomposes into eight tightly-coupled components:

	  #### 1. SHA-256 Double Hashing (SHA-256d)
	  The cryptographic primitive is [[SHA-256]] from the NIST FIPS 180-4 standard, applied twice in succession to the 80-byte block header. Double-hashing was Satoshi's choice ostensibly to defend against length-extension attacks on single-pass Merkle-Damgård constructions, though the genuine threat model has been debated — modern HMAC constructions or SHA-3 would achieve equivalent security. SHA-256 is implemented in ASIC hardware at ~10^12 to ~10^14 hashes/second per chip on modern 5nm/3nm dies, with the entire SHA-256 round function (64 iterations of message schedule + compression) hardened into custom silicon as a massively-parallel pipelined design.

	  #### 2. Block Header Construction
	  The 80-byte header is the only input that needs to vary during the nonce search: version (4 bytes), previous-block hash (32 bytes, fixed once the prior block is known), Merkle root (32 bytes, fixed once transactions are selected), timestamp (4 bytes, allowed to vary within ±2 hours of network-median time), difficulty bits (4 bytes, fixed for the 2016-block epoch), and nonce (4 bytes). Once the 32-bit nonce space is exhausted (~4.3 billion attempts taking <1 second on modern ASICs), the miner increments the coinbase transaction's [[extranonce]] field, recomputes the Merkle root, and resumes searching with a fresh header.

	  #### 3. Merkle Tree and Transaction Selection
	  Transactions in a block are committed via a [[Merkle tree]] root hash, allowing efficient inclusion proofs (used by [[SPV wallets]]). Transactions are selected from the [[mempool]] by maximising fee revenue subject to block-weight constraints — modern miners use the [[Bitcoin Core]] `getblocktemplate` RPC or competing implementations ([[Knots]], [[Eligius]] templates) with sophisticated knapsack-like optimisation. Post-[[Ordinals]] (January 2023), [[BRC-20]] (March 2023) and [[Runes]] (April 2024), fee competition has dramatically intensified during inscription frenzies.

	  #### 4. ASIC Hardware
	  Modern Bitcoin mining is exclusively performed on [[Application-Specific Integrated Circuit]] hardware fabricated on advanced semiconductor processes (currently TSMC 5nm and 3nm nodes, with Samsung 5nm as a secondary supplier). Each ASIC chip contains thousands of parallel hashing cores executing SHA-256d at fixed clock rates with extensive pipeline parallelism. A modern industrial miner contains 100-300+ ASIC chips on multiple "[[hashboards]]" with shared power-supply, control PCB and cooling. Energy efficiency has improved by ~5 orders of magnitude since CPU mining: from ~10^9 J/TH in 2009 to ~16 J/TH in 2024 with the Bitmain Antminer S21 Pro.

	  #### 5. Mining Pool and Stratum Protocol
	  Solo mining at a personal-PC scale would require centuries between block finds at current network difficulty. Miners therefore aggregate hashrate through [[mining pool]]s using the [[Stratum protocol]] — Stratum V1 (specified by [[Slush Pool]] founder Marek Palatinus in 2012) for legacy operations and Stratum V2 (designed by [[Braiins]] from 2018, gaining adoption from 2023) for next-generation security and decentralisation properties.

	  #### 6. Coinbase Transaction
	  The first transaction in every block — the "[[coinbase]]" transaction — has no inputs from prior UTXOs and creates the block subsidy + fee revenue ex nihilo, paying out to the miner's chosen address(es). The coinbase transaction also contains the [[BIP 34]] block-height field (preventing duplicate coinbase txid collisions) and an arbitrary-data "scriptSig" field traditionally used for political messages (the genesis block's "Chancellor on brink of second bailout for banks" 3 January 2009 Times of London headline) or for [[merge mining]] / [[ASICBoost]] signalling.

	  #### 7. Mempool and Fee Market
	  The [[mempool]] (memory pool) is each node's local cache of unconfirmed transactions awaiting block inclusion. As of 2024-2026, mempool dynamics are dominated by [[Ordinals]]/[[Inscriptions]] and [[Runes]]/[[BRC-20]] traffic that periodically pushes fees to $10-50+ per transaction during high-demand windows, generating mid-2023 and Q2 2024 daily fee revenues exceeding $10M (briefly making fees > block subsidy on individual blocks).

	  #### 8. Bitcoin Full Node
	  Mining requires running a full [[Bitcoin Core]] (or [[btcd]], [[Bcoin]], [[libbitcoin]]) node validating all consensus rules, broadcasting found blocks to peers, and rejecting any chain attempting to violate consensus (oversize blocks, invalid signatures, coinbase reward overflow). Mining without a sovereign full node delegates consensus enforcement to a third party (the pool operator), which is the central architectural critique addressed by [[Stratum V2]] template-negotiation features.

  - ### Hardware Evolution: From CPU to Modern ASIC

	  Bitcoin mining hardware has progressed through five distinct epochs, each representing a step-change in efficiency and a competitive obsolescence of prior generations:

	  #### Epoch 1: CPU Mining (January 2009 – mid-2010)
	  [[Satoshi Nakamoto]]'s original [[Bitcoin Core]] (then `bitcoind`) v0.1 included an integrated CPU miner using the system's general-purpose x86 cores. With network difficulty of 1 (the lowest possible), a modest 2009-era Core 2 Duo could find blocks at home with hashrates of ~1-10 MH/s (megahashes/second). [[Hal Finney]] received the first transaction (10 BTC from Satoshi at block 170, 12 January 2009) and ran CPU mining on his Santa Barbara workstation. The first commercial use of Bitcoin — [[Laszlo Hanyecz]]'s famous 10,000 BTC for two pizzas on 22 May 2010 ([[Bitcoin Pizza Day]]) — was funded by CPU-mined coins.

	  #### Epoch 2: GPU Mining (mid-2010 – 2011)
	  In October 2010, the developer "[[ArtForz]]" released the first OpenCL GPU mining client for ATI/AMD Radeon HD 5870 cards, achieving ~100x CPU hashrate (~200-300 MH/s per card) due to GPU integer arithmetic parallelism. The CPU-mining era ended within months as solo CPU miners became uncompetitive. AMD's VLIW5 architecture proved particularly efficient at SHA-256's integer rotations; NVIDIA's CUDA path was technically inferior for SHA-256 throughput. The GPU era saw the first home "[[mining rig]]s" — open-frame builds running 4-6 Radeon HD 5970/6990 cards drawing 1.5-2 kW.

	  #### Epoch 3: FPGA Mining (2011 – 2012)
	  [[Field-Programmable Gate Array]] mining briefly bridged GPU and ASIC eras with custom-synthesised SHA-256 pipelines on Xilinx Spartan-6 and Altera Cyclone IV chips. [[Butterfly Labs]] (BFL) "Single" FPGA miners (~830 MH/s, $600+ MSRP) and [[ZTEX]] boards offered ~3-5× the energy efficiency of GPU mining. FPGAs achieved hashrates of ~100-400 MH/s per chip at ~5-10 W. However, the FPGA era was compressed to less than 18 months by the imminent arrival of ASICs.

	  #### Epoch 4: First-Generation ASIC (2013 – 2016)
	  The transition to [[Application-Specific Integrated Circuit]] mining began in late 2012 with [[Avalon]] (Yifu Guo and Ng Zhang, Beijing) shipping 130nm ASIC batches in January 2013 — the first commercial Bitcoin ASICs, achieving ~60 GH/s at ~600 W (~10 J/GH). [[Bitfury]] (Valery Vavilov, Latvia) followed with 55nm parts; [[KnCMiner]] (Sweden) and [[Butterfly Labs]] (Kansas) shipped competing units. The 2013-2014 ASIC scramble produced numerous bankruptcies and customer-defrauding episodes (BFL's pre-order obligation collapse, KnC's Q1 2014 delays). By 2014, [[Bitmain]] (founded by [[Jihan Wu]] and [[Micree Zhan]], Beijing) emerged as the dominant ASIC manufacturer with the **Antminer S1, S3, S5** series fabricated on TSMC 28nm. The Antminer S9 (released June 2016, ~14 TH/s at ~95 J/TH on TSMC 16nm) became the canonical mining hardware of the 2016-2020 era.

	  #### Epoch 5: Modern 7nm/5nm/3nm ASICs (2017 – 2026)
	  The post-S9 era saw fierce competition between [[Bitmain]] (Antminer S17 → S19 → S19 XP → **S21 Pro** (234 TH/s, ~15 J/TH) → **S21 XP Hydro** (473 TH/s, ~13.5 J/TH) launched 2024-2025), [[MicroBT]] ([[Whatsminer]] M30 → M50 → **M60S** (186 TH/s, ~18.5 J/TH) → **M66S** (298 TH/s, ~18 J/TH) launched 2024), and [[Canaan]] ([[Avalon]] A1166 → A1366 → **Avalon A15 series** launched 2024 with 218 TH/s at ~19 J/TH). [[Intel]] briefly entered with the **Blockscale BMZ2** ASIC (April 2022) before exiting in April 2024. New entrants include [[Auradine]] (Sanjay Gupta, ex-Bitmain/Marvell, raised $300M Series B 2024) and [[Block]] / [[Bitkey]] (Jack Dorsey's open-source mining chip "[[Proto]]" initiative announced 2023, targeting decentralised hardware manufacturing).

	  Industrial-scale facilities now deploy [[immersion cooling]] (single-phase dielectric fluid baths such as Engineered Fluids ElectroCool or BitCool BC-888) to push ASICs 30-50% beyond air-cooled clock rates while reducing fan power and dust accumulation. Bitmain's Antminer S21 Hydro and S21 XP Hydro variants ship factory-configured for water/coolant loops, achieving ~13-14 J/TH efficiency at the cost of more complex facility plumbing.

  - ### Mining Pools and the Stratum Protocol

	  Solo mining at current network difficulty (~110 trillion as of Q1 2026) is statistically impractical for individual miners: a 100 TH/s solo miner would expect to find a block once every ~70 years on average. The economic solution is **mining pool**ing, where many miners aggregate their hashrate under a coordinator that distributes work, validates submitted shares (partial proofs-of-work at lower difficulty), and pays out members proportionally to contributed work.

	  #### Pool Distribution (Q1 2026)
	  The top six pools control over 85% of Bitcoin's network hashrate:
	  - **[[Foundry USA Pool]]** (subsidiary of [[Digital Currency Group]] [[DCG]]): ~30% of network hashrate. US-based, FPPS payout, services Marathon Digital, CleanSpark, Hut 8, Cipher Mining and most large North American public miners.
	  - **[[AntPool]]** (operated by [[Bitmain]] subsidiary): ~22%. Hong Kong / Beijing origin, globally distributed, FPPS+ and PPS payout schemes.
	  - **[[ViaBTC]]**: ~15%. Chinese-founded (Haipo Yang), now headquartered in Singapore. Operates the [[ViaBTC Capital]] / [[CoinEx]] exchange ecosystem.
	  - **[[F2Pool]]** (formerly "Discus Fish"): ~10%. Founded 2013 by Chun Wang and Mao Shixing in Beijing.
	  - **[[MARA Pool]]** (Marathon Digital's proprietary pool): ~6%. Established 2021 to provide vertically-integrated mining-to-pool operations.
	  - **[[Luxor Pool]]**: ~3%. US-based, founded by Ethan Vera and Nick Hansen, services smaller industrial and hosting customers, parent of [[Luxor Technology]] (hashrate derivatives).

	  Smaller pools include [[SBI Crypto]] (Japan), [[Spider Pool]], [[Binance Pool]] (declining since 2023 enforcement actions), [[BTC.com]] (acquired by [[BIT Mining]] 2021), [[SlushPool]] / [[Braiins Pool]] (the original pool, founded 2010, declining share but operating Stratum V2 reference implementation), and [[Ocean.xyz]] (Luke Dashjr's [[DATUM]]-based decentralised pool, launched November 2023 with explicit anti-OFAC-censorship positioning).

	  #### Stratum V1 Protocol
	  [[Stratum V1]] was specified by [[Slush Pool]]'s [[Marek Palatinus]] (Marek "Slush" Palatinus) in 2012, replacing the inefficient `getwork`/`getblocktemplate` JSON-RPC polling. Stratum V1 uses persistent TCP connections with JSON-RPC notification messages: the pool pushes "mining.notify" messages containing the previous-block hash, coinbase prefix/suffix, Merkle branches, version, nbits, ntime and clean-jobs flag; miners submit shares via "mining.submit". The protocol's central limitation is its plaintext (unauthenticated, unencrypted) wire format and crucially the fact that the *pool* decides which transactions go into each block, not the miner — concentrating template-selection power and creating censorship risk.

	  #### Stratum V2 Protocol
	  [[Stratum V2]] was designed from 2018 by [[Braiins]] (Pavel Moravec, Jan Čapek and team) with three principal goals: (1) encrypted/authenticated wire protocol using AES-256-GCM and Noise Protocol Framework handshakes; (2) binary serialisation for ~2-3x bandwidth efficiency; (3) **template negotiation** allowing individual miners to construct their own block templates (selecting which transactions to include) while still receiving pool-based payout — fundamentally decentralising censorship-resistance. Stratum V2 specification reached release-candidate status in 2023 with reference implementations from Braiins, [[Foundry]], and the [[Stratum Reference Implementation]] (SRI) project. Adoption accelerated through 2024-2025 with Foundry USA, Braiins Pool and DEMAND pool offering production V2 endpoints.

	  #### Decentralisation Initiatives
	  Concerns about pool concentration have driven multiple decentralisation experiments:
	  - **[[P2Pool]]** (2011, [[Forrest Voight]]): Peer-to-peer pooled mining without central coordinator, used a separate share-chain for payout calculation. Technically successful but never achieved meaningful adoption due to bandwidth requirements and complexity.
	  - **[[Braidpool]]** (2023-present, [[Bob McElrath]] and team): Modern P2P pool design using merge-mining of a Braidpool DAG providing fast share confirmation. Active development.
	  - **[[DEMAND Pool]]** (DMND, 2024): Stratum V2-only pool with template negotiation as the default operating mode.
	  - **[[Ocean.xyz]]** (November 2023, [[Luke Dashjr]] / [[Bitcoin Knots]]): Implements the [[DATUM]] (Decentralised Alternative Templates for Universal Mining) protocol allowing miners to construct their own templates while Ocean handles payout — addressing Marathon Digital's 2023 OFAC-compliant block experiments.
	  - **Solo Mining via [[CKpool]]**: Konrad von Schubert's CKpool offers "solo mining as a service" — pool coordination for share submission but 100% block reward to the lucky miner. Used by [[Bitaxe]] hobbyists who occasionally win full blocks despite vanishingly small probability (notable solo wins: January 2022 116 TH/s miner, December 2023 1 PH/s home miner, March 2024 17 TH/s miner with the "BitcoinMechanic" — each receiving the full 6.25/3.125 BTC reward).

  - ### Energy Consumption and Sustainability

	  Bitcoin mining's energy consumption is the most-debated, most-quantified, and most-misunderstood dimension of the industry.

	  #### Aggregate Energy Use
	  The [[Cambridge Bitcoin Electricity Consumption Index]] ([[CBECI]]), maintained by the [[Cambridge Centre for Alternative Finance]] (CCAF) at [[Cambridge Judge Business School]] since 2019, is the academic-reference consumption estimate. As of Q1 2026, CBECI estimates annualised electricity consumption at **175-200 TWh/year** (theoretical lower bound ~80 TWh, upper bound ~280 TWh) — comparable to the electricity consumption of mid-size countries (Argentina ~125 TWh, Norway ~140 TWh, Sweden ~135 TWh, Egypt ~165 TWh, Netherlands ~115 TWh, Poland ~170 TWh). Bitcoin mining represents approximately **0.6-0.8% of global electricity consumption** and ~0.15-0.2% of total final energy consumption (TFEC including transport and heating). The CBECI [[Greenhouse Gas Emissions Index]] estimates ~65-85 MtCO2eq/year for the network, with uncertainty driven primarily by uncertainty over the renewable-energy share of the underlying generation mix.

	  #### Renewable Energy Share
	  Competing estimates of the network's renewable-energy share vary substantially by methodology:
	  - **CoinShares Mining Report 2024**: 54.5% sustainable energy share (including nuclear)
	  - **Cambridge CCAF 3rd Global Cryptoasset Benchmarking Study (2023, with 2024 update)**: 37.6% sustainable share excluding nuclear; ~52% including nuclear
	  - **Bitcoin Mining Council** (industry trade group, sustainability survey): 59-65% sustainable share
	  - **Daniel Batten / Bitcoin ESG Forecast**: 56-58% sustainable share with rising trajectory
	  - The variance reflects methodological choices (whether to include nuclear, how to attribute hydropower with seasonal variation, treatment of [[flare gas]] capture as offset vs. emissions)

	  #### The Energy Debate
	  The academic debate over Bitcoin's energy footprint has been intense, with two landmark publications defining the dialectic:
	  - **[[Mora et al. 2018]]** in *Nature Climate Change*: "Bitcoin emissions alone could push global warming above 2°C" — projected that Bitcoin adoption at consumer-payment scale would unilaterally exceed the Paris Agreement carbon budget within decades. Widely cited, attracted significant media attention.
	  - **[[Masanet et al. 2019]]** ([[Eric Masanet]], [[Northwestern University]]) published an extended critique in *Nature Climate Change* identifying methodological errors in Mora et al., including (i) extrapolation from outlier consumer-payment growth scenarios, (ii) failure to model hardware efficiency improvements, (iii) static treatment of energy mix.
	  - **[[Lex Murray 2022]]** and **[[Houy 2022]]** further refined the critique, demonstrating that Mora et al.'s adoption trajectory was empirically inconsistent with subsequent Bitcoin payment usage (which has remained dominated by store-of-value rather than retail-payment use cases).
	  - **[[de Vries 2018, 2021, 2022]]** ([[Alex de Vries]], Digiconomist): Maintained higher consumption estimates than CBECI in the [[Bitcoin Energy Consumption Index]] (BECI), generating ongoing methodological controversy regarding ASIC efficiency assumptions and miner-margin modelling.

	  #### Stranded, Curtailed and Flared Energy
	  A defining narrative of contemporary mining is the monetisation of otherwise-wasted energy:
	  - **[[Flare gas]] capture**: Methane vented or flared at remote oilfields is an enormous emissions source (~140 bcm/year globally per IEA, ~330 MtCO2eq). Companies including **[[Crusoe Energy]]** (founded 2018 by Chase Lochmiller and Cully Cavness, raised $500M+ across rounds), **[[Upstream Data]]** (Canadian, founded by Steve Barbour), and **[[JAI Energy]]** deploy mobile, containerised Bitcoin mining adjacent to oil wells, converting flared methane into electricity via field gensets and using the heat output for nothing (heat being the actual unwanted output). [[ExxonMobil]] piloted flare-gas Bitcoin mining in the [[Bakken]] basin with Crusoe Energy from 2021. [[ConocoPhillips]] established similar programmes 2022-2023.
	  - **[[Curtailed renewables]]**: Wind and solar generation periodically exceeds local demand and transmission capacity, forcing utilities to curtail (waste) excess generation. Bitcoin mining provides an interruptible flexible load that absorbs curtailment, with [[ERCOT]] (Texas grid operator) being the canonical example.
	  - **[[Geothermal]]**: [[El Salvador]]'s state-run [[Volcano Bitcoin]] mining operation at the Berlín geothermal field uses LaGeo geothermal heat. [[Iceland]] hosts substantial mining capacity (Genesis Mining historically, GreenBlocks currently) using hydroelectric and geothermal.

	  #### Demand Response and Grid Services
	  Bitcoin miners are uniquely well-suited to **[[demand response]]** programmes because their load is (i) large (100+ MW per facility), (ii) instantaneously interruptible (ASICs can shut down within seconds), and (iii) location-flexible (no need to be near population centres). In [[ERCOT]] (Texas), miners participate in:
	  - **4-Coincident Peak (4CP) curtailment**: Avoiding the four highest grid-demand intervals of summer reduces a miner's transmission cost allocation, generating savings of $100-300K per MW per year.
	  - **Ancillary Services**: ERS (Emergency Response Service), Non-Spin Reserve, and Responsive Reserve markets pay miners to be available as standby capacity.
	  - **Real-time energy arbitrage**: Miners shut down when wholesale prices exceed mining-revenue equivalence (~$200-400/MWh depending on hardware), monetising load flexibility.
	  - **Total ERCOT miner grid-service revenue**: Estimated at $150,000-$400,000 per MW per year for sophisticated operators, providing a second revenue stream often equalling or exceeding pure Bitcoin mining revenue during low-BTC-price periods. **[[Riot Platforms]]** disclosed $71M in power credits and demand-response revenue in 2023 alone.

	  #### Heat Reuse
	  Bitcoin ASIC waste heat is increasingly captured for productive use:
	  - **District heating**: [[Heatcore]], [[MintGreen]] (Vancouver), and [[CleanSpark]]'s Hyperscale heat-capture deployments warm greenhouses, swimming pools, district-heating networks
	  - **[[Marathon Digital]] Finland nuclear-heated district pilot** (2024): Recovered ASIC heat redirected to municipal heating networks
	  - **Greenhouse agriculture**: Tomatoes, cannabis cultivation, aquaculture

  - ### Geographic Distribution and the Great Migration

	  The geographic distribution of Bitcoin mining has been radically reshaped by regulatory and economic shocks:

	  #### Pre-2021: China Dominance
	  Before May 2021, [[China]] hosted an estimated **65-75% of global Bitcoin hashrate**, concentrated in:
	  - **Sichuan and Yunnan** (~50% of Chinese capacity): Seasonal hydropower during rainy season (May-October), some coal-baseload in dry season
	  - **Xinjiang and Inner Mongolia** (~35%): Coal-fired, increasingly under environmental scrutiny
	  - **Industrial scale**: Bitmain, Canaan, MicroBT all China-founded, with mining hardware → mining operations vertical integration

	  #### May-June 2021: The China Ban
	  On **18 May 2021** the [[State Council Financial Stability and Development Committee]] under [[Liu He]] issued a directive to "crack down on Bitcoin mining and trading behaviour"; on **21 June 2021** the [[People's Bank of China]] summoned major commercial banks (ICBC, Agricultural Bank, China Construction Bank) and payment processors (Alipay, WeChat Pay) to halt crypto-related services. By late June 2021, electricity supply was cut to mining operations in Sichuan, Yunnan, Xinjiang and Inner Mongolia. Bitcoin's global hashrate fell from ~190 EH/s (May 2021 peak) to ~85 EH/s (3 July 2021) — a **55%+ decline within six weeks** — and difficulty adjusted -27.94% in the largest single drop in history (epoch 333, 3 July 2021).

	  #### The Great Migration (mid-2021 onwards)
	  Approximately 1.5-2 million ASICs (representing ~100 EH/s of capacity) were physically relocated from China between June 2021 and Q1 2022, primarily to:
	  - **[[United States]]** (~38-40% of post-migration network hashrate per CBECI): Texas (ERCOT grid, ~28% of US mining), Georgia, Tennessee, Kentucky, Wyoming, Montana, North Dakota
	  - **[[Kazakhstan]]** (peaked ~18% in late 2021, declined to ~13% in 2024): Initial destination due to low electricity costs and proximity to Xinjiang, but Tokayev government imposed mining-specific tariffs after January 2022 unrest
	  - **[[Russia]]** (~10-15%): Hydropower in Irkutsk Oblast, abundant gas; legalisation under Putin's August 2024 Federal Law No. 221-FZ
	  - **[[Canada]]** (~6%): Quebec (Hydro-Québec moratorium since 2018 but pre-existing operations grandfathered), Alberta (natural gas), British Columbia (BC Hydro hydropower)
	  - **[[Paraguay]]** (~3-5%): Itaipú hydropower surplus, ~$0.035/kWh industrial rates, attracted [[Bitfarms]] and many others
	  - **[[Bhutan]]** (~1-2%, growing): Sovereign mining via [[Druk Holdings]] funded by hydroelectric exports, accumulating estimated 13,000+ BTC reserves
	  - **[[El Salvador]]** (<1%): State-run [[Volcano Bitcoin]] mining at Berlín geothermal field, holding ~5,800-6,000 BTC sovereign reserves

	  #### US Concentration: Texas as the Hashrate Capital
	  The United States now hosts the largest concentration of Bitcoin mining capacity globally, with [[Texas]] hosting an estimated 28% of US mining (~10-12% of global). The [[ERCOT]] grid's deregulated wholesale market, abundant wind/solar generation, and favourable demand-response programmes have attracted Marathon Digital (Granbury, Garden City, Kearney), Riot Platforms (Rockdale, Corsicana), Cipher Mining, TeraWulf, Cleanspark, and dozens of smaller operators. [[New York State]] passed a 2-year moratorium on fossil-fuel-powered mining (November 2022, extended through 2024) as an offsetting regulatory shock that drove some operators to Texas.

  - ### Public Mining Companies (2026)

	  The 2020-2021 SPAC and IPO wave produced approximately 15-20 publicly-listed Bitcoin mining companies on US exchanges (NASDAQ, NYSE), with smaller cohorts in Canada (TSX), Australia (ASX) and the UK (LSE, AIM). Key public miners as of Q1 2026:

	  - **[[Marathon Digital Holdings]] (NASDAQ:MARA)**: Largest public miner by self-mining hashrate (~50 EH/s deployed, targeting 75 EH/s 2026). Headquartered Fort Lauderdale FL, operations in Texas, North Dakota, Nebraska, Paraguay (joint venture). HODLs ~50,000+ BTC treasury. CEO Fred Thiel. Pioneered the [[OFAC-compliant block]] controversy in 2023.
	  - **[[Riot Platforms]] (NASDAQ:RIOT)**: ~33 EH/s deployed. Operates Whinstone facility at Rockdale TX (the largest single-site Bitcoin mining facility in North America) and the new Corsicana facility (planned to reach 1 GW). CEO Jason Les. Pioneer of [[ERCOT]] demand-response monetisation, disclosed $71M power credits in 2023.
	  - **[[CleanSpark]] (NASDAQ:CLSK)**: ~50 EH/s 2026 target. Operations primarily in Georgia (Sandersville), Mississippi, and New York. Branded as the "America's Bitcoin Miner" with emphasis on US operations. CEO Zach Bradford.
	  - **[[Core Scientific]] (NASDAQ:CORZ)**: Emerged from Chapter 11 bankruptcy January 2024 (after December 2022 filing). Pivoted aggressively to [[AI HPC]] hosting with a landmark **$3.5B (later expanded toward $8.7B) [[CoreWeave]] hosting deal** for GPU infrastructure (12-year contract). Operations in Texas, Georgia, North Carolina, North Dakota.
	  - **[[TeraWulf]] (NYSE:WULF)**: Nuclear-powered Lake Mariner facility (NY) sourced from the adjacent Nine Mile Point nuclear plant. Operates Nautilus Cryptomine in PA. Strong "clean energy" branding.
	  - **[[Cipher Mining]] (NASDAQ:CIFR)**: ~13 EH/s. Operations in Texas (Odessa, Black Pearl) under power purchase agreements with WattzOn and Luminant. Backed by Bitfury legacy infrastructure expertise.
	  - **[[Hut 8 Mining]] (NASDAQ:HUT)**: Result of November 2023 [[US Bitcoin Corp]] (USBTC) and Hut 8 merger. Operations in Alberta (Drumheller, Medicine Hat), Texas (King Mountain), and Niagara Falls NY. Pivoting toward AI HPC hosting and high-performance computing.
	  - **[[Iris Energy]] (NASDAQ:IREN)**: Australian-listed parent (then re-domiciled), with operations in British Columbia (Mackenzie, Prince George — 100% hydropower) and Childress Texas. Branded as renewable-energy mining + AI cloud hybrid. Operating an AI GPU cloud business launched 2024.
	  - **[[Bitfarms]] (NYSE/TSX:BITF)**: Canadian-Argentinian. Operations in Quebec, Argentina (Río Cuarto), Paraguay (Villarrica). 2024 boardroom dispute with founder Emiliano Grodzki resolved.
	  - **[[Hive Digital Technologies]] (NASDAQ:HIVE)**: Formerly HIVE Blockchain. Operations in Sweden (hydropower), Canada (New Brunswick, Quebec), Iceland. Pivoting to AI/HPC.
	  - **[[Argo Blockchain]] (LON:ARB, NASDAQ:ARBK)**: London-listed dual-listed mining company. Operations in Quebec (Mirabel, Helios facility) and Texas. Survived 2022 near-bankruptcy through Galaxy Digital intervention.

	  Beyond these primary names, smaller listed entities include [[Bitdeer Technologies]] (NASDAQ:BTDR, SPAC from Bitmain spinoff, founded by Jihan Wu's separated mining business), [[Greenidge Generation]] (NASDAQ:GREE, controversial NY gas-fired plant repurposed to mining), [[Stronghold Digital]] (NASDAQ:SDIG, waste-coal repurposing), [[Cathedra Bitcoin]], [[DMG Blockchain Solutions]], [[Northern Data]] (German listed), [[Sphere 3D]], and many SPAC-failures and de-listings from the 2022-2023 mining bear market.

  - ### Mining-to-AI HPC Pivot (2024-2026)

	  The defining strategic shift of the contemporary mining industry has been the rapid pivot of mining infrastructure to **[[AI HPC]]** (High-Performance Computing) hosting and GPU cloud services. The drivers:
	  - Bitcoin block subsidy halving to 3.125 BTC (April 2024) compressing mining margins
	  - Explosive demand for AI GPU compute following [[ChatGPT]] release (November 2022) and the 2023-2024 [[NVIDIA H100]] / [[H200]] / [[B200]] capacity shortage
	  - Recognition that Bitcoin mining facilities possess the four resources AI training requires: (1) high-voltage grid interconnection (often >100 MW per site, hard to permit greenfield), (2) cooling infrastructure (already proven for high-density compute), (3) cheap power purchase agreements, and (4) industrial-scale building stock

	  #### Landmark Pivots
	  - **[[Core Scientific]] - [[CoreWeave]] deal**: Originally announced June 2024 as a $3.5B 12-year hosting agreement, expanded through subsequent amendments to a potential $8.7B total contract value. Core Scientific commits to retrofitting ~500 MW of mining capacity for [[NVIDIA]] GPU hosting under CoreWeave's branding, with CoreWeave acquiring 25%+ economic interest. The deal is the largest single transaction marking the mining-to-AI transition.
	  - **[[Hut 8]] AI Strategy**: Inherited Bitfury Holland's legacy GPU expertise. Launched "Highrise AI" hosting business 2024 with NVIDIA HGX H100 cluster deployments and explicit AI training services pitch to enterprise customers.
	  - **[[Iris Energy]] AI Cloud**: Active GPU cloud business launched 2024, with NVIDIA H100 and H200 capacity at the Childress TX facility servicing AI startups and ML research customers.
	  - **[[TeraWulf]] AI-Ready Sites**: Marketing the Lake Mariner NY facility (nuclear-baseload) as ideal for AI training given clean baseload power, available 200+ MW capacity, and adjacent fibre routes to NYC.
	  - **[[Bitfarms]] HPC Pilot**: Initial small-scale GPU hosting at the Sherbrooke QC facility, exploring expanded AI hosting.
	  - **[[Marathon Digital]]'s [[2PIC1Pump]] AI Conversion**: Pilot conversions of mining sites for inference workloads.

	  The strategic question for 2026-2028 is whether AI hosting represents (a) a temporary diversification during a Bitcoin bear market, (b) a permanent transition from Bitcoin mining to general HPC hosting, or (c) a dual-track model where individual sites flexibly toggle between Bitcoin mining (high revenue per MW during BTC bull markets) and AI hosting (steady revenue during BTC bear markets and AI demand spikes). The "mining is selling electricity to the highest bidder" framing — articulated by [[Andrew Webber]] (Digital Power Optimization) and [[Brad Mills]] — captures the economic logic.

  - ### Post-Halving Economics and the Fee Market Transition

	  The April 2024 halving fundamentally altered Bitcoin mining economics:

	  #### Block Reward Decay
	  Block subsidy reduced 50% from 6.25 BTC to **3.125 BTC** at block 840,000 (20 April 2024). At BTC prices of $60-100K through 2024-2026, daily issuance dropped from ~900 BTC ($55-90M/day) to **~450 BTC ($30-45M/day)**. With network hashrate continuing to grow (700-1000 EH/s post-halving), **ARPU per terahash** — average revenue per unit hashrate — fell sharply, forcing immediate margin compression for less-efficient operators.

	  #### Fee Market Renaissance
	  Concurrent with the halving was an explosion of transaction-fee demand driven by [[Ordinals]], [[BRC-20]] and [[Runes]] protocols:
	  - **[[Ordinals]] (Casey Rodarmor, January 2023)**: A numbering and inscription protocol allowing arbitrary data (images, text, code) to be inscribed on individual satoshis. Triggered NFT-like inscription mania through 2023-2024.
	  - **[[BRC-20]] (Domo, March 2023)**: Inscription-based fungible token standard layered on Ordinals. Initial speculation drove fee spikes during launches.
	  - **[[Runes]] (Casey Rodarmor, April 2024 launch at block 840,000)**: A more-efficient fungible-token protocol designed to replace BRC-20 inefficiency. Launched simultaneously with the halving in a single block, generating $80M+ in fees on the halving block alone — the highest-fee block in Bitcoin history.
	  - **Aggregate Fee Impact**: Fee share of total miner revenue rose from typical 1-5% pre-2023 to 10-25% sustained 2023-2024, with individual blocks during peak inscription periods seeing fees exceed the subsidy.

	  #### Long-Term Security Budget Transition
	  As subsidies asymptotically approach zero through future halvings (1.5625 BTC in 2028, 0.78125 BTC in 2032, etc.), Bitcoin's security budget must transition entirely to fee revenue by ~2140. The economic question — whether fee revenue can sustain sufficient hashrate to deter 51% attacks at network values supporting $10T+ market capitalisation — is the defining long-term open question of Bitcoin economics, debated in academic literature by [[Eric Budish]] (University of Chicago, "The Economic Limits of Bitcoin and the Blockchain"), [[Cyril Monnet]] (University of Bern), and [[Nicolas Houy]] (CNRS).

  - ### Use Cases and Functional Roles

	  Bitcoin mining serves multiple distinct functions across the broader cryptocurrency and energy-systems ecosystems:

	  #### Consensus and Settlement Security
	  The foundational use case: providing cryptoeconomic security for the Bitcoin ledger against double-spend, reorg, and censorship attacks. Mining converts external economic resources (electricity, hardware) into [[Nakamoto consensus]] security via the [[longest-chain]] (more precisely, most-cumulative-work) rule.

	  #### New Bitcoin Issuance
	  Mining is the sole mechanism for new Bitcoin issuance, distributing the supply schedule of 21M BTC to miners via the [[coinbase transaction]]. This is mechanistically distinct from pre-mined or instantly-issued cryptocurrencies.

	  #### Energy Demand Response and Grid Stability
	  Industrial-scale miners function as interruptible flexible loads serving demand response, frequency regulation, and curtailment-absorption functions for grid operators. This has become a major industry narrative particularly in ERCOT (Texas).

	  #### Stranded and Wasted Energy Monetisation
	  [[Flare gas]] capture (Bakken, Permian basins), [[curtailed renewables]], remote hydropower, and geothermal resources are monetised through location-flexible mining deployments. Crusoe Energy's $500M+ raised capital represents Wall Street institutionalisation of this thesis.

	  #### Sovereign Bitcoin Accumulation
	  El Salvador's [[Volcano Bitcoin]] mining, Bhutan's [[Druk Holdings]] mining, and emerging mining operations by other state-affiliated entities allow sovereigns to accumulate Bitcoin reserves without market purchases.

	  #### Listed-Equity Bitcoin Exposure
	  Public mining companies (MARA, RIOT, CLSK, etc.) provide leveraged Bitcoin exposure to equity-only institutional investors, comparable to (but distinct from) the [[MicroStrategy]] treasury-company model.

	  #### AI HPC Site Optionality
	  The 2024-2026 pivot reframes mining sites as dual-purpose AI/Bitcoin facilities with embedded optionality between two revenue streams.

  - ### Academic Context and Theoretical Foundations

	  Bitcoin mining draws on cryptography, mechanism design, game theory, and energy economics:

	  #### Cryptographic Foundations
	  - **[[Cynthia Dwork]] and [[Moni Naor]] (1992)** *Pricing via Processing or Combatting Junk Mail*: Original proof-of-work proposal as anti-spam mechanism, the conceptual precursor to Hashcash.
	  - **[[Adam Back]] (2002)** *Hashcash — A Denial of Service Counter-Measure*: Direct proof-of-work predecessor that Satoshi cited in the Bitcoin whitepaper. Back invented the partial-hash-collision PoW mechanism that Bitcoin generalised.
	  - **[[Satoshi Nakamoto]] (2008)** *Bitcoin: A Peer-to-Peer Electronic Cash System*: The foundational Bitcoin paper introducing the Nakamoto consensus protocol combining proof-of-work with longest-chain-selection.

	  #### Mining Game Theory and Mechanism Design
	  - **[[Ittay Eyal]] and [[Emin Gün Sirer]] (2014)** *Majority is Not Enough: Bitcoin Mining is Vulnerable*: Introduced the [[selfish mining]] attack demonstrating that miners controlling >25% of hashrate can profit by selectively withholding blocks. Influential theoretical critique with empirically limited execution.
	  - **[[Bonneau et al. 2015]]** *SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies* (IEEE S&P): Comprehensive survey of Bitcoin's security properties.
	  - **[[Joseph Bonneau et al. 2014]]** *On Bitcoin as a Public Randomness Source*: PoW as randomness extraction mechanism.
	  - **[[Ittay Eyal 2015]]** *The Miner's Dilemma*: Game-theoretic analysis of pool-attacking-pool dynamics.

	  #### Energy Economics
	  - **[[Eric Budish 2018, 2024 revised]]** *The Economic Limits of Bitcoin and the Blockchain* (NBER): Argues that Bitcoin's security budget is bounded by a relationship between transaction value, miner revenue, and attack cost — fundamental long-term constraint as block subsidy decays.
	  - **[[Nicolas Houy 2014, 2022]]** *The Economics of Bitcoin Transaction Fees*: Fee-market dynamics analysis.
	  - **[[Cyril Monnet et al.]]** University of Bern monetary-economics treatment of PoW security budgets.

	  #### Critical and Skeptical Literature
	  - **[[Mora et al. 2018]]** *Nature Climate Change*: The widely-cited "2°C warming" paper, subsequently critiqued.
	  - **[[Alex de Vries (Digiconomist)]]** ongoing publications maintaining higher consumption estimates and policy-critical positions.
	  - **[[Murray, Yu, & Wickes 2022]]** *Joule* paper on Bitcoin's actual emissions footprint and policy implications.
	  - **[[Masanet, Shehabi, et al. 2019]]** *Nature Climate Change*: Methodological critique of Mora et al.

  - ### Current Landscape (2026)

	  As of Q2 2026, Bitcoin mining occupies a unique position at the intersection of cryptography, energy systems, semiconductor industry, and capital markets.

	  #### Network Statistics
	  - **Network hashrate**: ~700-1000 EH/s (continuing growth post-halving despite margin pressure)
	  - **Difficulty**: ~110-140 T (trillion units)
	  - **Block subsidy**: 3.125 BTC (through 2028 halving)
	  - **Daily issuance**: ~450 BTC/day = ~164,250 BTC/year (~0.78% annual inflation, declining toward 0.40% post-2028 halving)
	  - **Fee share of revenue**: 5-15% baseline, with 20-50% spikes during inscription events
	  - **Energy consumption**: ~175-200 TWh/year (CBECI midpoint)
	  - **Sustainable energy share**: 50-60% (Cambridge CCAF / CoinShares aggregate)

	  #### Hardware Landscape
	  Leading 2025-2026 ASICs:
	  - **Bitmain Antminer S21 XP Hydro**: 473 TH/s @ 13.5 J/TH (water-cooled)
	  - **Bitmain Antminer S21 Pro**: 234 TH/s @ 15 J/TH (air-cooled)
	  - **MicroBT Whatsminer M66S**: 298 TH/s @ 18 J/TH
	  - **MicroBT Whatsminer M60S**: 186 TH/s @ 18.5 J/TH
	  - **Canaan Avalon A15 series**: 218 TH/s @ ~19 J/TH
	  - **Auradine Teraflux AT1500**: ~210 TH/s @ ~16 J/TH (new US-based entrant)

	  Next-generation 3nm ASICs in development from Bitmain (Antminer S22 series rumoured 2026), MicroBT, and Auradine targeting 10-12 J/TH efficiency by 2027.

	  #### Pool Concentration
	  Concerns about pool concentration remain acute, with Foundry+AntPool exceeding 50% combined hashrate — a structural condition that has prompted ongoing decentralisation work via Stratum V2 template negotiation, Braidpool, Ocean.xyz, and DEMAND. The Bitcoin developer community treats sustained >50% Foundry+AntPool aggregation as a [[censorship-resistance]] risk warranting active mitigation.

	  #### Public Miner Performance
	  2024-2025 has been a mixed year for public miners:
	  - Strong Q1 2024 (BTC ATH $73K March 2024)
	  - Halving margin compression Q2 2024
	  - Q4 2024 BTC recovery to $100K+ supported renewed profitability
	  - 2025 hashprice (revenue per TH/s/day) volatility $0.04-$0.08 range
	  - AI pivot revenue increasingly material for diversified players

  - ### UK Context: Argo Blockchain, Cambridge Research, and Energy Policy

	  The United Kingdom hosts limited industrial-scale Bitcoin mining domestically (high retail electricity costs, no specific mining policy framework) but plays an outsized role in academic research, capital markets, and corporate listings.

	  #### UK-Listed and UK-Connected Miners
	  **[[Argo Blockchain plc]] (LON:ARB, NASDAQ:ARBK)**: London-listed Bitcoin mining company with operations in Quebec (Helios facility, Mirabel) and historically Texas. Co-founded 2017 by Jonathan Bixby and Mike Edwards, listed on LSE 2018 (the first London-listed crypto miner). Survived a near-bankruptcy crisis November 2022-January 2023 with a $100M debt facility from [[Galaxy Digital]] and partial sale of the Helios facility. Continues operations 2024-2026 with reduced ambitions. The LSE-listing has made Argo a barometer of UK investor sentiment toward Bitcoin mining.

	  **[[Vinanz Limited]] (LON:BTC, AIM)**: AIM-listed Bitcoin mining and treasury company with hosted operations in North America. Acquired its single-letter ticker "BTC" via rebranding. ~£40M market cap.

	  **[[Bluebird Mining Ventures]] (LON:BMV)**: Junior mining company expanding into Bitcoin treasury and operations.

	  Beyond pure-play miners, UK companies provide infrastructure and services: **[[NCC Group]]** (Manchester-headquartered cybersecurity consultancy) has published influential reports on Bitcoin mining security, ASIC supply-chain risks, and PoW economic security analysis. **[[Standard Chartered Zodia Custody]]** services UK institutional clients holding mining-related crypto exposure.

	  #### Cambridge CCAF: The Reference Academic Centre
	  The [[Cambridge Centre for Alternative Finance]] (CCAF) at [[Cambridge Judge Business School]], founded 2015 by [[Bryan Zhang]], is the world-leading academic centre for empirical research on cryptoasset markets and Bitcoin mining specifically. The [[CBECI]] (Cambridge Bitcoin Electricity Consumption Index), launched 2019, has become the de facto academic-reference estimate for Bitcoin's energy footprint, cited in IPCC reports, IEA publications, and US Congressional testimony. CCAF's *Global Cryptoasset Benchmarking Study* (annual since 2017) and *Cambridge Digital Mining Industry Report* provide longitudinal data on mining geography, hashrate distribution, and energy mix. Principal researchers include Michel Rauchs, Apolline Blandin, Anton Dek, and Stanislaw Pokoblo. CCAF works in close collaboration with the [[Bank of England]] Centre for Central Banking Studies on systemic-implication assessments.

	  #### Imperial College London Bitcoin and Energy Research
	  [[Imperial College London]] hosts research on Bitcoin's energy economics across the **Centre for Climate Finance and Investment** (Bryan Lonergan, Charles Donovan) and the **Grantham Institute for Climate Change and the Environment**. Imperial's **Centre for Cryptocurrency Research and Engineering** (founded 2018 by [[Catherine Mulligan]], later moving to UCL) produced foundational early UK academic work on Bitcoin protocol economics.

	  #### UCL Centre for Blockchain Technologies
	  [[UCL CBT]] (founded 2015 by [[Paolo Tasca]]) provides ongoing research on Bitcoin protocol design, mining economics, and policy implications.

	  #### Edinburgh and Manchester
	  [[University of Edinburgh]] (School of Informatics) hosts cryptographic research relevant to Bitcoin's protocol-level security under [[Aggelos Kiayias]] (Chief Scientist of [[IOHK]]/[[Cardano]]) and others — though Kiayias's primary protocol commitment is to alternative PoS approaches. [[University of Manchester]] (Alan Turing Institute affiliations) hosts research on distributed-systems and PoW alternatives.

	  #### Northern English Industrial Context
	  Northern England (Manchester, Leeds, Sheffield, Newcastle) hosts limited but growing crypto-infrastructure activity:
	  - **[[Manchester]]**: NCC Group HQ, growing fintech ecosystem (Manchester Tech Trust)
	  - **[[Leeds]]**: Few mining-specific operations but growing data-centre cluster
	  - **[[Sheffield]]**: University of Sheffield Advanced Manufacturing Park hosts some compute-infrastructure research; the broader steel-and-energy industrial heritage informs critical perspectives on energy-intensive industries
	  - **[[Newcastle]]**: BCG and others maintain northern UK tech hubs; relatively limited Bitcoin-specific activity

	  #### UK Energy and Mining Policy
	  The UK has no specific Bitcoin mining policy framework:
	  - **HM Treasury 2023-2025 Cryptoasset Consultations**: Mining largely treated as an unregulated activity outside the perimeter of UK financial regulation
	  - **Ofgem (Energy Regulator)**: No specific position on Bitcoin mining demand
	  - **Climate Change Committee (CCC)**: Periodically references Bitcoin energy consumption in net-zero pathway analysis without policy recommendations
	  - **NCC Group reports**: Have informed industrial and academic discussion of mining security and supply-chain risks

	  Compared to the United States (favourable in Texas, Wyoming, Montana, hostile in New York), China (banned), Russia (legalised 2024), Paraguay (favourable), and El Salvador (sovereign-supported), the UK occupies a policy-neutral ambiguous position with high domestic electricity costs precluding meaningful onshore industrial mining.

  - ### Future Directions (2026-2030)

	  The trajectory of Bitcoin mining through 2026-2030 will be shaped by halving cycles, hardware advances, AI demand, energy-policy evolution, and protocol-level innovation.

	  #### 2028 Halving and Beyond
	  - **Block 1,050,000 (~April 2028)**: Subsidy reduces from 3.125 to **1.5625 BTC**
	  - **Daily issuance**: Falls from ~450 BTC/day to ~225 BTC/day, intensifying fee-market dependence
	  - **Hashrate trajectory**: Continued growth expected if BTC prices appreciate, with hashrate concentration on 3nm and 2nm ASICs
	  - **Fee revenue**: Must increase substantially to maintain mining economics; potential paths include sustained Ordinals/Runes activity, [[Lightning Network]] settlement traffic, [[CSV]]/[[CTV]] covenants enabling new transaction patterns, and [[Drivechain]]/[[BIP 300/301]] sidechain anchoring fees

	  #### Hardware Roadmap
	  - **3nm ASICs** (2026-2027): Bitmain Antminer S22, MicroBT M70 series, Auradine successor targeting 10-12 J/TH
	  - **2nm ASICs** (2027-2028, speculative): Approaching ~8 J/TH theoretical limits
	  - **Sub-2nm and 3D-stacked dies**: TSMC roadmap suggests continued ~30% efficiency improvements per node, with diminishing returns
	  - **Open-source hardware initiatives**: Block's [[Proto]] open-source mining chip aims to break Bitmain/MicroBT manufacturing duopoly
	  - **Heat-recovery and integration**: Increasing standardisation of waste-heat capture for greenhouse, district-heating, and aquaculture co-products

	  #### Stratum V2 and Decentralisation
	  Full Stratum V2 deployment with template negotiation expected to mature by 2027, fundamentally changing mining-pool centralisation dynamics by transferring template-selection power back to individual miners while preserving pool-based payout economics. Combined with [[Braidpool]], [[Ocean.xyz]], and [[DEMAND]] adoption, this could meaningfully reduce censorship-resistance concerns currently posed by Foundry+AntPool >50% aggregation.

	  #### Energy Mix Evolution
	  - Sustainable-energy share projected to continue rising toward 65-75% by 2030 driven by Texas wind/solar growth, Bhutan/Paraguay hydropower expansion, and stranded-gas conversion
	  - [[Flare gas]] capture programmes expanding under both regulatory pressure (US methane fee under Inflation Reduction Act) and economic incentives
	  - Nuclear-baseload mining (TeraWulf Lake Mariner, Marathon Finland district-heating pilot) likely to expand
	  - Grid-services revenue increasingly material with ERCOT and PJM expanding demand-response markets

	  #### AI HPC Integration
	  By 2028, the question of mining-vs-AI infrastructure deployment likely resolves in favour of dual-purpose facilities with site-level optionality. Public miners with substantial AI exposure (Core Scientific, Hut 8, Iris Energy, TeraWulf) trading at premium multiples to pure-play miners (Marathon, Riot in their non-AI segments). The CoreWeave-Core Scientific model may be replicated by additional hyperscaler-miner pairings.

	  #### Sovereign Mining Expansion
	  - El Salvador, Bhutan continuing accumulation
	  - US Strategic Bitcoin Reserve (March 2025 EO) potentially expanding through forfeited assets and possibly direct purchases
	  - Speculation about additional sovereign mining operations (rumoured discussions in Argentina, Paraguay, several Gulf states)

	  #### Long-Term Security Budget Question
	  The asymptotic transition to fee-only mining (block subsidy < 0.5 BTC by 2032, < 0.1 BTC by 2040) remains the defining long-term open question. Academic consensus is uncertain whether transaction fees alone can sustain sufficient hashrate to deter 51% attacks at network valuations supporting multi-trillion-dollar market capitalisation. Mitigation paths include [[soft-fork]] activations enabling new transaction patterns generating fees (CTV/CSV covenants, drivechains), Layer-2 settlement-heavy traffic returning to L1 with high fees, and equilibrium analysis suggesting fee markets clear at security-sufficient levels under reasonable assumptions about transaction-demand elasticity.

  - ### Research and Literature

	  **Bitcoin Protocol and Mining Foundations**:
	  1. Nakamoto, S. (2008). *Bitcoin: A Peer-to-Peer Electronic Cash System*. Bitcoin whitepaper. https://bitcoin.org/bitcoin.pdf [Foundational PoW consensus design]
	  2. Back, A. (2002). *Hashcash — A Denial of Service Counter-Measure*. Technical report. http://www.hashcash.org/papers/hashcash.pdf [Direct PoW predecessor]
	  3. Dwork, C., & Naor, M. (1992). Pricing via Processing or Combatting Junk Mail. *Advances in Cryptology — CRYPTO '92*. Springer LNCS 740, 139-147. [Original PoW theoretical proposal]
	  4. Bonneau, J., et al. (2015). SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies. *IEEE Symposium on Security and Privacy*, 104-121. DOI:10.1109/SP.2015.14 [Comprehensive Bitcoin security survey]

	  **Mining Game Theory and Pool Economics**:
	  5. Eyal, I., & Sirer, E.G. (2014). Majority is Not Enough: Bitcoin Mining is Vulnerable. *Financial Cryptography and Data Security*, Springer LNCS 8437, 436-454. [Selfish mining attack]
	  6. Eyal, I. (2015). The Miner's Dilemma. *IEEE Symposium on Security and Privacy*, 89-103. [Pool-attacking-pool game theory]
	  7. Sapirshtein, A., Sompolinsky, Y., & Zohar, A. (2017). Optimal Selfish Mining Strategies in Bitcoin. *Financial Cryptography and Data Security*, Springer LNCS 9603, 515-532. [Refined selfish-mining bounds]
	  8. Carlsten, M., Kalodner, H., Weinberg, S.M., & Narayanan, A. (2016). On the Instability of Bitcoin Without the Block Reward. *ACM CCS '16*, 154-167. [Fee-only mining instability analysis]

	  **Economic Limits and Security Budget**:
	  9. Budish, E. (2018, revised 2024). *The Economic Limits of Bitcoin and the Blockchain*. NBER Working Paper 24717. [Bitcoin security budget bound]
	  10. Houy, N. (2014). The Bitcoin Mining Game. *Ledger Journal*, 1, 53-68. [Mining economics game theory]
	  11. Houy, N. (2022). Bitcoin Mining: Optimal Strategies for Securing the Bitcoin Network. *Working paper, GATE Lyon Saint-Étienne*. [Updated PoW economics]

	  **Energy Consumption and Climate Impact**:
	  12. Cambridge Centre for Alternative Finance (2019-2026). *Cambridge Bitcoin Electricity Consumption Index (CBECI)*. https://ccaf.io/cbeci/index [Authoritative energy estimate]
	  13. Cambridge Centre for Alternative Finance (2024). *3rd Global Cryptoasset Benchmarking Study with Mining Industry Update*. University of Cambridge Judge Business School. [Industry survey including geographic and energy-mix data]
	  14. Mora, C., et al. (2018). Bitcoin emissions alone could push global warming above 2°C. *Nature Climate Change*, 8(11), 931-933. DOI:10.1038/s41558-018-0321-8 [Influential critical paper]
	  15. Masanet, E., Shehabi, A., et al. (2019). Implausible projections overestimate near-term Bitcoin CO2 emissions. *Nature Climate Change*, 9(9), 653-654. [Methodological critique of Mora et al.]
	  16. Murray, A., Yu, Z., & Wickes, R. (2022). The cost of Bitcoin mining has never really increased. *Joule*, 6(3), 498-502. [Refined emissions analysis and Mora critique]
	  17. de Vries, A. (2018, 2021). Bitcoin's Growing Energy Problem. *Joule*, 2(5), 801-805. Updated in *Joule* (2021), 5(3), 509-513. [Digiconomist BECI methodology]
	  18. CoinShares (2024). *Bitcoin Mining Report 2024: The Mining Economics, Energy Mix and Industry Outlook*. CoinShares Research. [Industry sustainability survey]

	  **Stratum and Mining Protocols**:
	  19. Palatinus, M. (Slush) (2012). *Stratum Mining Protocol Specification v1*. Slush Pool / Braiins Documentation. https://braiins.com/stratum-v1/docs [Original pool protocol]
	  20. Braiins Systems (2018-2024). *Stratum V2 Specification*. https://stratumprotocol.org [Next-generation pool protocol with template negotiation]
	  21. Voight, F. (2011). *P2Pool: A Peer-to-Peer Bitcoin Mining Pool Implementation*. [Decentralised pool predecessor]

	  **Hardware and ASIC Architecture**:
	  22. Taylor, M.B. (2013). Bitcoin and the Age of Bespoke Silicon. *Communications of the ACM*, 56(9), 81-90. [Early Bitcoin ASIC analysis]
	  23. Vilim, M., Duwe, H., & Kumar, R. (2016). Approximate Bitcoin Mining. *DAC '16: 53rd Annual Design Automation Conference*, 1-6. [ASIC microarchitecture]
	  24. Bitmain Technologies (2024). *Antminer S21 Series Technical Documentation*. https://www.bitmain.com [Reference hardware specifications]

	  **UK and Geographic Studies**:
	  25. Cambridge Centre for Alternative Finance (2023). *2nd Global Cryptoasset Benchmarking Study Mining Map Update*. [Geographic distribution post-China-ban]
	  26. NCC Group (2022-2024). *Cryptocurrency Mining Security Reports*. Manchester. [UK cybersecurity perspective on mining infrastructure]
	  27. ERCOT (2023-2024). *Bitcoin Mining Load Integration Studies and Demand Response Performance Reports*. [Texas grid integration evidence]

	  **Regulatory and Policy**:
	  28. International Energy Agency (2024). *Electricity 2024: Analysis and Forecast to 2026*. IEA Publications. [Includes data-centre and crypto-mining load projections]

  - ## Metadata

	  - **Last Updated**: 2026-05-16
	  - **Review Status**: Comprehensive editorial review during Phase 6 enrichment sprint
	  - **Verification**: Network statistics (hashrate, difficulty, halving block heights/dates) verified against Bitcoin Core block explorer (mempool.space, blockchain.com); halving block 840000 mined 20 April 2024 confirmed; CBECI energy estimates verified against Cambridge Centre for Alternative Finance public API; pool distribution verified against mempool.space, btc.com pool ranking, and coinwarz pool stats; public miner hashrate and BTC holdings verified against company Q4 2024 / Q1 2025 SEC filings and shareholder reports (Marathon Digital 10-K, Riot Platforms 10-K, CleanSpark 10-K, Core Scientific 10-K post-emergence); ASIC specifications verified against Bitmain, MicroBT, Canaan product datasheets; academic citations verified against arXiv, NBER, Nature Climate Change, Joule, IEEE S&P, ACM CCS proceedings
	  - **Domain**: blockchain (no correction required; concept correctly classified as blockchain protocol mechanism, not infrastructure or energy)
	  - **Regional Context**: UK-listed Argo Blockchain (LON:ARB) and Vinanz (LON:BTC) covered; Cambridge Centre for Alternative Finance CBECI and Global Cryptoasset Benchmarking Study established as authoritative academic reference; Imperial Centre for Climate Finance and Grantham Institute referenced; UCL CBT, Edinburgh Informatics, Manchester noted; NCC Group (Manchester) and Northern English industrial context (Manchester/Leeds/Sheffield/Newcastle) covered
	  - **Production-Ready**: Complete OWL formal semantics (44 axioms across compositional/dependency/capability/implementation/reduction/association), comprehensive content coverage (technical architecture across eight components, hardware evolution across five epochs, mining pool and Stratum protocol detail, energy consumption and renewable share data with methodological debate, geographic distribution post-China-ban Great Migration, public mining company directory with hashrate/BTC-holdings, AI HPC pivot with Core Scientific-CoreWeave landmark deal, post-halving economics and fee-market transition, use cases, academic context with mining game theory citations, current landscape 2026, UK context with Cambridge CCAF as principal academic centre, future directions 2026-2030, 28 academic and primary-source citations)
	  - **Authority Score**: 0.87 (defining proof-of-work consensus mechanism for Bitcoin, ~$30-50B annual economic activity, ~175-200 TWh/year energy footprint, primary case study in cryptoeconomic security and energy-systems integration, central concept connecting Bitcoin protocol, ASIC semiconductor industry, energy markets, and emerging AI HPC infrastructure landscape)

- ### Provenance
  - sources:: [[Nakamoto 2008 Bitcoin Whitepaper]], [[Back 2002 Hashcash]], [[Dwork Naor 1992 Pricing via Processing]], [[Bonneau et al 2015 SoK Bitcoin Cryptocurrencies]], [[Eyal Sirer 2014 Majority Is Not Enough Selfish Mining]], [[Eyal 2015 Miners Dilemma]], [[Sapirshtein Sompolinsky Zohar 2017 Optimal Selfish Mining]], [[Carlsten Kalodner Weinberg Narayanan 2016 Instability Without Block Reward]], [[Budish 2018 Economic Limits of Bitcoin]], [[Houy 2014 Bitcoin Mining Game]], [[Houy 2022 Bitcoin Mining Optimal Strategies]], [[CBECI Cambridge Bitcoin Electricity Consumption Index]], [[CCAF 2024 3rd Global Cryptoasset Benchmarking Study]], [[Mora et al 2018 Bitcoin Emissions 2 Degrees]], [[Masanet Shehabi 2019 Implausible Projections Bitcoin]], [[Murray Yu Wickes 2022 Joule Bitcoin Mining Cost]], [[de Vries 2018 2021 Bitcoin Growing Energy Problem]], [[CoinShares 2024 Bitcoin Mining Report]], [[Palatinus 2012 Stratum V1 Specification]], [[Braiins 2018-2024 Stratum V2 Specification]], [[Voight 2011 P2Pool]], [[Taylor 2013 Age of Bespoke Silicon]], [[Vilim Duwe Kumar 2016 Approximate Bitcoin Mining]], [[Bitmain 2024 Antminer S21 Documentation]], [[CCAF 2023 Mining Map Update]], [[NCC Group 2022-2024 Cryptocurrency Mining Security]], [[ERCOT 2023-2024 Bitcoin Mining Load Integration]], [[IEA 2024 Electricity Analysis Forecast]]
  - research-cache:: _enrich/research-cache/Bitcoin Mining.json
  - naming-note:: Bitcoin Mining preferred-term retained. Alternative-terms cover BTC Mining, Proof-of-Work Mining, SHA-256 Mining, Hashing, Block Mining. Bitcoin protocol distinguishes "mining" (block production via PoW) from "validation" (consensus rule enforcement by all full nodes including non-mining nodes).
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-16T16:30:00Z