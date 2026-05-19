- ### Definition
  - The Robot Operating System (ROS / ROS 2) is an open-source middleware framework providing a structured communication layer, tool ecosystem, and package repository for robotic software development, enabling modular composition of perception, planning, and actuation subsystems through a publish-subscribe and service-call graph. ROS 2, built on the [[Data Distribution Service]] (DDS) transport, adds real-time guarantees, multi-platform support, and security (SROS2) absent from the original ROS 1, making it the de-facto integration substrate for both research robots and production autonomous systems, and a bridging target for [[VisionClaw Agentic Container]] agent skills interacting with physical hardware.

- ### Semantic Classification
  - owl-class:: robotics:RobotOperatingSystem
  - owl-role:: Process
  - owl-inferred:: rb:RoboticMiddleware
  - belongs-to-domain:: [[Robotics Domain]]
  - implemented-in-layer:: [[MiddlewareLayer]], [[CommunicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Robotic Middleware]], [[Publish-Subscribe Framework]]
  - has-part:: [[ROS Node]], [[ROS Topic]], [[ROS Service]], [[ROS Action]], [[ROS Package]], [[colcon Build System]], [[URDF Robot Model]]
  - is-part-of:: [[Robotic Software Stack]], [[Autonomous Systems Platform]]
  - requires:: [[Data Distribution Service]], [[Python 3]], [[CMake Build System]]
  - enables:: [[Sensor Fusion]], [[Motion Planning]], [[Autonomous Navigation]], [[Hardware Abstraction]], [[Robot Simulation]]
  - implements:: [[DDS RTPS Protocol]], [[SROS2 Security]], [[REP Standards]]
  - bridges-to:: [[Gazebo Simulator]] (domain: rb), [[WebAssembly]] (domain: ngm), [[Model Context Protocol]] (domain: ai)
  - depends-on:: [[eProsima Fast DDS]], [[CycloneDDS]], [[Python rclpy]], [[C++ rclcpp]]

- ### Content

  The Robot Operating System originated at Stanford AI Lab and Willow Garage around 2007 as a pragmatic solution to the code-duplication crisis in academic robotics: every lab was re-implementing the same wheel odometry, camera drivers, and path planners. ROS 1 introduced a peer-to-peer graph of lightweight processes ([[ROS Node]]s) exchanging typed messages on named channels ([[ROS Topic]]s), coordinated via a central parameter server called `rosmaster`. This architecture proved so productive that ROS became the dominant robotics middleware worldwide within five years.

  #### Key Characteristics

  - **Node-Based Composition**: Functionality is decomposed into independent processes (nodes) that communicate over topics, services, and actions; this isolates faults and enables language mixing (Python nodes alongside C++ nodes).
  - **Typed Interfaces**: Messages, services, and actions are defined in `.msg`, `.srv`, and `.action` files; the build system generates language-specific bindings, enforcing interface contracts across the graph.
  - **DDS Transport (ROS 2)**: ROS 2 replaces the bespoke TCPROS/UDPROS transports with the OMG DDS standard, gaining Quality of Service (QoS) profiles — reliable, best-effort, transient-local — suitable for both real-time control loops and best-effort sensor streams.
  - **Launch System**: Declarative XML or Python launch files describe multi-node topologies, parameter overrides, and remappings, enabling reproducible system bring-up.
  - **Security (SROS2)**: DDS-Security plugins provide authentication (X.509 certificates), authorisation (access control), and encryption (RTPS payload encryption) at the middleware layer.
  - **Tool Ecosystem**: `rviz2` for 3D visualisation, `rqt` for GUI tooling, `rosbag2` for recording and playback, `ros2 doctor` for diagnostics, and the `nav2` and `MoveIt 2` framework stacks for navigation and manipulation.

  #### How It Works

  A ROS 2 application begins by defining a computational graph. Each node is an instance of `rclcpp::Node` (C++) or `rclpy.Node` (Python) that declares publishers, subscriptions, service servers, and action servers at initialisation. The underlying DDS layer discovers peers automatically via multicast or a configured discovery server. When a publisher sends a message on `/scan` (e.g., a 2D laser scan), all nodes subscribed to `/scan` with a compatible QoS profile receive it within the DDS delivery guarantees. Service calls follow a synchronous request–response pattern; actions extend this with streaming feedback and cancellation, suitable for long-running tasks such as navigating to a goal.

  The [[colcon]] build system compiles packages in dependency order, producing a workspace overlay that the shell sources (`source install/setup.bash`). Packages declare dependencies in `package.xml`; the `rosdep` tool installs system dependencies. The result is a reproducible, self-contained robotics application deployable on Ubuntu, macOS, Windows, or embedded Linux targets running on ARM hardware.

  #### Current Landscape

  ROS 2 Jazzy Jalisco (released May 2024, LTS until 2029) is the current stable long-term release, with adoption spanning Clearpath Robotics, Boston Dynamics Spot SDK bridges, and industrial AMR fleets. The [[micro-ROS]] project ports ROS 2 to microcontrollers (STM32, ESP32) using POSIX-like RTOS abstractions, extending the graph to resource-constrained edge sensors. The [[ros2_control]] framework has matured into the standard hardware abstraction layer for actuator drivers. AI integration has accelerated: the `ros-perception` organisation maintains ROS wrappers for [[ONNX Runtime]], [[TensorRT]], and [[OpenCV DNN]], while `isaac_ros` (NVIDIA) provides GPU-accelerated computer vision nodes. In 2025, Anthropic's [[Model Context Protocol]] is being prototyped as a bridge: an MCP server exposes ROS 2 topics and services as tools callable by [[Large Language Model]] agents, enabling natural-language robot commanding via [[VisionClaw Agentic Container]] skills.

  #### Cross-Domain Applications

  In the [[Metaverse Domain]], ROS 2 robots are visualised and tele-operated through [[OpenXR]]-compatible interfaces, with [[WebRTC]] carrying the control stream. In the [[AI Domain]], [[LangChain]] and [[Model Context Protocol]] agents command ROS 2 actions to execute physical manipulation tasks. In the [[NGM Domain]], [[WebAssembly]] sandboxes are being explored for safe execution of third-party ROS nodes on shared infrastructure. [[Gazebo Simulator]] couples tightly with ROS 2 through the `gz_ros2_control` bridge, providing hardware-in-the-loop simulation essential for CI pipelines.

  #### Standards and References

  - Open Robotics. (2024). *ROS 2 Documentation — Jazzy Jalisco*. https://docs.ros.org/en/jazzy/
  - OMG. (2015). *Data Distribution Service (DDS) Specification v1.4*. Object Management Group.
  - Macenski, S., et al. (2022). "Robot Operating System 2: Design, Architecture, and Uses in the Wild." *Science Robotics*, 7(66).
  - Open Robotics. (2023). *SROS2: Security for ROS 2*. https://design.ros2.org/articles/ros2_dds_security.html
  - micro-ROS. (2024). *micro-ROS: ROS 2 on Microcontrollers*. https://micro.ros.org/

- ### Provenance
  - sources:: [[ROS 2 Documentation]], [[Science Robotics 2022 ROS 2 Paper]], [[OMG DDS Specification]], [[micro-ROS Project]]
  - migration-date:: 2026-04-26T00:00:00Z