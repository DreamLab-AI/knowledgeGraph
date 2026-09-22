public:: true

# Shader Compiler

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:shader-compiler",
  "@type": "Page",
  "title": "Shader Compiler",
  "vc:slug": "shader-compiler",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:shader-compiler",
  "@type": "Class",
  "label": "Shader Compiler",
  "definition": "A shader compiler is the toolchain component that translates high-level shading-language source code, such as GLSL or HLSL, into an intermediate representation or the native instruction set executed by a GPU. It performs parsing, optimisation, register allocation, and code generation so that programmable graphics and compute stages run efficiently on diverse hardware. Shader compilation may occur ahead of time or just in time, and its results are frequently cached to avoid costly recompilation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:compiler",
      "label": "Compiler"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:spir-v",
        "label": "SPIR-V"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:spir-v",
        "label": "SPIR-V"
      },
      {
        "@id": "urn:ngm:class:glsl",
        "label": "GLSL"
      },
      {
        "@id": "urn:ngm:class:hlsl",
        "label": "HLSL"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      },
      {
        "@id": "urn:ngm:class:gpu-compute",
        "label": "GPU Compute"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Rendering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
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
- A shader compiler is a [[Compiler]] that translates shading-language source into GPU-executable code.
- It is part of the [[Graphics Pipeline]] and the [[Graphics API]] toolchain.
- It consumes [[GLSL]] or [[HLSL]] and often emits [[SPIR-V]].
- It enables programmable stages including the [[Compute Shader]].
- ### Overview
- Shaders are written in high-level languages that no GPU executes directly, so a compiler bridges source to hardware instructions.
- The compiler parses, optimises, allocates registers, and generates code targeted at a specific GPU architecture or an intermediate representation.
- Modern stacks often compile to a portable intermediate such as SPIR-V, then a driver back-end finalises native code.
- Compilation may be ahead of time during build or just in time at load, with caching to amortise cost.
- ### Mechanisms
- Lexing and parsing of shading-language source.
- Optimisation passes and register allocation.
- Generation of intermediate representation or native ISA.
- Pipeline and shader caching to avoid recompilation stalls.
- ### Applications
- Building graphics and compute pipelines in game and rendering engines.
- Driver-side finalisation of portable intermediate bytecode.
- Cross-platform shader portability via common intermediate formats.
- Reducing runtime hitching through precompiled pipeline caches.
- ### Relationships
- partOf:: [[Graphics Pipeline]]
- partOf:: [[Graphics API]]
- hasPart:: [[SPIR-V]]
- requires:: [[Compiler]]
- requires:: [[Shader]]
- uses:: [[SPIR-V]]
- uses:: [[GLSL]]
- uses:: [[HLSL]]
- enables:: [[Compute Shader]]
- enables:: [[GPU Compute]]
- supports:: [[Real-Time Rendering]]
- supports:: [[GPU Rendering]]
- dependsOn:: [[GPU]]
- dependsOn:: [[Graphics API]]
- relatedTo:: [[Vulkan]]
- relatedTo:: [[Rendering Pipeline]]
- ### Provenance
- updated:: 2026-06-15
