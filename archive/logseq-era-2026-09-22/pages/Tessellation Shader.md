public:: true

# Tessellation Shader

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:tessellation-shader", "@type": "Page", "title": "Tessellation Shader", "vc:slug": "tessellation-shader", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tessellation-shader",
  "@type": "Class",
  "label": "Tessellation Shader",
  "definition": "A tessellation shader is a programmable stage of the GPU graphics pipeline that subdivides coarse geometric patches into finer primitives at render time, controlling the level of detail of surfaces dynamically. It comprises a control phase that sets tessellation factors and an evaluation phase that positions the generated vertices. By adaptively refining meshes on the GPU, it produces smooth curved surfaces and displacement-mapped detail without inflating the source geometry.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:shader-language",
      "label": "Shader Language"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shader-language",
        "label": "Shader Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level Of Detail"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level Of Detail"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Shader Language]] stage that subdivides geometric patches into finer primitives directly on the [[GPU]].
  - Operates between the vertex and geometry stages of the [[Graphics Pipeline]] to control surface [[Level Of Detail]].
  - Enables smooth curved surfaces and displacement detail used in [[Real-Time Rendering]].
- ### Overview
  - Introduced to offload adaptive subdivision from the CPU to the GPU, reducing geometry transfer and memory.
  - Driven by per-edge and per-interior tessellation factors that scale detail by distance or screen-space error.
  - Distinct from a [[Compute Shader]] in that it is fixed to the geometry-amplification role of the pipeline.
- ### Key aspects
  - Control stage computes tessellation factors that govern how finely each patch is split.
  - Evaluation stage interpolates new vertex attributes and applies displacement.
  - Adaptive factors implement continuous [[Level Of Detail]] to balance fidelity and cost.
  - Often paired with displacement maps to add geometric detail without authoring dense meshes.
- ### Applications
  - Terrain and water rendering with distance-based refinement.
  - Character and organic surface smoothing in interactive engines.
  - Architectural and CAD visualisation requiring crisp curved edges.
- ### Relationships
  - subClassOf:: [[Shader Language]]
  - partOf:: [[Graphics Pipeline]]
  - partOf:: [[Rendering Pipeline]]
  - hasPart:: [[Rasterization]]
  - requires:: [[GPU]]
  - requires:: [[Vertex Shader]]
  - uses:: [[Shader Language]]
  - enables:: [[Level Of Detail]]
  - enables:: [[Real-Time Rendering]]
  - contrastsWith:: [[Compute Shader]]
  - supports:: [[Level Of Detail]]
  - relatedTo:: [[WebGPU]]
  - relatedTo:: [[Rasterization]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
