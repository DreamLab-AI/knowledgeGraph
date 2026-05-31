public:: true

# Manchester
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:51999c9d0c1ae2064b6f55d44a530a7e30bad2c57a23e948b386a4ef1fbdd38f",
  "@type": "Page",
  "vc:slug": "manchester",
  "title": "Manchester",
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
      "@id": "urn:visionflow:linked:leeds",
      "vc:label": "Leeds"
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
      "vc:value": "Manchester"
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
  "@id": "urn:ngm:class:manchester",
  "@type": "Class",
  "label": "Manchester",
  "definition": "A major city in North West England and a centre of the Northern Powerhouse, with growing technology, digital, and research sectors.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:manchester:dffc504aa553",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:51999c9d0c1ae2064b6f55d44a530a7e30bad2c57a23e948b386a4ef1fbdd38f"
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
      "raw": "[[Leeds]]",
      "resolved": "urn:visionflow:linked:leeds",
      "kind": "StubLink"
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
  - A major city in North West England and a centre of the Northern Powerhouse, with growing technology, digital, and research sectors.

- ### Semantic Classification
  - owl-class:: general:Manchester
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Northern Powerhouse]], [[Leeds]]
  - enables:: [[Digital Economy]]

- ### Content
  - Manchester is a city in North West England with a strong universities base and a substantial digital and technology cluster. It hosts data, media, and fintech firms and is a focal point of regional economic regeneration.
  - It is a leading city within the Northern Powerhouse initiative, which seeks to coordinate economic development across the cities of northern England.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
