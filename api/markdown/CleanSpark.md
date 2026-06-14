public:: true

# CleanSpark
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2d98624ff4e8b975cf838196055bb00a4a2111127a6e7904ad618e1c3976ac6c",
  "@type": "Page",
  "vc:slug": "clean-spark",
  "title": "CleanSpark",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:mining",
      "vc:label": "Mining"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CleanSpark"
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
  "@id": "urn:ngm:class:clean-spark",
  "@type": "Class",
  "label": "CleanSpark",
  "definition": "A publicly traded company that operates Bitcoin mining facilities in the United States, focusing on the use of low-cost and lower-carbon energy sources.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
      "label": "Bitcoin Mining"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:clean-spark:2ebbc856e4b7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2d98624ff4e8b975cf838196055bb00a4a2111127a6e7904ad618e1c3976ac6c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mining]]",
      "resolved": "urn:visionflow:linked:mining",
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
  - A publicly traded company that operates Bitcoin mining facilities in the United States, focusing on the use of low-cost and lower-carbon energy sources.

- ### Semantic Classification
  - owl-class:: blockchain:CleanSpark
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Mining]]
  - bridges-to:: [[Mining]]
  - requires:: [[Bitcoin Mining]], [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - CleanSpark is a United States company that builds and operates data centres for Bitcoin mining. It acquires and runs large fleets of specialised mining hardware and manages energy procurement, often emphasising access to low-cost and lower-carbon power.
  - As a listed firm, its operations illustrate the industrialisation of Bitcoin mining, in which competitive returns depend on efficient hardware, scale and energy strategy relative to the network difficulty and the Bitcoin price.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
