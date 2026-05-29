- ### Definition
  - Variable impedance control modulates robot impedance parameters online based on task requirements.

- ### Semantic Classification
  - owl-class:: robotics:VariableImpedanceControl
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  Variable Impedance Control requires **Sensor** feedback and **Torque** actuation, and depends on **Force Control** as its measurement substrate. It enables safe **Human Robot Interaction**, **Safety** guarantees during contact, and dexterous operation of **Collaborative Robot** platforms. The strategy uses **Adaptive Control** and **Model Predictive Control** formulations to schedule impedance, and increasingly employs **Reinforcement Learning** to learn impedance policies from data. Related domains include **Control Theory** (the mathematical foundation), **Motion Planning** (trajectory generation subject to impedance constraints), **Lower Limb Exoskeleton** (a primary application domain), and **Embodied AI** (embodied agents requiring compliant physical interaction).

- ### Definition
  Variable Impedance Control is a robot control strategy that modulates stiffness, damping, and inertia parameters online during task execution, adapting mechanical impedance in response to sensed interaction forces, task phase, or environmental uncertainty. Compared to fixed-impedance strategies, it achieves safer contacts, greater dexterity in uncertain environments, and more natural human-robot collaboration.

- ### Content
  Classical impedance control, introduced by Hogan (1985), establishes a desired dynamic relationship between end-effector force and displacement, effectively configuring the robot as a programmable mass-spring-damper. Fixed impedance parameters work well for specific tasks but fail when contact conditions change—a rigid trajectory in free space must become compliant on contact, yet regain stiffness for precision assembly. Variable Impedance Control (VIC) addresses this by treating the stiffness K, damping B, and inertia M as time-varying quantities updated online.

  Learning-based VIC approaches train impedance policies from human demonstrations or reinforcement signals. Imitation-learning methods extract impedance schedules from electromyography (EMG) patterns in human muscles, which exhibit precisely this variable-stiffness behaviour during skilled manipulation. Deep reinforcement learning policies can learn to modulate stiffness in simulation and transfer to real hardware via domain randomisation, optimising trade-offs between task completion speed and interaction safety encoded in reward functions.

  Model predictive VIC formulations optimise a receding-horizon cost that penalises both tracking error and contact force magnitude, computing updated impedance parameters at each control cycle from a contact model and disturbance estimates. This enables predictive compliance: the controller softens impedance before anticipated contact events and stiffens before precision placement phases, behaviours that rigid-trajectory controllers cannot achieve.

  Applications span surgical robotics (minimising tissue trauma while maintaining instrument precision), industrial assembly (compliant peg-in-hole and snap-fit insertion), lower-limb exoskeleton gait rehabilitation (adapting assistance level to patient effort), and social robots (ensuring safe, comfortable physical interaction with humans). Standardisation under ISO 10218 and ISO/TS 15066 (collaborative robot safety) increasingly references compliance and force-limiting behaviours, making VIC a compliance-relevant control paradigm.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z