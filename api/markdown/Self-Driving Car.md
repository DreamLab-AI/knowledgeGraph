- ### OntologyBlock
  id:: self-driving-car-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0347
	- source-domain:: ai
	- preferred-term:: Self-Driving Car
	- status:: active
	- public-access:: true
	- definition:: An autonomous passenger vehicle capable of sensing its environment and operating with minimal or no human input, employing AI-driven perception, decision-making, and control systems to navigate roads, comply with traffic regulations, and transport occupants safely. Self-driving cars represent the consumer application of autonomous vehicle technology, typically targeting SAE Level 3-5 automation.
	- maturity:: mature
	- owl:class:: ai:SelfDrivingCar
	- owl:physicality:: PhysicalEntity
	- owl:role:: Agent
	- owl:inferred-class:: ai:PhysicalAgent
	- belongsToDomain:: [[RoboticsDomain]], [[AIApplicationsDomain]]
	- implementedInLayer:: [[ApplicationLayer]]
	- #### Relationships
	  id:: self-driving-car-relationships
	  collapsed:: true
		- is-subclass-of:: [[AutonomousSystem]]
		- requires:: [[Computer Vision]]
		- requires:: [[Sensor Fusion]]
		- enables:: [[Autonomous Transportation]]

## Academic Context

- Autonomous vehicle technology represents a convergence of artificial intelligence, sensor systems, and control engineering
  - Builds upon decades of driver-assistance research and real-world deployment data
  - Increasingly recognised as a multi-disciplinary challenge spanning computer vision, robotics, ethics, and policy
  - The field has matured from theoretical frameworks to commercial implementations, though full autonomy remains more gradual than initially anticipated

## Current Landscape (2025)

- **Industry adoption and implementations**
  - Major manufacturers including Tesla, Waymo, and Cruise operating in limited domains
  - SAE Level 2+ widely deployed; Level 4 in geofenced areas
  - Regulatory frameworks emerging across jurisdictions

- **UK and North England context**
  - UK Automated Vehicles Bill (2024) establishing legal framework
  - Manchester and Leeds hosting autonomous shuttle trials
  - University research programmes in Sheffield and Newcastle

## Technical Details

- **Domain Prefix**: AI
- **Sequence Number**: 0347
- **Public Access**: true

## Metadata

- **Last Updated**: 2025-12-28
- **Review Status**: Comprehensive editorial review
