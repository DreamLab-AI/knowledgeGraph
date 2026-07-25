public:: true

# URDF Robot Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:urdf-robot-model",
  "@type": "Page",
  "vc:slug": "urdf-robot-model",
  "title": "URDF Robot Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:urdf-robot-model",
  "@type": "Class",
  "label": "URDF Robot Model",
  "definition": "A URDF (Unified Robot Description Format) robot model is an XML specification that describes a robot's kinematic and dynamic properties, including links, joints, inertial parameters, visual meshes and collision geometry. It is the canonical model format in the ROS ecosystem, consumed by simulators, motion planners and visualisation tools to reason about a robot's physical structure. URDF files enable consistent representation of articulated robots across simulation and control software.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:kinematics-model",
      "label": "Kinematics Model"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:gazebo-simulator",
        "label": "Gazebo Simulator"
      }
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A URDF robot model is an XML description of a robot's links, joints and physical properties, used as the standard structural model by the [[Robot Operating System]] and consumed by tools such as the [[Gazebo Simulator]].
- ### Content
  - URDF captures the parent-child joint tree, joint limits, mass and inertia, and references to visual and collision meshes. Extensions and macro languages such as Xacro make large models maintainable, while plugins map URDF entities onto physics-engine bodies during simulation.
