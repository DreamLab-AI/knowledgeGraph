public:: true

# glTF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:488849981bd2ce044b5840ddd13d404ba5d8feac2215f28ebe7bc120530510a6",
  "@type": "Page",
  "vc:slug": "gl-tf",
  "title": "glTF",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-model",
      "vc:label": "3D Model"
    },
    {
      "@id": "urn:visionflow:linked:material-definition",
      "vc:label": "Material Definition"
    },
    {
      "@id": "urn:visionflow:linked:asset-interoperability",
      "vc:label": "Asset Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:web-xr",
      "vc:label": "WebXR"
    },
    {
      "@id": "urn:visionflow:linked:3-d-file-format",
      "vc:label": "3D File Format"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "glTF"
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
  "@id": "urn:ngm:class:gl-tf",
  "@type": "Class",
  "label": "glTF",
  "definition": "glTF (GL Transmission Format) is an open royalty-free standard from the Khronos Group for the efficient transmission and loading of 3D scenes and models, defining geometry, materials, animation and scene structure in a compact runtime format optimised for direct upload to graphics APIs.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:3-d-file-format",
    "label": "3D File Format"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:binary-buffer",
        "label": "Binary Buffer"
      },
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering Material"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:asset-pipeline",
        "label": "3D Asset Pipeline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-model",
        "label": "3D Model"
      },
      {
        "@id": "urn:ngm:class:material-definition",
        "label": "Material Definition"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-interoperability",
        "label": "Asset Interoperability"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:3-d-rendering",
        "label": "Web-Based 3D Rendering"
      },
      {
        "@id": "urn:ngm:class:content-delivery",
        "label": "Augmented Reality Content Delivery"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:web-gl",
        "label": "WebGL"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format",
        "label": "JSON"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Meshopt Compression"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:web-xr",
        "label": "WebXR"
      },
      {
        "@id": "urn:ngm:class:babylon-js",
        "label": "Babylon.js"
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
        "@id": "urn:ngm:class:fbx",
        "label": "FBX"
      },
      {
        "@id": "urn:ngm:class:collada",
        "label": "COLLADA"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse-platform",
        "label": "Metaverse Platform"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:universal-scene-description",
        "label": "USD Universal Scene Description"
      },
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gl-transmission-format",
      "label": "GL Transmission Format"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gl-tf:69e97e19e187",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:488849981bd2ce044b5840ddd13d404ba5d8feac2215f28ebe7bc120530510a6"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Model]]",
      "resolved": "urn:visionflow:linked:3-d-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Material Definition]]",
      "resolved": "urn:visionflow:linked:material-definition",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Interoperability]]",
      "resolved": "urn:visionflow:linked:asset-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[WebXR]]",
      "resolved": "urn:visionflow:linked:web-xr",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D File Format]]",
      "resolved": "urn:visionflow:linked:3-d-file-format",
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
  - glTF (GL Transmission Format) is an open royalty-free standard from the Khronos Group for the efficient transmission and loading of 3D scenes and models, defining geometry, materials, animation and scene structure in a compact runtime format.

- ### Semantic Classification
  - owl-class:: metaverse:glTF
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[3D File Format]]
  - bridges-to:: [[WebXR]]
  - requires:: [[3D Model]], [[Material Definition]]
  - enables:: [[Asset Interoperability]], [[Real-Time Rendering]]

- ### Content
  - glTF encodes meshes, textures, skinning, animation and a node hierarchy in a JSON description paired with binary buffers, optimised for direct upload to graphics APIs without an intermediate translation step. It is widely used as a delivery format for the web and for real-time engines because it minimises parsing and runtime processing.
  - The format is maintained by the Khronos Group and is often described as the JPEG of 3D. Extensions cover physically based materials, compression such as Draco and Meshopt, and integration with rendering features, which makes glTF a common interchange target for metaverse platforms and 3D asset pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
