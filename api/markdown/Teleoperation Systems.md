public:: true

# Teleoperation Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:46a384e3ee6123075016b164280619f03b56f2cf40b5f41ec22e642eaa3bd35b",
  "@type": "Page",
  "vc:slug": "teleoperation-systems",
  "title": "Teleoperation Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:da-vinci",
      "vc:label": "da Vinci"
    },
    {
      "@id": "urn:visionflow:linked:tele-200-robotic-telepresence",
      "vc:label": "TELE-200-robotic-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "vc:label": "TELE-203-haptic-feedback-telepresence"
    },
    {
      "@id": "urn:visionflow:owl:class:robotic-telepresence",
      "vc:label": "Robotic Telepresence"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-telepresence-bridge",
      "vc:label": "Robotics-Telepresence Bridge"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0201"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Teleoperation Systems"
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
  "@id": "urn:ngm:class:teleoperation-systems",
  "@type": "Class",
  "label": "Teleoperation Systems",
  "definition": "\"Robotic control systems enabling human operators to command and manipulate remote robots through intuitive interfaces, transmitting operator intentions to robot actuators whilst providing sensory feedback (visual, auditory, haptic) from the robot to the operator, creating bidirectional human-mac...",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:robotic-telepresence",
      "label": "Robotic Telepresence"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:teleoperation-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:46a384e3ee6123075016b164280619f03b56f2cf40b5f41ec22e642eaa3bd35b"
  },
  "vc:resolutions": [
    {
      "raw": "[[da Vinci]]",
      "resolved": "urn:visionflow:linked:da-vinci",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-200-robotic-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-200-robotic-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-203-haptic-feedback-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-203-haptic-feedback-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotic Telepresence]]",
      "resolved": "urn:visionflow:owl:class:robotic-telepresence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics-Telepresence Bridge]]",
      "resolved": "urn:visionflow:owl:class:robotics-telepresence-bridge",
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
  - "Robotic control systems enabling human operators to command and manipulate remote robots through intuitive interfaces, transmitting operator intentions to robot actuators whilst providing sensory feedback (visual, auditory, haptic) from the robot to the operator, creating bidirectional human-machine coupling for remote physical interaction."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:TeleoperationSystems
  - owl-role:: Object

- ### Relationships
  - is-subclass-of:: [[Robotic Telepresence]]

- ### Content

  ## Definition

  **Teleoperation Systems** enable humans to control robots remotely through master-slave architectures where operator commands (master) are transmitted to robot actuators (slave), whilst robot sensors provide feedback to the operator. Applications span surgical robots [[da Vinci]], space exploration (Mars rovers), nuclear decommissioning, and bomb disposal.

  ## Components

  - **Master Interface**: Joystick, haptic device, VR controller, exoskeleton
  - **Slave Robot**: Manipulator arm, mobile platform, humanoid robot
  - **Communication**: Network transmitting commands/sensor data
  - **Feedback**: Visual (cameras), auditory (microphones), haptic [[TELE-203-haptic-feedback-telepresence]]

  ## Control Paradigms

  - **Direct Teleoperation**: Operator controls every robot motion (joystick)
  - **Supervisory Control**: Operator issues high-level commands, robot executes autonomously
  - **Shared Autonomy**: AI assists operator, prevents errors, suggests actions

  #### Related Concepts
  - [[TELE-200-robotic-telepresence]]
  - [[TELE-203-haptic-feedback-telepresence]]
  - [[Robotics-Telepresence Bridge]]

  #### References
  1. Sheridan, T. B. (1992). "Telerobotics, Automation, and Human Supervisory Control". MIT Press.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
