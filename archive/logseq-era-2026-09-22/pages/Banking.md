public:: true

# Banking

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:banking",
  "@type": "Page",
  "title": "Banking",
  "vc:slug": "banking",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:banking",
  "@type": "Class",
  "label": "Banking",
  "definition": "Banking is the system of financial intermediation through which licensed institutions accept deposits, extend credit, and provide payment and related services to individuals, businesses, and governments. Banks transform short-term deposits into longer-term loans, manage liquidity and risk, and operate the payment rails that move money through the economy. As a regulated, systemically important sector, banking sits at the centre of monetary policy transmission and financial stability.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-services",
      "label": "Financial Services"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:clearing",
        "label": "Clearing"
      },
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fintech",
        "label": "Fintech"
      },
      {
        "@id": "urn:ngm:class:open-banking",
        "label": "Open Banking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:interest-rate",
        "label": "Interest Rate"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
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
  - [[Financial Services]]
  - [[Central Bank]]
  - [[Payment System]]
  - [[Open Banking]]
  - [[Fintech]]
- ### Overview
  - Performs maturity and liquidity transformation, turning deposits into productive lending.
  - Operates the payment, clearing, and settlement infrastructure on which commerce depends.
  - Is heavily regulated because bank failures propagate systemic risk across the economy.
- ### Key aspects
  - Deposit-taking and the creation of credit through fractional-reserve lending.
  - Liquidity and capital management under prudential regulation.
  - Payment, clearing, and settlement of transactions between parties.
  - Transmission of central-bank policy rates into the wider economy.
  - Digital transformation through fintech, mobile banking, and open-banking APIs.
- ### Applications
  - Retail current accounts, savings, mortgages, and consumer lending.
  - Commercial and corporate lending, trade finance, and treasury services.
  - Operating payment networks and interbank settlement systems.
  - Open-banking platforms exposing accounts to third-party providers via APIs.
- ### Relationships
  - partOf:: [[Financial Services]]
  - hasPart:: [[Payment System]]
  - hasPart:: [[Clearing]]
  - hasPart:: [[Settlement]]
  - supports:: [[Monetary Policy]]
  - supports:: [[Liquidity]]
  - requires:: [[Regulation]]
  - requires:: [[Risk Management]]
  - enables:: [[Fintech]]
  - enables:: [[Open Banking]]
  - uses:: [[Interest Rate]]
  - dependsOn:: [[Central Bank]]
  - relatedTo:: [[Finance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
