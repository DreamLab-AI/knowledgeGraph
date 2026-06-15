public:: true

# Shader Language
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a84994e7b58f7b41038b9bf2110f46cf81ad91b6d770c73afc1e0c030ad67e1a",
  "@type": "Page",
  "vc:slug": "shader-language",
  "title": "Shader Language",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9139"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shader Language"
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
  "@id": "urn:ngm:class:shader-language",
  "@type": "Class",
  "label": "Shader Language",
  "definition": "A Shader Language is a domain-specific programming language designed to express GPU-executable programs that control one or more programmable stages of a graphics or compute pipeline. Shader languages provide specialised type systems encompassing vectors, matrices, samplers, and atomic types, while deliberately restricting features incompatible with massively parallel execution such as dynamic memory allocation and unbounded recursion. Major production languages include GLSL (OpenGL Shading Language) for OpenGL and WebGL, HLSL (High-Level Shading Language) for DirectX, Metal Shading Language for Apple silicon and macOS/iOS platforms, and the emerging WGSL (WebGPU Shading Language) for the web-native WebGPU API. Modern shader toolchains commonly cross-compile to the hardware-agnostic intermediate representation SPIR-V, enabling portability across vendors and runtime environments.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
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
        "label": "Fragment Shader"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:geometry-shader",
        "label": "Geometry Shader"
      },
      {
        "@id": "urn:ngm:class:tessellation-shader",
        "label": "Tessellation Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:shader-compiler",
        "label": "Shader Compiler"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      },
      {
        "@id": "urn:ngm:class:procedural-generation",
        "label": "Procedural Generation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:spirv",
        "label": "SPIR-V"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:glsl",
        "label": "GLSL"
      },
      {
        "@id": "urn:ngm:class:hlsl",
        "label": "HLSL"
      },
      {
        "@id": "urn:ngm:class:wgsl",
        "label": "WGSL"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:programming-language",
        "label": "General-Purpose Programming Language"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-accelerator",
        "label": "Machine Learning Accelerator"
      },
      {
        "@id": "urn:ngm:class:neural-rendering",
        "label": "Neural Rendering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graphics-processing-unit",
        "label": "Graphics Processing Unit"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:shading-language",
      "label": "Shading Language"
    },
    {
      "@id": "urn:ngm:class:gpu-shader-language",
      "label": "GPU Shader Language"
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
  "@id": "urn:visionflow:annotation:link-resolutions:shader-language:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a84994e7b58f7b41038b9bf2110f46cf81ad91b6d770c73afc1e0c030ad67e1a"
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
  - A **Shader Language** is a [[Domain-Specific Language]] designed to express programs executed directly on a [[GPU]], controlling one or more programmable stages of a [[Rendering Pipeline]]. Shader languages couple a C-family syntax with specialised type systems — vectors, matrices, samplers, atomic counters — while deliberately excluding features incompatible with massively parallel execution such as dynamic memory allocation and unbounded recursion. They form the programmatic bridge between high-level artist or developer intent and the low-level [[Graphics API]] that drives the hardware, and their compilation output is increasingly expressed as the portable intermediate representation [[SPIR-V]] for deployment across heterogeneous hardware.

- ### Overview
  - Shader languages emerged in the early 2000s as graphics hardware evolved from fixed-function pipelines to fully programmable ones. [[OpenGL]] introduced the [[GLSL]] (OpenGL Shading Language) specification with version 2.0 (2004), giving developers explicit control over vertex transformation and fragment colouring. Microsoft simultaneously developed [[HLSL]] (High-Level Shading Language) as the shader lingua franca for [[DirectX]]. Both languages remain the dominant choices for desktop and console [[Real-Time Rendering]] today.
  - The significance of shader languages extends well beyond aesthetics. They are the primary mechanism by which rendering quality features — [[Physically Based Rendering]], global illumination, shadow algorithms, post-processing effects — are specified and iterated upon in production. More recently, [[Compute Shader]] stages have extended shader languages into general [[GPU Compute]] territory, overlapping significantly with [[GPGPU]] workloads once reserved for [[OpenCL C]] or [[CUDA]].
  - Web graphics added a further tier: [[WebGL]] adopted a restricted GLSL ES subset, and the successor [[WebGPU]] API defines [[WGSL]] (WebGPU Shading Language) as its native shader language — a more formally specified, safer language designed with the memory-safety requirements of browser sandboxing in mind.
  - The rise of [[SPIR-V]] as a vendor-neutral IR has decoupled shader authoring from the target runtime: tools like glslang, DXC, and Naga can translate GLSL, HLSL, or WGSL into SPIR-V, which [[Vulkan]], [[OpenCL]], and WebGPU drivers then consume.

- ### Key Components
  - **Programmable Pipeline Stages** — each stage corresponds to a distinct shader type:
    - [[Vertex Shader]] — transforms per-vertex attributes (position, normal, UV) from object space into clip space; executes once per input vertex.
    - [[Fragment Shader]] (also called Pixel Shader in HLSL nomenclature) — computes the final colour of a rasterised fragment; primary home of lighting and texturing logic.
    - [[Geometry Shader]] — optional stage that receives assembled primitives and can emit new geometry; used for effects like particle expansion, shadow-volume extrusion.
    - [[Tessellation Shader]] — subdivides coarse surface patches into finer geometry at runtime; enables level-of-detail and smooth curved surfaces.
    - [[Compute Shader]] — executes arbitrary parallel workloads without fixed pipeline wiring; key to [[GPU Compute]], simulation, and machine-learning inference on the GPU.
    - [[Mesh Shader]] — newer NVIDIA/DirectX 12 Ultimate stage that replaces vertex + geometry with a flexible meshlet-based model for efficient culling of large scenes.
    - [[Ray Generation Shader]], closest-hit, any-hit, and miss shaders — introduced by [[DirectX Raytracing]] (DXR) and [[Vulkan Ray Tracing]] to support [[Ray Tracing]] pipelines.
  - **Type System** — built-in scalar (float, int, bool), vector (vec2/vec3/vec4 in GLSL; float2/float3/float4 in HLSL), matrix (mat4/float4x4), and sampler types (sampler2D, TextureCube). Structured buffer and storage image types appear in compute contexts.
  - **Built-in Functions** — trigonometric (sin, cos, atan), linear-algebraic (dot, cross, normalize, reflect, refract), texture-sampling (texture, textureLod, textureGather), and derivative (dFdx, dFdy) intrinsics expose GPU-native operations unavailable in software at comparable performance.
  - **Qualifier / Attribute System** — in/out/uniform/varying qualifiers control data flow between CPU, pipeline stages, and framebuffer; layout qualifiers specify binding points, descriptor sets, and memory layout (std140, std430).
  - **Preprocessor and Conditionals** — C-style `#define`, `#ifdef`, `#pragma` preprocessors enable [[Shader Permutation]] management (material variants, platform switching).
  - **Intermediate Representation** — [[SPIR-V]] (Standard Portable Intermediate Representation — Vulkan) is the binary IR to which GLSL and HLSL are commonly compiled, enabling offline validation, reflection, and hardware-agnostic distribution.

- ### Applications and Use Cases
  - **Game Engines** — [[Unity]] uses HLSL-like ShaderLab and HLSL via its Scriptable Render Pipeline; [[Unreal Engine]] uses HLSL throughout its material graph. Shader languages are the backbone of every visual effect from ambient occlusion to hair simulation.
  - **Augmented Reality and Virtual Reality** — [[Augmented Reality]] and [[Virtual Reality]] headsets demand low-latency, reprojection-aware rendering. Shader languages implement foveated rendering, time-warp, and lens distortion correction directly on the GPU.
  - **Web and Browser Graphics** — [[WebGL]] shaders (GLSL ES 1.0/3.0) and [[WGSL]] for [[WebGPU]] bring GPU-accelerated visualisations, 3D scenes, and data dashboards to web browsers without plugins.
  - **Scientific Visualisation** — volumetric rendering of medical CT/MRI data, fluid simulation visualisation, and astronomical data rendering all rely on compute and fragment shaders.
  - **Machine Learning Inference** — compute shaders increasingly implement neural network layers (convolutions, attention) for on-device inference, especially on mobile where dedicated ML hardware may be absent. This is a key bridge to [[Neural Rendering]] and [[Machine Learning Accelerator]] workloads.
  - **Post-Processing Effects** — screen-space ambient occlusion (SSAO), depth of field, bloom, tone-mapping, and anti-aliasing (TAA, DLSS-like upsampling) are implemented entirely as fragment or compute shaders operating on framebuffer textures.
  - **Procedural Content** — [[Procedural Generation]] of terrain heightmaps, noise textures, and animated materials (lava, water, clouds) is authored in shader languages, executing at frame-rate on the GPU.
  - **General GPU Compute** — through [[Compute Shader]], shader languages overlap with [[GPGPU]] for physics simulation, cloth, fluid dynamics, and collision detection — tasks that benefit from the GPU's massive parallelism without requiring a specialised CUDA/OpenCL setup.

- ### Relationships
  - hasPart:: [[Vertex Shader]]
  - hasPart:: [[Fragment Shader]]
  - hasPart:: [[Compute Shader]]
  - hasPart:: [[Geometry Shader]]
  - hasPart:: [[Tessellation Shader]]
  - partOf:: [[Rendering Pipeline]]
  - requires:: [[GPU]]
  - requires:: [[Graphics API]]
  - requires:: [[Shader Compiler]]
  - enables:: [[Physically Based Rendering]]
  - enables:: [[Real-Time Rendering]]
  - enables:: [[Ray Tracing]]
  - enables:: [[GPU Compute]]
  - enables:: [[Procedural Generation]]
  - dependsOn:: [[SPIR-V]]
  - dependsOn:: [[Parallel Computing]]
  - implements:: [[GLSL]]
  - implements:: [[HLSL]]
  - implements:: [[WGSL]]
  - implements:: [[Metal Shading Language]]
  - supports:: [[WebGPU]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Virtual Reality]]
  - standardizedBy:: [[Khronos Group]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[General-Purpose Programming Language]]
  - contrastsWith:: [[OpenCL C]]
  - bridgesTo:: [[Machine Learning Accelerator]]
  - bridgesTo:: [[Neural Rendering]]
  - relatedTo:: [[Graphics Processing Unit]]
  - relatedTo:: [[Texture Mapping]]

