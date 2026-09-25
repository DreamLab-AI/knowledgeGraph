In robotics, velocity refers to the time-derivative of position, encompassing both linear velocity (metres per second) at the end-effector or a body-frame point, and angular velocity (radians per second) describing rotational rate. Velocity is the central quantity in differential kinematics: the Jacobian matrix maps joint-space velocity vectors to Cartesian task-space velocities. Velocity limits are safety-critical parameters in collaborative robot standards (ISO/TS 15066) where end-effector speed directly determines permissible human contact force.

### Semantic Classification

### Content

- Velocity is the central quantity of differential kinematics. The Jacobian matrix J(q) provides the instantaneous mapping v = J(q)q̇, relating joint-space velocities q̇ to Cartesian end-effector velocities v = [ṗ; ω] (linear and angular). Near singular configurations, J becomes rank-deficient and small joint velocities can correspond to arbitrarily large task-space velocities — a key concern in trajectory planning.

  In collaborative robot safety, end-effector velocity is the primary regulated parameter. The speed-and-separation monitoring (SSM) mode — originally specified in ISO/TS 15066:2016 and now incorporated into ISO 10218-2:2025 — enforces that robot speed is dynamically reduced as a human approaches, with the permissible speed scaled inversely with proximity. Speed limitation (RB-0093) codifies the maximum allowable thresholds for power-and-force-limited (PFL) collaborative operation, making velocity a safety-critical measurand in addition to a kinematic quantity.

### Provenance

