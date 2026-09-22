public:: true

# Graphics Pipeline
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b877fdead7dd767d67f8ce4c1ad18c827e2c1cf82c4b01fc93131e903d3c7ed",
  "@type": "Page",
  "vc:slug": "graphics-pipeline",
  "title": "Graphics Pipeline",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu-architecture",
      "vc:label": "GPU Architecture"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:rasterization",
      "vc:label": "Rasterization"
    },
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graphics Pipeline"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graphics-pipeline",
  "@type": "Class",
  "label": "Graphics Pipeline",
  "definition": "The graphics pipeline is the ordered sequence of stages that transforms a 3D scene description into a 2D raster image, encompassing vertex processing, primitive assembly, rasterisation, fragment shading, and output merging, executed on programmable GPU hardware and exposed through graphics APIs.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:computer-graphics",
    "label": "Computer Graphics"
  },
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
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:primitive-assembly",
        "label": "Primitive Assembly"
      },
      {
        "@id": "urn:ngm:class:depth-buffer",
        "label": "Depth Buffer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-architecture",
        "label": "GPU Architecture"
      },
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:framebuffer",
        "label": "Framebuffer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
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
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:open-gl",
        "label": "OpenGL"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      },
      {
        "@id": "urn:ngm:class:vertex-buffer",
        "label": "Vertex Buffer"
      },
      {
        "@id": "urn:ngm:class:transform-matrix",
        "label": "Transform Matrix"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:path-tracing",
        "label": "Path Tracing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Machine Learning Inference"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:direct3d",
        "label": "Direct3D"
      },
      {
        "@id": "urn:ngm:class:metal-api",
        "label": "Metal API"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rendering-pipeline",
      "label": "Rendering Pipeline"
    },
    {
      "@id": "urn:ngm:class:gpu-pipeline",
      "label": "GPU Pipeline"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graphics-pipeline:e56304cd518b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b877fdead7dd767d67f8ce4c1ad18c827e2c1cf82c4b01fc93131e903d3c7ed"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU Architecture]]",
      "resolved": "urn:visionflow:linked:gpu-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rasterization]]",
      "resolved": "urn:visionflow:linked:rasterization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shader]]",
      "resolved": "urn:visionflow:linked:shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The graphics pipeline is the ordered sequence of stages that transforms 3D scene description into a 2D image, covering vertex processing, primitive assembly, rasterisation and fragment shading.

- ### Semantic Classification
  - owl-class:: metaverse:GraphicsPipeline
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Rasterization]], [[Shader]]
  - requires:: [[GPU Architecture]]
  - enables:: [[Real-Time Rendering]]

- ### Content
  - The pipeline runs vertices through transformation and projection, assembles them into primitives, rasterises those primitives into fragments and shades each fragment to produce pixel colours, with programmable shader stages at key points. Modern variants add geometry, tessellation and compute stages.
  - Implemented in GPU hardware and exposed through APIs such as Vulkan and OpenGL, the pipeline is the backbone of real-time rendering. Programmable shaders give developers control over transformation and shading.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
