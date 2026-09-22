public:: true

# Financial Crime Prevention

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:financial-crime-prevention",
  "@type": "Page",
  "title": "Financial Crime Prevention",
  "vc:slug": "financial-crime-prevention",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:financial-crime-prevention",
  "@type": "Class",
  "label": "Financial Crime Prevention",
  "definition": "Financial Crime Prevention is the set of controls, processes and technologies that detect, deter and disrupt illicit financial activity such as money laundering, fraud, terrorist financing and sanctions evasion. It combines customer due diligence, transaction monitoring, screening and reporting obligations to satisfy regulatory expectations and protect the integrity of the financial system. The field draws on analytics and risk-based methodologies to focus scarce investigative resources on the highest-risk activity.",
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
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:data-analytics",
        "label": "Data Analytics"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fatf",
        "label": "FATF"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
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
  - Financial Crime Prevention is the set of controls, processes and technologies that detect, deter and disrupt illicit financial activity such as money laundering, fraud, terrorist financing and sanctions evasion. It combines customer due diligence, transaction monitoring, screening and reporting obligations to satisfy regulatory expectations and protect the integrity of the financial system. The field draws on analytics and risk-based methodologies to focus scarce investigative resources on the highest-risk activity.
  - Closely related concepts include [[Anti-Money Laundering]], [[Know Your Customer]], [[Fraud Detection]], [[FATF]], [[Regulatory Compliance]].
- ### Overview
  - [[Regulatory Compliance]] provides the broader context within which Financial Crime Prevention sits.
  - Financial Crime Prevention is treated here as a member of the **finance** domain at **established** maturity.
  - It is referenced across the knowledge graph by classes that depend on or compose it, making it a central node that warranted an explicit definition.
- ### Key aspects
  - It comprises [[Anti-Money Laundering]].
  - It comprises [[Know Your Customer]].
  - It comprises [[Transaction Monitoring]].
  - It comprises [[Sanctions Screening]].
  - It requires [[Audit Trail]].
  - It makes use of [[Fraud Detection]].
  - It makes use of [[Data Analytics]].
- ### Mechanisms
  - Financial Crime Prevention operates by combining its constituent parts into a coherent capability that other classes can rely upon.
  - Its guarantees and behaviours are realised through the dependencies and standards captured in the relations below.
- ### Applications
  - Enables and supports [[Regulatory Compliance]].
  - Enables and supports [[Financial Services]].
  - Enables and supports [[Financial System]].
  - Enables and supports [[Financial Regulation]].
- ### Relationships
  - partOf:: [[Regulatory Compliance]]
  - hasPart:: [[Anti-Money Laundering]]
  - hasPart:: [[Know Your Customer]]
  - hasPart:: [[Transaction Monitoring]]
  - hasPart:: [[Sanctions Screening]]
  - requires:: [[Know Your Customer]]
  - requires:: [[Transaction Monitoring]]
  - requires:: [[Audit Trail]]
  - uses:: [[Fraud Detection]]
  - uses:: [[Data Analytics]]
  - uses:: [[Transaction Monitoring]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Financial Services]]
  - supports:: [[Financial System]]
  - supports:: [[Financial Regulation]]
  - standardizedBy:: [[FATF]]
  - relatedTo:: [[Anti-Money Laundering]]
  - relatedTo:: [[Fraud Detection]]
  - relatedTo:: [[Compliance]]
  - bridgesTo:: [[Cybersecurity]]
  - subClassOf:: [[Regulatory Compliance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
