public:: true

# Sheffield
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6b9043fb4251999f2b9d30b73bb33275134fb8bcb7a96f98c6f8f97b2bc0adb5",
  "@type": "Page",
  "vc:slug": "sheffield",
  "title": "Sheffield",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:material-science",
      "vc:label": "Material Science"
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
      "vc:value": "Sheffield"
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
  "@id": "urn:ngm:class:sheffield",
  "@type": "Class",
  "label": "Sheffield",
  "definition": "A city in South Yorkshire, England, historically associated with steel and now with advanced manufacturing, materials research, and engineering.",
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
        "@id": "urn:ngm:class:material-science",
        "label": "Material Science"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sheffield:e5c7c23397fb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6b9043fb4251999f2b9d30b73bb33275134fb8bcb7a96f98c6f8f97b2bc0adb5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Material Science]]",
      "resolved": "urn:visionflow:linked:material-science",
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
  - A city in South Yorkshire, England, historically associated with steel and now with advanced manufacturing, materials research, and engineering.

- ### Semantic Classification
  - owl-class:: general:Sheffield
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - bridges-to:: [[Northern Powerhouse]], [[Manchester]]
  - enables:: [[Material Science]]

- ### Content
  - Sheffield is a city in South Yorkshire with a heritage in steel and metallurgy that continues through advanced manufacturing and materials research. Its universities maintain strong engineering and materials science capabilities.
  - It participates in the Northern Powerhouse initiative and contributes manufacturing and research strengths to the wider northern English economy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
