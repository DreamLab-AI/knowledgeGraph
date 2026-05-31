public:: true

# Education
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c639bec6c28f4553ac92e5f9b887d8978ed009a99fee7a4fbab2ff58b48d83b",
  "@type": "Page",
  "vc:slug": "education",
  "title": "Education",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:assistive-technology",
      "vc:label": "Assistive Technology"
    },
    {
      "@id": "urn:visionflow:linked:accessibility",
      "vc:label": "Accessibility"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Education"
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
  "@id": "urn:ngm:class:education",
  "@type": "Class",
  "label": "Education",
  "definition": "Education is the structured process of facilitating learning, knowledge and skills through teaching, study and training. It occurs in formal institutions and through informal and online means.",
  "domain": "education",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:assistive-technology",
        "label": "Assistive Technology"
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
  "@id": "urn:visionflow:annotation:link-resolutions:education:68bf0109c6f8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c639bec6c28f4553ac92e5f9b887d8978ed009a99fee7a4fbab2ff58b48d83b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Assistive Technology]]",
      "resolved": "urn:visionflow:linked:assistive-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessibility]]",
      "resolved": "urn:visionflow:linked:accessibility",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Education is the structured process of facilitating learning, knowledge and skills through teaching, study and training. It occurs in formal institutions and through informal and online means.

- ### Semantic Classification
  - owl-class:: education:Education
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Accessibility]]
  - enables:: [[Assistive Technology]]

- ### Content
  - Education encompasses the deliberate transmission of knowledge, skills, values and habits across formal schooling, vocational training and self-directed study. It is organised through curricula, assessment and pedagogy, and increasingly delivered through digital and online platforms.
  - Beyond individual learning, education serves social and economic functions by developing capabilities and supporting participation in society. Accessibility and assistive technology widen who can take part, while digital tools change how teaching and learning are delivered.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
