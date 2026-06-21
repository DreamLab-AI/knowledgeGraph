public:: true

# rb 0053 force control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c4341fd22fdf05c75002007772dfc944d34bdd49582193414a062c7080c46c4f",
  "@type": "Page",
  "vc:slug": "rb-0053-force-control",
  "title": "rb 0053 force control",
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
      "vc:value": "RB-0053"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0053 force control"
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
  "@id": "urn:ngm:class:rb-0053-force-control",
  "@type": "Class",
  "label": "rb 0053 force control",
  "definition": "Force control is a robot control paradigm in which the controller regulates the interaction force between the end-effector and its environment, rather than purely tracking a desired position trajectory. By closing the loop on measured contact forces from a force-torque sensor, the robot can perform compliant tasks such as surface grinding, peg-in-hole insertion, and human-robot handover without requiring precise environmental models. The main architectures are impedance control, admittance control, and hybrid position/force control, each suited to different environment stiffness regimes.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    }
  ],
  "quality": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:rb-0047-feedback-control", "label": "rb 0047 feedback control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"},
      {"@id": "urn:ngm:class:rb-0038-compliance", "label": "rb 0038 compliance"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0053-force-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c4341fd22fdf05c75002007772dfc944d34bdd49582193414a062c7080c46c4f"
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
  - Force control is a robot control paradigm that regulates the contact force between the end-effector and the environment rather than tracking a pure position trajectory. By reading a force-torque sensor in real time, the controller can adapt the robot's motion to maintain a desired interaction force, making it suitable for tasks where the geometry of the environment is uncertain or deformable — such as polishing, grinding, assembly insertion, and collaborative handover. The three principal architectures are hybrid position/force control, impedance control, and admittance control.
  - Force control is a key enabler of safe human-robot collaboration: by limiting the forces the robot can exert, it directly supports the power-and-force limiting safety mode defined in ISO/TS 15066 for collaborative robot operations.

- ### Semantic Classification
  - owl-class:: robotics:rb0053forcecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires force-torque sensor (rb 0067) for feedback; closely related to impedance control (rb 0056) and admittance control (rb 0057); contrasts with pure position control (rb 0054).

- ### Content
  - ### Primary Definition
  **Force Control** - Force Control in robotics systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
