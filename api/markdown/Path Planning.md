public:: true
alias:: PathPlanning, RB-1016-path-planning

# Path Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:93764e7e84a935ee83e735b276b38f7fcdc25722b11e85e326039e13c26f9e67",
  "@type": "Page",
  "vc:slug": "path-planning",
  "title": "Path Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-systems",
      "vc:label": "Autonomous Systems"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-vehicles",
      "vc:label": "Autonomous Vehicles"
    },
    {
      "@id": "urn:visionflow:linked:environment-model",
      "vc:label": "Environment Model"
    },
    {
      "@id": "urn:visionflow:linked:feasibility",
      "vc:label": "Feasibility"
    },
    {
      "@id": "urn:visionflow:linked:goal-configuration",
      "vc:label": "Goal Configuration"
    },
    {
      "@id": "urn:visionflow:linked:manipulators",
      "vc:label": "Manipulators"
    },
    {
      "@id": "urn:visionflow:linked:mapping",
      "vc:label": "Mapping"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robots",
      "vc:label": "Mobile Robots"
    },
    {
      "@id": "urn:visionflow:linked:obstacles",
      "vc:label": "Obstacles"
    },
    {
      "@id": "urn:visionflow:linked:optimality",
      "vc:label": "Optimality"
    },
    {
      "@id": "urn:visionflow:linked:path",
      "vc:label": "Path"
    },
    {
      "@id": "urn:visionflow:linked:rb-1003-optimal-control",
      "vc:label": "RB-1003-optimal-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "vc:label": "RB-1007-trajectory-generation"
    },
    {
      "@id": "urn:visionflow:linked:rb-1017-rrt-algorithm",
      "vc:label": "RB-1017-rrt-algorithm"
    },
    {
      "@id": "urn:visionflow:linked:rb-1018-dijkstra-algorithm",
      "vc:label": "RB-1018-dijkstra-algorithm"
    },
    {
      "@id": "urn:visionflow:linked:rb-1019-obstacle-avoidance",
      "vc:label": "RB-1019-obstacle-avoidance"
    },
    {
      "@id": "urn:visionflow:linked:start-configuration",
      "vc:label": "Start Configuration"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:navigation",
      "vc:label": "Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
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
      "vc:value": "RB-1016"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Path Planning"
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
  "@id": "urn:ngm:class:path-planning",
  "@type": "Class",
  "label": "Path Planning",
  "definition": "The computational process of finding a feasible path for a robot or autonomous agent to move from a start configuration to a goal configuration while avoiding obstacles and satisfying kinematic and dynamic constraints. It determines a sequence of configurations connecting start to goal in the robot's configuration space, and forms the foundational planning layer for navigation, manipulation, and autonomous systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:motion-planning",
    "label": "Motion Planning"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:environment-model",
        "label": "Environment Model"
      },
      {
        "@id": "urn:ngm:class:goal-configuration",
        "label": "Goal Configuration"
      },
      {
        "@id": "urn:ngm:class:start-configuration",
        "label": "Start Configuration"
      },
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      },
      {
        "@id": "urn:ngm:class:rb-1013-localization",
        "label": "RB 1013 localization"
      },
      {
        "@id": "urn:ngm:class:configuration-space",
        "label": "Configuration Space"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rb-1007-trajectory-generation",
        "label": "RB-1007-trajectory-generation"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:autonomous-systems",
        "label": "Autonomous Systems"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicles",
        "label": "Autonomous Vehicles"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rrt-algorithm",
        "label": "RRT Algorithm"
      },
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
      },
      {
        "@id": "urn:ngm:class:a-star-search",
        "label": "A* Search"
      },
      {
        "@id": "urn:ngm:class:probabilistic-roadmap",
        "label": "Probabilistic Roadmap"
      },
      {
        "@id": "urn:ngm:class:potential-fields",
        "label": "Potential Fields"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:global-path-planning",
        "label": "Global Path Planning"
      },
      {
        "@id": "urn:ngm:class:local-path-planning",
        "label": "Local Path Planning"
      },
      {
        "@id": "urn:ngm:class:path-smoothing",
        "label": "Path Smoothing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:rb-1019-obstacle-avoidance",
        "label": "Obstacle Avoidance"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      },
      {
        "@id": "urn:ngm:class:rb-1003-optimal-control",
        "label": "Optimal Control"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mobile-robots",
        "label": "Mobile Robots"
      },
      {
        "@id": "urn:ngm:class:manipulators",
        "label": "Manipulators"
      },
      {
        "@id": "urn:ngm:class:drone-navigation",
        "label": "Drone Navigation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reactive-navigation",
        "label": "Reactive Navigation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:multi-robot-coordination",
        "label": "Multi-Robot Coordination"
      },
      {
        "@id": "urn:ngm:class:coverage-path-planning",
        "label": "Coverage Path Planning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:route-planning",
      "label": "Route Planning"
    },
    {
      "@id": "urn:ngm:class:motion-path-planning",
      "label": "Motion Path Planning"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:path-planning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:93764e7e84a935ee83e735b276b38f7fcdc25722b11e85e326039e13c26f9e67"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Systems]]",
      "resolved": "urn:visionflow:linked:autonomous-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Vehicles]]",
      "resolved": "urn:visionflow:linked:autonomous-vehicles",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environment Model]]",
      "resolved": "urn:visionflow:linked:environment-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feasibility]]",
      "resolved": "urn:visionflow:linked:feasibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[Goal Configuration]]",
      "resolved": "urn:visionflow:linked:goal-configuration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manipulators]]",
      "resolved": "urn:visionflow:linked:manipulators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mapping]]",
      "resolved": "urn:visionflow:linked:mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robots]]",
      "resolved": "urn:visionflow:linked:mobile-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Obstacles]]",
      "resolved": "urn:visionflow:linked:obstacles",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optimality]]",
      "resolved": "urn:visionflow:linked:optimality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Path]]",
      "resolved": "urn:visionflow:linked:path",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1003-optimal-control]]",
      "resolved": "urn:visionflow:linked:rb-1003-optimal-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1007-trajectory-generation]]",
      "resolved": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1017-rrt-algorithm]]",
      "resolved": "urn:visionflow:linked:rb-1017-rrt-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1018-dijkstra-algorithm]]",
      "resolved": "urn:visionflow:linked:rb-1018-dijkstra-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1019-obstacle-avoidance]]",
      "resolved": "urn:visionflow:linked:rb-1019-obstacle-avoidance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Start Configuration]]",
      "resolved": "urn:visionflow:linked:start-configuration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:owl:class:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Navigation]]",
      "resolved": "urn:visionflow:owl:class:navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RB-1013-localization]]",
      "resolved": "urn:visionflow:owl:class:rb-1013-localization",
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
  - The computational process of finding a feasible path for a robot to move from a start configuration to a goal configuration while avoiding obstacles and satisfying constraints. It determines a sequence of configurations connecting start to goal in the robot's configuration space.

