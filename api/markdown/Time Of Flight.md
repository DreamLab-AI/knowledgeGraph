
Time of Flight (ToF) is a sensing technique that determines the distance to an object by measuring the elapsed time between the emission of a signal — typically light, sound, or radio waves — and the detection of its reflection. In depth sensing, ToF cameras emit pulsed or modulated infrared light and record the per-pixel round-trip delay to construct a dense depth map. ToF sensors are widely deployed in robotics, autonomous vehicles, augmented reality, and gesture recognition due to their ability to produce real-time depth data without ambient light dependency.

- ### Overview
  - ToF depth cameras achieve frame-rate depth sensing (typically 30–60 fps) without requiring structured patterns or stereo baseline, making them compact and suitable for mobile devices.
  - Interference from multipath reflections and sunlight saturation are key limitations, particularly outdoors.
  - [[LiDAR]] systems are a high-fidelity variant of ToF operating over longer ranges with rotating or solid-state emitter arrays.

- ### Key Aspects
  - **Direct ToF (dToF)**: Measures round-trip time of a single pulse; used in LiDAR.
  - **Indirect ToF (iToF)**: Modulates a continuous wave and measures phase shift; used in depth cameras (e.g., Intel RealSense, Microsoft Azure Kinect).
  - **Resolution**: Typically lower spatial resolution than RGB cameras but provides per-pixel depth.
  - **Range**: Consumer devices cover 0.1–5 m; automotive LiDAR reaches 200+ m.

- ### Mechanisms
  - For iToF, the sensor emits a sinusoidally modulated IR signal; the phase difference between emitted and received signals encodes distance.
  - For dToF, a picosecond laser pulse is emitted and a SPAD (single-photon avalanche diode) array times the photon return.
  - [[Signal Processing]] algorithms remove multipath artefacts and apply temperature compensation.

- ### Applications
  - Face ID and face unlock on smartphones using structured ToF arrays.
  - Obstacle avoidance in warehouse [[Robotics]] and drone navigation.
  - Hand tracking for [[Augmented Reality]] headsets.
  - [[3D Reconstruction]] of environments for [[SLAM]]-based mapping.

- ### Provenance

