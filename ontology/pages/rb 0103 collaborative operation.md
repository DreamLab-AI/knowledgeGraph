public:: true

# rb 0103 collaborative operation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5cccb3dfd396d281e24f42f4cc501db50f046f90ac4b000bc60333c8a8bcea56",
  "@type": "Page",
  "vc:slug": "rb-0103-collaborative-operation",
  "title": "rb 0103 collaborative operation",
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
      "vc:value": "RB-0103"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0103 collaborative operation"
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
  "@id": "urn:ngm:class:rb-0103-collaborative-operation",
  "@type": "Class",
  "label": "rb 0103 collaborative operation",
  "definition": "Collaborative operation is a mode of robotic system use in which a robot and one or more human operators work together within a shared workspace, as defined in ISO/TS 15066 and ISO 10218. It encompasses the specific operating conditions, safety functions, and interaction patterns that govern the coexistence of humans and robots without a fixed separating safeguard. The concept underpins cobot deployment strategies including hand guiding, speed and separation monitoring, power and force limiting, and safety-rated monitored stop.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    },
    {
      "@id": "urn:ngm:class:collaborative-systems-modality-operation",
      "label": "Collaborative Operation"
    }
  ],
  "quality": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0104-hand-guiding", "label": "rb 0104 hand guiding"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0103-collaborative-operation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5cccb3dfd396d281e24f42f4cc501db50f046f90ac4b000bc60333c8a8bcea56"
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
  - Collaborative operation (RB-0103) is the ISO/TS 15066-defined mode in which a robot and human share workspace without fixed separating safeguards. It requires formal risk assessment and implementation of one or more collaborative functions: safety-rated monitored stop, hand guiding, speed and separation monitoring, or power and force limiting.

- ### Semantic Classification
  - owl-class:: robotics:rb0103collaborativeoperation
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: [[rb 0089 risk assessment]], [[rb 0094 power and force limiting]], [[rb 0091 safety rated monitored stop]]
  - Standardized by: [[ISO TS 15066]], [[ISO 10218]]
  - Has part: [[rb 0104 hand guiding]], [[rb 0105 speed and separation monitoring]]
  - Related to: [[rb 0007 collaborative robot]], [[Cobot Safety Levels]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
