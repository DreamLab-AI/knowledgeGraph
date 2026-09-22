public:: true

# Uniswap Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:uniswap-governance",
  "@type": "Page",
  "vc:slug": "uniswap-governance",
  "title": "Uniswap Governance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uniswap-governance",
  "@type": "Class",
  "label": "Uniswap Governance",
  "definition": "Uniswap Governance is the on-chain and off-chain decision-making system by which UNI token holders collectively control the parameters, treasury, and development direction of the Uniswap decentralised exchange protocol. Governance proposals traverse a structured lifecycle of temperature checks, consensus checks, and on-chain votes executed through the Governor Bravo contract, with a quorum threshold and timelock delay before execution. UNI holders may delegate their voting power to representatives, enabling liquid democracy patterns in protocol management. Uniswap Governance controls protocol fee switches, liquidity mining programs, grant allocations from the UNI treasury, and deployment of the protocol to new networks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:on-chain-governance", "label": "On-chain Governance"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:uniswap", "label": "Uniswap"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:compound-governor-bravo", "label": "Compound Governor Bravo"},
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:concentrated-liquidity", "label": "Concentrated Liquidity"},
      {"@id": "urn:ngm:class:decentralized-exchange-dex", "label": "Decentralized Exchange (DEX)"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Uniswap Governance]] is the formal decision-making system through which [[Governance Token]] (UNI) holders control protocol parameters, treasury disbursements, and network deployments of the [[Uniswap]] [[Automated Market Maker]], executing binding changes via the [[Compound Governor Bravo]] contract with quorum requirements and timelock delays.

- ### Relationships
  - Uniswap Governance uses [[Governance Token]] delegation to enable liquid democracy, relies on [[Snapshot Voting]] for gas-free off-chain temperature checks before committing proposals on-chain, is modelled on [[Compound Governor Bravo]] smart contract infrastructure, and governs the fee switch and liquidity parameters of the [[Decentralized Exchange (DEX)]] and its [[Concentrated Liquidity]] pools — making it a reference implementation for [[DAO Governance]] across the DeFi ecosystem.

- ### Content
  - Uniswap launched its UNI governance token in September 2020 through a retroactive airdrop that distributed tokens to historical users of the protocol, establishing one of the largest governance token distributions in DeFi history. The initial governance framework adopted the Compound Governor Alpha and subsequently Governor Bravo pattern, giving UNI holders binding on-chain control over a treasury initially holding approximately 43% of the total UNI supply.

  - The governance lifecycle proceeds through several phases. A proposal author first submits to the community forum for discussion, then creates a Snapshot off-chain vote for low-cost temperature checking. If community support is confirmed, a formal on-chain proposal is submitted requiring 2.5 million UNI in delegated voting power for submission threshold. A 3-day voting period follows, requiring 40 million UNI quorum for passing; successful proposals enter a 2-day timelock before execution.

  - Key governance decisions have included the activation of the protocol fee mechanism (directing a share of swap fees to the treasury), deployment of Uniswap v3 to Layer-2 networks including Optimism, Arbitrum, and Polygon, grant allocations through the Uniswap Grants Program, and selection of the Uniswap Foundation as a formal stewardship body. The protocol's fee switch governance debates became a landmark case study in the challenges of balancing liquidity provider incentives against token holder interests.

  - In 2024-2025, Uniswap v4's introduction of hooks — custom smart contract logic injected into pool lifecycle events — expanded the governance surface area to include hook whitelisting. The Uniswap Foundation has moved toward a more structured governance process with dedicated governance facilitators and working groups. Cross-chain governance coordination, allowing UNI holders on multiple networks to participate in decisions affecting deployments across chains, remains an active area of development in the broader DAO tooling ecosystem.
