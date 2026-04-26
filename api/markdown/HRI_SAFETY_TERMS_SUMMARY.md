iri:: http://narrativegoldmine.com/robotics#HRISAFETYTERMSSUMMARY
uri:: urn:visionclaw:concept:robotics:hrisafetytermssummary
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:hrisafetytermssummary
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: HRI_SAFETY_TERMS_SUMMARY
content-hash:: sha256-12-08dfa695659f
legacy-term-id:: MV-3063
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A comprehensive reference document synthesising critical terminology, standards, and best practices for [[HumanRobotInteraction|Human-Robot Interaction]] safety across [[RoboticSystems]] and physical environments. This summary aggregates [[RobotSafety]], [[OperatorProtection]], [[FailureMode]], and [[RiskMitigation]] concepts enabling safe autonomous and collaborative robotic operations.

- ### Semantic Classification
  - owl-class:: robotics:HRI_SAFETY_TERMS_SUMMARY
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - The HRI Safety Terms Summary synthesises critical terminology for human-robot interaction safety across robotic systems and physical environments.
  - ### Original Content
		- ```
  # HRI and Safety Terms Summary (RB-0381 to RB-0445)

		  ## Overview
		  Complete set of 65 Priority 5 Human-Robot Interaction and Safety terms for robotics ontology.

		  ## Status: 10/65 Complete

		  ### Completed Terms (10)

		  #### Collaborative Robot Safety (6/20)
		  - ✅ **RB-0381** - Power and Force Limiting
		  - ✅ **RB-0382** - Safety-Rated Monitored Stop
		  - ✅ **RB-0383** - Hand Guiding
		  - ✅ **RB-0384** - Speed and Separation Monitoring
		  - ✅ **RB-0385** - Collision Detection and Response
		  - ✅ **RB-0386** - Safety Zone Configuration
		  - ✅ **RB-0387** - Performance Level (PL)
		  - ✅ **RB-0388** - HRI Risk Assessment
		  - ✅ **RB-0389** - Emergency Stop Function
		  - ✅ **RB-0390** - Safeguarding Devices

		  ### Remaining Terms (55)

		  #### 1. Collaborative Robot Safety (14 remaining: RB-0391 to RB-0400)
		  - RB-0391 - Safe Torque Off (STO)
		  - RB-0392 - Workspace Monitoring
		  - RB-0393 - Joint Position Limits
		  - RB-0394 - Velocity Limiting
		  - RB-0395 - Safety Controller Architecture
		  - RB-0396 - Dual-Channel Monitoring
		  - RB-0397 - Biomechanical Limits
		  - RB-0398 - Contact Surface Design
		  - RB-0399 - Safety Validation Testing
		  - RB-0400 - Cobot Certification Process

		  #### 2. Social Robotics (15 terms: RB-0401 to RB-0415)
		  - RB-0401 - Social Presence
		  - RB-0402 - Embodied Interaction
		  - RB-0403 - Gesture Recognition
		  - RB-0404 - Gesture Generation
		  - RB-0405 - Natural Language Understanding
		  - RB-0406 - Natural Language Generation
		  - RB-0407 - Emotion Recognition
		  - RB-0408 - Affective Expression
		  - RB-0409 - Gaze Tracking
		  - RB-0410 - Proxemics Behavior
		  - RB-0411 - Turn-Taking Protocol
		  - RB-0412 - Cultural Adaptation
		  - RB-0413 - Social Navigation
		  - RB-0414 - Engagement Detection
		  - RB-0415 - Personality Modeling

		  #### 3. Human Factors (15 terms: RB-0416 to RB-0430)
		  - RB-0416 - Trust in Automation
		  - RB-0417 - Mental Workload Assessment
		  - RB-0418 - Situation Awareness
		  - RB-0419 - Mode Confusion
		  - RB-0420 - Transparency and Explainability
		  - RB-0421 - Predictability
		  - RB-0422 - Legibility of Motion
		  - RB-0423 - Cognitive Ergonomics
		  - RB-0424 - Physical Ergonomics
		  - RB-0425 - Operator Fatigue Monitoring
		  - RB-0426 - Technology Acceptance
		  - RB-0427 - Usability Evaluation
		  - RB-0428 - User Experience (UX)
		  - RB-0429 - Training and Skill Transfer
		  - RB-0430 - Human Error Prevention

		  #### 4. Assistive & Accessibility (10 terms: RB-0431 to RB-0440)
		  - RB-0431 - Mobility Assistance
		  - RB-0432 - Manipulation Assistance
		  - RB-0433 - Rehabilitation Robotics
		  - RB-0434 - Assistive Exoskeleton
		  - RB-0435 - Communication Aids
		  - RB-0436 - Adaptive Interface
		  - RB-0437 - Multimodal Interaction
		  - RB-0438 - Inclusive Design
		  - RB-0439 - Accessibility Standards
		  - RB-0440 - User Customization

		  #### 5. Ethical & Legal (5 terms: RB-0441 to RB-0445)
		  - RB-0441 - Robot Ethics Framework
		  - RB-0442 - Responsibility and Liability
		  - RB-0443 - Privacy and Data Protection
		  - RB-0444 - Autonomy and Informed Consent
		  - RB-0445 - Regulatory Compliance

  #### Standards and References
  ### Safety Standards
		  - **ISO/TS 15066:2016** - Collaborative robots
		  - **ISO 10218-1:2011** - Safety requirements for industrial robots
		  - **ISO 10218-2:2011** - Robot systems and integration
		  - **ISO 13849-1:2015** - Safety of machinery - Safety-related parts of control systems
		  - **ISO 12100:2010** - Risk assessment and risk reduction
		  - **IEC 60204-1:2016** - Electrical equipment of machines
		  - **IEC 61496:2012** - Electro-sensitive protective equipment
		  - **ISO 13850:2015** - Emergency stop function
		  - **ISO 13855:2010** - Positioning of safeguards

		  ### HRI Standards
		  - **ISO 9283:1998** - Manipulating industrial robots - Performance criteria
		  - **ISO 8373:2021** - Robotics - Vocabulary
		  - **IEEE 1873:2015** - Robot task representation
		  - **ANSI/RIA R15.06:2012** - Industrial robot and robot system safety
		  - **ISO 9241-210:2019** - Human-centered design

		  ### Assistive/Medical
		  - **ISO 13482:2014** - Safety requirements for personal care robots
		  - **FDA 21 CFR Part 860** - Medical device classification
		  - **WCAG 2.1** - Web Content Accessibility Guidelines

		  ## Directory Structure

		  ```
		  /concepts/hri/
		  ├── collaborative-safety/
		  │   ├── RB-0381_power_force_limiting.owl ✅
		  │   ├── RB-0382_monitored_stop.owl ✅
		  │   ├── RB-0383_hand_guiding.owl ✅
		  │   ├── RB-0384_speed_separation_monitoring.owl ✅
		  │   ├── RB-0385_collision_detection.owl ✅
		  │   ├── RB-0386_safety_zone.owl ✅
		  │   ├── RB-0387_performance_level.owl ✅
		  │   ├── RB-0388_risk_assessment.owl ✅
		  │   ├── RB-0389_emergency_stop.owl ✅
		  │   ├── RB-0390_safeguarding.owl ✅
		  │   └── RB-0391_to_RB-0400.owl (pending)
		  ├── social-robotics/
		  │   └── RB-0401_to_RB-0415.owl (pending)
		  ├── human-factors/
		  │   └── RB-0416_to_RB-0430.owl (pending)
		  ├── assistive-accessibility/
		  │   └── RB-0431_to_RB-0440.owl (pending)
		  └── ethical-legal/
		      └── RB-0441_to_RB-0445.owl (pending)
		  ```

		  ## Implementation Notes

		  ### Common OWL Structure
		  All terms follow this ontology pattern:
		  1. **Ontology Metadata** - Title, description, identifier, dates
		  2. **Main Class Definition** - Label, definition, scope
		  3. **Object Properties** - Relationships to other classes
		  4. **Data Properties** - Attributes and values
		  5. **Supporting Classes** - Referenced concepts
		  6. **Individuals** - Specific instances/examples
		  7. **Annotations** - SKOS vocabulary integration

		  ### Key Relationships
		  - All HRI safety terms subclass `rb:HumanRobotInteraction`
		  - Safety mechanisms subclass `rb:CollaborativeSafetyMechanism`
		  - Social robotics terms relate to `rb:SocialInteraction`
		  - Human factors connect to `rb:CognitiveModel` and `rb:ErgomonicsAnalysis`
		  - Assistive terms link to `rb:AssistiveTechnology`
		  - Ethical terms reference `rb:RobotEthics` and `rb:Compliance`

		  ### Priority Guidance
		  **ISO/TS 15066 Compliance** is mandatory for collaborative safety terms (RB-0381 to RB-0400).

		  **Biomechanical limits** must reference 29 body regions with specific force/pressure thresholds.

		  **Performance Levels** (PLa-PLe) must follow ISO 13849-1 with probability of dangerous failure per hour.

		  ## Next Steps
		  1. Complete remaining 14 collaborative safety terms (RB-0391 to RB-0400)
		  2. Create 15 social robotics terms (RB-0401 to RB-0415)
		  3. Develop 15 human factors terms (RB-0416 to RB-0430)
		  4. Build 10 assistive/accessibility terms (RB-0431 to RB-0440)
		  5. Finalize 5 ethical/legal terms (RB-0441 to RB-0445)
		  6. Generate master index and validation report

		  ---

		  **Document Status**: Work in Progress
		  **Last Updated**: 2025-10-28
		  **Completion**: 15.4% (10/65 terms)

		  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
