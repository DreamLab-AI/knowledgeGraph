public:: true
alias:: Closed Loop Control, RB-1002-closed-loop-control

# Closed-Loop Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3",
  "@type": "Page",
  "vc:slug": "closed-loop-control",
  "title": "Closed-Loop Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuator",
      "vc:label": "Actuator"
    },
    {
      "@id": "urn:visionflow:linked:adaptability",
      "vc:label": "Adaptability"
    },
    {
      "@id": "urn:visionflow:linked:controller",
      "vc:label": "Controller"
    },
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:pid-control",
      "vc:label": "PID Control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1001-open-loop-control",
      "vc:label": "RB-1001-open-loop-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1004-adaptive-control",
      "vc:label": "RB-1004-adaptive-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "vc:label": "RB-1007-trajectory-generation"
    },
    {
      "@id": "urn:visionflow:linked:rb-1015-kalman-filter",
      "vc:label": "RB-1015-kalman-filter"
    },
    {
      "@id": "urn:visionflow:linked:sensor-system",
      "vc:label": "Sensor System"
    },
    {
      "@id": "urn:visionflow:linked:stability",
      "vc:label": "Stability"
    },
    {
      "@id": "urn:visionflow:owl:class:accuracy",
      "vc:label": "Accuracy"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:control-system",
      "vc:label": "Control System"
    },
    {
      "@id": "urn:visionflow:owl:class:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:owl:class:feedback-mechanism",
      "vc:label": "Feedback Mechanism"
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
      "vc:value": "RB-1002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Closed-Loop Control"
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
  "@id": "urn:ngm:class:closed-loop-control",
  "@type": "Class",
  "label": "Closed-Loop Control",
  "definition": "A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:feedback-mechanism",
        "label": "Feedback Mechanism"
      },
      {
        "@id": "urn:ngm:class:error-signal",
        "label": "Error Signal"
      },
      {
        "@id": "urn:ngm:class:setpoint",
        "label": "Setpoint"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:controller",
        "label": "Controller"
      },
      {
        "@id": "urn:ngm:class:sensor-system",
        "label": "Sensor System"
      },
      {
        "@id": "urn:ngm:class:feedback-mechanism",
        "label": "Feedback Mechanism"
      },
      {
        "@id": "urn:ngm:class:stability",
        "label": "Stability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rb-1007-trajectory-generation",
        "label": "Trajectory Generation"
      },
      {
        "@id": "urn:ngm:class:rb-1013-localization",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:disturbance-rejection",
        "label": "Disturbance Rejection"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:pid-control",
        "label": "PID Control"
      },
      {
        "@id": "urn:ngm:class:adaptive-control",
        "label": "Adaptive Control"
      },
      {
        "@id": "urn:ngm:class:optimal-control",
        "label": "Optimal Control"
      },
      {
        "@id": "urn:ngm:class:robust-control",
        "label": "Robust Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:controller",
        "label": "Controller"
      },
      {
        "@id": "urn:ngm:class:sensor-system",
        "label": "Sensor System"
      },
      {
        "@id": "urn:ngm:class:state-space-representation",
        "label": "State Space Representation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-8373-2021",
        "label": "ISO 8373:2021"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:open-loop-control",
        "label": "Open-Loop Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:system-identification",
        "label": "System Identification"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:feedback-control",
      "label": "Feedback Control"
    },
    {
      "@id": "urn:ngm:class:feedback-control-system",
      "label": "Feedback Control System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:closed-loop-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuator]]",
      "resolved": "urn:visionflow:linked:actuator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Adaptability]]",
      "resolved": "urn:visionflow:linked:adaptability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Controller]]",
      "resolved": "urn:visionflow:linked:controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[PID Control]]",
      "resolved": "urn:visionflow:linked:pid-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1001-open-loop-control]]",
      "resolved": "urn:visionflow:linked:rb-1001-open-loop-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1004-adaptive-control]]",
      "resolved": "urn:visionflow:linked:rb-1004-adaptive-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1007-trajectory-generation]]",
      "resolved": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1015-kalman-filter]]",
      "resolved": "urn:visionflow:linked:rb-1015-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor System]]",
      "resolved": "urn:visionflow:linked:sensor-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stability]]",
      "resolved": "urn:visionflow:linked:stability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accuracy]]",
      "resolved": "urn:visionflow:owl:class:accuracy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control System]]",
      "resolved": "urn:visionflow:owl:class:control-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:owl:class:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feedback Mechanism]]",
      "resolved": "urn:visionflow:owl:class:feedback-mechanism",
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
  - A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.

