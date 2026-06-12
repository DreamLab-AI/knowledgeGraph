public:: true

# Virtual Reality (VR)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5230b4265c60c0d9a70ad295fda0dd684e5456380d71b70fb441e2b7fae00fe7",
  "@type": "Page",
  "vc:slug": "virtual-reality-vr",
  "title": "Virtual Reality (VR)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:6-do-f-tracking",
      "vc:label": "6DoF Tracking"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:head-mounted-display",
      "vc:label": "Head-Mounted Display"
    },
    {
      "@id": "urn:visionflow:linked:ieee-vr-standards",
      "vc:label": "IEEE VR Standards"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-18039",
      "vc:label": "ISO/IEC 18039"
    },
    {
      "@id": "urn:visionflow:linked:khronos-open-xr",
      "vc:label": "Khronos OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:low-latency-display",
      "vc:label": "Low-Latency Display"
    },
    {
      "@id": "urn:visionflow:linked:stereoscopic-rendering",
      "vc:label": "Stereoscopic Rendering"
    },
    {
      "@id": "urn:visionflow:linked:tracking-sensors",
      "vc:label": "Tracking Sensors"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:extended-reality-xr",
      "vc:label": "Extended Reality (XR)"
    },
    {
      "@id": "urn:visionflow:owl:class:haptic-feedback",
      "vc:label": "Haptic Feedback"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-gaming",
      "vc:label": "Immersive Gaming"
    },
    {
      "@id": "urn:visionflow:owl:class:interaction-domain",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-tracking",
      "vc:label": "Motion Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-rendering",
      "vc:label": "Real-time Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-audio-system",
      "vc:label": "Spatial Audio System"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-presence",
      "vc:label": "Virtual Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-tourism",
      "vc:label": "Virtual Tourism"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-training",
      "vc:label": "Virtual Training"
    },
    {
      "@id": "urn:visionflow:owl:class:vr-controllers",
      "vc:label": "VR Controllers"
    },
    {
      "@id": "urn:visionflow:owl:class:vr-rendering-engine",
      "vc:label": "VR Rendering Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20327"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Reality (VR)"
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
  "@id": "urn:ngm:class:virtual-reality-vr",
  "@type": "Class",
  "label": "Virtual Reality (VR)",
  "definition": "Immersive technology system that combines physical head-mounted display hardware with virtual computer-generated 3D environments to create fully encompassing sensory experiences that replace user perception of the physical world.",
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
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      },
      {
        "@id": "urn:ngm:class:tracking-sensors",
        "label": "Tracking Sensors"
      },
      {
        "@id": "urn:ngm:class:spatial-audio-system",
        "label": "Spatial Audio System"
      },
      {
        "@id": "urn:ngm:class:vr-controllers",
        "label": "VR Controllers"
      },
      {
        "@id": "urn:ngm:class:vr-rendering-engine",
        "label": "VR Rendering Engine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:6-do-f-tracking",
        "label": "6DoF Tracking"
      },
      {
        "@id": "urn:ngm:class:low-latency-display",
        "label": "Low-Latency Display"
      },
      {
        "@id": "urn:ngm:class:stereoscopic-rendering",
        "label": "Stereoscopic Rendering"
      },
      {
        "@id": "urn:ngm:class:spatial-computing-paradigm",
        "label": "Spatial Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-gaming",
        "label": "Immersive Gaming"
      },
      {
        "@id": "urn:ngm:class:virtual-presence",
        "label": "Virtual Presence"
      },
      {
        "@id": "urn:ngm:class:virtual-tourism",
        "label": "Virtual Tourism"
      },
      {
        "@id": "urn:ngm:class:virtual-training",
        "label": "Virtual Training"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:extended-reality-xr",
        "label": "Extended Reality (XR)"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-reality-vr:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5230b4265c60c0d9a70ad295fda0dd684e5456380d71b70fb441e2b7fae00fe7"
  },
  "vc:resolutions": [
    {
      "raw": "[[6DoF Tracking]]",
      "resolved": "urn:visionflow:linked:6-do-f-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "StubLink"
    },
    {
      "raw": "[[Head-Mounted Display]]",
      "resolved": "urn:visionflow:linked:head-mounted-display",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE VR Standards]]",
      "resolved": "urn:visionflow:linked:ieee-vr-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 18039]]",
      "resolved": "urn:visionflow:linked:iso-iec-18039",
      "kind": "StubLink"
    },
    {
      "raw": "[[Khronos OpenXR]]",
      "resolved": "urn:visionflow:linked:khronos-open-xr",
      "kind": "StubLink"
    },
    {
      "raw": "[[Low-Latency Display]]",
      "resolved": "urn:visionflow:linked:low-latency-display",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stereoscopic Rendering]]",
      "resolved": "urn:visionflow:linked:stereoscopic-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tracking Sensors]]",
      "resolved": "urn:visionflow:linked:tracking-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Extended Reality (XR)]]",
      "resolved": "urn:visionflow:owl:class:extended-reality-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Haptic Feedback]]",
      "resolved": "urn:visionflow:owl:class:haptic-feedback",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Gaming]]",
      "resolved": "urn:visionflow:owl:class:immersive-gaming",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:interaction-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Tracking]]",
      "resolved": "urn:visionflow:owl:class:motion-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-time Rendering]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Audio System]]",
      "resolved": "urn:visionflow:owl:class:spatial-audio-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Presence]]",
      "resolved": "urn:visionflow:owl:class:virtual-presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Tourism]]",
      "resolved": "urn:visionflow:owl:class:virtual-tourism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Training]]",
      "resolved": "urn:visionflow:owl:class:virtual-training",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VR Controllers]]",
      "resolved": "urn:visionflow:owl:class:vr-controllers",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VR Rendering Engine]]",
      "resolved": "urn:visionflow:owl:class:vr-rendering-engine",
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
  - Immersive technology system that combines physical head-mounted display hardware with virtual computer-generated 3D environments to create fully encompassing sensory experiences that replace user perception of the physical world.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualReality
  - owl-role:: Object
  - owl-inferred:: spatial-computing:HybridObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Head-Mounted Display]], [[VR Controllers]], [[Tracking Sensors]], [[VR Rendering Engine]], [[Spatial Audio System]]
  - is-part-of:: [[Extended Reality (XR)]]
  - requires:: [[Spatial Computing Paradigm]], [[6DoF Tracking]], [[Stereoscopic Rendering]], [[Low-Latency Display]]
  - enables:: [[Virtual Presence]], [[Immersive Gaming]], [[Virtual Training]], [[Virtual Tourism]]
  - depends-on:: [[GPU]], [[Real-time Rendering]], [[Motion Tracking]], [[Haptic Feedback]]

- ### Content
  Virtual Reality (VR) — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE VR Standards]], [[Khronos OpenXR]], [[ISO/IEC 18039]]
  - migration-date:: 2026-04-26T00:00:00Z
