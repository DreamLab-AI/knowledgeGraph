public:: true

# Hydraulic Cylinder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:474fdb3a3859c0042e827e13b5b043da9518f060e6916e94b238405d51bf1aab",
  "@type": "Page",
  "vc:slug": "hydraulic-cylinder",
  "title": "Hydraulic Cylinder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:hydraulic-actuator",
      "vc:label": "Hydraulic Actuator"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0179"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hydraulic Cylinder"
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
  "@id": "urn:ngm:class:hydraulic-cylinder",
  "@type": "Class",
  "label": "Hydraulic Cylinder",
  "definition": "Hydraulic cylinder uses pressurized fluid in cylinder to produce linear force.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:hydraulic-actuator",
      "label": "Hydraulic Actuator"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:hydraulic-cylinder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:474fdb3a3859c0042e827e13b5b043da9518f060e6916e94b238405d51bf1aab"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hydraulic Actuator]]",
      "resolved": "urn:visionflow:owl:class:hydraulic-actuator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - Hydraulic cylinder uses pressurized fluid in cylinder to produce linear force.

- ### Semantic Classification
  - owl-class:: robotics:HydraulicCylinder
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Hydraulic Actuator]]

- ### Content
  Hydraulic Cylinder — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
