- ### OntologyBlock
  id:: sensor-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: RB-0601
	- preferred-term:: Sensor
	- source-domain:: rb
	- status:: active
	- public-access:: true
	- definition:: Sensors are devices and systems that enable robots to perceive and measure their environment through the detection of physical phenomena. In robotics, sensors include LiDAR for spatial mapping, cameras for visual perception, IMUs for motion sensing, force-torque sensors for manipulation, and encoders for position feedback.
	- owl:class:: rb:Sensor
	- belongsToDomain:: [[Robotics Systems]]
	- #### Relationships
	  id:: sensor-relationships
	  collapsed:: true
		- is-subclass-of:: [[Robotics Systems]]
		- is-parent-of:: [[LiDAR]]
		- is-parent-of:: [[Camera]]
		- is-parent-of:: [[IMU]]
		- is-parent-of:: [[Force Torque Sensor]]
		- related-to:: [[Sensor Fusion]]
