public:: true

# Virtual Production (VP)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ccf50b678310feddb32aafc818f3823009d7c29415970854bfaad5db50acce0b",
  "@type": "Page",
  "vc:slug": "virtual-production-vp",
  "title": "Virtual Production (VP)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:broadcast-production",
      "vc:label": "Broadcast Production"
    },
    {
      "@id": "urn:visionflow:linked:camera-tracking",
      "vc:label": "Camera Tracking"
    },
    {
      "@id": "urn:visionflow:linked:camera-tracking-system",
      "vc:label": "Camera Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:color-grading",
      "vc:label": "Color Grading"
    },
    {
      "@id": "urn:visionflow:linked:compositing-pipeline",
      "vc:label": "Compositing Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:film-production-workflow",
      "vc:label": "Film Production Workflow"
    },
    {
      "@id": "urn:visionflow:linked:in-camera-vfx",
      "vc:label": "In-Camera VFX"
    },
    {
      "@id": "urn:visionflow:linked:interactive-filmmaking",
      "vc:label": "Interactive Filmmaking"
    },
    {
      "@id": "urn:visionflow:linked:led-display-system",
      "vc:label": "LED Display System"
    },
    {
      "@id": "urn:visionflow:linked:led-volume",
      "vc:label": "LED Volume"
    },
    {
      "@id": "urn:visionflow:linked:live-compositing",
      "vc:label": "Live Compositing"
    },
    {
      "@id": "urn:visionflow:linked:previsualization",
      "vc:label": "Previsualization"
    },
    {
      "@id": "urn:visionflow:linked:real-time-graphics",
      "vc:label": "Real-Time Graphics"
    },
    {
      "@id": "urn:visionflow:linked:render-engine",
      "vc:label": "Render Engine"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-production-wg",
      "vc:label": "SIGGRAPH Production WG"
    },
    {
      "@id": "urn:visionflow:linked:smpte-st-2119",
      "vc:label": "SMPTE ST 2119"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:creative-media-domain",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-capture",
      "vc:label": "Motion Capture"
    },
    {
      "@id": "urn:visionflow:owl:class:photorealistic-rendering",
      "vc:label": "Photorealistic Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-camera",
      "vc:label": "Virtual Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-scouting",
      "vc:label": "Virtual Scouting"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-set-design",
      "vc:label": "Virtual Set Design"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-hardware",
      "vc:label": "XR Hardware"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20198"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Production (VP)"
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
  "@id": "urn:ngm:class:virtual-production-vp",
  "@type": "Class",
  "label": "Virtual Production (VP)",
  "definition": "Production technique blending real and virtual scenes using XR and real-time rendering for film, broadcast, and immersive content creation.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:rendering-technique",
      "label": "Rendering Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-tracking",
        "label": "Camera Tracking"
      },
      {
        "@id": "urn:ngm:class:compositing-pipeline",
        "label": "Compositing Pipeline"
      },
      {
        "@id": "urn:ngm:class:led-volume",
        "label": "LED Volume"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:virtual-camera",
        "label": "Virtual Camera"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-tracking-system",
        "label": "Camera Tracking System"
      },
      {
        "@id": "urn:ngm:class:led-display-system",
        "label": "LED Display System"
      },
      {
        "@id": "urn:ngm:class:render-engine",
        "label": "Render Engine"
      },
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      },
      {
        "@id": "urn:ngm:class:xr-hardware",
        "label": "XR Hardware"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:in-camera-vfx",
        "label": "In-Camera VFX"
      },
      {
        "@id": "urn:ngm:class:interactive-filmmaking",
        "label": "Interactive Filmmaking"
      },
      {
        "@id": "urn:ngm:class:live-compositing",
        "label": "Live Compositing"
      },
      {
        "@id": "urn:ngm:class:previsualization",
        "label": "Previsualization"
      },
      {
        "@id": "urn:ngm:class:virtual-scouting",
        "label": "Virtual Scouting"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:broadcast-production",
        "label": "Broadcast Production"
      },
      {
        "@id": "urn:ngm:class:film-production-workflow",
        "label": "Film Production Workflow"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-production-vp:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ccf50b678310feddb32aafc818f3823009d7c29415970854bfaad5db50acce0b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Broadcast Production]]",
      "resolved": "urn:visionflow:linked:broadcast-production",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera Tracking]]",
      "resolved": "urn:visionflow:linked:camera-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera Tracking System]]",
      "resolved": "urn:visionflow:linked:camera-tracking-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Color Grading]]",
      "resolved": "urn:visionflow:linked:color-grading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compositing Pipeline]]",
      "resolved": "urn:visionflow:linked:compositing-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Film Production Workflow]]",
      "resolved": "urn:visionflow:linked:film-production-workflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[In-Camera VFX]]",
      "resolved": "urn:visionflow:linked:in-camera-vfx",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interactive Filmmaking]]",
      "resolved": "urn:visionflow:linked:interactive-filmmaking",
      "kind": "StubLink"
    },
    {
      "raw": "[[LED Display System]]",
      "resolved": "urn:visionflow:linked:led-display-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[LED Volume]]",
      "resolved": "urn:visionflow:linked:led-volume",
      "kind": "StubLink"
    },
    {
      "raw": "[[Live Compositing]]",
      "resolved": "urn:visionflow:linked:live-compositing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Previsualization]]",
      "resolved": "urn:visionflow:linked:previsualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-Time Graphics]]",
      "resolved": "urn:visionflow:linked:real-time-graphics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Render Engine]]",
      "resolved": "urn:visionflow:linked:render-engine",
      "kind": "StubLink"
    },
    {
      "raw": "[[SIGGRAPH Production WG]]",
      "resolved": "urn:visionflow:linked:siggraph-production-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[SMPTE ST 2119]]",
      "resolved": "urn:visionflow:linked:smpte-st-2119",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:owl:class:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Capture]]",
      "resolved": "urn:visionflow:owl:class:motion-capture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Photorealistic Rendering]]",
      "resolved": "urn:visionflow:owl:class:photorealistic-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:owl:class:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Camera]]",
      "resolved": "urn:visionflow:owl:class:virtual-camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Scouting]]",
      "resolved": "urn:visionflow:owl:class:virtual-scouting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Set Design]]",
      "resolved": "urn:visionflow:owl:class:virtual-set-design",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Hardware]]",
      "resolved": "urn:visionflow:owl:class:xr-hardware",
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
  - Production technique blending real and virtual scenes using XR and real-time rendering for film, broadcast, and immersive content creation.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualProduction
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ComputeLayer]], [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Real-Time Rendering]], [[Motion Capture]], [[LED Volume]], [[Camera Tracking]], [[Virtual Camera]], [[Compositing Pipeline]]
  - is-part-of:: [[Film Production Workflow]], [[Broadcast Production]]
  - requires:: [[Game Engine]], [[Render Engine]], [[XR Hardware]], [[Camera Tracking System]], [[LED Display System]]
  - enables:: [[In-Camera VFX]], [[Interactive Filmmaking]], [[Live Compositing]], [[Virtual Scouting]], [[Previsualization]]
  - depends-on:: [[Real-Time Graphics]], [[Photorealistic Rendering]], [[Color Grading]], [[Virtual Set Design]]

- ### Content
  Virtual Production (VP) — content pending enrichment.

- ### Provenance
  - sources:: [[SMPTE ST 2119]], [[SIGGRAPH Production WG]]
  - migration-date:: 2026-04-26T00:00:00Z
