public:: true

# Data Marketplace
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-marketplace",
  "@type": "Page",
  "title": "Data Marketplace",
  "vc:slug": "data-marketplace",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-marketplace",
  "@type": "Class",
  "label": "Data Marketplace",
  "definition": "A data marketplace is a platform on which organisations and individuals discover, buy, sell or exchange datasets and data access rights under defined licensing and pricing terms. It provides discovery, valuation, provenance and settlement mechanisms so that data can be treated as a tradeable asset rather than a siloed internal resource. Data marketplaces range from centralised commercial exchanges to decentralised, blockchain-mediated platforms that use smart contracts for access control and payment.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:marketplace",
      "label": "Marketplace"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-monetisation",
        "label": "Data Monetisation"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - A data marketplace is a platform on which organisations and individuals discover, buy, sell or exchange datasets and data access rights under defined licensing and pricing terms.
  - It is a subclass of [[Marketplace]].
- ### Content
  - A data marketplace is a platform on which organisations and individuals discover, buy, sell or exchange datasets and data access rights under defined licensing and pricing terms. It provides discovery, valuation, provenance and settlement mechanisms so that data can be treated as a tradeable asset rather than a siloed internal resource. Data marketplaces range from centralised commercial exchanges to decentralised, blockchain-mediated platforms that use smart contracts for access control and payment.
