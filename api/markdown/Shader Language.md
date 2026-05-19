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
  "definition": "Shader Language is a spatial computing concept and a type of spatial-computing.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "quality": 0.35,
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
  - ShaderLanguage is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: spatial-computing:ShaderLanguage
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # ShaderLanguage
  ShaderLanguage provides the syntax and semantics for expressing GPU-executable algorithms controlling rendering pipelines. Dominant languages include GLSL (OpenGL Shading Language) for OpenGL and WebGL with C-like syntax and built-in vector/matrix types, HLSL (High-Level Shading Language) for DirectX featuring similar syntax with subtle semantic differences, Cg (C for Graphics) historically used for cross-platform development before standardization, Metal Shading Language for Apple platforms optimizing iOS and macOS performance, and emerging languages like WGSL (WebGPU Shading Language) for next-generation web graphics. Shader languages support common programming constructs (conditionals, loops, functions) while restricting features incompatible with parallel execution like dynamic memory allocation or recursion. Specialized data types include vectors (vec2/vec3/vec4), matrices (mat3/mat4), samplers for texture access, and interpolated varyings passing data between shader stages. Modern shader compilation involves cross-compilation to intermediate representations like SPIR-V enabling tool-chain flexibility, runtime compilation optimizing for specific hardware, and shader variant generation handling material permutations. Domain-specific extensions include compute shader intrinsics, ray tracing shaders (ray generation, closest-hit, miss), and mesh shaders for programmable primitive processing.
  - https://www.khronos.org/files/opengles_shading_language.pdf - GLSL specification
  - https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-reference - HLSL reference
  - https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf - Metal Shading Language specification
  - https://gpuweb.github.io/gpuweb/wgsl/ - WGSL specification for WebGPU

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
