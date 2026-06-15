public:: true
alias:: InverseKinematics, RB-1006-inverse-kinematics

# Inverse Kinematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:87e94a87e9a65f7dd844e9523698a3bcd963ac744b4725274f8b42fc0cf244be",
  "@type": "Page",
  "vc:slug": "inverse-kinematics",
  "title": "Inverse Kinematics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:analytical-methods",
      "vc:label": "Analytical Methods"
    },
    {
      "@id": "urn:visionflow:linked:complexity",
      "vc:label": "Complexity"
    },
    {
      "@id": "urn:visionflow:linked:jacobian-matrix",
      "vc:label": "Jacobian Matrix"
    },
    {
      "@id": "urn:visionflow:linked:joint-configuration",
      "vc:label": "Joint Configuration"
    },
    {
      "@id": "urn:visionflow:linked:joint-limits",
      "vc:label": "Joint Limits"
    },
    {
      "@id": "urn:visionflow:linked:kinematic-model",
      "vc:label": "Kinematic Model"
    },
    {
      "@id": "urn:visionflow:linked:multiple-solutions",
      "vc:label": "Multiple Solutions"
    },
    {
      "@id": "urn:visionflow:linked:no-solution",
      "vc:label": "No Solution"
    },
    {
      "@id": "urn:visionflow:linked:non-uniqueness",
      "vc:label": "Non-Uniqueness"
    },
    {
      "@id": "urn:visionflow:linked:numerical-methods",
      "vc:label": "Numerical Methods"
    },
    {
      "@id": "urn:visionflow:linked:rb-0003-manipulator",
      "vc:label": "RB-0003-manipulator"
    },
    {
      "@id": "urn:visionflow:linked:rb-0004-humanoid-robot",
      "vc:label": "RB-0004-humanoid-robot"
    },
    {
      "@id": "urn:visionflow:linked:rb-1005-forward-kinematics",
      "vc:label": "RB-1005-forward-kinematics"
    },
    {
      "@id": "urn:visionflow:linked:rb-1016-path-planning",
      "vc:label": "RB-1016-path-planning"
    },
    {
      "@id": "urn:visionflow:linked:singularities",
      "vc:label": "Singularities"
    },
    {
      "@id": "urn:visionflow:linked:target-pose",
      "vc:label": "Target Pose"
    },
    {
      "@id": "urn:visionflow:owl:class:kinematics",
      "vc:label": "Kinematics"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-control",
      "vc:label": "Robot Control"
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
      "vc:value": "RB-1006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Inverse Kinematics"
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
  "@id": "urn:ngm:class:inverse-kinematics",
  "@type": "Class",
  "label": "Inverse Kinematics",
  "definition": "The process of determining the joint parameters (angles or displacements) required to place a robot's end-effector at a desired position and orientation in Cartesian space. It maps from task space to joint space, inverting the forward kinematic function and resolving ambiguities such as multiple solutions, singularities, and joint-limit violations.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:kinematics",
    "label": "Kinematics"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Robot Motion Planning"
      },
      {
        "@id": "urn:ngm:class:robo-actuation-and-control",
        "label": "Actuation and Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:kinematic-model",
        "label": "KinematicModel"
      },
      {
        "@id": "urn:ngm:class:joint-configuration",
        "label": "Joint Configuration"
      },
      {
        "@id": "urn:ngm:class:rb-0023-degrees-of-freedom",
        "label": "Degrees of Freedom"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:computer-animation",
        "label": "Computer Animation"
      },
      {
        "@id": "urn:ngm:class:surgical-robotics",
        "label": "Surgical Robotics"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      },
      {
        "@id": "urn:ngm:class:coordinate-frame",
        "label": "Coordinate Frame"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:jacobian-matrix",
        "label": "Jacobian Matrix"
      },
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:optimization",
        "label": "Optimization"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ik-solver",
      "label": "IK Solver"
    },
    {
      "@id": "urn:ngm:class:joint-space-mapping",
      "label": "Joint Space Mapping"
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
  "@id": "urn:visionflow:annotation:link-resolutions:inverse-kinematics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:87e94a87e9a65f7dd844e9523698a3bcd963ac744b4725274f8b42fc0cf244be"
  },
  "vc:resolutions": [
    {
      "raw": "[[Analytical Methods]]",
      "resolved": "urn:visionflow:linked:analytical-methods",
      "kind": "StubLink"
    },
    {
      "raw": "[[Complexity]]",
      "resolved": "urn:visionflow:linked:complexity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Jacobian Matrix]]",
      "resolved": "urn:visionflow:linked:jacobian-matrix",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Configuration]]",
      "resolved": "urn:visionflow:linked:joint-configuration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Limits]]",
      "resolved": "urn:visionflow:linked:joint-limits",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kinematic Model]]",
      "resolved": "urn:visionflow:linked:kinematic-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multiple Solutions]]",
      "resolved": "urn:visionflow:linked:multiple-solutions",
      "kind": "StubLink"
    },
    {
      "raw": "[[No Solution]]",
      "resolved": "urn:visionflow:linked:no-solution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Non-Uniqueness]]",
      "resolved": "urn:visionflow:linked:non-uniqueness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Numerical Methods]]",
      "resolved": "urn:visionflow:linked:numerical-methods",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-0003-manipulator]]",
      "resolved": "urn:visionflow:linked:rb-0003-manipulator",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-0004-humanoid-robot]]",
      "resolved": "urn:visionflow:linked:rb-0004-humanoid-robot",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1005-forward-kinematics]]",
      "resolved": "urn:visionflow:linked:rb-1005-forward-kinematics",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1016-path-planning]]",
      "resolved": "urn:visionflow:linked:rb-1016-path-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Singularities]]",
      "resolved": "urn:visionflow:linked:singularities",
      "kind": "StubLink"
    },
    {
      "raw": "[[Target Pose]]",
      "resolved": "urn:visionflow:linked:target-pose",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kinematics]]",
      "resolved": "urn:visionflow:owl:class:kinematics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:owl:class:robot-control",
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
  - The process of determining the joint parameters (angles or displacements) required to place a robot's end-effector at a desired position and orientation in Cartesian space. It maps from task space to joint space.

