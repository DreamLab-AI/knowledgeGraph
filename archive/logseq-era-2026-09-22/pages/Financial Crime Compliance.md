public:: true

# Financial Crime Compliance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:financial-crime-compliance",
  "@type": "Page",
  "title": "Financial Crime Compliance",
  "vc:slug": "financial-crime-compliance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:financial-crime-compliance",
  "@type": "Class",
  "label": "Financial Crime Compliance",
  "definition": "Financial crime compliance is the discipline by which regulated firms detect, prevent, and report illicit financial activity such as money laundering, terrorist financing, fraud, bribery, and sanctions evasion. It combines customer due diligence, transaction monitoring, sanctions screening, and suspicious-activity reporting under a risk-based framework mandated by regulators. The function protects the integrity of the financial system and exposes firms to significant penalties when controls fail.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      },
      {
        "@id": "urn:ngm:class:suspicious-activity-report",
        "label": "Suspicious Activity Report"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-based-approach",
        "label": "Risk-Based Approach"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Financial crime compliance is the discipline by which regulated firms detect, prevent, and report illicit financial activity such as money laundering, terrorist financing, fraud, bribery, and sanctions evasion. It combines customer due diligence, transaction monitoring, sanctions screening, and suspicious-activity reporting under a risk-based framework mandated by regulators. The function protects the integrity of the financial system and exposes firms to significant penalties when controls fail.
  - Related concepts: [[Anti-Money Laundering]], [[Know Your Customer]], [[Transaction Monitoring]], [[Sanctions Screening]], [[Regulatory Compliance]].
- ### Overview
  - Financial crime compliance integrates several control domains into a single programme governed by a [[Risk-Based Approach]].
  - It depends on [[Know Your Customer]] onboarding, ongoing [[Transaction Monitoring]], and [[Sanctions Screening]] against watchlists.
  - Outputs feed into [[Suspicious Activity Report]] filings with financial-intelligence units.
- ### Key aspects
  - Customer due diligence and beneficial-ownership identification.
  - Ongoing [[Transaction Monitoring]] for anomalous patterns.
  - [[Sanctions Screening]] of parties and payments against regulatory lists.
  - Escalation and filing of suspicious-activity reports.
  - Governance, training, and independent testing of controls.
- ### Applications
  - Bank and fintech onboarding and payment screening pipelines.
  - Risk scoring of customers and correspondents.
  - Regulatory examinations and audit readiness.
  - Integration of [[Fraud Detection]] analytics with compliance casework.
- ### Relationships
  - relatedTo:: [[Anti-Money Laundering]]
  - relatedTo:: [[Know Your Customer]]
  - supports:: [[Regulatory Compliance]]
  - supports:: [[Fraud Detection]]
  - bridgesTo:: [[Finance]]
  - partOf:: [[Regulatory Compliance]]
  - hasPart:: [[Transaction Monitoring]]
  - hasPart:: [[Sanctions Screening]]
  - hasPart:: [[Suspicious Activity Report]]
  - requires:: [[Risk-Based Approach]]
  - requires:: [[Know Your Customer]]
  - uses:: [[Fraud Detection]]
  - uses:: [[Transaction Monitoring]]
  - enables:: [[Anti-Money Laundering]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: GapMaterialisation
  - quality:: 0.62
