public:: true

# Occlusion Culling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ba5b6cf41ff1710b6c6fe215cd5fcd7856d4a22fc1bb4029a107bd2b941d1ca8",
  "@type": "Page",
  "vc:slug": "occlusion-culling",
  "title": "Occlusion Culling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9174"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Occlusion Culling"
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
  "@id": "urn:ngm:class:occlusion-culling",
  "@type": "Class",
  "label": "Occlusion Culling",
  "definition": "Occlusion culling is a real-time rendering optimisation technique that determines which scene objects are hidden (occluded) by other geometry from the viewer's current viewpoint and discards them before issuing GPU draw calls. By preventing invisible geometry from traversing the vertex, rasterisation, and fragment shader stages, occlusion culling reduces overdraw and GPU workload, enabling complex scenes with high polygon counts to maintain interactive frame rates. It is a complementary technique to frustum culling, level-of-detail selection, and back-face culling within the broader visibility determination subsystem of a render pipeline. Implementations range from CPU-driven portal and cell systems, to hardware occlusion queries, to GPU-driven indirect rendering with hierarchical Z-buffer occlusion.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:real-time-rendering",
      "label": "Real-Time Rendering"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:render-pipeline",
        "label": "Render Pipeline"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:portal-culling",
        "label": "Portal Culling"
      },
      {
        "@id": "urn:ngm:class:bounding-volume-hierarchy",
        "label": "Bounding Volume Hierarchy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:depth-buffer",
        "label": "Depth Buffer"
      },
      {
        "@id": "urn:ngm:class:spatial-data-structure",
        "label": "Spatial Data Structure"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Virtual Environment"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:open-world-game",
        "label": "Open World Game"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bounding-volume",
        "label": "Bounding Volume"
      },
      {
        "@id": "urn:ngm:class:frustum-culling",
        "label": "Frustum Culling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:frustum-culling",
        "label": "Frustum Culling"
      },
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:spatial-partitioning",
        "label": "Spatial Partitioning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:metaverse-infrastructure",
        "label": "Metaverse Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:visibility-culling",
      "label": "Visibility Culling"
    },
    {
      "@id": "urn:ngm:class:hidden-surface-removal",
      "label": "Hidden Surface Removal"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:occlusion-culling:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ba5b6cf41ff1710b6c6fe215cd5fcd7856d4a22fc1bb4029a107bd2b941d1ca8"
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
  - Occlusion culling is a fundamental [[Real-Time Rendering]] optimisation that prevents geometry invisible to the current viewpoint from consuming [[GPU Compute]] resources. By interrogating a [[Depth Buffer]] or pre-computed [[Potential Visibility Set]], the technique discards fully occluded meshes before they reach the vertex shader, rasteriser, or fragment pipeline stages, complementing [[Frustum Culling]] and [[Back-Face Culling]] within the overall [[Visibility Determination]] subsystem of a [[Render Pipeline]].

- ### Overview
  - **Why it matters**: In architecturally dense scenes — urban environments, indoor levels, or crowded [[Metaverse Infrastructure]] spaces — a naïve renderer submits every object for processing even if walls or large props block the vast majority of the scene from the camera. This wastes GPU time on invisible geometry and causes overdraw on the fragment stage.
  - **Core principle**: Before issuing a draw call for an object, the system tests whether any pixels of that object would survive the depth test against geometry already rendered. If no pixels would pass, the object is culled.
  - **Pipeline placement**: Occlusion culling sits logically after [[Frustum Culling]] (which removes objects outside the view frustum) and before actual draw call submission. It is part of the [[Scene Graph]] traversal and visibility phase.
  - **Scope**: The technique applies to opaque geometry; transparent or alpha-blended objects typically require separate treatment because they must be rendered in depth-sorted order.
  - **Maturity**: Occlusion culling is a mature, production-grade technique with dedicated hardware support in all modern GPUs (via [[Occlusion Query]] APIs) and software implementations in all major game engines and XR runtimes.

- ### Key Mechanisms
  - **[[Frustum Culling]]** — prerequisite step; removes objects outside the view frustum entirely before occlusion tests are applied.
  - **[[Back-Face Culling]]** — removes triangles whose normals face away from the camera; orthogonal to but often combined with occlusion culling.
  - **[[Hierarchical Z-Buffer]] (HZB)** — a mip-chain of depth values derived from the previous frame's [[Depth Buffer]]. Conservative depth bounds of a [[Bounding Volume]] are compared against the coarsest HZB level that fully covers the bounds; objects smaller than a single HZB texel are trivially rejected.
  - **[[Occlusion Query]]** — a GPU API primitive (available in OpenGL, DirectX, Vulkan, Metal) that submits a bounding box and returns a pixel-passed count asynchronously. The CPU reads the result one or more frames later and skips draw calls for objects that returned zero.
  - **[[Portal Culling]]** — subdivides the scene into convex cells connected by portals (doorways, windows). Visibility is computed by clipping the view frustum through portal sequences, making it exact for indoor architectural scenes with axis-aligned rooms.
  - **[[Potential Visibility Set]] (PVS)** — offline precomputation that stores, for each cell of the scene, the set of other cells potentially visible. At runtime, only the current cell's PVS is rendered, enabling zero per-frame CPU or GPU cost for visibility determination.
  - **Software Rasteriser Culling** — the CPU rasterises a low-resolution depth image of large occluder meshes, then tests occludee bounding boxes against this image. Used by engines like Unreal (Hierarchical Occlusion Mesh) and Unity to avoid GPU query latency.
  - **GPU-Driven Indirect Rendering** — combines [[Indirect Rendering]] with compute shader occlusion tests; the GPU itself populates the draw call buffer after culling, eliminating CPU-GPU round trips entirely.
  - **[[Bounding Volume Hierarchy]] (BVH)** — the hierarchical spatial structure most commonly used to accelerate both occlusion tests and [[Collision Detection]]; nodes are tested from root to leaf, pruning branches that fail the occlusion test.

- ### Applications and Use Cases
  - **Game Engines**
    - Unity uses a baked occlusion culling system (Umbra-derived) that precomputes PVS data at build time, combined with dynamic per-frame hardware occlusion queries for moveable objects.
    - Unreal Engine employs hierarchical occlusion meshes (HOM) for precomputed occluder geometry alongside software rasteriser culling and GPU-side visibility in its Nanite virtualised geometry system.
    - Godot exposes rooms-and-portals occlusion and a raster-based occluder system for both 3D and [[Extended Reality]] targets.
  - **[[Extended Reality]] (XR/AR/VR)**
    - In head-mounted displays, occlusion culling is critical because per-eye stereo rendering doubles the draw call budget; even small savings per eye compound across the 72–120 Hz refresh requirement.
    - [[Spatial Computing]] platforms such as Apple Vision Pro and Meta Quest use foveated rendering zones together with occlusion culling to focus detail where the user is looking while culling peripheral geometry aggressively.
    - Passthrough AR requires occlusion culling for virtual objects hidden behind real-world surfaces reconstructed by depth sensors.
  - **[[Digital Twin]] and Simulation**
    - City-scale [[Digital Twin]] platforms (infrastructure monitoring, smart city dashboards) render millions of building elements; occlusion culling combined with [[Level of Detail]] reduces the visible set to a manageable few thousand draw calls.
    - Industrial simulation environments with complex machinery occludes large fractions of the scene, making portal or PVS culling particularly effective.
  - **[[Open World Game]]s and Streaming Worlds**
    - In open worlds without clear indoor/outdoor separations, software rasteriser culling and HZB culling replace portal approaches, dynamically culling terrain patches, foliage, and building interiors.
    - Streaming geometry systems load level-of-detail tiles and use occlusion results to determine which tiles to stream in or evict from GPU memory.
  - **[[Metaverse Infrastructure]]**
    - Shared persistent virtual worlds with high concurrent user populations require aggressive occlusion culling to maintain acceptable frame rates on consumer hardware.
    - Server-side rendering and cloud gaming pipelines apply occlusion culling to reduce encode load on the GPU, which indirectly reduces network bandwidth.

- ### Relationships
  - partOf:: [[Render Pipeline]]
  - partOf:: [[Visibility Determination]]
  - hasPart:: [[Hierarchical Z-Buffer]]
  - hasPart:: [[Occlusion Query]]
  - hasPart:: [[Portal Culling]]
  - hasPart:: [[Bounding Volume Hierarchy]]
  - requires:: [[Depth Buffer]]
  - requires:: [[Spatial Data Structure]]
  - requires:: [[Scene Graph]]
  - enables:: [[Virtual Environment]]
  - enables:: [[Extended Reality]]
  - enables:: [[Digital Twin]]
  - dependsOn:: [[GPU Compute]]
  - dependsOn:: [[Rasterisation]]
  - uses:: [[Bounding Volume]]
  - uses:: [[Frustum Culling]]
  - uses:: [[Potential Visibility Set]]
  - contrastsWith:: [[Back-Face Culling]]
  - contrastsWith:: [[Level of Detail]]
  - relatedTo:: [[Collision Detection]]
  - relatedTo:: [[Draw Call Batching]]
  - relatedTo:: [[Indirect Rendering]]
  - relatedTo:: [[Spatial Partitioning]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Metaverse Infrastructure]]

