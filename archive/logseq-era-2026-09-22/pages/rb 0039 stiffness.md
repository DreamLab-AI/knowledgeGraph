public:: true

# rb 0039 stiffness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b6c4a71fb251881ff911b1fe158c992cbaf3e8510cbcbd94214ad9eeafc44c30",
  "@type": "Page",
  "vc:slug": "rb-0039-stiffness",
  "title": "rb 0039 stiffness",
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
      "vc:value": "RB-0039"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0039 stiffness"
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
  "@id": "urn:ngm:class:rb-0039-stiffness",
  "@type": "Class",
  "label": "rb 0039 stiffness",
  "definition": "Stiffness, in robotics, is the ratio of applied force (or torque) to the resulting displacement (or angular deflection) of a robot link, joint, or end-effector. High stiffness yields precise positioning at the cost of storing large elastic energy that can be hazardous in contact; low stiffness (compliance) absorbs impact and is preferred in human-robot collaboration. Variable-stiffness actuation and impedance control allow robots to modulate stiffness dynamically, trading accuracy against safety depending on task context.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"},
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:inertia", "label": "Inertia"},
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:soft-robotics", "label": "Soft Robotics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0027-robot-link", "label": "rb 0027 robot link"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0039-stiffness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b6c4a71fb251881ff911b1fe158c992cbaf3e8510cbcbd94214ad9eeafc44c30"
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
  - ### Primary Definition
  **Stiffness** is the mechanical property quantifying a structure's resistance to deformation under an applied force or torque — formally the ratio F/x (force per unit displacement) or τ/θ (torque per unit angular deflection). In robot design, joint and link stiffness determine positioning accuracy, vibration behaviour, and contact safety. High structural stiffness improves repeatability but concentrates impact energy; deliberate compliance (low stiffness) reduces peak contact forces in human-robot collaboration.

- ### Semantic Classification
  - owl-class:: robotics:rb0039stiffness
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to impedance control and compliance control, which modulate effective stiffness in software.
  - Informed by robot dynamics and rigid-body dynamics models.
  - Enabling condition for force control and soft robotics design.
  - Stiffness interacts with inertia to determine natural frequencies and vibration susceptibility.

- ### Content
  - **Stiffness** - Resistance to deformation under load

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