- ### Standards and Context
  - **[[Khronos Group]]** — maintains the GLSL specification (currently GLSL 4.60 for OpenGL 4.6, GLSL ES 3.20 for OpenGL ES/WebGL2) and co-developed SPIR-V as part of the Vulkan ecosystem.
  - **Microsoft** — owns and evolves [[HLSL]] through successive DirectX Shader Model versions (SM 5.1 for DirectX 11/12, SM 6.x adding wave intrinsics, ray tracing, mesh shaders). The DXC (DirectX Shader Compiler, built on LLVM/Clang) is open-source.
  - **Apple** — defines [[Metal Shading Language]] as a superset of C++14 with GPU extensions; it is the exclusive shading interface for Metal on iOS, iPadOS, macOS, and visionOS, meaning all spatial computing on Apple hardware depends on it.
  - **[[W3C]] GPU for the Web CG** — standardises [[WGSL]] as the required shading language for the [[WebGPU]] API. WGSL has stricter memory-safety guarantees than GLSL or HLSL, making it suitable for untrusted web content.
  - **[[SPIR-V]]** (Khronos) — binary intermediate representation serving as the common compilation target for Vulkan, OpenCL 2.1+, and (via translation) WebGPU. Enables offline compilation, shader reflection (automatic pipeline layout inference), and portable distribution of shader libraries.
  - **Shader Model Versioning** — DirectX Shader Models define capability tiers; SM 6.6 (DirectX 12 Ultimate) introduced resource binding, sampler feedback, and mesh/amplification shader tiers aligned with hardware capability.
  - **Cross-compilation Ecosystem** — SPIRV-Cross translates SPIR-V back to GLSL/HLSL/MSL; GLSLANG and DXC compile GLSL and HLSL to SPIR-V; Naga (Rust-native) handles WGSL, GLSL, HLSL, and SPIR-V interoperably for the [[WebGPU]] ecosystem.

- ### Provenance
  - sources:: Khronos GLSL specification; HLSL documentation (Microsoft Learn); W3C WGSL specification; Metal Shading Language Specification (Apple); Real-Time Rendering 4th ed. (Akenine-Möller et al.)
  - updated:: 2026-06-13
