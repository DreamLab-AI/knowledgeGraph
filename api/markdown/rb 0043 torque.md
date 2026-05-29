public:: true

# rb 0043 torque
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c143f841399443a2a22e66b4d6ee30d938a716182265f01cf64c15ea1685a6f7",
  "@type": "Page",
  "vc:slug": "rb-0043-torque",
  "title": "rb 0043 torque",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0043"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0043 torque"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rb-0043-torque",
  "@type": "Class",
  "label": "rb 0043 torque",
  "definition": "Torque is the rotational force applied about a joint axis, expressed in Newton-metres (N·m). In robot dynamics, joint torques are the primary control inputs that drive links through desired trajectories; torque limits constrain the feasible workspace and influence payload capacity, and torque sensing enables compliant and force-controlled interaction.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0044-velocity", "label": "rb 0044 velocity"},
      {"@id": "urn:ngm:class:rb-0045-acceleration", "label": "rb 0045 acceleration"},
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0022-robot-dynamics", "label": "rb 0022 robot dynamics"},
      {"@id": "urn:ngm:class:rb-0064-computed-torque-control", "label": "rb 0064 computed torque control"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0043-torque:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c143f841399443a2a22e66b4d6ee30d938a716182265f01cf64c15ea1685a6f7"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - **Torque** is the rotational equivalent of linear force — a moment acting about a joint axis that accelerates or decelerates a robot link according to Newton's second law for rotation (τ = Iα). In manipulator control, joint torque commands are computed from the robot's dynamic model (rb 0022) using inertia, Coriolis, and gravity terms, then realised by servo motors and actuators.

- ### Semantic Classification
  - owl-class:: robotics:rb0043torque
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Closely coupled to inertia (rb 0041): higher inertia requires greater torque for the same acceleration (rb 0045).
  - Measured by force-torque sensors (rb 0067) for compliant control and collision detection.
  - Computed and commanded by computed-torque control (rb 0064) and optimal control frameworks (rb 0060).

- ### Content
  - ### Primary Definition
  **Torque** - Rotational force about an axis
  - ### Original Content
		- ```
  # RB-0043: Torque

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0043`

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
