public:: true

# Leeds
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:910af2fcfebff805bcafcca92b27a4709c1249f35abbc7189fd3926a9ae59598",
  "@type": "Page",
  "vc:slug": "leeds",
  "title": "Leeds",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-technology",
      "vc:label": "Financial Technology"
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
      "vc:value": "Leeds"
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
  "@id": "urn:ngm:class:leeds",
  "@type": "Class",
  "label": "Leeds",
  "definition": "A city in West Yorkshire, England, with a notable financial services, legal, and digital technology sector and a strong research university presence.",
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
        "@id": "urn:ngm:class:financial-technology",
        "label": "Financial Technology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:leeds:121639758d50",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:910af2fcfebff805bcafcca92b27a4709c1249f35abbc7189fd3926a9ae59598"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Technology]]",
      "resolved": "urn:visionflow:linked:financial-technology",
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
  - A city in West Yorkshire, England, with a notable financial services, legal, and digital technology sector and a strong research university presence.

- ### Semantic Classification
  - owl-class:: general:Leeds
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Northern Powerhouse]], [[Manchester]]
  - enables:: [[Financial Technology]]

- ### Content
  - Leeds is a city in West Yorkshire with a large financial and professional services base and a growing digital technology and health-data sector. Its universities support research activity that feeds local innovation.
  - It is one of the principal cities of the Northern Powerhouse, contributing to the cluster of northern English economies seeking coordinated growth.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
