- ### Definition
  A linear actuation mechanism that converts rotary motor motion into controlled axial displacement by driving a threaded nut along a precision helical screw shaft. High mechanical advantage, self-locking (load holding without power), and positional repeatability make it widely used in CNC machines, 3D printers, robotic joints, and medical devices.

- ### Relationships
  Lead Screw Actuator **uses** Stepper Motor or Servo Motor as its rotational power source and Torque as the driving quantity converted to linear force. It **has part** Mechanical Component (screw and nut assembly) and is itself a specialised Actuator. It **enables** Torque Control applications and is a common component in Industrial Robot axes. It is **related to** Robotics Control and Robotics Systems. It **contrasts with** PID Controller (which is a control algorithm rather than a physical actuation device).

- ### Content

  The lead screw actuator consists of two principal components: the threaded screw (which rotates) and the nut (which translates). The relationship between rotational input and linear output is governed by the lead — the axial distance the nut travels per full revolution of the screw. A stepper or servo motor drives the screw; the nut is constrained against rotation, converting the helical motion into pure axial displacement.

  The self-locking property is a critical operational characteristic: when the helix angle of the screw thread is less than the arctangent of the coefficient of friction, the screw cannot be back-driven by axial load. This means the actuator holds position when unpowered — valuable in vertical axes (lifting applications) and safety-critical deployments where power failure must not cause collapse.

  Compared with ballscrew actuators (which use recirculating balls to reduce friction), lead screws sacrifice efficiency (typically 25–50% vs 90% for ballscrews) for lower cost, greater compactness, and the self-locking benefit. ACME and trapezoidal thread profiles are standard; precision ground thread forms reduce backlash for positioning applications.

  In robotics, lead screw actuators appear in Cartesian gantry robots, delta printer effectors, surgical positioning stages, and haptic feedback devices. Their predictable, quasi-static mechanics make them amenable to open-loop stepper motor control, though closed-loop configurations with encoders are used where precision demands require feedback.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z