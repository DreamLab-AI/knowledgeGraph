- ### OntologyBlock
  id:: bc-0462-on-chain-[[Voting]]-ontology
  [[Blockchain]]Relevance:: High
  collapsed:: true
	- ontology:: true
	- term-id:: BC-0462
	- preferred-term:: On Chain Voting
	- source-domain:: blockchain
	- status:: complete
	- authority-score:: 0.89
	- definition:: The cryptographically verifiable, blockchain-recorded mechanism through which [[DAO]] participants exercise [[Governance]] rights by casting votes that are immutably recorded on-chain and automatically executed through [[Smart Contract]]s, transforming organizational decision-making from trust-based intermediary systems to trustless, transparent processes where every vote is publicly auditable. Major implementations include Uniswap (40M UNI quorum representing 4% of supply, 7-day voting periods, 2-day timelocks), Compound (400K COMP threshold with Governor Bravo pioneering three-option voting), MakerDAO (continuous approval voting with no quorum, 50K MKR emergency shutdown), Curve (vote-escrowed veCRV requiring token locking up to 4 years), Aave (320K AAVE quorum with risk-tiered timelock delays), ENS (267M tokens distributed with constitutional governance), Snapshot (gasless off-chain signaling for 10,000+ DAOs), Tally (on-chain governance interface), and OpenZeppelin Governor (battle-tested framework), collectively governing $25+ billion in protocol assets across thousands of [[Proposal]]s. The 2023-2025 period witnessed gas cost reductions through Layer 2 migration ($0.10-5 vs $50-200 on mainnet), AI-assisted proposal analysis, cross-chain voting infrastructure, whilst exposing persistent challenges around plutocratic concentration (top 1% controlling 70-85% voting power), voter apathy (5-15% typical participation), economic barriers excluding small holders, and delegation centralization amongst professional governance firms.
	- maturity:: mature
	- owl:class:: bc:OnChainVoting
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[BlockchainDomain]]

## OWL Formal Semantics

```clojure
Prefix(:=<http://metaverse-ontology.org/blockchain/>)
Prefix(dt:=<http://metaverse-ontology.org/dt/>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dcterms:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0462>
  Import(<http://metaverse-ontology.org/dt/properties>)

  Declaration(Class(:OnChainVoting))

  SubClassOf(:OnChainVoting :VotingMechanism)
  SubClassOf(:OnChainVoting :GovernanceSystem)
  SubClassOf(:OnChainVoting :SmartContractSystem)
  SubClassOf(:OnChainVoting :BlockchainApplication)

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :SmartContract))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :GovernanceToken))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :CryptographicSignature))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :BlockchainCheckpoint))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :TimelockContract))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :DelegationMechanism))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :QuorumCalculation))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :VoteWeighting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:uses :EIP712Signature))

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :TokenWeightedVoting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :QuorumRequirement))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :VotingPeriod))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :TimelockDelay))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :VoteDelegation))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :SnapshotMechanism))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :ThreeOptionVoting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implements :AutomaticExecution))

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :UniswapGovernor))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :CompoundGovernorBravo))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :MakerDAOGovernance))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :AaveGovernance))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :CurveVoting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :ENSGovernance))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :Snapshot))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :Tally))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :OpenZeppelinGovernor))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :Boardroom))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:implementedby :Agora))

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :DecentralizedGovernance))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :TransparentDecisionMaking))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :VerifiableVoting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :AutomaticProposalExecution))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :ImmutableVoteRecording))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :LiquidDemocracy))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:enables :CommunityConsensus))

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :GovernanceToken))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :GovernorContract))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :VotingInfrastructure))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :ProposalThreshold))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :QuorumMechanism))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:requires :BlockchainNetwork))

  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :GovernanceToken))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :ProposalSystem))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :DecentralizedAutonomousOrganization))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :[[Treasury]]Management))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :SmartContract))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :Delegation))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :QuadraticVoting))
  SubClassOf(:OnChainVoting
    (ObjectSomeValuesFrom dt:relatedto :ConvictionVoting))

  AnnotationAssertion(rdfs:label :OnChainVoting "On-Chain Voting"@en)
  AnnotationAssertion(rdfs:comment :OnChainVoting "The cryptographically verifiable, blockchain-recorded mechanism through which DAO participants exercise governance rights by casting votes that are immutably recorded on-chain and automatically executed through smart contracts, transforming organizational decision-making from trust-based intermediary systems to trustless, transparent processes where every vote is publicly auditable."@en)
  AnnotationAssertion(dcterms:identifier :OnChainVoting "BC-0462"^^xsd:string)
)
```

