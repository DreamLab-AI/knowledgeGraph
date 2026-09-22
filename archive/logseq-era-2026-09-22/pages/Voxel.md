public:: true

# Voxel
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:voxel",
  "@type": "Page",
  "title": "Voxel",
  "vc:slug": "voxel",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voxel",
  "@type": "Class",
  "label": "Voxel",
  "definition": "A voxel is the volumetric analogue of a pixel: a discrete unit of value located on a regular three-dimensional grid that represents a sample of space, encoding attributes such as density, colour, opacity, or material. Voxels underpin volumetric data structures used in medical imaging, scientific simulation, terrain and procedural modelling, and game engines, and they can be stored efficiently in sparse structures such as octrees to skip empty space. Unlike polygon meshes that describe only surfaces, voxels represent the full interior of objects, enabling destructible geometry, fluid simulation, and direct volume rendering.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:volume-rendering",
      "label": "Volume Rendering"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:volume-rendering",
        "label": "Volume Rendering"
      },
      {
        "@id": "urn:ngm:class:volumetric-rendering",
        "label": "Volumetric Rendering"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sparse-voxel-octree",
        "label": "Sparse Voxel Octree"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu-rendering",
        "label": "GPU Rendering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:volume-rendering",
        "label": "Volume Rendering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:texture-mapping",
        "label": "Texture Mapping"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
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
  - Voxel is a key concept in the spatial computing domain. Related concepts include [[Volume Rendering]] [[Point Cloud]] [[Computer Graphics]] [[Game Engine]].
  - A voxel is the volumetric analogue of a pixel: a discrete unit of value located on a regular three-dimensional grid that represents a sample of space, encoding attributes such as density, colour, opacity, or material. Voxels underpin volumetric data structures used in medical imaging, scientific simulation, terrain and procedural modelling, and game engines, and they can be stored efficiently in sparse structures such as octrees to skip empty space. Unlike polygon meshes that describe only surfaces, voxels represent the full interior of objects, enabling destructible geometry, fluid simulation, and direct volume rendering.
- ### Overview
  - Voxel sits within the broader category of [[Volume Rendering]], which it specialises.
  - It connects to a network of 11 related classes across the knowledge graph, anchoring edges that previously pointed to an undefined node.
- ### Key aspects
  - hasPart: [[Sparse Voxel Octree]]
  - uses: [[GPU Rendering]]
- ### Mechanisms
  - Voxel operates through its constituent parts and dependencies, integrating with adjacent systems to deliver its function within spatial computing.
- ### Applications
  - Applied to advance [[Volume Rendering]].
  - Applied to advance [[Game Engine]].
- ### Relationships
  - subClassOf:: [[Volume Rendering]]
  - partOf:: [[Volume Rendering]]
  - partOf:: [[Volumetric Rendering]]
  - hasPart:: [[Sparse Voxel Octree]]
  - uses:: [[GPU Rendering]]
  - enables:: [[Volume Rendering]]
  - supports:: [[Game Engine]]
  - contrastsWith:: [[Point Cloud]]
  - contrastsWith:: [[Texture Mapping]]
  - relatedTo:: [[Computer Graphics]]
  - relatedTo:: [[Ray Tracing]]
  - relatedTo:: [[Rendering]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
