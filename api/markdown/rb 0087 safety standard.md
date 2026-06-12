public:: true

# rb 0087 safety standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f5616b6bf9eefab3b7bd006c5f3771c4d122ea9f04c883fccac8ecc84ecb4f5b",
  "@type": "Page",
  "vc:slug": "rb-0087-safety-standard",
  "title": "rb 0087 safety standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:nvidia-omniverse",
      "vc:label": "NVIDIA Omniverse"
    },
    {
      "@id": "urn:visionflow:owl:class:people",
      "vc:label": "PEOPLE"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0087"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0087 safety standard"
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
  "@id": "urn:ngm:class:rb-0087-safety-standard",
  "@type": "Class",
  "label": "rb 0087 safety standard",
  "definition": "A safety standard in robotics is a normative document, published by a recognised standards body, that specifies requirements and guidelines to achieve acceptable levels of safety for robot systems, their components, and their operating environments. Key robotics safety standards include ISO 10218-1/2 for industrial robots, ISO/TS 15066 for collaborative operation, and ISO 13482 for personal care robots. Such standards define hazard categories, risk assessment methodology, required safety functions, performance levels, and verification procedures that manufacturers and system integrators must satisfy before deployment.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:robot-standard",
      "label": "Robot Standard"
    }
  ],
  "quality": 0.7,
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rb-0088-iso-13482-compliance", "label": "rb 0088 iso 13482 compliance"},
      {"@id": "urn:ngm:class:rb-0100-safety-integrity-level", "label": "rb 0100 safety integrity level"},
      {"@id": "urn:ngm:class:rb-0101-performance-level", "label": "rb 0101 performance level"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iso-ts-15066", "label": "ISO TS 15066"},
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticMatch"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0087-safety-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f5616b6bf9eefab3b7bd006c5f3771c4d122ea9f04c883fccac8ecc84ecb4f5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[NVIDIA Omniverse Platform]]",
      "resolved": "urn:visionflow:owl:class:nvidia-omniverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Domain Expert Contact Index]]",
      "resolved": "urn:visionflow:owl:class:people",
      "kind": "ResolvedLink"
    },
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
  A safety standard (RB-0087) is a normative document specifying requirements, test methods, and performance criteria that a robot system must satisfy to operate safely. The robotics safety standards hierarchy spans type-A (basic principles, e.g. ISO 12100), type-B (generic safety aspects), and type-C (machine-specific) standards. For robots, the principal type-C standards are ISO 10218-1/2 (industrial robots) and ISO/TS 15066 (collaborative operation); for service robots, ISO 13482 applies.

- ### Semantic Classification
  - owl-class:: robotics:SafetyStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Has part: [[rb 0088 iso 13482 compliance]], [[rb 0100 safety integrity level]], [[rb 0101 performance level]]
  - Requires: [[rb 0089 risk assessment]]
  - Related to: [[ISO 10218]], [[ISO TS 15066]], [[IEC 61508]]
  - Supports: [[Functional Safety]], [[Robot Safety]]

- ### Content
  - ### Primary Definition
  **Safety Standard** - Safety Standard in robotics systems
  - ### Original Content
		- ```
  # RB-0087: Safety Standard

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0087`

		  ```

  - ## Funding
  - Collaborators
		- Ross Verrall [[Domain Expert Contact Index]] at [[NVIDIA Omniverse Platform]]has suggested applying for the Inception grant to assist with our bid.
		- Sections to fill:
		- Source of funding
		- Amount
		- Status (applied, granted)
		- Breakdown of labour costs and overhead allocations.
		- Sections to fill:
		- **Advice**: Ensure labour costs are justifiable and in line with standard industry practices.
  - Materials_Costs
  - Capital_Usage
		- Usage of capital items/equipment.

  - ## Funding
  - Collaborators
		- Ross Verrall [[Domain Expert Contact Index]] at [[NVIDIA Omniverse Platform]]has suggested applying for the Inception grant to assist with our bid.
		- Sections to fill:
		- Breakdown of labour costs and overhead allocations.
		- Sections to fill:
		- **Advice**: Ensure labour costs are justifiable and in line with standard industry practices.

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
