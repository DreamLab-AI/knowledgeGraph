public:: true

# on-chain governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:88d4b18dd735b70a76b50b496be3e06a667a229f22ee32660f7bed5727816a88",
  "@type": "Page",
  "vc:slug": "on-chain-governance",
  "title": "on-chain governance",
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
  "@id": "urn:ngm:class:on-chain-governance",
  "@type": "Class",
  "label": "On-chain Governance",
  "definition": "On-chain governance is a blockchain coordination model in which protocol upgrade proposals, parameter changes, and treasury spending decisions are formally submitted, deliberated, voted on by token holders, and automatically enacted through the execution of smart contracts recorded on the distributed ledger. Governance logic is codified directly in the protocol layer, making all votes, quorum checks, and execution outcomes immutable, censorship-resistant, and publicly auditable on-chain records. It contrasts with off-chain governance, where decisions emerge from social consensus (forums, developer meetings, improvement-proposal repositories) and are implemented by core developers without cryptographic enforcement, creating reliance on trust in key actors.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:timelock-controller",
        "label": "Timelock Controller"
      },
      {
        "@id": "urn:ngm:class:vote-delegation",
        "label": "Vote Delegation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrades",
        "label": "Protocol Upgrade"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:parameter-governance",
        "label": "Parameter Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:voting-power",
        "label": "Voting Power"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:off-chain-governance",
        "label": "Off-chain Governance"
      },
      {
        "@id": "urn:ngm:class:plutocracy",
        "label": "Plutocracy"
      },
      {
        "@id": "urn:ngm:class:centralised-governance",
        "label": "Centralised Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:open-zeppelin-governor",
        "label": "OpenZeppelin Governor"
      },
      {
        "@id": "urn:ngm:class:proposal-system",
        "label": "Proposal System"
      },
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
      },
      {
        "@id": "urn:ngm:class:conviction-voting",
        "label": "Conviction Voting"
      },
      {
        "@id": "urn:ngm:class:tezos",
        "label": "Tezos"
      },
      {
        "@id": "urn:ngm:class:polkadot",
        "label": "Polkadot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:collective-intelligence",
        "label": "Collective Intelligence"
      },
      {
        "@id": "urn:ngm:class:multi-stakeholder-governance",
        "label": "Multi-stakeholder Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:protocol-governance",
      "label": "Protocol Governance"
    },
    {
      "@id": "urn:ngm:class:blockchain-governance",
      "label": "Blockchain Governance"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - On-chain governance is a [[Blockchain]] coordination model where protocol upgrade proposals, parameter changes, and [[Treasury Management]] spending decisions are formally submitted on a [[Distributed Ledger]], voted on by [[Governance Token]] holders, and automatically enacted through [[Smart Contract]] execution. All governance steps — proposal submission, deliberation, voting, quorum checks, and execution — are recorded immutably on-chain, making the process transparent and censorship-resistant. This mechanism contrasts with [[Off-chain Governance]], where decisions emerge from social consensus in forums or developer mailing lists and rely on trusted parties for implementation.

- ### Overview
  - On-chain governance emerged as blockchain networks matured beyond simple value transfer and needed coordinated mechanisms to evolve protocol rules without centralised authority. The core problem it addresses is the **governance coordination problem**: how can a permissionless, globally distributed network of token holders agree on and enact changes to shared infrastructure while preserving decentralisation?
  - Unlike traditional corporate governance or nation-state legislation, on-chain governance encodes voting rules, quorum thresholds, and execution logic directly in [[Smart Contract]] code. This means no single entity can unilaterally block or enact a protocol change; the outcome is determined by the on-chain vote result alone.
  - The significance of on-chain governance extends beyond individual protocols. It represents a new primitive in the design of [[Decentralised Autonomous Organisation]] structures, and its mechanisms inform broader debates in [[Collective Intelligence]], [[Mechanism Design]], and [[Digital Democracy]].

- ### Key Mechanisms
  - #### Proposal Lifecycle
    - **Proposal Submission**: An eligible address — typically requiring a minimum [[Governance Token]] balance or delegated [[Voting Power]] — submits a governance proposal specifying calldata targeting one or more contract addresses. The proposal encodes the exact on-chain action to execute if approved.
    - **Voting Delay**: A configurable delay period between proposal submission and vote start, during which token holders can adjust [[Vote Delegation]] to better reflect their preferences before the snapshot block is taken.
    - **Voting Period**: Token holders or their delegates cast on-chain votes (For, Against, Abstain) during the active voting window. The snapshot of token balances at the start of voting determines each address's [[Voting Power]].
    - **Quorum Requirement**: A minimum total voting weight must participate for the result to be valid. [[Quorum]] thresholds guard against low-participation attacks where a small minority enacts changes during apathy periods.
    - **Timelock Queue**: Successful proposals enter a [[Timelock Controller]] queue before execution. This mandatory delay (often 48–72 hours) provides an exit window for dissenting parties to withdraw assets from the protocol if they disagree with the outcome.
    - **Autonomous Execution**: After the timelock expires, any address may trigger permissionless execution of the approved calldata. The [[Smart Contract]] enforces the outcome without requiring any trusted party to act.

  - #### Voting Power Models
    - **Token-weighted voting**: The dominant model — one token equals one vote. Simple but subject to plutocratic capture where large holders (whales) dominate outcomes.
    - **[[Quadratic Voting]]**: The cost of votes grows quadratically, reducing the marginal influence of large holders and giving more weight to broad participation over concentrated capital.
    - **[[Conviction Voting]]**: Voting power accrues continuously over time the longer a voter supports a proposal, rewarding commitment and penalising last-minute whale interventions.
    - **[[Vote Delegation]]**: Passive token holders assign their voting weight to active, knowledgeable delegates who participate on their behalf. Used extensively in Compound, Uniswap, and ENS governance.
    - **Quadratic Funding**: Related to on-chain governance for treasury allocation — individual contribution amounts are matched using quadratic formulas to amplify broad community preference.

  - #### Governance Frameworks
    - **[[OpenZeppelin Governor]]**: The dominant EVM-compatible framework, used by Uniswap, Compound, Gitcoin, and many others. Modular architecture allows customisation of voting delay, voting period, quorum, and execution logic.
    - **Compound Governor Bravo**: An earlier influential implementation that established the proposal/voting/timelock pattern adopted widely across DeFi.
    - **[[Tezos]] Self-Amendment**: Layer-1 protocol upgrade via on-chain baker votes, allowing network-level rule changes without hard forks.
    - **[[Polkadot]] OpenGov**: A bicameral-style system with a public referendum track and a Fellowship of protocol experts, each with different privilege levels for different proposal categories.
    - **[[Cosmos Governance]]**: On-chain governance module built into the Cosmos SDK, enabling parameter changes, software upgrades, and community pool spend proposals on any Cosmos chain.

- ### Applications and Use Cases
  - #### Decentralised Finance (DeFi) Protocol Governance
    - DeFi protocols such as Uniswap, Aave, Compound, and MakerDAO use on-chain governance to manage interest rate parameters, add new asset collateral types, adjust protocol fees, and approve grants from protocol treasuries. These decisions collectively control billions of dollars in protocol-managed assets.
    - Example: Uniswap governance controls the fee switch mechanism, cross-chain deployments, and protocol grants — all enacted via the OpenZeppelin Governor pattern with UNI token holder votes.

  - #### Layer-1 Protocol Upgrades
    - [[Tezos]] pioneered self-amending ledger governance, allowing bakers (validators) to propose and vote on protocol amendments that activate automatically if approved, eliminating contentious hard forks.
    - [[Polkadot]] uses referenda, the Council, and the Technical Committee to manage runtime upgrades, treasury spending, and emergency interventions without requiring coordinated node operator upgrades.
    - [[Cosmos Governance]] enables sovereign appchains built on the Cosmos SDK to govern their own parameter sets and chain upgrades through the native `x/gov` module.

  - #### DAO Treasury Management
    - [[Decentralised Autonomous Organisation]] treasuries — sometimes holding substantial value in protocol tokens and stablecoins — are governed entirely on-chain. Proposals for grants, contributor payments, ecosystem fund allocations, and investment decisions are submitted, voted on, and executed via governance contracts.
    - Nouns DAO and Gitcoin are notable examples of DAOs using daily auction mechanics and on-chain proposals to fund public goods.

  - #### Metagovernance
    - Protocols that hold governance tokens of other protocols can exercise metagovernance — voting in other protocols' governance systems on behalf of their own stakeholders. This creates nested governance dynamics and potential for coordination or capture across the DeFi ecosystem.

- ### Challenges and Limitations
  - **Voter Apathy**: Participation rates in on-chain governance are typically low, concentrating effective decision-making power among a small number of active delegates or large holders.
  - **Plutocracy Risk**: Token-weighted voting inherently advantages wealthy participants. Mechanisms like [[Quadratic Voting]] and reputation-based weighting partially mitigate this but introduce their own complexity.
  - **Governance Attacks**: Malicious actors can accumulate governance tokens (via flash loans or market purchases) and pass harmful proposals. Timelocks, guardian multisigs, and vote delegation help defend against such attacks.
  - **Technical Complexity**: Governance proposals often require deep protocol knowledge to evaluate. Uninformed voting or delegation to poorly-incentivised delegates can produce suboptimal outcomes.
  - **Speed vs. Decentralisation Trade-off**: On-chain governance processes are inherently slow (days to weeks per proposal cycle) compared to centralised decision-making, creating tension in fast-moving markets.
  - **Constitutional Ossification**: Once governance is fully on-chain, changing the governance rules themselves requires governing the governance — a meta-level problem that can make governance systems brittle over time.

- ### Relationships
  - uses:: [[Smart Contract]]
  - uses:: [[Governance Token]]
  - uses:: [[Timelock Controller]]
  - uses:: [[Vote Delegation]]
  - enables:: [[DAO Governance]]
  - enables:: [[Voting Mechanism]]
  - enables:: [[Protocol Upgrade]]
  - enables:: [[Treasury Management]]
  - enables:: [[Parameter Governance]]
  - requires:: [[Distributed Ledger]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Quorum]]
  - dependsOn:: [[Token Economics]]
  - dependsOn:: [[Voting Power]]
  - implements:: [[Decentralised Autonomous Organisation]]
  - contrastsWith:: [[Off-chain Governance]]
  - contrastsWith:: [[Centralised Governance]]
  - relatedTo:: [[OpenZeppelin Governor]]
  - relatedTo:: [[Proposal System]]
  - relatedTo:: [[Quadratic Voting]]
  - relatedTo:: [[Conviction Voting]]
  - relatedTo:: [[Tezos]]
  - relatedTo:: [[Polkadot]]
  - relatedTo:: [[Cosmos Governance]]
  - bridges-to:: [[Mechanism Design]]
  - bridges-to:: [[Collective Intelligence]]
  - bridges-to:: [[Multi-stakeholder Governance]]

