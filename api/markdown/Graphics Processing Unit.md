public:: true

# Graphics Processing Unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d45a13badeccfa8bf32573d851909294ecf720cabaf94d4390e324886eb9f1ba",
  "@type": "Page",
  "vc:slug": "graphics-processing-unit",
  "title": "Graphics Processing Unit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:compute-shader",
      "vc:label": "Compute Shader"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:open-gl",
      "vc:label": "OpenGL"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graphics Processing Unit"
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
  "@id": "urn:ngm:class:graphics-processing-unit",
  "@type": "Class",
  "label": "Graphics Processing Unit",
  "definition": "A Graphics Processing Unit is a parallel processor designed to accelerate the rendering of images and other data-parallel workloads through many concurrent execution units, and widely repurposed for general-purpose computing in machine learning, scientific simulation, and spatial computing.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:graphics-processing",
    "label": "Graphics Processing"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:video-memory",
        "label": "Video Memory"
      },
      {
        "@id": "urn:ngm:class:device-drivers",
        "label": "Device Driver"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:neural-network-training",
        "label": "Neural Network Training"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pcie-bus",
        "label": "PCIe Bus"
      },
      {
        "@id": "urn:ngm:class:opengl",
        "label": "OpenGL"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:floating-point-arithmetic",
        "label": "Floating-Point Arithmetic"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      },
      {
        "@id": "urn:ngm:class:directx",
        "label": "DirectX"
      },
      {
        "@id": "urn:ngm:class:opencl",
        "label": "OpenCL"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:central-processing-unit",
        "label": "Central Processing Unit"
      },
      {
        "@id": "urn:ngm:class:neural-processing-unit",
        "label": "Neural Processing Unit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning-accelerator",
        "label": "Machine Learning Accelerator"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gpu",
      "label": "GPU"
    },
    {
      "@id": "urn:ngm:class:visual-processing-unit",
      "label": "Visual Processing Unit"
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
  "@id": "urn:visionflow:annotation:link-resolutions:graphics-processing-unit:cd32ce41402f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d45a13badeccfa8bf32573d851909294ecf720cabaf94d4390e324886eb9f1ba"
  },
  "vc:resolutions": [
    {
      "raw": "[[Shader]]",
      "resolved": "urn:visionflow:linked:shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Shader]]",
      "resolved": "urn:visionflow:linked:compute-shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OpenGL]]",
      "resolved": "urn:visionflow:linked:open-gl",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
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
  - A Graphics Processing Unit is a parallel processor designed to accelerate the rendering of images and other data-parallel workloads through many concurrent execution units.

- ### Semantic Classification
  - owl-class:: general:GraphicsProcessingUnit
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics Processing]]
  - bridges-to:: [[GPU]], [[OpenGL]]
  - requires:: [[Shader]]
  - enables:: [[Real-Time Rendering]], [[Compute Shader]]

- ### Content
  - A Graphics Processing Unit executes the per-vertex and per-pixel operations of rendering across wide arrays of cores, providing the throughput needed for interactive graphics. Programmable shader and compute stages let applications use the same hardware for general parallel computation.
  - The Graphics Processing Unit, commonly abbreviated GPU, is central to games, visualisation, scientific computing and machine learning because of its high arithmetic throughput on regular data-parallel problems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
