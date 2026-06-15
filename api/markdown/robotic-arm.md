- ### Definition
  - A robotic arm is a programmable [[Manipulator]] of links and actuated joints that positions an [[End-Effector]], driven by [[Actuator]]s and coordinated through [[Inverse Kinematics]] and [[Motion Planning]].

- ### Overview
  - A robotic arm mimics the articulated structure of a human arm using a chain of rigid links joined by powered revolute or prismatic joints. The number and arrangement of these joints define its degrees of freedom and the volume it can reach.
  - At the chain's tip an end-effector, such as a gripper, welder or specialised tool, performs the actual task. Control software solves kinematics to compute joint configurations and plans collision-free trajectories to move the end-effector where it is needed.

- ### Key aspects
  - Degrees of freedom determine the range of positions and orientations the arm can achieve.
  - Forward kinematics computes the end-effector pose from joint angles; inverse kinematics solves the reverse, harder problem.
  - Actuators and servo motors apply torque at each joint under closed-loop control with position and force feedback.
  - Motion planning generates smooth, collision-free paths, while safety systems govern speed and force, especially for collaborative arms.

- ### Applications
  - Industrial assembly, welding, painting and material handling.
  - Pick-and-place and palletising in logistics and warehousing.
  - Surgical and laboratory automation requiring high precision.
  - Collaborative tasks alongside human workers in shared spaces.

- ### Relationships
  - subClassOf:: [[Manipulator]]
  - hasPart:: [[End-Effector]]
  - hasPart:: [[Actuator]]
  - hasPart:: [[Servo Motor]]
  - partOf:: [[Industrial Robot]]
  - uses:: [[Inverse Kinematics]]
  - uses:: [[Forward Kinematics]]
  - dependsOn:: [[Motion Planning]]
  - dependsOn:: [[Control System]]
  - requires:: [[Degrees of Freedom]]
  - enables:: [[Grasping]]
  - enables:: [[Pick and Place]]
  - supports:: [[Manufacturing Automation]]
  - relatedTo:: [[Collaborative Robot]]
  - relatedTo:: [[Robotics]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation