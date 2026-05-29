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
  "definition": "A programmable GPU program that replaces fixed-function rendering stages, defining how vertices are transformed and how fragments are coloured by executing artist-authored algorithms in parallel across thousands of GPU threads. Shaders encompass vertex, fragment, geometry, and compute variants, collectively controlling every aspect of a rendered image's visual appearance.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
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
  },
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
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:shader-language",
        "label": "Shader Language"
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
  - A programmable GPU program that replaces fixed-function rendering stages, defining how vertices are transformed and how fragments are coloured by executing artist-authored algorithms in parallel across thousands of GPU threads. Shaders encompass vertex, fragment, geometry, and compute variants, collectively controlling every aspect of a rendered image's visual appearance.
- ### Semantic Classification
  - owl-class:: spatial-computing:Shader
  - owl-role:: Concept
- ### Relationships
  - Has Part: [[Vertex Shader]], [[Pixel Shader]], [[Compute Shader]]
  - Uses: [[Rasterization]]
  - Supports: [[Rendering Technique]], [[Visual Effects]]
  - Related To: [[Shader Language]]
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
