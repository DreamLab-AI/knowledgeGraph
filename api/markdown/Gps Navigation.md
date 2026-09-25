GPS navigation is the use of the Global Positioning System — a satellite-based radio navigation system operated by the United States government — to determine the precise position, velocity, and time of a receiver anywhere on or near Earth. A GPS receiver calculates its location by measuring the time of arrival of signals from at least four satellites and applying trilateration. It is widely used in autonomous robots, vehicles, aircraft, and mobile devices as a primary or complementary localisation sensor.

### Overview

- GPS (Global Positioning System) was developed by the US Department of Defense and declared operational in 1995. It consists of a constellation of at least 24 satellites in medium Earth orbit, ground control stations, and user receivers. The system broadcasts precise timing signals; receivers measure the time differences to compute position through trilateration.
- For robotics, GPS provides an absolute position reference in outdoor environments but suffers from signal occlusion in urban canyons, under foliage, or indoors. Real-Time Kinematic (RTK) GPS uses a fixed base station to provide differential corrections, achieving centimetre-level accuracy suitable for precision agriculture and surveying robots. In autonomous vehicles, GPS is combined with IMUs, lidar, and cameras via sensor fusion to maintain reliable localisation when satellite signals are degraded.

### Key aspects

- **Accuracy tiers** — standalone GPS offers 3–5 m accuracy; SBAS augmentation yields sub-metre; RTK achieves centimetre level.
- **Multipath and shadowing** — reflections from buildings and tree canopy degrade accuracy in urban and forested environments.
- **Signal vulnerability** — GPS signals are weak and susceptible to jamming and spoofing, requiring anti-spoofing measures for safety-critical applications.
- **Multi-constellation** — modern receivers combine GPS (US), GLONASS (Russia), Galileo (EU), and BeiDou (China) for improved geometry and redundancy.

### Applications

- Outdoor mobile robot waypoint navigation and return-to-home functions.
- Autonomous agricultural machinery for precise row guidance and field mapping.
- UAV/drone geofencing and return-to-home safety systems.
- Vehicle fleet tracking and logistics routing.

### Mechanisms

- **Code-phase measurement** — coarse acquisition (C/A) code correlation determines pseudorange to each satellite.
- **Carrier-phase measurement** — RTK uses the carrier phase of the 1575.42 MHz L1 signal to achieve centimetre resolution after ambiguity resolution.
- **Differential correction** — SBAS (EGNOS, WAAS) or RTK base stations broadcast corrections that cancel common-mode errors.

### Provenance

