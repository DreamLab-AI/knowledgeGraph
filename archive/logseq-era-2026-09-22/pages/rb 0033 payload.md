public:: true

# rb 0033 payload
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb7ea40482a24fc149a9c7f648b9192c54a720a902ccfc886cfdbb2d4f051cb9",
  "@type": "Page",
  "vc:slug": "rb-0033-payload",
  "title": "rb 0033 payload",
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
      "vc:value": "RB-0033"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0033 payload"
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
  "@id": "urn:ngm:class:rb-0033-payload",
  "@type": "Class",
  "label": "rb 0033 payload",
  "definition": "Payload in robotics refers to the maximum mass that a robot can carry or manipulate while maintaining its specified performance characteristics, including accuracy, repeatability, and speed. Payload capacity is a fundamental design parameter for robot arms, mobile robots, and drones, directly constraining the tools, parts, or cargo the robot can handle. It is typically quoted at the wrist or end-effector mounting face and may vary with configuration and speed; dynamic payload accounts for inertial forces during acceleration.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0034-repeatability", "label": "rb 0034 repeatability"},
      {"@id": "urn:ngm:class:rb-0035-accuracy", "label": "rb 0035 accuracy"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0039-stiffness", "label": "rb 0039 stiffness"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot", "label": "Robot"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0033-payload:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb7ea40482a24fc149a9c7f648b9192c54a720a902ccfc886cfdbb2d4f051cb9"
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
  - Payload is the maximum mass a robot can carry or manipulate at its end-effector whilst maintaining its specified performance characteristics including accuracy, repeatability, and speed. It is a primary specification parameter for industrial and collaborative robots, directly constraining the tools, workpieces, and sensors the robot can accommodate. Payload is typically quoted as a static value but dynamic payload — accounting for inertial forces during acceleration — is often lower than the static figure, particularly at high speeds or with extended reach configurations.

- ### Semantic Classification
  - owl-class:: robotics:Payload
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Payload capacity is closely coupled with structural stiffness and joint torque limits, since higher payloads generate greater bending moments at each joint. It directly affects achievable accuracy and repeatability: exceeding the rated payload degrades positional performance and can accelerate mechanical wear. In collaborative robots, payload ratings are defined under ISO 10218 and ISO/TS 15066, where the kinetic energy of a moving payload is also a safety consideration for power-and-force-limiting applications.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
