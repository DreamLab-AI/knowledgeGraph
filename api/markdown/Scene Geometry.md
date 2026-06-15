public:: true

# Scene Geometry

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:scene-geometry",
  "@type": "Page",
  "title": "Scene Geometry",
  "vc:slug": "scene-geometry",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scene-geometry",
  "@type": "Class",
  "label": "Scene Geometry",
  "definition": "Scene geometry is the structured description of the spatial shape, surfaces, and arrangement of objects within a three-dimensional environment. It captures positions, depths, surface orientations, and connectivity needed to render, simulate, or reason about a scene. Accurate scene geometry underpins realistic lighting, occlusion, collision, and interaction in spatial computing and computer graphics applications.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:scene-representation",
      "label": "Scene Representation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:geometry",
        "label": "Geometry"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:scene-representation",
        "label": "Scene Representation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:depth-estimation",
        "label": "Depth Estimation"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Ambient Occlusion"
      },
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:geometry",
        "label": "Geometry"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:ambient-occlusion",
        "label": "Ambient Occlusion"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Scene geometry is a component of [[Scene Representation]] that requires [[Depth Estimation]] and [[Spatial Mapping]].
  - It is captured as [[Point Cloud]] and [[Geometry]] data using [[Photogrammetry]] and [[SLAM]].
  - It enables [[Rendering]], [[Ambient Occlusion]], and [[Scene Understanding]] within [[Spatial Computing]].
- ### Overview
  - Scene geometry encodes where surfaces are and how they are oriented, forming the substrate on which appearance, lighting, and physics are computed.
  - It can be represented as meshes, point clouds, depth maps, or implicit surfaces, each trading fidelity against memory and editability.
  - Reconstructing scene geometry from sensors requires depth estimation, photogrammetry, or SLAM to infer structure from observations.
- ### Key aspects
  - Surface and volume representations such as meshes, point clouds, and implicit fields.
  - Depth and occlusion relationships that determine visibility from a viewpoint.
  - Spatial registration that aligns partial observations into a coherent global structure.
  - Topological connectivity that supports collision, navigation, and physical simulation.
- ### Applications
  - Realistic rendering, shadowing, and ambient occlusion in graphics engines.
  - Augmented and mixed reality where virtual content must respect real-world surfaces.
  - Robotics and navigation that rely on reconstructed geometry for planning and interaction.
- ### Relationships
  - hasPart:: [[Point Cloud]]
  - hasPart:: [[Geometry]]
  - partOf:: [[Scene Representation]]
  - requires:: [[Depth Estimation]]
  - requires:: [[Spatial Mapping]]
  - enables:: [[Rendering]]
  - enables:: [[Ambient Occlusion]]
  - enables:: [[Scene Understanding]]
  - uses:: [[Point Cloud]]
  - uses:: [[Photogrammetry]]
  - uses:: [[SLAM]]
  - supports:: [[Rendering]]
  - supports:: [[Scene Understanding]]
  - dependsOn:: [[Spatial Mapping]]
  - contrastsWith:: [[Scene Understanding]]
  - relatedTo:: [[Geometry]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[Ambient Occlusion]]
  - bridgesTo:: [[Photogrammetry]]
  - subClassOf:: [[Scene Representation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
