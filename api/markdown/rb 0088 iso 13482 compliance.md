public:: true

# rb 0088 iso 13482 compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:56dcdb1a4e2bc61d11899d783603b21db7854e1dbc407b70cb43222b1f056a40",
  "@type": "Page",
  "vc:slug": "rb-0088-iso-13482-compliance",
  "title": "rb 0088 iso 13482 compliance",
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
      "vc:value": "RB-0088"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0088 iso 13482 compliance"
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
  "@id": "urn:ngm:class:rb-0088-iso-13482-compliance",
  "@type": "Class",
  "label": "rb 0088 iso 13482 compliance",
  "definition": "ISO 13482 compliance refers to conformance with ISO 13482:2014, the international safety standard for personal care robots that interact with humans in non-industrial settings. Achieving compliance requires demonstrating that hazards have been identified, risks reduced to acceptable levels via protective measures, and that the robot meets defined performance and safety integrity criteria throughout its operational life.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:functional-safety",
      "label": "Functional Safety"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0100-safety-integrity-level", "label": "rb 0100 safety integrity level"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"},
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"},
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"},
      {"@id": "urn:ngm:class:service-robot", "label": "Service Robot"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0088-iso-13482-compliance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:56dcdb1a4e2bc61d11899d783603b21db7854e1dbc407b70cb43222b1f056a40"
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
  - **ISO 13482 Compliance** denotes conformance with ISO 13482:2014, the international safety standard for personal care robots. It requires systematic hazard identification, risk reduction through protective measures, and documented verification that safety integrity criteria are met across the robot's service life. Unlike industrial robot standards (ISO 10218), it addresses robots deployed directly with vulnerable users in domestic and healthcare environments.

- ### Semantic Classification
  - owl-class:: robotics:ISO13482Compliance
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - requires:: rb 0089 risk assessment, rb 0100 safety integrity level
  - relatedTo:: rb 0087 safety standard, rb 0096 safeguarding, rb 0091 safety rated monitored stop, Service Robot
  - contrastsWith:: ISO 10218

- ### Content
  - ### Primary Definition
  **ISO 13482 Compliance** - ISO 13482 Compliance in robotics systems
  - ### Original Content
		- ```
  # RB-0088: ISO 13482 Compliance

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0088`

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
