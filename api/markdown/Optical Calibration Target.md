public:: true

# Optical Calibration Target
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a3862e9998f0e78f264c86ff2e1dc495d5138662ea21d6e7bd9fc7d44183b163",
  "@type": "Page",
  "vc:slug": "optical-calibration-target",
  "title": "Optical Calibration Target",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optical-system-accuracy",
      "vc:label": "Optical System Accuracy"
    },
    {
      "@id": "urn:visionflow:owl:class:calibration-equipment",
      "vc:label": "Calibration Equipment"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9988"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Optical Calibration Target"
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
  "@id": "urn:ngm:class:optical-calibration-target",
  "@type": "Class",
  "label": "Optical Calibration Target",
  "definition": "A precision test pattern used for camera and imaging system calibration, including color charts, resolution targets, and geometric patterns that enable accurate measurement of color reproduction, distortion, magnification, and spatial frequency response in optical systems.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:calibration-equipment",
      "label": "Calibration Equipment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:optical-system-accuracy",
        "label": "Optical System Accuracy"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:optical-calibration-target:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a3862e9998f0e78f264c86ff2e1dc495d5138662ea21d6e7bd9fc7d44183b163"
  },
  "vc:resolutions": [
    {
      "raw": "[[Optical System Accuracy]]",
      "resolved": "urn:visionflow:linked:optical-system-accuracy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calibration Equipment]]",
      "resolved": "urn:visionflow:owl:class:calibration-equipment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A precision test pattern used for camera and imaging system calibration, including color charts, resolution targets, and geometric patterns that enable accurate measurement of color reproduction, distortion, magnification, and spatial frequency response in optical systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:OpticalCalibrationTarget
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Calibration Equipment]]
  - enables:: [[Optical System Accuracy]]

- ### Content

  - #### Target Types
		- Color charts (ColorChecker) for color accuracy calibration
		- Resolution targets for spatial frequency response testing
		- Geometric patterns for distortion measurement
		- Gray level targets for tonal range assessment
		- NIST-traceable calibration standards
  - #### Materials and Substrates
		- Chrome on Glass for high precision applications
		- Chrome on Opal for diffuse reflection
		- Photo Paper for portable use
		- Film-based targets for specialized testing
		- Precision printing up to 250 line pairs per millimeter

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
