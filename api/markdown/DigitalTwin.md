- ### OntologyBlock
  id:: digitaltwin-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0986
	- source-domain:: mv
	- preferred-term:: Digital Twin
	- status:: draft
	- public-access:: true
	- definition:: A virtual representation that serves as the real-time digital counterpart of a physical object or process, maintaining bidirectional data synchronization.
	- source:: [[ISO 23247]], [[ETSI]]
	- maturity:: mature
	- owl:class:: mv:DigitalTwin
	- owl:physicality:: HybridEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:HybridObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InfrastructureDomain]], [[DisruptiveTechDomain]]
	- implementedInLayer:: [[PlatformLayer]]
	- #### Relationships
	  id:: digitaltwin-relationships
	  collapsed:: true
		- is-subclass-of:: [[Metaverse Infrastructure]]
		- has-part:: [[Synchronization Module]]
		- has-part:: [[Data Model]]
		- requires:: [[Data Pipeline]]
		- requires:: [[IoT Sensors]]
		- enables:: [[Predictive Maintenance]]
		- enables:: [[Remote Monitoring]]
		- depends-on:: [[Real-time Data Stream]]
		- binds-to:: [[Virtual Model]]
		- binds-to:: [[Physical Object]]
