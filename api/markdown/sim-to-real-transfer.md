- ### Definition
  - Sim-to-real transfer encompasses the techniques and strategies for training robotic policies, perception models, and control algorithms in simulation environments and subsequently deploying them on physical hardware with acceptable performance degradation. The core challenge is the reality gap: discrepancies between simulated and real-world physics, sensor noise characteristics, contact dynamics, and visual appearance cause policies optimised in simulation to fail when deployed. Mitigation strategies include domain randomisation, domain adaptation, system identification, and the use of high-fidelity physics engines to narrow the gap before transfer.

- ### Semantic Classification
  - owl-class:: sim-to-real-transfer:Sim-to-Real Transfer
  - owl-role:: Concept

- ### Relationships
  - uses [[Simulation]]
  - uses [[Reinforcement Learning]]
  - uses [[Physics Simulation]]
  - enables [[Robot Learning]]
  - enables [[Legged Locomotion]]
  - relatedTo [[Synthetic Data]]

- ### Content
  Sim-to-real transfer is motivated by the prohibitive cost, slowness, and risk of training robotic policies entirely on physical hardware through trial-and-error reinforcement learning. Simulation environments such as MuJoCo, Isaac Gym, and Gazebo allow millions of training steps to be executed in parallel and accelerated, generating the data volume required for modern deep RL algorithms. The challenge is ensuring the resulting policies transfer to the physical world.

  Domain randomisation is the most widely adopted transfer technique: simulator parameters (friction coefficients, link masses, motor gains, sensor noise levels, lighting, and texture) are uniformly randomised across a range during training, forcing the learned policy to be robust to parameter variation. If the real world lies within the randomised distribution, the trained policy generalises without requiring explicit real-world calibration. System identification provides the complementary approach of precisely modelling real hardware parameters and embedding them in the simulator.

  Recent work on sim-to-real for legged locomotion has demonstrated impressive real-world performance: reinforcement-learning-trained locomotion controllers for quadrupeds and bipeds — trained entirely in simulation — transfer successfully to physical robots after domain randomisation of terrain properties and actuator dynamics. Perception-based transfer (where vision policies must bridge the visual gap between rendered and real imagery) additionally employs domain adaptation techniques such as domain adversarial training and photorealistic rendering with ray-traced lighting. The sim-to-real paradigm is closely related to the broader concept of synthetic data generation: both exploit controlled generation environments to cheaply produce training signal that would be expensive or dangerous to collect physically.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z