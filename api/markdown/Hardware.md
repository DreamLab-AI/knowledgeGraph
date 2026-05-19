public:: true

# Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb4a87526c345b70f1f212d7ac96e520838888224cb2023b8a51ddd8d23f6902",
  "@type": "Page",
  "vc:slug": "hardware",
  "title": "Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9624"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hardware"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware",
  "@type": "Class",
  "label": "Hardware",
  "definition": "Hardware is a type of Spatial Computing in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb4a87526c345b70f1f212d7ac96e520838888224cb2023b8a51ddd8d23f6902"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Hardware is a concept within the metaverse domain. Further enrichment pending.
- ### Semantic Classification
  - owl-class:: spatial-computing:Hardware
  - owl-role:: concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  ## Overview
  Hardware represents an abstract concept in the metaverse ontology hierarchy.
  #### Related Concepts
  - [[owl:Thing]]
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
