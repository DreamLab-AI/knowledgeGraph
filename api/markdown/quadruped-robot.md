- ### Definition
  - Quadruped robot walks on four legs with gaits inspired by mammals like dogs or cats.

- ### Semantic Classification
  - owl-class:: robotics:QuadrupedRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Legged Robot]]

- ### Content
  Quadruped robots replicate the mechanical advantage of four-legged locomotion: broader stability polygon than bipeds while retaining agility on unstructured terrain. Hardware typically features twelve or more degrees of freedom driven by proprioceptive servo actuators with torque sensing, enabling compliant contact with the environment. Onboard computers run real-time whole-body control loops at 1 kHz and higher.

  Reinforcement learning has become the dominant approach for gait learning: simulated training in physics engines with domain randomisation produces policies that transfer to real hardware capable of dynamic gaits (trot, bound, gallop), stair climbing, and recovery from perturbations. Commercial platforms from Boston Dynamics (Spot), Unitree, and ANYbotics serve inspection, security, and logistics use cases.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z