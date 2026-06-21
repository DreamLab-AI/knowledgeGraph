- ### Definition
  - Dexterity is a measure of a manipulator's ability to achieve a wide variety of end-effector poses — both positions and orientations — at or near a given point in space, without encountering singular configurations that lock out certain directions of motion. It is formally quantified through the Jacobian matrix: metrics such as the manipulability ellipsoid, condition number, and minimum singular value all express how isotropically the robot can move in task space. High dexterity is particularly important for fine manipulation tasks where the approach direction may be tightly constrained by the geometry of the object or the surrounding environment.
  - Dexterity is closely coupled with the workspace volume of a robot: a large workspace does not guarantee dexterity at every interior point, since near-singular configurations reduce the effective reachable velocity in certain directions. Redundant manipulators (more than 6 degrees of freedom) can use the extra joints to reconfigure and maintain high dexterity across a wider region.

- ### Semantic Classification
  - owl-class:: robotics:Dexterity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to manipulability (rb 0032), workspace (rb 0024), and degrees of freedom (rb 0023); computed via the Jacobian matrix (rb 0030) and inverse kinematics (rb 0029).

- ### Content
  - **Dexterity** - Ability to achieve arbitrary end-effector poses

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z