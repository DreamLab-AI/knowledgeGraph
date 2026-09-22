public:: true

# HLSL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hlsl",
  "@type": "Page",
  "vc:slug": "hlsl",
  "title": "HLSL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hlsl",
  "@type": "Class",
  "label": "HLSL",
  "definition": "HLSL (High-Level Shading Language) is Microsoft's C-like programming language for writing GPU shader programs targeting the Direct3D graphics API. It lets developers author vertex, pixel, geometry, and compute shaders that run on the programmable stages of the rendering pipeline. HLSL is a cornerstone of real-time graphics on Windows and Xbox platforms.",
  "domain": "metaverse",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"},
      {"@id": "urn:ngm:class:graphics-api", "label": "Graphics API"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - HLSL is a high-level shading language whose programs run on the [[Rendering Pipeline]] and are compiled and dispatched through a [[Graphics API]] such as Direct3D.
- ### Content
  - Shaders authored in HLSL are compiled to GPU bytecode (DXIL/DXBC) and bound to programmable pipeline stages to control transformation, lighting, and post-processing. Its semantics, intrinsics, and resource-binding model make it the de facto language for Direct3D titles, with cross-compilation tooling enabling reuse on other backends.
