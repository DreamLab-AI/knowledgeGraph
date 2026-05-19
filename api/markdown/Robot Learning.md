public:: true

# Robot Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b147f2b77409471d9e917779d983f094cf43b8f8386344355fd297a6d1496bc1",
  "@type": "Page",
  "vc:slug": "robot-learning",
  "title": "Robot Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:association-for-the-advancement-of-artificial-intelligence-aaai",
      "vc:label": "Association for the Advancement of Artificial Intelligence (AAAI)"
    },
    {
      "@id": "urn:visionflow:linked:compute-resources",
      "vc:label": "ComputeResources"
    },
    {
      "@id": "urn:visionflow:linked:conference-on-robot-learning-co-rl",
      "vc:label": "Conference on Robot Learning (CoRL)"
    },
    {
      "@id": "urn:visionflow:linked:ieee-robotics-and-automation",
      "vc:label": "IEEE Robotics and Automation"
    },
    {
      "@id": "urn:visionflow:linked:international-conference-on-learning-representations-iclr",
      "vc:label": "International Conference on Learning Representations (ICLR)"
    },
    {
      "@id": "urn:visionflow:linked:self-supervised-learning",
      "vc:label": "SelfSupervisedLearning"
    },
    {
      "@id": "urn:visionflow:linked:sensor-data",
      "vc:label": "SensorData"
    },
    {
      "@id": "urn:visionflow:linked:simulation-environment",
      "vc:label": "SimulationEnvironment"
    },
    {
      "@id": "urn:visionflow:linked:skill-acquisition",
      "vc:label": "SkillAcquisition"
    },
    {
      "@id": "urn:visionflow:linked:transfer-learning",
      "vc:label": "TransferLearning"
    },
    {
      "@id": "urn:visionflow:owl:class:adaptive-control",
      "vc:label": "AdaptiveControl"
    },
    {
      "@id": "urn:visionflow:owl:class:aidomain",
      "vc:label": "AIDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-navigation",
      "vc:label": "AutonomousNavigation"
    },
    {
      "@id": "urn:visionflow:owl:class:imitation-learning",
      "vc:label": "ImitationLearning"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "MachineLearning"
    },
    {
      "@id": "urn:visionflow:owl:class:manipulation",
      "vc:label": "Manipulation"
    },
    {
      "@id": "urn:visionflow:owl:class:reinforcement-learning",
      "vc:label": "ReinforcementLearning"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:training-data",
      "vc:label": "TrainingData"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-3000"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot Learning"
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
  "@id": "urn:ngm:class:robot-learning",
  "@type": "Class",
  "label": "Robot Learning",
  "definition": "The application of machine learning algorithms and artificial intelligence techniques to enable robots to acquire new skills, adapt to changing environments, and improve performance through experience, encompassing supervised learning (imitation learning, learning from demonstration), reinforceme...",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:self-supervised-learning",
        "label": "SelfSupervisedLearning"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "TransferLearning"
      },
      {
        "@id": "urn:ngm:class:imitation-learning",
        "label": "ImitationLearning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "ReinforcementLearning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-resources",
        "label": "ComputeResources"
      },
      {
        "@id": "urn:ngm:class:sensor-data",
        "label": "SensorData"
      },
      {
        "@id": "urn:ngm:class:simulation-environment",
        "label": "SimulationEnvironment"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "TrainingData"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:skill-acquisition",
        "label": "SkillAcquisition"
      },
      {
        "@id": "urn:ngm:class:adaptive-control",
        "label": "AdaptiveControl"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "AutonomousNavigation"
      },
      {
        "@id": "urn:ngm:class:manipulation",
        "label": "Manipulation"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robot-learning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b147f2b77409471d9e917779d983f094cf43b8f8386344355fd297a6d1496bc1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Association for the Advancement of Artificial Intelligence (AAAI)]]",
      "resolved": "urn:visionflow:linked:association-for-the-advancement-of-artificial-intelligence-aaai",
      "kind": "StubLink"
    },
    {
      "raw": "[[ComputeResources]]",
      "resolved": "urn:visionflow:linked:compute-resources",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conference on Robot Learning (CoRL)]]",
      "resolved": "urn:visionflow:linked:conference-on-robot-learning-co-rl",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE Robotics and Automation]]",
      "resolved": "urn:visionflow:linked:ieee-robotics-and-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[International Conference on Learning Representations (ICLR)]]",
      "resolved": "urn:visionflow:linked:international-conference-on-learning-representations-iclr",
      "kind": "StubLink"
    },
    {
      "raw": "[[SelfSupervisedLearning]]",
      "resolved": "urn:visionflow:linked:self-supervised-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[SensorData]]",
      "resolved": "urn:visionflow:linked:sensor-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[SimulationEnvironment]]",
      "resolved": "urn:visionflow:linked:simulation-environment",
      "kind": "StubLink"
    },
    {
      "raw": "[[SkillAcquisition]]",
      "resolved": "urn:visionflow:linked:skill-acquisition",
      "kind": "StubLink"
    },
    {
      "raw": "[[TransferLearning]]",
      "resolved": "urn:visionflow:linked:transfer-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[AdaptiveControl]]",
      "resolved": "urn:visionflow:owl:class:adaptive-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AIDomain]]",
      "resolved": "urn:visionflow:owl:class:aidomain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AutonomousNavigation]]",
      "resolved": "urn:visionflow:owl:class:autonomous-navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ImitationLearning]]",
      "resolved": "urn:visionflow:owl:class:imitation-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MachineLearning]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Manipulation]]",
      "resolved": "urn:visionflow:owl:class:manipulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ReinforcementLearning]]",
      "resolved": "urn:visionflow:owl:class:reinforcement-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrainingData]]",
      "resolved": "urn:visionflow:owl:class:training-data",
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
  - The application of machine learning algorithms and artificial intelligence techniques to enable robots to acquire new skills, adapt to changing environments, and improve performance through experience, encompassing supervised learning (imitation learning, learning from demonstration), reinforcement learning (policy optimization, reward-based training), and self-supervised learning (representation learning, world models) for perception, control, planning, and human-robot interaction.

- ### Semantic Classification
  - owl-class:: robotics:RobotLearning
  - owl-role:: TechnicalDiscipline
  - belongs-to-domain:: [[RoboticsDomain]], [[AIDomain]]

- ### Relationships
  - is-subclass-of:: [[MachineLearning]], [[ArtificialIntelligence]], [[Robotics]]
  - has-part:: [[ImitationLearning]], [[ReinforcementLearning]], [[SelfSupervisedLearning]], [[TransferLearning]]
  - requires:: [[SensorData]], [[TrainingData]], [[SimulationEnvironment]], [[ComputeResources]]
  - enables:: [[AdaptiveControl]], [[SkillAcquisition]], [[AutonomousNavigation]], [[Manipulation]]

- ### Content
  - Robot Learning represents the convergence of robotics and machine learning, enabling autonomous systems to acquire skills through data-driven methods rather than explicit programming. In 2026, robot learning has evolved from laboratory research to industrial deployment, with foundation models (RT-2, PaLM-E), sim-to-real transfer techniques, and large-scale robotic datasets (Open X-Embodiment) accelerating the path from data collection to real-world performance.
  - ### Learning Paradigms

	  #### Supervised Learning
	  - **Imitation Learning (Learning from Demonstration)**:
	    - Behavioral cloning: Direct policy learning from expert demonstrations
	    - Inverse reinforcement learning (IRL): Inferring reward functions from demonstrations
	    - Applications: Robotic assembly, surgical robotics, warehouse picking
	    - Challenge: Distribution shift when robot encounters unseen states
	    - Example: Google's RT-1 (Robotics Transformer 1) trained on 130k demonstrations

	  - **Learning from Human Feedback (RLHF for Robotics)**:
	    - Humans provide preference rankings of robot behaviors
	    - Policy optimization based on learned reward model
	    - Applications: Social robots, assistive robotics, human-robot collaboration

	  #### Reinforcement Learning (RL)
	  - **Model-Free RL**:
	    - Q-learning, Deep Q-Networks (DQN), Actor-Critic methods (A3C, SAC, PPO)
	    - Trial-and-error learning through reward signals
	    - Applications: Drone racing, robotic soccer, game-playing robots
	    - Challenge: Sample inefficiency (requires millions of interactions)

	  - **Model-Based RL**:
	    - Learns dynamics model of environment
	    - Plans using learned model (reduces sample complexity)
	    - Applications: Robotic manipulation, legged locomotion
	    - Examples: PETS (Probabilistic Ensembles with Trajectory Sampling), MBPO (Model-Based Policy Optimization)

	  - **Offline RL (Batch RL)**:
	    - Learns from pre-collected datasets (no environment interaction during training)
	    - Safety-critical applications where exploration is risky
	    - Examples: Conservative Q-Learning (CQL), Implicit Q-Learning (IQL)

	  #### Self-Supervised Learning
	  - **Representation Learning**:
	    - Learns low-dimensional features from high-dimensional sensory data (images, point clouds)
	    - Contrastive learning (SimCLR, MoCo), masked autoencoders
	    - Applications: Object recognition, scene understanding, tactile sensing

	  - **World Models**:
	    - Learns predictive model of environment dynamics
	    - Enables mental simulation for planning
	    - Examples: DreamerV3 (imagination-based RL), World Models (Ha & Schmidhuber)

	  #### Transfer Learning
	  - **Sim-to-Real Transfer**:
	    - Train in simulation (infinite data, safe exploration)
	    - Transfer to real robot (domain adaptation, domain randomization)
	    - Applications: Quadruped locomotion (ANYmal, Spot), manipulation (NVIDIA Isaac Gym)

	  - **Multi-Task Learning**:
	    - Single policy for multiple tasks (shared representations)
	    - Few-shot adaptation to new tasks
	    - Examples: MT-Opt (Google), Octo (Open X-Embodiment)
  - ### Key Techniques and Algorithms

	  #### Deep Reinforcement Learning
	  - **Proximal Policy Optimization (PPO)**: Stable, sample-efficient policy gradient method
	  - **Soft Actor-Critic (SAC)**: Maximum entropy RL for robustness
	  - **Twin Delayed DDPG (TD3)**: Continuous control with reduced overestimation

	  #### Vision-Based Learning
	  - **Visual Servoing**: Direct policy learning from camera pixels to control commands
	  - **Object-Centric Representations**: Segmenting scenes into objects for manipulation
	  - **Affordance Learning**: Predicting action possibilities from visual input

	  #### Tactile and Multi-Modal Learning
	  - **Tactile Sensing**: Learning from force/torque sensors, fingertip tactile arrays
	  - **Visuo-Tactile Fusion**: Combining vision and touch for dexterous manipulation
	  - **Audio-Visual Learning**: Using sound for contact detection, material classification

	  #### Hierarchical Learning
	  - **Options Framework**: Temporal abstraction (skills as reusable sub-policies)
	  - **Goal-Conditioned RL**: Learning to reach arbitrary goals
	  - **Skill Chaining**: Composing learned primitives into complex behaviors
  - ### Foundation Models for Robotics (2024-2026 Breakthrough)

	  #### Vision-Language-Action Models (VLAs)
	  - **RT-2 (Robotic Transformer 2)**: Google DeepMind's VLA trained on web data + robotic demonstrations
	    - Enables natural language robot control ("Pick up the blue cube")
	    - Zero-shot generalization to new objects and tasks
	    - Architecture: Vision Transformer (ViT) + PaLI language model

	  - **PaLM-E (Embodied Language Model)**: 562B parameter multimodal model
	    - Combines vision, language, and robotic state
	    - Applications: Mobile manipulation, long-horizon planning

	  - **RoboCat**: Meta-learning for robotics (DeepMind)
	    - Self-improving agent (learns from own experience)
	    - Adapts to new tasks, robots, and environments with minimal data

	  #### Large-Scale Robotic Datasets
	  - **Open X-Embodiment**: Coalition of 34 research labs, 22 robot platforms
	    - 1M+ demonstrations across 150+ tasks
	    - Enables cross-robot, cross-domain learning

	  - **RT-X Dataset**: Google's multi-robot training corpus
	    - Demonstrates positive transfer across robot morphologies

	  #### Simulation Platforms
	  - **NVIDIA Isaac Sim/Gym**: GPU-accelerated physics simulation, 10,000+ parallel environments
	  - **MuJoCo**: Contact-rich physics engine (acquired by DeepMind, now open-source)
	  - **PyBullet**: Python bindings for Bullet physics
	  - **Gazebo/Ignition**: ROS-integrated simulation

  #### Current Landscape
  #### Industry Adoption
	  - **Manufacturing**: ABB YuMi collaborative robot (learns assembly tasks from demonstration), FANUC CR series (reinforcement learning for bin picking)
	  - **Logistics**: Boston Dynamics Stretch (learned palletizing), Agility Robotics Digit (locomotion via RL)
	  - **Agriculture**: FarmWise Titan (weed recognition via supervised learning), John Deere See & Spray (adaptive spraying)
	  - **Healthcare**: Intuitive Surgical (surgeon skill modeling), Diligent Robotics Moxi (hospital navigation via RL)
	  - **Domestic Robots**: iRobot Roomba j7+ (obstacle recognition via deep learning), Dyson 360 Vis Nav (visual SLAM)

	  #### Technical Capabilities 2026
	  - **Real-world RL**: Stable learning directly on hardware (no simulation required) for low-risk tasks
	  - **Few-shot adaptation**: 10-100 demonstrations for new task acquisition (vs 1M+ in 2020)
	  - **Sim-to-real gap**: <10% performance degradation (vs 30-50% in 2020) via domain randomization, adversarial training
	  - **Edge deployment**: 1-10 TOPS sufficient for learned policies (quantized neural networks, knowledge distillation)

	  #### Standards and Frameworks
	  - **ROS 2 Learning Packages**: `ros2_control`, `moveit2`, `nav2` with learned components
	  - **Deep Learning Frameworks**: PyTorch (dominant in research), TensorFlow/JAX (Google Robotics)
	  - **RL Libraries**: Stable-Baselines3, RLlib (Ray), Tianshou, CleanRL
	  - **Emerging Standards**: IEEE P2817 (Reinforcement Learning for Robotics), ISO/TR 20218-2 (Safety of collaborative robots)

  #### Academic Context
  Robot learning emerged in the 1990s with reinforcement learning applied to pole balancing and robotic soccer. Key theoretical developments include:

	  - **Markov Decision Processes (MDPs)**: Formal framework for sequential decision-making (Bellman, 1957; Sutton & Barto, 1998)
	  - **Function approximation**: Using neural networks for value functions and policies (Tesauro's TD-Gammon, 1995)
	  - **Policy gradient methods**: REINFORCE (Williams, 1992), Natural Policy Gradient (Kakade, 2001)
	  - **Deep RL revolution**: DQN (Mnih et al., 2015), AlphaGo (Silver et al., 2016)

	  Contemporary research (2024-2026) focuses on:
	  - **Data-efficient learning**: Reducing sample complexity through model-based RL, meta-learning, offline RL
	  - **Generalization**: Cross-task, cross-domain, cross-embodiment transfer
	  - **Safety and robustness**: Constrained RL, risk-sensitive policies, robust MDPs
	  - **Human-robot collaboration**: Interactive learning, shared autonomy, preference learning

  #### UK Context
  #### North England Innovation Hubs

	  **Manchester**
	  - University of Manchester: Robotics and AI convergence research
	  - Manufacturer: Tharsus Group (integrating learned vision systems for warehouse robots)

	  **Leeds**
	  - University of Leeds IRASS: Agricultural robot learning (crop/weed classification)
	  - Leeds Institute for Data Analytics (LIDA): Data-efficient robot learning

	  **Sheffield**
	  - Sheffield Robotics: UK's largest robotics group, RL for autonomous inspection
	  - Autonomous Systems Laboratory: Learning-based control for underground robots

	  **Newcastle**
	  - Newcastle University: Assistive robotics with preference learning (elderly care robots)
	  - Research focus: Human-in-the-loop learning, safe RL

	  #### UK Commercial Sector
	  - **Ocado Technology** (Hatfield): Robotic warehouse picking via imitation learning
	  - **Wayve** (London): End-to-end learned driving (camera-to-control with transformers)
	  - **Oxbotica** (Oxford): Universal autonomy software (learned perception and planning)
	  - **CMR Surgical** (Cambridge): Surgeon skill transfer to Versius robot via demonstration learning

	  #### Regional Case Studies
	  - **Ocado Andover CFC**: 1,000+ robots coordinate via multi-agent RL for optimal routing
	  - **Rolls-Royce (Derby)**: Inspection robots learning defect detection from human experts
	  - **JCB (Staffordshire)**: Autonomous construction equipment with learned terrain navigation

  #### Future Directions
  #### Emerging Trends (2026-2030)
	  - **Foundation models ubiquity**: Pre-trained VLAs becoming standard for robot control
	  - **Continual learning**: Robots learning continuously throughout deployment (no separate training phase)
	  - **Causal reasoning**: Moving beyond correlation to understand cause-effect for robust generalization
	  - **Swarm learning**: Distributed learning across robot fleets (federated RL)
	  - **Neurosymbolic approaches**: Combining learned perception with symbolic planning

	  #### Anticipated Challenges
	  - **Safety certification**: Validating learned policies for safety-critical applications (medical, automotive)
	  - **Explainability**: Interpreting neural network decisions for human trust and regulatory compliance
	  - **Data scarcity**: Limited real-world data for niche applications (space, deep sea, hazardous environments)
	  - **Computational costs**: Training large models (PaLM-E scale) requires massive GPU clusters

	  #### Research Priorities
	  - **Sample efficiency**: Learning from minimal data (meta-learning, model-based RL, offline RL)
	  - **Sim-to-real**: Closing reality gap for complex contact-rich tasks
	  - **Compositional learning**: Combining learned skills into novel behaviors
	  - **Human-robot co-learning**: Bidirectional learning between humans and robots

  #### Research & Literature
  #### Foundational Works
	  - Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press. http://incompleteideas.net/book/the-book-2nd.html
	  - Kober, J., Bagnell, J. A., & Peters, J. (2013). "Reinforcement Learning in Robotics: A Survey." *International Journal of Robotics Research*, 32(11), 1238-1274. DOI: 10.1177/0278364913495721
	  - Levine, S., Pastor, P., Krizhevsky, A., et al. (2016). "Learning Hand-Eye Coordination for Robotic Grasping with Deep Learning and Large-Scale Data Collection." *International Journal of Robotics Research*, 37(4-5), 421-436. DOI: 10.1177/0278364917710318

	  #### Contemporary Research (2024-2026)
	  - Brohan, A., Brown, N., Carbajal, J., et al. (2023). "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control." *arXiv:2307.15818*
	  - Padalkar, A., Pooley, A., Jain, A., et al. (2023). "Open X-Embodiment: Robotic Learning Datasets and RT-X Models." *arXiv:2310.08864*
	  - Hafner, D., Pasukonis, J., Ba, J., et al. (2023). "Mastering Diverse Domains through World Models." *arXiv:2301.04104* (DreamerV3)
	  - Mees, O., Ebert, F., Dasari, S., et al. (2024). "Octo: An Open-Source Generalist Robot Policy." *arXiv:2405.12213*

	  #### UK Academic Contributions
	  - Imperial College London: Reinforcement learning for autonomous systems (Prof. Filip De Turck)
	  - University of Edinburgh: Probabilistic robotics and Bayesian learning (School of Informatics)
	  - University of Oxford: Multi-agent RL, robot learning from demonstration (Oxford Robotics Institute)
	  - University of Cambridge: Machine Learning Group (Prof. Carl Edward Rasmussen)

  #### References
  1. Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press. http://incompleteideas.net/book/the-book-2nd.html
	  2. Kober, J., Bagnell, J. A., & Peters, J. (2013). Reinforcement Learning in Robotics: A Survey. *International Journal of Robotics Research*, 32(11), 1238-1274. https://doi.org/10.1177/0278364913495721
	  3. Levine, S., Pastor, P., Krizhevsky, A., et al. (2016). Learning Hand-Eye Coordination for Robotic Grasping with Deep Learning and Large-Scale Data Collection. *International Journal of Robotics Research*, 37(4-5), 421-436. https://doi.org/10.1177/0278364917710318
	  4. Brohan, A., Brown, N., Carbajal, J., et al. (2023). RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control. *arXiv:2307.15818*. https://arxiv.org/abs/2307.15818
	  5. Padalkar, A., Pooley, A., Jain, A., et al. (2023). Open X-Embodiment: Robotic Learning Datasets and RT-X Models. *arXiv:2310.08864*. https://arxiv.org/abs/2310.08864
	  6. Hafner, D., Pasukonis, J., Ba, J., et al. (2023). Mastering Diverse Domains through World Models. *arXiv:2301.04104*. https://arxiv.org/abs/2301.04104
	  7. Mees, O., Ebert, F., Dasari, S., et al. (2024). Octo: An Open-Source Generalist Robot Policy. *arXiv:2405.12213*. https://arxiv.org/abs/2405.12213
	  8. IEEE P2817 - Standard for Framework of Reinforcement Learning for Robotics. https://standards.ieee.org/ieee/2817/10552/
	  9. ISO/TR 20218-2:2024 - Robotics — Safety design for industrial robot systems — Part 2: Collaborative robots. https://www.iso.org/standard/78954.html
	  10. Open X-Embodiment Project. https://robotics-transformer-x.github.io/

- ### Provenance
  - sources:: [[IEEE Robotics and Automation]], [[Association for the Advancement of Artificial Intelligence (AAAI)]], [[Conference on Robot Learning (CoRL)]], [[International Conference on Learning Representations (ICLR)]]
  - migration-date:: 2026-04-26T00:00:00Z
