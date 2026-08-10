public:: true

# Torque Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a8f05505135267a9d3c5b4be37e558f7f9f57312ca26c2ef8c58be03cca33933",
  "@type": "Page",
  "vc:slug": "torque-control",
  "title": "Torque Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:motion-control",
      "vc:label": "Motion Control"
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
      "vc:value": "RB-0153"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Torque Control"
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
  "@id": "urn:ngm:class:torque-control",
  "@type": "Class",
  "label": "Torque Control",
  "definition": "A low-level actuation strategy that directly commands the output torque of joints or motors rather than position or velocity, enabling compliant, force-sensitive interaction between a robot and its environment. Torque control is essential for safe human-robot collaboration and dexterous manipulation tasks.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:motion-control",
      "label": "Motion Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:torque-sensor",
        "label": "Torque Sensor"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robo-actuation-and-control",
        "label": "Actuation and Control"
      },
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:torque-sensor",
        "label": "Torque Sensor"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robot"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:compliant-manipulation",
        "label": "Compliant Manipulation"
      },
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      },
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:pid-control",
        "label": "PID Control"
      },
      {
        "@id": "urn:ngm:class:robot-dynamics",
        "label": "Robot Dynamics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:robot-actuator",
        "label": "Robot Actuator"
      },
      {
        "@id": "urn:ngm:class:servo-control",
        "label": "Servo Control"
      },
      {
        "@id": "urn:ngm:class:robot-kinematics",
        "label": "Robot Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:dexterous-manipulation",
        "label": "Dexterous Manipulation"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Physical Human-Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:robot-safety",
        "label": "Robot Safety"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:position-control",
        "label": "Position Control"
      },
      {
        "@id": "urn:ngm:class:velocity-control",
        "label": "Velocity Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pid-control",
        "label": "PID Control"
      },
      {
        "@id": "urn:ngm:class:servo-control",
        "label": "Servo Control"
      },
      {
        "@id": "urn:ngm:class:robot-kinematics",
        "label": "Robot Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      },
      {
        "@id": "urn:ngm:class:admittance-control",
        "label": "Admittance Control"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:joint-torque-control",
      "label": "Joint Torque Control"
    },
    {
      "@id": "urn:ngm:class:direct-torque-control",
      "label": "Direct Torque Control"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:torque-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a8f05505135267a9d3c5b4be37e558f7f9f57312ca26c2ef8c58be03cca33933"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motion Control]]",
      "resolved": "urn:visionflow:owl:class:motion-control",
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
  - Torque control directly commands actuator torques for compliant interaction.

- ### Semantic Classification
  - owl-class:: robotics:TorqueControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Motion Control]]

- ### Content
  Torque Control — content pending enrichment.

- ### Current Landscape (2026)
  - The safety baseline shifted in 2025: the 3rd editions of ISO 10218-1 and ISO 10218-2 were published (Jan/Feb 2025), folding the collaborative content of ISO/TS 15066 directly into the standard, making functional-safety requirements explicit and adding cybersecurity provisions; Power and Force Limiting (PFL) still leans on per-joint torque sensing to keep contact below the ISO/TS 15066 Annex A biomechanical limits, with the EU Cyber Resilience Act applying to connected robots from 11 December 2027.
  - Sensorless torque control matured: a 2025 framework combining Physics-Informed Neural Networks for friction modelling with an Unscented Kalman Filter (validated on the ergoCub humanoid) delivered better torque-tracking, energy efficiency and disturbance rejection than the classical Recursive Newton-Euler baseline, and generalised across robots without re-identification.
  - Quasi-direct-drive (QDD) and cycloidal QDD actuators became the default for dynamic legged robots, prized for backdrivability and high force-control bandwidth; Zhu, Tanaka and Hong's cycloidal QDD design (ICRA 2025) pairs the actuator with a GRU-based learned torque estimator to capture ripple and non-linearities and shrink the sim-to-real gap for reinforcement learning.
  - Reinforcement-learning locomotion increasingly targets the torque domain directly: the Joint Torque Space Perturbation Injection method (Cha et al., April 2025) replaces fixed domain randomisation with state-dependent torque-space perturbations for more robust zero-shot transfer, reflecting a broader move to torque-level policies over pure PD position control.
  - Whole-body impedance and compliant force control advanced on full-scale humanoids: 2025-2026 work demonstrated MPC-QP whole-body controllers with stiffness modulation for human-humanoid co-transport (on Digit), and reference implementations reporting roughly 5 ms impedance updates at 100 Hz with force tracking within about 2% of nominal stiffness.
  - Torque sensing is now saturating commercial hardware: Tesla's Optimus reportedly carries 14 torque sensors and 18 force sensors, while suppliers such as Sensodrive (SensoJoint, certified to ISO 13849/EN 61800-5-2/IEC 61508 up to SIL3/PLe) and FUTEK ship joint-level torque sensors as safety-certified drop-in drives for cobots and humanoids.
  - Open challenges as of 2026 remain the sim-to-real gap for high-gear-ratio, torque-sensorless joints (friction, backlash, ripple), real-time whole-body torque optimisation at scale (GPU-accelerated centroidal dynamics is one 2026 response to the CPU-GPU bottleneck), and certifying learning-based torque controllers against the functional-safety requirements now mandated by ISO 10218:2025.

- ### References
  - 1. International Organization for Standardization (2025). ISO 10218-1:2025 — Robotics: Safety requirements, Part 1: Industrial robots. https://www.iso.org/standard/73933.html
  - 2. Zhu, A., Tanaka, Y., Rafeedi, F. & Hong, D. (2024/2025). Cycloidal Quasi-Direct Drive Actuator Designs with Learning-based Torque Estimation for Legged Robotics (ICRA 2025). https://arxiv.org/pdf/2410.16591
  - 3. ergoCub / IIT team (2025). PINNs with UKF for Sensorless Joint Torque Estimation in Humanoid Robots. https://www.youtube.com/watch?v=FufYAPuL_nA
  - 4. Cha, J. et al. (2025). Sim-to-Real of Humanoid Locomotion Policies via Joint Torque Space Perturbation Injection. https://arxiv.org/html/2504.06585v1
  - 5. Transense (2025). Advances in Sensing for Robotics Applications (Tesla Optimus torque/force sensing; ISO 10218-1). https://www.transense.com/sawsense/advances-in-sensing-for-robotics-applications
  - 6. Authors (2025). Efficient and Compliant Control Framework for Versatile Human-Humanoid Co-Transportation (QP whole-body torque/force control on Digit). https://arxiv.org/html/2512.07819v1

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
