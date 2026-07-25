public:: true

# FBX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4ca6c9353a86c0653164c5761ae14ba1da2706257806cf17596e895034673ae0",
  "@type": "Page",
  "vc:slug": "fbx",
  "title": "FBX",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-animation",
      "vc:label": "Skeletal Animation"
    },
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:universal-scene-description",
      "vc:label": "Universal Scene Description"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FBX"
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
  "@id": "urn:ngm:class:fbx",
  "@type": "Class",
  "label": "FBX",
  "definition": "FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines. Developed by Kaydara and now owned by Autodesk, it stores scene graphs, mesh data, skinning weights, keyframed animation tracks, cameras, and lights, making it the dominant interchange format across 3D production and real-time engine pipelines.",
  "domain": "spatial-computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:scene-graph",
        "label": "Scene Graph"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      },
      {
        "@id": "urn:ngm:class:polygon-mesh",
        "label": "Polygon Mesh"
      },
      {
        "@id": "urn:ngm:class:skinning",
        "label": "Skinning"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:asset-pipeline",
        "label": "3D Asset Pipeline"
      },
      {
        "@id": "urn:ngm:class:digital-content-creation",
        "label": "Digital Content Creation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:3d-modelling",
        "label": "3D Modelling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:character-rigging",
        "label": "Character Rigging"
      },
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar Pipeline"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:autodesk",
        "label": "Autodesk"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:3-d-file-format",
        "label": "3D File Format"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:binary-encoding",
        "label": "Binary Serialisation"
      },
      {
        "@id": "urn:ngm:class:keyframe-animation",
        "label": "Keyframe Animation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:physically-based-rendering",
        "label": "Physically Based Rendering"
      },
      {
        "@id": "urn:ngm:class:morph-target-animation",
        "label": "Morph Target Animation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:autodesk",
        "label": "Autodesk"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gl-tf",
        "label": "glTF"
      },
      {
        "@id": "urn:ngm:class:universal-scene-description",
        "label": "Universal Scene Description"
      },
      {
        "@id": "urn:ngm:class:collada",
        "label": "COLLADA"
      },
      {
        "@id": "urn:ngm:class:obj-format",
        "label": "OBJ Format"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:unity",
        "label": "Unity"
      },
      {
        "@id": "urn:ngm:class:unreal-engine",
        "label": "Unreal Engine"
      },
      {
        "@id": "urn:ngm:class:blender-3d-creation-suite",
        "label": "Blender"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:filmbox",
      "label": "FilmBox"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fbx:932153c31e61",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4ca6c9353a86c0653164c5761ae14ba1da2706257806cf17596e895034673ae0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Skeletal Animation]]",
      "resolved": "urn:visionflow:linked:skeletal-animation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Universal Scene Description]]",
      "resolved": "urn:visionflow:linked:universal-scene-description",
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
  - FBX is a proprietary 3D asset interchange format used to transfer geometry, materials, skeletal rigs and animation between digital content creation tools and game engines.

- ### Semantic Classification
  - owl-class:: metaverse:FBX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[glTF]], [[Universal Scene Description]]
  - requires:: [[Computer Graphics]]
  - enables:: [[Skeletal Animation]], [[Game Engine]]

- ### Content
  - FBX stores a scene graph of nodes carrying transforms, mesh data, skinning weights and keyframed animation tracks. It is widely supported as an exchange path between modelling packages and runtime engines, though its binary specification is controlled by a single vendor rather than an open standards body.
  - In metaverse and XR production FBX commonly serves as the bridge from authoring tools into Unity and Unreal, after which assets are often re-exported to open formats such as glTF for runtime delivery. Its handling of skeletal rigs makes it a frequent choice for character and avatar pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
