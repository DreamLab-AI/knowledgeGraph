public:: true

# Machine Vision
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb335785bb2e9051879a6bdcddc84fac18cf243b318d62c91c68004aa38dfe32",
  "@type": "Page",
  "vc:slug": "machine-vision",
  "title": "Machine Vision",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor",
      "vc:label": "Sensor"
    },
    {
      "@id": "urn:visionflow:linked:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Machine Vision"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:machine-vision",
  "@type": "Class",
  "label": "Machine Vision",
  "definition": "The application of imaging and image analysis to automate inspection, measurement and guidance tasks, particularly in industrial and manufacturing settings.",
  "domain": "computer-vision",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-vision",
      "label": "Computer Vision"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:machine-vision:180aadd607e6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb335785bb2e9051879a6bdcddc84fac18cf243b318d62c91c68004aa38dfe32"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensor]]",
      "resolved": "urn:visionflow:linked:sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Object Detection]]",
      "resolved": "urn:visionflow:linked:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The application of imaging and image analysis to automate inspection, measurement and guidance tasks, particularly in industrial and manufacturing settings.

- ### Semantic Classification
  - owl-class:: computer-vision:MachineVision
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Vision]]
  - bridges-to:: [[Computer Vision]]
  - requires:: [[Sensor]]
  - enables:: [[Object Detection]]

- ### Content
  - Machine vision combines cameras, lighting and processing to perform tasks such as defect detection, dimensional measurement, barcode reading and robot guidance on production lines. It emphasises reliability, speed and integration with industrial control systems.
  - While closely related to computer vision, the term usually denotes the engineering discipline applied to automation rather than the broader research field. Systems may use classical image processing for well-controlled tasks and increasingly incorporate learned models for more variable inspection problems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
