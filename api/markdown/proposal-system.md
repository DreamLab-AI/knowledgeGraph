- ### Definition
  - Multi-stage governance workflows enabling [[DAO]] community members to initiate, discuss, deliberate, vote upon, and execute protocol changes through structured processes combining off-chain deliberation (forums, governance calls), [[Snapshot]] signalling, and binding [[OnChainVoting|on-chain execution]] via [[SmartContract|smart contracts]]. Proposal systems implement thresholds—[[GovernanceToken]] requirements for initiation, quorum thresholds for binding, timelocks before execution—creating barriers preventing spam whilst enabling broad participation. Systems balance bottom-up permissionless initiation with governance efficiency, facing challenges around proposal spam, voter fatigue (5-15% typical participation), and professionalization concentrating power amongst technical elites.

- ### Semantic Classification
  - owl-class:: blockchain:ProposalSystem
  - owl-role:: Concept
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - enables:: [[OnChainVoting]] (domain: blockchain→governance, type: coordination)
  - requires:: [[Snapshot]] (domain: blockchain→signalling, type: deliberation)

- ### Content
  Proposal systems in [[BC-0461-decentralized-autonomous-organization|DAOs]] represent the structured mechanisms through which community members initiate, discuss, refine, vote upon, and execute protocol changes, transforming decentralised governance from theoretical abstraction into operational reality through multi-stage workflows combining off-chain deliberation (forums, Discord, governance calls), cryptographic signaling ([[Snapshot]] off-chain votes), and binding [[BC-0462-on-chain-voting|on-chain execution]] via [[BC-0142-smart-contract|smart contracts]]. Unlike traditional corporate governance where proposals typically flow top-down from management to board approval to shareholder ratification, DAO proposal systems enable bottom-up community initiation whilst imposing significant barriers—[[BC-0463-governance-token|governance token]] thresholds requiring millions in token holdings, technical expertise to encode proposal actions in executable smart contract code, and social capital to mobilise community support through multi-week deliberation processes—creating tension between permissionless participation ideals and practical governance efficiency. The 2020-2025 period witnessed explosive growth in proposal sophistication across major DAOs like [[Uniswap]] (processing 50+ binding governance proposals governing $5B+ treasury and protocol parameters), [[MakerDAO]] (1,000+ executive votes managing $8B+ DeFi system), [[Compound]] (200+ proposals pioneering autonomous parameter adjustments), and [[Aave]] (150+ governance proposals coordinating multi-chain protocol deployments), whilst simultaneously exposing persistent challenges: proposal spam and low-quality submissions, voter fatigue and declining participation rates (5-15% typical turnout), governance attacks exploiting quorum requirements, the professionalization of proposal authorship concentrating power amongst technical elites, and the fundamental question of whether formal on-chain governance creates more problems than decentralised coordination solves.

  ### Proposal Lifecycle and Multi-Stage Governance

  Modern DAO proposal systems employ multi-stage workflows balancing accessibility, deliberation quality, and execution security:

  **Stage 1: Ideation and Discussion (Off-Chain Forums)**

  Initial proposal concepts emerge through informal community discussions:

  - **Platforms**: Discourse forums, Commonwealth, Discord channels, Telegram groups, governance calls
  - **Participants**: Any community member can initiate discussion (no token threshold)
  - **Duration**: Ongoing/indefinite until sufficient interest emerges
  - **Output**: Rough proposal concept, identification of champions willing to formalize

  **Example Forums:**
  - **Uniswap Governance Forum** (gov.uniswap.org): 10,000+ posts, 3,000+ topics, dedicated categories for proposals, grants, meta-governance
  - **MakerDAO Forum** (forum.makerdao.com): 50,000+ posts, extensive discussion threads on collateral onboarding, risk parameters, protocol upgrades
  - **Compound Community Forum**: Technical discussions on interest rate models, asset listings, security
  - **Aave Governance Forum**: Multi-chain deployment proposals, risk parameter adjustments, treasury allocations

  **Stage 2: Temperature Check (Snapshot Signaling Vote)**

  Formalized proposal draft subjected to off-chain vote gauging community sentiment:

  - **Platform**: Snapshot (snapshot.org) - off-chain governance signaling using cryptographic signatures
  - **Requirements**:
    - Minimum token holding to create Snapshot (varies: 50K-100K tokens typical)
    - Structured proposal format (title, summary, motivation, specification, voting options)
  - **Duration**: 3-7 days typically
  - **Voting**: Free (no gas costs), uses EIP-712 signatures verified via IPFS
  - **Quorum**: Lower than on-chain (often no quorum, simple majority sufficient)
  - **Outcome**: Non-binding signal; if passes, proceeds to formal governance

  **Snapshot Technical Mechanism:**
  ```
  1. Proposer creates proposal on Snapshot platform
  2. Snapshot records Ethereum block number for vote power calculation
  3. Voters sign EIP-712 messages (off-chain, no gas)
  4. Signatures stored on IPFS (decentralized storage)
  5. Anyone can verify signatures match voter addresses + block balances
  6. Vote tallying occurs off-chain by aggregating signatures
  ```

  **Stage 3: Consensus Check / Refined Proposal**

  For proposals passing temperature check, authors refine based on feedback:

  - **Refinement**: Incorporate community feedback, address concerns, add technical specifications
  - **Legal review**: For major proposals, DAOs increasingly conduct legal analysis (regulatory compliance, securities law implications, liability risks)
  - **Security audit**: For smart contract changes, third-party audits verify code correctness
  - **Economic modeling**: For parameter changes, quantitative analysis of expected impact
  - **Second Snapshot**: Some DAOs require second off-chain vote on refined proposal before on-chain submission

  **Stage 4: On-Chain Governance Proposal**

  Formal binding proposal submitted to blockchain for execution:

  - **Requirements**:
    - **Proposal threshold**: Minimum governance tokens held/delegated (Uniswap 2.5M UNI, Compound 400K COMP, Aave 80K AAVE)
    - **Executable code**: Proposal must include exact smart contract function calls to execute if approved
    - **Gas costs**: Submission costs $50-500 depending on Ethereum gas prices (proposal creation is complex transaction)

  - **Components**:
    - **Targets**: Array of contract addresses to call
    - **Values**: ETH amounts to send with each call (typically zero)
    - **Signatures**: Function signatures to call on each target
    - **Calldatas**: ABI-encoded parameters for each function call
    - **Description**: Human-readable proposal text (stored on-chain or IPFS)

  - **Example Proposal Structure** (Compound Governor Bravo):
  ```solidity
  function propose(
      address[] memory targets,
      uint[] memory values,
      string[] memory signatures,
      bytes[] memory calldatas,
      string memory description
  ) public returns (uint)
  ```

  - **Voting period**: 3-10 days (Uniswap 7 days, Compound 7 days, Aave 10 days)
  - **Quorum requirement**: 3-5% of circulating supply typical (Uniswap 40M UNI = 4%, Compound 400K COMP = 4%)
  - **Approval threshold**: Simple majority (For > Against) plus quorum met

  **Stage 5: Timelock Delay**

  Successful proposals enter mandatory delay before execution:

  - **Duration**: 2-7 days (Uniswap 2 days, Compound 2 days, Aave 1-7 days depending on risk)
  - **Purpose**:
    - **Security review**: Community inspects exact bytecode that will execute
    - **Fraud detection**: Identify proposals with hidden malicious code
    - **Exit window**: Users opposed to change can withdraw funds, sell tokens before execution
    - **Emergency response**: If malicious code detected, activate emergency procedures (multisig intervention, migration)

  - **Transparency**: During timelock, exact transaction data is public on-chain, enabling thorough verification

  **Stage 6: Execution**

  After timelock expiration, proposal executes automatically (or requires permissionless trigger):

  - **Execution**: Anyone can call `execute()` function (small gas fee) to trigger queued proposal
  - **Atomicity**: All proposal actions execute in single transaction (either all succeed or all revert)
  - **Finality**: Once executed, changes are permanent (barring subsequent proposal to reverse)
  - **Verification**: Community verifies execution matched proposal description

  ### Real-World Proposal Systems

  **Uniswap Three-Stage Governance:**

  Uniswap employs rigorous multi-stage process ensuring high-quality proposals:

  **1. Temperature Check (Discourse + Snapshot):**
  - **Forum discussion**: 2-3 days minimum on gov.uniswap.org
  - **Snapshot vote**: 5 days, 50K UNI threshold to create, simple majority to pass
  - **Purpose**: Filter out low-quality proposals early (free voting encourages broad participation)

  **2. Consensus Check (Snapshot):**
  - **Refined proposal**: Authors incorporate feedback, add technical specifications
  - **Second Snapshot**: 5 days, 50K UNI threshold
  - **Purpose**: Ensure refined proposal maintains community support before expensive on-chain submission

  **3. Governance Proposal (On-Chain):**
  - **Requirements**: 2.5M UNI proposal threshold (~$19M at $7.50/UNI), 40M UNI quorum (4% of supply)
  - **Voting**: 7 days on-chain
  - **Timelock**: 2 days
  - **Execution**: Automatic after timelock

  **Historical Uniswap Proposals:**
  - **UGP v0.1** (March 2021): $1.5M grants program, 40M UNI voted, passed 99.97% in favor
  - **Deploy v3 on Optimism** (June 2021): First L2 deployment, 42M UNI voted, passed 99.3%
  - **Deploy v3 on Polygon** (December 2021): Second L2 deployment, 45M UNI voted, passed 99.4%
  - **Uniswap Foundation Funding** (June 2022): $74M UNI to foundation, 52M UNI voted, passed 84.3%

  **MakerDAO Dual Governance System:**

  MakerDAO uses unique system combining polls and executive votes:

  **Governance Polls (Non-Binding Signal):**
  - **Purpose**: Gauge community sentiment on proposed changes before formal vote
  - **Examples**: "Should we increase DAI Savings Rate from 1% to 2%?"
  - **Voting**: MKR-weighted, no quorum, typically 3-7 days
  - **Outcome**: Informs executive vote creation but doesn't execute changes

  **Executive Votes (Binding Execution):**
  - **Mechanism**: "Spell" smart contracts encoding proposed changes
  - **Voting**: MKR holders vote by staking tokens on preferred executive
  - **No quorum**: Executive with most staked MKR becomes active (continuous approval voting)
  - **Execution**: Leading executive automatically executes when overtaking previous executive
  - **Unique feature**: Voters keep MKR staked indefinitely on preferred executive (not time-limited vote)

  **MakerDAO Emergency Shutdown:**
  - **Trigger**: 50,000 MKR staked on Emergency Shutdown Module (~$67M in 2024)
  - **Effect**: Immediately halts protocol, allows DAI holders to redeem collateral
  - **Purpose**: Protection against governance attacks, critical bugs, or black swan events

  **Historical MakerDAO Proposals:**
  - **Collateral Onboarding**: 100+ new collateral types approved (USDC, wBTC, stETH, RWAs)
  - **Stability Fee Adjustments**: 500+ parameter changes responding to market conditions
  - **DAI Savings Rate Changes**: 200+ DSR adjustments balancing DAI demand
  - **Sky Protocol Transition** (2024): Controversial restructuring into Sky Ecosystem with NewStable (NST) and NewGovToken (NGT)

  **Compound Autonomous Proposals:**

  Compound pioneered autonomous on-chain governance with minimal off-chain coordination:

  **Proposal Process:**
  - **Direct submission**: Proposals can skip off-chain stages and go directly on-chain (though discouraged)
  - **Requirements**: 400K COMP proposal threshold + quorum (4% supply = 400K COMP)
  - **Voting**: 7 days (50,400 Ethereum blocks)
  - **Timelock**: 2 days
  - **Scope**: Interest rate models, collateral factors, reserve factors, asset listings, COMP distribution

  **Governor Bravo Innovation:**
  Compound developed Governor Bravo contract (2020), which became industry standard:
  - **Three voting options**: For, Against, Abstain (abstain counts toward quorum but not outcome)
  - **Proposal threshold checking**: Proposer must maintain threshold throughout voting (prevents flash loan governance attacks)
  - **Timelock integration**: Automatic queuing of successful proposals with mandatory delay
  - **Delegation support**: Voting power delegation without token transfer

  **Historical Compound Proposals:**
  - **COMP Distribution Launch** (Proposal 007, June 2020): Activated COMP token distribution, catalyzed DeFi Summer
  - **cDAI Interest Rate Model** (Multiple proposals): Optimized borrowing costs for DAI market
  - **Compound III (Comet)**: New protocol version with different architecture, approved via governance
  - **Treasury Diversification**: Proposals to convert COMP treasury holdings into stablecoins

  **Aave Risk-Tiered Governance:**

  Aave implements different timelock durations based on proposal risk level:

  **Proposal Categories:**
  1. **Low Risk** (1-day timelock): Parameter tweaks within safe ranges
  2. **Medium Risk** (3-day timelock): Significant parameter changes, new asset listings
  3. **High Risk** (7-day timelock): Smart contract upgrades, major protocol changes

  **Aave Improvement Proposals (AIPs):**
  - **Proposition Power**: 80,000 AAVE required to create proposal
  - **Voting Power**: 320,000 AAVE quorum required (2% of supply)
  - **Voting Period**: ~10 days
  - **Multi-Chain Coordination**: Proposals can trigger actions across Ethereum, Polygon, Avalanche, Optimism, Arbitrum

  **Historical Aave Proposals:**
  - **AIP-16: Aavenomics** (October 2020): Introduced Safety Module staking and AAVE value accrual
  - **AIP-27: Add GHO** (July 2023): Launched Aave's native stablecoin GHO
  - **AIP-45: Aave v3 Deployment** (March 2022): Deployed v3 across multiple chains
  - **AIP-60: Treasury Management** (2023): Allocated treasury to yield-generating strategies

  ### Proposal Templates and Standards

  DAOs developed standardized proposal formats ensuring completeness and enabling systematic evaluation:

  **Standard Proposal Structure:**

  ```markdown
  # [Proposal ID]: [Title]

  ## Summary
  [2-3 sentence overview]

  ## Motivation
  [Why is this change needed? What problem does it solve?]

  ## Specification
  [Exact technical details of proposed change]

  ### Technical Implementation
  [Smart contract addresses, function calls, parameters]

  ### Security Considerations
  [Risks, attack vectors, mitigations]

  ### Economic Impact
  [Expected effects on protocol metrics, users, treasury]

  ## Voting Options
  - **For**: [What voting "yes" means]
  - **Against**: [What voting "no" means]
  - **Abstain**: [Counted toward quorum but not outcome]

  ## Timeline
  - Temperature Check: [Dates]
  - Consensus Check: [Dates]
  - On-Chain Vote: [Dates]
  - Timelock: [Duration]
  - Execution: [Expected date]

  ## References
  [Forum links, audit reports, economic analysis, prior art]
  ```

  **Specialized Templates:**

  - **Collateral Onboarding (MakerDAO)**: Risk assessment, oracle configuration, liquidation parameters, debt ceiling
  - **Asset Listing (Aave, Compound)**: Market parameters, interest rate curves, collateral factors, supply/borrow caps
  - **Treasury Allocation (Multiple DAOs)**: Budget breakdown, deliverables, milestones, accountability mechanisms
  - **Parameter Changes**: Current vs proposed values, expected impact, rollback procedures
  - **Smart Contract Upgrades**: Diff of code changes, audit reports, migration procedures, emergency response plans

  ### Proposal Authorship and Professionalization

  Creating successful proposals requires significant expertise and resources:

  **Barriers to Proposal Creation:**

  1. **Token threshold**: 2.5M UNI ($19M), 400K COMP ($37M), 80K AAVE (~$12M) creates economic barrier excluding small holders

  2. **Technical expertise**: Encoding proposal actions in smart contract calls requires Solidity knowledge, understanding of protocol architecture, testing on testnets

  3. **Legal knowledge**: Major proposals increasingly require legal review (securities compliance, DAO liability, regulatory implications)

  4. **Economic modeling**: Parameter change proposals need quantitative impact analysis, simulation of edge cases

  5. **Social capital**: Mobilizing sufficient community support requires reputation, communication skills, persistence through multi-week process

  6. **Time investment**: 20-100+ hours typical for major proposals (research, drafting, feedback incorporation, community calls, vote shepherding)

  **Professional Proposal Services:**

  Specialized firms emerged offering proposal-as-a-service:

  - **Llama**: DAO treasury and governance consulting, authored proposals for major DAOs, provides economic analysis and execution support
  - **Gauntlet**: Financial modeling and risk analysis for DeFi protocols, authored Aave/Compound parameter optimization proposals
  - **StableLab**: Governance participation service, delegates and proposal authorship
  - **BlockworksResearch**: Governance research and proposal strategy

  **Implications:**
  - **Governance professionalization**: High-quality proposals increasingly authored by paid experts rather than community volunteers
  - **Centralization concerns**: Small number of service providers author large percentage of proposals across ecosystem
  - **Quality improvement**: Professional proposals tend to be better researched, technically sound, legally reviewed
  - **Accessibility erosion**: Smaller community members increasingly excluded from proposal authorship

  ### Proposal Challenges and Attack Vectors

  DAO proposal systems face numerous challenges and exploits:

  **Proposal Spam and Low-Quality Submissions:**

  High proposal thresholds mitigate spam, but DAOs still face:
  - **Self-serving grants**: Participants proposing grants to themselves or affiliated entities
  - **Duplicative proposals**: Multiple proposals addressing same issue slightly differently
  - **Underdeveloped proposals**: Insufficient technical specification, no security review, unclear impact analysis
  - **Attention fragmentation**: Too many simultaneous proposals overwhelm voter capacity to evaluate

  **Voter Fatigue and Declining Participation:**

  Excessive governance burden reduces participation:
  - **MakerDAO**: 500+ annual votes creates fatigue; participation often <10% MKR
  - **Compound**: 50+ annual proposals; participation 8-15% COMP
  - **Uniswap**: Selective on-chain voting (rigorous off-chain filtering) maintains 5-10% participation

  **Governance Attacks:**

  1. **Quorum manipulation**: Submit proposals during holidays/weekends when participation is low, exploit minimal quorum to pass self-serving proposals

  2. **Proposal rushing**: Create urgency around proposals to limit review time, exploit complexity to hide malicious code

  3. **Vote buying**: Purchase voting power on open market or via bribes (Curve bribery markets openly facilitate governance influence purchases)

  4. **Sybil proposals**: Create multiple wallets to submit many proposals, exhaust community attention, sneak through malicious proposal during fatigue

  5. **Flash loan attacks** (mitigated): Early governance systems vulnerable to flash loan voting; modern systems use block snapshots preventing intra-block manipulation

  **Governance Gridlock:**

  High quorum requirements can prevent legitimate proposals from passing:
  - **Too-high quorum**: If 10% quorum required but only 8% participate, all proposals fail regardless of support
  - **Competing proposals**: Multiple proposals addressing same issue split votes, none achieve quorum
  - **Controversial changes**: Divisive proposals (fee switch activation) may approach but never achieve quorum

  ### Emergency Proposals and Fast-Track Mechanisms

  DAOs implement emergency procedures for critical vulnerabilities:

  **Standard Emergency Mechanisms:**

  1. **Multisig intervention**: Core team or elected multisig can pause contracts, deploy fixes, freeze assets during active exploits (bypasses governance temporarily)

  2. **Reduced timelock**: Critical security fixes use shortened timelock (1 day vs standard 7 days), reducing exploit window

  3. **Emergency quorum reduction**: Lower quorum requirements for emergency proposals (2% vs standard 4%), enabling faster response

  4. **Guardian role**: Designated addresses (team multisig, security council) can veto malicious proposals during timelock period

  **Examples:**

  - **MakerDAO Emergency Shutdown**: 50K MKR can immediately halt protocol, preventing further damage during critical failures
  - **Compound Guardian**: Multisig can cancel malicious proposals during timelock, veto dangerous parameter changes
  - **Aave Emergency Admin**: Can pause protocol during active exploits, freeze reserves, disable borrowing
  - **Uniswap Emergency Response**: Foundation multisig can intervene if governance is compromised, though never used as of 2025

  **Trade-offs:**
  - **Security vs Decentralization**: Emergency powers centralize control, contradicting DAO ethos, but necessary for security
  - **Abuse risk**: Malicious multisig could abuse emergency powers to extract value, censor legitimate proposals
  - **Transition plan**: Most DAOs plan eventual removal of emergency powers as protocols mature and ossify

  ### Proposal Analytics and Tooling

  Specialized infrastructure supports proposal creation, voting, and tracking:

  **Governance Platforms:**

  - **Tally** (tally.xyz): On-chain governance interface, supports proposal creation/voting for Governor-based DAOs, provides analytics dashboards
  - **Snapshot** (snapshot.org): Off-chain signaling votes, 10,000+ DAOs using platform, supports multiple voting strategies
  - **Boardroom** (boardroom.io): Aggregates governance across DAOs, provides proposal notifications, voting history tracking
  - **Commonwealth** (commonwealth.im): Discussion forums + governance voting integrated platform

  **Delegation Platforms:**

  - **Agora** (voteagora.com): Optimism governance and delegation
  - **Karma** (karmahq.xyz): Delegate discovery and reputation scoring
  - **Delegation dashboards**: DAO-specific platforms showing delegate voting records, participation rates, alignment

  **Analytics and Transparency:**

  - **DeepDAO**: DAO governance analytics, tracks proposals, participation, treasury across 1000+ DAOs
  - **Dune Analytics**: Community-built SQL dashboards analyzing proposal outcomes, voter behavior, participation trends
  - **Nansen**: On-chain analytics identifying whale voting patterns, delegation flows, governance influence

  ### Best Practices for Proposal Systems

  Based on 2020-2025 ecosystem experience:

  1. **Multi-stage filtering**: Require off-chain temperature checks before expensive on-chain votes, reducing spam and improving quality

  2. **Standardized templates**: Enforce proposal structure ensuring completeness (summary, specification, security analysis, economic impact)

  3. **Sufficient deliberation time**: Minimum 7-14 days from temperature check to execution, allowing thorough review and community coordination

  4. **Transparent executable code**: Publish exact smart contract calls that will execute, enable community verification during timelock

  5. **Proportional thresholds**: Set proposal thresholds high enough to prevent spam (0.25-4% of supply) but not so high they exclude broad participation

  6. **Achievable quorum**: Set quorum at 3-5% of circulating supply, ensuring legitimacy whilst remaining achievable (10%+ quorum frequently causes gridlock)

  7. **Delegation enablement**: Support vote delegation reducing barriers to participation for passive holders

  8. **Emergency procedures**: Implement multisig guardians or security councils for critical vulnerabilities, with plans to eventually remove

  9. **Proposal subsidies**: Consider funding public goods proposals or providing governance participation incentives to improve quality and participation

  10. **Clear governance scope**: Explicitly define what can/cannot be governed, constitutional limits protecting core protocol properties

  ### Future Developments

  **AI-Assisted Proposal Creation**: Natural language interfaces enabling non-technical community members to generate executable proposals via AI translation of intent to smart contract code.

  **Futarchy and Prediction Markets**: Proposal evaluation via prediction markets assessing expected protocol impact rather than direct voting (proposed by Robin Hanson, minimal real-world adoption as of 2025).

  **Cross-Chain Proposal Execution**: Unified governance systems enabling single proposal to execute across Ethereum, Arbitrum, Optimism, Polygon simultaneously via cross-chain messaging.

  **Reputation-Weighted Proposals**: Non-transferable reputation earned through contribution determining proposal creation rights rather than token holdings, reducing plutocracy.

  **Regulatory Adaptation**: Clearer legal frameworks distinguishing governance proposals from securities offerings, investment advice, or fiduciary actions.

  ### References and Case Studies

  - [[BC-0461-decentralized-autonomous-organization]]
  - [[BC-0462-on-chain-voting]]
  - [[BC-0463-governance-token]]
  - [[BC-0464-treasury-management]]
  - [[BC-0142-smart-contract]]
  - [[Uniswap Governance Process]]
  - [[MakerDAO Executive Votes]]
  - [[Compound Governor Bravo]]
  - [[Aave Improvement Proposals]]
  - [[Snapshot Off-Chain Voting]]
  - [[Tally Governance]]

  ### Original Content
  - ```

	  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z