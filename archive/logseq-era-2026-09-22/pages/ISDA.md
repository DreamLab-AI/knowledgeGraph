public:: true

# ISDA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de54608fc86ee42965a6f03cff54657e90ee61e637b2b15c43deb7ef07ba448d",
  "@type": "Page",
  "vc:slug": "isda",
  "title": "ISDA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:traditional-finance",
      "vc:label": "Traditional Finance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ISDA"
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
  "@id": "urn:ngm:class:isda",
  "@type": "Class",
  "label": "ISDA",
  "definition": "ISDA, the International Swaps and Derivatives Association, is a trade body that produces standard documentation and definitions for over-the-counter derivatives markets.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:traditional-finance",
      "label": "Traditional Finance"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:isda:8aa33c280218",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:de54608fc86ee42965a6f03cff54657e90ee61e637b2b15c43deb7ef07ba448d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Traditional Finance]]",
      "resolved": "urn:visionflow:linked:traditional-finance",
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
  - ISDA, the International Swaps and Derivatives Association, is a trade body that produces standard documentation and definitions for over-the-counter derivatives markets.

- ### Semantic Classification
  - owl-class:: finance:ISDA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Traditional Finance]]
  - bridges-to:: [[Traditional Finance]]
  - enables:: [[Financial Regulation]]

- ### Content
  - ISDA was founded in 1985 and is best known for the ISDA Master Agreement, a standard contract framework that governs bilateral derivatives transactions and addresses netting, collateral, and default.
  - The association also publishes definitions and protocols that standardise market practice, and it has examined how derivatives documentation applies to digital assets and smart contracts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
