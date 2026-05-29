- ### Definition
  A Polar Robot is an industrial robot configuration with a rotary base joint, an elevated rotary shoulder joint, and a linear telescoping arm—producing a spherical working envelope defined in spherical coordinates. This geometry provides a large workspace volume relative to physical footprint and was common in early industrial automation for die casting and forging.

- ### Semantic Classification
  - owl-class:: robotics:PolarRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  A Polar Robot **has parts** including Robot Joints (the rotary base, shoulder, and linear extension joints) and Robot Actuators that drive those joints. It **uses** Robot Kinematics (specifically spherical coordinate forward and inverse kinematics) to compute workspace positions. It is **related to** Cylindrical Robot (shares the rotary base and linear extension but lacks the shoulder joint), SCARA Robot (an alternative for planar tasks), Delta Robot (parallel-link alternative for high-speed pick-and-place), and Robot Hardware as the physical substrate. It **contrasts with** Collaborative Robot designs that emphasise human-safe operation over raw reach. It is **part of** the broader Robotics discipline and **depends on** Robot Component subsystems for its mechanical realisation.

- ### Content

  The polar robot configuration is one of the five classical industrial robot kinematic arrangements, alongside Cartesian, cylindrical, SCARA, and articulated (revolute) designs. Its three degrees of freedom—one rotational about the vertical axis, one rotational about a horizontal shoulder axis, and one linear along the arm—map directly to spherical coordinates, giving the configuration its alternative name "spherical robot."

  The resulting workspace is a hollow spherical shell: the arm sweeps a sphere when rotating at both joints, with a minimum reach defined by the shortest telescoping position and a maximum reach at full extension. A dead zone exists near the base and directly overhead. This geometry suited early automation tasks such as spot welding on car bodies, injection moulding machine tending, and material transfer operations where the large volumetric reach compensated for the limited dexterity.

  Kinematic control of a polar robot requires solving the inverse kinematics problem: given a desired tool-centre-point position in Cartesian space, compute the three joint values (base angle, shoulder angle, arm extension). For this configuration the inverse kinematics has a closed-form analytical solution, which was practically important in the era of limited computing resources. Modern articulated six-axis robots offer superior dexterity and have displaced polar designs in most new installations, but polar robots remain in service in legacy manufacturing lines.

  The polar robot's limited degrees of freedom (three, giving only position control without orientation control) mean that tool orientation must be managed by additional wrist joints or fixed tooling. This restriction is a principal reason it has been superseded by six-axis articulated robots that provide full six-DOF spatial positioning and orientation.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z