- ### Semantic Classification
  - owl-class:: robotics:InverseKinematics
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Kinematics]]

- ### Relationships
  - is-subclass-of:: [[Kinematics]]
  - requires:: [[Kinematic Model]]
  - enables:: [[RB-1016-path-planning]], [[Robot Control]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Kinematics]]
  - requires:: [[Kinematic Model]]
  - requires:: [[Target Pose]]
  - computes:: [[Joint Configuration]]
  - hasInput some CartesianPose
  - hasOutput some JointParameters
  - mayHave:: [[Multiple Solutions]], [[No Solution]]
  - characterizedBy:: [[Complexity]], [[Non-Uniqueness]]

  - #### Relationships
  - is-subclass-of:: [[Kinematics]]
  - inverse-of:: [[RB-1005-forward-kinematics]]
  - uses:: [[Numerical Methods]], [[Analytical Methods]], [[Jacobian Matrix]]
  - enables:: [[RB-1016-path-planning]], [[Robot Control]]
  - challenges:: [[Singularities]], [[Joint Limits]]
  - applied-to:: [[RB-0003-manipulator]], [[RB-0004-humanoid-robot]]

  - **Solution Types**
  - Analytical (Closed-Form) Solutions
  - Numerical (Iterative) Solutions
  - Geometric Solutions
  - Optimization-Based Solutions

  - **Analytical Methods**
  - Algebraic approach
  - Geometric decomposition
  - Pieper's solution (for 6-DOF with spherical wrist)
  - Limited to specific robot geometries

  - **Numerical Methods**
  - Jacobian-based methods
  - Newton-Raphson iteration
  - Gradient descent
  - Cyclic Coordinate Descent (CCD)
  - FABRIK (Forward And Backward Reaching Inverse Kinematics)
  - Levenberg-Marquardt algorithm

  - **Challenges**
  - Multiple Solutions (infinite for redundant robots)
  - No Solution (target outside workspace)
  - Singularities (Jacobian becomes singular)
  - Joint Limits (physical constraints)
  - Computational Complexity
  - Real-time requirements

  - **Solution Selection Criteria**
  - Closest to current configuration
  - Avoid joint limits
  - Avoid singularities
  - Minimize energy consumption
  - Collision avoidance

  - **Applications**
  - Robot motion planning
  - Teleoperation
  - Computer animation
  - Virtual reality interaction
  - Surgical robotics
  - Collaborative robot control

  - **Special Cases**
  - Redundant robots (more DOF than needed)
  - Under-actuated robots (fewer DOF than needed)
  - Parallel robots (closed kinematic chains)

  - **Optimization Approaches**
  - Pseudoinverse methods
  - Damped least squares
  - Task priority methods
  - Null-space optimization

  - **Quality Metrics**
  - authority-score:: 0.97
  - completeness:: 0.94
  - accuracy:: 0.96


  <!-- Merged from Inverse Kinematics.md: RoboticsDomain -->

- ### Provenance
  - sources:: [[Robotics]], [[Kinematics]]
  - migration-date:: 2026-04-26T00:00:00Z
