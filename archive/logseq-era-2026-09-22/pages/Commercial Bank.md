public:: true

# Commercial Bank

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:commercial-bank",
  "@type": "Page",
  "title": "Commercial Bank",
  "vc:slug": "commercial-bank",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commercial-bank",
  "@type": "Class",
  "label": "Commercial Bank",
  "definition": "A commercial bank is a deposit-taking financial institution that accepts deposits from the public, extends loans and provides payment and related financial services. Through lending against a fraction of its deposits it participates in money creation and the transmission of monetary policy. Commercial banks are central to retail and corporate finance and operate under prudential regulation and capital requirements.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monetary-system",
      "label": "Monetary System"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:shadow-banking",
        "label": "Shadow Banking"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:correspondent-banking",
        "label": "Correspondent Banking"
      },
      {
        "@id": "urn:ngm:class:traditional-banking",
        "label": "Traditional Banking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:monetary-system",
        "label": "Monetary System"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
      },
      {
        "@id": "urn:ngm:class:liquidity-provision",
        "label": "Liquidity Provision"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:basel-iii",
        "label": "Basel III"
      },
      {
        "@id": "urn:ngm:class:liquidity-coverage-ratio",
        "label": "Liquidity Coverage Ratio"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:monetary-policy-transmission",
        "label": "Monetary Policy Transmission"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-payment-system",
        "label": "Digital Payment System"
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
  - Relates to [[Central Bank]]
  - Relates to [[Monetary System]]
  - Relates to [[Payment System]]
  - Relates to [[Liquidity]]
  - Relates to [[Traditional Banking]]
- ### Overview
  - Commercial banks intermediate between savers and borrowers, transforming short-term deposits into longer-term loans.
  - Lending against fractional reserves expands the money supply and channels central-bank policy into the real economy.
  - They provide deposit accounts, credit, payments, foreign exchange and treasury services.
  - Prudential rules on capital and liquidity constrain risk-taking and protect depositors.
- ### Key aspects
  - **Deposit taking** — Current and savings accounts give the public safe, liquid claims that fund the bank's lending.
  - **Credit creation** — Loans extended against a fraction of deposits create new deposit money in the banking system.
  - **Payments and settlement** — Banks operate accounts and clearing links that move funds between parties domestically and internationally.
  - **Prudential regulation** — Capital, leverage and liquidity standards such as Basel III limit insolvency and run risk.
- ### Applications
  - Retail banking for households: accounts, mortgages and consumer credit.
  - Corporate banking: working-capital facilities, trade finance and cash management.
  - Acting as the operational layer for monetary-policy transmission.
  - Providing the rails for domestic and cross-border payments.
- ### Relationships
  - subClassOf:: [[Monetary System]]
  - contrastsWith:: [[Central Bank]]
  - contrastsWith:: [[Shadow Banking]]
  - hasPart:: [[Payment System]]
  - hasPart:: [[Lending Protocol]]
  - relatedTo:: [[Correspondent Banking]]
  - relatedTo:: [[Traditional Banking]]
  - dependsOn:: [[Monetary System]]
  - dependsOn:: [[Liquidity]]
  - supports:: [[Payment Settlement]]
  - supports:: [[Liquidity Provision]]
  - requires:: [[Basel III]]
  - requires:: [[Liquidity Coverage Ratio]]
  - implements:: [[Monetary Policy Transmission]]
  - uses:: [[Digital Payment System]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
