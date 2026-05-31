- ### Definition
  - Sensors are devices that measure physical quantities and convert them into signals a robot or system can process, providing the perceptual input for estimation, control and decision making.

- ### Semantic Classification
  - owl-class:: robotics:Sensors
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Lidar]], [[Radar]]
  - enables:: [[Perception System]], [[Sensor Fusion]]

- ### Content
  - Sensors transduce quantities such as distance, force, temperature, orientation and light into electrical signals that downstream systems interpret. In robotics they are divided into proprioceptive sensors that measure internal state and exteroceptive sensors that observe the environment.
  - Multiple sensors are commonly combined through sensor fusion to produce estimates that are more accurate and reliable than any single source. The choice and placement of sensors strongly shapes a system's perception and control capabilities.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z