public:: true

# Backdrivability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:backdrivability",
  "@type": "Page",
  "title": "Backdrivability",
  "vc:slug": "backdrivability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:backdrivability",
  "@type": "Class",
  "label": "Backdrivability",
  "definition": "Backdrivability is the property of a mechanical actuator or transmission that allows external forces applied at the output to drive the input in reverse, so motion and force pass freely in both directions. A highly backdrivable joint exhibits low reflected inertia and friction, enabling it to comply with and sense external contact. It is a key enabler of safe, compliant physical human-robot interaction and force-controlled robots.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:actuator",
      "label": "Actuator"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:series-elastic-actuator",
        "label": "Series Elastic Actuator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      },
      {
        "@id": "urn:ngm:class:admittance-control",
        "label": "Admittance Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:torque-control",
        "label": "Torque Control"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:torque",
        "label": "Torque"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rigid-body",
        "label": "Rigid Body"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:safety",
        "label": "Safety"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:manipulator",
        "label": "Manipulator"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Actuator]]
  - [[Series Elastic Actuator]]
  - [[Impedance Control]]
  - [[Force Control]]
  - [[Compliance]]
- ### Overview
  - Describes how transparently force and motion propagate from a robot's output back to its drive.
  - Determines whether a joint can feel and yield to contact without dedicated force sensors.
  - Trades raw positioning stiffness and gear reduction for compliance and safety.
- ### Key aspects
  - Low reflected inertia, achieved through low gear ratios or direct drive, improves backdrivability.
  - Friction and stiction in transmissions are the principal degraders of backdrivability.
  - Series elasticity decouples motor inertia and adds intrinsic compliance.
  - Backdrivable joints support sensorless force estimation from motor current.
  - There is a fundamental trade-off between transparency and positioning stiffness.
- ### Applications
  - Collaborative robots that share workspace safely with humans.
  - Force-controlled manipulation, polishing, and assembly tasks.
  - Rehabilitation and exoskeleton robots that must yield to the wearer.
  - Haptic and teleoperation devices requiring transparent force reflection.
- ### Relationships
  - partOf:: [[Series Elastic Actuator]]
  - enables:: [[Impedance Control]]
  - enables:: [[Admittance Control]]
  - supports:: [[Force Control]]
  - supports:: [[Torque Control]]
  - supports:: [[Compliance]]
  - requires:: [[Torque]]
  - uses:: [[Transparency]]
  - contrastsWith:: [[Rigid Body]]
  - bridgesTo:: [[Safety]]
  - relatedTo:: [[Actuator]]
  - relatedTo:: [[Manipulator]]
  - relatedTo:: [[Robotics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
