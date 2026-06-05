public:: true
alias:: RB-1011-cobot-safety-levels

# Cobot Safety Levels
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6603acf7264abd1764968d5e6ea00f22f1b91dcb3a5d39180ba9eb54b3e063c5",
  "@type": "Page",
  "vc:slug": "cobot-safety-levels",
  "title": "Cobot Safety Levels",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaborative-robotics",
      "vc:label": "Collaborative Robotics"
    },
    {
      "@id": "urn:visionflow:linked:contact-limits",
      "vc:label": "Contact Limits"
    },
    {
      "@id": "urn:visionflow:linked:force-limiting",
      "vc:label": "Force Limiting"
    },
    {
      "@id": "urn:visionflow:linked:human-safety",
      "vc:label": "Human Safety"
    },
    {
      "@id": "urn:visionflow:linked:iso-10218-1",
      "vc:label": "ISO 10218-1"
    },
    {
      "@id": "urn:visionflow:linked:iso-10218-2",
      "vc:label": "ISO 10218-2"
    },
    {
      "@id": "urn:visionflow:linked:iso-ts-15066",
      "vc:label": "ISO/TS 15066"
    },
    {
      "@id": "urn:visionflow:linked:operational-modes",
      "vc:label": "Operational Modes"
    },
    {
      "@id": "urn:visionflow:linked:rb-1004-adaptive-control",
      "vc:label": "RB-1004-adaptive-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1012-trust-in-automation",
      "vc:label": "RB-1012-trust-in-automation"
    },
    {
      "@id": "urn:visionflow:linked:safety-certification",
      "vc:label": "Safety Certification"
    },
    {
      "@id": "urn:visionflow:linked:safety-requirements",
      "vc:label": "Safety Requirements"
    },
    {
      "@id": "urn:visionflow:linked:safety-standard",
      "vc:label": "Safety Standard"
    },
    {
      "@id": "urn:visionflow:linked:safety-standards",
      "vc:label": "Safety Standards"
    },
    {
      "@id": "urn:visionflow:linked:speed-monitoring",
      "vc:label": "Speed Monitoring"
    },
    {
      "@id": "urn:visionflow:owl:class:collaborative-robot",
      "vc:label": "Collaborative Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:human-robot-interaction",
      "vc:label": "Human-Robot Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1011"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cobot Safety Levels"
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
  "@id": "urn:ngm:class:cobot-safety-levels",
  "@type": "Class",
  "label": "Cobot Safety Levels",
  "definition": "Standardized safety classifications and requirements for collaborative robots (cobots) operating in shared workspaces with humans, defining protection measures, risk assessments, and operational modes to ensure safe human-robot interaction according to ISO/TS 15066.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:safety-standard",
        "label": "Safety Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:safety-certification",
        "label": "Safety Certification"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:force-limiting",
        "label": "Force Limiting"
      },
      {
        "@id": "urn:ngm:class:speed-monitoring",
        "label": "Speed Monitoring"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:cobot-safety-levels:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6603acf7264abd1764968d5e6ea00f22f1b91dcb3a5d39180ba9eb54b3e063c5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaborative Robotics]]",
      "resolved": "urn:visionflow:linked:collaborative-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Contact Limits]]",
      "resolved": "urn:visionflow:linked:contact-limits",
      "kind": "StubLink"
    },
    {
      "raw": "[[Force Limiting]]",
      "resolved": "urn:visionflow:linked:force-limiting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Human Safety]]",
      "resolved": "urn:visionflow:linked:human-safety",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 10218-1]]",
      "resolved": "urn:visionflow:linked:iso-10218-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 10218-2]]",
      "resolved": "urn:visionflow:linked:iso-10218-2",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/TS 15066]]",
      "resolved": "urn:visionflow:linked:iso-ts-15066",
      "kind": "StubLink"
    },
    {
      "raw": "[[Operational Modes]]",
      "resolved": "urn:visionflow:linked:operational-modes",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1004-adaptive-control]]",
      "resolved": "urn:visionflow:linked:rb-1004-adaptive-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1012-trust-in-automation]]",
      "resolved": "urn:visionflow:linked:rb-1012-trust-in-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safety Certification]]",
      "resolved": "urn:visionflow:linked:safety-certification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safety Requirements]]",
      "resolved": "urn:visionflow:linked:safety-requirements",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safety Standard]]",
      "resolved": "urn:visionflow:linked:safety-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safety Standards]]",
      "resolved": "urn:visionflow:linked:safety-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Speed Monitoring]]",
      "resolved": "urn:visionflow:linked:speed-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collaborative Robot]]",
      "resolved": "urn:visionflow:owl:class:collaborative-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human-Robot Interaction]]",
      "resolved": "urn:visionflow:owl:class:human-robot-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Assessment]]",
      "resolved": "urn:visionflow:owl:class:risk-assessment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Standardized safety classifications and requirements for collaborative robots (cobots) operating in shared workspaces with humans, defining protection measures, risk assessments, and operational modes to ensure safe human-robot interaction according to ISO/TS 15066.

