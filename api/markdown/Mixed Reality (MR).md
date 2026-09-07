```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0958beede384b877af44c6fe56fc8ec1af17e6a08d0b294662473a3876f74b37",
  "@type": "Page",
  "vc:slug": "mixed-reality-mr",
  "title": "Mixed Reality (MR)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm",
      "vc:label": "ACM"
    },
    {
      "@id": "urn:visionflow:linked:bidirectional-interaction",
      "vc:label": "Bidirectional Interaction"
    },
    {
      "@id": "urn:visionflow:linked:depth-camera",
      "vc:label": "Depth Camera"
    },
    {
      "@id": "urn:visionflow:linked:environmental-lighting",
      "vc:label": "Environmental Lighting"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-940",
      "vc:label": "ISO 9241-940"
    },
    {
      "@id": "urn:visionflow:linked:lighting-estimation",
      "vc:label": "Lighting Estimation"
    },
    {
      "@id": "urn:visionflow:linked:object-tracking",
      "vc:label": "Object Tracking"
    },
    {
      "@id": "urn:visionflow:linked:occlusion-rendering",
      "vc:label": "Occlusion Rendering"
    },
    {
      "@id": "urn:visionflow:linked:physics-simulation-engine",
      "vc:label": "Physics Simulation Engine"
    },
    {
      "@id": "urn:visionflow:linked:real-time-3-d-reconstruction",
      "vc:label": "Real-Time 3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:realistic-occlusion",
      "vc:label": "Realistic Occlusion"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:depth-sensing",
      "vc:label": "Depth Sensing"
    },
    {
      "@id": "urn:visionflow:owl:class:extended-reality-xr",
      "vc:label": "Extended Reality (XR)"
    },
    {
      "@id": "urn:visionflow:owl:class:hand-tracking",
      "vc:label": "Hand Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "NetworkLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:physics-engine",
      "vc:label": "Physics Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:shared-spatial-anchors",
      "vc:label": "Shared Spatial Anchors"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-mesh",
      "vc:label": "Spatial Mesh"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-physical-collision",
      "vc:label": "Virtual-Physical Collision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20244"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mixed Reality (MR)"
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
  "@id": "urn:ngm:class:mixed-reality-mr",
  "@type": "Class",
  "label": "Mixed Reality (MR)",
  "definition": "Interactive environment where physical and digital elements coexist, interact bidirectionally, and dynamically influence each other in real time with advanced occlusion, lighting, and physics simulation creating seamless blended experiences.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:depth-camera",
        "label": "Depth Camera"
      },
      {
        "@id": "urn:ngm:class:lighting-estimation",
        "label": "Lighting Estimation"
      },
      {
        "@id": "urn:ngm:class:occlusion-rendering",
        "label": "Occlusion Rendering"
      },
      {
        "@id": "urn:ngm:class:physics-simulation-engine",
        "label": "Physics Simulation Engine"
      },
      {
        "@id": "urn:ngm:class:spatial-mesh",
        "label": "Spatial Mesh"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:environmental-lighting",
        "label": "Environmental Lighting"
      },
      {
        "@id": "urn:ngm:class:object-detection-and-tracking",
        "label": "Object Tracking"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "Real-Time 3D Reconstruction"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bidirectional-interaction",
        "label": "Bidirectional Interaction"
      },
      {
        "@id": "urn:ngm:class:realistic-occlusion",
        "label": "Realistic Occlusion"
      },
      {
        "@id": "urn:ngm:class:shared-spatial-anchors",
        "label": "Shared Spatial Anchors"
      },
      {
        "@id": "urn:ngm:class:virtual-physical-collision",
        "label": "Virtual Physical Collision"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:extended-reality-xr",
        "label": "Extended Reality (XR)"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
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

- ### Definition
  - Interactive environment where physical and digital elements coexist, interact bidirectionally, and dynamically influence each other in real time with advanced occlusion, lighting, and physics simulation creating seamless blended experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:MixedReality
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]], [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Spatial Mesh]], [[Physics Simulation Engine]], [[Lighting Estimation]], [[Occlusion Rendering]], [[Depth Camera]]
  - is-part-of:: [[Extended Reality (XR)]], [[Spatial Computing Paradigm]]
  - requires:: [[Real-Time 3D Reconstruction]], [[Environmental Lighting]], [[Object Tracking]], [[Hand Tracking]]
  - enables:: [[Bidirectional Interaction]], [[Virtual-Physical Collision]], [[Realistic Occlusion]], [[Shared Spatial Anchors]]
  - depends-on:: [[SLAM]], [[Depth Sensing]], [[Computer Vision]], [[Physics Engine]]

- ### Content
  Mixed Reality (MR) — content pending enrichment.

- ### Provenance
  - sources:: [[ACM]], [[ISO 9241-940]]
  - migration-date:: 2026-04-26T00:00:00Z
