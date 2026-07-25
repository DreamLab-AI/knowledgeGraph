public:: true

# Shader
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cfafee664f3b7157e4e690e71e6bc44b4f023388b09e5e5d73af7d6a3988ec65",
  "@type": "Page",
  "vc:slug": "shader",
  "title": "Shader",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9138"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shader"
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
  "@id": "urn:ngm:class:shader",
  "@type": "Class",
  "label": "Shader",
  "definition": "A shader is a programmable GPU program that replaces fixed-function rendering pipeline stages, executing artist-authored or engine-generated algorithms in parallel across thousands of GPU threads to determine vertex positions, surface colour, lighting, and post-process effects. Shader types include vertex, tessellation control, tessellation evaluation, geometry, fragment (pixel), mesh, ray-generation, and compute shaders, each targeting a distinct stage of the GPU execution pipeline. Written in high-level shading languages such as GLSL, HLSL, Metal Shading Language, or WGSL, shaders are compiled to hardware-specific bytecode and scheduled by the GPU driver onto shader processor cores. In the context of spatial computing, shaders are the fundamental mechanism through which all real-time visual content is generated for head-mounted displays, AR overlays, and immersive 3D environments.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gpu-program",
      "label": "GPU Program"
    },
    {
      "@id": "urn:ngm:class:shading-program",
      "label": "Shading Program"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:vertex-shader",
        "label": "Vertex Shader"
      },
      {
        "@id": "urn:ngm:class:pixel-shader",
        "label": "Pixel Shader"
      },
      {
        "@id": "urn:ngm:class:geometry-shader",
        "label": "Geometry Shader"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:tessellation-shader",
        "label": "Tessellation Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graphics-processing-unit",
        "label": "Graphics Processing Unit"
      },
      {
        "@id": "urn:ngm:class:shader-language",
        "label": "Shader Language"
      },
      {
        "@id": "urn:ngm:class:gpu-driver",
        "label": "GPU Driver"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:post-processing",
        "label": "Post Processing"
      },
      {
        "@id": "urn:ngm:class:procedural-generation",
        "label": "Procedural Generation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:interpolation",
        "label": "Interpolation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rendering-technique",
        "label": "Rendering Technique"
      },
      {
        "@id": "urn:ngm:class:visual-effects",
        "label": "Visual Effects"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Machine Learning Inference"
      },
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shader-language",
        "label": "Shader Language"
      },
      {
        "@id": "urn:ngm:class:material-system",
        "label": "Material System"
      },
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:open-gl",
        "label": "OpenGL"
      },
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shader:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cfafee664f3b7157e4e690e71e6bc44b4f023388b09e5e5d73af7d6a3988ec65"
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
  - A shader is a programmable [[GPU Program]] that replaces the fixed-function stages of the [[Graphics Pipeline]], executing parallel algorithms across thousands of [[Graphics Processing Unit]] cores to compute vertex positions, surface colour, lighting contributions, and screen-space effects. Shaders are authored in high-level [[Shader Language|shading languages]] such as GLSL, HLSL, MSL, or WGSL, compiled to hardware bytecode, and scheduled by the [[GPU Driver]] onto streaming multiprocessors. The transition from a fixed-function pipeline to fully programmable shaders, which occurred through OpenGL 2.0 (2004) and Direct3D 9, fundamentally reshaped [[Real-Time Rendering]] and remains the cornerstone of all modern [[Visual Effects]] and spatial display pipelines.
- ### Overview
  - Shaders sit at the boundary between CPU-driven scene logic and GPU-parallel execution. A host application (game engine, browser, XR runtime) batches geometry and material parameters, submits draw calls, and the GPU driver dispatches shader programs to its many small cores.
  - Unlike traditional CPU code, shader execution is massively parallel: the GPU schedules thousands of lightweight threads (called invocations or lanes), each processing one vertex, one fragment, one texel, or one compute workgroup item simultaneously.
  - Because shaders determine everything visible on screen — from the curvature of a mesh to the colour of a sky — they are the primary creative and technical control surface for artists and rendering engineers alike.
  - In [[Spatial Computing]] and [[Augmented Reality]], shader performance is doubly critical: head-mounted displays require sustained high frame rates (72–120 Hz) at stereoscopic resolution, and shader complexity directly determines whether a scene can render within the per-frame budget.
  - Shaders also bridge into [[Machine Learning Inference]] and [[Neural Rendering]], where trained models are evaluated inside compute shaders to achieve AI-assisted upscaling (DLSS, FSR, XeSS), denoising of [[Ray Tracing]] output, or fully neural scene reconstruction.
