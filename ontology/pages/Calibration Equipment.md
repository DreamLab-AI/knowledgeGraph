public:: true

# Calibration Equipment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:993fcbbe81d9f3cb96265e5ad14fa60e2446fba53e1ec147642f245377c0423a",
  "@type": "Page",
  "vc:slug": "calibration-equipment",
  "title": "Calibration Equipment",
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
      "vc:value": "MV-9524"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Calibration Equipment"
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
  "@id": "urn:ngm:class:calibration-equipment",
  "@type": "Class",
  "label": "Calibration Equipment",
  "definition": "Physical instruments and reference artefacts used to measure, adjust, and verify the accuracy of sensors, displays, and tracking systems in spatial computing deployments. Calibration equipment includes colour reference targets, IMU calibration boards, structured-light patterns, and photometric probes, all of which underpin the geometric and radiometric correctness of XR pipelines.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:calibration-target",
        "label": "Calibration Target"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:display-metrology",
        "label": "Display Metrology"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:calibration-equipment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:993fcbbe81d9f3cb96265e5ad14fa60e2446fba53e1ec147642f245377c0423a"
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
  - Physical instruments and reference artefacts used to measure, adjust, and verify the accuracy of sensors, displays, and tracking systems in spatial computing deployments. Calibration equipment includes colour reference targets, IMU calibration boards, structured-light patterns, and photometric probes, all of which underpin the geometric and radiometric correctness of XR pipelines.

- ### Semantic Classification
  - owl-class:: spatial-computing:CalibrationEquipment
  - owl-role:: concept

- ### Relationships
  - Uses [[Calibration]]
  - Uses [[Calibration Target]]
  - Supports [[Computer Vision]]
  - Supports [[Sensor Fusion]]
  - Related To [[Display Metrology]]
  - Related To [[Photogrammetry]]

- ### Content

  ## Overview

  Calibration Equipment represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
