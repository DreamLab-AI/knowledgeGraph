public:: true

# Mesh Shading
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mesh-shading",
  "@type": "Page",
  "title": "Mesh Shading",
  "vc:slug": "mesh-shading",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mesh-shading",
  "@type": "Class",
  "label": "Mesh Shading",
  "definition": "Mesh shading is a GPU rendering pipeline model, exposed through APIs such as Vulkan and DirectX 12, that replaces the fixed vertex-and-geometry-shader stages with programmable task and mesh shaders operating on small groups of primitives called meshlets. It gives applications direct control over primitive culling, level-of-detail selection and amplification within the shader itself, removing bottlenecks inherent in the traditional pipeline. Mesh shading is used to render highly detailed geometry more efficiently in modern real-time graphics engines.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphics-api",
      "label": "Graphics API"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Mesh shading is a GPU rendering pipeline model, exposed through APIs such as Vulkan and DirectX 12, that replaces the fixed vertex-and-geometry-shader stages with programmable task and mesh shaders operating on small groups of primitives called meshlets.
  - It is a subclass of [[Graphics API]].
- ### Content
  - Mesh shading is a GPU rendering pipeline model, exposed through APIs such as Vulkan and DirectX 12, that replaces the fixed vertex-and-geometry-shader stages with programmable task and mesh shaders operating on small groups of primitives called meshlets. It gives applications direct control over primitive culling, level-of-detail selection and amplification within the shader itself, removing bottlenecks inherent in the traditional pipeline. Mesh shading is used to render highly detailed geometry more efficiently in modern real-time graphics engines.
