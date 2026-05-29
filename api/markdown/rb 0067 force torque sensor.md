public:: true

# rb 0067 force torque sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:759e61aed0b4916f0e2f0149c9129feecfc0a5a16a5e38cce5f6a6b959215146",
  "@type": "Page",
  "vc:slug": "rb-0067-force-torque-sensor",
  "title": "rb 0067 force torque sensor",
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
      "vc:value": "RB-0067"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0067 force torque sensor"
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
  "@id": "urn:ngm:class:rb-0067-force-torque-sensor",
  "@type": "Class",
  "label": "rb 0067 force torque sensor",
  "definition": "A force-torque sensor (FT sensor) is a transducer mounted at a robot's wrist or tool centre point that simultaneously measures all six components of mechanical load: three orthogonal forces (Fx, Fy, Fz) and three orthogonal torques (Tx, Ty, Tz). These measurements enable the robot controller to monitor contact forces in real time, supporting force-controlled assembly, surface-following tasks, human-robot contact detection, and safety-critical power-and-force limiting under ISO/TS 15066. FT sensors are the primary feedback device for impedance and admittance control strategies.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:force-torque-sensor",
      "label": "Force Torque Sensor"
    }
  ],
  "quality": 0.7,
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"},
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0070-tactile-sensing", "label": "rb 0070 tactile sensing"},
      {"@id": "urn:ngm:class:rb-0094-power-and-force-limiting", "label": "rb 0094 power and force limiting"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"},
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2DirectParent"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0067-force-torque-sensor:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:759e61aed0b4916f0e2f0149c9129feecfc0a5a16a5e38cce5f6a6b959215146"
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
  - A force-torque (FT) sensor is a wrist-mounted transducer that measures all six mechanical load components — three forces and three torques — in real time. These measurements close the loop for force-controlled manipulation, allowing a robot to regulate contact force rather than merely position. FT sensors are essential for compliant assembly, polishing, insertion tasks, and for meeting the power-and-force limiting safety requirements of ISO/TS 15066 in collaborative robot deployments.
  - Common technologies include strain-gauge bridges, piezoelectric elements, and optical transducers. The sensor output feeds directly into impedance and admittance controllers, enabling the robot to behave as a controllable mechanical impedance at the point of contact.

- ### Semantic Classification
  - owl-class:: robotics:rb0067forcetorquesensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Enables force control (rb 0053), impedance control (rb 0056), and admittance control (rb 0057); supports cobot safety-level compliance through power-and-force limiting (rb 0094).

- ### Content
  - ### Primary Definition
  **Force-Torque Sensor** - Force-Torque Sensor in robotics systems
  - ### Original Content
		- ```
  # RB-0067: Force-Torque Sensor

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0067`

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
