public:: true

# real-world asset tokenisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d498a1a6f5ada2d4e6b420ab4a5c806ef62271e753b8ed01a0425d308602b39",
  "@type": "Page",
  "vc:slug": "real-world-asset-tokenisation",
  "title": "real-world asset tokenisation",
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
  "@id": "urn:ngm:class:real-world-asset-tokenisation",
  "@type": "Class",
  "label": "Real-World Asset Tokenisation",
  "definition": "Real-world asset tokenisation (RWA) is the process of issuing blockchain-based digital tokens that represent legally enforceable claims over physical or financial assets such as real estate, government bonds, private credit, or commodities. By encoding ownership rights and transfer rules in smart contracts, RWA tokenisation enables fractional ownership, 24/7 secondary-market liquidity, and automated compliance enforcement. The practice bridges traditional capital markets and decentralised finance, requiring regulatory alignment with securities law and robust oracle infrastructure to reflect off-chain asset valuations on-chain.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:oracle-network", "label": "Oracle Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:liquidity-provision", "label": "Liquidity Provision"},
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:security-token", "label": "Security Token"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Real-world asset tokenisation (RWA) is the process of issuing blockchain-based digital tokens that represent legally enforceable claims over physical or financial assets such as real estate, government bonds, private credit, or commodities. By encoding ownership rights and transfer rules in smart contracts, RWA tokenisation enables fractional ownership, 24/7 secondary-market liquidity, and automated compliance enforcement. The practice bridges traditional capital markets and decentralised finance, requiring regulatory alignment with securities law and robust oracle infrastructure to reflect off-chain asset valuations on-chain.

- ### Semantic Classification
  - owl-class:: real-world-asset-tokenisation:Real-World Asset Tokenisation
  - owl-role:: Concept

- ### Relationships
  - requires [[Smart Contract]]
  - requires [[Oracle Network]]
  - enables [[Liquidity Provision]]
  - enables [[Decentralised Finance]]
  - relatedTo [[Security Token]]
  - relatedTo [[Digital Asset]]

- ### Content
  - Real-world asset tokenisation converts legal ownership claims over off-chain assets into programmable on-chain tokens. The process typically involves a legal wrapper (special purpose vehicle or trust) that holds the underlying asset, with smart contracts governing token issuance, transfer restrictions (KYC/AML whitelisting), dividend or coupon distributions, and eventual redemption.
  - Price oracles supply the token smart contracts with current asset valuations from external appraisal or market data sources, enabling collateralisation within DeFi protocols. Token standards such as ERC-20 with transfer restriction extensions or purpose-built security token standards underpin compliant issuance frameworks.
  - Key categories of tokenised real-world assets include tokenised Treasuries and government bonds, tokenised real estate funds, private credit and trade finance receivables, and commodity-backed tokens. Each category carries distinct regulatory treatment—typically qualifying as a security token offering (STO) under securities law—which requires compliance with disclosure, prospectus, and custody requirements specific to each jurisdiction. The convergence of RWA tokenisation with decentralised lending markets is reshaping institutional capital formation by enabling previously illiquid assets to serve as collateral in permissioned DeFi pools.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
