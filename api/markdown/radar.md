- ### Definition
  - Radar is a sensing technology that transmits radio waves and measures their reflections to determine the range, velocity and angle of objects, used in robotics and autonomous systems for reliable perception.

- ### Semantic Classification
  - owl-class:: robotics:Radar
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sensor]]
  - bridges-to:: [[Lidar]], [[Sensors]]
  - requires:: [[Signal Processing]]
  - enables:: [[Perception System]], [[Sensor Fusion]]

- ### Content
  - Radar measures the time of flight and Doppler shift of reflected radio waves to estimate the distance and relative velocity of targets, and antenna arrays allow angular resolution. It performs reliably in poor visibility conditions such as fog, rain and darkness where optical sensors degrade.
  - In autonomous vehicles and robots, radar is frequently fused with lidar and cameras to combine its velocity sensitivity and weather robustness with the higher spatial resolution of other modalities. Signal processing extracts detections and tracks from raw returns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z