- ### Definition
  - ROS 2 (Robot Operating System 2) is an open-source robotics middleware framework developed by Open Robotics that provides a standardised publish-subscribe communication layer built on the DDS (Data Distribution Service) standard, along with a comprehensive ecosystem of drivers, libraries, and tools for sensor integration, motion planning, simulation, and hardware abstraction. ROS 2 supersedes ROS 1 with support for real-time execution, multi-robot systems, production-grade security via DDS-Security, and native Windows and macOS compatibility. It has become the de facto standard software framework for research and increasingly for commercial robotic platforms.

- ### Semantic Classification
  - owl-class:: ros-2:ROS 2
  - owl-role:: Concept

- ### Relationships
  - uses [[Communication Protocol]]
  - uses [[Robot Operating System]]
  - enables [[Motion Planning]]
  - enables [[Robot Control]]
  - enables [[Sensor Fusion]]
  - relatedTo [[Real Time]]
  - relatedTo [[Simulation Software]]

- ### Content
  - ROS 2 is structured around the concept of nodes—self-contained processes that publish and subscribe to typed message topics, provide and call services, and expose action servers for long-running tasks. The underlying transport is DDS (most commonly Eclipse Cyclone DDS or eProsima Fast DDS), which provides configurable Quality of Service (QoS) policies including reliability, durability, and deadline settings essential for real-time robotic applications.
  - The ROS 2 ecosystem includes Navigation 2 (Nav2) for autonomous mobile robot navigation, MoveIt 2 for manipulator motion planning, ros2_control for hardware-abstracted joint control, and Gazebo or Ignition simulators for physics-accurate robot simulation. The colcon build tool and the ROS package manager rosdep standardise dependency management across the ecosystem. URDF and SDF robot description formats are used to define kinematic and dynamic properties of robot models consumed by simulation, motion planning, and visualisation tools such as RViz 2.
  - ROS 2's adoption in production environments is driven by its support for AUTOSAR-compliant real-time executors (via the rclcpp Executor API), DDS-Security for encrypted, authenticated inter-node communication, and its compatibility with safety-certified operating systems such as QNX. The ROS 2 Iron Irwini and Jazzy Jalisco LTS distributions support extended maintenance periods appropriate for product deployment cycles.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z