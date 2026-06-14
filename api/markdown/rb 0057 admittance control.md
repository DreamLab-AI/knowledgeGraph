public:: true

# rb 0057 admittance control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79b3fe66ad79b97009bb96ec62c31dc73ebb77d73a67bb5ff024313df0efbc2c",
  "@type": "Page",
  "vc:slug": "rb-0057-admittance-control",
  "title": "rb 0057 admittance control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0057"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0057 admittance control"
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
  "@id": "urn:ngm:class:rb-0057-admittance-control",
  "@type": "Class",
  "label": "rb 0057 admittance control",
  "definition": "Admittance control is an interaction-control strategy in which a robot measures contact forces and torques and converts them into corresponding desired motion (position or velocity) using a virtual mass-spring-damper model. It is the dual of impedance control: the robot senses force input and renders motion output, enabling compliant, safe physical human-robot interaction in collaborative tasks.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:interaction-control",
      "label": "Interaction Control"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:compliance-control", "label": "Compliance Control"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0057-admittance-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79b3fe66ad79b97009bb96ec62c31dc73ebb77d73a67bb5ff024313df0efbc2c"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - ### Primary Definition

- ### Semantic Classification
  - owl-class:: robotics:rb0057admittancecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ### Primary Definition
  **Admittance Control** - Admittance Control in robotics systems
  - ### Original Content
		- ```
  # RB-0057: Admittance Control

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0057`

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
