```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7edecf6d42caf2e06b68950c00b60e9937b71ae853cc62cb93d802a806173312",
  "@type": "Page",
  "vc:slug": "reality-capture-system",
  "title": "Reality Capture System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-model-generation",
      "vc:label": "3D Model Generation"
    },
    {
      "@id": "urn:visionflow:linked:3-d-scanner",
      "vc:label": "3D Scanner"
    },
    {
      "@id": "urn:visionflow:linked:depth-sensor",
      "vc:label": "Depth Sensor"
    },
    {
      "@id": "urn:visionflow:linked:environment-reconstruction",
      "vc:label": "Environment Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-17820",
      "vc:label": "ISO/IEC 17820"
    },
    {
      "@id": "urn:visionflow:linked:lidar-sensor",
      "vc:label": "LIDAR Sensor"
    },
    {
      "@id": "urn:visionflow:linked:photogrammetry-camera",
      "vc:label": "Photogrammetry Camera"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud-processing",
      "vc:label": "Point Cloud Processing"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud-processor",
      "vc:label": "Point Cloud Processor"
    },
    {
      "@id": "urn:visionflow:linked:tracking-system",
      "vc:label": "Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:visual-representation",
      "vc:label": "Visual Representation"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-processing-hardware",
      "vc:label": "Data Processing Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin-creation",
      "vc:label": "Digital Twin Creation"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin-creation-pipeline",
      "vc:label": "Digital Twin Creation Pipeline"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-capture-rig",
      "vc:label": "Motion Capture Rig"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-calibration",
      "vc:label": "Spatial Calibration"
    },
    {
      "@id": "urn:visionflow:owl:class:storage-infrastructure",
      "vc:label": "Storage Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-production-workflow",
      "vc:label": "Virtual Production Workflow"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20157"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reality Capture System"
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
  "@id": "urn:ngm:class:reality-capture-system",
  "@type": "Class",
  "label": "Reality Capture System",
  "definition": "Physical hardware system comprising 3D scanners, LIDAR sensors, photogrammetry cameras, and associated equipment for acquiring spatial and visual data from real-world environments to create digital representations.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:depth-sensor",
        "label": "Depth Sensor"
      },
      {
        "@id": "urn:ngm:class:lidar-sensor",
        "label": "LiDAR Sensor"
      },
      {
        "@id": "urn:ngm:class:point-cloud-processing",
        "label": "Point Cloud Processor"
      },
      {
        "@id": "urn:ngm:class:tracking-system",
        "label": "Tracking System"
      },
      {
        "@id": "urn:ngm:class:motion-capture-rig",
        "label": "Motion Capture Rig"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-processing-hardware",
        "label": "Data Processing Hardware"
      },
      {
        "@id": "urn:ngm:class:spatial-calibration",
        "label": "Spatial Calibration"
      },
      {
        "@id": "urn:ngm:class:storage-infrastructure",
        "label": "Storage Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-generation",
        "label": "3D Model Generation"
      },
      {
        "@id": "urn:ngm:class:visual-representation",
        "label": "Visual Representation"
      },
      {
        "@id": "urn:ngm:class:digital-twin-creation",
        "label": "Digital Twin Creation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-twin-creation-pipeline",
        "label": "Digital Twin Creation Pipeline"
      },
      {
        "@id": "urn:ngm:class:virtual-production-workflow",
        "label": "Virtual Production Workflow"
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
  - Physical hardware system comprising 3D scanners, LIDAR sensors, photogrammetry cameras, and associated equipment for acquiring spatial and visual data from real-world environments to create digital representations.

- ### Semantic Classification
  - owl-class:: spatial-computing:RealityCaptureSystem
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[CreativeMediaDomain]]
  - implemented-in-layer:: [[PhysicalLayer]]

- ### Relationships
  - has-part:: [[3D Scanner]], [[LIDAR Sensor]], [[Photogrammetry Camera]], [[Depth Sensor]], [[Point Cloud Processor]], [[Tracking System]], [[Motion Capture Rig]]
  - is-part-of:: [[Digital Twin Creation Pipeline]], [[Virtual Production Workflow]]
  - requires:: [[Spatial Calibration]], [[Data Processing Hardware]], [[Storage Infrastructure]]
  - enables:: [[3D Model Generation]], [[Environment Reconstruction]], [[Digital Twin Creation]], [[Visual Representation]]
  - depends-on:: [[ISO/IEC 17820]], [[Point Cloud Processing]]

- ### Content
  Reality Capture System — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
