public:: true

# Walmart
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b24a2d3c9042dbd6a1240fb90404790c793ba09ed5e700dde081251d444ad34",
  "@type": "Page",
  "vc:slug": "walmart",
  "title": "Walmart",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:supply-chain",
      "vc:label": "Supply Chain"
    },
    {
      "@id": "urn:visionflow:linked:food-safety",
      "vc:label": "Food Safety"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Walmart"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:walmart",
  "@type": "Class",
  "label": "Walmart",
  "definition": "Walmart is a multinational retail company operating a chain of stores and e-commerce services, and an early adopter of blockchain-based supply chain traceability.",
  "domain": "supply-chain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supply-chain",
      "label": "Supply Chain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:food-safety",
        "label": "Food Safety"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:walmart:943c3eeb252d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6b24a2d3c9042dbd6a1240fb90404790c793ba09ed5e700dde081251d444ad34"
  },
  "vc:resolutions": [
    {
      "raw": "[[Supply Chain]]",
      "resolved": "urn:visionflow:linked:supply-chain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Food Safety]]",
      "resolved": "urn:visionflow:linked:food-safety",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Walmart is a multinational retail company operating a chain of stores and e-commerce services, and an early adopter of blockchain-based supply chain traceability.

- ### Semantic Classification
  - owl-class:: general:Walmart
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Supply Chain]]
  - bridges-to:: [[Distributed Ledger]]
  - requires:: [[Supply Chain]]
  - enables:: [[Food Safety]]

- ### Content
  - Walmart operates large-scale retail and grocery distribution and manages an extensive supply chain across its store network.
  - The company has used blockchain-based traceability systems to track the provenance of food products through its supply chain.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
