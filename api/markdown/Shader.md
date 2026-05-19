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
  "definition": "Shader is a spatial computing concept and a type of spatial-computing.",
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
  - Shader is a concept within the ngm domain.
- ### Semantic Classification
  - owl-class:: spatial-computing:Shader
  - owl-role:: Concept
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  # Shader
  Shader represents programmable processing units executing on GPUs defining how vertices transform, fragments shade, and compute tasks process in parallel across thousands of threads. Shaders replace fixed-function rendering pipelines with flexible artist-authored algorithms controlling every aspect of visual appearance. Vertex shaders process individual vertices transforming positions from object space through world and view spaces to clip space, potentially applying skeletal animation skinning, morphing, or procedural displacement. Fragment (pixel) shaders compute final color and depth for each screen sample, sampling textures, evaluating lighting equations, applying normal mapping for surface detail, and implementing effects like rim lighting or subsurface scattering. Geometry shaders optionally generate additional primitives from input geometry, enabling particle expansion or dynamic tessellation. Compute shaders provide general-purpose GPU computing for tasks like physics simulation, particle systems, or post-processing. Modern shading leverages programmable blending, conservative rasterization, and variable rate shading adjusting fragment shader invocation frequency based on scene importance. Shader authoring balances visual fidelity against performance budget, with profiling tools identifying bottlenecks and optimization opportunities.
  - https://www.khronos.org/opengl/wiki/Shader - OpenGL shader programming
  - https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl - HLSL shader language
  - https://docs.unity3d.com/Manual/ShadersOverview.html - Unity shader documentation
  - https://thebookofshaders.com/ - The Book of Shaders educational resource
  ## Sources
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
