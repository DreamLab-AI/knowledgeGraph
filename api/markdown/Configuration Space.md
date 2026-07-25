public:: true

# Configuration Space
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:configuration-space", "@type":"Page", "title":"Configuration Space", "vc:slug":"configuration-space", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:configuration-space",
  "@type": "Class",
  "label": "Configuration Space",
  "definition": "Configuration space, often written C-space, is the set of all possible configurations of a robot, where each point fully specifies the position of every part of the mechanism. Its dimensionality equals the robot's degrees of freedom, and obstacles in the physical workspace map to forbidden regions, partitioning C-space into free and blocked subsets. Motion planning is then recast as finding a continuous path through the free portion of configuration space.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:motion-planning", "label": "Motion Planning" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:degrees-of-freedom", "label": "Degrees of Freedom" },
      { "@id": "urn:ngm:class:joint-space", "label": "Joint Space" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:robotics", "label": "Robotics" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:path-planning", "label": "Path Planning" },
      { "@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics" },
      { "@id": "urn:ngm:class:collision-detection", "label": "Collision Detection" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:sampling-based-planning", "label": "Sampling-Based Planning" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:robot-manipulation", "label": "Robot Manipulation" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics" },
      { "@id": "urn:ngm:class:kinematics", "label": "Kinematics" },
      { "@id": "urn:ngm:class:rapidly-exploring-random-tree", "label": "Rapidly-Exploring Random Tree" },
      { "@id": "urn:ngm:class:probabilistic-roadmap", "label": "Probabilistic Roadmap" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:workspace", "label": "Workspace" }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - Configuration space is the set of all configurations of a robot, central to [[Motion Planning]].
  - Each point in C-space fixes every joint value, so its dimension equals the robot's [[Degrees of Freedom]].
  - Physical obstacles map to forbidden regions, splitting C-space into free and blocked subsets.
- ### Overview
  - By abstracting the robot to a single point moving through C-space, planning becomes a search for a continuous free-space path.
  - This reformulation, due to Lozano-Perez, unifies path planning across very different mechanisms.
  - Constructing C-space obstacles requires mapping geometry through [[Forward Kinematics]] and testing for [[Collision Detection]].
- ### Key aspects
  - Dimensionality equal to the number of joints or degrees of freedom.
  - Distinction between free space and configuration-space obstacles.
  - Topology that can be non-trivial, with wrap-around for revolute joints.
- ### Mechanisms
  - Explicit C-space obstacles are expensive, so high-dimensional planners sample points and test them for collision.
  - [[Sampling-Based Planning]] methods such as the [[Rapidly-Exploring Random Tree]] and [[Probabilistic Roadmap]] build graphs in free space.
  - Continuous paths are then extracted and smoothed for execution.
- ### Applications
  - Planning collision-free arm and mobile-robot trajectories.
  - Reasoning about reachability and [[Robot Manipulation]].
  - Underpinning [[Obstacle Avoidance]] in cluttered environments.
- ### Relationships
  - subClassOf:: [[Motion Planning]]
  - hasPart:: [[Degrees of Freedom]]
  - hasPart:: [[Joint Space]]
  - partOf:: [[Robotics]]
  - enables:: [[Path Planning]]
  - enables:: [[Obstacle Avoidance]]
  - requires:: [[Forward Kinematics]]
  - requires:: [[Collision Detection]]
  - uses:: [[Sampling-Based Planning]]
  - supports:: [[Robot Manipulation]]
  - relatedTo:: [[Inverse Kinematics]]
  - relatedTo:: [[Kinematics]]
  - relatedTo:: [[Rapidly-Exploring Random Tree]]
  - relatedTo:: [[Probabilistic Roadmap]]
  - bridgesTo:: [[Workspace]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
