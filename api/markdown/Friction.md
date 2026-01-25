- ### OntologyBlock
  id:: rb-0042-friction-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: RB-0042
	- preferred-term:: Friction
	- source-domain:: rb
	- status:: draft
	- definition:: **Friction** - Resistance to relative motion between surfaces
	- maturity:: draft
	- owl:class:: rb:Friction
	- is-subclass-of:: [[Robotics]]
	- owl:role:: Concept
	- belongsToDomain:: [[RoboticsDomain]]
	- is-subclass-of:: [[rb-0022-robot-dynamics]]

- ## About rb 0042 friction
	-
	-
	- ### Original Content
	  collapsed:: true
		- ```
# RB-0042: Friction
		
		  ## Metadata
		  - **Term ID**: RB-0042
		  - **Term Type**: Core Concept
		  - **Classification**: Fundamental Concepts
		  - **Priority**: 1 (Foundational)
		  - **Authority Score**: 0.95
		  - **ISO Reference**: ISO 8373:2021
		  - **Version**: 1.0.0
		  - **Last Updated**: 2025-10-28
		
		  ## Definition
		
		  ### Standards Context
		  Defined according to ISO 8373:2021 and related international robotics standards.
		
		  ### Key Characteristics
		  1. Core property of robotics systems
		  2. Standardised definition across implementations
		  3. Measurable and verifiable attributes
		  4. Essential for safety and performance
		  5. Industry-wide recognition and adoption
		
		  ## Formal Ontology (OWL Functional Syntax)
		
		  ```clojure
		  (Declaration (Class :Friction))
		  (SubClassOf :Friction :Robot)
		
		  (AnnotationAssertion rdfs:label :Friction "Friction"@en)
		  (AnnotationAssertion rdfs:comment :Friction
		    "Friction - Foundational robotics concept"@en)
		  (AnnotationAssertion :termID :Friction "RB-0042"^^xsd:string)
		
		  (Declaration (ObjectProperty :relates To))
		  (ObjectPropertyDomain :relatesTo :Friction)
		
		  (Declaration (DataProperty :hasProperty))
		  (DataPropertyDomain :hasProperty :Friction)
		  (DataPropertyRange :hasProperty xsd:string)
		  ```
		
		  ## Relationships
		
		  ### Parent Classes
		  - `Robot`: Primary classification
		
		  ### Related Concepts
		  - Related robotics concepts and systems
		  - Cross-references to other ontology terms
		  - Integration with metaverse ontology
		
		  ## Use Cases
		
		  ### Industrial Applications
		  1. Manufacturing automation
		  2. Quality control systems
		  3. Process optimization
		
		  ### Service Applications
		  1. Healthcare robotics
		  2. Logistics and warehousing
		  3. Consumer robotics
		
		  ### Research Applications
		  1. Academic research platforms
		  2. Algorithm development
		  3. System integration studies
		
		  ## Standards References
		
		  ### Primary Standards
		  1. **ISO 8373:2021**: Primary reference standard
		  2. **ISO 8373:2021**: Robotics vocabulary
		  3. **Related IEEE standards**: Implementation guidelines
		
		  ## Validation Criteria
		
		  ### Conformance Requirements
		  1. ✓ Meets ISO 8373:2021 requirements
		  2. ✓ Documented implementation
		  3. ✓ Verifiable performance metrics
		  4. ✓ Safety compliance demonstrated
		  5. ✓ Industry best practices followed
		
		  ## Implementation Notes
		
		  ### Design Considerations
		  - System integration requirements
		  - Performance specifications
		  - Safety considerations
		  - Maintenance procedures
		
		  ### Common Patterns
		  ```yaml
		  implementation:
		    standards_compliance: true
		    verification_method: standardised_testing
		    documentation_level: comprehensive
		  ```
		
		  ## Cross-References
		
		  ### Metaverse Ontology Integration
		  - Virtual representation systems
		  - Digital twin integration
		  - Simulation environments
		
		  ### Domain Ontologies
		  - Manufacturing systems
		  - Control systems
		  - Safety systems
		
		  ## Future Directions
		
		  ### Emerging Trends
		  1. AI and machine learning integration
		  2. Advanced sensing capabilities
		  3. Improved safety systems
		  4. Enhanced human-robot collaboration
		  5. Standardisation advancements
		
		  ---
		
		  **Version History**
		  - 1.0.0 (2025-10-28): Initial foundational definition
		
		  **Contributors**: Robotics Ontology Working Group
		  **Licence**: CC BY 4.0
		  **Namespace**: `https://narrativegoldmine.com/robotics/RB-0042`
		
		  ```

	- ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

	- ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

	- ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

- #### Technical problem definition
	- Problems are
		- evergreen telecollaboration around technical issues
		- exchange of good, services, money within systems, without friction
		- identity management within virtual spaces
		- access to information in the extrinsic world from within the tool
		- federation of instances without overhead (scaling)
		- seamless access to personal information within and without the collaborative system
		- ability to take advantage of supporting smart support agents (bots, etc) throughout
		- governance, trust, safeguarding

- #### Technical problem definition
	- Problems are
		- evergreen telecollaboration around technical issues
		- exchange of good, services, money within systems, without friction
		- identity management within virtual spaces
		- access to information in the extrinsic world from within the tool
		- federation of instances without overhead (scaling)
		- seamless access to personal information within and without the collaborative system
		- ability to take advantage of supporting smart support agents (bots, etc) throughout
		- governance, trust, safeguarding


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

