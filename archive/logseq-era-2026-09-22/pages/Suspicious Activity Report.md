public:: true

# Suspicious Activity Report
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:suspicious-activity-report",
  "@type": "Page",
  "title": "Suspicious Activity Report",
  "vc:slug": "suspicious-activity-report",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:suspicious-activity-report",
  "@type": "Class",
  "label": "Suspicious Activity Report",
  "definition": "A Suspicious Activity Report (SAR) is a formal regulatory filing through which a financial institution notifies a national financial intelligence unit of transactions or behaviours that may indicate money laundering, terrorist financing, fraud, or other financial crime. SARs are mandated under anti-money-laundering frameworks and must be submitted within prescribed deadlines whenever staff or monitoring systems form a reasonable suspicion. The report documents the parties, accounts, transaction patterns, and the analyst's narrative rationale, while strict confidentiality (tipping-off prohibitions) prevents disclosure to the subject.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:customer-due-diligence",
        "label": "Customer Due Diligence"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:risk-based-approach",
        "label": "Risk-Based Approach"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
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
  - A Suspicious Activity Report (SAR) is a formal regulatory filing through which a financial institution notifies a national financial intelligence unit of transactions or behaviours that may indicate money laundering, terrorist financing, fraud, or other financial crime. SARs are mandated under anti-money-laundering frameworks and must be submitted within prescribed deadlines whenever staff or monitoring systems form a reasonable suspicion. The report documents the parties, accounts, transaction patterns, and the analyst's narrative rationale, while strict confidentiality (tipping-off prohibitions) prevents disclosure to the subject.
  - Related concepts: [[Anti-Money Laundering]] [[Regulatory Compliance]] [[Transaction Monitoring]] [[FATF]] [[Customer Due Diligence]]
- ### Overview
  - SARs sit at the heart of the global anti-money-laundering regime. Detection typically originates from automated [[Transaction Monitoring]] systems that flag anomalies against [[Risk-Based Approach]] thresholds, after which a compliance analyst investigates and either dismisses the alert or escalates it into a report. The filing is sent to the jurisdiction's financial intelligence unit, which aggregates reports across institutions to build intelligence on criminal networks.
- ### Key aspects
  - Trigger criteria grounded in reasonable suspicion rather than proven wrongdoing.
  - Mandatory confidentiality and tipping-off prohibitions protecting investigations.
  - Defined filing deadlines and structured narrative requirements.
  - Integration with [[Customer Due Diligence]] and [[Know Your Customer]] records.
  - Defensive filing pressures and false-positive management.
- ### Applications
  - Banking compliance teams escalating laundering typologies.
  - Money service businesses reporting structured cash movements.
  - Fintech platforms feeding [[Fraud Detection]] outcomes into regulatory filings.
  - Cross-border intelligence sharing between financial intelligence units.
- ### Relationships
  - partOf:: [[Anti-Money Laundering]]
  - partOf:: [[Regulatory Compliance]]
  - requires:: [[Transaction Monitoring]]
  - requires:: [[Customer Due Diligence]]
  - requires:: [[Audit Trail]]
  - enables:: [[Fraud Detection]]
  - enables:: [[Sanctions Screening]]
  - uses:: [[Risk-Based Approach]]
  - standardizedBy:: [[FATF]]
  - dependsOn:: [[Know Your Customer]]
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[Compliance]]
  - relatedTo:: [[Financial Services]]
  - supports:: [[Basel III]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
