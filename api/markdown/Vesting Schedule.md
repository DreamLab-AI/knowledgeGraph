public:: true

# Vesting Schedule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f4e6ce0752f742a96aa082b79b8491f88c051875502a00dbe450482bfeef8974",
  "@type": "Page",
  "vc:slug": "vesting-schedule",
  "title": "Vesting Schedule",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:tokenomics-governance",
      "vc:label": "Tokenomics Governance"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vesting Schedule"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vesting-schedule",
  "@type": "Class",
  "label": "Vesting Schedule",
  "definition": "A vesting schedule is a contractually or programmatically enforced timetable that releases allocated digital assets or equity to recipients incrementally over a defined period, typically beginning after an initial cliff during which no release occurs. In blockchain and token-based systems, schedules are commonly encoded in smart contracts that autonomously unlock portions of a token allocation at fixed intervals or milestones, aligning the long-term incentives of founders, contributors, and investors with project health. The schedule's parameters — cliff length, total duration, release cadence, and revocation conditions — are a principal instrument of tokenomics design and governance risk management.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:token-lock-up",
      "label": "Token Lock-Up"
    },
    {
      "@id": "urn:ngm:class:cliff-vesting",
      "label": "Cliff Vesting"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:incentive-alignment",
        "label": "Incentive Alignment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:time-lock",
        "label": "Time Lock"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:escrow-system",
        "label": "Escrow"
      },
      {
        "@id": "urn:ngm:class:multisig-wallet",
        "label": "Multisig Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:dao",
        "label": "DAO"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:airdrop",
        "label": "Airdrop"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics-governance",
        "label": "Tokenomics Governance"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:defi-protocol",
        "label": "DeFi Protocol"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:vesting-schedule:fec2a654b722",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f4e6ce0752f742a96aa082b79b8491f88c051875502a00dbe450482bfeef8974"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenomics Governance]]",
      "resolved": "urn:visionflow:linked:tokenomics-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **vesting schedule** is a programmatic or contractual mechanism that releases allocated [[Token]] holdings (or equity) to designated recipients incrementally over a predetermined period, rather than in a single lump sum. Schedules typically begin with a [[Cliff Period]] during which no tokens are released, after which distributions occur at regular intervals until the full allocation has vested. Within [[Blockchain]] ecosystems, the schedule is most commonly enforced by a [[Smart Contract]] that holds the tokens in [[Escrow]] and autonomously releases tranches according to the encoded timetable, making the rules transparent and tamper-resistant. The design of a vesting schedule is a core component of [[Tokenomics]] and directly shapes long-term [[Incentive Alignment]] between project contributors and the broader community.

- ### Overview
  - Vesting schedules originate in traditional corporate equity compensation, where employees receive stock options or restricted stock units that unlock over time, typically contingent on continued employment. The same logic was adopted by the [[Blockchain]] industry to manage how [[Token Allocation]] flows to founders, core teams, early investors, and advisors.
  - The primary rationale is **commitment signalling**: locking tokens over time demonstrates that insiders cannot immediately dump their holdings on secondary markets, protecting the [[Supply Schedule]] and reducing sell pressure. Vesting schedules also act as a retention mechanism — a team member who resigns early forfeits unvested tokens, aligning individual incentives with project longevity.
  - Schedules are usually disclosed in a project's whitepaper or [[Tokenomics Governance]] documentation, audited by third parties, and enforced on-chain via a [[Smart Contract]]. The parameters chosen — cliff, duration, cadence, and revocation — are key inputs to [[Treasury Management]] modelling and are scrutinised by investors and [[DAO]] participants before committing capital.

- ### Key Components
  - #### Cliff Period
    - The initial locked window, commonly 6–12 months, during which zero tokens are released.
    - Serves as a minimum commitment threshold; if a recipient leaves before the cliff, they vest nothing.
    - See: [[Cliff Period]], [[Time Lock]]
  - #### Linear Release
    - After the cliff, tokens are released at a fixed rate — monthly, quarterly, or per block — across the remaining vesting duration.
    - Common total durations range from 2 to 4 years in practice.
    - See: [[Release Interval]], [[Supply Schedule]]
  - #### Milestone-Based Vesting
    - An alternative or supplement to time-based vesting in which tranches unlock upon achievement of defined project milestones (product launches, TVL targets, governance votes).
    - Requires an oracle or governance mechanism to verify the milestone on-chain.
    - See: [[Smart Contract]], [[Blockchain Oracle]]
  - #### Revocation Clause
    - Conditions under which unvested tokens revert to a treasury or are burned, typically on departure, misconduct, or failure to meet milestones.
    - See: [[Revocation Clause]], [[Treasury Management]]
  - #### Acceleration Clause
    - Provisions that accelerate the full vesting in certain events, such as a project acquisition or token migration.
    - Analogous to double-trigger acceleration in traditional equity.
  - #### Beneficiary Types
    - **Founders & Core Team**: longest vesting horizons, steepest cliffs.
    - **Investors (seed/private)**: often shorter cliffs but lock-up periods mandated by securities regulators.
    - **Advisors**: lighter tranches, shorter durations.
    - **Ecosystem/Community Funds**: may vest over multi-year schedules to fund grants or [[DAO]] operations.
    - See: [[Token Distribution]], [[Governance Token]]

