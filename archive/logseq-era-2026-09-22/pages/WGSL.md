public:: true

# WGSL
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wgsl",
  "@type": "Page",
  "vc:slug": "wgsl",
  "title": "WGSL",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wgsl",
  "@type": "Class",
  "label": "WGSL",
  "definition": "WGSL (WebGPU Shading Language) is the shader programming language of the WebGPU API, used to write vertex, fragment, and compute shaders that run on the GPU from web applications. Designed for safety and portability, it maps cleanly onto native backends (Vulkan, Metal, Direct3D) while avoiding the platform-specific behaviours of older shading languages. WGSL is central to high-performance graphics and GPU compute on the modern web.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:programming-language", "label": "Programming Language"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:graphics-api", "label": "Graphics API"}, {"@id": "urn:ngm:class:rendering-pipeline", "label": "Rendering Pipeline"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - WGSL is the shading language for the WebGPU [[Graphics API]], used to author the vertex, fragment, and compute stages of a web [[Rendering Pipeline]].
- ### Content
  - WGSL has a strongly typed, Rust-influenced syntax with explicit binding and group attributes for resources, and is compiled by the browser to the host platform's native shader format. Its design prioritises deterministic, portable behaviour and security sandboxing, making it the canonical way to express GPU programs in WebGPU-based engines and compute workloads.
