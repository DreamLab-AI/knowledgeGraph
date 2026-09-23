
A Polar Robot (also called a spherical robot) is an industrial robot configuration with a rotary base joint that provides 360-degree horizontal rotation, an elevated rotary shoulder joint that tilts the arm up and down, and a linear telescoping arm that extends and retracts radially—producing a spherical working envelope defined in spherical coordinates (radius, polar angle, azimuth). This geometry provides a large workspace volume relative to the physical footprint of the arm and was historically common in early industrial automation for tasks such as die casting and forging, though articulated arm designs have largely supplanted it in modern applications due to superior dexterity.

A Polar Robot is an industrial robot configuration with a rotary base joint, an elevated rotary shoulder joint, and a linear telescoping arm—producing a spherical working envelope defined in spherical coordinates. This geometry provides a large workspace volume relative to physical footprint and was common in early industrial automation for die casting and forging.

- ### Semantic Classification

- ### Content

  The polar robot configuration is one of the five classical industrial robot kinematic arrangements, alongside Cartesian, cylindrical, SCARA, and articulated (revolute) designs. Its three degrees of freedom—one rotational about the vertical axis, one rotational about a horizontal shoulder axis, and one linear along the arm—map directly to spherical coordinates, giving the configuration its alternative name "spherical robot."

  The resulting workspace is a hollow spherical shell: the arm sweeps a sphere when rotating at both joints, with a minimum reach defined by the shortest telescoping position and a maximum reach at full extension. A dead zone exists near the base and directly overhead. This geometry suited early automation tasks such as spot welding on car bodies, injection moulding machine tending, and material transfer operations where the large volumetric reach compensated for the limited dexterity.

  Kinematic control of a polar robot requires solving the inverse kinematics problem: given a desired tool-centre-point position in Cartesian space, compute the three joint values (base angle, shoulder angle, arm extension). For this configuration the inverse kinematics has a closed-form analytical solution, which was practically important in the era of limited computing resources. Modern articulated six-axis robots offer superior dexterity and have displaced polar designs in most new installations, but polar robots remain in service in legacy manufacturing lines.

  The polar robot's limited degrees of freedom (three, giving only position control without orientation control) mean that tool orientation must be managed by additional wrist joints or fixed tooling. This restriction is a principal reason it has been superseded by six-axis articulated robots that provide full six-DOF spatial positioning and orientation.

- ### Provenance

