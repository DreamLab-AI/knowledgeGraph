public:: true

# Marketplace
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a9c4880b60fd695d135b73365ceada38deec6f66317cfe56036d90bfd21f444",
  "@type": "Page",
  "vc:slug": "marketplace",
  "title": "Marketplace",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economic-activity",
      "vc:label": "Economic Activity"
    },
    {
      "@id": "urn:visionflow:linked:escrow-system",
      "vc:label": "Escrow System"
    },
    {
      "@id": "urn:visionflow:linked:identity-system",
      "vc:label": "Identity System"
    },
    {
      "@id": "urn:visionflow:linked:oma3-reed-smith",
      "vc:label": "OMA3 + Reed Smith"
    },
    {
      "@id": "urn:visionflow:linked:payment-gateway",
      "vc:label": "Payment Gateway"
    },
    {
      "@id": "urn:visionflow:linked:payment-protocol",
      "vc:label": "Payment Protocol"
    },
    {
      "@id": "urn:visionflow:linked:product-listing",
      "vc:label": "Product Listing"
    },
    {
      "@id": "urn:visionflow:linked:search-and-discovery",
      "vc:label": "Search & Discovery"
    },
    {
      "@id": "urn:visionflow:linked:secure-transaction",
      "vc:label": "Secure Transaction"
    },
    {
      "@id": "urn:visionflow:linked:transaction-engine",
      "vc:label": "Transaction Engine"
    },
    {
      "@id": "urn:visionflow:linked:value-exchange",
      "vc:label": "Value Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-registry",
      "vc:label": "Asset Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-trading",
      "vc:label": "Asset Trading"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:metadata-standard",
      "vc:label": "Metadata Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "Virtual Economy"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20266"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Marketplace"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:marketplace",
  "@type": "Class",
  "label": "Marketplace",
  "definition": "Digital platform enabling discovery, exchange, and transaction of virtual goods, services, and assets within or across metaverse systems through listing, escrow, and reputation mechanisms.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:escrow-system",
        "label": "Escrow System"
      },
      {
        "@id": "urn:ngm:class:payment-gateway",
        "label": "Payment Gateway"
      },
      {
        "@id": "urn:ngm:class:product-listing",
        "label": "Product Listing"
      },
      {
        "@id": "urn:ngm:class:search-and-discovery",
        "label": "Search & Discovery"
      },
      {
        "@id": "urn:ngm:class:transaction-engine",
        "label": "Transaction Engine"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-systems",
        "label": "Identity Systems"
      },
      {
        "@id": "urn:ngm:class:asset-registry",
        "label": "Asset Registry"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:economic-activity",
        "label": "Economic Activity"
      },
      {
        "@id": "urn:ngm:class:secure-transaction",
        "label": "Secure Transaction"
      },
      {
        "@id": "urn:ngm:class:value-exchange",
        "label": "Value Exchange"
      },
      {
        "@id": "urn:ngm:class:asset-trading",
        "label": "Asset Trading"
      },
      {
        "@id": "urn:ngm:class:price-discovery",
        "label": "Price Discovery"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:virtual-economy",
        "label": "Virtual Economy"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:marketplace:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a9c4880b60fd695d135b73365ceada38deec6f66317cfe56036d90bfd21f444"
  },
  "vc:resolutions": [
    {
      "raw": "[[Economic Activity]]",
      "resolved": "urn:visionflow:linked:economic-activity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Escrow System]]",
      "resolved": "urn:visionflow:linked:escrow-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity System]]",
      "resolved": "urn:visionflow:linked:identity-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[OMA3 + Reed Smith]]",
      "resolved": "urn:visionflow:linked:oma3-reed-smith",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Gateway]]",
      "resolved": "urn:visionflow:linked:payment-gateway",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Protocol]]",
      "resolved": "urn:visionflow:linked:payment-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Product Listing]]",
      "resolved": "urn:visionflow:linked:product-listing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Search & Discovery]]",
      "resolved": "urn:visionflow:linked:search-and-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Transaction]]",
      "resolved": "urn:visionflow:linked:secure-transaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Engine]]",
      "resolved": "urn:visionflow:linked:transaction-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Value Exchange]]",
      "resolved": "urn:visionflow:linked:value-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Registry]]",
      "resolved": "urn:visionflow:owl:class:asset-registry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Trading]]",
      "resolved": "urn:visionflow:owl:class:asset-trading",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metadata Standard]]",
      "resolved": "urn:visionflow:owl:class:metadata-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:owl:class:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation System]]",
      "resolved": "urn:visionflow:owl:class:reputation-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Economy]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Digital platform enabling discovery, exchange, and transaction of virtual goods, services, and assets within or across metaverse systems through listing, escrow, and reputation mechanisms.
- ### Semantic Classification
  - owl-class:: spatial-computing:Marketplace
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]], [[ApplicationLayer]]
- ### Relationships
  - has-part:: [[Product Listing]], [[Transaction Engine]], [[Escrow System]], [[Reputation System]], [[Search & Discovery]], [[Payment Gateway]]
  - is-part-of:: [[Virtual Economy]]
  - requires:: [[Digital Wallet]], [[Smart Contract]], [[Identity System]], [[Asset Registry]]
  - enables:: [[Asset Trading]], [[Price Discovery]], [[Secure Transaction]], [[Economic Activity]], [[Value Exchange]]
  - depends-on:: [[Blockchain]], [[Payment Protocol]], [[Metadata Standard]]
- ### Content
  Marketplace — content pending enrichment.
- ### Provenance
  - sources:: [[OMA3 + Reed Smith]]
  - migration-date:: 2026-04-26T00:00:00Z
