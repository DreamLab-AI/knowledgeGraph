public:: true

# Robot Safety
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a47c6cd4e352b99ca1d167a48314186d7d4216fac680962f180c80e9c4434b76",
  "@type": "Page",
  "vc:slug": "robot-safety",
  "title": "Robot Safety",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
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
      "vc:value": "RB-0086"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot Safety"
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
  "@id": "urn:ngm:class:robot-safety",
  "@type": "Class",
  "label": "Robot Safety",
  "definition": "Robot Safety encompasses the engineering principles, risk assessment methods, and regulatory standards that ensure robotic systems operate without causing harm to humans, other machines, or the environment. It includes functional safety standards (ISO 10218, ISO 13849), collaborative robot (cobot) application requirements, dynamic risk assessment, and the emerging challenges of AI-integrated and autonomous robot deployment in shared workspaces.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"}
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robot-safety:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a47c6cd4e352b99ca1d167a48314186d7d4216fac680962f180c80e9c4434b76"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - Robot Safety encompasses the engineering principles, risk assessment methods, and regulatory standards that ensure robotic systems operate without causing harm to humans, other machines, or the environment. It includes functional safety standards (ISO 10218, ISO 13849), collaborative robot (cobot) application requirements, dynamic risk assessment, and the emerging challenges of AI-integrated and autonomous robot deployment in shared workspaces.

- ### Semantic Classification
  - owl-class:: robotics:RobotSafety
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - requires [[Sensor Fusion]]
  - requires [[Collision Avoidance]]
  - enables [[Human Robot Interaction]]
  - enables [[Robotics]]
  - relatedTo [[Robot Dynamics]]
  - relatedTo [[State Estimation]]

