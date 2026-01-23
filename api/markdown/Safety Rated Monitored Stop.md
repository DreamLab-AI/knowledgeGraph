- ### OntologyBlock
  id:: rb-0091-safety-rated-monitored-stop-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: RB-0091
	- domain-prefix:: RB
	- sequence-number:: 0091
	- filename-history:: ["rb-0091-safety-rated-monitored-stop.md"]
	- preferred-term:: Safety Rated Monitored Stop
	- source-domain:: mv
	- status:: draft
    - public-access:: true
	- definition:: ### Primary Definition
**Safety-Rated Monitored Stop** - Safety-Rated Monitored Stop in robotics systems
	- maturity:: draft
	- owl:class:: mv:rb0091safetyratedmonitoredstop
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About rb 0091 safety rated monitored stop
	- ### Primary Definition
**Safety-Rated Monitored Stop** - Safety-Rated Monitored Stop in robotics systems
	-
	- ### Original Content
	  collapsed:: true
		- ```
# RB-0091: Safety-Rated Monitored Stop
		  
		  ## Metadata
		  - **Term ID**: RB-0091
		  - **Term Type**: Core Concept
		  - **Classification**: Safety & Standards
		  - **Priority**: 1 (Foundational)
		  - **Authority Score**: 0.95
		  - **ISO Reference**: ISO 8373:2021
		  - **Version**: 1.0.0
		  - **Last Updated**: 2025-10-28
		  
		  ## Definition
		  
		  ### Primary Definition
		  **Safety-Rated Monitored Stop** - Safety-Rated Monitored Stop in robotics systems
		  
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
		  (Declaration (Class :SafetyRatedMonitoredStop))
		  (SubClassOf :SafetyRatedMonitoredStop :Robot)
		  
		  (AnnotationAssertion rdfs:label :SafetyRatedMonitoredStop "Safety-Rated Monitored Stop"@en)
		  (AnnotationAssertion rdfs:comment :SafetyRatedMonitoredStop
		    "Safety-Rated Monitored Stop - Foundational robotics concept"@en)
		  (AnnotationAssertion :termID :SafetyRatedMonitoredStop "RB-0091"^^xsd:string)
		  
		  (Declaration (ObjectProperty :relates To))
		  (ObjectPropertyDomain :relatesTo :SafetyRatedMonitoredStop)
		  
		  (Declaration (DataProperty :hasProperty))
		  (DataPropertyDomain :hasProperty :SafetyRatedMonitoredStop)
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
		  **License**: CC BY 4.0
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0091`
		  
		  ```


## Academic Context

- The concept formerly known as "safety-rated monitored stop" has evolved into the term **"monitored standstill"** in recent robotics safety standards, reflecting a more precise technical understanding of robot safety states[1][4][7].
  - This shift emphasises that safety is not an intrinsic property of the robot alone but of the entire **collaborative application**, encompassing the robot, its tools, workspace, and human operators[7].
  - Foundational standards such as ISO 10218 and IEC 61508 underpin these safety functions, specifying performance levels (e.g., PL d / SIL 2) for safety-related control systems[3][6].
- Key academic developments have focused on integrating functional safety with cybersecurity, recognising that cyber threats now form part of the overall risk landscape in robot operation[1][6].
- The academic discourse stresses the importance of rigorous risk assessments tailored to specific applications rather than relying on generic robot classifications[7].

## Current Landscape (2025)

- Industry adoption of the updated terminology and safety requirements is widespread, with ISO 10218-1:2025 and ANSI/A3 R15.06-2025 standards now in force internationally[1][2][5].
  - The **monitored standstill** function is a critical safety feature that continuously monitors robot parameters (position, speed, torque) and triggers a protective stop if thresholds are exceeded[3].
  - Collaborative applications require integrated safety functions such as emergency stops, speed and separation monitoring, and hand detection sensors to ensure operator safety[6].
- Notable organisations leading implementation include manufacturers, systems integrators, and research institutions globally, with some companies in the UK certified for advanced testing such as pressure testing for cobots[2].
- Technical capabilities have advanced to include low-latency communication protocols (e.g., EtherCAT, PROFINET) that enable rapid response to safety events, reducing injury risk in dynamic environments[3].
- Limitations remain in ensuring comprehensive cybersecurity protections and in balancing safety with operational efficiency, especially in complex, multi-robot collaborative settings[1][6].
- Standards now explicitly incorporate cybersecurity as a safety consideration, a significant update reflecting modern industrial realities[1].

## Research & Literature

- Key academic sources include:
  - Villani, V., Pini, F., Leali, F., & Secchi, C. (2018). *Survey on human–robot collaboration in industrial settings: Safety, intuitive interfaces and applications*. Robotics and Computer-Integrated Manufacturing, 55, 1-14. https://doi.org/10.1016/j.rcim.2018.02.003
  - ISO 10218-1:2025. *Robots and robotic devices — Safety requirements for industrial robots — Part 1: Robots*. International Organization for Standardization.
  - ANSI/A3 R15.06-2025. *American National Standard for Industrial Robots and Robot Systems – Safety Requirements*. Association for Advancing Automation.
- Ongoing research focuses on:
  - Enhancing real-time monitoring algorithms for safety functions.
  - Integrating AI-driven predictive safety analytics.
  - Developing robust cybersecurity frameworks tailored to collaborative robot systems.
  - Evaluating human factors in collaborative applications to optimise safety and productivity.

## UK Context

- The UK has been proactive in adopting the latest international standards, with several industrial automation firms and research centres in **Manchester, Leeds, Newcastle, and Sheffield** contributing to safety innovations in collaborative robotics.
  - For example, the Advanced Manufacturing Research Centre (AMRC) in Sheffield actively develops and tests safety-rated monitoring systems in collaborative robot applications.
  - Universities such as the University of Manchester and Newcastle University conduct applied research on human-robot interaction safety and cybersecurity in industrial contexts.
- British certification bodies provide testing and validation services aligned with ISO 10218-1:2025, supporting UK manufacturers in compliance and innovation[2].
- Regional innovation hubs in North England foster collaboration between academia and industry, promoting safe and efficient deployment of cobots in manufacturing and logistics.

## Future Directions

- Emerging trends include:
  - Further refinement of **monitored standstill** functions with AI-enhanced predictive capabilities to pre-emptively mitigate risks.
  - Expansion of cybersecurity measures integrated into safety systems, addressing increasingly networked and IoT-enabled robot environments.
  - Development of adaptive safety zones using dynamic sensor arrays and machine learning to tailor safety responses in real time.
- Anticipated challenges:
  - Balancing stringent safety requirements with operational flexibility and productivity.
  - Ensuring interoperability of safety systems across diverse robot platforms and applications.
  - Addressing workforce training and acceptance in increasingly automated, collaborative workplaces.
- Research priorities:
  - Holistic system-level safety validation methods.
  - Human factors engineering to optimise collaborative workflows.
  - Cyber-physical security frameworks specific to industrial robotics.

## References

1. ANSI. (2025). *ANSI/A3 R15.06-2025 American National Standard for Industrial Robots and Robot Systems – Safety Requirements*. Association for Advancing Automation.  
2. Promation. (2025). *The new robot standard: what does this mean for cobots?* Promation.  
3. Standard Bots. (2025). *Collaborative robot safety standards you must know*. Standard Bots.  
4. Automate.org. (2025). *Updated ISO 10218 | Answers to Frequently Asked Questions (FAQs)*.  
5. The Robot Report. (2025). *Updated ANSI/A3 standards address industrial robot safety*.  
6. Smart Robotics. (2025). *How to Achieve Safe Human Cobot Collaboration in 2025*.  
7. Six Degrees of Robotics. (2025). *It's Not the Robot, It's the Application: A New Era in Standards*.  
8. Villani, V., Pini, F., Leali, F., & Secchi, C. (2018). Survey on human–robot collaboration in industrial settings: Safety, intuitive interfaces and applications. *Robotics and Computer-Integrated Manufacturing*, 55, 1-14. https://doi.org/10.1016/j.rcim.2018.02.003


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


