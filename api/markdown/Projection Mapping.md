public:: true

# Projection Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:23d28f7ef1caa74ca5f1e57043c5be7e1d8631af9e9008cf415d08264ef4d783",
  "@type": "Page",
  "vc:slug": "projection-mapping",
  "title": "Projection Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9203"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Projection Mapping"
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
  "@id": "urn:ngm:class:projection-mapping",
  "@type": "Class",
  "label": "Projection Mapping",
  "definition": "Projection Mapping is a spatial AR display technique that aligns projected imagery precisely onto three-dimensional physical surfaces, transforming arbitrary geometry into dynamic visual canvases. It requires real-time rendering of geometry-corrected frames, spatial calibration, and surface modelling, enabling immersive installations, virtual production environments, and location-based XR experiences.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:immersive-entertainment", "label": "Immersive Entertainment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:spatial-computing-paradigm", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:ar-technology", "label": "AR Technology"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:projection-mapping:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:23d28f7ef1caa74ca5f1e57043c5be7e1d8631af9e9008cf415d08264ef4d783"
  },
  "vc:resolutions": [],
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
  - Projection Mapping is a spatial AR display technique that aligns projected imagery precisely onto three-dimensional physical surfaces, transforming arbitrary geometry into dynamic visual canvases. It requires real-time rendering of geometry-corrected frames, spatial calibration, and surface modelling, enabling immersive installations, virtual production environments, and location-based XR experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:ProjectionMapping
  - owl-role:: Concept

- ### Relationships
  - uses: [[Real-Time Rendering]], [[Augmented Reality]]
  - enables: [[Immersive Experience]], [[Immersive Entertainment]]
  - relatedTo: [[Spatial Computing Paradigm]], [[AR Technology]]

- ### Content
  # ProjectionMapping
  ProjectionMapping represents a key component in Metaverse infrastructure and technology. Research: ProjectionMapping - spatial AR, surface projection, environment mapping
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
