public:: true

# Electric Linear Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29",
  "@type": "Page",
  "vc:slug": "electric-linear-actuator",
  "title": "Electric Linear Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:electric-actuator",
      "vc:label": "Electric Actuator"
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
      "vc:value": "RB-0174"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Electric Linear Actuator"
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
  "@id": "urn:ngm:class:electric-linear-actuator",
  "@type": "Class",
  "label": "Electric Linear Actuator",
  "definition": "An actuator that converts rotary electrical motor output into controlled linear displacement using a mechanical transmission such as a lead screw, rack-and-pinion, or belt drive. Electric linear actuators offer precise position control, programmable stroke lengths, and clean operation, making them preferable to pneumatic or hydraulic counterparts in many robotics and automation applications.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:electric-actuator",
      "label": "Electric Actuator"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:lead-screw-actuator", "label": "Lead Screw Actuator"},
      {"@id": "urn:ngm:class:rack-and-pinion-actuator", "label": "Rack and Pinion Actuator"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"},
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:stepper-motor", "label": "Stepper Motor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:electric-motor", "label": "Electric Motor"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:parallel-robot", "label": "Parallel Robot"}
    ]
  },
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:electric-linear-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:13b54f1ac4d899606d7a0705db2df428417aa8fc0d08f97edf4d902baf42fb29"
  },
  "vc:resolutions": [
    {
      "raw": "[[Electric Actuator]]",
      "resolved": "urn:visionflow:owl:class:electric-actuator",
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
  - Electric linear actuator converts rotary motion to linear motion using screw, belt, or rack-pinion.

- ### Semantic Classification
  - owl-class:: robotics:LinearActuator
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Electric Actuator]]

- ### Content
  Electric Linear Actuator — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
