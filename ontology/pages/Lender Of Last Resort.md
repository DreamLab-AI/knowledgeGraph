public:: true

# Lender Of Last Resort

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:lender-of-last-resort",
  "@type": "Page",
  "title": "Lender Of Last Resort",
  "vc:slug": "lender-of-last-resort",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lender-of-last-resort",
  "@type": "Class",
  "label": "Lender Of Last Resort",
  "definition": "A lender of last resort is an institution, typically a central bank, that provides liquidity to solvent but illiquid financial institutions during a crisis when no other source of funding is available. By standing ready to lend freely against good collateral at a penalty rate, it aims to halt bank runs and contagion and to preserve financial stability. The role embodies Bagehot's principle of lending to solvent firms to stem systemic panic.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank",
      "label": "Central Bank"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:financial-system",
        "label": "Financial System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      },
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
      },
      {
        "@id": "urn:ngm:class:commercial-bank",
        "label": "Commercial Bank"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:systemic-risk",
        "label": "Systemic Risk"
      },
      {
        "@id": "urn:ngm:class:prudential-regulation",
        "label": "Prudential Regulation"
      },
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:quantitative-easing",
        "label": "Quantitative Easing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
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
  - A lender of last resort is the liquidity backstop role of a [[Central Bank]].
  - It lends to solvent but illiquid banks to protect [[Financial Stability]].
  - It supplies [[Liquidity]] to contain [[Systemic Risk]] during panics.
- ### Overview
  - Bagehot's rule: lend freely, against good collateral, at a penalty rate.
  - Targets illiquidity, not insolvency, to distinguish rescue from bailout.
  - Tension with moral hazard, since the backstop can encourage risk-taking.
- ### Mechanisms
  - Discount-window and emergency liquidity facilities.
  - Collateral eligibility and haircut policies.
  - Penalty pricing to discourage routine reliance.
  - Coordination with prudential regulation and deposit insurance.
- ### Applications
  - Containing bank runs and interbank-market freezes.
  - Stabilising financial systems during crises.
  - Backstopping payment and clearing systems.
  - Cross-border swap lines among central banks.
- ### Relationships
  - partOf:: [[Central Bank]]
  - partOf:: [[Financial System]]
  - dependsOn:: [[Central Bank]]
  - dependsOn:: [[Monetary Policy]]
  - enables:: [[Financial Stability]]
  - enables:: [[Liquidity]]
  - supports:: [[Financial Stability]]
  - supports:: [[Commercial Bank]]
  - requires:: [[Liquidity]]
  - relatedTo:: [[Systemic Risk]]
  - relatedTo:: [[Prudential Regulation]]
  - relatedTo:: [[Quantitative Easing]]
  - uses:: [[Monetary Policy]]
  - contrastsWith:: [[Quantitative Easing]]
  - bridgesTo:: [[Finance]]
- ### Provenance
  - updated:: 2026-06-15
