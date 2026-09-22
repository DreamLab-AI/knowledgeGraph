public:: true

# Inertia Tensor

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:inertia-tensor",
  "@type": "Page",
  "title": "Inertia Tensor",
  "vc:slug": "inertia-tensor",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inertia-tensor",
  "@type": "Class",
  "label": "Inertia Tensor",
  "definition": "The inertia tensor is a 3x3 symmetric matrix that characterises how a rigid body's mass is distributed about a reference point, relating the body's angular velocity to its angular momentum. Its diagonal entries are the moments of inertia about the coordinate axes and its off-diagonal entries are the products of inertia. It is a foundational quantity in rigid-body dynamics, enabling computation of rotational acceleration under applied torques.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:rigid-body-dynamics",
        "label": "Rigid Body Dynamics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rigid-body",
        "label": "Rigid Body"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dynamics",
        "label": "Dynamics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:torque",
        "label": "Torque"
      },
      {
        "@id": "urn:ngm:class:velocity",
        "label": "Velocity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:manipulator",
        "label": "Manipulator"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robot-dynamics",
        "label": "Robot Dynamics"
      },
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
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
  - [[Robot Dynamics]]
  - [[Rigid Body Dynamics]]
  - [[Dynamics]]
  - [[Torque]]
  - [[Kinematics]]
- ### Overview
  - Encodes the rotational mass distribution of a body in a single coordinate-dependent matrix.
  - Transforms predictably under rotation and parallel-axis shifts, allowing reuse across reference frames.
  - Sits at the heart of the Newton-Euler and Lagrangian formulations of robot motion.
- ### Key aspects
  - Diagonal moments of inertia quantify resistance to angular acceleration about each axis.
  - Off-diagonal products of inertia vanish when axes align with the principal axes.
  - The parallel-axis theorem shifts the tensor between the centre of mass and other points.
  - Symmetry and positive-definiteness constrain physically valid tensors.
  - Link inertia tensors compose into the joint-space mass matrix of a manipulator.
- ### Applications
  - Computing forward and inverse dynamics for robot arms and legged platforms.
  - Parameterising rigid bodies in physics-simulation engines.
  - System identification of unknown payload inertial parameters.
  - Spacecraft and drone attitude dynamics modelling.
- ### Relationships
  - partOf:: [[Rigid Body Dynamics]]
  - requires:: [[Rigid Body]]
  - enables:: [[Dynamics]]
  - uses:: [[Torque]]
  - uses:: [[Velocity]]
  - supports:: [[Physics Simulation]]
  - supports:: [[Simulation]]
  - supports:: [[Control Theory]]
  - dependsOn:: [[Manipulator]]
  - contrastsWith:: [[Kinematics]]
  - bridgesTo:: [[Robotics]]
  - relatedTo:: [[Robot Dynamics]]
  - relatedTo:: [[Forward Kinematics]]
  - relatedTo:: [[Inverse Kinematics]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
