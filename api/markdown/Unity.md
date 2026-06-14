public:: true

# Unity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:75573bb5886469dae31e61b64437c56249abc1c66198160b215d3f4b2a5002a6",
  "@type": "Page",
  "vc:slug": "unity",
  "title": "Unity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graphics-pipeline",
      "vc:label": "Graphics Pipeline"
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
      "@id": "urn:visionflow:linked:open-xr",
      "vc:label": "OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:fbx",
      "vc:label": "FBX"
    },
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Unity"
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
  "@id": "urn:ngm:class:unity",
  "@type": "Class",
  "label": "Unity",
  "definition": "Unity is a cross-platform real-time 3D engine and editor used to build games, simulations and XR applications across desktop, mobile, console and head-mounted display targets.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:game-engine",
    "label": "Game Engine"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:scene-editor",
        "label": "Scene Editor"
      },
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      },
      {
        "@id": "urn:ngm:class:animation-system",
        "label": "Animation System"
      },
      {
        "@id": "urn:ngm:class:asset-store",
        "label": "Asset Store"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:real-time-3d-ecosystem",
        "label": "Real-Time 3D Ecosystem"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      },
      {
        "@id": "urn:ngm:class:scripting-runtime",
        "label": "Scripting Runtime"
      },
      {
        "@id": "urn:ngm:class:rendering-api",
        "label": "Rendering API"
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
        "@id": "urn:ngm:class:interactive-simulation",
        "label": "Interactive Simulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:mono",
        "label": "Mono"
      },
      {
        "@id": "urn:ngm:class:dotnet",
        "label": ".NET"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:entity-component-system",
        "label": "Entity Component System"
      },
      {
        "@id": "urn:ngm:class:openxr",
        "label": "OpenXR"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fbx",
        "label": "FBX"
      },
      {
        "@id": "urn:ngm:class:gltf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:hlsl",
        "label": "HLSL"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      },
      {
        "@id": "urn:ngm:class:spatial-anchors",
        "label": "Spatial Anchors"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:unreal-engine",
        "label": "Unreal Engine"
      },
      {
        "@id": "urn:ngm:class:godot",
        "label": "Godot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:universal-render-pipeline",
        "label": "Universal Render Pipeline"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:unity-engine",
      "label": "Unity Engine"
    },
    {
      "@id": "urn:ngm:class:unity3d",
      "label": "Unity3D"
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
  "@id": "urn:visionflow:annotation:link-resolutions:unity:a5790b06f63b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:75573bb5886469dae31e61b64437c56249abc1c66198160b215d3f4b2a5002a6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graphics Pipeline]]",
      "resolved": "urn:visionflow:linked:graphics-pipeline",
      "kind": "StubLink"
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
      "raw": "[[OpenXR]]",
      "resolved": "urn:visionflow:linked:open-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[FBX]]",
      "resolved": "urn:visionflow:linked:fbx",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
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
  - Unity is a cross-platform real-time 3D engine and editor used to build games, simulations and XR applications across desktop, mobile, console and head-mounted display targets.

- ### Semantic Classification
  - owl-class:: metaverse:Unity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Game Engine]]
  - bridges-to:: [[OpenXR]], [[FBX]]
  - requires:: [[Graphics Pipeline]]
  - enables:: [[Virtual Reality]], [[Augmented Reality]]

- ### Content
  - Unity provides a scene editor, a component-based entity model, a scripting layer and a render pipeline that targets many platforms from a single project. It is one of the most widely deployed engines for interactive 3D content and a common runtime for social and enterprise metaverse experiences.
  - Through the OpenXR plugin and platform-specific packages Unity supports headset input, hand tracking and spatial anchors. Assets typically enter via FBX or glTF, and the engine handles rendering, physics and animation at runtime.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
