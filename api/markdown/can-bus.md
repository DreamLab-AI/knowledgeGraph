- ### Definition
  - CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.

- ### Semantic Classification
  - owl-class:: robotics:CANBus
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[micro-ROS]], [[Power Electronics]]
  - requires:: [[Embedded Systems]]
  - enables:: [[Real-Time Control]], [[Motor Driver]]

- ### Content
  - CAN Bus uses a message-based, priority-arbitrated protocol on a differential pair, giving deterministic access and strong noise immunity suited to electrically harsh environments. Nodes broadcast identified frames and any device can receive messages relevant to it without point-to-point wiring.
  - Originally developed for automotive networks, CAN is widely adopted in industrial machinery, robotics and motor control because of its reliability and low cabling overhead. It connects controllers, sensors and actuators within distributed embedded systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z