public:: true

# Control Loop

```json
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:control-loop", "@type": "Page", "title": "Control Loop", "vc:slug": "control-loop", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:control-loop",
  "@type": "Class",
  "label": "Control Loop",
  "definition": "A control loop is the cyclical process by which a system measures its current state, compares it against a desired set point and applies corrective action to reduce the difference. Closed-loop control uses feedback from sensors to continuously regulate an actuator, while open-loop control acts without such feedback. Control loops are foundational to automation, cyber-physical systems and the reconciliation pattern used in infrastructure orchestration.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-system",
      "label": "Control System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      },
      {
        "@id": "urn:ngm:class:process-control",
        "label": "Process Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A control loop is the cyclical process by which a system measures its current state, compares it against a desired set point and applies corrective action to reduce the difference. Closed-loop control uses feedback from sensors to continuously regulate an actuator, while open-loop control acts without such feedback. Control loops are foundational to automation, cyber-physical systems and the reconciliation pattern used in infrastructure orchestration.
  - Related concepts: [[Control System]], [[Feedback Loop]], [[Sensor]], [[Actuator]], [[Automation]], [[Process Control]]
- ### Overview
  - The control loop is one of the oldest and most pervasive abstractions in engineering, from a thermostat regulating temperature to a robot maintaining balance. In modern infrastructure the same sense-decide-act pattern reappears as the reconciliation loop that drives declarative orchestration toward a desired state.
- ### Mechanisms
  - Sensing the current state of the controlled process
  - Comparing measured state against a set point to compute error
  - Computing a corrective action, often via a controller such as a PID controller
  - Actuating the change and repeating the cycle continuously
- ### Applications
  - Industrial process and motion control
  - Robotics balance and trajectory control
  - Building climate and energy management
  - Declarative reconciliation in orchestration systems
- ### Relationships
  - subClassOf:: [[Control System]]
  - partOf:: [[Control System]]
  - hasPart:: [[Feedback Loop]]
  - hasPart:: [[Sensor]]
  - hasPart:: [[Actuator]]
  - implements:: [[Automation]]
  - implements:: [[Process Control]]
  - uses:: [[Sensor]]
  - uses:: [[Actuator]]
  - uses:: [[State Estimation]]
  - requires:: [[Feedback Loop]]
  - enables:: [[Automation]]
  - enables:: [[Cyber Physical Systems]]
  - dependsOn:: [[Feedback Loop]]
  - relatedTo:: [[Control System]]
  - relatedTo:: [[Automation]]
  - relatedTo:: [[Cyber Physical Systems]]
  - relatedTo:: [[Digital Twin]]
  - bridgesTo:: [[Cyber Physical Systems]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
