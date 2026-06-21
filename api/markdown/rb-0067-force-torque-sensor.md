- ### Definition
  - A force-torque (FT) sensor is a wrist-mounted transducer that measures all six mechanical load components — three forces and three torques — in real time. These measurements close the loop for force-controlled manipulation, allowing a robot to regulate contact force rather than merely position. FT sensors are essential for compliant assembly, polishing, insertion tasks, and for meeting the power-and-force limiting safety requirements of ISO/TS 15066 in collaborative robot deployments.
  - Common technologies include strain-gauge bridges, piezoelectric elements, and optical transducers. The sensor output feeds directly into impedance and admittance controllers, enabling the robot to behave as a controllable mechanical impedance at the point of contact.

- ### Semantic Classification
  - owl-class:: robotics:rb0067forcetorquesensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - enables:: rb 0053 force control, rb 0056 impedance control, rb 0057 admittance control
  - relatedTo:: rb 0070 tactile sensing, rb 0094 power and force limiting, Haptic Feedback
  - supports:: Cobot Safety Levels, rb 0066 robot sensor

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z