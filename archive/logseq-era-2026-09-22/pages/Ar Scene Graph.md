public:: true

# Ar Scene Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:023fc23e68bf22213412cf1e0b9b96d5d69526caedc06442d091e17ed167e679",
  "@type": "Page",
  "vc:slug": "ar-scene-graph",
  "title": "Ar Scene Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-scene-reconstruction",
      "vc:label": "3D Scene Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:context-aware-ar",
      "vc:label": "Context-Aware AR"
    },
    {
      "@id": "urn:visionflow:linked:retargetable-ar-experiences",
      "vc:label": "Retargetable AR Experiences"
    },
    {
      "@id": "urn:visionflow:linked:semantic-scene-understanding",
      "vc:label": "Semantic Scene Understanding"
    },
    {
      "@id": "urn:visionflow:linked:spatial-relationships",
      "vc:label": "Spatial Relationships"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-data-structure",
      "vc:label": "Spatial Data Structure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9772"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ar Scene Graph"
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
  "@id": "urn:ngm:class:ar-scene-graph",
  "@type": "Class",
  "label": "Ar Scene Graph",
  "definition": "AR Scene Graph is a hierarchical data structure used in augmented reality to represent and organize spatial relationships between virtual objects, real-world elements, and their transformations, enabling context-aware placement, semantic understanding, and natural interaction between digital cont...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-scene-reconstruction",
        "label": "3D Scene Reconstruction"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ar-experiences",
        "label": "Retargetable AR Experiences"
      },
      {
        "@id": "urn:ngm:class:semantic-scene-understanding",
        "label": "Semantic Scene Understanding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-data-structure",
        "label": "Spatial Data Structure"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ar-scene-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:023fc23e68bf22213412cf1e0b9b96d5d69526caedc06442d091e17ed167e679"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Scene Reconstruction]]",
      "resolved": "urn:visionflow:linked:3-d-scene-reconstruction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Context-Aware AR]]",
      "resolved": "urn:visionflow:linked:context-aware-ar",
      "kind": "StubLink"
    },
    {
      "raw": "[[Retargetable AR Experiences]]",
      "resolved": "urn:visionflow:linked:retargetable-ar-experiences",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Scene Understanding]]",
      "resolved": "urn:visionflow:linked:semantic-scene-understanding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Spatial Relationships]]",
      "resolved": "urn:visionflow:linked:spatial-relationships",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Object Detection]]",
      "resolved": "urn:visionflow:owl:class:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Data Structure]]",
      "resolved": "urn:visionflow:owl:class:spatial-data-structure",
      "kind": "ResolvedLink"
    }
  ],
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
  - AR Scene Graph is a hierarchical data structure used in augmented reality to represent and organize spatial relationships between virtual objects, real-world elements, and their transformations, enabling context-aware placement, semantic understanding, and natural interaction between digital content and physical environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ArSceneGraph
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Spatial Data Structure]]
  - requires:: [[3D Scene Reconstruction]], [[Object Detection]], [[Spatial Relationships]]
  - enables:: [[Context-Aware AR]], [[Semantic Scene Understanding]], [[Retargetable AR Experiences]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

  ### Technical Details
  Key components include:
  - **Hierarchical Structure**: Nodes representing scene entities (floors, rooms, objects) with edges representing relative transformations
  - **Spatial Relationships**: Proximity, support, and comparative relationships between objects for rich scene understanding
  - **Semantic Annotations**: Object classification, material properties, and functional attributes
  - **Spatial Relationship Graphs (SRGs)**: Extended scene graphs incorporating real-world sensor data from trackers and cameras

  ### Applications
  - **Retargetable AR**: Framework adapting AR experiences to various environments based on scene context rather than absolute coordinates
  - **Indoor Navigation**: Hierarchical understanding of floors, rooms, and objects for wayfinding
  - **Interactive Storytelling**: Automatic population of virtual content matching story plots to scene semantics
  - **Robotics and Smart Homes**: Scene understanding for autonomous navigation and assistive technologies

  ### Technical Implementation
  3D Scene Graph Generators incrementally build semantic and spatial representations from RGB-D sequences by detecting objects, estimating poses, selecting optimal viewpoints, and extracting inter-object relations via vision-language reasoning.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
