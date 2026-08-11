public:: true

# Supply Chain Finance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:supply-chain-finance",
  "@type": "Page",
  "title": "Supply Chain Finance",
  "vc:slug": "supply-chain-finance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:supply-chain-finance",
  "@type": "Class",
  "label": "Supply Chain Finance",
  "definition": "Supply chain finance is a set of financing and risk-mitigation techniques that optimise working capital and liquidity across the parties in a supply chain. It typically allows suppliers to receive early payment on approved invoices while buyers extend their payment terms, using the buyer's stronger credit standing to lower financing costs. Blockchain and distributed-ledger implementations add shared visibility, automated settlement and tamper-evident provenance to these flows.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:trade-finance",
      "label": "Trade Finance"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:trade-finance",
        "label": "Trade Finance"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trade-finance-automation",
        "label": "Trade Finance Automation"
      },
      {
        "@id": "urn:ngm:class:procurement",
        "label": "Procurement"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:liquidity-management",
        "label": "Liquidity Management"
      },
      {
        "@id": "urn:ngm:class:supply-chain-visibility",
        "label": "Supply Chain Visibility"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      },
      {
        "@id": "urn:ngm:class:payment-settlement",
        "label": "Payment Settlement"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supply-chain-provenance",
        "label": "Supply Chain Provenance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
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
  - Relates to [[Trade Finance]]
  - Relates to [[Supply Chain]]
  - Relates to [[Liquidity Management]]
  - Relates to [[Distributed Ledger Technology]]
  - Relates to [[Smart Contract]]
- ### Overview
  - Programmes connect buyers, suppliers and financiers around a shared view of approved invoices and purchase orders.
  - Reverse factoring lets suppliers draw early payment at the buyer's lower cost of funds.
  - Blockchain variants record invoice and shipment events on a shared ledger, reducing reconciliation and fraud.
  - Tokenisation of receivables can broaden the pool of financiers and make exposures tradable.
- ### Key aspects
  - **Reverse factoring** — Financiers pay suppliers early against buyer-approved invoices, with the buyer settling at maturity.
  - **Dynamic discounting** — Buyers use surplus cash to settle invoices early in exchange for a discount negotiated with suppliers.
  - **Shared ledger visibility** — A common record of orders, deliveries and approvals reduces disputes and accelerates financing decisions.
  - **Tokenised receivables** — Approved invoices represented as on-chain assets can be transferred and financed by multiple parties.
- ### Applications
  - Manufacturing supply chains seeking to stabilise supplier liquidity.
  - Cross-border trade where letters of credit are costly or slow.
  - Programmes embedding ESG criteria into preferential financing terms.
  - Platforms automating invoice approval and settlement on distributed ledgers.
- ### Relationships
  - subClassOf:: [[Trade Finance]]
  - bridgesTo:: [[Trade Finance]]
  - bridgesTo:: [[Supply Chain]]
  - relatedTo:: [[Trade Finance Automation]]
  - relatedTo:: [[Procurement]]
  - uses:: [[Distributed Ledger Technology]]
  - uses:: [[Smart Contract]]
  - supports:: [[Liquidity Management]]
  - supports:: [[Supply Chain Visibility]]
  - dependsOn:: [[Supply Chain Transparency]]
  - dependsOn:: [[Payment Settlement]]
  - enables:: [[Supply Chain Provenance]]
  - requires:: [[Asset Tokenisation]]
  - partOf:: [[Supply Chain Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
