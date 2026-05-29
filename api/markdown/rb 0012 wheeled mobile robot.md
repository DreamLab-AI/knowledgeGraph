public:: true

# rb 0012 wheeled mobile robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1bdd3a954c6aeab7363bd38d4a8cb24b6c13517346a5b4fab1380ce3decfdedd",
  "@type": "Page",
  "vc:slug": "rb-0012-wheeled-mobile-robot",
  "title": "rb 0012 wheeled mobile robot",
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
      "vc:value": "RB-0012"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0012 wheeled mobile robot"
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
  "@id": "urn:ngm:class:rb-0012-wheeled-mobile-robot",
  "@type": "Class",
  "label": "rb 0012 wheeled mobile robot",
  "definition": "A wheeled mobile robot (WMR) is a ground-based autonomous or semi-autonomous robot that uses wheels for locomotion. WMRs range from differential-drive platforms to omnidirectional holonomic designs; they rely on odometry for dead-reckoning, SLAM for map building, and path-planning algorithms for autonomous navigation in structured or semi-structured environments.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:mobile-robot",
      "label": "Mobile Robot"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:differential-drive-robot", "label": "Differential Drive Robot"},
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"},
      {"@id": "urn:ngm:class:wheeled-mobile-robot", "label": "Wheeled Mobile Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:rb-0075-range-finder", "label": "rb 0075 range finder"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0012-wheeled-mobile-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1bdd3a954c6aeab7363bd38d4a8cb24b6c13517346a5b4fab1380ce3decfdedd"
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
  - A **wheeled mobile robot** uses one or more wheels for planar locomotion and is the dominant platform for indoor and logistics autonomy. Differential-drive WMRs steer by varying relative wheel speeds; omnidirectional designs (mecanum or omni wheels) move in any direction without turning. Navigation stacks combine wheel odometry with SLAM (using LiDAR or range finders) and path planners to operate safely under standards such as ISO 3691-4.

- ### Semantic Classification
  - owl-class:: robotics:rb0012wheeledmobilerobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Relies on range finders (rb 0075) and SLAM for environment mapping and localisation.
  - Path planning and autonomous navigation are prerequisite capabilities for safe deployment.
  - Governed by ISO 3691-4:2020 for industrial automated guided vehicles (AGVs).

- ### Content
  - ### Primary Definition
  **Wheeled Mobile Robot** - Wheeled Mobile Robot in robotics systems
  - ### Original Content
		- ```
  # RB-0012: Wheeled Mobile Robot

  #### Key Characteristics
  1. Core property of robotics systems
		  2. Standardised definition across implementations
		  3. Measurable and verifiable attributes
		  4. Essential for safety and performance
		  5. Industry-wide recognition and adoption

		  ## Formal Ontology (OWL Functional Syntax)


		  ## Relationships

		  ### Parent Classes
		  - `MobileRobot`: Primary classification

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0012`

		  ```

  #### Standards and References
  ### Primary Standards
		  1. **ISO 3691-4:2020**: Primary reference standard
		  2. **ISO 8373:2021**: Robotics vocabulary
		  3. **Related IEEE standards**: Implementation guidelines

		  ## Validation Criteria

		  ### Conformance Requirements
		  1. ✓ Meets ISO 3691-4:2020 requirements
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
