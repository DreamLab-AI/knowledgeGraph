- ### Definition
  - ### Primary Definition
  An inspection robot is a specialised mobile platform whose primary mission is data collection for condition monitoring rather than physical manipulation. Platforms range from wheeled crawlers for pipelines and floor-level inspections, to aerial drones for façade and power-line surveys, to climbing robots for ship hulls and storage tanks. Payloads typically include high-resolution cameras, thermal imagers, ultrasonic thickness gauges, and gas sensors.

  Autonomy levels vary widely: some robots are teleoperated via remote control, while advanced systems use SLAM (simultaneous localisation and mapping) with multi-modal sensor fusion to navigate GPS-denied environments, detect anomalies, and report findings with geospatial tags. Safety certification for inspection robots must address both the robot's own operational safety and the consequences of incomplete or erroneous inspection data.

- ### Semantic Classification
  - owl-class:: robotics:rb0018inspectionrobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Subclass of mobile robot; uses LiDAR (RB-0069), infrared sensor (RB-0078), and vision system (RB-0068) for environmental perception.
  - Related to rescue robot (RB-0017) and wheeled mobile robot (RB-0012) as sibling mobile platform types; supports risk assessment (RB-0089) workflows.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z