
A Robot Controller is the computational subsystem that governs a robot's behaviour by reading sensor data, computing control commands and driving actuators to achieve desired motion or tasks. It runs control loops in real time, coordinating kinematics, trajectory execution and safety logic while interfacing with higher-level planning software. Controllers range from embedded microcontrollers on a single joint to industrial cabinets coordinating an entire articulated arm.

- ### Overview
  - The robot controller closes the loop between perception and action. At its core, fast inner loops regulate joint position, velocity or torque using feedback controllers such as PID, while outer loops execute planned trajectories and enforce safety limits. Controllers schedule deterministic real-time tasks, communicate over fieldbuses to motor drivers, and expose interfaces to motion-planning and robot middleware such as ROS.
- ### Mechanisms
  - **Real-time control loops** — deterministic cycles regulate joint position, velocity and torque.
  - **Feedback control** — PID and model-based schemes correct error from sensor measurements.
  - **Trajectory execution** — interpolating planned paths into smooth joint commands.
  - **Actuator interfacing** — commanding motor drivers and servo amplifiers.
  - **Safety and limits** — enforcing joint limits, collision stops and emergency handling.
- ### Applications
  - Industrial articulated arms and pick-and-place cells.
  - Mobile robot navigation and drive control.
  - Collaborative robots with force and compliance control.
  - Research platforms running ROS-based control stacks.
- ### Provenance

