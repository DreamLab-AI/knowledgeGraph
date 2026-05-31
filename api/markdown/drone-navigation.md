- ### Definition
  - Drone navigation is the set of methods by which unmanned aerial vehicles determine position, plan routes and control flight to reach objectives.

- ### Semantic Classification
  - owl-class:: robotics:DroneNavigation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Mobile Robotics]]
  - bridges-to:: [[SLAM]]
  - requires:: [[Inertial Measurement Unit]], [[Path Planning]]
  - enables:: [[Mapping]]

- ### Content
  - Drone navigation combines positioning, mapping and motion control to guide unmanned aerial vehicles. It draws on satellite positioning, inertial measurement and onboard sensors to estimate state and avoid obstacles.
  - In environments without reliable satellite signals, drones rely on visual and inertial methods, including simultaneous localisation and mapping. Path planning algorithms generate routes that respect obstacles and mission constraints.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle]], [[https://ardupilot.org/]]
  - migration-date:: 2026-05-29T00:00:00Z