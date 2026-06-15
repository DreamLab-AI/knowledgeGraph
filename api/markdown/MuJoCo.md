public:: true

# MuJoCo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mu-jo-co",
  "@type": "Page",
  "vc:slug": "mu-jo-co",
  "title": "MuJoCo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mu-jo-co",
  "@type": "Class",
  "label": "MuJoCo",
  "definition": "MuJoCo (Multi-Joint dynamics with Contact) is a high-speed, high-fidelity physics simulation engine designed for modelling articulated rigid-body systems with complex contact dynamics, widely used in robotics research and reinforcement learning. Developed by Emo Todorov at the University of Washington and commercialised by Roboti LLC, it was acquired by Google DeepMind in 2021 and made freely available as open-source software in 2022. MuJoCo excels at simulating musculoskeletal models, legged locomotion, dexterous manipulation, and other contact-rich robotic tasks that require accurate Lagrangian dynamics and constraint solvers. Its adoption as the standard benchmark environment for reinforcement learning algorithms—via OpenAI Gym and later Gymnasium wrappers—has made it the de facto substrate for sim-to-real transfer research in robotics.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:embodied-ai-simulation", "label": "Embodied AI Simulation"},
      {"@id": "urn:ngm:class:physics-engine", "label": "Physics Engine"},
      {"@id": "urn:ngm:class:robot-learning", "label": "Robot Learning"},
      {"@id": "urn:ngm:class:sim-to-real-transfer", "label": "Sim-to-Real Transfer"},
      {"@id": "urn:ngm:class:continuous-control", "label": "Continuous Control"},
      {"@id": "urn:ngm:class:computational-neuroscience", "label": "Computational Neuroscience"},
      {"@id": "urn:ngm:class:biomechanics", "label": "Biomechanics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:humanoid-robotics", "label": "Humanoid Robotics"},
      {"@id": "urn:ngm:class:legged-locomotion", "label": "Legged Locomotion"},
      {"@id": "urn:ngm:class:dexterous-manipulation", "label": "Dexterous Manipulation"},
      {"@id": "urn:ngm:class:policy-gradient-methods", "label": "Policy Gradient Methods"},
      {"@id": "urn:ngm:class:domain-randomisation", "label": "Domain Randomisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning-algorithm", "label": "Reinforcement Learning Algorithm"},
      {"@id": "urn:ngm:class:proximal-policy-optimisation", "label": "Proximal Policy Optimisation"},
      {"@id": "urn:ngm:class:convex-optimisation", "label": "Convex Optimisation"},
      {"@id": "urn:ngm:class:lagrangian-dynamics", "label": "Lagrangian Dynamics"},
      {"@id": "urn:ngm:class:xml-model-definition", "label": "XML Model Definition"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:constraint-solver", "label": "Constraint Solver"},
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:contact-dynamics-model", "label": "Contact Dynamics Model"},
      {"@id": "urn:ngm:class:musculoskeletal-model", "label": "Musculoskeletal Model"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:openai-gym", "label": "OpenAI Gym"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:isaac-gym", "label": "Isaac Gym"},
      {"@id": "urn:ngm:class:pybullet", "label": "PyBullet"},
      {"@id": "urn:ngm:class:gazebo", "label": "Gazebo"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:multi-joint-dynamics-with-contact", "label": "Multi-Joint Dynamics with Contact"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[MuJoCo]] is a high-speed physics simulation engine for articulated rigid-body systems with contact dynamics, serving as the standard benchmark environment for [[Reinforcement Learning]] algorithms and sim-to-real transfer in [[Humanoid Robotics]] and [[Robot Learning]] research.
- ### Relationships
  - [[MuJoCo]] underpins [[Embodied AI Simulation]] by providing fast, accurate physics that allows reinforcement learning agents to accumulate millions of environment interactions in hours rather than weeks of real-world operation. It is the primary platform for developing [[Reinforcement Learning Algorithm]] implementations, including [[Proximal Policy Optimisation]] and SAC (Soft Actor-Critic), across tasks from [[Legged Locomotion]] to dexterous manipulation. As a [[Physics Engine]], MuJoCo competes with Isaac Gym, PyBullet, and Gazebo but dominates contact-rich [[Robot Learning]] benchmarks. Its adoption by [[Google DeepMind]] and release as open-source accelerated its use in [[Humanoid Robotics]] projects globally.
- ### Content
  - MuJoCo's core technical innovation is its constraint-based contact model. Rather than resolving contact forces through sequential impulse or penalty methods—which suffer from jitter at low stiffness settings or require prohibitively small time-steps at high stiffness—MuJoCo uses a convex optimisation formulation that solves contact forces and joint constraints simultaneously. This produces stable, physically plausible behaviour for complex contact-rich tasks at large time-steps (typically 2–10ms), enabling wall-clock simulation rates 100–1000 times faster than real time on modern hardware without GPU acceleration.

  - The simulation engine is specified through an XML Model Definition Language (MJCF), which allows researchers to define robot morphologies, actuator models, sensor configurations, and environment geometry declaratively. MJCF supports a rich set of actuator models including position, velocity, and torque control as well as musculotendon models that capture biological actuation dynamics. This makes MuJoCo the primary tool for computational neuroscience and biomechanics research alongside its robotics applications—studies of human locomotion, prosthetic limb control, and exoskeleton design all leverage its musculoskeletal modelling capabilities.

  - The reinforcement learning community adopted MuJoCo as a benchmark through OpenAI's Gym library, which provided standardised wrappers for tasks such as HalfCheetah, Hopper, Walker2D, Ant, and Humanoid. These tasks became the canonical benchmarks for continuous control RL algorithms, enabling objective comparison of sample efficiency, final performance, and robustness across [[Reinforcement Learning Algorithm]] implementations. The freely available versions of these benchmarks through DeepMind's dm_control and the Gymnasium successor to Gym have ensured MuJoCo's continued centrality to the field.

  - Sim-to-real transfer—the challenge of deploying policies trained in simulation on physical robots—is MuJoCo's most commercially significant frontier. Policies trained in MuJoCo on [[Legged Locomotion]] tasks have been deployed on physical robots including Boston Dynamics Spot and Stanford's ANYmal, demonstrating that domain randomisation techniques (randomising mass, friction, and actuator parameters during training) can bridge the reality gap. Google DeepMind's acquisition and open-sourcing of MuJoCo in 2022 was motivated in part by the desire to accelerate this sim-to-real research trajectory and cement its position in the [[Embodied AI Simulation]] ecosystem.