- ### Standards and Context
  - **Khronos Group** — OpenGL ARB_occlusion_query (2001) standardised hardware occlusion queries; Vulkan exposes `VkQueryPool` with `VK_QUERY_TYPE_OCCLUSION` for the same purpose.
  - **DirectX / HLSL** — DirectX 9 introduced `D3DQUERYTYPE_OCCLUSION`; Direct3D 12 exposes `ID3D12QueryHeap` for binary and sample-count occlusion queries with explicit timeline management.
  - **Metal (Apple)** — `MTLVisibilityResultMode` provides occlusion query support; used extensively in visionOS for [[Spatial Computing]] rendering.
  - **glTF and OpenXR** — [[Extended Reality]] runtimes implementing OpenXR integrate occlusion culling within their compositor layer; individual glTF scenes may embed occluder meshes as extensions.
  - **Umbra 3 / Culling Solutions** — commercial middleware widely adopted in games and simulation for precomputed occlusion; Umbra was acquired by Nvidia, reflecting the strategic importance of culling in GPU-optimised pipelines.
  - **GPU Mesh Shader Pipeline** — modern mesh shader pipelines (DirectX 12 Ultimate, Vulkan Mesh Shaders) move amplification (culling) decisions to the GPU amplification shader stage, unifying occlusion and LOD culling in a single GPU-resident pass.

