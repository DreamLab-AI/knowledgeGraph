- ### Definition
  - ROS (Robot Operating System) is an open-source middleware framework providing communication, tooling and libraries for building robot software from reusable, distributed components.

- ### Semantic Classification
  - owl-class:: robotics:ROS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robot Operating System]]
  - bridges-to:: [[micro-ROS]]
  - requires:: [[DDS Middleware]], [[Middleware]]
  - enables:: [[Autonomous Navigation]], [[Sensor Fusion]]

- ### Content
  - ROS structures robot software as nodes that exchange messages over named topics and services, with a publish and subscribe model that decouples producers and consumers of data. It provides package management, build tooling, visualisation and a large ecosystem of reusable drivers and algorithms.
  - ROS 2 builds its communication layer on DDS to improve real-time behaviour, security and multi-robot deployment. The framework is the de facto standard middleware for robotics research and a growing share of commercial systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z