- ### Mechanisms
  - #### On-Chain Enforcement via Smart Contracts
    - The beneficiary's address is registered in the [[Smart Contract]] at deployment with the full allocation and schedule parameters encoded.
    - On each release date (or block height), the contract computes the unlocked amount and transfers it to the beneficiary on claim, or auto-transfers depending on design.
    - Contracts are typically verified on-chain (e.g. Etherscan, BscScan) and may use [[Multisig Wallet]] admin keys for emergency pause or parameter changes.
    - See: [[Smart Contract]], [[Escrow]], [[Blockchain]]
  - #### ERC-20 and Token Standard Compatibility
    - Most vesting contracts in the Ethereum ecosystem hold ERC-20 tokens in trust, releasing them to the beneficiary's [[Wallet]] address as per the schedule.
    - See: [[Token Standard]], [[Token]]
  - #### Vesting in DeFi
    - [[DeFi Protocol]] liquidity mining and yield farming programmes often incorporate vesting on emitted tokens to smooth out sell pressure.
    - Protocol-owned liquidity strategies may vest LP rewards over weeks or months to incentivise sustained participation.
    - See: [[DeFi Protocol]], [[Liquidity Mining]], [[Staking]]
  - #### NFT and Non-Fungible Asset Vesting
    - Emerging patterns apply vesting to non-fungible assets such as [[NFT]] access keys or membership tokens, unlocking utility progressively.

- ### Applications and Use Cases
  - #### Team and Founder Compensation
    - The most common use: core contributors receive a portion of the project's [[Token Allocation]] that unlocks over 3–4 years with a 1-year cliff, mirroring standard startup equity practice.
  - #### Investor and Private Sale Lock-Ups
    - Early-stage investors in token sales (SAFTs) agree to vesting/lock-up schedules to prevent immediate secondary market sales after exchange listing.
    - Regulatory pressure from bodies such as the SEC and FCA has reinforced the need for documented, verifiable lock-up schedules.
    - See: [[Initial Coin Offering]], [[Regulatory Compliance]]
  - #### Ecosystem and Grant Funds
    - Blockchain foundations distribute grants to developers and ecosystem projects with milestone-gated or time-based vesting to ensure deliverable completion.
    - See: [[DAO]], [[Treasury Management]]
  - #### Protocol Emission Schedules
    - Layer-1 and Layer-2 protocols govern native token inflation through a published emission schedule — a macro-level vesting schedule for the entire network.
    - See: [[Supply Schedule]], [[Tokenomics]]
  - #### Play-to-Earn and GameFi Rewards
    - GameFi protocols vest in-game token rewards to prevent rapid extraction and destabilisation of in-game economies.
  - #### Employee Stock Option Analogues
    - Web3 companies and DAOs increasingly mirror traditional employment benefits by issuing token options with vesting schedules, bridging blockchain practice with conventional HR frameworks.
    - See: [[Equity Vesting]], [[Incentive Alignment]]

- ### Relationships
  - partOf:: [[Tokenomics]]
  - hasPart:: [[Cliff Period]], [[Release Interval]], [[Revocation Clause]]
  - requires:: [[Smart Contract]], [[Token Allocation]]
  - enables:: [[Incentive Alignment]], [[Supply Schedule]]
  - dependsOn:: [[Blockchain]], [[Time Lock]]
  - implements:: [[Token]]
  - uses:: [[Escrow]], [[Multisig Wallet]]
  - supports:: [[Governance Token]], [[DAO]]
  - contrastsWith:: [[Airdrop]], [[Immediate Token Release]]
  - relatedTo:: [[Tokenomics Governance]], [[Initial Coin Offering]], [[Staking]], [[Treasury Management]]
  - bridges-to:: [[Equity Vesting]], [[DeFi Protocol]]

- ### Standards and Context
  - No single global standard governs vesting schedule implementation; common patterns are documented in EIP discussions and project whitepapers.
  - OpenZeppelin's `VestingWallet` contract (Solidity library) provides a widely audited reference implementation for ERC-20 token vesting on the EVM.
  - Securities regulators (SEC, FCA, MAS) treat investor lock-up periods as material terms in token offering documents, placing disclosure obligations on issuers.
  - SAFT (Simple Agreement for Future Tokens) frameworks commonly incorporate vesting terms as contractual obligations preceding on-chain enforcement.
  - See: [[Smart Contract]], [[Regulatory Compliance]], [[Token Standard]]

- ### Semantic Classification
  - owl-class:: blockchain:VestingSchedule
  - owl-role:: Class
  - subClassOf:: [[Token Distribution]]

- ### Provenance
  - sources:: OpenZeppelin Contracts documentation; EIP discussions; SAFT framework literature; general blockchain tokenomics practice
  - updated:: 2026-06-13
