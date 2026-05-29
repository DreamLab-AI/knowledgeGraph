public:: true

# rb 0103 collaborative operation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5cccb3dfd396d281e24f42f4cc501db50f046f90ac4b000bc60333c8a8bcea56",
  "@type": "Page",
  "vc:slug": "rb-0103-collaborative-operation",
  "title": "rb 0103 collaborative operation",
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
      "vc:value": "RB-0103"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0103 collaborative operation"
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
  "@id": "urn:ngm:class:rb-0103-collaborative-operation",
  "@type": "Class",
  "label": "rb 0103 collaborative operation",
  "definition": "Collaborative operation is a mode of robotic system use in which a robot and one or more human operators work together within a shared workspace, as defined in ISO/TS 15066 and ISO 10218. It encompasses the specific operating conditions, safety functions, and interaction patterns that govern the coexistence of humans and robots without a fixed separating safeguard. The concept underpins cobot deployment strategies including hand guiding, speed and separation monitoring, power and force limiting, and safety-rated monitored stop.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-human-robot-interaction",
      "label": "Human-Robot Interaction"
    },
    {
      "@id": "urn:ngm:class:collaborative-operation",
      "label": "Collaborative Operation"
    }
  ],
  "quality": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0104-hand-guiding", "label": "rb 0104 hand guiding"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0103-collaborative-operation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5cccb3dfd396d281e24f42f4cc501db50f046f90ac4b000bc60333c8a8bcea56"
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
  - ### Primary Definition
  Collaborative operation (RB-0103) is the ISO/TS 15066-defined mode in which a robot and human share workspace without fixed separating safeguards. It requires formal risk assessment and implementation of one or more collaborative functions: safety-rated monitored stop, hand guiding, speed and separation monitoring, or power and force limiting.

- ### Semantic Classification
  - owl-class:: robotics:rb0103collaborativeoperation
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: [[rb 0089 risk assessment]], [[rb 0094 power and force limiting]], [[rb 0091 safety rated monitored stop]]
  - Standardized by: [[ISO TS 15066]], [[ISO 10218]]
  - Has part: [[rb 0104 hand guiding]], [[rb 0105 speed and separation monitoring]]
  - Related to: [[rb 0007 collaborative robot]], [[Cobot Safety Levels]]

- ### Content
  - ### Primary Definition
  **Collaborative Operation** - Collaborative Operation in robotics systems
  - ### Original Content
		- ```
  # RB-0103: Collaborative Operation

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0103`

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
