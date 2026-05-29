- ### Definition
  - ### Primary Definition
  Speed and Separation Monitoring (SSM) is a collaborative robot safety function that continuously adapts robot speed in inverse proportion to the measured proximity of any human operator in the shared workspace. As the operator moves closer to the robot, the robot slows; if the minimum protective separation distance is breached the robot stops. Once separation is restored to a safe threshold, the robot resumes operation automatically. SSM is one of the four collaborative operation modes defined by ISO/TS 15066 (alongside safety-rated monitored stop, hand guiding, and power/force limiting).

  SSM requires at minimum a certified area-scanning sensor — typically a safety-rated LiDAR or camera system — capable of resolving the operator's position within the robot's protective separation distance in real time. The protective separation distance itself is calculated from the sum of the robot's stopping distance, the operator's approach speed, and a sensor reaction-time margin. Higher resolution sensors and faster control loops allow smaller minimum separation distances and therefore greater productivity in human-robot collaborative cells.

- ### Semantic Classification
  - owl-class:: robotics:rb0105speedandseparationmonitoring
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: rb 0066 robot sensor, rb 0095 safety zone
  - Enables: rb 0103 collaborative operation
  - Depends on: rb 0093 speed limitation, rb 0069 lidar
  - Related to: rb 0092 protective stop, rb 0094 power and force limiting, rb 0089 risk assessment
  - Standardised by: rb 0087 safety standard

- ### Content
  - ### Primary Definition
  **Speed and Separation Monitoring** - Speed and Separation Monitoring in robotics systems
  - ### Original Content
		- ```
  # RB-0105: Speed and Separation Monitoring

  #### Key Characteristics
  1. Core property of robotics systems
		  2. Standardised definition across implementations
		  3. Measurable and verifiable attributes
		  4. Essential for safety and performance
		  5. Industry-wide recognition and adoption

		  ## Formal Ontology (OWL Functional Syntax)


		  ## Relationships

		  ### Parent Classes
		  - `Robot`: Primary classification

  #### Future Directions
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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0105`

		  ```

  #### Standards and References
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

  #### Related Concepts
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

  #### References
  ### Metaverse Ontology Integration
		  - Virtual representation systems
		  - Digital twin integration
		  - Simulation environments

		  ### Domain Ontologies
		  - Manufacturing systems
		  - Control systems
		  - Safety systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z