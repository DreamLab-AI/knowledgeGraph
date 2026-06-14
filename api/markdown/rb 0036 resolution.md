public:: true

# rb 0036 resolution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec01c12da3af923557af163b0267d04535571fba804a1ce32ac416846cf80ddc",
  "@type": "Page",
  "vc:slug": "rb-0036-resolution",
  "title": "rb 0036 resolution",
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
      "vc:value": "RB-0036"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0036 resolution"
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
  "@id": "urn:ngm:class:rb-0036-resolution",
  "@type": "Class",
  "label": "rb 0036 resolution",
  "definition": "Resolution, as defined by ISO 8373, is the smallest increment of motion or measurement that a robot system can distinguish or command. For manipulators it typically refers to the minimum step size achievable in Cartesian or joint space; for sensors it denotes the smallest detectable change in the measured quantity. Resolution is distinct from accuracy and repeatability, and it places a fundamental lower bound on the precision of both positioning and perception tasks.",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0035-accuracy", "label": "rb 0035 accuracy"},
      {"@id": "urn:ngm:class:rb-0034-repeatability", "label": "rb 0034 repeatability"},
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"},
      {"@id": "urn:ngm:class:rb-0072-encoder", "label": "rb 0072 encoder"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0040-backlash", "label": "rb 0040 backlash"},
      {"@id": "urn:ngm:class:rb-0026-robot-joint", "label": "rb 0026 robot joint"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0054-position-control", "label": "rb 0054 position control"},
      {"@id": "urn:ngm:class:rb-0032-manipulability", "label": "rb 0032 manipulability"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0036-resolution:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ec01c12da3af923557af163b0267d04535571fba804a1ce32ac416846cf80ddc"
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
  Resolution (ISO 8373) is the smallest increment of motion or measurement that a robot system can distinguish or command. For manipulators, resolution is typically expressed in millimetres or microradians and is determined by the encoder bit-depth, gear ratio, and drive electronics; for sensors it is the minimum detectable change in the measured quantity. Resolution places an absolute lower bound on positioning and perception precision that neither calibration nor software compensation can overcome.

  Resolution, accuracy, and repeatability are distinct but interrelated performance metrics. A system may have high resolution but poor accuracy (systematic error) or good accuracy but low repeatability (stochastic error). Understanding all three is essential when specifying robot cells for tasks with tight dimensional tolerances.

- ### Semantic Classification
  - owl-class:: robotics:Resolution
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to: rb 0035 accuracy, rb 0034 repeatability, rb 0023 degrees of freedom, rb 0072 encoder
  - Depends on: rb 0040 backlash, rb 0026 robot joint
  - Supports: rb 0054 position control, rb 0032 manipulability

- ### Content
  - ### Primary Definition
  **Resolution** - Smallest incremental motion achievable by robot
  - ### Original Content
		- ```
  # RB-0036: Resolution

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0036`

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
