public:: true

# rb 0030 jacobian matrix
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a8fac46edce30efa4ce17d8c42048934deeef955f79dec05b2de9cce0d5d998",
  "@type": "Page",
  "vc:slug": "rb-0030-jacobian-matrix",
  "title": "rb 0030 jacobian matrix",
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
      "vc:value": "RB-0030"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0030 jacobian matrix"
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
  "@id": "urn:ngm:class:rb-0030-jacobian-matrix",
  "@type": "Class",
  "label": "rb 0030 jacobian matrix",
  "definition": "The Jacobian matrix is a mathematical mapping that relates joint-space velocities to Cartesian end-effector velocities for a robotic manipulator. It is central to differential kinematics, velocity control, force-torque transformation, and singularity analysis; its pseudo-inverse enables computation of joint velocities from desired Cartesian motions in inverse kinematics.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:kinematics",
      "label": "Kinematics"
    }
  ],
  "qualityScore": 0.7,
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0029-inverse-kinematics", "label": "rb 0029 inverse kinematics"},
      {"@id": "urn:ngm:class:rb-0028-forward-kinematics", "label": "rb 0028 forward kinematics"},
      {"@id": "urn:ngm:class:rb-0031-singularity", "label": "rb 0031 singularity"},
      {"@id": "urn:ngm:class:rb-0032-manipulability", "label": "rb 0032 manipulability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:rb-0021-robot-kinematics", "label": "rb 0021 robot kinematics"},
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0060-optimal-control", "label": "rb 0060 optimal control"},
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0030-jacobian-matrix:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0a8fac46edce30efa4ce17d8c42048934deeef955f79dec05b2de9cce0d5d998"
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
  - The **Jacobian matrix** J maps joint-space velocities q̇ to end-effector Cartesian velocities ẋ via ẋ = J(q)q̇. Its transpose maps Cartesian forces to joint torques, making it indispensable for force control. The Jacobian is derived analytically from the forward kinematics (rb 0028) and its rank determines manipulability (rb 0032); rank loss signals a kinematic singularity (rb 0031) where the robot loses controllable degrees of freedom.

- ### Semantic Classification
  - owl-class:: robotics:JacobianMatrix
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Used in inverse kinematics (rb 0029) via the pseudo-inverse or damped least-squares methods.
  - Singularity analysis (rb 0031) and manipulability measures (rb 0032) are derived directly from the Jacobian's condition number and determinant.
  - Enables force-torque control by transposing Cartesian force commands into joint torques.

- ### Content
  - ### Primary Definition
  **Jacobian Matrix** - Mapping between joint velocities and end-effector velocities
  - ### Original Content
		- ```
  # RB-0030: Jacobian Matrix

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0030`

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
