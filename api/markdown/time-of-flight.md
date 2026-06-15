- ### Definition
  - [[Time Of Flight]] (ToF) is a depth-sensing technique that determines distance by measuring how long a signal takes to travel from emitter to target and back.
  - In imaging applications, a ToF camera emits modulated [[Infrared Sensing]] light and computes a per-pixel [[Depth Map]] from phase shift or pulse delay.
  - ToF sensors feed into [[Sensor Fusion]] pipelines alongside cameras and IMUs for [[Autonomous Navigation]] and [[Augmented Reality]].

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

- ### Relationships
  - uses:: [[Infrared Sensing]]
  - uses:: [[LiDAR]]
  - dependsOn:: [[Sensor Fusion]]
  - dependsOn:: [[Signal Processing]]
  - enables:: [[Depth Sensing]]
  - enables:: [[3D Reconstruction]]
  - enables:: [[Obstacle Detection]]
  - supports:: [[Autonomous Navigation]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Gesture Recognition]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Spatial Computing]]
  - relatedTo:: [[SLAM]]
  - contrastsWith:: [[Stereo Vision]]
  - hasPart:: [[Depth Map]]

- ### Provenance
  - updated:: 2026-06-15