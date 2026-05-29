public:: true

# esg investing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ecd3ef636fbe45bb13f27ad65a5bdedc4ce3d6c7da0c8c106cf6d268b6d9547",
  "@type": "Page",
  "vc:slug": "esg-investing",
  "title": "esg investing",
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
  "@id": "urn:ngm:class:esg-investing",
  "@type": "Class",
  "label": "ESG Investing",
  "definition": "ESG Investing is an investment methodology that systematically integrates Environmental, Social, and Governance criteria into the analysis, selection, and management of investment portfolios, with the aim of assessing sustainability risks and ethical impact alongside conventional financial returns. Environmental factors include carbon emissions, resource usage, and climate exposure; social factors cover labour practices, supply-chain conditions, and community impact; governance factors assess board composition, executive remuneration, and shareholder rights. Blockchain-based tokenisation is increasingly used to provide transparent, immutable ESG data trails and enable fractional ownership of impact-linked assets.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "BC Governance and Regulation"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sustainability", "label": "Sustainability"},
      {"@id": "urn:ngm:class:green-finance", "label": "Green Finance"},
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:token", "label": "Token"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - ESG Investing is an investment methodology that systematically integrates Environmental, Social, and Governance criteria into the analysis, selection, and management of investment portfolios, with the aim of assessing sustainability risks and ethical impact alongside conventional financial returns. Environmental factors include carbon emissions, resource usage, and climate exposure; social factors cover labour practices, supply-chain conditions, and community impact; governance factors assess board composition, executive remuneration, and shareholder rights. Blockchain-based tokenisation is increasingly used to provide transparent, immutable ESG data trails and enable fractional ownership of impact-linked assets.

- ### Semantic Classification
  - owl-class:: esg-investing:ESG Investing
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Sustainability]]
  - relatedTo [[Green Finance]]
  - relatedTo [[Tokenization]]
  - uses [[Token]]
  - supports [[Governance]]

- ### Content
  - ESG Investing has moved from a niche responsible-investment approach to a mainstream consideration across institutional asset management. Regulatory mandates such as the EU Sustainable Finance Disclosure Regulation (SFDR) require asset managers to classify funds by sustainability ambition and disclose the ESG methodology underpinning each classification. This disclosure pressure drives demand for standardised, auditable ESG data.
  - A persistent challenge is the divergence of ESG ratings across different data providers, arising from differences in the metrics selected, their weighting, and the data sources consulted. This inconsistency can lead to portfolios that score highly on one rating but poorly on another for the same underlying companies. Blockchain-based provenance systems have been proposed as a mechanism to create shared, tamper-resistant records of supply-chain and emissions data, which could reduce this divergence.
  - Tokenisation enables novel ESG instruments: green bond tokens can embed real-time reporting obligations directly into the asset's smart-contract logic, and carbon credit tokens provide verifiable retirement records. Impact tokens representing investments in renewable energy infrastructure or conservation projects can attract retail investors who would previously have been excluded by minimum investment thresholds. Governance tokens in these structures allow token holders to vote on the use of proceeds, applying DAO-style mechanisms to sustainable finance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
