public:: true

# Permissionless Lending
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:permissionless-lending",
  "@type": "Page",
  "vc:slug": "permissionless-lending",
  "title": "Permissionless Lending",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:permissionless-lending",
  "@type": "Class",
  "label": "Permissionless Lending",
  "definition": "Permissionless lending is the provision of on-chain credit through open protocols that anyone may access without identity gating or intermediary approval. Lenders deposit assets into smart-contract liquidity pools and borrowers draw against over-collateralised positions, with interest rates set algorithmically by utilisation. It is a foundational DeFi primitive that replaces credit underwriting with collateralisation and code-enforced liquidation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "Blockchain DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:decentralised-finance-domain", "label": "Decentralised Finance Domain"}, {"@id": "urn:ngm:class:decentralized-finance-de-fi", "label": "Decentralized Finance (DeFi)"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Permissionless lending lets anyone supply or borrow assets via open smart-contract pools, a core capability enabled by the [[Decentralised Finance Domain]] and [[Decentralized Finance (DeFi)]].
- ### Content
  - Protocols such as Aave and Compound pool deposits and price credit algorithmically from supply-and-demand utilisation, requiring borrowers to over-collateralise so positions can be liquidated automatically if their collateral ratio falls. By removing KYC gatekeeping and discretionary underwriting, permissionless lending offers global, composable credit, while concentrating risk in oracle accuracy and collateral volatility.
