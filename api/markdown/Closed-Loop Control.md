schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Closed-loopControl
legacy_uri:: urn:visionclaw:concept:robotics:closed-loop-control
public:: true

# Closed-Loop Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3",
  "@type": "Page",
  "vc:slug": "closed-loop-control",
  "title": "Closed-Loop Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuator",
      "vc:label": "Actuator"
    },
    {
      "@id": "urn:visionflow:linked:adaptability",
      "vc:label": "Adaptability"
    },
    {
      "@id": "urn:visionflow:linked:controller",
      "vc:label": "Controller"
    },
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:pid-control",
      "vc:label": "PID Control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1001-open-loop-control",
      "vc:label": "RB-1001-open-loop-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1004-adaptive-control",
      "vc:label": "RB-1004-adaptive-control"
    },
    {
      "@id": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "vc:label": "RB-1007-trajectory-generation"
    },
    {
      "@id": "urn:visionflow:linked:rb-1015-kalman-filter",
      "vc:label": "RB-1015-kalman-filter"
    },
    {
      "@id": "urn:visionflow:linked:sensor-system",
      "vc:label": "Sensor System"
    },
    {
      "@id": "urn:visionflow:linked:stability",
      "vc:label": "Stability"
    },
    {
      "@id": "urn:visionflow:owl:class:accuracy",
      "vc:label": "Accuracy"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:control-system",
      "vc:label": "Control System"
    },
    {
      "@id": "urn:visionflow:owl:class:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:owl:class:feedback-mechanism",
      "vc:label": "Feedback Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.98"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7f45aa69e8ab"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-24T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Closed-loopControl"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1002"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Closed-Loop Control"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:robotics:closed-loop-control"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:closed-loop-control"
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
    "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:closed-loop-control",
  "@type": "Class",
  "label": "Closed-Loop Control",
  "definition": "A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:controller",
        "label": "Controller"
      },
      {
        "@id": "urn:ngm:class:sensor-system",
        "label": "Sensor System"
      },
      {
        "@id": "urn:ngm:class:feedback-mechanism",
        "label": "Feedback Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:rb-1007-trajectory-generation",
        "label": "RB-1007-trajectory-generation"
      },
      {
        "@id": "urn:ngm:class:rb-1013-localization",
        "label": "RB-1013-localization"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:pid-control",
        "label": "PID Control"
      },
      {
        "@id": "urn:ngm:class:rb-1004-adaptive-control",
        "label": "RB-1004-adaptive-control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:controller",
        "label": "Controller"
      },
      {
        "@id": "urn:ngm:class:sensor-system",
        "label": "Sensor System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:closed-loop-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuator]]",
      "resolved": "urn:visionflow:linked:actuator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Adaptability]]",
      "resolved": "urn:visionflow:linked:adaptability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Controller]]",
      "resolved": "urn:visionflow:linked:controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[PID Control]]",
      "resolved": "urn:visionflow:linked:pid-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1001-open-loop-control]]",
      "resolved": "urn:visionflow:linked:rb-1001-open-loop-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1004-adaptive-control]]",
      "resolved": "urn:visionflow:linked:rb-1004-adaptive-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1007-trajectory-generation]]",
      "resolved": "urn:visionflow:linked:rb-1007-trajectory-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1015-kalman-filter]]",
      "resolved": "urn:visionflow:linked:rb-1015-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor System]]",
      "resolved": "urn:visionflow:linked:sensor-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stability]]",
      "resolved": "urn:visionflow:linked:stability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accuracy]]",
      "resolved": "urn:visionflow:owl:class:accuracy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control System]]",
      "resolved": "urn:visionflow:owl:class:control-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:owl:class:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feedback Mechanism]]",
      "resolved": "urn:visionflow:owl:class:feedback-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RB-1013-localization]]",
      "resolved": "urn:visionflow:owl:class:rb-1013-localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:df1a0bb515d030f9e0e35c99dbc2b3dd9844452c7b1873c9882424fa1cefbdb3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A control system that uses feedback from sensors to compare the actual output with the desired output and adjusts the control action to minimize error. The system continuously monitors and corrects its behavior.

- ### Semantic Classification
  - owl-class:: robotics:ClosedLoopControl
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Control Theory]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Control System]]
  - requires:: [[Feedback Mechanism]]
  - requires:: [[Sensor System]]
  - requires:: [[Controller]]
  - requires:: [[Actuator]]
  - hasErrorSignal some MeasurementError
  - implements some CorrectionStrategy
  - characterizedBy:: [[Stability]], [[Accuracy]], [[Adaptability]]

  - #### Relationships
  - is-subclass-of:: [[Control System]]
  - contrasts-with:: [[RB-1001-open-loop-control]]
  - uses:: [[Sensor System]], [[Controller]], [[Actuator]]
  - implements:: [[PID Control]], [[RB-1004-adaptive-control]]
  - enables:: [[RB-1013-localization]], [[RB-1007-trajectory-generation]]
  - skos:related:: [[RB-1015-kalman-filter]]

  - **Components**
  - Reference Input (setpoint)
  - Controller (decision maker)
  - Actuator (action taker)
  - Plant (system being controlled)
  - Sensor (measurement)
  - Feedback Loop (error calculation)

  - **Control Strategies**
  - PID Control (Proportional-Integral-Derivative)
  - State-space control
  - Adaptive control
  - Optimal control
  - Robust control

  - **Advantages**
  - Error correction capability
  - Disturbance rejection
  - Adaptive to environmental changes
  - Improved accuracy and stability

  - **Disadvantages**
  - More complex implementation
  - Higher cost (sensors required)
  - Potential instability if poorly tuned
  - Feedback delay effects

  - **Applications**
  - Robot arm position control
  - Mobile robot navigation
  - Autonomous vehicles
  - Industrial process control
  - Collaborative robots (cobots)

  - **Quality Metrics**
  - authority-score:: 0.98
  - completeness:: 0.95
  - accuracy:: 0.96

- ### Provenance
  - sources:: [[Control Theory]], [[ISO 8373:2021]]
  - migration-date:: 2026-04-26T00:00:00Z
