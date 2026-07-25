public:: true

# rb 0027 robot link
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:738d0a9073e8b7e14993cdec34bf1432068d7a51f31127f59cfd1fb605f14305",
  "@type": "Page",
  "vc:slug": "rb-0027-robot-link",
  "title": "rb 0027 robot link",
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
      "vc:value": "RB-0027"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0027 robot link"
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
  "@id": "urn:ngm:class:rb-0027-robot-link",
  "@type": "Class",
  "label": "rb 0027 robot link",
  "definition": "A robot link is a rigid (or semi-rigid) structural body that forms one segment of a robot's kinematic chain, connecting adjacent joints and transmitting forces and torques between them. Links define the geometry of the robot's workspace by their length, mass, and inertial properties, and together with joints they constitute the Denavit-Hartenberg representation used in forward and inverse kinematics. Link stiffness, material choice, and mass distribution directly affect dynamic performance, vibration characteristics, and safety in human-robot interaction.",
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
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:robot-link", "label": "RobotLink"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot", "label": "Robot"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:rigid-body", "label": "Rigid Body"},
      {"@id": "urn:ngm:class:inertia", "label": "Inertia"},
      {"@id": "urn:ngm:class:rb-0039-stiffness", "label": "rb 0039 stiffness"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0027-robot-link:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:738d0a9073e8b7e14993cdec34bf1432068d7a51f31127f59cfd1fb605f14305"
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
  A **Robot Link** is a rigid structural segment in a robot manipulator's kinematic chain. Each link connects two joints and is characterised by its length, mass, centre of mass, and moment of inertia. The Denavit-Hartenberg convention encodes link geometry as four parameters (a, d, α, θ), enabling systematic forward and inverse kinematic computation. Link design choices — material, cross-section, and mounting configuration — determine workspace geometry, payload capacity, and collision severity.

- ### Semantic Classification
  - owl-class:: robotics:rb0027robotlink
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - A robot link is part of a robot and connects robot joints to form the kinematic chain.
  - Its geometric and inertial properties are the inputs to kinematics and robot dynamics models.
  - Link stiffness (see rb 0039 stiffness) determines deflection under payload and affects positioning accuracy.
  - Rigid-body representations such as URDF/SDF serialise link geometry for simulation and ROS-based control.

- ### Content
  - ### Primary Definition
  **Robot Link** - Rigid body component of robot kinematic chain

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
