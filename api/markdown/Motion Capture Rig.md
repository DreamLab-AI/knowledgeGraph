```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:47dbde0456cd70a28e2232664894745feae87f08f153f8560bbab0a67192c9e3",
  "@type": "Page",
  "vc:slug": "motion-capture-rig",
  "title": "Motion Capture Rig",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:biomechanical-analysis",
      "vc:label": "Biomechanical Analysis"
    },
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:data-fusion",
      "vc:label": "Data Fusion"
    },
    {
      "@id": "urn:visionflow:linked:data-processing-unit",
      "vc:label": "Data Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:high-speed-networking",
      "vc:label": "High-Speed Networking"
    },
    {
      "@id": "urn:visionflow:linked:imu-sensors",
      "vc:label": "IMU Sensors"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-17820",
      "vc:label": "ISO/IEC 17820"
    },
    {
      "@id": "urn:visionflow:linked:optical-cameras",
      "vc:label": "Optical Cameras"
    },
    {
      "@id": "urn:visionflow:linked:performance-capture",
      "vc:label": "Performance Capture"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-tracking",
      "vc:label": "Skeletal Tracking"
    },
    {
      "@id": "urn:visionflow:linked:synchronized-timing",
      "vc:label": "Synchronized Timing"
    },
    {
      "@id": "urn:visionflow:linked:tracking-volume",
      "vc:label": "Tracking Volume"
    },
    {
      "@id": "urn:visionflow:owl:class:animation-retargeting",
      "vc:label": "Animation Retargeting"
    },
    {
      "@id": "urn:visionflow:owl:class:calibration-target",
      "vc:label": "Calibration Target"
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
      "@id": "urn:visionflow:owl:class:motion-markers",
      "vc:label": "Motion Markers"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-solver-software",
      "vc:label": "Motion Solver Software"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:reality-capture-system",
      "vc:label": "Reality Capture System"
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
      "vc:value": "20155"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Motion Capture Rig"
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
  "@id": "urn:ngm:class:motion-capture-rig",
  "@type": "Class",
  "label": "Motion Capture Rig",
  "definition": "Physical hardware or software system capturing human motion for animation or simulation through cameras, markers, sensors, and tracking infrastructure.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:imu-sensors",
        "label": "IMU Sensors"
      },
      {
        "@id": "urn:ngm:class:calibration-target",
        "label": "Calibration Target"
      },
      {
        "@id": "urn:ngm:class:motion-markers",
        "label": "Motion Markers"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:high-speed-networking",
        "label": "High-Speed Networking"
      },
      {
        "@id": "urn:ngm:class:motion-solver-software",
        "label": "Motion Solver Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:performance-capture",
        "label": "Performance Capture"
      },
      {
        "@id": "urn:ngm:class:animation-retargeting",
        "label": "Animation Retargeting"
      },
      {
        "@id": "urn:ngm:class:virtual-production",
        "label": "Virtual Production"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reality-capture-system",
        "label": "Reality Capture System"
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
  - Physical hardware or software system capturing human motion for animation or simulation through cameras, markers, sensors, and tracking infrastructure.

- ### Semantic Classification
  - owl-class:: spatial-computing:MotionCaptureRig
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[PhysicalLayer]]

- ### Relationships
  - has-part:: [[Optical Cameras]], [[Motion Markers]], [[IMU Sensors]], [[Calibration Target]], [[Tracking Volume]], [[Data Processing Unit]]
  - is-part-of:: [[Reality Capture System]]
  - requires:: [[Synchronized Timing]], [[Camera Calibration]], [[Motion Solver Software]], [[High-Speed Networking]]
  - enables:: [[Performance Capture]], [[Animation Retargeting]], [[Biomechanical Analysis]], [[Virtual Production]]
  - depends-on:: [[Computer Vision]], [[Skeletal Tracking]], [[Data Fusion]]
  - bridges-to:: [[Sensor Input]] (domain: rb) for sensor-based motion tracking and hardware integration

- ### Content
  Motion Capture Rig — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC 17820]]
  - migration-date:: 2026-04-26T00:00:00Z
