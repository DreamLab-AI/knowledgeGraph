public:: true

# Convex Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:convex-finance",
  "@type": "Page",
  "vc:slug": "convex-finance",
  "title": "Convex Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:convex-finance",
  "@type": "Class",
  "label": "Convex Finance",
  "definition": "Convex Finance is a decentralised finance (DeFi) protocol built on Ethereum that enables Curve Finance liquidity providers to earn enhanced CRV token rewards without locking their own CRV tokens. By aggregating veCRV voting power from CVX token holders, Convex boosts yield for depositors while distributing governance influence across its community, creating a meta-governance layer above Curve's vote-escrowed tokenomics model. Convex became one of the largest holders of veCRV by 2022, making CVX effectively a proxy for Curve governance influence.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi-protocol", "label": "De Fi Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"},
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:yield-generation", "label": "Yield Generation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:liquidity-mining", "label": "Liquidity Mining"},
      {"@id": "urn:ngm:class:concentrated-liquidity", "label": "Concentrated Liquidity"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Convex Finance]] is a [[De Fi Protocol]] on Ethereum that amplifies yields for [[Liquidity Pool]] participants by aggregating veCRV voting power, enabling [[Yield Farming]] without the capital lockup normally required by Curve Finance's vote-escrow tokenomics.

- ### Relationships
  - Convex Finance operates as a [[De Fi Protocol]] that wraps Curve Finance's [[Automated Market Maker]] infrastructure. Depositors supply assets to [[Liquidity Pool]] positions and earn boosted CRV rewards mediated by the protocol's aggregated veCRV stake, enabling [[Liquidity Provision]] and [[Yield Generation]] at rates unavailable to individual depositors. The [[Token Economics]] of CVX—staking for vlCVX to direct Convex's voting power in Curve gauge weight elections—makes Convex central to the broader [[Decentralized Finance (DeFi)]] meta-governance landscape, closely linked to [[Liquidity Mining]] incentive structures and [[Concentrated Liquidity]] management strategies.

  - All protocol logic is enforced by [[Smart Contract]] code on Ethereum, with no trusted intermediaries controlling depositor funds.

- ### Content
  - Convex Finance launched in May 2021, designed to solve a specific problem in the Curve Finance tokenomics model. Curve's CRV reward system gives boosted yields (up to 2.5×) to liquidity providers who lock CRV as veCRV (vote-escrowed CRV) for up to four years. This creates a barrier: small liquidity providers cannot afford to lock large amounts of CRV, and large holders accumulate disproportionate boosts. Convex solved this by acting as a cooperative: it accepts CRV from users (minting cvxCRV in return), accumulates veCRV on behalf of all depositors, and distributes the resulting boosted CRV rewards pro-rata without imposing individual lock-up requirements.

  - The protocol's native token CVX governs allocation of Convex's collective veCRV voting power. CVX holders who stake as vlCVX (vote-locked CVX, 16-week lock) can vote in biweekly "gauge weight" elections that determine how Curve emissions are distributed across its liquidity pools. This created a secondary market—the "Curve Wars"—in which DeFi protocols bribe vlCVX holders to direct CRV emissions toward their own pools, using bribe platforms such as Votium. By early 2022, Convex controlled approximately 47% of all veCRV, making it arguably the most influential actor in Curve's governance despite not being Curve itself.

  - Convex's architecture demonstrated a general pattern in DeFi: meta-protocols that aggregate governance tokens and redistribute influence more efficiently than individual participation allows. The model inspired similar designs for other vote-escrow protocols, including Aura Finance (for Balancer's veBAL) and Wombex Finance (for Wombat Exchange). The bribe economy created transparent markets for governance influence that, while controversial from a decentralisation perspective, provided price discovery for protocol subsidies that previously took place informally.

  - By 2024–2025 Convex remains a significant DeFi primitive, though the "Curve Wars" have matured into a more stable equilibrium. Total value locked (TVL) peaked at approximately $20 billion in late 2021 and settled at several billion dollars as DeFi markets normalised. The protocol has expanded beyond Curve to support Frax Finance pools and similar vote-escrow systems. Regulatory scrutiny of DeFi yield protocols—particularly around whether boosted yield instruments constitute securities—represents the primary risk vector for Convex and similar protocols in jurisdictions actively developing crypto asset regulatory frameworks.