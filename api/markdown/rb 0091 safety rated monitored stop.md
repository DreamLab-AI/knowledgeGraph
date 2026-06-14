public:: true

# rb 0091 safety rated monitored stop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c59537a427d6cfe60f677f0c977750bce7f5576d2e24292093852d39aff014e",
  "@type": "Page",
  "vc:slug": "rb-0091-safety-rated-monitored-stop",
  "title": "rb 0091 safety rated monitored stop",
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
      "vc:value": "RB-0091"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0091 safety rated monitored stop"
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
  "@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop",
  "@type": "Class",
  "label": "rb 0091 safety rated monitored stop",
  "definition": "A safety-rated monitored stop (SRMS) is a robot stopping function in which the robot halts motion while the control system continuously monitors joint positions to verify the robot remains stationary, without removing power to the actuators. Unlike an emergency stop, SRMS allows rapid resumption of operation when the hazardous condition clears, and is central to collaborative robot (cobot) safety architectures defined in ISO 10218 and ISO/TS 15066.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:robot-safety",
      "label": "Robot Safety"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0091-safety-rated-monitored-stop:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c59537a427d6cfe60f677f0c977750bce7f5576d2e24292093852d39aff014e"
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
  - owl-class:: robotics:rb0091safetyratedmonitoredstop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - ### Primary Definition
  **Safety-Rated Monitored Stop** - Safety-Rated Monitored Stop in robotics systems
  - ### Original Content
		- ```
  # RB-0091: Safety-Rated Monitored Stop

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0091`

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
