public:: true

# Resolution Test Chart
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83b673a4940ea902d1fe1a9896da5b16a10480627a9421c31e131a54ec7ffd55",
  "@type": "Page",
  "vc:slug": "resolution-test-chart",
  "title": "Resolution Test Chart",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:display-calibration",
      "vc:label": "Display Calibration"
    },
    {
      "@id": "urn:visionflow:owl:class:calibration-tools",
      "vc:label": "Calibration Tools"
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
      "vc:value": "MV-10021"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Resolution Test Chart"
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
  "@id": "urn:ngm:class:resolution-test-chart",
  "@type": "Class",
  "label": "Resolution Test Chart",
  "definition": "Standardized calibration patterns such as ISO 12233 charts used to measure and validate the optical resolution, colour accuracy, and image quality of displays in virtual reality and augmented reality headsets through computational analysis.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    },
    {
      "@id": "urn:ngm:class:calibration-tools",
      "label": "Calibration Tools"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:display-calibration",
        "label": "Display Calibration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:resolution-test-chart:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:83b673a4940ea902d1fe1a9896da5b16a10480627a9421c31e131a54ec7ffd55"
  },
  "vc:resolutions": [
    {
      "raw": "[[Display Calibration]]",
      "resolved": "urn:visionflow:linked:display-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calibration Tools]]",
      "resolved": "urn:visionflow:owl:class:calibration-tools",
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
  - Standardized calibration patterns such as ISO 12233 charts used to measure and validate the optical resolution, colour accuracy, and image quality of displays in virtual reality and augmented reality headsets through computational analysis.

- ### Semantic Classification
  - owl-class:: spatial-computing:ResolutionTestChart
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Calibration Tools]]
  - enables:: [[Display Calibration]]

- ### Content

  - #### Testing Methods
		- ISO 12233 standard resolution charts
		- Modulation Transfer Function (MTF) analysis
		- Distortion grid tests for spatial offset
		- Field of View (FOV) angular measurement
		- Spectroradiometer colour calibration
  - #### Industry Solutions
		- Radiant Vision Systems AR/VR Lens
		- DXOMARK 3D calibration methods
		- Topcon SR-5000 spectroradiometer
		- TT-ARVR Display Test Module
		- HTC Vive, Meta Quest testing protocols

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
