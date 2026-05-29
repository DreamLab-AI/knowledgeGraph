public:: true

# makerdao
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2cf650adc1bb80025e521c19f6d4ff39d83bd36287e284b881a1eaf1c63263a2",
  "@type": "Page",
  "vc:slug": "maker-dao",
  "title": "makerdao",
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
  "@id": "urn:ngm:class:maker-dao",
  "@type": "Class",
  "label": "MakerDAO",
  "definition": "MakerDAO is a decentralised autonomous organisation on the Ethereum blockchain that governs the Maker Protocol, a smart-contract system enabling users to generate the DAI stablecoin by locking over-collateralised assets in collateralised debt positions (CDPs, also called Vaults). Governance decisions—including collateral onboarding, risk parameters, and stability fees—are made by MKR token holders through on-chain voting. MakerDAO is a foundational component of the decentralised finance (DeFi) ecosystem and one of the earliest large-scale deployments of DAO governance coordinating billions of dollars of collateral.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - MakerDAO is a decentralised autonomous organisation on the Ethereum blockchain that governs the Maker Protocol, a smart-contract system enabling users to generate the DAI stablecoin by locking over-collateralised assets in collateralised debt positions (CDPs, also called Vaults). Governance decisions—including collateral onboarding, risk parameters, and stability fees—are made by MKR token holders through on-chain voting. MakerDAO is a foundational component of the decentralised finance (DeFi) ecosystem and one of the earliest large-scale deployments of DAO governance coordinating billions of dollars of collateral.

- ### Semantic Classification
  - owl-class:: maker-dao:MakerDAO
  - owl-role:: Concept

- ### Relationships
  - uses [[Smart Contract]]
  - uses [[Governance Token]]
  - enables [[Stablecoin]]
  - enables [[Decentralized Finance (DeFi)]]
  - relatedTo [[DAO]]
  - relatedTo [[Liquidity Pool]]

- ### Content
  The Maker Protocol operates as a system of Ethereum Smart Contracts that manage collateral, debt accounting, and the soft peg stability mechanisms for DAI. Users deposit accepted collateral types (ETH, WBTC, and various stablecoins) into Vaults and mint DAI up to the maximum debt ceiling determined by the collateralisation ratio for that asset class. If a Vault's collateral value falls below the liquidation ratio, the protocol automatically liquidates the position via a Dutch-auction mechanism, using proceeds to repay outstanding DAI and cover protocol fees.

  Governance is exercised via the MKR token, a Governance Token granting voting rights proportional to holdings. MKR holders ratify proposals covering new collateral types, risk parameters (stability fees, liquidation penalties, debt ceilings), and protocol upgrades through an on-chain Executive Vote system. This DAO governance model predates and influenced subsequent DeFi governance frameworks.

  The Peg Stability Module (PSM) allows direct swapping of approved stablecoins for DAI at a fixed rate, providing an additional price-peg mechanism. MakerDAO has engaged with real-world asset (RWA) tokenisation, onboarding US Treasury exposure and real-estate loans as collateral, extending DeFi infrastructure into traditional finance. Liquidity Pools across Automated Market Makers further distribute DAI across the DeFi ecosystem. The organisation subsequently underwent a governance restructuring towards a "Endgame" plan, creating SubDAOs with more specialised mandates, illustrating the evolving complexity of DAO Governance at scale.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
