public:: true

# Aave Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aave-governance",
  "@type": "Page",
  "vc:slug": "aave-governance",
  "title": "Aave Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:aave-governance",
  "@type": "Class",
  "label": "Aave Governance",
  "definition": "Aave Governance is the on-chain decision-making system for the Aave decentralised lending protocol, enabling AAVE token holders and protocol delegates to propose, debate, and vote on parameter changes, new asset listings, risk adjustments, and smart contract upgrades. It operates through a tiered proposal mechanism where quorum and voting-power thresholds determine whether a proposal proceeds to execution, with all outcomes enforced autonomously by smart contracts on Ethereum and affiliated networks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:collateral-management", "label": "Collateral Management"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:aave", "label": "Aave"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Aave Governance is the [[On-chain Governance]] framework that allows holders of the [[Governance Token]] AAVE to steer the development and risk parameters of the [[Aave]] decentralised lending protocol. Proposals move through a lifecycle of creation, community deliberation, and on-chain voting before autonomous execution via [[Smart Contract]], removing the need for a centralised development team to act as gatekeeper.

- ### Relationships
  - Aave Governance is a specialisation of [[On-chain Governance]] and relies on the [[Voting Mechanism]] built into the AAVE token system. It directly enables safer, community-directed [[Decentralised Finance]] and rigorous [[Collateral Management]] by allowing the community to adjust risk parameters. It is grounded in [[Smart Contract]] execution on [[Aave]] infrastructure and is contextually related to broader [[DAO Governance]] practice and [[Token Economics]] design.

- ### Content
  - Aave launched as ETHLend in 2017, rebranding to Aave in 2020 alongside the introduction of its V2 protocol and the AAVE governance token, which replaced the original LEND token via migration. The shift marked a deliberate move from founder-controlled upgrades to community sovereignty, with the Aave Companies retaining only a development role rather than an administrative one. Early governance proposals focused on adding new collateral assets and adjusting loan-to-value ratios.

  - The governance architecture uses a dual-token model—AAVE for long-term staking and voting, and stkAAVE (staked AAVE) for safety module participation. Proposals require a minimum proposition power threshold and pass only if a quorum of votes is met within a set voting window. Short Executor proposals handle routine parameter changes, whilst Long Executor proposals govern core protocol upgrades, requiring higher thresholds and longer time-locks. All state changes are enforced without human intermediation once a vote is finalised.

  - By 2023, Aave Governance had expanded across Ethereum, Polygon, Avalanche, and other chains via cross-chain governance relays. Aave Grants DAO, itself a sub-DAO funded through governance, distributes resources to third-party builders. Risk service providers such as Chaos Labs and Gauntlet submit governance proposals backed by quantitative risk modelling, professionalising the proposal pipeline. The treasury, managed on-chain, holds diversified assets voted in by the community.

  - Aave V3 governance introduced more granular risk configurations including supply caps, borrow caps, and isolated collateral modes, all adjustable via governance votes. In 2024–2025, the GHO stablecoin minting parameters and the Aave Safety Module restructuring became major governance topics, illustrating how the protocol uses [[DAO Governance]] to navigate complex [[Token Economics]] trade-offs. Aave Governance is considered one of the most active and technically mature on-chain governance systems in decentralised finance.