- ### Semantic Classification
  - owl-class:: robotics:PathPlanning
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Motion Planning]], [[Autonomous Systems]]

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - requires:: [[RB-1013-localization]], [[Mapping]]
  - enables:: [[RB-1007-trajectory-generation]], [[Navigation]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Motion Planning]]
  - requires:: [[Start Configuration]]
  - requires:: [[Goal Configuration]]
  - requires:: [[Environment Model]]
  - produces:: [[Path]]
  - avoids:: [[Obstacles]]
  - characterized-by:: [[Feasibility]], [[Optimality]]

  - #### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - uses:: [[RB-1017-rrt-algorithm]], [[RB-1018-dijkstra-algorithm]]
  - enables:: [[RB-1007-trajectory-generation]], [[Navigation]]
  - requires:: [[RB-1013-localization]], [[Mapping]]
  - skos:related:: [[RB-1019-obstacle-avoidance]], [[RB-1003-optimal-control]]
  - applied-in:: [[Autonomous Vehicles]], [[Mobile Robots]], [[Manipulators]]

  - **Problem Formulation**
  - **Input**:
    - Robot model (geometry, kinematics)
    - Start configuration q_start
    - Goal configuration q_goal
    - Environment model (obstacles)
    - Constraints (kinematic, dynamic)
  - **Output**:
    - Path: sequence of configurations [q_start, ..., q_goal]
    - Or "No solution" if no feasible path exists

  - **Configuration Space (C-space)**
  - Space of all possible robot configurations
  - Obstacles mapped to C-space obstacles
  - Free space: collision-free configurations
  - Path planning searches in C-space
  - Dimensionality = robot degrees of freedom

  - **Planning Approaches**
  - **Complete Planners**: Find solution if exists, or report failure
  - **Resolution Complete**: Find solution at given resolution
  - **Probabilistically Complete**: Probability → 1 as time → ∞

  - **Classical Planning Methods**
  - **Graph Search Algorithms**:
    - [[RB-1018-dijkstra-algorithm]]
    - A* (A-star)
    - D* (Dynamic A*)
    - Theta*
  - **Roadmap Methods**:
    - Visibility Graph
    - Voronoi Diagram
    - Probabilistic Roadmap (PRM)
  - **Cell Decomposition**:
    - Exact decomposition
    - Approximate decomposition
    - Potential Fields

  - **Sampling-Based Methods**
  - [[RB-1017-rrt-algorithm]] (Rapidly-exploring Random Tree)
  - RRT* (optimal variant)
  - RRT-Connect (bidirectional)
  - PRM (Probabilistic Roadmap)
  - EST (Expansive Space Trees)

  - **Optimization Criteria**
  - Shortest path (distance)
  - Fastest path (time)
  - Smoothest path (curvature)
  - Energy-efficient path
  - Safest path (clearance from obstacles)
  - Multi-objective optimization

  - **Types of Path Planning**
  - **Global Planning**:
    - Complete environment known
    - Offline computation possible
    - Optimal or near-optimal solutions
  - **Local Planning**:
    - Partial environment knowledge
    - Real-time reactive planning
    - Fast computation required

  - **Constraints**
  - **Kinematic Constraints**:
    - Non-holonomic (e.g., car-like robots)
    - Joint limits
    - Workspace boundaries
  - **Dynamic Constraints**:
    - Velocity limits
    - Acceleration limits
    - Momentum considerations
  - **Environmental Constraints**:
    - Static obstacles
    - Dynamic obstacles
    - Narrow passages

  - **Special Cases**
  - **Multi-Robot Path Planning**:
    - Coordination required
    - Collision avoidance between robots
    - Centralized vs decentralized
  - **Dynamic Environments**:
    - Moving obstacles
    - Replanning required
    - Prediction of obstacle motion
  - **High-Dimensional Spaces**:
    - Manipulators (7+ DOF)
    - Humanoid robots
    - Curse of dimensionality

  - **Path Smoothing**
  - Post-processing to improve path quality
  - Remove unnecessary waypoints
  - Spline fitting
  - Shortcutting techniques

  - **Applications**
  - Autonomous vehicles (self-driving cars)
  - Mobile robot navigation
  - Manipulator motion planning
  - Drone flight planning
  - Warehouse automation (AGVs)
  - Surgical robots
  - Video game character movement

  - **Challenges**
  - Computational complexity (NP-hard in general)
  - High-dimensional configuration spaces
  - Dynamic and uncertain environments
  - Real-time requirements
  - Narrow passages
  - Non-holonomic constraints

  - **Metrics for Evaluation**
  - Path length/distance
  - Computation time
  - Path smoothness
  - Clearance from obstacles
  - Success rate
  - Memory usage

  - **Related Topics**
  - [[RB-1019-obstacle-avoidance]] (reactive)
  - [[RB-1007-trajectory-generation]] (time parameterization)
  - SLAM (building maps while planning)
  - Coverage path planning (area coverage)

  - **Quality Metrics**
  - authority-score:: 0.97
  - completeness:: 0.94
  - accuracy:: 0.96

- ### Provenance
  - sources:: [[Motion Planning]], [[Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
