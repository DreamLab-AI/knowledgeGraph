public:: true

# Real-Time Gross Settlement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:real-time-gross-settlement",
  "@type": "Page",
  "title": "Real-Time Gross Settlement",
  "vc:slug": "real-time-gross-settlement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-gross-settlement",
  "@type": "Class",
  "label": "Real-Time Gross Settlement",
  "definition": "Real-time gross settlement (RTGS) is an interbank payment mechanism in which funds transfers between institutions are settled individually and irrevocably, transaction by transaction, in central-bank money as each instruction is processed. Because settlement is gross rather than netted and occurs continuously throughout the day, RTGS eliminates settlement risk between counterparties at the moment of transfer. National central banks typically operate RTGS systems for large-value, time-critical payments.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-system",
      "label": "Payment System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trustless-settlement",
        "label": "Trustless Settlement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-services",
        "label": "Financial Services"
      },
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:swift",
        "label": "SWIFT"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:financial-infrastructure",
        "label": "Financial Infrastructure"
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
  - An interbank [[Payment System]] that settles each transfer individually and irrevocably in central-bank money.
  - Operated by the [[Central Bank]] for large-value, time-critical payments.
  - Removes settlement risk by making each [[Transaction]] final on processing.
- ### Overview
  - RTGS contrasts with deferred net settlement, where obligations accumulate and net at intervals.
  - Gross, continuous settlement means no build-up of bilateral exposure between banks.
  - Participants must manage intraday [[Liquidity]] to fund payments as they fall due.
  - RTGS underpins the plumbing of national and cross-border high-value payments.
- ### Mechanisms
  - Each payment instruction is checked for funds and settled one at a time.
  - Settlement occurs across accounts banks hold at the central bank.
  - Intraday credit and liquidity-saving mechanisms smooth peak demand.
  - Queuing and gridlock resolution handle interdependent payments.
- ### Applications
  - Large-value wholesale payments between financial institutions.
  - Settlement legs of securities and foreign-exchange transactions.
  - Final settlement of retail and net settlement systems.
- ### Relationships
  - partOf:: [[Financial Infrastructure]]
  - hasPart:: [[Central Bank]]
  - dependsOn:: [[Central Bank]]
  - implements:: [[Transaction]]
  - enables:: [[Trustless Settlement]]
  - requires:: [[Liquidity]]
  - supports:: [[Financial Services]]
  - supports:: [[Financial Infrastructure]]
  - bridgesTo:: [[SWIFT]]
  - contrastsWith:: [[Blockchain]]
  - relatedTo:: [[Payment System]]
  - relatedTo:: [[Financial Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
