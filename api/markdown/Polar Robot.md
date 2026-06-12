public:: true

# Polar Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c0d9c4dc010b1318224dd758171a193d53ceecec47735d2d7a3bd382905c2328",
  "@type": "Page",
  "vc:slug": "polar-robot",
  "title": "Polar Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:industrial-robot",
      "vc:label": "Industrial Robot"
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
      "vc:value": "RB-0135"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Polar Robot"
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
  "@id": "urn:ngm:class:polar-robot",
  "@type": "Class",
  "label": "Polar Robot",
  "definition": "A Polar Robot (also called a spherical robot) is an industrial robot configuration with a rotary base joint that provides 360-degree horizontal rotation, an elevated rotary shoulder joint that tilts the arm up and down, and a linear telescoping arm that extends and retracts radially—producing a spherical working envelope defined in spherical coordinates (radius, polar angle, azimuth). This geometry provides a large workspace volume relative to the physical footprint of the arm and was historically common in early industrial automation for tasks such as die casting and forging, though articulated arm designs have largely supplanted it in modern applications due to superior dexterity.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:industrial-robot",
      "label": "Industrial Robot"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:robot-actuator", "label": "Robot Actuator"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cylindrical-robot", "label": "Cylindrical Robot"},
      {"@id": "urn:ngm:class:scara-robot", "label": "SCARA Robot"},
      {"@id": "urn:ngm:class:delta-robot", "label": "Delta Robot"},
      {"@id": "urn:ngm:class:robot-hardware", "label": "Robot Hardware"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:robot-component", "label": "Robot Component"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:polar-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c0d9c4dc010b1318224dd758171a193d53ceecec47735d2d7a3bd382905c2328"
  },
  "vc:resolutions": [
    {
      "raw": "[[Industrial Robot]]",
      "resolved": "urn:visionflow:owl:class:industrial-robot",
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
  A Polar Robot is an industrial robot configuration with a rotary base joint, an elevated rotary shoulder joint, and a linear telescoping arm—producing a spherical working envelope defined in spherical coordinates. This geometry provides a large workspace volume relative to physical footprint and was common in early industrial automation for die casting and forging.

- ### Semantic Classification
  - owl-class:: robotics:PolarRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  A Polar Robot **has parts** including Robot Joints (the rotary base, shoulder, and linear extension joints) and Robot Actuators that drive those joints. It **uses** Robot Kinematics (specifically spherical coordinate forward and inverse kinematics) to compute workspace positions. It is **related to** Cylindrical Robot (shares the rotary base and linear extension but lacks the shoulder joint), SCARA Robot (an alternative for planar tasks), Delta Robot (parallel-link alternative for high-speed pick-and-place), and Robot Hardware as the physical substrate. It **contrasts with** Collaborative Robot designs that emphasise human-safe operation over raw reach. It is **part of** the broader Robotics discipline and **depends on** Robot Component subsystems for its mechanical realisation.

- ### Content

  The polar robot configuration is one of the five classical industrial robot kinematic arrangements, alongside Cartesian, cylindrical, SCARA, and articulated (revolute) designs. Its three degrees of freedom—one rotational about the vertical axis, one rotational about a horizontal shoulder axis, and one linear along the arm—map directly to spherical coordinates, giving the configuration its alternative name "spherical robot."

  The resulting workspace is a hollow spherical shell: the arm sweeps a sphere when rotating at both joints, with a minimum reach defined by the shortest telescoping position and a maximum reach at full extension. A dead zone exists near the base and directly overhead. This geometry suited early automation tasks such as spot welding on car bodies, injection moulding machine tending, and material transfer operations where the large volumetric reach compensated for the limited dexterity.

  Kinematic control of a polar robot requires solving the inverse kinematics problem: given a desired tool-centre-point position in Cartesian space, compute the three joint values (base angle, shoulder angle, arm extension). For this configuration the inverse kinematics has a closed-form analytical solution, which was practically important in the era of limited computing resources. Modern articulated six-axis robots offer superior dexterity and have displaced polar designs in most new installations, but polar robots remain in service in legacy manufacturing lines.

  The polar robot's limited degrees of freedom (three, giving only position control without orientation control) mean that tool orientation must be managed by additional wrist joints or fixed tooling. This restriction is a principal reason it has been superseded by six-axis articulated robots that provide full six-DOF spatial positioning and orientation.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
