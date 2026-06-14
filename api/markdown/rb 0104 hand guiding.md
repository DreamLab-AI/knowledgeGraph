public:: true

# rb 0104 hand guiding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef0616f7ecd1f7c0ca7757fcf4b3c35ad3cb4e4a4171f2e13599835815065cde",
  "@type": "Page",
  "vc:slug": "rb-0104-hand-guiding",
  "title": "rb 0104 hand guiding",
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
      "vc:value": "RB-0104"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0104 hand guiding"
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
  "@id": "urn:ngm:class:rb-0104-hand-guiding",
  "@type": "Class",
  "label": "rb 0104 hand guiding",
  "definition": "Hand guiding is a collaborative robot operation mode in which an operator physically moves the robot arm by direct physical contact, typically through a dedicated hand-guiding device, while the robot's safety systems monitor force, speed, and separation. It is one of four collaborative operation modes defined in ISO/TS 15066 and ISO 10218, enabling intuitive programming-by-demonstration and safe human-robot co-manipulation tasks.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    },
    {
      "@id": "urn:ngm:class:human-robot-interaction",
      "label": "Human Robot Interaction"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0067-force-torque-sensor", "label": "rb 0067 force torque sensor"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0104-hand-guiding:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef0616f7ecd1f7c0ca7757fcf4b3c35ad3cb4e4a4171f2e13599835815065cde"
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
  - **Hand Guiding** is a collaborative robot operation mode in which the operator physically grasps and moves the robot arm directly, guided by force-torque sensing and impedance control, while safety systems enforce speed and force limits per ISO/TS 15066. The technique enables intuitive kinesthetic teaching and direct human co-manipulation during assembly or finishing tasks.

- ### Semantic Classification
  - owl-class:: robotics:HandGuiding
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - partOf:: rb 0103 collaborative operation
  - requires:: rb 0067 force torque sensor, rb 0056 impedance control
  - relatedTo:: rb 0007 collaborative robot, rb 0094 power and force limiting, rb 0105 speed and separation monitoring

- ### Content
  - ### Primary Definition
  **Hand Guiding** - Hand Guiding in robotics systems
  - ### Original Content
		- ```
  # RB-0104: Hand Guiding

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0104`

		  ```

  - ### Hand Generation: Recreating the Complexity of Human Hands
		- The human hand, with its intricate movements and expressiveness, poses a unique challenge for digital recreation. This section highlights projects tackling this complexity.

		  * [URHand](https://frozenburning.github.io/projects/urhand/): A project dedicated to the generation and animation of realistic digital hands.

  - ### Hand Generation: Recreating the Complexity of Human Hands
		- The human hand, with its intricate movements and expressiveness, poses a unique challenge for digital recreation. This section highlights projects tackling this complexity.

		  * [URHand](https://frozenburning.github.io/projects/urhand/): A project dedicated to the generation and animation of realistic digital hands.

			- ### 3.2 **Llama.cpp**
			- **Strengths:**

			- ### 3.2 **Llama.cpp**
			- **Strengths:**

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
