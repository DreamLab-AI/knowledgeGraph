public:: true

# Arbitrum DAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:arbitrum-dao",
  "@type": "Page",
  "vc:slug": "arbitrum-dao",
  "title": "Arbitrum DAO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:arbitrum-dao",
  "@type": "Class",
  "label": "Arbitrum DAO",
  "definition": "Arbitrum DAO is the decentralised autonomous organisation that governs the Arbitrum One and Arbitrum Nova Layer 2 blockchain networks, operating through the ARB governance token launched by Offchain Labs in March 2023. Token holders propose and vote on protocol upgrades, treasury allocations, and parameter changes via on-chain governance contracts, making Arbitrum DAO one of the largest DAOs by treasury value in the Ethereum ecosystem. Governance decisions are executed through a Security Council with emergency intervention powers and a broader Arbitrum Improvement Proposal (AIP) process for standard changes.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:dao", "label": "DAO"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum"},
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On Chain Voting"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Arbitrum DAO]] governs the Arbitrum protocol ecosystem—principally the Arbitrum One optimistic rollup network—through a token-weighted [[On-chain Governance]] system built on [[Smart Contract]] infrastructure deployed on [[Ethereum Smart Contract Platform]]. The ARB [[Governance Token]] grants holders proportional voting rights over Arbitrum Improvement Proposals, which can alter core protocol parameters, upgrade smart contracts, and direct disbursements from the DAO's multi-billion-dollar treasury. The governance structure distinguishes between a 12-member Security Council empowered to act in emergencies and the broader token-holder community for routine [[DAO Governance]].

- ### Relationships
  - Arbitrum DAO enables [[On-chain Governance]] and [[DAO Governance]] for a major [[Layer 2 Scaling]] network. It uses [[Governance Token]] mechanics for voting power distribution, [[Smart Contract]] infrastructure for proposal execution, and is anchored to the [[Ethereum Smart Contract Platform]] base layer for security. Its voting procedures constitute a form of [[On Chain Voting]] that embodies decentralised decision-making at protocol scale.

- ### Content
  - Arbitrum One launched in August 2021 as an optimistic rollup Layer 2 network developed by Offchain Labs, rapidly accumulating the largest total value locked of any Ethereum Layer 2 network. Governance was initially centralised in Offchain Labs; in March 2023, the ARB token airdrop distributed 11.6% of the total supply to early users and DAOs building on Arbitrum, simultaneously transferring governance authority to the Arbitrum DAO. The airdrop was one of the largest in DeFi history by recipient count, reaching approximately 625,000 addresses.

  - The governance architecture operates through the Arbitrum Governor contract, a modified version of Compound's Governor Bravo, requiring 5% of the circulating supply to meet quorum thresholds for standard AIPs. The Security Council—comprising 12 members elected by ARB holders in two cohorts—holds a 9-of-12 multisig with authority to execute emergency upgrades without full DAO vote when critical vulnerabilities arise. This two-tier structure balances decentralised deliberation with the operational agility needed to respond to security incidents on a live production network.

  - Arbitrum DAO has faced significant governance controversies, most prominently in April 2023 when a Foundation proposal to transfer ARB tokens for operational funding without prior DAO approval generated substantial community backlash and was revised. The incident catalysed discussions about DAO legitimacy, treasury management transparency, and the practical limits of decentralised governance for infrastructure protocols. Subsequent governance cycles introduced more structured proposal frameworks and delegate accountability mechanisms.

  - By 2024–2025, Arbitrum DAO manages one of the largest on-chain treasuries in the Ethereum ecosystem, measured in billions of ARB tokens. It has funded ecosystem grants through programmes such as the Arbitrum Research and Development Committee (ARDC) and Arbitrum Ventures Initiative, directing capital toward protocol development, security research, and ecosystem growth. The DAO's governance participation rates—typically below 15% of circulating supply—reflect ongoing challenges in achieving broad stakeholder engagement common across large token-governed protocols.