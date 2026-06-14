public:: true

# WebXR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a844c060bc2489535bfcf5b599def4a5389fe2497879144e3a353fd49e4fabb5",
  "@type": "Page",
  "vc:slug": "web-xr",
  "title": "WebXR",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:web-standard",
      "vc:label": "Web Standard"
    },
    {
      "@id": "urn:visionflow:linked:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:linked:virtual-reality",
      "vc:label": "Virtual Reality"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing-domain",
      "vc:label": "Spatial Computing Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "WebXR"
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
  "@id": "urn:ngm:class:web-xr",
  "@type": "Class",
  "label": "WebXR",
  "definition": "WebXR is a W3C web standard and browser API that enables access to virtual reality and augmented reality hardware, exposing device pose tracking, controller input, reference spaces, and an XR-integrated render loop so that immersive spatial experiences can be delivered through ordinary URLs without native installation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing-paradigm-domain",
      "label": "Spatial Computing Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:web-standard",
        "label": "Web Standard"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:webgl",
        "label": "WebGL"
      },
      {
        "@id": "urn:ngm:class:webgpu",
        "label": "WebGPU"
      },
      {
        "@id": "urn:ngm:class:xr-hardware",
        "label": "XR Hardware"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:immersive-web",
        "label": "Immersive Web"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3c-specification",
        "label": "W3C Specification"
      },
      {
        "@id": "urn:ngm:class:device-api",
        "label": "Device API"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gltf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:pose-tracking",
        "label": "Pose Tracking"
      },
      {
        "@id": "urn:ngm:class:reference-space",
        "label": "Reference Space"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:eye-tracking",
        "label": "Eye Tracking"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:immersive-web-working-group",
        "label": "Immersive Web Working Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:native-vr-sdk",
        "label": "Native VR SDK"
      },
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:web-platform",
        "label": "Web Platform"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:three-js",
        "label": "Three.js"
      },
      {
        "@id": "urn:ngm:class:babylon-js",
        "label": "Babylon.js"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:webxr-device-api",
      "label": "WebXR Device API"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-xr:9306dd966a93",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a844c060bc2489535bfcf5b599def4a5389fe2497879144e3a353fd49e4fabb5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Web Standard]]",
      "resolved": "urn:visionflow:linked:web-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:linked:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Reality]]",
      "resolved": "urn:visionflow:linked:virtual-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Domain]]",
      "resolved": "urn:visionflow:linked:spatial-computing-domain",
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
  - WebXR is a web standard and API that lets browsers access virtual and augmented reality devices, providing pose tracking, input and rendering hooks for immersive experiences delivered over the web.

- ### Semantic Classification
  - owl-class:: metaverse:WebXR
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Spatial Computing Domain]]
  - bridges-to:: [[Spatial Computing Paradigm]]
  - requires:: [[Web Standard]], [[Graphics API]]
  - enables:: [[Virtual Reality]], [[Augmented Reality]]

- ### Content
  - WebXR exposes device pose, reference spaces, controller input and a render loop that integrates with the browser graphics pipeline, enabling immersive sessions without native installation. It supports both fully immersive virtual reality and see-through augmented reality modes.
  - By building on existing web technologies, WebXR allows immersive content to be distributed through ordinary URLs and to interoperate with web-delivered 3D assets such as glTF. It is a key enabling layer for browser-based metaverse and spatial computing experiences.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
