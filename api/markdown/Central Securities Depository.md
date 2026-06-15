public:: true

# Central Securities Depository

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:central-securities-depository",
  "@type": "Page",
  "title": "Central Securities Depository",
  "vc:slug": "central-securities-depository",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:central-securities-depository",
  "@type": "Class",
  "label": "Central Securities Depository",
  "definition": "A central securities depository (CSD) is a financial market infrastructure that holds securities in dematerialised or immobilised form and enables their transfer through book-entry, providing safekeeping and settlement of trades. It maintains the authoritative record of securities ownership and supports the final leg of post-trade processing, often in conjunction with clearing houses. By centralising custody and settlement, a CSD reduces operational risk and is foundational to the integrity of securities markets.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-market-infrastructure",
      "label": "Financial Market Infrastructure"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:financial-market-infrastructure",
      "label": "Financial Market Infrastructure"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:securities-settlement",
        "label": "Securities Settlement"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:settlement",
        "label": "Settlement"
      },
      {
        "@id": "urn:ngm:class:clearing-and-settlement",
        "label": "Clearing And Settlement"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:settlement-finality",
        "label": "Settlement Finality"
      },
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:delivery-versus-payment",
        "label": "Delivery Versus Payment"
      },
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      }
    ],
    "supports": {
      "@id": "urn:ngm:class:settlement",
      "label": "Settlement"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:netting",
        "label": "Netting"
      },
      {
        "@id": "urn:ngm:class:trade-execution",
        "label": "Trade Execution"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    "contrastsWith": {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    "uses": {
      "@id": "urn:ngm:class:settlement",
      "label": "Settlement"
    }
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
  - A [[Central Securities Depository]] is a form of [[Financial Market Infrastructure]] for securities safekeeping.
  - It performs [[Securities Settlement]] and [[Custody]] through book-entry transfer.
  - It depends on [[Settlement]] processes and provides [[Settlement Finality]] for ownership records.
- ### Overview
  - A CSD dematerialises securities, replacing physical certificates with electronic book-entry records of ownership.
  - It settles the securities leg of transactions, typically against payment via delivery-versus-payment mechanisms.
  - CSDs interoperate with clearing houses and payment systems to complete the post-trade lifecycle.
  - Distributed-ledger experiments seek to replicate or replace CSD functions with tokenised securities and on-chain settlement.
- ### Key aspects
  - Book-entry settlement — transfer of ownership by electronic ledger entries rather than physical delivery.
  - Safekeeping and custody — authoritative maintenance of securities accounts and holdings.
  - Notary function — recording and validating the issuance and transfer of securities.
  - Delivery-versus-payment — simultaneous, conditional exchange of securities and cash to eliminate principal risk.
  - Interoperability — links with clearing houses, payment systems, and other CSDs across borders.
- ### Applications
  - National securities markets safekeeping equities and bonds.
  - International CSDs handling Eurobonds and cross-border settlement.
  - Tokenised securities pilots integrating CSD functions with distributed ledgers.
  - Collateral management and corporate-action processing for institutional holders.
- ### Relationships
  - A central securities depository is an instance of financial market infrastructure and contrasts with blockchain-native custody.
  - partOf:: [[Financial Market Infrastructure]]
  - hasPart:: [[Securities Settlement]]
  - hasPart:: [[Custody]]
  - dependsOn:: [[Settlement]]
  - dependsOn:: [[Clearing And Settlement]]
  - requires:: [[Settlement Finality]]
  - requires:: [[Custody]]
  - enables:: [[Delivery Versus Payment]]
  - enables:: [[Atomic Settlement]]
  - supports:: [[Settlement]]
  - relatedTo:: [[Netting]]
  - relatedTo:: [[Trade Execution]]
  - bridgesTo:: [[Blockchain]]
  - contrastsWith:: [[Blockchain]]
  - uses:: [[Settlement]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
