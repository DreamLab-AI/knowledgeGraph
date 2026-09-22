public:: true

# Task Space Control

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:task-space-control",
  "@type": "Page",
  "title": "Task Space Control",
  "vc:slug": "task-space-control",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:task-space-control",
  "@type": "Class",
  "label": "Task Space Control",
  "definition": "Task space control, also called operational space control, regulates a robot's end-effector directly in Cartesian task coordinates rather than in joint space. Control laws are formulated in terms of end-effector position, orientation and force, with the manipulator Jacobian mapping task-space commands to joint actuation. This approach simplifies specification of interaction tasks such as following a path, applying a force or maintaining compliance against the environment.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-control",
      "label": "Robot Control"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:trajectory-control",
        "label": "Trajectory Control"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:compliance-control",
        "label": "Compliance Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:jacobian-matrix",
        "label": "Jacobian Matrix"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:kinematics-model",
        "label": "Kinematics Model"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:trajectory-control",
        "label": "Trajectory Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:closed-loop-control",
        "label": "Closed-Loop Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Task Space Control]] regulates the [[End Effector]] in Cartesian coordinates using the [[Jacobian Matrix]] and [[Inverse Kinematics]], a form of [[Robot Control]] complementary to [[Trajectory Control]].
- ### Overview
  - Controls end-effector pose and force directly in Cartesian task space.
  - Maps task commands to joint actuation through the Jacobian.
  - Simplifies specification of contact and interaction tasks.
- ### Mechanisms
  - Operational-space dynamics and Jacobian transpose mapping.
  - Position, orientation and force regulation in task coordinates.
  - Redundancy resolution via null-space projection.
  - Singularity handling at the task-space boundary.
- ### Applications
  - Compliant assembly and contact-rich manipulation.
  - Path and force following for machining or polishing.
  - Teleoperation and human-robot interaction.
  - Hybrid position/force control of manipulators.
- ### Relationships
  - relatedTo:: [[Trajectory Control]]
  - relatedTo:: [[Robot Control]]
  - enables:: [[Force Control]]
  - enables:: [[Compliance Control]]
  - partOf:: [[Robot Control]]
  - uses:: [[Jacobian Matrix]]
  - uses:: [[Inverse Kinematics]]
  - requires:: [[Kinematics Model]]
  - contrastsWith:: [[Trajectory Control]]
  - supports:: [[Motion Planning]]
  - supports:: [[End Effector]]
  - dependsOn:: [[Feedback Control]]
  - implements:: [[Closed-Loop Control]]
  - bridgesTo:: [[Impedance Control]]
- ### Provenance
  - updated:: 2026-06-15
