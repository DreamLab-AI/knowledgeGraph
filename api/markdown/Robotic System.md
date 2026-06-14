public:: true
alias:: RoboticSystem

# Robotic System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a1a3d9a3c62e2ae7536c014373e95cb9ad3c32d505b040ab23731d82487d1985",
  "@type": "Page",
  "vc:slug": "robotic-system",
  "title": "Robotic System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9511"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robotic System"
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
  "@id": "urn:ngm:class:robotic-system",
  "@type": "Class",
  "label": "Robotic System",
  "definition": "An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robo Robot Type"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:autonomous-robot",
      "label": "Autonomous Robot"
    },
    {
      "@id": "urn:ngm:class:robotic-platform",
      "label": "Robotic Platform"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Control"
      },
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      },
      {
        "@id": "urn:ngm:class:robot-controller",
        "label": "Robot Controller"
      },
      {
        "@id": "urn:ngm:class:power-supply-unit",
        "label": "Power Supply Unit"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      },
      {
        "@id": "urn:ngm:class:localisation-and-mapping",
        "label": "Localisation and Mapping"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robotic-telepresence",
        "label": "Robotic Telepresence"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:wireless-communication",
        "label": "Wireless Communication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:collaborative-robotics",
        "label": "Collaborative Robotics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:virtual-agent",
        "label": "Virtual Agent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:mechatronics",
        "label": "Mechatronics"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robotic-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a1a3d9a3c62e2ae7536c014373e95cb9ad3c32d505b040ab23731d82487d1985"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - An integrated assembly of mechanical, electronic, and computational subsystems — including actuators, sensors, a control architecture, and software — that perceives its environment and executes physical tasks autonomously or under remote human direction, spanning industrial, collaborative, and telepresence applications.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:RoboticSystem
  - owl-role:: concept

- ### Relationships
  - Has Part: [[Actuator]]
  - Has Part: [[Sensor Fusion]]
  - Has Part: [[Motion Control]]
  - Uses: [[Robot Operating System]]
  - Uses: [[Computer Vision]]
  - Related To: [[Robotic Telepresence]]
  - Related To: [[Human Robot Interaction]]

- ### Content

  ## Overview

  Robotic System represents an abstract concept in the telecollaboration ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
