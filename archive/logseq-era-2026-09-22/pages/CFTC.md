public:: true

# CFTC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:615c48fcd216c2581574337850d2b53eaac6e7e056f78424c99a754125a8f775",
  "@type": "Page",
  "vc:slug": "cftc",
  "title": "CFTC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:consumer-protection",
      "vc:label": "Consumer Protection"
    },
    {
      "@id": "urn:visionflow:linked:financial-stability",
      "vc:label": "Financial Stability"
    },
    {
      "@id": "urn:visionflow:linked:securities-regulation",
      "vc:label": "Securities Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CFTC"
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
  "@id": "urn:ngm:class:cftc",
  "@type": "Class",
  "label": "CFTC",
  "definition": "The Commodity Futures Trading Commission, an independent agency of the United States government that regulates the derivatives markets, including futures, swaps and certain options.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cftc:be0d3024d4d2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:615c48fcd216c2581574337850d2b53eaac6e7e056f78424c99a754125a8f775"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consumer Protection]]",
      "resolved": "urn:visionflow:linked:consumer-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Stability]]",
      "resolved": "urn:visionflow:linked:financial-stability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Securities Regulation]]",
      "resolved": "urn:visionflow:linked:securities-regulation",
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
  - The Commodity Futures Trading Commission, an independent agency of the United States government that regulates the derivatives markets, including futures, swaps and certain options.

- ### Semantic Classification
  - owl-class:: governance:CFTC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Securities Regulation]]
  - requires:: [[Financial Regulation]]
  - enables:: [[Consumer Protection]], [[Financial Stability]]

- ### Content
  - The Commodity Futures Trading Commission oversees the United States derivatives markets with the aim of promoting market integrity and protecting participants from fraud and manipulation. Its remit covers futures, options on futures and swaps.
  - The agency sets rules for registered intermediaries and trading venues and conducts surveillance and enforcement. It has periodically addressed how existing derivatives rules apply to digital asset products that fall within its jurisdiction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