- ### Content
  - ### Original Content
		- ```
  # RB-0086: Robot Safety

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
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0086`

		  ```


  ## Academic Context

  - Brief contextual overview
  - Robot safety is a multidisciplinary field, combining engineering, human factors, and regulatory compliance to ensure safe interaction between humans and robotic systems
  - The field has evolved from rigid, fenced industrial automation to increasingly collaborative and adaptive environments, particularly with the rise of collaborative applications and advanced sensing technologies

  - Key developments and current state
  - The latest revision of ISO 10218 (2025) consolidates safety requirements for both traditional industrial robots and collaborative applications, reflecting the growing integration of robots into shared workspaces
  - The emphasis is shifting from treating robots as inherently collaborative (“cobots”) to focusing on the collaborative nature of the application, enabled by appropriate risk reduction measures and external equipment

  - Academic foundations
  - Rooted in functional safety standards such as ISO 13849 and IEC 62061, with increasing attention to dynamic risk assessment, human-robot interaction, and the integration of digital safety (e.g., cybersecurity, software integrity)

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - The revised ISO 10218-1 and ISO 10218-2 standards are now widely adopted across Europe, providing a presumption of conformity with the EU Machinery Directive and UKCA/CE marking requirements
  - Leading manufacturers and integrators, including Universal Robots, FANUC, and ABB, have updated their systems to comply with the new requirements, often leveraging technologies such as dual check safety (DCS) software and external sensors for enhanced safety

  - Notable organisations and platforms
  - Universal Robots (Denmark, with significant UK presence)
  - FANUC (Japan, with UK operations)
  - ABB (Sweden, with UK operations)
  - UK-based integrators and consultancies, such as Industrial Compliance and Cobots Machinery Safety, are actively supporting compliance and best practice

  - UK and North England examples where relevant
  - In Manchester, the National Graphene Institute and the Manchester Robotics Lab are exploring advanced materials and robotics for safer, more resilient systems
  - Leeds is home to the Leeds Robotics Centre, which focuses on human-robot interaction and collaborative robotics
  - Newcastle’s Centre for Automation and Robotics Research (CARR) is involved in developing and testing safety protocols for industrial and service robots
  - Sheffield’s Advanced Manufacturing Research Centre (AMRC) is a hub for integrating robotics into manufacturing, with a strong emphasis on safety and compliance

  - Technical capabilities and limitations
  - Modern robots can operate in collaborative applications with reduced risk, thanks to advanced sensors, force and pressure monitoring, and real-time risk assessment
  - Limitations include the need for robust validation and verification processes, the challenge of ensuring digital integrity (e.g., cybersecurity), and the complexity of integrating third-party AI systems

  - Standards and frameworks
  - ISO 10218-1:2025 and ISO 10218-2:2025 provide comprehensive safety requirements for industrial robots and their applications
  - The standards cover significant hazards, hazardous situations, and hazardous events, with a focus on risk assessment and mitigation
  - The standards do not cover hazards related to severe conditions, underground use, hygienic requirements, nuclear environments, potentially explosive environments, mobility when robots are fixed to or part of mobile platforms, environments with ionizing and non-ionizing radiation, handling loads that can lead to dangerous situations, handling or lifting or transporting people, or when the public, all ages, or non-working adults have access

  ## Research & Literature

  - Key academic papers and sources
  - Nelson Shea, R., et al. (2025). "Revised Industrial Robot Safety Standard: My Personal Highlights." EngineerZone Spotlight. https://ez.analog.com/ez-blogs/b/engineerzone-spotlight/posts/the-revised-industrial-robot-safety-standard-my-personal-highlights
  - Industrial Compliance. (2025). "Navigating Upcoming Changes to Cobot Safety Regulations." https://industrial-compliance.co.uk/navigating-upcoming-changes-to-cobot-safety-regulations/
  - Cobots Machinery Safety. (2025). "ISO 10218-2 Robot Standard Update." https://www.cobotsmachinerysafety.co.uk/10218-2-update
  - Intertek. (2025). "Changes to Robots – How the New Framework Addresses ...". https://www.intertek.com/blog/2025/07-17-changes-to-robots-part-1/
  - ISO. (2025). "ISO 10218-1:2025 - Robotics — Safety requirements — Part 1." https://www.iso.org/standard/73933.html
  - Robotics Tomorrow. (2025). "Humanoids - Safety Standards for the Next Wave of Robots." https://www.roboticstomorrow.com/article/2025/10/humanoids-safety-standards-for-the-next-wave-of-robots-/25631/
  - Universal Robots. (2025). "Safety Standards." https://www.universal-robots.com/articles/ur/safety/safety-standards/
  - Loughborough University. (2025). "Clearer rules needed to keep home care robots safe, ethical and ...". https://www.lboro.ac.uk/media-centre/press-releases/2025/july/new-rules-needed-keep-home-care-robots-safe/

  - Ongoing research directions
  - Dynamic risk assessment and real-time safety monitoring
  - Integration of AI and machine learning for adaptive safety
  - Cybersecurity and digital integrity in robotic systems
  - Human-robot interaction and collaborative robotics
  - Safety standards for home care and service robots

  ## UK Context

  - British contributions and implementations
  - The UK has been a key contributor to the development of international safety standards, with experts from the Health and Safety Executive (HSE) and academic institutions participating in ISO working groups
  - UK-based consultancies and integrators are at the forefront of implementing and supporting the new standards, ensuring compliance and best practice

  - North England innovation hubs (if relevant)
  - Manchester: National Graphene Institute, Manchester Robotics Lab
  - Leeds: Leeds Robotics Centre
  - Newcastle: Centre for Automation and Robotics Research (CARR)
  - Sheffield: Advanced Manufacturing Research Centre (AMRC)

  - Regional case studies
  - Manchester Robotics Lab has developed a collaborative robot system for material handling, with a focus on safety and efficiency
  - Leeds Robotics Centre has implemented a collaborative robot in a manufacturing setting, using advanced sensors and real-time risk assessment
  - Newcastle’s CARR has tested and validated safety protocols for industrial and service robots, with a focus on human-robot interaction
  - Sheffield’s AMRC has integrated robotics into manufacturing processes, with a strong emphasis on safety and compliance

  ## Future Directions

  - Emerging trends and developments
  - Increased use of AI and machine learning for adaptive safety
  - Greater integration of digital safety (cybersecurity, software integrity)
  - Expansion of collaborative robotics into new sectors, such as healthcare and home care
  - Development of safety standards for home care and service robots

  - Anticipated challenges
  - Ensuring robust validation and verification processes
  - Addressing the complexity of integrating third-party AI systems
  - Maintaining digital integrity and cybersecurity
  - Adapting to the evolving regulatory landscape

  - Research priorities
  - Dynamic risk assessment and real-time safety monitoring
  - Integration of AI and machine learning for adaptive safety
  - Cybersecurity and digital integrity in robotic systems
  - Human-robot interaction and collaborative robotics
  - Safety standards for home care and service robots

  ## References

  1. Nelson Shea, R., et al. (2025). "Revised Industrial Robot Safety Standard: My Personal Highlights." EngineerZone Spotlight. https://ez.analog.com/ez-blogs/b/engineerzone-spotlight/posts/the-revised-industrial-robot-safety-standard-my-personal-highlights
  2. Industrial Compliance. (2025). "Navigating Upcoming Changes to Cobot Safety Regulations." https://industrial-compliance.co.uk/navigating-upcoming-changes-to-cobot-safety-regulations/
  3. Cobots Machinery Safety. (2025). "ISO 10218-2 Robot Standard Update." https://www.cobotsmachinerysafety.co.uk/10218-2-update
  4. Intertek. (2025). "Changes to Robots – How the New Framework Addresses ...". https://www.intertek.com/blog/2025/07-17-changes-to-robots-part-1/
  5. ISO. (2025). "ISO 10218-1:2025 - Robotics — Safety requirements — Part 1." https://www.iso.org/standard/73933.html
  6. Robotics Tomorrow. (2025). "Humanoids - Safety Standards for the Next Wave of Robots." https://www.roboticstomorrow.com/article/2025/10/humanoids-safety-standards-for-the-next-wave-of-robots-/25631/
  7. Universal Robots. (2025). "Safety Standards." https://www.universal-robots.com/articles/ur/safety/safety-standards/
  8. Loughborough University. (2025). "Clearer rules needed to keep home care robots safe, ethical and ...". https://www.lboro.ac.uk/media-centre/press-releases/2025/july/new-rules-needed-keep-home-care-robots-safe/


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  ### Relationships
  - is-subclass-of:: [[Robotics]]

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
