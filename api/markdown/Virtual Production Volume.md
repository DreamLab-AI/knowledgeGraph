```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:43f991ee426d55c10d36f4dde29fb8b1d30f2c60500250d159afd4fa4407cf19",
  "@type": "Page",
  "vc:slug": "virtual-production-volume",
  "title": "Virtual Production Volume",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera-tracking",
      "vc:label": "Camera Tracking"
    },
    {
      "@id": "urn:visionflow:linked:camera-tracking-system",
      "vc:label": "Camera Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:color-management-system",
      "vc:label": "Color Management System"
    },
    {
      "@id": "urn:visionflow:linked:display-processor",
      "vc:label": "Display Processor"
    },
    {
      "@id": "urn:visionflow:linked:film-production-studio",
      "vc:label": "Film Production Studio"
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
      "@id": "urn:visionflow:linked:iso-iec-23090-3",
      "vc:label": "ISO/IEC 23090-3"
    },
    {
      "@id": "urn:visionflow:linked:led-wall",
      "vc:label": "LED Wall"
    },
    {
      "@id": "urn:visionflow:linked:lighting-rig",
      "vc:label": "Lighting Rig"
    },
    {
      "@id": "urn:visionflow:linked:physical-stage",
      "vc:label": "Physical Stage"
    },
    {
      "@id": "urn:visionflow:linked:real-time-background-rendering",
      "vc:label": "Real-time Background Rendering"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering-engine",
      "vc:label": "Real-time Rendering Engine"
    },
    {
      "@id": "urn:visionflow:linked:rendering-cluster",
      "vc:label": "Rendering Cluster"
    },
    {
      "@id": "urn:visionflow:linked:smpte-st-2117",
      "vc:label": "SMPTE ST 2117"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-location",
      "vc:label": "Virtual Location"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-production-pipeline",
      "vc:label": "Virtual Production Pipeline"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20158"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Production Volume"
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
  "@id": "urn:ngm:class:virtual-production-volume",
  "@type": "Class",
  "label": "Virtual Production Volume",
  "definition": "Large-scale physical LED wall or projection stage environment that merges live-action footage with real-time rendered 3D backgrounds, including LED panels, tracking systems, camera infrastructure, and stage hardware.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:virtual-production-pipeline",
      "label": "Virtual Production Pipeline"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-tracking-system",
        "label": "Camera Tracking System"
      },
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Cluster"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-tracking",
        "label": "Camera Tracking"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering-engine",
        "label": "Real-Time Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
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
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-time Background Rendering"
      },
      {
        "@id": "urn:ngm:class:virtual-location",
        "label": "Virtual Location"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:film-production",
        "label": "Film Production Studio"
      },
      {
        "@id": "urn:ngm:class:virtual-production-pipeline",
        "label": "Virtual Production Pipeline"
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
  - Large-scale physical LED wall or projection stage environment that merges live-action footage with real-time rendered 3D backgrounds, including LED panels, tracking systems, camera infrastructure, and stage hardware.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualProductionVolume
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[LED Wall]], [[Camera Tracking System]], [[Lighting Rig]], [[Physical Stage]], [[Display Processor]], [[Rendering Cluster]]
  - is-part-of:: [[Virtual Production Pipeline]], [[Film Production Studio]]
  - requires:: [[Real-time Rendering Engine]], [[Camera Tracking]], [[Color Management System]], [[Network Infrastructure]]
  - enables:: [[In-Camera VFX]], [[Real-time Background Rendering]], [[Interactive Filmmaking]], [[Virtual Location]]
  - depends-on:: [[SMPTE ST 2117]], [[ISO/IEC 23090-3]]

- ### Content
  Virtual Production Volume — content pending enrichment.

- ### Provenance
  - sources:: [[SMPTE ST 2117]]
  - migration-date:: 2026-04-26T00:00:00Z