- ## About On-Chain Voting
  id:: on-chain-voting-about

  On-chain voting represents the cryptographically verifiable, blockchain-recorded mechanism through which [[BC-0461-decentralized-autonomous-organization|DAO]] participants exercise governance rights, casting votes that are immutably recorded on-chain and automatically executed through [[BC-0142-smart-contract|smart contracts]], fundamentally transforming organisational decision-making from trust-based systems requiring intermediaries to trustless, transparent processes where every vote is publicly auditable and execution is deterministic. Unlike traditional corporate governance where shareholder votes pass through intermediaries (brokers, custodians, proxy voting services) with opacity around vote counting and potential manipulation, on-chain voting creates an immutable audit trail where anyone can verify that votes were counted correctly, proposals executed as specified, and governance power distributed according to protocol rules rather than institutional discretion. This transparency comes at significant costs—gas fees that can exceed $50-100 per vote on Ethereum mainnet during network congestion, creating economic barriers that exclude smaller token holders from participation and concentrate voting power amongst whales who can afford transaction costs. The period from 2023-2025 witnessed explosive growth in on-chain governance sophistication, with major protocols like [[Uniswap]], [[MakerDAO]], [[Compound]], [[Aave]], and [[Curve]] collectively processing thousands of proposals governing over $25 billion in treasury assets, whilst simultaneously exposing persistent challenges around voter participation (typically 5-15% of circulating supply), plutocratic concentration (top 1% of holders controlling 70-85% of voting power), and the tension between decentralisation ideals and governance efficiency realities.

  ### Technical Architecture

  On-chain voting systems comprise several interconnected [[BC-0142-smart-contract|smart contract]] components that collectively enable proposal submission, vote casting, vote counting, and automatic execution:

  **Core Smart Contract Components:**

  - **Governance Token Contract**: An ERC-20 token with extended functionality for governance, implementing `ERC20Votes` (OpenZeppelin standard) or similar specifications. These contracts maintain **historical balance snapshots** at specific block numbers, preventing manipulation through flash loans or intra-block token transfers. When a proposal is created, the contract records the block number, and voting power is calculated based on token balances at that block, not current balances. This "checkpointing" mechanism prevents attackers from borrowing tokens, voting, and returning them within a single transaction.

  - **Governor Contract**: The central governance logic contract, typically implementing OpenZeppelin Governor or Compound Governor Bravo standards. This contract manages the proposal lifecycle: proposal creation (requires minimum token threshold, e.g., 2.5 million UNI for Uniswap), voting period management (typically 3-7 days), vote tallying (For/Against/Abstain), quorum verification (e.g., 40 million UNI = 4% of supply for Uniswap), and execution triggering. The Governor contract doesn't directly execute proposals but rather sends execution instructions to the Timelock.

  - **Timelock Contract**: A security mechanism that introduces mandatory delays (typically 2-7 days) between proposal approval and execution. During this delay period, the community can review the exact code that will execute, verify it matches the proposal description, and—in emergency situations—activate circuit breakers or migration processes if malicious code is detected. The Timelock holds admin rights over the protocol's core contracts, meaning only successfully voted proposals can modify protocol parameters after the delay period expires.

  - **Delegation Registry**: A contract or mapping that tracks vote delegation relationships. Token holders can [[Delegate]] their voting power to other addresses (professional delegates, community members, or organisations) without transferring token ownership. This separation of economic ownership from governance participation enables liquid democracy, where specialists can accumulate delegated voting power whilst passive holders retain token value. [[Uniswap]], [[Compound]], and [[ENS]] have sophisticated delegation systems with hundreds of active delegates.

  **Voting Mechanisms and Formulas:**

  The most common voting mechanism in DeFi DAOs is **token-weighted voting**, where voting power is directly proportional to token holdings:

  ```
  Voting Power = Token Balance at Snapshot Block
  Proposal Passes if: (For Votes > Against Votes) AND (Total Votes ≥ Quorum)
  ```

  [[Uniswap]] governance parameters (as of 2024-2025):
  - **Proposal Threshold**: 2,500,000 UNI (0.25% of total supply)
  - **Quorum**: 40,000,000 UNI (4% of total supply)
  - **Voting Period**: 7 days
  - **Timelock Delay**: 2 days
  - **Voting Options**: For, Against, Abstain (abstain counts toward quorum but not for/against)

  Alternative voting mechanisms implemented by specific DAOs:

  - **Quadratic Voting** (Gitcoin Grants): Cost to cast *n* votes = *n*² tokens, reducing whale influence by making large vote purchases prohibitively expensive. If a whale wants to cast 100 votes, it costs 10,000 tokens, whilst 100 individuals casting 1 vote each only costs 100 tokens total, creating more egalitarian outcomes.

  - **Conviction Voting** (1Hive, Commons Stack): Voting power accumulates over time based on how long tokens remain staked on a proposal. A holder staking 100 tokens for 30 days has more conviction than one staking 1,000 tokens for 1 day, aligning governance with long-term commitment rather than short-term capital deployment.

  - **Time-Weighted Voting** (Curve veCRV): Tokens must be **locked** for extended periods (up to 4 years) to receive voting power, with longer locks yielding higher multipliers. 1,000 CRV locked for 4 years = 1,000 veCRV voting power, whilst 1,000 CRV locked for 1 year = 250 veCRV. This creates **skin-in-the-game alignment** where voters cannot exit immediately after extractive votes.

  ### Governance Mechanisms

  The typical on-chain governance lifecycle progresses through distinct phases, each with specific technical requirements and social coordination mechanisms:

  **Phase 1: Proposal Creation**

  To prevent spam and ensure proposers have meaningful stake, protocols require **proposal thresholds**:
  - **Uniswap**: 2,500,000 UNI ($19M at $7.50/UNI)
  - **Compound**: 400,000 COMP ($37M at $93/COMP in 2024)
  - **Aave**: 80,000 AAVE (proposition power, lower than voting power threshold)

  These high thresholds create barriers for small holders, necessitating **delegation strategies** where community members accumulate delegated voting power to reach proposal thresholds. This concentrates proposal creation power amongst professional delegates, venture capital firms (a16z, Blockchain Capital), and protocol foundations.

  **Phase 2: Voting Period**

  Once a proposal is submitted on-chain (transaction cost: $50-500 depending on Ethereum gas prices), a voting period begins (typically 3-7 days). During this period, token holders or their delegates submit vote transactions:

  ```solidity
  function castVote(uint proposalId, uint8 support) public returns (uint256)
  // support: 0 = Against, 1 = For, 2 = Abstain
  ```

  Each vote transaction costs gas (historically $5-100 on Ethereum mainnet, $0.10-2 on Layer 2s like Arbitrum/Optimism). This creates **participation inequality**: a whale with 10 million tokens pays the same $50 gas fee as a small holder with 100 tokens, making the cost per token vastly different and economically excluding small holders.

  **Phase 3: Quorum Verification and Result Determination**

  At voting period end, the Governor contract calculates results:

  ```
  Total Votes = For + Against + Abstain
  Proposal Succeeds if:
    1. For > Against (simple majority)
    2. Total Votes ≥ Quorum (e.g., 4% of supply)
    3. Proposer maintained threshold throughout voting
  ```

  **Quorum requirements** prevent low-turnout governance attacks. If quorum is too low (e.g., 1%), a small coordinated group could pass proposals during periods of low attention. If too high (e.g., 20%), legitimate proposals might fail due to voter apathy. Most major DAOs settled on **3-5% quorum** by 2024-2025.

  **Phase 4: Timelock and Execution**

  Successful proposals enter the **timelock period** (2-7 days), during which the exact bytecode to be executed is publicly visible. This allows:
  - **Security review**: Third-party auditors and community developers inspect execution code for hidden malicious behaviour
  - **Emergency response**: If malicious code is detected, emergency procedures (multi-sig intervention, migration proposals) can be activated
  - **Exit window**: Users who oppose the change can exit the protocol (sell tokens, withdraw liquidity) before execution

  After timelock expiration, anyone can call the `execute()` function (small gas fee) to trigger proposal implementation. Execution is automatic and unstoppable once timelock expires for successful proposals.

  ### Real-World Implementation Examples

  **Uniswap Governance (Token-Weighted Voting)**

  Uniswap DAO governs the world's largest decentralised exchange ($1+ trillion cumulative volume) through on-chain governance with UNI token:

  - **Total UNI Supply**: 1 billion tokens
  - **Community Treasury**: 430 million UNI ($3.2B at $7.50/UNI in 2024)
  - **Circulating Supply**: ~570 million UNI (team/investor tokens vested over 4 years)
  - **Typical Participation Rate**: 5-10% of circulating supply (28-57 million UNI)
  - **Top 10 Addresses**: Control ~40% of UNI voting power
  - **Active Delegates**: ~200 (with >100K delegated UNI)

  Major Uniswap governance proposals (2020-2025):
  1. **Temperature Check** (off-chain forum discussion, 2-3 days)
  2. **Consensus Check** (Snapshot off-chain vote, 5 days, 50K UNI threshold)
  3. **Governance Proposal** (on-chain vote, 7 days, 2.5M UNI threshold, 40M quorum)

  Notable votes:
  - **v3 Deployment to Optimism** (2021): 42M UNI voted (passed 99.3% in favour)
  - **UNI Grants Program Renewal** (2022): 47M UNI voted (passed 85% in favour)
  - **Fee Switch Discussions** (2020-2025): Multiple proposals debated but never implemented due to regulatory concerns

  **Compound Governance (Governor Bravo)**

  Compound pioneered many DeFi governance patterns still used industry-wide:

  - **COMP Token**: 10 million total supply
  - **Proposal Threshold**: 400,000 COMP (4% of supply, ~$37M in 2024)
  - **Quorum**: 400,000 COMP (4% of supply)
  - **Voting Period**: 7 days (50,400 Ethereum blocks at 12s block time)
  - **Timelock**: 2 days
  - **Governance Scope**: Interest rate models, collateral factors, reserve factors, asset listings, COMP distribution

  Compound introduced **governance mining** (2020): users earned COMP tokens proportional to interest paid/earned, distributing governance power to active protocol participants rather than investors. This became the standard DeFi token distribution model, though concentrated significant power amongst large capital deployers.

  **MakerDAO Governance (Executive Votes + Polls)**

  MakerDAO employs a **dual governance system** unique amongst major DAOs:

  - **Governance Polls**: Non-binding sentiment votes to gauge community opinion on parameter changes (e.g., "Should we increase the DAI Savings Rate?")
  - **Executive Votes**: Binding on-chain votes that directly execute smart contract changes via "spell" contracts

  MKR voting mechanics:
  - **No Quorum**: Executive votes pass when they accumulate more MKR than the current active executive (requires overtaking existing proposal)
  - **Continuous Approval**: Voters keep MKR staked on their preferred executive, and the leading proposal remains active until overtaken
  - **Emergency Shutdown**: 50,000 MKR (~$67M in 2024) can trigger emergency shutdown module, halting the protocol to prevent catastrophic failure

  This system creates **governance continuity** where the most-supported proposal is always active, but has been criticized for **low engagement** (often <10% MKR participation) and **whale dominance** (top 50 MKR holders control >80% of voting power).

  **Curve DAO (Vote-Escrowed CRV)**

  Curve Finance implemented **vote-escrowed tokens (veCRV)**, where governance power requires **locking** CRV tokens:

  - **CRV → veCRV Conversion**: Lock CRV for 1 week to 4 years, receiving veCRV proportional to lock duration
  - **Voting Power Formula**: `veCRV = CRV Amount × (Lock Time / 4 years)`
  - **Example**: 1,000 CRV locked 4 years = 1,000 veCRV; 1,000 CRV locked 1 year = 250 veCRV
  - **Decay**: veCRV balance decays linearly as lock expiration approaches (must re-lock to maintain voting power)

  This model creates **long-term alignment**: voters cannot immediately exit after extractive proposals, and governance power correlates with time commitment rather than just capital. Curve governance determines **liquidity gauge weights** (which pools receive CRV emissions), making veCRV extremely valuable for protocols seeking liquidity. This spawned the **"Curve Wars"** (2021-2023) where DeFi protocols accumulated massive veCRV positions to direct emissions to their pools, with [[Convex Finance]] controlling >50% of all veCRV at peak.

  ### Gas Costs and Participation Barriers

  On-chain voting's transparency and security come at significant economic cost:

  **Historical Gas Cost Analysis (Ethereum Mainnet):**
  - **2020-2021 DeFi Summer**: $20-150 per vote (ETH $400-4,000, gas 100-500 gwei)
  - **2021-2022 NFT Boom**: $50-200 per vote (peak $800 during high congestion)
  - **2023-2024 Moderate Period**: $5-50 per vote (ETH $1,600-3,500, gas 15-50 gwei)
  - **2024-2025 Layer 2 Migration**: $0.10-5 on Arbitrum/Optimism/Base

  **Participation Inequality by Economic Class:**

  Consider a governance vote on Ethereum mainnet costing $50 in gas:
  - **Whale (1M tokens, $7.5M position)**: $50 cost = 0.0007% of position → rational to vote
  - **Medium holder (10K tokens, $75K position)**: $50 cost = 0.067% of position → marginal rationality
  - **Small holder (100 tokens, $750 position)**: $50 cost = 6.7% of position → economically irrational to vote

  This creates **plutocratic bias** where only large holders can afford participation, concentrating governance power beyond even token distribution concentration. Layer 2 migration partially addresses this (reducing costs 90-99%), but introduces new challenges around cross-chain governance security.

  ### Delegation and Liquid Democracy

  To address participation barriers, most major DAOs implemented **vote delegation** systems:

  **ENS DAO Delegation Model** (launched November 2021):
  - **267 million ENS tokens** distributed via airdrop to .eth name holders
  - **Delegation encouraged** through governance UI prominently featuring delegation options
  - **Active Delegates**: ~400 registered delegates with public platforms
  - **Top 100 Delegates**: Control ~70% of delegated voting power
  - **Delegate Requirements**: Public profile, voting rationale documentation, community engagement

  Prominent ENS delegates include:
  - **Avsa.eth**: ENS developer, 2.8M ENS delegated
  - **Fire Eyes DAO**: Governance collective, 2.3M ENS delegated
  - **Simona Pop**: Community organizer, 1.1M ENS delegated

  **Optimism Collective Delegation**:

  Optimism DAO pioneered **bicameral governance** (two-house system):
  - **Token House**: OP token holders vote on protocol upgrades, incentive programs, treasury allocation
  - **Citizens' House**: Non-transferable citizenship NFTs vote on public goods funding via retroactive funding rounds

  OP Token House delegation statistics (2024):
  - **Total OP Supply**: 4.3 billion
  - **Top 100 Delegates**: Control ~62% of delegated voting power
  - **Paid Delegate Program**: 90 delegates receive OP token compensation for active participation, research, and proposal evaluation

  **Delegation Centralisation Concerns:**

  Whilst delegation increases participation efficiency, it recreates centralisation:
  - **Venture capital firms** (a16z crypto, Blockchain Capital) control massive delegated positions
  - **Professional delegates** earn six-figure incomes voting on governance, creating professional governance class
  - **Delegate cartels**: Risk of coordinated voting by delegate groups to pass self-serving proposals
  - **Voter laziness**: Token holders may delegate without researching delegate positions, trusting brand names over alignment

  ### Snapshot Off-Chain Voting

  To eliminate gas costs whilst maintaining cryptographic vote verification, many DAOs adopted **Snapshot** for signaling votes:

  **Snapshot Technical Mechanism:**
  - **Off-chain signatures**: Voters sign messages with private keys (EIP-712 standard), no blockchain transaction required
  - **IPFS storage**: Vote data stored on InterPlanetary File System (decentralized storage)
  - **Block-based snapshots**: Voting power calculated based on token balances at specific Ethereum block
  - **Cryptographic verification**: Anyone can verify signatures match claimed voters and balances
  - **Zero gas cost**: Voting is free, enabling broad participation

  **Snapshot Limitations:**
  - **Non-binding**: Snapshot votes don't automatically execute; require separate on-chain transaction
  - **Execution trust**: Community must trust that on-chain implementation matches off-chain vote outcome
  - **IPFS availability**: Vote data depends on IPFS nodes hosting the content

  **Hybrid Governance Patterns** (Temperature Check → Snapshot → On-Chain):

  1. **Forum Discussion** (Discourse, Commonwealth): Community debates proposal informally
  2. **Snapshot Temperature Check**: Free off-chain vote to gauge sentiment (lower threshold, e.g., 50K tokens)
  3. **On-Chain Formal Vote**: If Snapshot passes, proceed to binding on-chain vote (higher threshold, e.g., 2.5M tokens)
  4. **Timelock → Execution**: Automatic implementation

  This three-stage process balances accessibility (free Snapshot votes) with security (costly on-chain votes for final approval), though critics note it creates governance complexity and delay.

  ### Attack Vectors and Security

  On-chain voting systems face sophisticated attack vectors:

  **Flash Loan Governance Attacks** (Mitigated):

  Early governance systems were vulnerable to **flash loan attacks** where attackers borrowed massive token amounts within a single transaction, voted, and repaid the loan. For example:

  ```
  1. Borrow 10M governance tokens via flash loan
  2. Vote on malicious proposal
  3. Repay loan (all in one transaction)
  ```

  **Mitigation**: Block-based snapshots. Modern governance tokens (ERC20Votes) record balances at specific block numbers before voting begins, so flash-loaned tokens don't count toward voting power. Compound's Governor Bravo records snapshot at proposal creation block, making intra-block manipulation impossible.

  **Vote Buying and Bribery**:

  **Bribe.crv** (Votium, Hidden Hand): Protocols pay CRV/CVX holders to vote for their liquidity pools, creating **legal bribery markets** where $50-100 million in bribes are paid annually to direct Curve emissions. Whilst not necessarily attacks, these markets enable **governance influence purchases** by well-funded parties.

  **Mitigations**:
  - **Time-locks**: Reduce value of short-term vote purchases by delaying execution
  - **Vote-escrow models**: Curve's veCRV requires long-term locking, making bribes less effective
  - **Transparency**: Public bribe markets are preferable to hidden bribes, enabling community awareness

  **51% Attacks**:

  If an attacker acquires >50% of governance tokens, they control the protocol absolutely. Cost analysis for major DAOs (2024 prices):

  - **Uniswap**: 500M UNI (50% of supply) × $7.50 = $3.75 billion
  - **Aave**: 8M AAVE (50% of supply) × $155 = $1.24 billion
  - **Compound**: 5M COMP (50% of supply) × $93 = $465 million

  These attack costs exceed potential extraction value for established protocols, but smaller DAOs with <$50M fully diluted valuations remain vulnerable to governance takeovers.

  **Quorum Manipulation**:

  Attackers could spam proposals to fatigue voters, then submit malicious proposals during low-attention periods (holidays, weekends), exploiting low turnout to pass proposals with minority support. Quorum requirements mitigate this by ensuring minimum participation.

  ### Legal and Regulatory Considerations

  On-chain voting creates novel legal questions around securities classification, fiduciary duties, and regulatory [[Compliance]]:

  **Securities Law Implications (USA):**

  The **Howey Test** determines whether governance tokens are securities: (1) investment of money, (2) in common enterprise, (3) with expectation of profits, (4) derived from efforts of others. Governance tokens arguably fail prong 4 if token holders actively govern rather than passively investing, but SEC enforcement actions (Ripple, Telegram, numerous DeFi protocols) suggest regulators view most governance tokens as securities.

  **Implications**:
  - **Distribution restrictions**: Securities require registration or exemptions (Reg D, Reg S); airdrops to U.S. persons may violate securities laws
  - **Secondary trading**: DEX listings of governance tokens could constitute unregistered securities exchanges
  - **DAO liability**: If token holders are "general partners" in an unincorporated association, they may face unlimited liability

  **Regulatory Responses (2024-2025):**
  - **Uniswap Wells Notice** (2024): SEC notified Uniswap Labs of potential enforcement action, creating uncertainty around UNI token status
  - **Wyoming DAO LLC**: Provides legal personality and limited liability, but requires identifiable members/managers
  - **Marshall Islands DAO Non-Profits**: Several major DAOs incorporated as non-profit entities to gain legal personality whilst avoiding profit-driven securities classification

  ### Game Theory and Mechanism Design

  On-chain governance confronts fundamental game theory challenges:

  **Rational Voter Apathy** (Public Choice Theory):

  Individual voters face high costs (gas fees, research time, cognitive load) for negligible individual influence (one vote amongst millions). Rational actors free-ride on others' governance efforts, leading to endemic low participation. This is a **tragedy of the commons** in governance.

  **Voter Apathy Statistics**:
  - **MakerDAO**: 8-12% MKR participation (2024 average)
  - **Uniswap**: 5-10% UNI participation
  - **Compound**: 8-15% COMP participation
  - **Aave**: 6-12% AAVE participation

  **Whale Dominance and Plutocracy**:

  Token-weighted voting creates **plutocratic outcomes** where wealth equals political power:

  - **Uniswap Top 10 holders**: ~40% voting power (a16z, Paradigm, team wallets)
  - **MakerDAO Top 50 holders**: ~80% voting power
  - **ENS Top 100 delegates**: ~70% delegated voting power

  This concentration enables **unilateral decision-making** by coordinated whales, undermining democratic governance whilst potentially improving decisiveness.

  **Mechanism Design Solutions**:

  - **Quadratic Voting**: Reduces whale influence by making large vote counts prohibitively expensive (cost = votes²)
  - **Conviction Voting**: Rewards long-term commitment over short-term capital
  - **Vote Escrow**: Aligns governance with protocol success (locked tokens can't be sold after extractive votes)
  - **Futarchy** (proposed by Robin Hanson): Prediction markets determine governance outcomes based on expected protocol value impact rather than direct votes

  ### Best Practices for On-Chain Voting Implementation

  Based on 2020-2025 battle-testing across major DAOs:

  1. **Use Established Frameworks**: OpenZeppelin Governor or Compound Governor Bravo provide audited, battle-tested implementations. Custom governance logic introduces significant security risk.

  2. **Implement Timelocks**: Mandatory 2-7 day delays between vote approval and execution allow security review and emergency response.

  3. **Snapshot-Based Voting Power**: Use ERC20Votes or checkpoint mechanisms to prevent flash loan attacks and intra-block manipulation.

  4. **Enable Delegation**: Separate economic ownership from governance participation to improve participation and efficiency.

  5. **Multi-Stage Governance**: Combine off-chain signaling (Snapshot) with on-chain execution to balance accessibility and security.

  6. **Progressive Decentralization**: Launch with training wheels (multi-sig emergency controls, admin keys), gradually transfer control to on-chain governance as community matures.

  7. **Transparent Quorum Requirements**: Set quorum at 3-5% of circulating supply to prevent low-turnout attacks whilst remaining achievable.

  8. **Gas Cost Mitigation**: Deploy governance on Layer 2 networks or use meta-transactions/gas subsidies to reduce participation barriers.

  9. **Emergency Procedures**: Implement circuit breakers (e.g., MakerDAO Emergency Shutdown Module) for catastrophic scenarios.

  10. **Legal Entity Wrappers**: Consider DAO LLC or foundation structures to provide legal personality and limited liability whilst maintaining on-chain governance.

  ### Future Developments

  **Cross-Chain Governance**: As protocols deploy across multiple blockchains, cross-chain governance becomes essential. Technologies like **LayerZero**, **Wormhole**, and **Axelar** enable message passing between chains, allowing Ethereum mainnet votes to trigger execution on Arbitrum, Optimism, Polygon simultaneously. Security risks include bridge exploits potentially compromising governance across all chains.

  **AI-Assisted Voting**: Integration of AI systems to summarize proposals, detect malicious code, predict vote outcomes, and synthesize forum discussions. Major DAOs (Uniswap, Aave, Compound) began deploying AI governance tools in 2024-2025, improving efficiency whilst raising concerns about algorithmic bias and centralization of AI infrastructure.

  **Regulatory Adaptation**: Clearer regulatory frameworks for governance tokens will emerge through 2025-2027, potentially distinguishing "pure governance" tokens (no profit expectations) from "investment governance" tokens (DeFi protocol revenue sharing). DAOs will adapt structures to comply whilst maintaining decentralization.

  **Governance Minimization**: Some protocols will embrace **ossification**—minimizing governance surface area and making protocols progressively harder to change, following Bitcoin's model. This accepts that governance is an attack surface and that credible neutrality requires immutability.

  ### References and Case Studies

  - [[BC-0461-decentralized-autonomous-organization]]
  - [[BC-0463-governance-token]]
  - [[BC-0465-proposal-system]]
  - [[BC-0464-treasury-management]]
  - [[BC-0142-smart-contract]]
  - [[Uniswap Governance]]
  - [[Compound Governor Bravo]]
  - [[MakerDAO Executive Votes]]
  - [[Curve Vote Escrow Model]]
  - [[OpenZeppelin Governor]]
  - [[Snapshot Off-Chain Voting]]

  ### Original Content
    collapsed:: true
	- ```

	  ```

## Current Landscape (2025)

- On Chain Voting continues evolving within blockchain governance frameworks
- Enhanced regulatory clarity across major jurisdictions
- Integration with emerging DAO standards and best practices
- Increased institutional adoption and professional participation

## Processing Information

- **Processed**: 2025-11-14T11:10:49.122043
- **Processor**: Governance-Processor Agent
- **Status**: Enhanced with Perplexity API
- **Blockchain Relevance**: High
- **Quality Check**: 2024-2025 Standards Compliance
