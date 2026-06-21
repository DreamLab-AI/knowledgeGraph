- ### Definition
  - Radar (Radio Detection and Ranging) is an active sensing technology that emits radio-frequency electromagnetic pulses and detects reflected returns to measure range, velocity, and bearing of objects. In robotics, radar sensors operate reliably in fog, rain, dust, and darkness where cameras and LiDAR performance degrades significantly. Modern FMCW (frequency-modulated continuous-wave) radar modules used in robotics can simultaneously measure range and Doppler velocity at high update rates, enabling both static obstacle detection and dynamic object tracking.

- ### Semantic Classification
  - owl-class:: robotics:rb0080radar
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[rb 0066 robot sensor]]
  - related-to:: [[rb 0069 lidar]], [[rb 0075 range finder]], [[Sensor Fusion]]
  - enables:: [[rb 0052 collision avoidance]], [[Proximity Detection]], [[Object Detection]]
  - contrasts-with:: [[rb 0077 depth camera]]

- ### Content
  - Radar complements LiDAR and depth cameras in robot perception stacks through sensor fusion, compensating for their weaknesses in adverse environmental conditions. Unlike LiDAR which produces dense point clouds, radar returns are sparser but provide direct velocity measurement via Doppler effect, making it valuable for detecting and tracking moving humans or vehicles in safety-critical collaborative robot environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z