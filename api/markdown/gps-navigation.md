- ### Definition
  - [[Gps Navigation]] uses signals from the [[Satellite Communication]] constellation of GPS satellites to compute position via [[Trilateration]] with sub-metre to centimetre accuracy when augmented.
  - A [[Gnss Receiver]] measures signal time-of-flight from at least four satellites; [[Kalman Filter]] algorithms smooth position estimates and blend with [[Inertial Navigation]] data.
  - Widely used in [[Autonomous Vehicle]] systems, mobile robotics, and surveying, often combined with [[Sensor Fusion]] to maintain accuracy in [[Dead Reckoning]] fallback scenarios.

- ### Overview
  - GPS (Global Positioning System) was developed by the US Department of Defense and declared operational in 1995. It consists of a constellation of at least 24 satellites in medium Earth orbit, ground control stations, and user receivers. The system broadcasts precise timing signals; receivers measure the time differences to compute position through trilateration.
  - For robotics, GPS provides an absolute position reference in outdoor environments but suffers from signal occlusion in urban canyons, under foliage, or indoors. Real-Time Kinematic (RTK) GPS uses a fixed base station to provide differential corrections, achieving centimetre-level accuracy suitable for precision agriculture and surveying robots. In autonomous vehicles, GPS is combined with IMUs, lidar, and cameras via sensor fusion to maintain reliable localisation when satellite signals are degraded.

- ### Key aspects
  - **Accuracy tiers** — standalone GPS offers 3–5 m accuracy; SBAS augmentation yields sub-metre; RTK achieves centimetre level.
  - **Multipath and shadowing** — reflections from buildings and tree canopy degrade accuracy in urban and forested environments.
  - **Signal vulnerability** — GPS signals are weak and susceptible to jamming and spoofing, requiring anti-spoofing measures for safety-critical applications.
  - **Multi-constellation** — modern receivers combine GPS (US), GLONASS (Russia), Galileo (EU), and BeiDou (China) for improved geometry and redundancy.

- ### Applications
  - Outdoor mobile robot waypoint navigation and return-to-home functions.
  - Autonomous agricultural machinery for precise row guidance and field mapping.
  - UAV/drone geofencing and return-to-home safety systems.
  - Vehicle fleet tracking and logistics routing.

- ### Mechanisms
  - **Code-phase measurement** — coarse acquisition (C/A) code correlation determines pseudorange to each satellite.
  - **Carrier-phase measurement** — RTK uses the carrier phase of the 1575.42 MHz L1 signal to achieve centimetre resolution after ambiguity resolution.
  - **Differential correction** — SBAS (EGNOS, WAAS) or RTK base stations broadcast corrections that cancel common-mode errors.

- ### Relationships
  - contrastsWith:: [[Inertial Navigation]]
  - contrastsWith:: [[Visual Odometry]]
  - contrastsWith:: [[Lidar Slam]]
  - requires:: [[Satellite Communication]]
  - requires:: [[Atomic Clock]]
  - requires:: [[Spectrum Allocation]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Drone Navigation]]
  - enables:: [[Geofencing]]
  - uses:: [[Trilateration]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Sensor Fusion]]
  - hasPart:: [[Gnss Receiver]]
  - hasPart:: [[Satellite Signal]]
  - supports:: [[Robot Localisation]]
  - supports:: [[Fleet Management]]
  - relatedTo:: [[Gnss]]
  - relatedTo:: [[Dead Reckoning]]
  - relatedTo:: [[Real-Time Kinematic]]

- ### Provenance
  - updated:: 2026-06-15