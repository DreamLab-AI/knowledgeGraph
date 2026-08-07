public:: true

# Traditional Securities

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:traditional-securities",
  "@type": "Page",
  "title": "Traditional Securities",
  "vc:slug": "traditional-securities",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:traditional-securities",
  "@type": "Class",
  "label": "Traditional Securities",
  "definition": "Traditional Securities are conventional financial instruments such as equities, bonds and fund units that are issued, held and transferred through established centralised market infrastructure including exchanges, central securities depositories and custodians. They represent legal claims on assets or income and are governed by long-standing securities regulation. In blockchain discourse they form the baseline against which tokenised and on-chain security tokens are compared.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:financial-instruments",
      "label": "Financial Instruments"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-conformance",
        "label": "Regulatory Conformance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      },
      {
        "@id": "urn:ngm:class:centralised-exchange",
        "label": "Centralised Exchange"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:capital-markets",
        "label": "Capital Markets"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:regulatory-conformance",
        "label": "Regulatory Conformance"
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
  - Traditional Securities are conventional financial instruments such as equities, bonds and fund units that are issued, held and transferred through established centralised market infrastructure including exchanges, central securities depositories and custodians. They represent legal claims on assets or income and are governed by long-standing securities regulation. In blockchain discourse they form the baseline against which tokenised and on-chain security tokens are compared.
  - Related concepts: [[Security Token]] [[Capital Markets]] [[Centralised Exchange]] [[Asset Tokenisation]]
- ### Overview
  - Traditional securities are the incumbent representation of financial claims, settled through layered intermediaries: brokers, exchanges, clearing houses and central securities depositories. Settlement typically follows a multi-day cycle and relies on reconciliation between siloed ledgers. Blockchain-based security tokens propose to compress this stack by representing the same legal claims as programmable on-chain assets, which is why the two are routinely contrasted and bridged.
- ### Key aspects
  - Issuance and transfer via centralised market infrastructure
  - Multi-day settlement cycles and intermediary reconciliation
  - Legal claims on equity, debt or fund interests
  - Heavy reliance on custodians and central depositories
  - Comprehensive securities-law regulatory regime
- ### Mechanisms
  - Issuance and transfer via centralised market infrastructure
  - Multi-day settlement cycles and intermediary reconciliation
  - Legal claims on equity, debt or fund interests
- ### Applications
  - Public equity and bond markets
  - Pension and collective investment vehicles
  - Collateral in lending and repo markets
  - Benchmark for tokenised-asset comparison
  - Bridge endpoints for hybrid on-chain settlement
- ### Relationships
  - subClassOf:: [[Blockchain]]
  - partOf:: [[Capital Markets]]
  - contrastsWith:: [[Security Token]]
  - contrastsWith:: [[Asset Tokenisation]]
  - bridgesTo:: [[Security Token]]
  - bridgesTo:: [[Asset Tokenisation]]
  - dependsOn:: [[Centralised Exchange]]
  - requires:: [[Regulatory Conformance]]
  - relatedTo:: [[Capital Markets]]
  - relatedTo:: [[Centralised Exchange]]
  - supports:: [[Capital Markets]]
  - standardizedBy:: [[Regulatory Conformance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
