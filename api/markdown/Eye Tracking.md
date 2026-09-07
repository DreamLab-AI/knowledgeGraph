```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c8156483e73a6211f097437ed0f386a178c35e6636897c9b87efe71e9392c875",
  "@type": "Page",
  "vc:slug": "eye-tracking",
  "title": "Eye Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm",
      "vc:label": "ACM"
    },
    {
      "@id": "urn:visionflow:linked:attention-analytics",
      "vc:label": "Attention Analytics"
    },
    {
      "@id": "urn:visionflow:linked:calibration-system",
      "vc:label": "Calibration System"
    },
    {
      "@id": "urn:visionflow:linked:edge-layer",
      "vc:label": "EdgeLayer"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:eye-gesture-control",
      "vc:label": "Eye Gesture Control"
    },
    {
      "@id": "urn:visionflow:linked:foveated-rendering",
      "vc:label": "Foveated Rendering"
    },
    {
      "@id": "urn:visionflow:linked:gaze-based-interaction",
      "vc:label": "Gaze-Based Interaction"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing-unit",
      "vc:label": "Graphics Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:head-mounted-display",
      "vc:label": "Head-Mounted Display"
    },
    {
      "@id": "urn:visionflow:linked:high-speed-camera",
      "vc:label": "High-Speed Camera"
    },
    {
      "@id": "urn:visionflow:linked:hot-mirror",
      "vc:label": "Hot Mirror"
    },
    {
      "@id": "urn:visionflow:linked:human-computer-interaction-framework",
      "vc:label": "Human-Computer Interaction Framework"
    },
    {
      "@id": "urn:visionflow:linked:image-sensor",
      "vc:label": "Image Sensor"
    },
    {
      "@id": "urn:visionflow:linked:low-latency-data-bus",
      "vc:label": "Low-Latency Data Bus"
    },
    {
      "@id": "urn:visionflow:linked:perceptual-computing-system",
      "vc:label": "Perceptual Computing System"
    },
    {
      "@id": "urn:visionflow:linked:pupil-detection-algorithm",
      "vc:label": "Pupil Detection Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:real-time-processing-unit",
      "vc:label": "Real-Time Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:vergence-accommodation-matching",
      "vc:label": "Vergence-Accommodation Matching"
    },
    {
      "@id": "urn:visionflow:owl:class:infrared-camera",
      "vc:label": "Infrared Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:infrared-led-illuminator",
      "vc:label": "Infrared LED Illuminator"
    },
    {
      "@id": "urn:visionflow:owl:class:infrared-light-source",
      "vc:label": "Infrared Light Source"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:optical-calibration-target",
      "vc:label": "Optical Calibration Target"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-engine",
      "vc:label": "Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-headset",
      "vc:label": "XR Headset"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20152"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Eye Tracking"
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
  "@id": "urn:ngm:class:eye-tracking",
  "@type": "Class",
  "label": "Eye Tracking",
  "definition": "Physical sensor hardware that measures gaze direction, pupil dilation, and eye movements to enable foveated rendering, attention analytics, and natural interaction in XR devices.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    },
    {
      "@id": "urn:ngm:class:infrared-camera",
      "label": "Infrared Camera"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:calibration-system",
        "label": "Calibration System"
      },
      {
        "@id": "urn:ngm:class:image-sensor",
        "label": "Image Sensor"
      },
      {
        "@id": "urn:ngm:class:infrared-camera",
        "label": "Infrared Camera"
      },
      {
        "@id": "urn:ngm:class:infrared-led-illuminator",
        "label": "Infrared Led Illuminator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:infrared-light-source",
        "label": "Infrared Light Source"
      },
      {
        "@id": "urn:ngm:class:optical-calibration-target",
        "label": "Optical Calibration Target"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction Framework"
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
  - Physical sensor hardware that measures gaze direction, pupil dilation, and eye movements to enable foveated rendering, attention analytics, and natural interaction in XR devices.

- ### Semantic Classification
  - owl-class:: spatial-computing:EyeTracking
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[EdgeLayer]]

- ### Relationships
  - has-part:: [[Infrared Camera]], [[Infrared LED Illuminator]], [[Hot Mirror]], [[Image Sensor]], [[Pupil Detection Algorithm]], [[Calibration System]]
  - is-part-of:: [[Perceptual Computing System]], [[Human-Computer Interaction Framework]]
  - requires:: [[High-Speed Camera]], [[Infrared Light Source]], [[Optical Calibration Target]], [[Real-Time Processing Unit]], [[Low-Latency Data Bus]]
  - enables:: [[Foveated Rendering]], [[Gaze-Based Interaction]], [[Attention Analytics]], [[Vergence-Accommodation Matching]], [[Eye Gesture Control]]
  - depends-on:: [[XR Headset]], [[Graphics Processing Unit]], [[Head-Mounted Display]], [[Rendering Engine]]

- ### Content
  Eye Tracking — content pending enrichment.

- ### Provenance
  - sources:: [[ACM]], [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
