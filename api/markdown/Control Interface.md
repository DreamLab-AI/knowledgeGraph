A control interface is the defined boundary through which commands and feedback are exchanged between a controller and a controlled device such as an actuator, end-effector, or robot subsystem. It specifies the signals, protocols, data rates, and timing required for deterministic command of the hardware. A well-defined control interface is what allows higher-level planners and digital twins to actuate physical systems reliably.

### Content

- It defines signal semantics, transport protocol, update rate, and real-time guarantees, abstracting hardware so that controllers and planners can issue commands consistently. Standardised interfaces (e.g. EtherCAT, CANopen, ROS control) decouple control software from specific drives, easing integration and substitution of components.

