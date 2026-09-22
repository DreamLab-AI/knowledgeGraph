public:: true

# SPIR-V
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:spir-v",
  "@type": "Page",
  "vc:slug": "spir-v",
  "title": "SPIR-V",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spir-v",
  "@type": "Class",
  "label": "SPIR-V",
  "definition": "SPIR-V is a binary intermediate representation for shaders and parallel-compute kernels standardised by the Khronos Group, used as the portable bytecode target for Vulkan, OpenCL, and OpenGL. High-level shading languages such as GLSL and HLSL compile to SPIR-V, which drivers then translate to native GPU instructions, decoupling source languages from hardware. It enables offline compilation, validation, and optimisation of graphics and compute programs across vendors.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:graphics-api", "label": "Graphics API"},
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SPIR-V is a Khronos [[Technical Standard]] defining a binary intermediate representation for shaders and compute kernels, serving as the portable bytecode that Vulkan, OpenCL, and OpenGL consume.
- ### Content
  - High-level languages like GLSL and HLSL compile to SPIR-V, which a [[Graphics API]] driver then lowers to vendor-specific GPU code, separating authoring languages from hardware targets. This intermediate layer lets a [[Rendering Pipeline]] precompile, validate, and optimise shaders offline, improving load times and enabling cross-vendor tooling and language interoperability.
