public:: true

# iosco
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fd9038d4781cf931ea1a29bae43c74c8c357b58d28c6bfbbd6eb3a54ff9d93bd",
  "@type": "Page",
  "vc:slug": "iosco",
  "title": "iosco",
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
  "@id": "urn:ngm:class:iosco",
  "@type": "Class",
  "label": "IOSCO",
  "definition": "The International Organisation of Securities Commissions (IOSCO) is the global standard-setting body for securities regulation, whose members include national securities regulators from over 130 jurisdictions. It develops and publishes Principles, Recommendations, and regulatory standards that member jurisdictions adopt to promote fair, efficient, and transparent capital markets, combat systemic risk, and protect investors. IOSCO has extended its remit to encompass digital asset markets and crypto-asset intermediaries, issuing policy recommendations that inform national regulatory frameworks including the EU MiCA regulation.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"},
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-asset-market", "label": "Digital Asset Market"},
      {"@id": "urn:ngm:class:systemic-risk", "label": "Systemic Risk"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The International Organisation of Securities Commissions (IOSCO) is the global standard-setting body for securities regulation, whose members include national securities regulators from over 130 jurisdictions. It develops and publishes Principles, Recommendations, and regulatory standards that member jurisdictions adopt to promote fair, efficient, and transparent capital markets, combat systemic risk, and protect investors. IOSCO has extended its remit to encompass digital asset markets and crypto-asset intermediaries, issuing policy recommendations that inform national regulatory frameworks including the EU MiCA regulation.

- ### Semantic Classification
  - owl-class:: iosco:IOSCO
  - owl-role:: Concept

- ### Relationships
  - supports [[Securities Regulation]]
  - supports [[Financial Stability]]
  - relatedTo [[Digital Asset Market]]
  - relatedTo [[Systemic Risk]]
  - standardizedBy [[Financial Regulation]]

- ### Content
  - IOSCO was established in 1983 and is headquartered in Madrid. Its membership spans ordinary members (national securities regulators such as the FCA, SEC, and AMF), associate members, and affiliate members from self-regulatory organisations. IOSCO produces two principal categories of normative output: the IOSCO Objectives and Principles of Securities Regulation (38 Principles), which form the basis for IMF and World Bank Financial Sector Assessment Program (FSAP) reviews, and more targeted Recommendations and Reports on specific topics.
  - In the context of digital assets and distributed ledger technology, IOSCO published its Policy Recommendations for Crypto and Digital Asset Markets in 2023, covering conflicts of interest, market manipulation, cross-border cooperation, and custody of client assets. These recommendations are explicitly referenced by the EU MiCA (Markets in Crypto-Assets) regulation and comparable frameworks in the UK, Japan, and Singapore as global baseline standards.
  - IOSCO coordinates closely with the Financial Stability Board (FSB) and the Basel Committee on Banking Supervision (BCBS) within the G20 financial regulatory architecture. Its work on market intermediaries, investment management, and trading infrastructure increasingly intersects with AI-driven trading and algorithmic market-making, areas where IOSCO has begun to publish guidance on technology risk and model governance for regulated entities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
