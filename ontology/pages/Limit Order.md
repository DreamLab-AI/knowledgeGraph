public:: true

# Limit Order

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:limit-order", "@type": "Page", "title": "Limit Order", "vc:slug": "limit-order", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:limit-order",
  "@type": "Class",
  "label": "Limit Order",
  "definition": "A limit order is an instruction to buy or sell an asset at a specified price or better, remaining unfilled until the market reaches that price rather than executing immediately at the prevailing market price. It rests in the order book alongside other resting orders, contributing to displayed liquidity and price discovery until it is filled, cancelled or expires. Market makers use limit orders on both sides of the book to earn the bid-ask spread while managing inventory risk.",
  "domain": "finance",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:order-book",
      "label": "Order Book"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:market-making",
        "label": "Market Making"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:order-book",
        "label": "Order Book"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A limit order is an instruction to buy or sell an asset at a specified price or better, remaining unfilled until the market reaches that price rather than executing immediately at the prevailing market price. It rests in the order book alongside other resting orders, contributing to displayed liquidity and price discovery until it is filled, cancelled or expires. Market makers use limit orders on both sides of the book to earn the bid-ask spread while managing inventory risk.
- ### Relationships
	- enables:: [[Market Making]]
	- partOf:: [[Order Book]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
