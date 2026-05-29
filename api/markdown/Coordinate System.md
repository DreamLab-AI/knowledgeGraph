public:: true

# Coordinate System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fedf61f7ad48445d44fee31c2c64df03c591966843b3364e5763a397f6fd3364",
  "@type": "Page",
  "vc:slug": "coordinate-system",
  "title": "Coordinate System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9540"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Coordinate System"
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
  "@id": "urn:ngm:class:coordinate-system",
  "@type": "Class",
  "label": "Coordinate System",
  "definition": "A Coordinate System is a mathematical framework that assigns unique numerical tuples to every point in a space, enabling the precise specification of position, orientation, and scale. In spatial computing and extended reality, coordinate systems define local object frames, world frames, and camera frames that must be carefully transformed and composed to align virtual content with the physical environment.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:spatial-anchor", "label": "Spatial Anchor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:scene-graph", "label": "Scene Graph"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:coordinate-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fedf61f7ad48445d44fee31c2c64df03c591966843b3364e5763a397f6fd3364"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Coordinate System is a mathematical framework that assigns unique numerical tuples to every point in a space, enabling the precise specification of position, orientation, and scale. In spatial computing and extended reality, coordinate systems define local object frames, world frames, and camera frames that must be carefully transformed and composed to align virtual content with the physical environment.

- ### Semantic Classification
  - owl-class:: spatial-computing:CoordinateSystem
  - owl-role:: concept

- ### Relationships
  - requires [[Spatial Mapping]]
  - enables [[Pose Estimation]]
  - enables [[SLAM]]
  - enables [[Spatial Anchor]]
  - relatedTo [[Computer Vision]]
  - relatedTo [[Scene Graph]]

- ### Content

  ## Overview

  A Coordinate System provides the mathematical scaffolding that makes spatial computing possible. XR runtimes maintain multiple coordinate frames simultaneously: a world coordinate frame anchored to the physical environment, a head/camera frame tracking the viewer's pose, hand or controller frames, and local object frames for placed content. Transformations between frames are represented as rigid-body transforms (rotation plus translation), typically stored as 4x4 homogeneous matrices or dual quaternions for efficient composition. Standards such as OpenXR define a right-handed coordinate convention with Y-up for the runtime-facing API, while game engines may internally use different conventions, requiring careful conversion. SLAM systems continuously refine the world frame by loop-closing against previously mapped landmarks. Spatial anchors persist specific world-frame positions across sessions, enabling shared AR experiences where multiple users see the same virtual content in the same real-world location.

  #### Related Concepts
  - [[Spatial Mapping]]
  - [[Pose Estimation]]
  - [[SLAM]]
  - [[Spatial Anchor]]
  - [[Computer Vision]]
  - [[Scene Graph]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
