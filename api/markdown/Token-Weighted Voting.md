public:: true

# token-weighted voting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f952ebd8bba87024c3b5ab7800ca5879fadf2126b044fc5c17d0f53240c2ea5",
  "@type": "Page",
  "vc:slug": "token-weighted-voting",
  "title": "token-weighted voting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-weighted-voting",
  "@type": "Class",
  "label": "Token-Weighted Voting",
  "definition": "Token-weighted voting is an on-chain governance mechanism in which each participant's voting power is directly proportional to the quantity of governance tokens they hold, lock, or stake. It is the dominant decision-making primitive in decentralised autonomous organisations and DeFi protocols, enabling transparent, programmable, and censorship-resistant governance of parameter changes, treasury allocations, and protocol upgrades. The mechanism exhibits plutocratic tendencies in which large token holders disproportionately control outcomes, motivating research into alternative weighting schemes such as quadratic voting, conviction voting, and vote-escrow models. Implementations range from fully on-chain execution via Governor Bravo and OpenZeppelin Governor to off-chain gasless signalling via platforms such as Snapshot.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On Chain Voting"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:vote-escrow", "label": "Vote Escrow"},
      {"@id": "urn:ngm:class:liquid-democracy", "label": "Liquid Democracy"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"},
      {"@id": "urn:ngm:class:conviction-voting", "label": "Conviction Voting"},
      {"@id": "urn:ngm:class:one-person-one-vote", "label": "One Person One Vote"},
      {"@id": "urn:ngm:class:reputation-based-voting", "label": "Reputation-Based Voting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"},
      {"@id": "urn:ngm:class:defi-protocol", "label": "DeFi Protocol"},
      {"@id": "urn:ngm:class:plutocracy", "label": "Plutocracy"},
      {"@id": "urn:ngm:class:voter-turnout", "label": "Voter Turnout"},
      {"@id": "urn:ngm:class:governance-attack", "label": "Governance Attack"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:erc-20-token", "label": "ERC-20 Token"},
      {"@id": "urn:ngm:class:quorum-threshold", "label": "Quorum Threshold"},
      {"@id": "urn:ngm:class:proposal-mechanism", "label": "Proposal Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:protocol-upgrade", "label": "Protocol Upgrade"},
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"},
      {"@id": "urn:ngm:class:parameter-governance", "label": "Parameter Governance"},
      {"@id": "urn:ngm:class:decentralised-decision-making", "label": "Decentralised Decision-Making"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"},
      {"@id": "urn:ngm:class:social-choice-theory", "label": "Social Choice Theory"},
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "sameAs": [
      {"@id": "urn:ngm:class:token-vote-governance", "label": "Token Vote Governance"},
      {"@id": "urn:ngm:class:plutocratic-voting", "label": "Plutocratic Voting"}
    ]
  },
  "qualityScore": 0.74,
  "maturity": "established",
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Token-weighted voting is an [[On-Chain Voting]] mechanism in which each participant's influence over a collective decision is directly proportional to the quantity of [[Governance Token]]s they hold, lock, or stake. It forms the primary governance primitive for the majority of [[DAO Governance]] systems and [[DeFi Protocol]]s deployed on public blockchains, enabling transparent, programmable, and censorship-resistant control over [[Parameter Governance]], [[Treasury Management]], and [[Protocol Upgrade]]s. Because voting power scales linearly with token holdings, the mechanism exhibits inherent plutocratic tendencies — motivating research into alternatives such as [[Quadratic Voting]], [[Conviction Voting]], and reputation-weighted schemes — yet it remains the most widely deployed governance primitive due to its simplicity, auditability, and direct alignment between economic stake and decision rights.

- ### Overview
  - Token-weighted voting encodes the principle that those who bear the greatest economic stake in a protocol should exercise commensurate influence over its direction. Each token represents one unit of voting power; holding a thousand tokens grants a thousand votes, and holding ten percent of the supply grants ten percent of total voting weight.
  - The mechanism operates within a lifecycle: a proposer (often required to hold a minimum token threshold to prevent spam) submits a proposal on-chain or off-chain, a voting window opens during which token holders cast votes, and a smart contract evaluates whether the votes cast in favour exceed both the quorum threshold (minimum participation) and the approval threshold (minimum support fraction).
  - If both thresholds are met, the proposal transitions to an executable state — often subject to a time-lock delay to allow users to exit before changes take effect — and the [[Smart Contract]] automatically enforces the outcome, eliminating the need for trusted off-chain administrators.
  - The approach is distinguished by several properties:
    - **Transparency**: all votes are recorded on a public ledger and auditable by anyone.
    - **Programmability**: governance logic is enforced by [[Smart Contract]] code with deterministic outcomes.
    - **Censorship resistance**: no central authority can invalidate votes or halt tallying.
    - **Sybil susceptibility**: splitting tokens across wallets does not increase power, so the mechanism is inherently Sybil-resistant at the level of token holdings, though not at the level of identity.

- ### Key Mechanisms
  - #### Direct vs Delegated Voting
    - In **direct token voting**, holders vote in every proposal themselves. This demands constant attention and incurs gas costs on chains where voting is on-chain.
    - **Delegated voting** (a form of [[Liquid Democracy]]) allows token holders to assign their voting power to a trusted delegate, who votes on their behalf. Delegation can be recursive and revocable at any time, allowing holders to reclaim their power before a critical vote.
    - Compound Finance popularised delegated governance through its [[Governor Bravo]] framework; the delegate registry is a core component of many ERC-20-compatible governance stacks.
  - #### Vote-Escrow (veToken) Model
    - [[Vote Escrow]] schemes — pioneered by Curve Finance's veCRV — extend token-weighted voting by weighting votes by both token quantity and lock duration. Locking tokens for longer periods yields more voting power (and often boosted yield), incentivising long-term alignment between voters and protocol health.
    - The ve-model has been adopted widely (veBAL, veAERO, vePENDLE) and represents a hybrid between pure token-weighted governance and time-preference-weighted governance.
    - A consequence is reduced liquidity for locked tokens, which creates a secondary market for liquid wrappers (e.g. cvxCRV, vlCVX) and can concentrate governance power in aggregator protocols.
  - #### Off-Chain Signalling vs On-Chain Execution
    - **On-chain voting** (Governor Bravo, OpenZeppelin Governor) records every vote as a blockchain transaction and automatically executes approved proposals via time-locked [[Smart Contract]]s. It is the gold standard for binding governance but incurs gas costs per vote.
    - **[[Snapshot Voting]]** enables gasless, off-chain voting using signed messages that prove token ownership at a specific block height (snapshot block). Results are non-binding by default and require a trusted multisig or designated executor to implement on-chain, introducing a trust assumption.
    - Many protocols use a two-phase approach: Snapshot for temperature checks and community signalling, followed by binding on-chain ratification for critical parameter changes.
  - #### Quorum and Approval Thresholds
    - **Quorum threshold**: the minimum fraction of total token supply that must participate for a vote to be valid. Low quorum enables a small coalition of active voters to make binding decisions even when most holders are passive.
    - **Approval threshold**: the minimum fraction of participating votes that must support the proposal (commonly 50%, though supermajority requirements of 66% or higher are used for critical changes such as contract upgrades).
    - Threshold calibration is itself a governance parameter subject to attack: setting quorum too high risks governance paralysis; setting it too low enables capture by a small group of coordinated actors.
  - #### Time-Lock and Veto Mechanisms
    - A [[Time-Lock Controller]] enforces a mandatory delay between a proposal passing and its execution, giving token holders and liquidity providers a window to exit if they disagree with the outcome.
    - Some protocols add guardian or veto mechanisms — often held by a security council or multisig — that can cancel malicious or erroneous proposals during the time-lock window without blocking normal governance.

- ### Applications and Use Cases
  - #### DeFi Protocol Governance
    - Major DeFi protocols use token-weighted voting to govern interest rate parameters, collateral factors, fee switches, and liquidity incentive allocations. Examples include Compound (COMP), Aave (AAVE/stkAAVE), Uniswap (UNI), MakerDAO (MKR), and Curve (veCRV).
    - Parameter changes in these protocols can affect billions of dollars of user funds, making governance attack surfaces a major security concern.
  - #### DAO Treasury Management
    - [[DAO Governance]] bodies use token-weighted proposals to authorise grants, investments, partnerships, and expenditures from on-chain treasuries. Examples include Gitcoin (GTC), ENS DAO (ENS), and Arbitrum DAO (ARB).
    - Treasury proposals often require higher approval thresholds due to the irreversible nature of fund transfers.
  - #### Layer-2 and Cross-Chain Governance
    - Rollup networks (Optimism OP, Arbitrum ARB) use token-weighted governance to control sequencer parameters, fee structures, and protocol upgrades. Optimism introduced a bicameral Token House / Citizens' House model to partially mitigate token-weighted plutocracy.
  - #### Protocol Upgrade Governance
    - Critical [[Protocol Upgrade]]s — such as smart contract migrations, consensus rule changes, or security patches — are ratified via token-weighted proposals, often with elevated quorum and approval thresholds, plus extended time-lock delays.
  - #### NFT and Social Protocol Governance
    - Token-weighted voting has been adapted to governance of NFT collections, social media protocols (e.g. Farcaster channel governance), and creator DAOs, where the token may represent membership, revenue share, or creative rights rather than pure financial stake.

- ### Weaknesses and Attack Vectors
  - #### Plutocracy and Wealth Concentration
    - Because voting power scales linearly with token holdings, wealthy participants — early investors, venture capital funds, founding teams, and centralised exchanges using customer deposits — can dominate outcomes. This replicates the concentration of power that decentralised systems aim to avoid.
  - #### Low Voter Turnout
    - Most token governance systems exhibit chronically low participation, often with only a few percent of circulating supply voting. This means proposals can pass on a small fraction of the total token supply, making governance susceptible to capture by coordinated minority coalitions.
  - #### Vote Buying and Governance Attacks
    - Flash loan attacks can temporarily acquire enormous voting power within a single transaction block. Some protocols have adopted snapshot-block mechanisms that crystallise voting balances before the proposal is visible to prevent flash loan exploitation.
    - Vote buying markets and governance-as-a-service platforms (e.g. Votium, Hidden Hand) allow token holders to rent out voting power for incentive payments, which can misalign voting behaviour from protocol health.
  - #### Voter Apathy and Rational Ignorance
    - For small token holders, the cost of researching proposals (in time and attention) exceeds the personal benefit of their marginal voting power. This rational apathy structurally depresses participation and concentrates effective governance in the hands of large, professional holders.
  - #### Governance Attacks
    - [[Governance Attack]]s involve accumulating sufficient tokens to pass malicious proposals. The 2022 Beanstalk exploit used a flash loan to acquire temporary governance supermajority and drain the treasury within a single transaction, highlighting the vulnerability of protocols without adequate voting delays.

- ### Relationships
  - uses:: [[Governance Token]]
  - uses:: [[On-Chain Voting]]
  - uses:: [[Smart Contract]]
  - uses:: [[Vote Escrow]]
  - uses:: [[Liquid Democracy]]
  - contrastsWith:: [[Quadratic Voting]]
  - contrastsWith:: [[Conviction Voting]]
  - contrastsWith:: [[One Person One Vote]]
  - contrastsWith:: [[Reputation-Based Voting]]
  - relatedTo:: [[DAO Governance]]
  - relatedTo:: [[Snapshot Voting]]
  - relatedTo:: [[DeFi Protocol]]
  - relatedTo:: [[Plutocracy]]
  - relatedTo:: [[Voter Turnout]]
  - relatedTo:: [[Governance Attack]]
  - requires:: [[ERC-20 Token]]
  - requires:: [[Quorum Threshold]]
  - requires:: [[Proposal Mechanism]]
  - enables:: [[Protocol Upgrade]]
  - enables:: [[Treasury Management]]
  - enables:: [[Parameter Governance]]
  - enables:: [[Decentralised Decision-Making]]
  - implements:: [[On-Chain Governance]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Token Economics]]
  - bridges-to:: [[Mechanism Design]]
  - bridges-to:: [[Social Choice Theory]]
  - bridges-to:: [[Sybil Resistance]]

- ### Standards and Context
  - **Governor Bravo** (Compound Finance): the canonical on-chain governance framework widely forked across DeFi. Defines proposal lifecycle, quorum, voting delay, voting period, and time-lock execution.
  - **OpenZeppelin Governor**: a modular, audited Solidity framework for on-chain governance that implements ERC-5805 (voting tokens) and ERC-6372 (clock mode) standards, enabling flexible quorum, vote counting, and time-lock configurations.
  - **ERC-5805** (Votable Token): standardises the interface for tokens that support vote delegation and checkpoint-based historical balance queries.
  - **ERC-20Votes**: an OpenZeppelin extension to [[ERC-20 Token]] that adds delegation and vote power tracking by block number, the foundational primitive for most ERC-5805 implementations.
  - **Snapshot** (off-chain governance): de-facto standard for gasless governance signalling, supporting multiple voting strategies (token balance, NFT ownership, staked balance, Merkle proofs).
  - **Tally** and **Boardroom**: governance analytics and participation platforms that aggregate on-chain governance data across protocols.
  - Research into governance mechanism design intersects with academic work in [[Social Choice Theory]], [[Mechanism Design]], and public economics. Key researchers include Glen Weyl (quadratic mechanisms) and groups at Ethereum Foundation and Optimism's Law of Chains working group.

- ### Provenance
  - sources:: Compound Governor Bravo documentation; OpenZeppelin Governor docs; Curve Finance veCRV design; Snapshot documentation; Vitalik Buterin "Moving beyond coin voting governance" (2021); Optimism Token House governance docs; Beanstalk post-mortem (2022)
  - updated:: 2026-06-13
