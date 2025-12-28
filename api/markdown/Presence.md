- ### OntologyBlock
  id:: presence-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0256
	- source-domain:: mv
	- preferred-term:: Presence
	- status:: draft
	- public-access:: true
	- definition:: Perceptual state in which a user feels located inside a virtual or mixed environment, experiencing spatial, social, and self presence.
	- source:: [[ACM]]
	- maturity:: mature
	- owl:class:: mv:Presence
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InteractionDomain]], [[DisruptiveTechDomain]]
	- implementedInLayer:: [[ComputeLayer]]
	- #### Relationships
	  id:: presence-relationships
	  collapsed:: true
		- is-subclass-of:: [[Extended Reality (XR)]]
		- is-part-of:: [[Immersive Experience]]
		- has-part:: [[Social Presence]]
		- has-part:: [[Self Presence]]
		- has-part:: [[Spatial Presence]]
		- requires:: [[Visual Display]]
		- requires:: [[Sensory Feedback]]
		- requires:: [[Haptic Device]]
		- enables:: [[Social Connection]]
		- enables:: [[Embodiment]]
		- enables:: [[Engagement]]
	  collapsed:: true
	  - #### Inverse Relationships (Inferred by Reasoner)
	    - Experience Layer enables Presence
	    - Extended Reality (XR) enables Presence
	    - Immersion enables Presence
	    - Human Interface Layer (HIL) enables Presence
		- depends-on:: [[Frame Rate]]
		- depends-on:: [[Latency]]
		- depends-on:: [[Field of View]]
