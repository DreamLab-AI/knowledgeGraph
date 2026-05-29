public:: true

# rb 0090 emergency stop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b8a03436224ff61745021029e8954e850e618732d3f0b8d17aa4d0a3fa50368",
  "@type": "Page",
  "vc:slug": "rb-0090-emergency-stop",
  "title": "rb 0090 emergency stop",
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
      "vc:value": "RB-0090"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0090 emergency stop"
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
  "@id": "urn:ngm:class:rb-0090-emergency-stop",
  "@type": "Class",
  "label": "rb 0090 emergency stop",
  "definition": "An Emergency Stop (E-stop) is a safety function that immediately removes power or halts the motion of a robot system upon activation, bringing the robot to a controlled or uncontrolled halt to prevent injury or damage. Defined under ISO 10218 and IEC 60204-1, it is a hardwired, independently monitored stop category (typically Stop Category 0 or 1) that takes priority over all other controls. E-stops must be clearly marked, accessible, and self-latching so that the robot cannot restart until the stop is deliberately reset.",
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
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"},
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"},
      {"@id": "urn:ngm:class:rb-0095-safety-zone", "label": "rb 0095 safety zone"},
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R4SemanticRelation"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0090-emergency-stop:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b8a03436224ff61745021029e8954e850e618732d3f0b8d17aa4d0a3fa50368"
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
  - An Emergency Stop (E-stop) is a mandatory safety function that immediately removes power or arrests robot motion upon activation, preventing injury to personnel or damage to equipment. Specified in ISO 10218-1/-2 and IEC 60204-1, it is a hardwired, independently monitored circuit classified as Stop Category 0 (immediate power removal) or Category 1 (controlled deceleration then power removal). The actuator must be clearly identifiable, readily accessible, and self-latching so the system cannot resume operation without a deliberate reset action.
  - E-stops differ from protective stops and safety-rated monitored stops in that they are operator-initiated, non-programmable safety functions. In collaborative robot deployments, the E-stop requirement is complemented by power-and-force limiting and speed limitation measures to address different hazard scenarios.

- ### Semantic Classification
  - owl-class:: robotics:EmergencyStop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Closely related to protective stop (rb 0092) and safety-rated monitored stop (rb 0091); governed by ISO 10218 and functional safety frameworks.

- ### Content
  - ### Primary Definition
  **Emergency Stop** - Emergency Stop in robotics systems
  - ### Original Content
		- ```
  # RB-0090: Emergency Stop

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0090`

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
