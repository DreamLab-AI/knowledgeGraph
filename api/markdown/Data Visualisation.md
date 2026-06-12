public:: true

# Data Visualisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09297d78947e2e06b79b14ad7ef19dfa14dee5445218ce0d874b2e716298d7eb",
  "@type": "Page",
  "vc:slug": "data-visualisation",
  "title": "Data Visualisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9561"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Visualisation"
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
  "@id": "urn:ngm:class:data-visualisation",
  "@type": "Class",
  "label": "Data Visualisation",
  "definition": "Data Visualisation is the practice of encoding data attributes into perceptual channels—position, colour, size, shape—to enable rapid human comprehension of patterns, anomalies, and relationships. In spatial computing and metaverse contexts, visualisation extends into three-dimensional and immersive modalities including volumetric renders, augmented reality overlays, and real-time analytics dashboards embedded in XR environments. Effective visualisation depends on computer vision pipelines and rendering infrastructure.",
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
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:spatial-computing-paradigm", "label": "Spatial Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:data-access-interface", "label": "Data Access Interface"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-visualisation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09297d78947e2e06b79b14ad7ef19dfa14dee5445218ce0d874b2e716298d7eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
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
  Data Visualisation encodes data attributes into perceptual channels to enable rapid human comprehension of patterns and relationships. In spatial computing and metaverse contexts it extends into immersive three-dimensional and AR-overlay modalities. Effective visualisation depends on computer vision pipelines and data access interfaces to retrieve and render live data streams.

- ### Semantic Classification
  - owl-class:: spatial-computing:DataVisualisation
  - owl-role:: concept

- ### Relationships
  - **uses**: Computer Vision, Spatial Computing (rendering pipelines and spatial substrate for immersive vis)
  - **enables**: Digital Twin (real-time visualisation is a core output of digital twin systems)
  - **dependsOn**: Data Access Interface (requires query interfaces to source live data)
  - **supports**: Augmented Reality, Telecollaboration (in-headset and shared visualisation contexts)

- ### Content

  ## Overview

  Data Visualisation maps data attributes to perceptual channels to support rapid human insight. In XR and metaverse contexts, visualisation is rendered in three-dimensional or augmented reality space, making it integral to digital twin dashboards and collaborative spatial analytics.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
