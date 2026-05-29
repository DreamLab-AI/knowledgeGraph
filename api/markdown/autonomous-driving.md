- ### Definition
  - Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of other agents, plan a safe trajectory, and execute actuator commands — all without direct human intervention. The system architecture typically decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (motion modelling of surrounding agents), planning (route, behaviour, and motion planning), and control (longitudinal and lateral actuation). SAE International's J3016 taxonomy defines six automation levels from Level 0 (no automation) to Level 5 (full automation), providing the dominant industry reference framework.

- ### Semantic Classification
  - owl-class:: autonomous-driving:Autonomous Driving
  - owl-role:: Concept

- ### Relationships
  - requires [[Computer Vision]]
  - requires [[Sensor Fusion]]
  - requires [[Lidar]]
  - uses [[Path Planning]]
  - uses [[Object Detection]]
  - relatedTo [[Autonomous Vehicle]]

- ### Content
  - Autonomous driving systems integrate a diverse sensor suite — typically including monocular and stereo cameras, 3D Lidar scanners, millimetre-wave radar, and ultrasonic sensors — whose outputs are fused to build a real-time model of the vehicle's surroundings. Computer Vision techniques including Object Detection and Tracking, semantic segmentation, and optical flow extract structured representations from raw sensor data. Sensor Fusion algorithms combine these modalities, compensating for the limitations of each (e.g., camera sensitivity to lighting, Lidar sparsity at range, radar angular resolution).
  - Localisation and mapping are achieved through a combination of GNSS, HD map matching, and SLAM (Simultaneous Localisation and Mapping). Prediction modules model the likely future trajectories of pedestrians, cyclists, and vehicles using probabilistic motion models or learned neural approaches. Path Planning then generates a drivable trajectory satisfying kinematic constraints, speed limits, traffic rules, and passenger comfort criteria, often decomposed into a route planner (graph search over road network) and a local motion planner (optimisation over a short planning horizon).
  - The control layer translates planned trajectories into throttle, brake, and steering commands via a Controller, often implemented as a PID Controller or Model Predictive Controller. Safety assurance in autonomous driving invokes formal verification, simulation-based testing, and extensive real-world validation mileage. Regulatory frameworks vary by jurisdiction; key standards bodies include SAE International, ISO (TC22/SC32), and the UN ECE Working Party 29.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z