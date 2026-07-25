public:: true

# Clearing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:clearing",
  "@type": "Page",
  "title": "Clearing",
  "vc:slug": "clearing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:clearing",
  "@type": "Class",
  "label": "Clearing",
  "definition": "Clearing is the post-trade process of confirming, matching and managing the obligations arising from a transaction in the interval between execution and settlement. A clearing house, often acting as a central counterparty, novates trades and nets exposures, calculating the net obligations of each party and managing counterparty credit risk through margin and default funds. Clearing reduces systemic risk and operational burden in securities, derivatives and payment markets.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-market-infrastructure",
      "label": "Financial Market Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:clearing-house",
        "label": "Clearing House"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-market-infrastructure",
        "label": "Financial Market Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:clearing-house",
        "label": "Clearing House"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      },
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:payment-processing",
        "label": "Payment Processing"
      },
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:clearing-house",
        "label": "Clearing House"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
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
  - [[Clearing]] is the post-trade process bridging [[Trade Execution]] and [[Settlement]], performed by the [[Clearing House]] and underpinning [[Financial Market Infrastructure]] and [[Risk Management]].
- ### Overview
  - Post-trade confirmation, matching and obligation management.
  - A clearing house often novates trades and nets exposures.
  - Manages counterparty credit risk via margin and default funds.
- ### Mechanisms
  - Trade matching and confirmation after execution.
  - Novation and central counterparty interposition.
  - Multilateral netting of obligations.
  - Margining, collateral and default management.
- ### Applications
  - Securities and derivatives post-trade processing.
  - Payment and interbank clearing systems.
  - Central counterparty risk mutualisation.
  - Reduction of settlement and systemic risk.
- ### Relationships
  - hasPart:: [[Trade Execution]]
  - requires:: [[Clearing House]]
  - requires:: [[Risk Management]]
  - contrastsWith:: [[Settlement]]
  - partOf:: [[Financial Market Infrastructure]]
  - uses:: [[Clearing House]]
  - enables:: [[Settlement]]
  - enables:: [[Trade Execution]]
  - supports:: [[Payment Processing]]
  - supports:: [[Capital Markets]]
  - relatedTo:: [[Custody]]
  - relatedTo:: [[Payment System]]
  - dependsOn:: [[Clearing House]]
  - bridgesTo:: [[Financial Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
