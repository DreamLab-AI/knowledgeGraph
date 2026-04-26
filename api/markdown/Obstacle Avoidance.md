iri:: http://narrativegoldmine.com/robotics#ObstacleAvoidance
uri:: urn:visionclaw:concept:robotics:obstacle-avoidance
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:obstacle-avoidance
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: Obstacle Avoidance
content-hash:: sha256-12-3642ff80d57c
legacy-term-id:: RB-1019
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 0.96
version:: 2.0.0
created:: 2025-11-24T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - The capability of a mobile robot or autonomous system to detect and avoid collisions with obstacles in its environment in real-time using sensors and reactive control strategies. It enables safe navigation without requiring complete prior knowledge of the environment.

- ### Semantic Classification
  - owl-class:: robotics:ObstacleAvoidance
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Autonomous Navigation]], [[Safety Systems]]

- ### Relationships
  - is-subclass-of:: [[Reactive Control]]
  - requires:: [[Real-Time Processing]]
  - enables:: [[Safe Navigation]], [[Collision-Free Motion]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Reactive Control]]
  - requires:: [[Proximity Sensors]]
  - requires:: [[Real-Time Processing]]
  - detects:: [[Obstacles]]
  - generates:: [[Avoidance Maneuver]]
  - characterized-by:: [[Real-Time]], [[Reactivity]]

  - #### Relationships
  - is-subclass-of:: [[Reactive Control]]
  - complements:: [[RB-1016-path-planning]]
  - uses:: [[LIDAR]], [[Ultrasonic Sensor]], [[Camera]], [[Radar]]
  - enables:: [[Safe Navigation]], [[Collision-Free Motion]]
  - skos:related:: [[RB-1007-trajectory-generation]], [[RB-1013-localization]]
  - applied-in:: [[Autonomous Vehicles]], [[Mobile Robots]], [[Drones]]

  - **Approaches**
  - **Reactive Methods** (sensor-based, local)
  - **Deliberative Methods** (planning-based, global)
  - **Hybrid Methods** (combine both)

  - **Reactive Obstacle Avoidance Methods**
  1. **Potential Field Method**
     - Attractive force toward goal
     - Repulsive force from obstacles
     - Combines forces to generate motion
     - Issues: Local minima, oscillations
  2. **Vector Field Histogram (VFH)**
     - Builds polar histogram from sensor data
     - Selects best direction based on clearance
     - Good for cluttered environments
  3. **Dynamic Window Approach (DWA)**
     - Samples velocity space
     - Evaluates trajectories for collision
     - Selects best trajectory (speed, heading)
     - Considers robot dynamics
  4. **Velocity Obstacles (VO)**
     - Geometric approach
     - Predicts collision based on velocities
     - Avoids velocity that leads to collision
  5. **Bubble Band Technique**
     - Maintains safe bubble around robot
     - Adjusts based on obstacles
  6. **Curvature Velocity Method**
     - Considers robot kinematics
     - Generates feasible curved paths

  - **Sensor Types for Obstacle Detection**
  - **LIDAR/Laser Scanner**:
    - High accuracy, 2D/3D point clouds
    - Long range, high update rate
  - **Ultrasonic Sensors**:
    - Low cost, short range
    - Wide beam, prone to noise
  - **Cameras (Vision)**:
    - Rich information, color/texture
    - Requires image processing
    - Stereo or RGB-D for depth
  - **Radar**:
    - All-weather operation
    - Medium range, Doppler velocity
  - **Infrared Sensors**:
    - Low cost, short range
    - Simple but limited

  - **Potential Field Method Details**
  - **Attractive Potential**: U_att = ½ k_att ||q - q_goal||²
  - **Repulsive Potential**: U_rep = ½ k_rep (1/d - 1/d₀)² if d < d₀
  - **Total Force**: F = -∇U = F_att + F_rep
  - **Advantages**:
    - Simple, elegant
    - Real-time capable
    - Smooth motion
  - **Challenges**:
    - Local minima (trapped)
    - Oscillations in narrow passages
    - Goal non-reachable obstacle nearby (GNRON)

  - **Dynamic Window Approach (DWA) Details**
  - Search space: (v, ω) velocity and angular velocity
  - Dynamic window: Feasible (v, ω) given current state
  - Objective function: G(v, ω) = α·heading + β·dist + γ·velocity
    - heading: alignment to goal
    - dist: distance to obstacle
    - velocity: forward progress
  - Select (v, ω) maximizing G

  - **Velocity Obstacles (VO) Concept**
  - For two moving objects: robot and obstacle
  - VO: set of robot velocities leading to collision
  - Avoidance: choose velocity outside VO
  - Extensions: ORCA (Optimal Reciprocal Collision Avoidance)

  - **Multi-Sensor Fusion**
  - Combine complementary sensors
  - Improve robustness and reliability
  - Common: LIDAR + Camera + Ultrasonic
  - Sensor fusion algorithms: Kalman Filter, Bayesian methods

  - **Challenges**
  - **Dynamic Obstacles**: Moving people, vehicles
  - **Uncertain Sensors**: Noise, occlusions
  - **Real-Time Constraints**: Fast response needed
  - **Narrow Passages**: Limited clearance
  - **Crowded Environments**: Many obstacles
  - **Non-Holonomic Constraints**: Car-like robots
  - **Unexpected Obstacles**: Unknown environment

  - **Applications**
  - **Autonomous Vehicles**:
    - Pedestrian detection and avoidance
    - Vehicle-to-vehicle collision avoidance
  - **Mobile Robots**:
    - Warehouse AGVs
    - Cleaning robots (Roomba)
    - Delivery robots
  - **Drones/UAVs**:
    - Aerial obstacle avoidance
    - Forest/indoor navigation
  - **Humanoid Robots**:
    - Walking in human environments
  - **Underwater/Aerial**:
    - ROVs, submersibles, aircraft

  - **Integration with Path Planning**
  - Global path from [[RB-1016-path-planning]]
  - Local obstacle avoidance for unexpected obstacles
  - Hybrid architecture: plan globally, react locally

  - **Safety Considerations**
  - Fail-safe mechanisms (emergency stop)
  - Redundant sensors
  - Conservative clearance margins
  - Predictive models for moving obstacles
  - Compliance with safety standards (e.g., [[RB-1011-cobot-safety-levels]])

  - **Performance Metrics**
  - Collision-free rate
  - Path smoothness
  - Computational efficiency
  - Reaction time
  - Clearance from obstacles
  - Success rate in complex environments

  - **Advanced Topics**
  - Learning-Based Avoidance (Deep RL, CNN)
  - Predictive Avoidance (anticipate obstacle motion)
  - Social Navigation (human-aware avoidance)
  - Multi-Robot Collision Avoidance
  - 3D Obstacle Avoidance (aerial vehicles)

  - **Quality Metrics**
  - authority-score:: 0.96
  - completeness:: 0.93
  - accuracy:: 0.95

- ### Provenance
  - sources:: [[Mobile Robotics]], [[Reactive Control]]
  - migration-date:: 2026-04-26T00:00:00Z
