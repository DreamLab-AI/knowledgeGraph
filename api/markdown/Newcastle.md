public:: true

# Newcastle
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:03cc80ce2d992ab6b2b96a1c42d15579dc651d952501943cb8f6e613eed1855b",
  "@type": "Page",
  "vc:slug": "newcastle",
  "title": "Newcastle",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-economy",
      "vc:label": "Digital Economy"
    },
    {
      "@id": "urn:visionflow:linked:northern-powerhouse",
      "vc:label": "Northern Powerhouse"
    },
    {
      "@id": "urn:visionflow:linked:manchester",
      "vc:label": "Manchester"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Newcastle"
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
  "@id": "urn:ngm:class:newcastle",
  "@type": "Class",
  "label": "Newcastle",
  "definition": "A city in North East England with growing digital, data science, and life sciences sectors anchored by its universities.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:entity",
      "label": "Entity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:newcastle:1f73a018e9a6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:03cc80ce2d992ab6b2b96a1c42d15579dc651d952501943cb8f6e613eed1855b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Economy]]",
      "resolved": "urn:visionflow:linked:digital-economy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Northern Powerhouse]]",
      "resolved": "urn:visionflow:linked:northern-powerhouse",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manchester]]",
      "resolved": "urn:visionflow:linked:manchester",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
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
  - A city in North East England with growing digital, data science, and life sciences sectors anchored by its universities.

- ### Semantic Classification
  - owl-class:: general:Newcastle
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Northern Powerhouse]], [[Manchester]]
  - enables:: [[Digital Economy]]

- ### Content
  - Newcastle is a city in North East England with a developing technology and data-driven economy, supported by research universities active in computing and life sciences. It hosts digital and software firms alongside public-sector technology activity.
  - It is part of the Northern Powerhouse, the policy initiative aimed at strengthening and connecting the economies of northern England.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