- ### Key Components
  - **Vertex Shader**
    - Transforms per-vertex attributes (position, normal, UV, skinning weights) from object-space to clip-space.
    - Applies [[Skeletal Animation]] skinning matrices, morphing, or procedural displacement.
    - Outputs interpolated varyings consumed by downstream stages.
  - **Tessellation Shaders** (Control + Evaluation)
    - Subdivide coarse meshes into finer triangles on the GPU, driven by view-distance or curvature.
    - Enable adaptive level-of-detail without CPU round-trips.
    - Used in terrain and character rendering within [[Unreal Engine]] and [[Unity]].
  - **Geometry Shader**
    - Receives complete primitives (triangles, lines) and emits new geometry.
    - Applications include single-pass cube-map rendering and particle expansion.
    - Generally replaced by mesh shaders on modern hardware due to limited parallelism.
  - **Fragment (Pixel) Shader**
    - Receives interpolated data for each screen sample and outputs colour and depth.
    - Evaluates lighting models ([[Physically Based Rendering]] BRDFs, Blinn-Phong, subsurface scattering).
    - Samples [[Texture Mapping|textures]], applies normal maps, and accumulates shadow and occlusion terms.
  - **Compute Shader**
    - A general-purpose GPU compute stage outside the rasterisation path.
    - Used for [[Post Processing]] (bloom, tone-mapping, SSAO, TAA), physics simulation, particle systems, and [[Machine Learning Inference]] (inference on neural networks).
    - Exposed via CUDA-like dispatch APIs (Vulkan, Metal, D3D12 compute queues).
  - **Mesh Shader** (NVIDIA Turing / DX12 Ultimate)
    - Replaces the fixed vertex-fetch + geometry shader combination with a flexible two-stage pipeline (amplification + mesh).
    - Enables GPU-driven geometry culling and procedural mesh generation at scale.
  - **Ray Tracing Shaders** (DXR, Vulkan RT, Metal RT)
    - [[Ray Generation Shader]] emits rays; any-hit, closest-hit, miss, and callable shaders handle intersection events.
    - Enable [[Ray Tracing|hardware-accelerated ray tracing]] for reflections, shadows, and global illumination.
- ### Shader Languages
  - **GLSL** (OpenGL Shading Language) — Khronos standard for [[OpenGL]] and [[Vulkan]] (via SPIR-V compilation).
  - **HLSL** (High-Level Shading Language) — Microsoft standard for Direct3D; also cross-compiled via DXC to SPIR-V.
  - **MSL** (Metal Shading Language) — Apple's shading language for [[Metal]] on macOS, iOS, and visionOS.
  - **WGSL** (WebGPU Shading Language) — W3C standard for [[WebGPU]], designed for safety and portability in browser contexts.
  - **SPIR-V** — Binary intermediate representation used by Vulkan and OpenCL; shaders in any language compile to SPIR-V for driver ingestion.
  - Cross-compilation tools (glslang, DXC, Naga, Tint) enable a single shader source to target multiple backends, which is critical for cross-platform [[Spatial Computing]] runtimes.
