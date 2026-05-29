- ### Definition
  - Series Elastic Actuation (SEA) is a robotic actuation paradigm in which a calibrated compliant element—typically a torsional or linear spring—is interposed between the gearbox output and the robot link. Deflection of the spring under load provides an indirect force measurement, enabling closed-loop torque control without strain-gauge complexity. The compliance also attenuates shock loads, reduces reflected inertia at the joint, and passively limits peak interaction forces, which is critical for safe operation in human-robot collaborative environments. SEA is widely employed in legged robots, prosthetic limbs, and rehabilitation exoskeletons where stable force regulation and back-driveability are essential.

- ### Semantic Classification
  - owl-class:: series-elastic-actuation:Series Elastic Actuation
  - owl-role:: Concept

- ### Relationships
  - enables [[Force Control]]
  - enables [[Impedance Control]]
  - uses [[Actuator]]
  - uses [[Robot Joint]]
  - supports [[Human-Robot Interaction]]

- ### Content
  - In a Series Elastic Actuator, the spring element acts simultaneously as a torque sensor (spring deflection × spring constant = torque) and as a passive mechanical safety limiter. By measuring deflection via rotary or linear encoders, a PID or impedance controller can regulate output torque with high fidelity, even in the presence of gearbox friction and compliance. This separates the force control problem from the inherent stiffness of traditional rigid actuators.
  - SEA contrasts with variable stiffness actuators (VSA) which can dynamically adjust their compliance, and with hydraulic actuators which achieve high force density but introduce fluid management complexity. The spring stiffness in SEA is a design trade-off: softer springs improve force sensitivity and shock absorption but reduce the bandwidth of the torque control loop, limiting responsiveness for fast dynamic tasks.
  - Applications of SEA span bipedal and quadrupedal legged locomotion systems, upper-limb rehabilitation robots, lower-limb exoskeletons for gait assistance, and compliant industrial collaborative robots (cobots). Safety standards for human-robot collaboration—such as ISO TS 15066—cite compliant actuation as one mechanism for achieving power and force limiting to protect human co-workers from injury during unexpected contact events.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z