- ### Standards and Context
  - On-chain governance lacks a unified standards body; best practices are established empirically across deployed protocols and documented by frameworks such as [[OpenZeppelin Governor]].
  - The **ERC-20** and **ERC-721** token standards underpin the governance token infrastructure; [[Smart Contract]] auditing standards (OpenZeppelin, Trail of Bits) are applied to governance contracts given their high-value attack surface.
  - Academic frameworks from **[[Mechanism Design]]** (Vickrey-Clarke-Groves, Shapley values) and political science (liquid democracy, deliberative democracy) inform the design of on-chain voting variants.
  - Regulatory attention is increasing: the US CFTC and SEC have both examined whether [[Governance Token]] holders of DeFi protocols bear liability as control-persons under financial regulation. The EU's MiCA regulation touches on DAO governance structures.
  - [[Polkadot]]'s OpenGov (2023) represents a significant evolution — multi-track governance with differentiated privilege levels is becoming an influential design pattern for future L1 governance systems.

- ### Current Landscape (2026)
  - Legal recognition of on-chain governance has matured: Wyoming's Decentralised Unincorporated Nonprofit Association (DUNA) Act took effect on 1 July 2024, letting a DAO's governing principles embed token votes and smart-contract proposals as legally binding while preserving limited liability, and requiring at least 100 members; the EU's MiCA regime became fully applicable on 30 December 2024, and in 2026 UNCITRAL advanced a model-law text formalising Council-plus-token-holder governance.
  - Pure token-weighted voting is being displaced by hybrid and delegate-based models: by 2026 Uniswap, Optimism, Arbitrum and Aave route most voting power through roughly 30-100 professional delegates, and structures such as Optimism's Token House plus Citizens House and Arbitrum's Security Council reserve on-chain votes for council elections and major parameter or upgrade decisions.
  - Protocol-layer governance shipped concrete upgrades: Solana's Alpenglow consensus redesign was approved by validator governance in September 2025 (introducing the Votor voting component and removing on-chain vote transactions), and Aave's DAO backed the V4 mainnet path in a near-unanimous Snapshot vote (over 645,000 votes in favour) in early 2026 ahead of a formal on-chain AIP.
  - AI-assisted governance moved from experiment to standard practice, with MakerDAO developing Governance AI Tools (GAITs) for proposal summarisation and outcome simulation as part of its Endgame plan, NEAR building the Pulse sentiment tool and AI delegates, and Aave deploying AI-assisted proposal analysis.
  - Governance is being streamlined to fight fatigue: on 27 July 2026 Lido shipped its Curated Module v2 upgrade, delegating routine administrative actions (previously requiring a full on-chain vote) to operators and a Curated Module Committee while the DAO retains key parameters and a veto right.
  - Participation and centralisation remain the core unsolved problems: turnout among decision-makers hovers around 20% (often nearer 10%), academic analysis of 370+ proposals found as few as three to five voters could sway most outcomes with roughly 1% of holders controlling 90% of voting power, and cases of frozen or paused governance (for example Jupiter suspending governance votes) multiplied through 2026.
  - Emerging frontiers include ZK-based private voting, gasless proposals via account abstraction, reputation- and expertise-weighted voting, and cross-chain DAO coordination over IBC-style messaging, alongside optimistic governance where proposals execute by default after a challenge window.

