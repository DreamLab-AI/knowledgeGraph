- ### OntologyBlock
  id:: haptics-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0153
	- source-domain:: mv
	- preferred-term:: Haptics
	- status:: draft
	- public-access:: true
	- definition:: Physical hardware systems that simulate tactile sensations and force feedback within virtual environments through actuators and sensors.
	- source:: [[ISO 9241-960]]
	- maturity:: mature
	- owl:class:: mv:Haptics
	- owl:physicality:: PhysicalEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:PhysicalObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]], [[DisruptiveTechDomain]]
	- implementedInLayer:: [[PhysicalLayer]]
	- #### Relationships
	  id:: haptics-relationships
	  collapsed:: true
		- is-subclass-of:: [[Metaverse Infrastructure]]
		- is-part-of:: [[Human Interface Device]]
		- has-part:: [[Tactile Actuators]]
		- has-part:: [[Vibration Motors]]
		- has-part:: [[Piezoelectric Sensors]]
		- has-part:: [[Force Feedback Actuators]]
		- requires:: [[Signal Processing Unit]]
		- requires:: [[Power Supply]]
		- requires:: [[Driver Software]]
		- enables:: [[Physical Presence]]
		- enables:: [[Force Feedback]]
		- enables:: [[Tactile Feedback]]
		- enables:: [[Texture Simulation]]
		- depends-on:: [[Real-time Processing]]
		- depends-on:: [[Low Latency Communication]]
