- ### Definition
  - ### Primary Definition
  A robot sensor is any transducer or measurement device that provides a robot system with information about its own internal state or the state of the external environment. Proprioceptive sensors (encoders, IMUs, force/torque sensors) measure the robot's own configuration and dynamics; exteroceptive sensors (vision systems, LiDAR, radar, proximity sensors, depth cameras) measure the surrounding environment. Together they feed the perception pipeline that underpins safe autonomous behaviour, closed-loop control, and human-robot interaction.

  The performance of a robot sensor — characterised by accuracy, resolution, range, update rate, and environmental robustness — directly constrains what safety and control functions can be implemented. Safety-rated sensors must meet additional requirements around fault detection, dual-channel redundancy, and certified response times, as mandated when used within protective safety functions such as speed and separation monitoring.

- ### Semantic Classification
  - owl-class:: robotics:rb0066robotsensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Has part: rb 0067 force torque sensor, rb 0068 vision system, rb 0069 lidar, rb 0072 encoder, rb 0073 imu
  - Enables: rb 0052 collision avoidance, rb 0105 speed and separation monitoring
  - Related to: Sensor Fusion

- ### Content
  - ### Primary Definition
  **Robot Sensor** - Robot Sensor in robotics systems
  - ### Original Content
		- ```
  # RB-0066: Robot Sensor

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0066`

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