- ### OntologyBlock
  id:: latency-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-1062
	- preferred-term:: Latency
	- status:: draft
	- public-access:: true
	- definition:: Virtual performance metric representing the time delay between a user action and corresponding system response within networked immersive environments.
	- source:: [[ETSI ARF 010]]
	- maturity:: mature
	- owl:class:: mv:Latency
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InfrastructureDomain]]
	- implementedInLayer:: [[Physical Layer]], [[Network Layer]]
	- #### Relationships
	  id:: latency-relationships
	  collapsed:: true
		- is-subclass-of:: [[Metaverse Infrastructure]]
		- is-part-of:: [[Network Performance Metrics]]
		- is-part-of:: [[Quality of Service]]
		- requires:: [[Monitoring System]]
		- requires:: [[Timestamp Synchronization]]
		- requires:: [[Measurement Tools]]
		- enables:: [[Performance Optimization]]
		- enables:: [[User Experience Tuning]]
		- enables:: [[Quality Assessment]]
		- enables:: [[SLA Monitoring]]
		- depends-on:: [[Bandwidth]]
		- depends-on:: [[Routing Protocol]]
		- depends-on:: [[Propagation Delay]]
		- depends-on:: [[Network Infrastructure]]
		- depends-on:: [[Processing Delay]]
		- is-dependency-of:: [[Presence]]
