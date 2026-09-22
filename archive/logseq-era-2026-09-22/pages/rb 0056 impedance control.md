public:: true

# rb 0056 impedance control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c27f9229ee51e65f5c572d95987eecddd0a7ea80ffdea98fc48e108d048b7979",
  "@type": "Page",
  "vc:slug": "rb-0056-impedance-control",
  "title": "rb 0056 impedance control",
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
      "vc:value": "RB-0056"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0056 impedance control"
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
  "@id": "urn:ngm:class:rb-0056-impedance-control",
  "@type": "Class",
  "label": "rb 0056 impedance control",
  "definition": "Impedance control is a robot interaction-control strategy that regulates the dynamic relationship between end-effector force and motion by imposing a desired mechanical impedance (mass, damping, stiffness) on the robot's behaviour at the point of contact. Rather than commanding precise positions or forces independently, impedance control allows compliant, safe physical interaction with humans or uncertain environments by shaping the robot's apparent mechanical response. It is fundamental to collaborative robotics, enabling robots to yield to external forces in a controlled manner without requiring an explicit force setpoint.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:interaction-control",
      "label": "Interaction Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"},
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0038-compliance", "label": "rb 0038 compliance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0056-impedance-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c27f9229ee51e65f5c572d95987eecddd0a7ea80ffdea98fc48e108d048b7979"
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
  - **Impedance Control** (RB-0056) regulates the force-motion relationship at a robot's end effector by imposing a desired mechanical impedance (virtual mass, damping, stiffness). This allows compliant interaction with humans and uncertain environments without requiring an explicit force setpoint, making it foundational to safe collaborative operation.

- ### Semantic Classification
  - owl-class:: robotics:rb0056impedancecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0057 admittance control, rb 0053 force control, rb 0038 compliance
  - requires:: rb 0067 force torque sensor, rb 0072 encoder
  - supports:: rb 0007 collaborative robot, rb 0094 power and force limiting
  - contrastsWith:: rb 0054 position control

- ### Content
  - ### Primary Definition
  **Impedance Control** (RB-0056) shapes robot behaviour at contact by imposing a virtual mechanical impedance on the end effector, described by the equation: F = M_d * x_ddot + B_d * x_dot + K_d * x, where M_d, B_d, and K_d are desired inertia, damping, and stiffness matrices respectively.

  Unlike pure position control (which is rigid) or pure force control (which is compliant), impedance control occupies the full position-force spectrum and is therefore the preferred strategy for tasks involving unpredictable contact, such as assembly with tight tolerances, surface finishing, or physical human-robot collaboration.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
