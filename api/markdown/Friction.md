schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Friction
legacy_uri:: urn:visionclaw:concept:robotics:friction
public:: true

# Friction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c",
  "@type": "Page",
  "vc:slug": "friction",
  "title": "Friction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:energy-dissipation",
      "vc:label": "Energy Dissipation"
    },
    {
      "@id": "urn:visionflow:linked:energy-efficiency-calculation",
      "vc:label": "Energy Efficiency Calculation"
    },
    {
      "@id": "urn:visionflow:linked:friction-coefficient-estimation",
      "vc:label": "Friction Coefficient Estimation"
    },
    {
      "@id": "urn:visionflow:linked:joint-efficiency",
      "vc:label": "Joint Efficiency"
    },
    {
      "@id": "urn:visionflow:linked:joint-mechanics",
      "vc:label": "Joint Mechanics"
    },
    {
      "@id": "urn:visionflow:linked:lubrication-management",
      "vc:label": "Lubrication Management"
    },
    {
      "@id": "urn:visionflow:linked:motion-accuracy",
      "vc:label": "Motion Accuracy"
    },
    {
      "@id": "urn:visionflow:linked:motor-performance",
      "vc:label": "Motor Performance"
    },
    {
      "@id": "urn:visionflow:linked:physics-modelling",
      "vc:label": "Physics Modelling"
    },
    {
      "@id": "urn:visionflow:linked:wear-prediction",
      "vc:label": "Wear Prediction"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:model-based-control",
      "vc:label": "Model-based Control"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-dynamics",
      "vc:label": "Robot Dynamics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.10"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-ebfda2a81646"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Friction"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0042"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T15:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Friction"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.54"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:robotics:friction"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:friction"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:friction",
  "@type": "Class",
  "label": "Friction",
  "definition": "Friction - The resistive force generated when surfaces slide or attempt to slide relative to one another, characterised by Coulomb friction (kinetic and static coefficients) and viscous damping, significantly impacting Joint Efficiency, Motor Performance, and Motion Accuracy in roboti...",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:physics-modelling",
      "label": "Physics Modelling"
    },
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:friction-coefficient-estimation",
        "label": "Friction Coefficient Estimation"
      },
      {
        "@id": "urn:ngm:class:lubrication-management",
        "label": "Lubrication Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:energy-efficiency-calculation",
        "label": "Energy Efficiency Calculation"
      },
      {
        "@id": "urn:ngm:class:wear-prediction",
        "label": "Wear Prediction"
      },
      {
        "@id": "urn:ngm:class:model-based-control",
        "label": "Model-based Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:energy-dissipation",
        "label": "Energy Dissipation"
      },
      {
        "@id": "urn:ngm:class:joint-mechanics",
        "label": "Joint Mechanics"
      }
    ]
  },
  "quality": 0.54,
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
  "@id": "urn:visionflow:annotation:link-resolutions:friction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Energy Dissipation]]",
      "resolved": "urn:visionflow:linked:energy-dissipation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Energy Efficiency Calculation]]",
      "resolved": "urn:visionflow:linked:energy-efficiency-calculation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Friction Coefficient Estimation]]",
      "resolved": "urn:visionflow:linked:friction-coefficient-estimation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Efficiency]]",
      "resolved": "urn:visionflow:linked:joint-efficiency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Joint Mechanics]]",
      "resolved": "urn:visionflow:linked:joint-mechanics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lubrication Management]]",
      "resolved": "urn:visionflow:linked:lubrication-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Accuracy]]",
      "resolved": "urn:visionflow:linked:motion-accuracy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motor Performance]]",
      "resolved": "urn:visionflow:linked:motor-performance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physics Modelling]]",
      "resolved": "urn:visionflow:linked:physics-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wear Prediction]]",
      "resolved": "urn:visionflow:linked:wear-prediction",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model-based Control]]",
      "resolved": "urn:visionflow:owl:class:model-based-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Dynamics]]",
      "resolved": "urn:visionflow:owl:class:robot-dynamics",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:234c35d21e74b3b5d07084286216838b4f5e03e035fd2eaa8c1e60cad003511c@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - **Friction** - The resistive force generated when surfaces slide or attempt to slide relative to one another, characterised by Coulomb friction (kinetic and static coefficients) and viscous damping, significantly impacting [[Joint Efficiency]], [[Motor Performance]], and [[Motion Accuracy]] in robotic systems.

- ### Semantic Classification
  - owl-class:: robotics:Friction
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Robot Dynamics]], [[Physics Modelling]]
  - is-part-of:: [[Joint Mechanics]], [[Energy Dissipation]]
  - requires:: [[Friction Coefficient Estimation]], [[Lubrication Management]]
  - enables:: [[Model-based Control]], [[Energy Efficiency Calculation]], [[Wear Prediction]]

- ### Content
  - ### Original Content
		- ```
  # RB-0042: Friction

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
		  **Licence**: CC BY 4.0
		  **Namespace**: `https://narrativegoldmine.com/robotics/RB-0042`

		  ```

  - ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

  - ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

  - ## Technical Problem Definition:
		- The specific technical challenges and opportunities the proposed framework addresses include:
		- Evergreen telecollaboration around technical issues
		- Exchange of goods, services, and money within systems, without friction
		- Identity management within virtual spaces
		- Access to information in the extrinsic world from within the tool
		- Federation of instances without overhead (scaling)
		- Seamless access to personal information within and without the collaborative system
		- Ability to take advantage of supporting smart support agents (bots, etc.) throughout
		- Governance, trust, and safeguarding

  - #### Technical problem definition
  - Problems are
		- evergreen telecollaboration around technical issues
		- exchange of good, services, money within systems, without friction
		- identity management within virtual spaces
		- access to information in the extrinsic world from within the tool
		- federation of instances without overhead (scaling)
		- seamless access to personal information within and without the collaborative system
		- ability to take advantage of supporting smart support agents (bots, etc) throughout
		- governance, trust, safeguarding

  - #### Technical problem definition
  - Problems are
		- evergreen telecollaboration around technical issues
		- exchange of good, services, money within systems, without friction
		- identity management within virtual spaces
		- access to information in the extrinsic world from within the tool
		- federation of instances without overhead (scaling)
		- seamless access to personal information within and without the collaborative system
		- ability to take advantage of supporting smart support agents (bots, etc) throughout
		- governance, trust, safeguarding


  ## Metadata

  - **Last Updated**: 2025-11-16
  - **Review Status**: Automated remediation with 2025 context
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

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
