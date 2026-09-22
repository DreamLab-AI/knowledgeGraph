public:: true

# Banking System

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:banking-system",
  "@type": "Page",
  "title": "Banking System",
  "vc:slug": "banking-system",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:banking-system",
  "@type": "Class",
  "label": "Banking System",
  "definition": "An organised network of financial institutions, regulatory bodies, payment infrastructure, and legal frameworks that collectively facilitate the creation, custody, transfer, and lending of money within an economy. A banking system includes central banks, commercial banks, investment banks, and clearing houses, all operating under a body of prudential regulation. It underpins economic activity by providing mechanisms for capital allocation, risk distribution, and monetary policy transmission. Modern banking systems increasingly integrate digital and real-time payment rails.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:finance", "label": "Finance"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:central-bank", "label": "Central Bank"},
      {"@id": "urn:ngm:class:commercial-bank", "label": "Commercial Bank"},
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:clearing-house", "label": "Clearing House"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:monetary-policy", "label": "Monetary Policy"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:capital-allocation", "label": "Capital Allocation"},
      {"@id": "urn:ngm:class:credit-creation", "label": "Credit Creation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-banking", "label": "Open Banking"},
      {"@id": "urn:ngm:class:fintech", "label": "Fintech"},
      {"@id": "urn:ngm:class:digital-currency", "label": "Digital Currency"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:decentralized-finance", "label": "Decentralized Finance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:economic-stability", "label": "Economic Stability"},
      {"@id": "urn:ngm:class:financial-inclusion", "label": "Financial Inclusion"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:basel-framework", "label": "Basel Framework"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
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
  - A [[Banking System]] is the aggregate of institutions, instruments, and rules through which an economy manages [[Capital Allocation]], savings, and credit, anchored by a [[Central Bank]] and governed by [[Financial Regulation]].
  - It interfaces with broader [[Finance]] infrastructure and increasingly interacts with [[Fintech]] and [[Open Banking]] initiatives that unbundle traditional banking services.

- ### Overview
  - Banking systems evolved from early commodity-based deposit institutions to complex networks of fractional-reserve banks operating within international prudential frameworks such as the [[Basel Framework]].
  - Central banks set policy rates, act as lenders of last resort, and oversee systemic risk, while commercial banks originate loans and take deposits from households and businesses.
  - [[Payment System]] networks, clearing houses, and interbank settlement rails enable the daily movement of trillions in value across counterparties.

- ### Key Aspects
  - **Tiered structure** — central bank at apex, commercial banks at the primary tier, correspondent networks at the correspondent tier.
  - **Fractional reserve** — banks hold a fraction of deposits as reserves, amplifying the money supply through lending.
  - **Prudential regulation** — capital adequacy ratios, liquidity coverage, and resolution regimes constrain systemic risk.
  - **Payment infrastructure** — RTGS systems, ACH networks, and card schemes form the transaction backbone.

- ### Applications
  - Corporate treasury management and trade finance.
  - Retail lending, mortgage origination, and deposit taking.
  - Cross-border remittances and correspondent banking.
  - Integration with [[Digital Currency]] experiments such as central bank digital currencies.

- ### Relationships
  - hasPart:: [[Central Bank]]
  - hasPart:: [[Commercial Bank]]
  - hasPart:: [[Payment System]]
  - hasPart:: [[Clearing House]]
  - requires:: [[Financial Regulation]]
  - requires:: [[Monetary Policy]]
  - enables:: [[Capital Allocation]]
  - enables:: [[Credit Creation]]
  - relatedTo:: [[Open Banking]]
  - relatedTo:: [[Fintech]]
  - relatedTo:: [[Digital Currency]]
  - contrastsWith:: [[Decentralized Finance]]
  - supports:: [[Economic Stability]]
  - supports:: [[Financial Inclusion]]
  - standardizedBy:: [[Basel Framework]]
  - dependsOn:: [[Infrastructure]]

- ### Provenance
  - updated:: 2026-06-15
