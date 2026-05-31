- ### Definition
  - micro-ROS is a framework that brings the ROS 2 programming model and communication to resource-constrained microcontrollers, allowing embedded devices to participate as first-class nodes in a ROS graph.

- ### Semantic Classification
  - owl-class:: robotics:microROS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robot Operating System]]
  - bridges-to:: [[ROS]], [[DDS Middleware]]
  - requires:: [[Embedded Systems]], [[Real-Time Operating System]]
  - enables:: [[Real-Time Control]]

- ### Content
  - micro-ROS adapts the ROS 2 client libraries and a lightweight middleware to run on microcontrollers with limited memory and compute, typically over a real-time operating system. An agent on a more capable host bridges the microcontroller to the wider ROS 2 network.
  - This lets low-level controllers handling sensing and actuation expose ROS topics and services directly, integrating tightly timed embedded behaviour with higher-level robot software. It extends the ROS ecosystem down to the deeply embedded layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z