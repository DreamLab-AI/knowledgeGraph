public:: true

# Ray Marching
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2912f8a2e0cf8ca72da18ea14bfa855484e4435053cd3d6dd979b4b865812e3",
  "@type": "Page",
  "vc:slug": "ray-marching",
  "title": "Ray Marching",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9213"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ray Marching"
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
  "@id": "urn:ngm:class:ray-marching",
  "@type": "Class",
  "label": "Ray Marching",
  "definition": "Ray Marching is a rendering technique in which a ray is incrementally stepped through a scene, evaluating a signed distance field (SDF) at each step to determine proximity to geometry. The step size adapts to the SDF value (sphere tracing), enabling efficient rendering of implicit surfaces, volumetric effects, soft shadows, and ambient occlusion that are impractical with triangle-based rasterisation. It is widely implemented in GPU shader programs and is foundational to procedural 3D scene generation in real-time and offline contexts.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:rendering-technique",
      "label": "Rendering Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:shader", "label": "Shader"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:global-illumination", "label": "Global Illumination"},
      {"@id": "urn:ngm:class:procedural-generation", "label": "Procedural Generation"},
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rasterization", "label": "Rasterization"},
      {"@id": "urn:ngm:class:ray-tracing", "label": "Ray Tracing"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:ray-marching:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2912f8a2e0cf8ca72da18ea14bfa855484e4435053cd3d6dd979b4b865812e3"
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
  - Ray Marching is a rendering technique in which a ray is incrementally stepped through a scene, evaluating a signed distance field (SDF) at each step to determine proximity to geometry. The step size adapts to the SDF value (sphere tracing), enabling efficient rendering of implicit surfaces, volumetric effects, soft shadows, and ambient occlusion that are impractical with triangle-based rasterisation. It is widely implemented in GPU shader programs.

- ### Semantic Classification
  - owl-class:: spatial-computing:RayMarching
  - owl-role:: Concept

- ### Relationships
  - requires:: [[Shader]], [[GPU Compute]]
  - enables:: [[Global Illumination]], [[Procedural Generation]], [[Real-Time Rendering]]
  - contrastsWith:: [[Rasterization]], [[Ray Tracing]]

- ### Content
  # RayMarching
  RayMarching represents a key component in Metaverse infrastructure and technology. Research: RayMarching - signed distance fields, volumetric rendering, SDF rendering
  - https://www.khronos.org/ - Industry standards
  - https://www.w3.org/TR/ - Web standards
  - https://developer.mozilla.org/ - Technical documentation

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
