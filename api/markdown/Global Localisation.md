
Global localisation is the problem of estimating a robot's pose within a known map without any prior knowledge of its starting position, often called the kidnapped-robot problem. Unlike pose tracking, it must resolve ambiguity across the entire map, typically by maintaining and refining multiple pose hypotheses from sensor observations. It is fundamental to robot navigation, autonomous vehicles, and recovery from localisation failures.

- ### Content
  - Particle filters (Monte Carlo localisation) represent the pose distribution with weighted samples that converge as sensor data accumulates, while scan-matching and place-recognition methods generate candidate poses. The approach must handle perceptual aliasing, where different locations look similar, by retaining multimodal beliefs until disambiguating evidence arrives. It is essential at start-up and for recovering after a robot is moved or loses tracking.

