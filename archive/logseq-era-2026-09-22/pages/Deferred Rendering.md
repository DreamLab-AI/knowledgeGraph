public:: true

# Deferred Rendering

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:deferred-rendering",
  "@type": "Page",
  "title": "Deferred Rendering",
  "vc:slug": "deferred-rendering",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:deferred-rendering",
  "@type": "Class",
  "label": "Deferred Rendering",
  "definition": "Deferred rendering is a real-time shading technique that separates geometry processing from lighting by first rasterising scene attributes into a set of screen-space buffers, then computing lighting in a second pass over those buffers. By storing per-pixel position, normal, albedo, and material data in a geometry buffer, lighting cost becomes independent of scene complexity and scales with the number of lights instead. This decoupling makes it efficient to render scenes with many dynamic light sources.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-technique",
      "label": "Rendering Technique"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:rendering-technique",
        "label": "Rendering Technique"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:global-illumination",
        "label": "Global Illumination"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Rendering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Rendering"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-technique",
        "label": "Rendering Technique"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Deferred rendering is a real-time shading technique that separates geometry processing from lighting by first rasterising scene attributes into a set of screen-space buffers, then computing lighting in a second pass over those buffers. By storing per-pixel position, normal, albedo, and material data in a geometry buffer, lighting cost becomes independent of scene complexity and scales with the number of lights instead. This decoupling makes it efficient to render scenes with many dynamic light sources.
  - Related core concepts: [[Rendering Technique]] [[Real-Time Rendering]] [[Graphics Pipeline]] [[Shader]] [[GPU Rendering]]
- ### Overview
  - Deferred rendering was developed to overcome the quadratic cost of forward shading when many lights illuminate a scene, where each object must be shaded against every light. By deferring lighting to a screen-space pass, the technique evaluates each pixel exactly once per contributing light. The trade-offs include higher memory bandwidth for the geometry buffer and difficulty handling transparency and hardware anti-aliasing.
- ### Mechanisms
  - Geometry pass writes surface attributes into a multi-target geometry buffer
  - Lighting pass reads the buffer and accumulates contributions per light in screen space
  - Lighting cost scales with light count rather than geometric complexity
  - Transparency typically requires a separate forward-rendered pass
  - Bandwidth pressure from the fat geometry buffer is the main performance constraint
- ### Applications
  - Real-time games and engines rendering many dynamic point and spot lights
  - Screen-space effects such as ambient occlusion and reflections
  - Approximations of global illumination in interactive frame budgets
  - High-fidelity spatial computing and virtual production scenes
- ### Relationships
  - relatedTo:: [[Real-Time Rendering]]
  - relatedTo:: [[Rasterization]]
  - relatedTo:: [[Graphics Pipeline]]
  - contrastsWith:: [[Rasterization]]
  - implements:: [[Rendering Technique]]
  - enables:: [[Global Illumination]]
  - uses:: [[Shader]]
  - uses:: [[Rasterization]]
  - uses:: [[GPU Rendering]]
  - requires:: [[GPU Rendering]]
  - requires:: [[Graphics Pipeline]]
  - supports:: [[Real-Time Rendering]]
  - partOf:: [[Rendering Technique]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