- ### Applications and Use Cases
  - **Game Rendering** — Every triangle, light source, and particle effect in a modern game is shaped by shaders. Engines like [[Unreal Engine]] expose a [[Material System]] that compiles node graphs into HLSL/GLSL at build time.
  - **XR and Spatial Computing** — [[OpenXR]] runtimes and headset SDKs (Meta Quest, Apple Vision Pro, HoloLens) rely on shaders for compositor layers, foveated rendering, and timewarp reprojection.
  - **Scientific Visualisation** — Volume rendering, molecular visualisation, and fluid-dynamics simulation outputs are rendered via specialised compute and fragment shaders.
  - **Web Graphics** — [[WebGL]] and [[WebGPU]] expose shader programming to web applications, enabling browser-based CAD viewers, data visualisations, and immersive experiences.
  - **AI-Assisted Upscaling** — DLSS (NVIDIA), FSR (AMD), and XeSS (Intel) run neural network inference inside compute shaders to upscale lower-resolution frames with temporal accumulation, reducing rendering cost in [[Real-Time Rendering]].
  - **Neural Rendering** — NeRF (Neural Radiance Field) and Gaussian splatting techniques evaluate neural scene representations inside compute shaders, bridging [[Machine Learning]] and conventional [[Rasterization]].
  - **Post Processing** — Screen-space ambient occlusion, bloom, chromatic aberration, depth-of-field, and colour grading are all fragment or compute shaders applied after the main geometry pass.
  - **Procedural Content** — [[Procedural Generation]] of terrain, clouds, and vegetation often happens entirely on the GPU via vertex displacement and compute shaders, bypassing CPU geometry generation.
- ### Relationships
  - hasPart:: [[Vertex Shader]]
  - hasPart:: [[Pixel Shader]]
  - hasPart:: [[Geometry Shader]]
  - hasPart:: [[Compute Shader]]
  - hasPart:: [[Tessellation Shader]]
  - hasPart:: [[Ray Generation Shader]]
  - partOf:: [[Graphics Pipeline]]
  - requires:: [[Graphics Processing Unit]]
  - requires:: [[Shader Language]]
  - requires:: [[GPU Driver]]
  - enables:: [[Physically Based Rendering]]
  - enables:: [[Ray Tracing]]
  - enables:: [[Post Processing]]
  - enables:: [[Procedural Generation]]
  - uses:: [[Rasterization]]
  - uses:: [[Texture Mapping]]
  - uses:: [[Interpolation]]
  - supports:: [[Rendering Technique]]
  - supports:: [[Visual Effects]]
  - supports:: [[Real-Time Rendering]]
  - supports:: [[Augmented Reality]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[OpenGL ARB]]
  - contrastsWith:: [[Fixed Function Pipeline]]
  - bridgesTo:: [[Machine Learning Inference]]
  - bridgesTo:: [[Neural Rendering]]
  - relatedTo:: [[Material System]]
  - relatedTo:: [[Vulkan]]
  - relatedTo:: [[OpenGL]]
  - relatedTo:: [[WebGPU]]
- ### Standards and Context
  - **Khronos Group** — Maintains [[OpenGL]], [[Vulkan]], SPIR-V, GLSL, and the [[OpenXR]] runtime standard. The GLSL specification is the reference for portable shading language design.
  - **W3C GPU for the Web CG** — Stewards [[WebGPU]] and WGSL, standardising GPU access in browsers; WGSL shaders must pass a safety validator before execution.
  - **Microsoft DirectX** — HLSL is specified as part of the DirectX SDK; the Shader Model versioning (SM 5.1, SM 6.x) tracks hardware capability tiers and unlocks features like ray tracing (SM 6.5) and mesh shaders (SM 6.5).
  - **ISO/IEC** — No formal ISO standard for shaders exists; Khronos and W3C are the de facto standards bodies.
  - **OpenXR** — Defines how XR runtimes consume swapchain images rendered by shaders, specifying colour-space requirements and composition layer formats relevant to [[Spatial Computing]].
  - Shader programs must comply with API versioning and hardware feature levels; a shader using mesh-shader capabilities will not load on hardware predating NVIDIA Turing or AMD RDNA 2.
- ### Provenance
  - sources:: Khronos OpenGL/Vulkan specifications; Microsoft DirectX HLSL reference; W3C WebGPU/WGSL Working Draft; "Real-Time Rendering" (Akenine-Möller et al.); "The Book of Shaders" (Patricio Gonzalez Vivo); NVIDIA DXR and Vulkan RT extensions documentation
  - updated:: 2026-06-13
