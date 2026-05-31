- ### Definition
  - Joint configuration is the complete set of joint positions of a robot manipulator that together determine the pose of its links and end effector.

- ### Semantic Classification
  - owl-class:: robotics:JointConfiguration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Kinematics]]
  - bridges-to:: [[Manipulator]]
  - requires:: [[Forward Kinematics]]
  - enables:: [[Mobile Manipulation]]

- ### Content
  - A joint configuration is represented as a vector of joint variables, one per degree of freedom, often called the configuration space or joint space of the robot. Each point in this space maps to a specific arrangement of the links.
  - Forward kinematics computes the end effector pose from a joint configuration, while inverse kinematics solves for joint configurations that achieve a desired pose, which may have several or no solutions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z