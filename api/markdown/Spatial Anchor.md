public:: true

# Spatial Anchor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:254562885341db7cb7377e1c3f07d710d491b2aea245788c1e1328c4ffaf09a3",
  "@type": "Page",
  "vc:slug": "spatial-anchor",
  "title": "Spatial Anchor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:coordinate-transformation",
      "vc:label": "Coordinate Transformation"
    },
    {
      "@id": "urn:visionflow:linked:gps-reference",
      "vc:label": "GPS Reference"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p2048-3",
      "vc:label": "IEEE P2048-3"
    },
    {
      "@id": "urn:visionflow:linked:persistence-layer",
      "vc:label": "Persistence Layer"
    },
    {
      "@id": "urn:visionflow:linked:pose-data",
      "vc:label": "Pose Data"
    },
    {
      "@id": "urn:visionflow:linked:tracking-features",
      "vc:label": "Tracking Features"
    },
    {
      "@id": "urn:visionflow:linked:tracking-system",
      "vc:label": "Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:visual-odometry",
      "vc:label": "Visual Odometry"
    },
    {
      "@id": "urn:visionflow:linked:world-coordinate-frame",
      "vc:label": "World Coordinate Frame"
    },
    {
      "@id": "urn:visionflow:owl:class:ar-scene-graph",
      "vc:label": "AR Scene Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:coordinate-system",
      "vc:label": "Coordinate System"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "NetworkLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:persistent-ar-placement",
      "vc:label": "Persistent AR Placement"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-virtual-registration",
      "vc:label": "Physical-Virtual Registration"
    },
    {
      "@id": "urn:visionflow:owl:class:shared-ar-experiences",
      "vc:label": "Shared AR Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing-system",
      "vc:label": "Spatial Computing System"
    },
    {
      "@id": "urn:visionflow:owl:class:visual-marker",
      "vc:label": "Visual Marker"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20246"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Anchor"
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
  "@id": "urn:ngm:class:spatial-anchor",
  "@type": "Class",
  "label": "Spatial Anchor",
  "definition": "Coordinate reference that binds a virtual object's pose to a stable location in physical space, enabling persistent AR placement and physical-virtual registration.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:ar-scene-graph",
      "label": "AR Scene Graph"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:gps-reference",
        "label": "GPS Reference"
      },
      {
        "@id": "urn:ngm:class:pose-data",
        "label": "Pose Data"
      },
      {
        "@id": "urn:ngm:class:tracking-features",
        "label": "Tracking Features"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      },
      {
        "@id": "urn:ngm:class:visual-marker",
        "label": "Visual Marker"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:coordinate-transformation",
        "label": "Coordinate Transformation"
      },
      {
        "@id": "urn:ngm:class:persistence-layer",
        "label": "Persistence Layer"
      },
      {
        "@id": "urn:ngm:class:tracking-system",
        "label": "Tracking System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:persistent-ar-placement",
        "label": "Persistent AR Placement"
      },
      {
        "@id": "urn:ngm:class:physical-virtual-registration",
        "label": "Physical-Virtual Registration"
      },
      {
        "@id": "urn:ngm:class:shared-ar-experiences",
        "label": "Shared AR Experiences"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ar-scene-graph",
        "label": "AR Scene Graph"
      },
      {
        "@id": "urn:ngm:class:spatial-computing-paradigm-system",
        "label": "Spatial Computing System"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:spatial-anchors",
      "label": "Spatial Anchors"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-anchor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:254562885341db7cb7377e1c3f07d710d491b2aea245788c1e1328c4ffaf09a3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Coordinate Transformation]]",
      "resolved": "urn:visionflow:linked:coordinate-transformation",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPS Reference]]",
      "resolved": "urn:visionflow:linked:gps-reference",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P2048-3]]",
      "resolved": "urn:visionflow:linked:ieee-p2048-3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Persistence Layer]]",
      "resolved": "urn:visionflow:linked:persistence-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pose Data]]",
      "resolved": "urn:visionflow:linked:pose-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tracking Features]]",
      "resolved": "urn:visionflow:linked:tracking-features",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tracking System]]",
      "resolved": "urn:visionflow:linked:tracking-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Odometry]]",
      "resolved": "urn:visionflow:linked:visual-odometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[World Coordinate Frame]]",
      "resolved": "urn:visionflow:linked:world-coordinate-frame",
      "kind": "StubLink"
    },
    {
      "raw": "[[AR Scene Graph]]",
      "resolved": "urn:visionflow:owl:class:ar-scene-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Coordinate System]]",
      "resolved": "urn:visionflow:owl:class:coordinate-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkLayer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Persistent AR Placement]]",
      "resolved": "urn:visionflow:owl:class:persistent-ar-placement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physical-Virtual Registration]]",
      "resolved": "urn:visionflow:owl:class:physical-virtual-registration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shared AR Experiences]]",
      "resolved": "urn:visionflow:owl:class:shared-ar-experiences",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing System]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Visual Marker]]",
      "resolved": "urn:visionflow:owl:class:visual-marker",
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
  - Coordinate reference that binds a virtual object's pose to a stable location in physical space, enabling persistent AR placement and physical-virtual registration.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAnchor
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]]

- ### Relationships
  - has-part:: [[Coordinate System]], [[Pose Data]], [[Visual Marker]], [[GPS Reference]], [[Tracking Features]]
  - is-part-of:: [[AR Scene Graph]], [[Spatial Computing System]]
  - requires:: [[Tracking System]], [[Coordinate Transformation]], [[Persistence Layer]]
  - enables:: [[Persistent AR Placement]], [[Shared AR Experiences]], [[Physical-Virtual Registration]]
  - depends-on:: [[Visual Odometry]], [[SLAM]], [[World Coordinate Frame]]

- ### Content
  Spatial Anchor — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE P2048-3]]
  - migration-date:: 2026-04-26T00:00:00Z
