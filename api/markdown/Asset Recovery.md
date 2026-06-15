public:: true

# Asset Recovery

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:asset-recovery",
  "@type": "Page",
  "title": "Asset Recovery",
  "vc:slug": "asset-recovery",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:asset-recovery",
  "@type": "Class",
  "label": "Asset Recovery",
  "definition": "Asset recovery is the process of identifying, tracing, freezing, and ultimately returning funds or property obtained through fraud, corruption, money laundering, or other financial crime. It combines financial investigation, legal action, and cross-border cooperation to follow illicit value through layered transactions and recover it for victims or the state. In the digital era it increasingly relies on blockchain analytics to trace cryptocurrency proceeds.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:anti-money-laundering",
      "label": "Anti-Money Laundering"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain-analytics",
        "label": "Blockchain Analytics"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      },
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:aml",
        "label": "AML"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Anti-Money Laundering]]
  - [[Fraud Detection]]
  - [[Know Your Customer]]
  - [[Blockchain Analytics]]
  - [[Compliance]]
- ### Overview
  - Closes the loop on financial crime by reclaiming the value that detection and prosecution alone leave in place.
  - Operates across legal, investigative, and analytical disciplines, often spanning multiple jurisdictions.
  - Depends on traceability: the ability to follow value through obfuscation and layering.
- ### Key aspects
  - Tracing the movement of illicit proceeds through accounts, entities, and chains of transactions.
  - Freezing and seizure orders to preserve assets before they are dissipated.
  - Cross-border mutual legal assistance and cooperation among regulators and law enforcement.
  - Blockchain analytics to deanonymise and follow cryptocurrency flows.
  - Restitution mechanisms returning recovered value to victims or the public purse.
- ### Applications
  - Recovering proceeds of fraud, embezzlement, and corruption.
  - Tracing and seizing cryptocurrency obtained through ransomware or scams.
  - Supporting sanctions enforcement and confiscation of criminal property.
  - Insolvency and victim-compensation recovery actions.
- ### Relationships
  - partOf:: [[Anti-Money Laundering]]
  - requires:: [[Know Your Customer]]
  - requires:: [[Audit]]
  - uses:: [[Blockchain Analytics]]
  - uses:: [[Fraud Detection]]
  - enables:: [[Regulatory Compliance]]
  - supports:: [[Compliance]]
  - supports:: [[Governance]]
  - dependsOn:: [[Traceability]]
  - bridgesTo:: [[Cryptocurrency]]
  - relatedTo:: [[Finance]]
  - relatedTo:: [[Financial Services]]
  - relatedTo:: [[Risk Management]]
  - relatedTo:: [[AML]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