- ### Semantic Classification
  - owl-class:: robotics:ClosedLoopControl
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Control Theory]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - requires:: [[Sensor System]]
  - requires:: [[Controller]]
  - requires:: [[Actuator]]
  - hasErrorSignal some MeasurementError
  - implements some CorrectionStrategy
  - characterizedBy:: [[Stability]], [[Accuracy]], [[Adaptability]]

  - #### Relationships
  - is-subclass-of:: [[Control System]]
  - contrasts-with:: [[RB-1001-open-loop-control]]
  - uses:: [[Sensor System]], [[Controller]], [[Actuator]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - skos:related:: [[RB-1015-kalman-filter]]

  - **Components**
  - Reference Input (setpoint)
  - Controller (decision maker)
  - Actuator (action taker)
  - Plant (system being controlled)
  - Sensor (measurement)
  - Feedback Loop (error calculation)

  - **Control Strategies**
  - PID Control (Proportional-Integral-Derivative)
  - State-space control
  - Adaptive control
  - Optimal control
  - Robust control

  - **Advantages**
  - Error correction capability
  - Disturbance rejection
  - Adaptive to environmental changes
  - Improved accuracy and stability

  - **Disadvantages**
  - More complex implementation
  - Higher cost (sensors required)
  - Potential instability if poorly tuned
  - Feedback delay effects

  - **Applications**
  - Robot arm position control
  - Mobile robot navigation
  - Autonomous vehicles
  - Industrial process control
  - Collaborative robots (cobots)

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.96

- ### Current Landscape (2026)
  - The frontier has shifted from classical PID/model-predictive loops towards learned visuomotor policies that close the perception-action loop directly; Diffusion Policy (Chi et al., IJRR 2024) established receding-horizon closed-loop action-chunk prediction as the dominant formulation, replanning roughly every 0.8s from as few as 50-150 teleoperation demonstrations.
  - The central 2025 problem became running large flow/diffusion Vision-Language-Action models fast enough to close a real-time loop: Physical Intelligence's Real-Time Chunking (RTC, June 2025) reframes chunk transitions as an inpainting problem with "prefix guidance", holding 50Hz control on pi-0 and pi-0.5 and staying stable under 200-300ms of injected inference delay with no retraining.
  - Generalist VLA policies are now the key players in closed-loop manipulation: Physical Intelligence's pi-0.5 (April 2025) runs a System-2 high-level text action at low frequency and a System-1 1-second (50-step) low-level action chunk at 50Hz, alongside OpenVLA, SmolVLA and pi-0-FAST in the open lerobot stack.
  - Explicit feedback-driven frameworks have re-entered learning-based control: CLOVER (NeurIPS 2024) pairs a text-conditioned video-diffusion planner with a measurable error-embedding controller that triggers replans, improving on open-loop baselines by ~8% on CALVIN and nearly doubling completed-task length versus RT-1.
  - Onboard latency remains the binding constraint: naive pi-0.5 runs at only ~0.7Hz (1.4s inference) on an NVIDIA Jetson Orin, so 2025-2026 work such as VLASH (up to 11.8x reaction-latency reduction) and Jetson-PI (8.66x control-frequency gain via scheduling and CUDA-graph reuse) targets edge deployment, with Intel shipping an OpenVINO pi-0.5+RTC pipeline in its 2026 Edge AI Suite.
  - Real-world reinforcement learning for closed-loop control is maturing via human-in-the-loop and online model-based methods (HIL-SERL, 2024; online model-based RL training excavator and soft-robot arms directly on hardware within hours, 2025), but sample efficiency, safety certification and sim-to-real transfer for vision-based closed-loop grasping remain open challenges as of 2026.

- ### References
  - 1. Physical Intelligence (2025). Real-Time Action Chunking with Large Models. https://www.pi.website/research/real_time_chunking
  - 2. Kim, Black et al. (2025). Real-Time Execution of Action Chunking Flow Policies (RTC). arXiv:2506.07339. https://arxiv.org/html/2506.07339v1
  - 3. Physical Intelligence (2025). pi-0.5: A VLA with Open-World Generalization. https://www.pi.website/blog/pi05
  - 4. Bu et al. (2024). CLOVER: Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation. NeurIPS 2024. https://proceedings.neurips.cc/paper_files/paper/2024/file/fad8962279154544ed69bb63eb14d677-Paper-Conference.pdf
  - 5. Jetson-PI (2026). Towards Onboard Real-Time Robot Control via Foresight Scheduling. arXiv:2607.12659. https://arxiv.org/html/2607.12659v4
  - 6. Intel (2026). Pi0.5 with Real-Time Chunking, Robotics AI Suite. Open Edge Platform documentation. https://docs.openedgeplatform.intel.com/2026.0/edge-ai-suites/robotics-ai-suite/embodied/sample_pipelines/pi05_with_rtc.html

- ### Provenance
  - sources:: [[Control Theory]], [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z
