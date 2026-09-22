public:: true

# Vertex Attribute
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:633a24a483119c9a982f1587feee1a3ec8edf38caeb46a2dbd48f0662783b0e2",
  "@type": "Page",
  "vc:slug": "vertex-attribute",
  "title": "Vertex Attribute",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graphics-pipeline",
      "vc:label": "Graphics Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:vertex-shader",
      "vc:label": "Vertex Shader"
    },
    {
      "@id": "urn:visionflow:linked:polygon-mesh",
      "vc:label": "Polygon Mesh"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vertex-attribute",
  "@type": "Class",
  "label": "Vertex Attribute",
  "definition": "A per-vertex data channel attached to the vertices of a polygon mesh — position, normal, tangent, texture coordinates, colour, skinning joint indices and weights — supplied to the vertex shader as its input. Attributes are stored in vertex buffers with a declared layout (location, format, offset, stride), interpolated across triangles during rasterisation for per-pixel shading, and standardised by interchange formats such as glTF, making them the fundamental unit of geometry data throughout the graphics pipeline.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-structure",
    "label": "Data Structure"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:polygon-mesh",
        "label": "Polygon Mesh"
      },
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
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
        "@id": "urn:ngm:class:uv-mapping",
        "label": "UV Mapping"
      },
      {
        "@id": "urn:ngm:class:skeletal-rig",
        "label": "Skeletal Rig"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A per-vertex data channel attached to the vertices of a polygon mesh — position, normal, tangent, texture coordinates, colour, skinning joint indices and weights — supplied to the vertex shader as its input. Attributes are stored in vertex buffers with a declared layout (location, format, offset, stride), interpolated across triangles during rasterisation for per-pixel shading, and standardised by interchange formats such as glTF, making them the fundamental unit of geometry data throughout the graphics pipeline."

- ### Semantic Classification
  - owl-class:: spatial-computing:VertexAttribute
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Data Structure]]
  - part-of:: [[Polygon Mesh]]
  - enables:: [[Vertex Shader]]
  - related-to:: [[Uv Mapping]]

- ### Content

  ## Definition

  A **vertex attribute** is a typed value stored once per vertex of a [[Polygon Mesh]] and delivered to the [[Vertex Shader]] as its input. Position is the only near-universal attribute; real assets carry a bundle of channels: normals and tangents for lighting, one or more texture-coordinate sets from [[Uv Mapping]], vertex colours, and — for animated characters — joint indices and weights binding each vertex to a [[Skeletal Rig]]. Together the attribute channels define everything the GPU knows about a mesh's geometry and how material and deformation systems may act on it.

  On the API side, attributes live in vertex buffers whose layout is declared explicitly: each attribute has a location (matching the shader input), a format (e.g. three 32-bit floats for position, four unsigned bytes for colour), a byte offset, and a stride. Layouts may be **interleaved** (all attributes of a vertex contiguous, cache-friendly for full-vertex reads) or **planar/de-interleaved** (one buffer per attribute, convenient for streaming and position-only passes such as shadow rendering). Vulkan, Direct3D 12, Metal, and WebGPU all expose essentially this model; per-instance attributes reuse the same machinery with a different step rate to implement instancing.

  Downstream in the [[Graphics Pipeline]], the rasteriser interpolates vertex-shader outputs derived from attributes across each triangle with perspective correction, producing the per-fragment values that pixel shaders consume. Because attribute memory is a large share of mesh size, production pipelines compress aggressively: half-precision or 10-bit normals, octahedral normal encoding, quantised UVs, and mesh-level codecs (Draco, meshoptimizer) — with glTF 2.0 standardising attribute semantics (POSITION, NORMAL, TANGENT, TEXCOORD_n, COLOR_n, JOINTS_n, WEIGHTS_n) for interchange.

  ## Technical Details

  - **Semantics in glTF 2.0**: attributes are accessors over buffer views with defined types and normalisation rules; interchange protocols for 3D scene exchange inherit this vocabulary.
  - **Interpolation qualifiers**: flat, smooth (perspective-correct), and noperspective control how attribute-derived varyings cross the triangle; flat shading takes the provoking vertex's value.
  - **Skinning**: JOINTS_0/WEIGHTS_0 pairs (typically 4 influences, weights summing to 1) drive linear-blend or dual-quaternion skinning in the vertex stage.
  - **Modern trends**: bindless and programmable vertex pulling read attributes from storage buffers indexed by vertex ID, and mesh shaders bypass the fixed input assembler entirely — but the per-vertex attribute abstraction survives in the data even where the fixed-function fetch stage does not.

  ## Current Landscape

  - **glTF 2.0** remains the interchange standard, defining attribute semantics (POSITION, NORMAL, TANGENT, TEXCOORD_n, COLOR_n, JOINTS_n, WEIGHTS_n) as accessors over buffer views, with skinning typically using JOINTS_0/WEIGHTS_0 pairs of four influences summing to 1 (Khronos glTF).
  - **Attribute compression** is standardised through glTF extensions: **KHR_draco_mesh_compression** (Draco) and **KHR/EXT_meshopt_compression** (meshoptimizer), the latter combining vertex-cache/fetch reordering with quantised attributes for lossless-decode streaming.
  - In September 2025 Khronos formally added **3D Gaussian splatting** to the glTF ecosystem via the experimental **KHR_gaussian_splatting** extension (with KHR_gaussian_splatting_compression_spz), representing each splat as a POINTS primitive carrying position, rotation (quaternion), scale, opacity, and spherical-harmonic coefficients up to 3rd degree — extending the vertex-attribute model to captured radiance-field assets.
  - Modern GPU APIs (Vulkan, Direct3D 12, Metal, WebGPU) share the declared-layout model (location, format, offset, stride) and increasingly favour **programmable vertex pulling and mesh shaders**, which read attributes from storage buffers and bypass the fixed-function input assembler while preserving the per-vertex data abstraction.

  **Sources**:
  - https://digitalproduction.com/2025/09/02/3d-gaussian-splats-officially-added-to-gltf-standard/
  - https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md
  - https://meshoptimizer.org/
