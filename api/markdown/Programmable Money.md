public:: true

# programmable money
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:36d8a08e8e5d3375064631094f94d9b66e6deb7522a134aa1770784d7080dae9",
  "@type": "Page",
  "vc:slug": "programmable-money",
  "title": "programmable money",
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
  "@id": "urn:ngm:class:programmable-money",
  "@type": "Class",
  "label": "Programmable Money",
  "definition": "Programmable Money is a form of digital currency in which the conditions governing the creation, transfer, and use of monetary units are encoded as executable logic\u2014typically within smart contracts on a public or permissioned blockchain\u2014and enforced autonomously without requiring trusted intermediaries. This enables payment instruments that can embed compliance rules, spending constraints, vesting schedules, or multi-party approval workflows directly into the currency itself. Central bank digital currencies (CBDCs), tokenised commercial bank deposits, and DeFi stablecoins are all instances of programmable money at different points on the decentralisation spectrum.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "BC DeFi and Economics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:digital-currency", "label": "Digital Currency"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Programmable Money is a form of digital currency in which the conditions governing the creation, transfer, and use of monetary units are encoded as executable logic—typically within smart contracts on a public or permissioned blockchain—and enforced autonomously without requiring trusted intermediaries. This enables payment instruments that can embed compliance rules, spending constraints, vesting schedules, or multi-party approval workflows directly into the currency itself. Central bank digital currencies (CBDCs), tokenised commercial bank deposits, and DeFi stablecoins are all instances of programmable money at different points on the decentralisation spectrum.

- ### Semantic Classification
  - owl-class:: programmable-money:Programmable Money
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Digital Currency]]
  - enables [[Payment System]]
  - enables [[Decentralized Finance (DeFi)]]
  - relatedTo [[CBDCs]]
  - relatedTo [[Stablecoin]]

- ### Content
  - Programmable money extends the concept of digital currency by moving enforcement of monetary rules from legal frameworks and financial intermediaries into executable code. Ethereum-based ERC-20 tokens are the most widely deployed instance: their transfer functions can be overridden to include allow-lists, transfer caps, or fee-on-transfer logic. More sophisticated implementations use upgradeable proxy patterns or role-based access control to allow rule modification by authorised parties such as issuers or regulatory bodies.
  - For central banks, programmable CBDC designs raise questions of monetary sovereignty, privacy, and financial inclusion. Retail CBDC architectures under evaluation by the Bank of England, European Central Bank, and others distinguish between programmability of the money itself (restricting what it can be spent on) and programmability of payments (conditional payment triggers such as DVP—delivery versus payment—in securities settlement). The latter is less controversial and more readily achievable within existing legal frameworks.
  - In decentralised finance, programmable money takes the form of algorithmic stablecoins, wrapped tokens, and protocol-native currencies whose supply and distribution policies are entirely encoded in immutable or governance-upgradeable smart contracts. Liquidity mining rewards, token vesting schedules, and multi-signature treasury management are all expressions of programmable monetary logic. The intersection of CBDCs and DeFi—sometimes termed "regulated DeFi"—is an emerging design space seeking to combine central bank creditworthiness with the composability of smart contract infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
