public:: true

# Computing Hardware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9b62ee4dd8398ff57c5191d4ae4885dcf78c53b0e3c7c30f1984f4504fc9695a",
  "@type": "Page",
  "vc:slug": "computing-hardware",
  "title": "Computing Hardware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9531"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Computing Hardware"
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
  "@id": "urn:ngm:class:computing-hardware",
  "@type": "Class",
  "label": "Computing Hardware",
  "definition": "Computing Hardware encompasses the physical processing, memory, and peripheral devices that underpin spatial computing experiences, including GPUs, neural accelerators, XR headsets, and edge devices. It forms the substrate on which spatial applications, rendering engines, and sensor fusion pipelines execute.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:xr-hardware", "label": "XR Hardware"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:hardware-and-edge", "label": "Hardware and Edge"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:computing-hardware:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9b62ee4dd8398ff57c5191d4ae4885dcf78c53b0e3c7c30f1984f4504fc9695a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
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
  - Computing Hardware encompasses the physical processing, memory, and peripheral devices that underpin spatial computing experiences, including GPUs, neural accelerators, XR headsets, and edge devices. It forms the substrate on which spatial applications, rendering engines, and sensor fusion pipelines execute.

- ### Semantic Classification
  - owl-class:: spatial-computing:ComputingHardware
  - owl-role:: concept

- ### Relationships
  - bridges-to:: [[Sensor Input]]
  - enables:: [[Spatial Computing]], [[XR Hardware]]
  - has-part:: [[GPU Compute]], [[Hardware Acceleration]]
  - supports:: [[Hardware and Edge]], [[Mixed Reality]]

- ### Content

  ## Overview

  Computing Hardware encompasses the physical processing, memory, and peripheral devices that underpin spatial computing experiences, including GPUs, neural accelerators, XR headsets, and edge devices. It forms the substrate on which spatial applications, rendering engines, and sensor fusion pipelines execute.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
