public:: true

# Integrity Council for the Voluntary Carbon Market
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2f30ab5d91edba23125a806671b595a9f316663525bc84c97c95dcb92a70a3f",
  "@type": "Page",
  "vc:slug": "integrity-council-for-the-voluntary-carbon-market",
  "title": "Integrity Council for the Voluntary Carbon Market",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:carbon-credits",
      "vc:label": "Carbon Credits"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:carbon-offsetting",
      "vc:label": "Carbon Offsetting"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Integrity Council for the Voluntary Carbon Market"
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
  "@id": "urn:ngm:class:integrity-council-for-the-voluntary-carbon-market",
  "@type": "Class",
  "label": "Integrity Council for the Voluntary Carbon Market",
  "definition": "An independent governance body that sets and maintains quality standards for credits traded in the voluntary carbon market.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:voluntary-carbon-market",
      "label": "Voluntary Carbon Market"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:voluntary-carbon-market",
        "label": "Voluntary Carbon Market"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credits"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:integrity-council-for-the-voluntary-carbon-market:9c817385835f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2f30ab5d91edba23125a806671b595a9f316663525bc84c97c95dcb92a70a3f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Credits]]",
      "resolved": "urn:visionflow:linked:carbon-credits",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Offsetting]]",
      "resolved": "urn:visionflow:linked:carbon-offsetting",
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
  - An independent governance body that sets and maintains quality standards for credits traded in the voluntary carbon market.

- ### Semantic Classification
  - owl-class:: governance:IntegrityCouncilfortheVoluntaryCarbonMarket
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Voluntary Carbon Market]]
  - bridges-to:: [[Carbon Offsetting]]
  - requires:: [[Voluntary Carbon Market]]
  - enables:: [[Carbon Credits]], [[Transparency]]

- ### Content
  - The Integrity Council for the Voluntary Carbon Market is an independent body established to set threshold standards for high-integrity carbon credits. It publishes core principles intended to give buyers confidence that credits represent genuine climate benefit.
  - Its assessment framework evaluates crediting programmes and methodologies against criteria covering additionality, permanence, reliable quantification and sound governance. Programmes that meet the standard may label eligible credits accordingly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
