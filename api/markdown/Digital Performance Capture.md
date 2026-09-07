```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:603f13bcfe2894c33baae9c90147408d35670585571a75066e8a1e2abb197931",
  "@type": "Page",
  "vc:slug": "digital-performance-capture",
  "title": "Digital Performance Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:audio-recording-equipment",
      "vc:label": "Audio Recording Equipment"
    },
    {
      "@id": "urn:visionflow:linked:facial-capture-system",
      "vc:label": "Facial Capture System"
    },
    {
      "@id": "urn:visionflow:linked:live-performance",
      "vc:label": "Live Performance"
    },
    {
      "@id": "urn:visionflow:linked:motion-capture-system",
      "vc:label": "Motion Capture System"
    },
    {
      "@id": "urn:visionflow:linked:optical-sensors",
      "vc:label": "Optical Sensors"
    },
    {
      "@id": "urn:visionflow:linked:performance-animation",
      "vc:label": "Performance Animation"
    },
    {
      "@id": "urn:visionflow:linked:real-time-solver",
      "vc:label": "Real-Time Solver"
    },
    {
      "@id": "urn:visionflow:linked:reality-capture-workflow",
      "vc:label": "Reality Capture Workflow"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-animation",
      "vc:label": "Skeletal Animation"
    },
    {
      "@id": "urn:visionflow:linked:smpte-st-2119",
      "vc:label": "SMPTE ST 2119"
    },
    {
      "@id": "urn:visionflow:linked:synchronization-system",
      "vc:label": "Synchronization System"
    },
    {
      "@id": "urn:visionflow:linked:voice-recording-system",
      "vc:label": "Voice Recording System"
    },
    {
      "@id": "urn:visionflow:owl:class:character-rigging",
      "vc:label": "Character Rigging"
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
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-actor-creation",
      "vc:label": "Digital Actor Creation"
    },
    {
      "@id": "urn:visionflow:owl:class:marker-based-tracking",
      "vc:label": "Marker-Based Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-character-animation",
      "vc:label": "Real-Time Character Animation"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-production",
      "vc:label": "Virtual Production"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20196"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Performance Capture"
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
  "@id": "urn:ngm:class:digital-performance-capture",
  "@type": "Class",
  "label": "Digital Performance Capture",
  "definition": "Digital Performance Capture is a type of Creative Media Domain in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-application",
        "label": "AI Application"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:facial-capture-system",
        "label": "Facial Capture System"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:optical-sensors",
        "label": "Optical Sensors"
      },
      {
        "@id": "urn:ngm:class:marker-based-tracking",
        "label": "Marker Based Tracking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-actor-creation",
        "label": "Digital Actor Creation"
      },
      {
        "@id": "urn:ngm:class:real-time-character-animation",
        "label": "Real Time Character Animation"
      },
      {
        "@id": "urn:ngm:class:virtual-production",
        "label": "Virtual Production"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reality-capture-workflow",
        "label": "Reality Capture Workflow"
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
  - Integrated capture of body, facial, and voice data for real-time animation of digital characters in virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalPerformanceCapture
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[PhysicalLayer]], [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Motion Capture System]], [[Facial Capture System]], [[Voice Recording System]], [[Real-Time Solver]]
  - is-part-of:: [[Reality Capture Workflow]]
  - requires:: [[Marker-Based Tracking]], [[Optical Sensors]], [[Audio Recording Equipment]], [[Synchronization System]]
  - enables:: [[Real-Time Character Animation]], [[Virtual Production]], [[Live Performance]], [[Digital Actor Creation]]
  - depends-on:: [[Performance Animation]], [[Character Rigging]], [[Skeletal Animation]]

- ### Content
  Digital Performance Capture — content pending enrichment.

- ### Provenance
  - sources:: [[SMPTE ST 2119]]
  - migration-date:: 2026-04-26T00:00:00Z