- ### Semantic Classification
  - owl-class:: robotics:CobotSafetyLevels
  - owl-role:: Specification
  - belongs-to-domain:: [[Robotics]], [[Collaborative Robotics]], [[Safety Standards]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - is-subclass-of:: [[Safety Standard]]
  - requires:: [[Risk Assessment]], [[Safety Certification]]
  - implements:: [[Force Limiting]], [[Speed Monitoring]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Safety Standard]]
  - applies-to:: [[Collaborative Robot]]
  - defines:: [[Safety Requirements]]
  - specifies:: [[Operational Modes]]
  - requires:: [[Risk Assessment]]
  - characterized-by:: [[Human Safety]], [[Contact Limits]]

  - #### Relationships
  - is-subclass-of:: [[Safety Standard]]
  - applies-to:: [[Collaborative Robot]], [[Human-Robot Interaction]]
  - skos:related:: [[RB-1012-trust-in-automation]], [[RB-1004-adaptive-control]]
  - implements:: [[Force Limiting]], [[Speed Monitoring]]
  - requires:: [[Risk Assessment]], [[Safety Certification]]

  - **Four Collaborative Operation Modes (ISO/TS 15066)**
  1. Safety-Rated Monitored Stop
  2. Hand Guiding
  3. Speed and Separation Monitoring
  4. Power and Force Limiting

  - **1. Safety-Rated Monitored Stop**
  - Robot stops when human enters collaborative workspace
  - Robot remains powered but stationary
  - Human can perform tasks in workspace
  - Robot resumes when workspace is clear
  - Use Case: Loading/unloading, inspection

  - **2. Hand Guiding**
  - Operator directly guides robot end-effector
  - Hand-operated device required
  - Reduced speed during guiding
  - Immediate stop capability
  - Use Case: Teaching, setup, adjustment

  - **3. Speed and Separation Monitoring (SSM)**
  - Maintains minimum separation distance
  - Speed reduces as human approaches
  - Stops if minimum distance violated
  - Requires real-time monitoring system
  - Use Case: Assembly, pick-and-place with human nearby

  - **4. Power and Force Limiting (PFL)**
  - Allows intentional contact
  - Limits force and pressure below pain thresholds
  - Inherently safe design or control
  - Most flexible collaboration mode
  - Use Case: Close human-robot collaboration

  - **Biomechanical Limits (ISO/TS 15066)**
  - 29 body regions defined
  - Maximum force limits specified
  - Transient contact (clamping)
  - Quasi-static contact (pinching)
  - Pain threshold as basis

  - **Example Force Limits**
  - Skull: 130 N (transient), 65 N (quasi-static)
  - Face: 65 N (transient), 35 N (quasi-static)
  - Hand/Fingers: 140 N (transient), 60 N (quasi-static)
  - Forearm: 160 N (transient), 80 N (quasi-static)

  - **Safety Features Required**
  - Torque/Force Sensing
  - Collision Detection
  - Emergency Stop Systems
  - Safety-Rated Sensors
  - Redundant Safety Circuits
  - Safe Speed Monitoring
  - Workspace Monitoring

  - **Risk Assessment Process**
  1. Task and Hazard Identification
  2. Risk Evaluation
  3. Safety Measure Implementation
  4. Verification and Validation
  5. Documentation
  6. Ongoing Monitoring

  - **Safety Design Principles**
  - Inherently Safe Design (eliminate hazards)
  - Safety Controls (reduce risks)
  - Protective Measures (guards, sensors)
  - Information for Use (training, warnings)

  - **Validation Requirements**
  - Performance testing
  - Contact force measurements
  - Safety function verification
  - Worst-case scenario testing
  - Documentation and certification

  - **Application Considerations**
  - Task complexity
  - Workspace layout
  - Human exposure time
  - Robot speed and payload
  - Environmental factors
  - Training requirements

  - **Benefits of Compliance**
  - Legal compliance
  - Worker safety
  - Insurance considerations
  - Market acceptance
  - Operational efficiency

  - **Challenges**
  - Balancing safety and productivity
  - Complex risk assessments
  - Varying interpretations of standards
  - Integration with existing systems
  - Maintaining certification

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.97

- ### Provenance
  - sources:: [[ISO/TS 15066]], [[ISO 10218-1]], [[ISO 10218-2]]
  - migration-date:: 2026-04-26T00:00:00Z
