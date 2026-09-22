public:: true

# Calibration Tools
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5e22a70ecee044334c527668764814cb7516dc7bfda4356b7f59e4ac9e10e6c3",
  "@type": "Page",
  "vc:slug": "calibration-tools",
  "title": "Calibration Tools",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9525"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Calibration Tools"
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
  "@id": "urn:ngm:class:calibration-tools",
  "@type": "Class",
  "label": "Calibration Tools",
  "definition": "Software and hardware utilities used to align, tune, and verify the accuracy of XR sensors, displays, and tracking systems. Calibration establishes ground-truth references for IMUs, cameras, optical tracking arrays, and display geometry, ensuring that virtual content is correctly registered to the physical world and that tracking data is within acceptable error tolerances.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:rendering-pipeline",
        "label": "Rendering Pipeline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mixed-reality",
        "label": "Mixed Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:imu",
        "label": "IMU"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:optical-tracking",
        "label": "Optical Tracking"
      },
      {
        "@id": "urn:ngm:class:environmental-verification",
        "label": "Environmental Verification"
      },
      {
        "@id": "urn:ngm:class:xr-runtime-environment",
        "label": "XR Runtime Environment"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:calibration-tools:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5e22a70ecee044334c527668764814cb7516dc7bfda4356b7f59e4ac9e10e6c3"
  },
  "vc:resolutions": [
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
  - Software and hardware utilities used to align, tune, and verify the accuracy of XR sensors, displays, and tracking systems. Calibration establishes ground-truth references for IMUs, cameras, optical tracking arrays, and display geometry, ensuring that virtual content is correctly registered to the physical world and that tracking data is within acceptable error tolerances.

- ### Semantic Classification
  - owl-class:: spatial-computing:CalibrationTools
  - owl-role:: concept

- ### Relationships
  - Supports [[Optical Tracking]]
  - Supports [[Environmental Verification]]
  - Supports [[XR Runtime Environment]]
  - Uses [[IMU]]
  - Uses [[Photogrammetry]]
  - Requires [[Rendering Pipeline]]
  - Enables [[Mixed Reality]]
  - Enables [[Augmented Reality]]

- ### Content

  ## Overview

  Calibration tools are essential for maintaining tracking accuracy and visual fidelity in XR systems. They encompass display geometry calibrators that correct lens distortion, IMU bias estimation routines, stereo camera extrinsic calibration procedures, and optical marker placement wizards. Without regular calibration, positional drift degrades user comfort and breaks world-locked AR overlays.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
