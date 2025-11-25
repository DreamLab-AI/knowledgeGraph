- ### OntologyBlock
  id:: etsi-domain-datamgmt-ai-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0345
	- preferred-term:: ETSI Domain: Data Management + AI
	- status:: draft
	- public-access:: true
	- definition:: Crossover domain for ETSI metaverse categorization addressing data infrastructure supporting AI/ML workflows, training data management, model versioning, and inference serving.
	- source:: [[ETSI GR MEC 032]]
	- maturity:: mature
	- owl:class:: mv:ETSIDomain_DataMgmt_AI
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InfrastructureDomain]]
	- implementedInLayer:: [[ApplicationLayer]]
	- #### Relationships
	  id:: etsi-domain-datamgmt-ai-relationships
	  collapsed:: true
		- is-subclass-of:: [[ArtificialIntelligence]]
		- is-part-of:: [[ETSI Metaverse Domain Taxonomy]]
		- has-part:: [[Training Data Repository]]
		- has-part:: [[Model Registry]]
		- has-part:: [[Experiment Tracking]]
		- has-part:: [[Feature Store]]
		- requires:: [[AI & Machine Learning]]
		- requires:: [[Data Management]]
		- enables:: [[Data Versioning]]
		- enables:: [[Model Deployment]]
		- enables:: [[ML Operations]]
		- depends-on:: [[MLOps Infrastructure]]
		- depends-on:: [[Data Pipelines]]
