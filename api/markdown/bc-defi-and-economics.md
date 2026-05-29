public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12b6caa961db375f0902927027241d3d55d0bb10c56678dc150120abc7f4e69d",
  "@type": "Page",
  "vc:slug": "bc-defi-and-economics",
  "title": "DeFi and Economics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:bc-defi-and-economics",
  "label": "DeFi and Economics",
  "definition": "Taxonomy category grouping decentralised finance protocols and blockchain-native economic mechanisms, including automated market makers, liquidity pools, yield farming, stablecoins, tokenisation, DAOs, and the incentive structures that govern on-chain economies.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:yield-farming", "label": "Yield Farming"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"},
      {"@id": "urn:ngm:class:digital-asset-lending", "label": "Digital Asset Lending"},
      {"@id": "urn:ngm:class:decentralized-exchange", "label": "Decentralized Exchange"},
      {"@id": "urn:ngm:class:blockchain-economics", "label": "Blockchain Economics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"},
      {"@id": "urn:ngm:class:incentive-alignment", "label": "Incentive Alignment"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
