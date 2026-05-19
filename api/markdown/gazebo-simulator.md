- ### Definition
  - Gazebo Simulator (now branded Gz Sim following the Open Robotics / Intrinsic rebranding) is an open-source, physics-accurate 3D robotics simulator providing rigid-body dynamics (via ODE, Bullet, DART, or Simbody), sensor simulation (cameras, LiDAR, IMU, GPS), and a plugin architecture for custom actuators and environments, enabling hardware-in-the-loop (HIL) development, [[Robot Operating System]] integration testing, and reinforcement learning training environments without requiring physical hardware, making it the de facto simulation substrate for [[Robot Operating System]] development pipelines and a key component in sim-to-real transfer workflows.

- ### Semantic Classification
  - owl-class:: robotics:GazeboSimulator
  - owl-role:: Object
  - owl-inferred:: rb:RoboticsSimulationEnvironment
  - belongs-to-domain:: [[Robotics Domain]]
  - implemented-in-layer:: [[SimulationLayer]], [[InfrastructureLayer]]

- ### Relationships
  - is-subclass-of:: [[Physics Simulator]], [[Robotics Development Tool]]
  - has-part:: [[Gz Physics Plugin]], [[Gz Sensors]], [[Gz Rendering]], [[Gz Transport]], [[SDF World Model]], [[Gazebo Plugin API]]
  - is-part-of:: [[Robot Operating System]] development pipeline, [[Sim-to-Real Transfer Workflow]]
  - requires:: [[Physics Engine]], [[3D Rendering Engine]], [[SDF Robot Description]], [[URDF Robot Model]]
  - enables:: [[Hardware-in-the-Loop Testing]], [[Reinforcement Learning Training]], [[Sensor Simulation]], [[Multi-Robot Simulation]]
  - implements:: [[SDFormat Specification]], [[gz-transport Message Protocol]], [[ros2_control Hardware Interface]]
  - bridges-to:: [[Robot Operating System]] (domain: rb), [[OpenXR]] (domain: mv), [[AutoML]] (domain: ai), [[WebAssembly]] (domain: ngm)
  - depends-on:: [[OGRE3D Rendering Engine]], [[Ignition Fuel Model Database]], [[colcon Build System]]

