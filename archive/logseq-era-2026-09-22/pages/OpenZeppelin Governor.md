public:: true

# openzeppelin governor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7b80039802e0fd3b0924cf204ef08cef0146bfdf8064bbd7c7ec07f59ea45e31",
  "@type": "Page",
  "vc:slug": "open-zeppelin-governor",
  "title": "openzeppelin governor",
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
  "@id": "urn:ngm:class:open-zeppelin-governor",
  "@type": "Class",
  "label": "OpenZeppelin Governor",
  "definition": "OpenZeppelin Governor is a modular, security-audited Solidity smart-contract framework that provides the core infrastructure for deploying on-chain governance systems on EVM-compatible blockchains, succeeding the Compound Governor Bravo pattern. It implements a canonical proposal lifecycle — proposal creation, configurable voting delay, voting period, quorum validation, and timelock-guarded execution — with pluggable extension modules for vote-counting strategies (simple majority, Bravo-style, fractional), token-based voting-power sources (ERC-20 with EIP-5805 checkpointing or ERC-721), and TimelockController integration. The framework is maintained by the OpenZeppelin security team as part of OpenZeppelin Contracts, has undergone multiple third-party audits, and is adopted as the de facto governance standard by major decentralised autonomous organisations and DeFi protocols including Uniswap, ENS, and Compound.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      },
      {
        "@id": "urn:ngm:class:compound-governor-bravo",
        "label": "Compound Governor Bravo"
      }
    ],
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
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:timelock-controller",
        "label": "Timelock Controller"
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
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrades",
        "label": "Protocol Upgrade"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-virtual-machine",
        "label": "Ethereum Virtual Machine"
      },
      {
        "@id": "urn:ngm:class:vote-delegation",
        "label": "Vote Delegation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "OpenZeppelin Contracts"
      },
      {
        "@id": "urn:ngm:class:eip-5805",
        "label": "EIP-5805"
      },
      {
        "@id": "urn:ngm:class:eip-712",
        "label": "EIP-712"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      },
      {
        "@id": "urn:ngm:class:optimistic-governance",
        "label": "Optimistic Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum Fraction"
      },
      {
        "@id": "urn:ngm:class:snapshot-voting",
        "label": "Snapshot Voting"
      },
      {
        "@id": "urn:ngm:class:token-weighted-voting",
        "label": "Token-Weighted Voting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:collective-intelligence",
        "label": "Collective Intelligence"
      },
      {
        "@id": "urn:ngm:class:liquid-democracy",
        "label": "Liquid Democracy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:oz-governor",
      "label": "OZ Governor"
    },
    {
      "@id": "urn:ngm:class:governor-contracts",
      "label": "Governor Contracts"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - OpenZeppelin Governor is a modular, security-audited [[Solidity]] [[Smart Contract]] framework that provides the core infrastructure for deploying [[On-chain Governance]] systems on EVM-compatible blockchains. Developed by the [[OpenZeppelin]] security team as part of [[OpenZeppelin Contracts]], it implements a canonical governance proposal lifecycle — creation, voting delay, voting period, quorum check, and [[TimelockController]]-guarded execution — with pluggable extension modules for vote-counting strategies, token-based voting power (via [[EIP-5805]] checkpointing on [[ERC-20]] or [[ERC-721]] tokens), and timelock integration. It succeeded the [[Compound Governor Bravo]] pattern and has become the de facto standard governance framework adopted by major [[Decentralised Autonomous Organisation]] communities and [[DeFi Protocol]] ecosystems.

- ### Overview
  - OpenZeppelin Governor addresses the challenge of trustless, transparent, and configurable on-chain protocol governance by providing an opinionated yet extensible framework for decentralised decision-making.
  - **Why it matters**: Before standardised governance frameworks, every protocol built bespoke governance, leading to security vulnerabilities and inconsistent UX. Governor standardises the proposal lifecycle, enabling audited, battle-tested governance across the ecosystem.
  - **Core design philosophy**:
    - Abstract base contract (`Governor.sol`) defines the proposal lifecycle and enforces invariants.
    - Extension modules are mixed in via Solidity multiple inheritance, providing composability without forking core logic.
    - All configurable parameters (voting delay, voting period, quorum, proposal threshold) are overridable by child contracts.
  - **Ecosystem position**: OpenZeppelin Governor is part of the broader [[OpenZeppelin Contracts]] library, which is the most widely used open-source smart contract library in the Ethereum ecosystem. Governor builds on security primitives like [[EIP-712]] typed structured data for gasless vote signatures (castVoteBySig).
  - **Relation to Compound Bravo**: Governor was designed as a generalisation of [[Compound Governor Bravo]], abstracting away Compound-specific token and counting logic into swappable modules.

- ### Key Components
  - #### Core Contract — Governor.sol
    - Abstract base that manages proposal IDs, state machine, voting periods, and execution logic.
    - Defines the `IGovernor` interface implemented by all Governor variants.
    - Emits standardised events: `ProposalCreated`, `VoteCast`, `ProposalExecuted`, `ProposalCanceled`.
  - #### Proposal Lifecycle
    - **Pending**: Proposal created; voting delay countdown begins. Token holders may delegate votes during this phase.
    - **Active**: Voting period is open. Holders call `castVote(proposalId, support)` where support is 0 (Against), 1 (For), 2 (Abstain).
    - **Succeeded / Defeated**: Voting period ends; quorum and majority thresholds evaluated.
    - **Queued**: Successful proposals are queued in [[TimelockController]] for a mandatory delay before execution.
    - **Executed**: Any caller may execute after the timelock delay.
    - **Canceled**: Proposer or guardian may cancel before execution.
  - #### Voting Power Modules
    - `GovernorVotes`: Wires up an `IVotes`-compatible token ([[ERC-20Votes]] or [[ERC-721Votes]]) using [[EIP-5805]] checkpointing to snapshot voting power at proposal creation block.
    - `GovernorVotesQuorumFraction`: Computes quorum as a fraction of total token supply at snapshot block.
    - Vote delegation is essential: tokens must be self-delegated or delegated to another address to activate voting power.
  - #### Vote Counting Modules
    - `GovernorCountingSimple`: Majority counting — For > Against wins if quorum is reached.
    - `GovernorCountingBravo` (community extension): Matches Compound Bravo behaviour exactly.
    - `GovernorCountingFractional` (ERC-5805 extension): Allows splitting a single wallet's votes across For/Against/Abstain (useful for [[Multisig Wallet]] or [[DeFi Protocol]] treasuries acting as voters).
  - #### Timelock Integration
    - `GovernorTimelockControl`: Integrates [[TimelockController]] — a separate contract that holds assets and enforces a mandatory delay between proposal queuing and execution. Ensures token holders have time to exit positions before contentious changes execute.
    - `GovernorTimelockCompound`: Alternative integration for protocols using Compound's native Timelock contract, maintaining backward compatibility.
  - #### Signature-Based Voting
    - `castVoteBySig()` / `castVoteWithReasonAndParamsBySig()`: Allow voters to sign votes off-chain (using [[EIP-712]]) and have a relayer submit them, removing gas costs for voters and enabling [[Meta-Transaction]] patterns.
  - #### Upgradeable Variants
    - All Governor modules have `*Upgradeable` counterparts compatible with [[Upgradeable Proxy]] patterns (UUPS, TransparentUpgradeableProxy) from `@openzeppelin/contracts-upgradeable`.
    - Enables post-deployment changes to governance parameters via governance proposals themselves (bootstrapping governance).

- ### Mechanisms
  - #### Proposal Threshold
    - The minimum voting power required to create a proposal. Prevents spam proposals from addresses with negligible stake.
    - Configurable; often set to 1% of total supply or a fixed token amount.
  - #### Voting Delay and Period
    - **Voting delay**: Number of blocks (or seconds in v4.9+ timestamp mode) between proposal creation and vote opening. Allows holders to arrange delegations.
    - **Voting period**: Duration of the active voting window. Typical values range from 2 days to 1 week in block time.
  - #### Quorum
    - Minimum total votes (For + Abstain, depending on counting module) required for a proposal to be eligible to pass.
    - `GovernorVotesQuorumFraction` calculates quorum as a percentage of circulating supply at snapshot block, making it supply-aware.
  - #### Clock Mode (EIP-6372)
    - Governor v4.9+ supports [[EIP-6372]] clock mode, allowing governance parameters to be measured in timestamps rather than block numbers — critical for L2 chains with variable block rates.
  - #### Access Control Integration
    - `GovernorAccessControl` extensions allow fine-grained permission control using [[OpenZeppelin AccessControl]] roles (e.g. PROPOSER_ROLE, EXECUTOR_ROLE on the TimelockController).

- ### Applications / Use Cases
  - #### DeFi Protocol Governance
    - **Uniswap Governance**: UNI token holders vote on protocol fee switches, grant allocations, and contract deployments. Uniswap's governance uses a Governor-based system.
    - **ENS DAO**: The Ethereum Name Service uses Governor for protocol treasury decisions, ENSIP ratification, and working group funding.
    - **Compound**: The original Governor Bravo has largely been supplemented by OpenZeppelin Governor in newer Compound-ecosystem forks.
  - #### Treasury Management
    - Governor proposals can encode arbitrary calldata, including ERC-20 transfers from a DAO treasury, enabling trustless [[Treasury Management]] without a multisig intermediary.
  - #### Protocol Upgrades
    - Proposals can call `upgradeTo()` on [[Upgradeable Proxy]] contracts, making Governor the sole authorised upgrade path. This eliminates centralised admin keys post-launch.
  - #### Parameter Tuning
    - Protocol parameters (e.g., interest rate models, fee tiers, oracle addresses) can be updated via Governor proposals, enforcing community approval for configuration changes.
  - #### Cross-Chain Governance
    - Governor can be combined with cross-chain message bridges to propagate execution of passed proposals to L2 deployments or other chains, enabling unified governance across multi-chain protocols.
  - #### Grant Programmes
    - DAOs like Gitcoin and Protocol Guild use Governor-based governance to allocate grant funding from community treasuries via transparent, auditable proposals.

- ### Relationships
  - implements:: [[On-chain Governance]]
  - implements:: [[Compound Governor Bravo]]
  - uses:: [[Smart Contract]]
  - uses:: [[Governance Token]]
  - uses:: [[ERC-20]]
  - uses:: [[ERC-721]]
  - uses:: [[TimelockController]]
  - enables:: [[DAO Governance]]
  - enables:: [[Voting Mechanism]]
  - enables:: [[Treasury Management]]
  - enables:: [[Protocol Upgrade]]
  - requires:: [[Solidity]]
  - requires:: [[Ethereum Virtual Machine]]
  - requires:: [[Vote Delegation]]
  - dependsOn:: [[OpenZeppelin Contracts]]
  - dependsOn:: [[EIP-5805]]
  - dependsOn:: [[EIP-712]]
  - supports:: [[Decentralised Autonomous Organisation]]
  - supports:: [[DeFi Protocol]]
  - supports:: [[Upgradeable Proxy]]
  - contrastsWith:: [[Multisig Wallet]]
  - contrastsWith:: [[Optimistic Governance]]
  - relatedTo:: [[Quorum Fraction]]
  - relatedTo:: [[Snapshot Voting]]
  - relatedTo:: [[Token-Weighted Voting]]
  - bridges-to:: [[Collective Intelligence]]
  - bridges-to:: [[Liquid Democracy]]

- ### Standards & Context
  - #### Ethereum Improvement Proposals Referenced
    - [[EIP-5805]] (formerly ERC-5805): Defines the `IVotes` interface for vote-power checkpointing, the core primitive that Governor uses to snapshot voting power at proposal creation.
    - [[EIP-712]]: Typed structured data signing used for `castVoteBySig` — enables gasless voting via off-chain signatures relayed on-chain.
    - [[EIP-6372]]: Clock mode standard allowing contracts to declare whether they use block numbers or timestamps, enabling consistent cross-chain governance timing.
  - #### Security Audits and Practices
    - OpenZeppelin Contracts is audited by Trail of Bits, Sigma Prime, and other leading security firms. Governor-specific modules undergo dedicated security review before each major release.
    - The modular inheritance design isolates extension-specific bugs from the core proposal lifecycle, limiting attack surface.
    - Common attack vectors mitigated: flash-loan governance attacks (EIP-5805 checkpointing at snapshot block prevents flash-loan-based vote manipulation), front-running (voting delay), and admin key capture (TimelockController).
  - #### OpenZeppelin Contracts Versioning
    - Governor was introduced in OpenZeppelin Contracts v4.3 (2021). Significant enhancements in v4.5 (fractional counting), v4.9 (timestamp-based clocks, EIP-6372), and v5.0 (namespace storage, Solidity 0.8.20+ compatibility).
    - The v5.0 release introduced breaking changes to storage layout, requiring careful migration for existing on-chain deployments.
  - #### Comparison with Off-Chain Voting
    - [[Snapshot Voting]] (off-chain, gasless) is often used for signal polls and temperature checks before binding on-chain Governor proposals, forming a complementary governance layer.
    - On-chain Governor proposals carry execution authority; off-chain snapshots carry social legitimacy.
  - #### Relation to Legal DAOs
    - Some jurisdictions (Wyoming, Marshall Islands) recognise DAO LLCs where Governor-based on-chain voting constitutes legally binding decisions, bridging [[Smart Contract]] execution with formal legal frameworks.

- ### Provenance
  - sources:: OpenZeppelin Contracts documentation (docs.openzeppelin.com/contracts), Ethereum EIPs (eips.ethereum.org), Uniswap/ENS governance forum posts
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
