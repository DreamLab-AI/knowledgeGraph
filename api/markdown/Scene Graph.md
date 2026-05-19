public:: true

# Scene Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:67ad4d9f6651fca18d524de8b9ede795e1102f2b0692cd99ce3beaee582da3d3",
  "@type": "Page",
  "vc:slug": "scene-graph",
  "title": "Scene Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-engine",
      "vc:label": "3D Engine"
    },
    {
      "@id": "urn:visionflow:linked:bounding-volume",
      "vc:label": "Bounding Volume"
    },
    {
      "@id": "urn:visionflow:linked:camera-node",
      "vc:label": "Camera Node"
    },
    {
      "@id": "urn:visionflow:linked:frustum-culling",
      "vc:label": "Frustum Culling"
    },
    {
      "@id": "urn:visionflow:linked:geometry-node",
      "vc:label": "Geometry Node"
    },
    {
      "@id": "urn:visionflow:linked:group-node",
      "vc:label": "Group Node"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-19775-2",
      "vc:label": "ISO/IEC 19775-2"
    },
    {
      "@id": "urn:visionflow:linked:scene-node",
      "vc:label": "Scene Node"
    },
    {
      "@id": "urn:visionflow:linked:scene-rendering",
      "vc:label": "Scene Rendering"
    },
    {
      "@id": "urn:visionflow:linked:transform-matrix",
      "vc:label": "Transform Matrix"
    },
    {
      "@id": "urn:visionflow:linked:transform-node",
      "vc:label": "Transform Node"
    },
    {
      "@id": "urn:visionflow:linked:web3-d",
      "vc:label": "Web3D"
    },
    {
      "@id": "urn:visionflow:owl:class:collision-detection",
      "vc:label": "Collision Detection"
    },
    {
      "@id": "urn:visionflow:owl:class:coordinate-system",
      "vc:label": "Coordinate System"
    },
    {
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:gl-tf-3-d-file-format",
      "vc:label": "glTF (3D File Format)"
    },
    {
      "@id": "urn:visionflow:owl:class:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:level-of-detail",
      "vc:label": "Level of Detail"
    },
    {
      "@id": "urn:visionflow:owl:class:light-node",
      "vc:label": "Light Node"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-engine",
      "vc:label": "Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-pipeline",
      "vc:label": "Rendering Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-index",
      "vc:label": "Spatial Index"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-queries",
      "vc:label": "Spatial Queries"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world",
      "vc:label": "Virtual World"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20112"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Scene Graph"
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
  "@id": "urn:ngm:class:scene-graph",
  "@type": "Class",
  "label": "Scene Graph",
  "definition": "A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-node",
        "label": "Camera Node"
      },
      {
        "@id": "urn:ngm:class:geometry-node",
        "label": "Geometry Node"
      },
      {
        "@id": "urn:ngm:class:group-node",
        "label": "Group Node"
      },
      {
        "@id": "urn:ngm:class:scene-node",
        "label": "Scene Node"
      },
      {
        "@id": "urn:ngm:class:transform-node",
        "label": "Transform Node"
      },
      {
        "@id": "urn:ngm:class:light-node",
        "label": "Light Node"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bounding-volume",
        "label": "Bounding Volume"
      },
      {
        "@id": "urn:ngm:class:transform-matrix",
        "label": "Transform Matrix"
      },
      {
        "@id": "urn:ngm:class:spatial-index",
        "label": "Spatial Index"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:frustum-culling",
        "label": "Frustum Culling"
      },
      {
        "@id": "urn:ngm:class:scene-rendering",
        "label": "Scene Rendering"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      },
      {
        "@id": "urn:ngm:class:spatial-queries",
        "label": "Spatial Queries"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-engine",
        "label": "3D Engine"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:gl-tf-3-d-file-format",
        "label": "glTF (3D File Format)"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:scene-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:67ad4d9f6651fca18d524de8b9ede795e1102f2b0692cd99ce3beaee582da3d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Engine]]",
      "resolved": "urn:visionflow:linked:3-d-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bounding Volume]]",
      "resolved": "urn:visionflow:linked:bounding-volume",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera Node]]",
      "resolved": "urn:visionflow:linked:camera-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[Frustum Culling]]",
      "resolved": "urn:visionflow:linked:frustum-culling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geometry Node]]",
      "resolved": "urn:visionflow:linked:geometry-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[Group Node]]",
      "resolved": "urn:visionflow:linked:group-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 19775-2]]",
      "resolved": "urn:visionflow:linked:iso-iec-19775-2",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scene Node]]",
      "resolved": "urn:visionflow:linked:scene-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scene Rendering]]",
      "resolved": "urn:visionflow:linked:scene-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transform Matrix]]",
      "resolved": "urn:visionflow:linked:transform-matrix",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transform Node]]",
      "resolved": "urn:visionflow:linked:transform-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web3D]]",
      "resolved": "urn:visionflow:linked:web3-d",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collision Detection]]",
      "resolved": "urn:visionflow:owl:class:collision-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Coordinate System]]",
      "resolved": "urn:visionflow:owl:class:coordinate-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:owl:class:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF (3D File Format)]]",
      "resolved": "urn:visionflow:owl:class:gl-tf-3-d-file-format",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:owl:class:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Level of Detail]]",
      "resolved": "urn:visionflow:owl:class:level-of-detail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Light Node]]",
      "resolved": "urn:visionflow:owl:class:light-node",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Engine]]",
      "resolved": "urn:visionflow:owl:class:rendering-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Pipeline]]",
      "resolved": "urn:visionflow:owl:class:rendering-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Index]]",
      "resolved": "urn:visionflow:owl:class:spatial-index",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Queries]]",
      "resolved": "urn:visionflow:owl:class:spatial-queries",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:owl:class:virtual-world",
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
  - A hierarchical tree-based data structure organizing and describing the spatial, logical, and rendering relationships among objects in a 3D scene, enabling efficient traversal, culling, and rendering operations.

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneGraph
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[InteractionDomain]]
  - implemented-in-layer:: [[DataLayer]]

- ### Relationships
  - has-part:: [[Scene Node]], [[Transform Node]], [[Geometry Node]], [[Camera Node]], [[Light Node]], [[Group Node]]
  - is-part-of:: [[Rendering Engine]], [[3D Engine]], [[Virtual World]], [[Game Engine]], [[glTF (3D File Format)]]
  - requires:: [[Transform Matrix]], [[Bounding Volume]], [[Spatial Index]]
  - enables:: [[Scene Rendering]], [[Spatial Queries]], [[Collision Detection]], [[Level of Detail]], [[Frustum Culling]]
  - depends-on:: [[Graphics API]], [[Coordinate System]], [[Rendering Pipeline]]

- ### Content
  Scene Graph — content pending enrichment.

- ### Provenance
  - sources:: [[Web3D]], [[ISO/IEC 19775-2]]
  - migration-date:: 2026-04-26T00:00:00Z