- ### Content

  Gazebo was originally developed by Andrew Howard and Nate Koenig at the University of Southern California in 2002–2004, becoming the primary simulation environment for the DARPA Urban Challenge. Open Robotics (formerly Willow Garage) took stewardship of the project as it grew alongside [[Robot Operating System]], and the two became deeply coupled: `gazebo_ros_pkgs` provided bidirectional bridge plugins that mapped Gazebo sensors and actuators onto ROS topics. In 2022, Open Robotics released a completely rewritten simulator under the "Ignition Gazebo" name (subsequently renamed to "Gz Sim" following Intrinsic's acquisition of Open Robotics in 2022), featuring a modular component architecture, a new `gz-transport` middleware (based on ZeroMQ and Protobuf), and a cleaner plugin API.

  #### Key Characteristics

  - **Physics Plugin Architecture**: Gz Sim supports multiple physics engines through an abstract physics plugin interface: ODE (default, mature), Bullet (collision-optimised), DART (articulated body dynamics), and Simbody (biomechanics-grade). Swapping physics engines allows benchmarking simulation accuracy versus computational cost.
  - **Sensor Simulation**: The `gz-sensors` library provides camera (RGB, depth, thermal), LiDAR (ray casting), IMU, altimeter, GPS, contact, and force-torque sensors. Sensors publish on `gz-transport` topics; the ROS 2 bridge republishes them as ROS messages, making them indistinguishable from real hardware to a ROS node.
  - **SDFormat (SDF)**: The Simulation Description Format is an XML schema for describing robot and world models, including joint dynamics, visual meshes, collision geometries, sensor parameters, and material properties. SDF is richer than URDF (which ROS 1 popularised) and supports nested model hierarchies.
  - **Gz Transport**: The inter-process communication layer uses ZeroMQ for transport and Protobuf for serialisation. Publishers and subscribers discover peers via a distributed discovery mechanism without a central broker, aligning with the decentralised architecture philosophy of ROS 2.
  - **Cloud Simulation**: The Ignition Fuel web service provides a curated library of robot and world models downloadable directly into simulations via URI, dramatically reducing bootstrapping time for common robot platforms (TurtleBot 4, Spot, UR5).

  #### How It Works

  A simulation begins with an SDF world file defining the environment geometry, gravity, and included models. Gz Sim parses this file, instantiates the physics engine and rendering pipeline, and starts the simulation loop. Each iteration, the physics engine advances the world state by one timestep (typically 1 ms), applying forces from actuator plugins, resolving contacts, and computing joint accelerations. Sensor plugins sample the resulting world state and publish simulated measurements on `gz-transport` topics.

  The `ros_gz_bridge` node subscribes to `gz-transport` topics (e.g., `/camera/image`) and republishes them as ROS 2 messages (`sensor_msgs/Image`) on corresponding ROS topics. ROS nodes — SLAM algorithms, navigation stacks, perception pipelines — receive these simulated sensor messages and produce actuator commands (joint velocity, wheel torque) that flow back through the bridge to Gazebo, closing the control loop. From the ROS node's perspective, the simulation is indistinguishable from a real robot.

  #### Current Landscape

  Gz Sim Ionic (released 2024) is the current LTS release, paired with [[Robot Operating System|ROS 2 Jazzy]]. The ecosystem has expanded to include GPU-accelerated rendering via Vulkan for photorealistic sensor simulation (important for training vision models), and Isaac Sim (NVIDIA) has emerged as a competing simulator with better GPU physics (PhysX) and tight integration with Isaac ROS. The Open-X Embodiment dataset (Google, 2023), comprising robot trajectories from multiple labs and simulators, has spurred interest in Gazebo as a data generation platform for robot learning. In the [[AI Domain]], Gz Sim is used with [[AutoML]] and reinforcement learning frameworks (Gymnasium, Stable-Baselines3) to train locomotion and manipulation policies, which are then transferred to physical robots — the sim-to-real gap being the primary research challenge. Integration with [[Model Context Protocol]] allows LLM agents to query simulation state and issue motion commands during agent-in-the-loop experiments.

  #### Cross-Domain Applications

  In the [[Metaverse Domain]], Gz Sim physics engines are coupled with [[OpenXR]] visualisation interfaces, allowing users to inspect and manipulate simulated robots in VR before committing to physical deployment. In the [[NGM Domain]], [[WebAssembly]] is being explored for packaging custom Gz plugins for safe distribution and sandboxed execution. In the [[AI Domain]], simulation datasets generated in Gz Sim are used to train [[AutoML]] object detection models that are subsequently deployed on physical [[Robot Operating System]] nodes.

  #### Standards and References

  - Koenig, N., & Howard, A. (2004). "Design and Use Paradigms for Gazebo, an Open-Source Multi-Robot Simulator." *IEEE/RSJ IROS 2004*.
  - Open Robotics. (2024). *Gz Sim Documentation — Ionic Release*. https://gazebosim.org/docs/ionic/
  - SDFormat Specification. (2024). *SDFormat Version 1.10*. https://sdformat.org/spec
  - Todorov, E., et al. (2012). "MuJoCo: A Physics Engine for Model-Based Control." *IEEE/RSJ IROS 2012* (comparative reference).
  - Ignition Fuel. (2024). *Fuel Model Database*. https://app.gazebosim.org/

- ### Provenance
  - sources:: [[Gz Sim Documentation]], [[SDFormat Specification]], [[IROS 2004 Gazebo Paper]], [[Ignition Fuel Model Database]]
  - migration-date:: 2026-04-26T00:00:00Z