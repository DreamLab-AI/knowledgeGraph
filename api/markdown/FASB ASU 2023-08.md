public:: true

# FASB ASU 2023-08
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fasb-asu-2023-08",
  "@type": "Page",
  "vc:slug": "fasb-asu-2023-08",
  "title": "FASB ASU 2023-08",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fasb-asu-2023-08",
  "@type": "Class",
  "label": "FASB ASU 2023-08",
  "definition": "FASB Accounting Standards Update 2023-08 is a US accounting standard issued by the Financial Accounting Standards Board that requires public companies to measure certain cryptocurrency assets at fair value and recognise gains and losses in net income each reporting period. The standard applies to fungible crypto assets listed on active markets, effective for fiscal years beginning after 15 December 2024. It represents a significant departure from the previous indefinite-lived intangible asset treatment that suppressed recognised gains.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:compliance-standards", "label": "Compliance Standards"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:digital-asset-standards", "label": "Digital Asset Standards"},
      {"@id": "urn:ngm:class:us-gaap", "label": "US GAAP"},
      {"@id": "urn:ngm:class:corporate-treasury", "label": "Corporate Treasury"},
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:regulatory-reporting", "label": "Regulatory Reporting"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:financial-transparency", "label": "Financial Transparency"},
      {"@id": "urn:ngm:class:investor-decision-making", "label": "Investor Decision-Making"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:fair-value-measurement", "label": "Fair Value Measurement"},
      {"@id": "urn:ngm:class:active-market", "label": "Active Market"},
      {"@id": "urn:ngm:class:fungible-token", "label": "Fungible Token"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:mark-to-market-accounting", "label": "Mark-to-Market Accounting"},
      {"@id": "urn:ngm:class:fair-value-accounting", "label": "Fair Value Accounting"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:financial-accounting-standards-board", "label": "Financial Accounting Standards Board"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"},
      {"@id": "urn:ngm:class:financial-services", "label": "Financial Services"},
      {"@id": "urn:ngm:class:digital-asset-market", "label": "Digital Asset Market"},
      {"@id": "urn:ngm:class:institutional-adoption", "label": "Institutional Adoption"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:mi-ca-regulation", "label": "MiCA Regulation"},
      {"@id": "urn:ngm:class:cost-model-accounting", "label": "Cost Model Accounting"},
      {"@id": "urn:ngm:class:intangible-asset-accounting", "label": "Intangible Asset Accounting"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:accounting-standards-update-2023-08", "label": "Accounting Standards Update 2023-08"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - FASB ASU 2023-08 mandates fair-value accounting for qualifying cryptocurrency assets held by US public companies, replacing the previous cost-less-impairment model and requiring that unrealised gains and losses flow through the income statement each period.
- ### Relationships
  - The standard directly governs the treatment of [[Cryptocurrency]] and [[Digital Asset]] holdings on corporate balance sheets. It interacts with [[Financial Regulation]] and [[Digital Asset Standards]] at the policy level. It enables more accurate [[Regulatory Reporting]] and [[Compliance Monitoring]] for crypto-holding entities. The standard supports [[Financial Stability]] and a more transparent [[Digital Asset Market]]. It contrasts with the European [[MiCA Regulation]], which takes a market-structure rather than accounting-standards approach to the same asset class.
- ### Content
  - Prior to ASU 2023-08, companies holding Bitcoin, Ether, or other fungible cryptocurrencies were required to classify them as indefinite-lived intangible assets under US GAAP. This meant assets were recorded at historical cost, written down if impaired, but never written up to reflect market recoveries. The result was systematic under-reporting of gains for companies like MicroStrategy, Tesla, and Block that accumulated substantial crypto treasuries.

  - FASB launched a project to address this anomaly in 2021 following significant lobbying from the crypto industry and institutional investors who argued that the intangible-asset model produced financial statements that misrepresented economic reality. After extensive consultation, the Board issued ASU 2023-08 in December 2023, with an effective date for fiscal years beginning after 15 December 2024 (early adoption permitted).

  - The standard applies a fair-value-through-net-income model: at each balance sheet date, qualifying crypto assets are measured at their current market price on the principal market. The resulting unrealised gains and losses are recognised in the income statement, not in other comprehensive income. This introduces earnings volatility for crypto-heavy balance sheets but improves the decision-relevance of reported figures.

  - Scope is deliberately narrow: ASU 2023-08 covers only fungible crypto assets that meet specific criteria—they must be secured through cryptography, reside on a distributed ledger, and be fungible with observable prices on active exchanges. NFTs, stablecoins backed by non-crypto assets, and security tokens outside active markets are generally excluded. Companies must also separately present crypto assets from other intangibles on the balance sheet and disclose significant holdings by asset type.

  - The standard's adoption has practical implications for corporate governance and treasury strategy. Companies that previously avoided recognising gains must now disclose fair-value movements, creating pressure to actively manage concentration risk. Analysts expect the change to increase earnings volatility disclosures and accelerate the development of crypto-specific hedging and risk management tools. The standard also influences [[MiCA Regulation]] comparisons, as European regulators watch whether the US accounting approach drives more or less institutional participation in digital asset markets.
