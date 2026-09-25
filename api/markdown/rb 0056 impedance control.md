Impedance control is a robot interaction-control strategy that regulates the dynamic relationship between end-effector force and motion by imposing a desired mechanical impedance (mass, damping, stiffness) on the robot's behaviour at the point of contact. Rather than commanding precise positions or forces independently, impedance control allows compliant, safe physical interaction with humans or uncertain environments by shaping the robot's apparent mechanical response. It is fundamental to collaborative robotics, enabling robots to yield to external forces in a controlled manner without requiring an explicit force setpoint.

### Semantic Classification

### Content

### Primary Definition

**Impedance Control** (RB-0056) shapes robot behaviour at contact by imposing a virtual mechanical impedance on the end effector, described by the equation: F = M_d * x_ddot + B_d * x_dot + K_d * x, where M_d, B_d, and K_d are desired inertia, damping, and stiffness matrices respectively.

Unlike pure position control (which is rigid) or pure force control (which is compliant), impedance control occupies the full position-force spectrum and is therefore the preferred strategy for tasks involving unpredictable contact, such as assembly with tight tolerances, surface finishing, or physical human-robot collaboration.

### Provenance

