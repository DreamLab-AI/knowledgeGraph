public:: true

# rb 0057 admittance control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79b3fe66ad79b97009bb96ec62c31dc73ebb77d73a67bb5ff024313df0efbc2c",
  "@type": "Page",
  "vc:slug": "rb-0057-admittance-control",
  "title": "rb 0057 admittance control",
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
      "vc:value": "RB-0057"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0057 admittance control"
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
  "@id": "urn:ngm:class:rb-0057-admittance-control",
  "@type": "Class",
  "label": "rb 0057 admittance control",
  "definition": "Admittance control is an interaction-control strategy in which a robot measures contact forces and torques and converts them into corresponding desired motion (position or velocity) using a virtual mass-spring-damper model. It is the dual of impedance control: the robot senses force input and renders motion output, enabling compliant, safe physical human-robot interaction in collaborative tasks.",
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
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0057-admittance-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79b3fe66ad79b97009bb96ec62c31dc73ebb77d73a67bb5ff024313df0efbc2c"
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
  - Admittance control is an interaction-control strategy in which a robot measures contact forces and torques and converts them into corresponding desired motion (position or velocity) using a virtual mass-spring-damper model. It is the dual of impedance control: the robot senses force input and renders motion output, enabling compliant, safe physical human-robot interaction in collaborative tasks.

- ### Semantic Classification
  - owl-class:: robotics:rb0057admittancecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ### Primary Definition
  **Admittance Control** - Admittance Control in robotics systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
