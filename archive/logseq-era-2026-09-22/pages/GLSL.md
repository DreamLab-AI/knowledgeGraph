public:: true

# GLSL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:glsl",
  "@type": "Page",
  "vc:slug": "glsl",
  "title": "GLSL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:glsl",
  "@type": "Class",
  "label": "GLSL",
  "definition": "GLSL (OpenGL Shading Language) is a high-level C-like programming language for writing shaders that execute on the GPU within the OpenGL and WebGL graphics pipelines. It lets developers program the programmable stages, principally vertex and fragment shaders, to control geometry transformation, lighting, and per-pixel colour. GLSL is a foundational tool for real-time rendering and visual effects.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:graphics-api", "label": "Graphics API"}, {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GLSL is the shading language used by OpenGL and WebGL; it is invoked through a [[Graphics API]] and programs the programmable stages of the [[Rendering Pipeline]].
- ### Content
  - GLSL programs run massively in parallel on the GPU, with vertex shaders transforming geometry and fragment shaders computing per-pixel output, alongside geometry, tessellation, and compute shaders in modern versions. The language provides vector and matrix types, built-in functions for trigonometry and texture sampling, and qualifiers controlling data flow between stages. It compiles within the graphics driver, contrasting with HLSL for Direct3D and the newer SPIR-V intermediate representation used by Vulkan.
