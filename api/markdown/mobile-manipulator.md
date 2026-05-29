- ### Definition
  A Mobile Manipulator is a robotic system that integrates a mobile base — wheeled, legged, or tracked — with one or more articulated manipulator arms, enabling it to navigate through unstructured environments and perform dexterous manipulation tasks at arbitrary locations. This combination resolves the fundamental trade-off between workspace reach and precision, making mobile manipulators suitable for logistics, inspection, surgery assistance, and domestic service applications. Effective operation requires tight coordination between navigation, motion planning, perception, and manipulation subsystems.

- ### Semantic Classification
  - owl-class:: robotics:MobileManipulator
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Hybrid Robot]]
  - hasPart:: [[Mobile Robot]], [[Manipulator Arm]], [[End Effector]]
  - requires:: [[Motion Planning]], [[Path Planning]], [[Perception System]], [[Sensor Fusion]]
  - uses:: [[SLAM]], [[Robot Control]]
  - enables:: [[Manipulation]], [[Autonomous Navigation]]
  - relatedTo:: [[Humanoid Robot]], [[Wheeled Mobile Robot]], [[Autonomous Robot]]

- ### Content

  ### Definition

  A Mobile Manipulator combines a locomotion platform with articulated manipulation capability, creating a system that is neither purely mobile (locomotion only) nor purely a fixed-base manipulator (manipulation only). The mobile base — most commonly a wheeled differential-drive or omnidirectional platform, but also legged or hybrid — provides workspace mobility, while the arm extends the robot's reach into the manipulation space. Coordinating these two subsystems introduces challenges of kinematic redundancy management, dynamic stability during arm motion, and whole-body motion planning.

  ### Relationships

  Mobile Manipulators have as parts a Mobile Robot base and a Manipulator Arm terminating in an End Effector. They require Motion Planning and Path Planning algorithms to safely navigate while carrying the arm payload, and depend on a Perception System and Sensor Fusion to build situational awareness. SLAM (Simultaneous Localisation and Mapping) enables operation in unknown or changing environments, while Robot Control provides the low-level servo loops. The system enables Manipulation tasks across a wide spatial range and Autonomous Navigation to task locations. Humanoid Robots, Wheeled Mobile Robots, and Autonomous Robots are closely related categories.

  ### Content

  Industrial applications of mobile manipulators include autonomous warehouse picking (extending fixed conveyor-based systems), nuclear decommissioning inspection, and aerospace factory floor assembly — all domains where the combination of mobility and manipulation confers unique capability. Research platforms such as the PR2 (Willow Garage), TIAGo (PAL Robotics), and Boston Dynamics Spot with arm extension have driven algorithm development in whole-body control and loco-manipulation planning.

  Key algorithmic challenges include whole-body motion planning that treats the mobile base and arm as a single kinematic chain, dynamic stability control when arm inertia creates disturbance torques on the base, and contact-rich manipulation planning that accounts for object uncertainty. Sensor fusion integrating proprioceptive state estimation (IMU, wheel encoders) with exteroceptive perception (RGB-D cameras, LiDAR) underpins both localisation and manipulation. Power and payload constraints become particularly acute in mobile platforms, making Power-Efficient AI relevant for the on-board perception and control compute.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z