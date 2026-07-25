public:: true

# rb 0104 hand guiding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef0616f7ecd1f7c0ca7757fcf4b3c35ad3cb4e4a4171f2e13599835815065cde",
  "@type": "Page",
  "vc:slug": "rb-0104-hand-guiding",
  "title": "rb 0104 hand guiding",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0104"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0104 hand guiding"
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
  "@id": "urn:ngm:class:rb-0104-hand-guiding",
  "@type": "Class",
  "label": "rb 0104 hand guiding",
  "definition": "Hand guiding is a collaborative robot operation mode in which an operator physically moves the robot arm by direct physical contact, typically through a dedicated hand-guiding device, while the robot's safety systems monitor force, speed, and separation. It is one of four collaborative operation modes defined in ISO/TS 15066 and ISO 10218, enabling intuitive programming-by-demonstration and safe human-robot co-manipulation tasks.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    },
    {
      "@id": "urn:ngm:class:human-robot-interaction",
      "label": "Human Robot Interaction"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0104-hand-guiding:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef0616f7ecd1f7c0ca7757fcf4b3c35ad3cb4e4a4171f2e13599835815065cde"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
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
  - **Hand Guiding** is a collaborative robot operation mode in which the operator physically grasps and moves the robot arm directly, guided by force-torque sensing and impedance control, while safety systems enforce speed and force limits per ISO/TS 15066. The technique enables intuitive kinesthetic teaching and direct human co-manipulation during assembly or finishing tasks.

- ### Semantic Classification
  - owl-class:: robotics:HandGuiding
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - partOf:: rb 0103 collaborative operation
  - requires:: rb 0067 force torque sensor, rb 0056 impedance control
  - relatedTo:: rb 0007 collaborative robot, rb 0094 power and force limiting, rb 0105 speed and separation monitoring

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