- ### Technical Considerations
  - **Query latency**: Hardware occlusion queries are asynchronous; results become available one or more frames after the query is issued. Naïve implementations stall the CPU waiting for results, negating the benefit. Production systems typically use results from frame N to cull frame N+2.
  - **Conservative culling**: To avoid popping artefacts, culling systems apply conservative tests — a slight expansion of the bounding volume or a hysteresis counter that requires multiple consecutive invisible frames before culling.
  - **Dynamic objects**: Precomputed PVS and portal approaches target static geometry; dynamic objects (characters, physics objects) must use online methods (HZB, software rasteriser) or be excluded from occlusion culling and rendered always.
  - **Transparency**: Alpha-blended and alpha-tested geometry cannot be early-rejected by depth-based occlusion; these require separate visibility passes or are simply always submitted.
  - **Shadow passes**: Occlusion culling applies separately to shadow map render passes; an object invisible to the camera may still be a shadow caster, requiring a different culling frustum per shadow cascade.
  - **Ray tracing integration**: Hardware ray tracing pipelines (DXR, Vulkan RT) have their own BVH traversal and visibility testing; dedicated rasterisation occlusion culling may be reduced or replaced in fully ray-traced renderers, though hybrid pipelines still apply rasterisation culling to the primary G-buffer pass.

- ### Provenance
  - sources:: Akenine-Möller et al., "Real-Time Rendering" (4th ed.); GPU Gems series; Khronos OpenGL/Vulkan specifications; Unreal Engine and Unity documentation
  - updated:: 2026-06-13
