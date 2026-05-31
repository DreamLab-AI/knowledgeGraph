public:: true

# Strike
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5eb4157094224daa8d1290bae7c28a2580be32028a70a2ba27e44d3f958d5905",
  "@type": "Page",
  "vc:slug": "strike",
  "title": "Strike",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-payments",
      "vc:label": "Cross-Border Payments"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Strike"
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
  "@id": "urn:ngm:class:strike",
  "@type": "Class",
  "label": "Strike",
  "definition": "A financial payments company that uses the Bitcoin Lightning Network to offer instant, low-cost payments and remittances denominated in conventional currency.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-border-payments",
      "label": "Cross-Border Payments"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:strike:7cd58cdd64a3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5eb4157094224daa8d1290bae7c28a2580be32028a70a2ba27e44d3f958d5905"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Border Payments]]",
      "resolved": "urn:visionflow:linked:cross-border-payments",
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
  - A financial payments company that uses the Bitcoin Lightning Network to offer instant, low-cost payments and remittances denominated in conventional currency.

- ### Semantic Classification
  - owl-class:: blockchain:Strike
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cross-Border Payments]]
  - bridges-to:: [[Cross-Border Payments]]
  - requires:: [[Lightning Network]], [[Bitcoin]]

- ### Content
  - Strike is a payments application that routes value over the Bitcoin Lightning Network while presenting balances and transfers in familiar fiat terms. By converting at the edges and settling over Lightning, it provides fast, inexpensive payments and remittances without requiring users to hold or understand Bitcoin directly.
  - Its model demonstrates how the Lightning Network can serve as a settlement layer for cross-border money movement, competing with traditional remittance and correspondent banking channels on speed and cost.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
