public:: true

# Vertex Buffer

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:vertex-buffer",
  "@type": "Page",
  "title": "Vertex Buffer",
  "vc:slug": "vertex-buffer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vertex-buffer",
  "@type": "Class",
  "label": "Vertex Buffer",
  "definition": "A vertex buffer is a region of GPU-accessible memory that stores the attributes of a mesh's vertices, such as positions, normals, texture coordinates and colours, in a contiguous layout for the graphics pipeline to consume. By uploading geometry once and referencing it across many draw calls, vertex buffers minimise CPU-to-GPU transfer and enable high-throughput rendering. They are bound to the input-assembler stage and described by a vertex layout that maps buffer bytes to shader inputs.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rendering-pipeline",
      "label": "Rendering Pipeline"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
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
  - A vertex buffer is a region of GPU-accessible memory that stores the attributes of a mesh's vertices, such as positions, normals, texture coordinates and colours, in a contiguous layout for the graphics pipeline to consume.
  - By uploading geometry once and referencing it across many draw calls, vertex buffers minimise CPU-to-GPU transfer and enable high-throughput rendering.
  - They are bound to the input-assembler stage and described by a vertex layout that maps buffer bytes to shader inputs.
  - Related core concepts: [[Rendering Pipeline]] [[GPU]] [[Vertex Shader]] [[Rasterization]]
- ### Overview
  - Vertex buffers keep geometry resident in GPU memory across frames and draw calls.
  - A separate index buffer often references the vertex buffer to avoid duplicating shared vertices.
  - The vertex layout tells the pipeline how to interpret each vertex's interleaved attributes.
- ### Key aspects
  - Interleaved versus separate attribute layouts and their cache behaviour.
  - Static, dynamic and streaming usage hints for driver-managed memory.
  - Binding to the input assembler and feeding the vertex shader.
  - Pairing with index buffers and instancing for efficient batching.
- ### Applications
  - Real-time game and simulation rendering.
  - AR/VR scene geometry upload.
  - Visualisation of meshes and point clouds.
- ### Relationships
  - requires:: [[GPU]]
  - requires:: [[Rendering Pipeline]]
  - hasPart:: [[Rendering Pipeline]]
  - uses:: [[GPU]]
  - uses:: [[Rasterization]]
  - supports:: [[Vertex Shader]]
  - supports:: [[Rasterization]]
  - partOf:: [[Rendering Pipeline]]
  - enables:: [[Vertex Shader]]
  - relatedTo:: [[Shader]]
  - relatedTo:: [[Computer Graphics]]
  - bridgesTo:: [[Computer Graphics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
