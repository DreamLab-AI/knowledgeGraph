public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bc8867d282e86df6ca0510e43c804a8ae5d78034adfe9325bedd470e2561f404",
  "@type": "Page",
  "vc:slug": "bc-token-and-asset",
  "title": "Token and Asset",
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
  "@id": "urn:ngm:class:bc-token-and-asset",
  "label": "Token and Asset",
  "definition": "Taxonomy hub for blockchain-based digital tokens and on-chain asset representations. Covers fungible tokens, non-fungible tokens, stablecoins, security tokens, governance tokens, and the standards and mechanisms by which digital value is issued, transferred, and managed on distributed ledgers.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:utility-token", "label": "Utility Token"},
      {"@id": "urn:ngm:class:security-token", "label": "Security Token"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"},
      {"@id": "urn:ngm:class:erc-721", "label": "ERC-721"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:asset-tokenisation", "label": "Asset Tokenisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
