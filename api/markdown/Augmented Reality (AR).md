public:: true

# Augmented Reality (AR)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:080523a116005bfe2b94ff503bd475d89235c2f5453301970d0fe5724a010550",
  "@type": "Page",
  "vc:slug": "augmented-reality-ar",
  "title": "Augmented Reality (AR)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:6-dof-tracking",
      "vc:label": "6DOF Tracking"
    },
    {
      "@id": "urn:visionflow:linked:contextual-information-overlay",
      "vc:label": "Contextual Information Overlay"
    },
    {
      "@id": "urn:visionflow:linked:device-camera",
      "vc:label": "Device Camera"
    },
    {
      "@id": "urn:visionflow:linked:environmental-sensor",
      "vc:label": "Environmental Sensor"
    },
    {
      "@id": "urn:visionflow:linked:environmental-understanding",
      "vc:label": "Environmental Understanding"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p2048-3",
      "vc:label": "IEEE P2048-3"
    },
    {
      "@id": "urn:visionflow:linked:interactive-holograms",
      "vc:label": "Interactive Holograms"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-940",
      "vc:label": "ISO 9241-940"
    },
    {
      "@id": "urn:visionflow:linked:object-recognition",
      "vc:label": "Object Recognition"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:ar-display-device",
      "vc:label": "AR Display Device"
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
      "@id": "urn:visionflow:owl:class:digital-content-overlay",
      "vc:label": "Digital Content Overlay"
    },
    {
      "@id": "urn:visionflow:owl:class:extended-reality-xr",
      "vc:label": "Extended Reality (XR)"
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
      "@id": "urn:visionflow:owl:class:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-anchoring",
      "vc:label": "Spatial Anchoring"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-mapping",
      "vc:label": "Spatial Mapping"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-tracking-system",
      "vc:label": "Spatial Tracking System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20243"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Augmented Reality (AR)"
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
  "@id": "urn:ngm:class:augmented-reality-ar",
  "@type": "Class",
  "label": "Augmented Reality (AR)",
  "definition": "Interactive system that overlays digital content (visual, audio, haptic) onto the physical environment in real time, enabling spatially-registered blended experiences where virtual information enhances physical perception.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:extended-reality-xr",
      "label": "Extended Reality (XR)"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:environmental-sensor",
        "label": "Environmental Sensor"
      },
      {
        "@id": "urn:ngm:class:ar-display-device",
        "label": "Ar Display Device"
      },
      {
        "@id": "urn:ngm:class:digital-content-overlay",
        "label": "Digital Content Overlay"
      },
      {
        "@id": "urn:ngm:class:spatial-tracking-system",
        "label": "Spatial Tracking System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera",
        "label": "Device Camera"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:object-recognition",
        "label": "Object Recognition"
      },
      {
        "@id": "urn:ngm:class:spatial-anchoring",
        "label": "Spatial Anchoring"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:augmented-reality-ar:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:080523a116005bfe2b94ff503bd475d89235c2f5453301970d0fe5724a010550"
  },
  "vc:resolutions": [
    {
      "raw": "[[6DOF Tracking]]",
      "resolved": "urn:visionflow:linked:6-dof-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Contextual Information Overlay]]",
      "resolved": "urn:visionflow:linked:contextual-information-overlay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Device Camera]]",
      "resolved": "urn:visionflow:linked:device-camera",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Sensor]]",
      "resolved": "urn:visionflow:linked:environmental-sensor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Understanding]]",
      "resolved": "urn:visionflow:linked:environmental-understanding",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P2048-3]]",
      "resolved": "urn:visionflow:linked:ieee-p2048-3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interactive Holograms]]",
      "resolved": "urn:visionflow:linked:interactive-holograms",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-940]]",
      "resolved": "urn:visionflow:linked:iso-9241-940",
      "kind": "StubLink"
    },
    {
      "raw": "[[Object Recognition]]",
      "resolved": "urn:visionflow:linked:object-recognition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[AR Display Device]]",
      "resolved": "urn:visionflow:owl:class:ar-display-device",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Depth Sensing]]",
      "resolved": "urn:visionflow:owl:class:depth-sensing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Content Overlay]]",
      "resolved": "urn:visionflow:owl:class:digital-content-overlay",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Extended Reality (XR)]]",
      "resolved": "urn:visionflow:owl:class:extended-reality-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkLayer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Anchoring]]",
      "resolved": "urn:visionflow:owl:class:spatial-anchoring",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Mapping]]",
      "resolved": "urn:visionflow:owl:class:spatial-mapping",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Tracking System]]",
      "resolved": "urn:visionflow:owl:class:spatial-tracking-system",
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
  - Interactive system that overlays digital content (visual, audio, haptic) onto the physical environment in real time, enabling spatially-registered blended experiences where virtual information enhances physical perception.

- ### Semantic Classification
  - owl-class:: spatial-computing:AugmentedReality
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[NetworkLayer]], [[ComputeLayer]]

- ### Relationships
  - bridges-to:: [[Sensor Input]] (rb)
  - has-part:: [[AR Display Device]], [[Spatial Tracking System]], [[Digital Content Overlay]], [[Environmental Sensor]]
  - is-part-of:: [[Extended Reality (XR)]], [[Spatial Computing Paradigm]]
  - requires:: [[Computer Vision]], [[Real-Time Rendering]], [[Spatial Mapping]], [[Device Camera]]
  - enables:: [[Spatial Anchoring]], [[Object Recognition]], [[Contextual Information Overlay]], [[Interactive Holograms]]
  - depends-on:: [[6DOF Tracking]], [[SLAM]], [[Depth Sensing]], [[Environmental Understanding]]

- ### Content
  Augmented Reality (AR) — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 9241-940]], [[IEEE P2048-3]]
  - migration-date:: 2026-04-26T00:00:00Z
