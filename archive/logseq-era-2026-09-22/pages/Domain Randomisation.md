public:: true

# Domain Randomisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:domain-randomisation",
  "@type": "Page",
  "title": "Domain Randomisation",
  "vc:slug": "domain-randomisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:domain-randomisation",
  "@type": "Class",
  "label": "Domain Randomisation",
  "definition": "Domain randomisation is a technique for training robot and agent policies in simulation by randomising the parameters of the simulated environment, such as textures, lighting, dynamics, masses and sensor noise, so that the real world appears as just another variation. By forcing a policy to be robust across a wide distribution of simulated conditions, the approach narrows the reality gap and improves zero-shot or few-shot transfer of policies trained purely in simulation to physical hardware.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Robo Actuation and Control"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:robo-actuation-and-control",
        "label": "Robo Actuation and Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:robot-simulation",
        "label": "Robot Simulation"
      },
      {
        "@id": "urn:ngm:class:procedural-generation",
        "label": "Procedural Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-reinforcement-learning",
        "label": "Deep Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:system-identification",
        "label": "System Identification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:curriculum-learning",
        "label": "Curriculum Learning"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - Domain randomisation is a technique for training robot and agent policies in simulation by randomising the parameters of the simulated environment, such as textures, lighting, dynamics, masses and sensor noise, so that the real world appears as just another variation. By forcing a policy to be robust across a wide distribution of simulated conditions, the approach narrows the reality gap and improves zero-shot or few-shot transfer of policies trained purely in simulation to physical hardware.
  - Related core concepts: [[Robotics]] [[Simulation]] [[Reinforcement Learning]] [[System Identification]] [[Perception]]
- ### Overview
  - A central obstacle in robot learning is the reality gap: policies trained in a simulator often fail on real hardware because the simulator never perfectly matches reality. Domain randomisation sidesteps the need for a perfectly accurate simulator by deliberately injecting variation. Rather than trying to model the real world exactly, it trains on a broad distribution of simulated worlds so that the real world falls within the training distribution and the learned policy generalises to it. The technique applies both to visual perception (randomising appearance) and to dynamics (randomising physical parameters).
  - The core insight is statistical: if the real environment is one sample from a sufficiently broad training distribution, a policy that performs well in expectation over that distribution will also perform well on reality. This trades the impossible goal of a perfect simulator for the achievable goal of a richly varied one. Visual randomisation hardens perception against appearance, while dynamics randomisation hardens control against physical-model error.
- ### History and context
  - Domain randomisation rose to prominence in the late 2010s as deep reinforcement learning made simulation-trained policies attractive but the reality gap blocked their deployment. Demonstrations of transferring vision and dexterous-manipulation policies from randomised simulation to real robots established it as a practical sim-to-real tool.
- ### Mechanisms
  - Visual randomisation: varying textures, colours, lighting and camera placement so perception is invariant to appearance.
  - Dynamics randomisation: perturbing masses, friction, latency and actuator gains so control is robust to model error.
  - Sensor and observation noise: injecting realistic noise to harden policies against imperfect sensing.
  - Distribution design: choosing randomisation ranges wide enough to cover reality without making learning intractable.
  - Automatic and adaptive randomisation: tuning ranges during training, sometimes guided by real-world feedback.
  - Robust policy optimisation: training agents to perform well in expectation across the randomised distribution.
- ### Applications
  - Sim-to-real transfer of manipulation and locomotion policies to physical robots.
  - Vision systems for object detection and pose estimation trained on randomised synthetic imagery.
  - Dexterous in-hand manipulation where accurate contact dynamics are hard to model.
  - Autonomous driving and drone control trained across diverse simulated conditions.
- ### Challenges and considerations
  - Range selection: too narrow fails to cover reality, too wide makes learning intractable.
  - Compute cost: training across many randomised variations is sample-hungry.
  - Sim-real mismatch beyond randomised factors: unmodelled phenomena still cause failures.
  - Evaluation: measuring transfer reliably requires careful real-world testing.
- ### Examples
  - Transferring an in-hand cube-manipulation policy from randomised simulation to a robot hand.
  - Training object detectors on randomised synthetic scenes for robust real-world perception.
  - Learning quadruped locomotion robust to varied terrain and actuator dynamics.
- ### Relationships
  - subClassOf:: [[Robo Actuation and Control]]
  - partOf:: [[Robo Actuation and Control]]
  - uses:: [[Physics Simulation]]
  - uses:: [[Simulation]]
  - uses:: [[Robot Simulation]]
  - uses:: [[Procedural Generation]]
  - enables:: [[Deep Reinforcement Learning]]
  - enables:: [[Domain Adaptation]]
  - requires:: [[Reinforcement Learning]]
  - contrastsWith:: [[System Identification]]
  - supports:: [[Robotics]]
  - supports:: [[Perception]]
  - relatedTo:: [[Curriculum Learning]]
  - relatedTo:: [[Uncertainty Quantification]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