- ### References
  - 1. daotimes.com (2025). DAO Regulation News 2025: Wyoming DUNA, EU MiCA, FATF Requirements. https://daotimes.com/dao-regulation-news/
  - 2. Astraea Law (2026). DAO LLC Formation Guide: Step-by-Step Wyoming DUNA. https://astraea.law/insights/dao-llc-formation-wyoming-duna-guide-2025
  - 3. Cointelegraph Magazine (2026). The Biggest Blockchain Upgrades Still to Come in 2026. https://cointelegraph.com/magazine/the-biggest-blockchain-upgrades-still-to-come-in-2026
  - 4. Crypto University Network (2026). AI Meets DAOs: How Artificial Intelligence Is Changing On-Chain Governance in 2026. https://cryptouniversity.network/guides/ai-meets-daos-how-artificial-intelligence-is-changing-on-chain-governance-in-2026
  - 5. TechBullion (2026). DAO Governance Models in America in 2026: How On-Chain Voting Has Actually Performed. https://techbullion.com/dao-governance-models-in-america-in-2026-how-on-chain-voting-has-actually-performed/
  - 6. ForkLog (2026). Lido launches biggest protocol upgrade since V2. https://forklog.com/en/lido-launches-biggest-protocol-upgrade-since-v2/

- ### Provenance
  - sources:: OpenZeppelin Governor documentation; Polkadot Wiki OpenGov; Tezos self-amendment specification; Compound Governor Bravo; Uniswap governance forum
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
