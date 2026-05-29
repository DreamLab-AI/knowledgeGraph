public:: true

# rb 0034 repeatability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:30c6ffd9b5e7a46aff9c2207efc9763998678677269df0b4ec789ea25f692ccb",
  "@type": "Page",
  "vc:slug": "rb-0034-repeatability",
  "title": "rb 0034 repeatability",
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
      "vc:value": "RB-0034"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0034 repeatability"
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
  "@id": "urn:ngm:class:rb-0034-repeatability",
  "@type": "Class",
  "label": "rb 0034 repeatability",
  "definition": "Repeatability is a key performance metric of robot manipulators that quantifies the closeness of agreement between successive commanded returns to the same target position or pose, measured under identical conditions. It is formally defined in ISO 9283 as the radius of a sphere enclosing a specified percentage of attained positions from repeated attempts. Repeatability is distinct from accuracy — a robot may be highly repeatable but systematically offset from the commanded target — and is critical for applications such as assembly, welding, and precision manufacturing.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0035-accuracy", "label": "rb 0035 accuracy"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:precision", "label": "Precision"},
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"},
      {"@id": "urn:ngm:class:performance-metrics", "label": "Performance Metrics"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0047-feedback-control", "label": "rb 0047 feedback control"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rb-0036-resolution", "label": "rb 0036 resolution"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0034-repeatability:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:30c6ffd9b5e7a46aff9c2207efc9763998678677269df0b4ec789ea25f692ccb"
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
  Repeatability (RB-0034) is the ISO 9283-defined metric expressing how closely a robot returns to the same commanded position or orientation on repeated attempts under identical conditions. Measured as the radius RP of the sphere that contains 95% of attained positions, it is a direct function of mechanical compliance, backlash, controller resolution, and thermal effects. Repeatability is typically in the range 0.01–0.1 mm for precision industrial arms and is the dominant specification criterion for assembly and welding tasks.

- ### Semantic Classification
  - owl-class:: robotics:Repeatability
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Contrasts with: [[rb 0035 accuracy]]
  - Related to: [[Precision]], [[Calibration]], [[Performance Metrics]]
  - Depends on: [[rb 0021 robot kinematics]], [[rb 0047 feedback control]]
  - Part of: [[rb 0036 resolution]]

- ### Content
  - ### Primary Definition
  **Repeatability** - Precision of returning to same position repeatedly
  - ### Original Content
		- ```
  # RB-0034: Repeatability

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0034`

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
