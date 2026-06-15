public:: true

# Geometry Shader
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:geometry-shader", "@type": "Page", "title": "Geometry Shader", "vc:slug": "geometry-shader", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:geometry-shader",
  "@type": "Class",
  "label": "Geometry Shader",
  "definition": "A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation. Unlike vertex shaders, it can create or discard primitives, emitting zero or more output primitives for each input. This capability supports effects such as silhouette extrusion, point-sprite expansion and dynamic level-of-detail generation directly on the GPU.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:shader-language",
      "label": "Shader Language"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hlsl",
        "label": "HLSL"
      },
      {
        "@id": "urn:ngm:class:glsl",
        "label": "GLSL"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:graphics-processing-unit",
        "label": "Graphics Processing Unit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:particle-system",
        "label": "Particle System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:visual-effects",
        "label": "Visual Effects"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
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
  - Geometry Shader is rooted in Shader Language and relates to [[Rendering Pipeline]], [[Graphics Pipeline]], [[Rasterization]]. A geometry shader is a programmable stage of the graphics pipeline that operates on whole primitives, such as points, lines or triangles, after vertex processing and before rasterisation.

- ### Overview
  - The geometry shader sits between vertex processing and rasterisation, receiving fully assembled primitives rather than individual vertices.
  - It is unique among shader stages in being able to amplify or cull geometry, emitting a variable number of output primitives per input primitive.
  - Because amplification can be expensive, geometry shaders are often reserved for effects that genuinely require runtime primitive generation.

- ### Mechanisms
  - The stage receives a single primitive plus optional adjacency information as input.
  - Programmable logic may emit new vertices and primitives, transform them, or discard the primitive entirely.
  - Emitted primitives are passed downstream to rasterisation and fragment processing.
  - Output topology and maximum vertex count are declared so the GPU can allocate resources.

- ### Applications
  - Silhouette and shadow-volume extrusion for stylised and shadowed rendering.
  - Expansion of points into camera-facing sprites for particle effects.
  - Dynamic tessellation and level-of-detail adjustment based on view distance.
  - Generation of fur, grass and other procedural geometry on the GPU.

- ### Relationships
  - subClassOf:: [[Shader Language]]
  - hasPart:: [[Graphics Pipeline]]
  - partOf:: [[Rendering Pipeline]]
  - uses:: [[HLSL]]
  - uses:: [[GLSL]]
  - requires:: [[GPU Computing]]
  - requires:: [[Graphics Processing Unit]]
  - enables:: [[Level of Detail]]
  - enables:: [[Particle System]]
  - supports:: [[Real-Time Rendering]]
  - supports:: [[Visual Effects]]
  - contrastsWith:: [[Vertex Shader]]
  - contrastsWith:: [[Compute Shader]]
  - relatedTo:: [[Rasterization]]
  - relatedTo:: [[Graphics API]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
