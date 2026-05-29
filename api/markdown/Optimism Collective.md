public:: true

# Optimism Collective
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optimism-collective",
  "@type": "Page",
  "vc:slug": "optimism-collective",
  "title": "Optimism Collective",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optimism-collective",
  "@type": "Class",
  "label": "Optimism Collective",
  "definition": "The Optimism Collective is a two-house governance body overseeing the Optimism ecosystem — a suite of Ethereum Layer 2 networks built on the OP Stack rollup technology — consisting of the Token House (OP token holders who vote on protocol upgrades and treasury allocations) and the Citizens' House (non-transferable badge holders who allocate Retroactive Public Goods Funding). It represents one of the most sophisticated real-world experiments in bicameral on-chain governance, designed to balance token-weighted economic interests with broader societal value creation and public goods provision.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"},
      {"@id": "urn:ngm:class:collective-decision-making", "label": "Collective Decision Making"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:voting-mechanism", "label": "Voting Mechanism"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Optimism Collective]] is a bicameral governance organisation — comprising the OP [[Governance Token]]-weighted Token House and the Citizens' House — that steers protocol development, treasury allocation, and Retroactive Public Goods Funding across the OP Stack-based [[Layer 2 Scaling]] network ecosystem.

- ### Relationships
  - [[Optimism Collective]] is an instance of [[DAO Governance]] operating over the Optimism [[Layer 2 Scaling]] network. Its Token House uses the [[Governance Token]] (OP) and standard [[Voting Mechanism]] patterns (delegation, quorum thresholds) for [[On-chain Governance]] of protocol upgrades. The Citizens' House employs a novel non-transferable badge system to enable [[Collective Decision Making]] for public goods funding. Together these houses operationalise [[Decentralized Governance]] and [[Blockchain Governance]] at scale, influencing the broader Superchain formed by OP Stack deployments including Base, Zora, and other chains.

- ### Content
  - Optimism launched its mainnet in January 2021 as an optimistic rollup scaling solution for Ethereum, using fraud proofs to inherit Ethereum's security while processing transactions off-chain at lower cost. The Optimism Foundation, a Cayman Islands non-profit, was established to steward protocol development. Recognising that purely token-weighted governance replicates plutocratic dynamics, the Optimism Collective was designed in 2022 as a bicameral system intended to evolve toward genuine community sovereignty over a multi-year decentralisation roadmap.

  - The Token House grants OP token holders veto power over protocol parameter changes, smart contract upgrades, and treasury disbursements. Governance proceeds through a structured two-week voting cycle with proposal temperature checks, snapshot votes, and on-chain execution. Delegates — individuals or organisations entrusted with voting power by passive token holders — play a central role in amplifying participation. The Citizens' House, by contrast, allocates Retroactive Public Goods Funding (RetroPGF) using non-transferable attestation-based citizenship, rewarding projects that have demonstrably benefited the Optimism ecosystem after the fact. This retroactive model is designed to correct the market failure where public infrastructure is chronically underfunded.

  - The OP Stack, released as open-source software in 2023, transformed Optimism from a single L2 into a framework for deploying a "Superchain" of interoperable rollups. Coinbase's Base, launched in August 2023, is the highest-profile OP Stack deployment, rapidly becoming one of the most active Ethereum L2s by transaction volume. Revenue from sequencer fees across the Superchain flows into the Optimism Collective treasury, creating a sustainable funding model for RetroPGF. The governance architecture is explicitly designed to evolve — Season 4 and Season 5 governance cycles introduced refined Citizens' House processes and the Law of Chains governing Superchain membership.

  - In 2024–2025, the Optimism Collective completed multiple RetroPGF rounds distributing tens of millions of dollars in OP tokens to public goods projects. The Superchain vision has attracted additional chain operators, and the Collective has begun work on fault proof systems that reduce reliance on the Security Council multi-sig. The governance model is closely watched by the broader blockchain industry as a potential template for balancing economic and social governance, and academic researchers have studied its voting patterns, delegate behaviour, and impact on public goods production.