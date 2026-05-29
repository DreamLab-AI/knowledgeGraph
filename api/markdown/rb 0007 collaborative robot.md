public:: true

# rb 0007 collaborative robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d5dc84ee93458abbae87d636969132d198aad2206b24ad0f2c1f94e5863be97",
  "@type": "Page",
  "vc:slug": "rb-0007-collaborative-robot",
  "title": "rb 0007 collaborative robot",
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
      "vc:value": "RB-0007"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0007 collaborative robot"
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
  "@id": "urn:ngm:class:rb-0007-collaborative-robot",
  "@type": "Class",
  "label": "rb 0007 collaborative robot",
  "definition": "A collaborative robot (cobot) is an industrial robot designed and certified to work in direct physical proximity with human operators within a shared workspace, without requiring conventional hard safety guarding. Defined under ISO/TS 15066, cobots implement one or more of four collaborative operation modes — safety-rated monitored stop, hand guiding, speed-and-separation monitoring, and power-and-force limiting — each constraining robot behaviour so that human contact does not result in injury. Cobots typically feature lightweight, rounded structures, intrinsic force/torque sensing, and redundant safety-rated control architectures compliant with ISO 10218-1/-2.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:industrial-robot",
      "label": "Industrial Robot"
    }
  ],
  "quality": 0.7,
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"},
      {"@id": "urn:ngm:class:rb-0093-speed-limitation", "label": "rb 0093 speed limitation"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0105-speed-and-separation-monitoring", "label": "rb 0105 speed and separation monitoring"},
      {"@id": "urn:ngm:class:robo-human-robot-interaction", "label": "Human-Robot Interaction"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0007-collaborative-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1d5dc84ee93458abbae87d636969132d198aad2206b24ad0f2c1f94e5863be97"
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
  - **Collaborative Robot** (RB-0007, cobot) is an industrial robot designed for direct physical interaction with humans in a shared workspace, certified under ISO/TS 15066. It implements one or more collaborative operation modes (safety-rated monitored stop, hand guiding, speed-and-separation monitoring, power-and-force limiting) to bound collision forces within biomechanically safe thresholds. Unlike traditional industrial robots, cobots operate without physical guarding when humans are present.

- ### Semantic Classification
  - owl-class:: robotics:rb0007collaborativerobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - implements:: rb 0103 collaborative operation, rb 0093 speed limitation, rb 0094 power and force limiting
  - relatedTo:: rb 0056 impedance control, rb 0105 speed and separation monitoring, Human-Robot Interaction
  - standardizedBy:: ISO TS 15066, rb 0087 safety standard
  - requires:: rb 0089 risk assessment

- ### Content
  - ### Primary Definition
  **Collaborative Robot** (RB-0007) is distinguished from conventional industrial robots by its safety architecture rather than mechanical form. A cobot must demonstrate, through risk assessment under ISO 10218-1/-2 and application-specific assessment under ISO/TS 15066, that contact with a human under its intended operating modes does not produce forces or pressures exceeding the biomechanical limits tabulated in Annex A of ISO/TS 15066.

  In practice, cobots achieve this through a combination of: (a) power-and-force limiting via torque-sensor or current-based contact detection, (b) speed limitation that caps TCP velocity when a human is within a monitored zone, and (c) mechanical design features (low inertia, rounded surfaces, no pinch points) that reduce injury potential. Impedance control (RB-0056) is frequently used as the underlying control strategy because it naturally yields to external contact forces.
  - ### Original Content
		- ```
  # RB-0007: Collaborative Robot

  #### Key Characteristics
  1. Core property of robotics systems
		  2. Standardised definition across implementations
		  3. Measurable and verifiable attributes
		  4. Essential for safety and performance
		  5. Industry-wide recognition and adoption

		  ## Formal Ontology (OWL Functional Syntax)


		  ## Relationships

		  ### Parent Classes
		  - `IndustrialRobot`: Primary classification

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0007`

		  ```

  #### Standards and References
  ### Primary Standards
		  1. **ISO/TS 15066:2016**: Primary reference standard
		  2. **ISO 8373:2021**: Robotics vocabulary
		  3. **Related IEEE standards**: Implementation guidelines

		  ## Validation Criteria

		  ### Conformance Requirements
		  1. ✓ Meets ISO/TS 15066:2016 requirements
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
